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

  e.preventDefault();
}
