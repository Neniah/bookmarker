//
document.getElementById('myform').addEventListener('submit', saveBookmark);

//save bookmarks
function saveBookmark(e){
  // get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  var bookmark =  {
    name: siteName,
    url: siteUrl
  }

  //Test if bookmark is null
  if(localStorage.getItem('bookmarks') === null){
    // Init array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else{
    // Git Bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Reset back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Re-fetch bookmarks
  fetchBookmarks();

  e.preventDefault();
}

function deleteBookmark(url){
  // get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  for(var i = 0; i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      //Remove from array
      bookmarks.splice(i, 1);
    }
  }

  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">' +
                                  '<h3>' + name +
                                  ' <a class="btn btn-default" target="_blank" href='+ url +'>Visit</a>' +
                                  ' <a onclick="deleteBookmark(\''+ url +'\')" class="btn btn-danger" href=#>Delete</a>'
                                  '</h3>' +
                                  '</div>';
  }


}
