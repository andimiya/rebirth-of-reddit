
(function(window){

function reqListener(){

  var aww = JSON.parse(this.responseText);

    var articlesHolder = document.createElement('div');
    articlesHolder.className = 'articles-holder';
    document.getElementById('content-container').appendChild(articlesHolder);

  for (var i = 1; i < 30; i++){

    //Only Show Articles with JPGs, not GIFS
    var url = aww.data.children[i].data.preview.images[0].source.url;
    if (url.match(/\.(jpg)/g)) {

      var articleContainer = document.createElement('div');
      articleContainer.className = 'article-container';
      articlesHolder.appendChild(articleContainer);

      //Image
      var image = document.createElement('div');
      image.className = 'item-image';
      url = aww.data.children[i].data.preview.images[0].source.url;
      articleContainer.appendChild(image);
      image.style.backgroundImage = "url(" + url + ")";

      //Article Title
      var articleTitle = document.createElement('div');
      articleTitle.className = 'headline';
      articleTitle.innerHTML = aww.data.children[i].data.title;
      articleContainer.appendChild(articleTitle);

      //Author
      var author = document.createElement('div');
      author.className = 'author';
      author.innerHTML = `by ${aww.data.children[i].data.author}`;
      articleContainer.appendChild(author);

      //Views - Author is the Parent
      var views = document.createElement('span');
      views.className = 'views';
      views.innerHTML = `${aww.data.children[i].data.num_comments} comments`;
      author.appendChild(views);

      //Date - Author is the Parent
      var dateDivCreate = document.createElement('span');
      dateDivCreate.className = 'time-ago';
      var date = moment.unix(aww.data.children[i].data.created_utc);
      var today = new Date();
      var duration = document.createTextNode(date.from(today));
      dateDivCreate.innerHTML = duration;
      author.appendChild(duration);
    }
  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/space/.json');
oReq.send();

document.getElementsByClassName('random')[0].addEventListener('click', myFunction);
function myFunction() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'https://www.reddit.com/r/space/.json');
  oReq.send();
  console.log('yes');
  }

// document.getElementsByClassName('random')[0].addEventListener('click', myFunction);
//   function myFunction() {
//     var xhr = new XMLHttpRequest();
//     xhr.addEventListener('load', reqListener);
//     xhr.open('GET', 'https://www.reddit.com/r/space/.json');
//     xhr.send();
//     console.log('yes');
//   }

// document.getElementsByClassName('random')[0].addEventListener('click', myFunction);
// function myFunction() {
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener('load', reqListener);
//   oReq.open('GET', 'https://www.reddit.com/r/space/.json');
//   oReq.send();
// }



}(window));
