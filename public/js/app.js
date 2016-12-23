function reqListener(){

  document.getElementById('content-container').innerHTML = "";

  var aww = JSON.parse(this.responseText);

    var articlesHolder = document.createElement('div');
    articlesHolder.className = 'articles-holder';
    document.getElementById('content-container').appendChild(articlesHolder);
    console.log(articlesHolder);

  for (var i = 1; i < 30; i++){

    //Only Show Articles with JPGs, not GIFS
    var url = aww.data.children[i].data.preview.images[0].source.url;
    console.log(url);
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
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

document.getElementById('random').addEventListener('click', () => {
  var rReq = new XMLHttpRequest();
  rReq.addEventListener('load', reqListener);
  rReq.open('GET', 'https://www.reddit.com/r/space/.json');
  rReq.send();
});

document.getElementById('my-boards').addEventListener('click', () => {
  var kReq = new XMLHttpRequest();
  kReq.addEventListener('load', reqListener);
  kReq.open('GET', 'https://www.reddit.com/r/aww/.json');
  kReq.send();
});

document.getElementById('get-the-app').addEventListener('click', () => {
  var pReq = new XMLHttpRequest();
  pReq.addEventListener('load', reqListener);
  pReq.open('GET', 'https://www.reddit.com/r/pics/.json');
  pReq.send();
});