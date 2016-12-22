
(function(window){

function reqListener(){

  var aww = JSON.parse(this.responseText);

    var articlesHolder = document.createElement('div');
    articlesHolder.className = 'articles-holder';
    document.getElementById('content-container').appendChild(articlesHolder);

  for (var i = 1; i < 10; i++){

    var articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    articlesHolder.appendChild(articleContainer);

    //Image
    var image = document.createElement('div');
    image.className = 'item-image';
    var url = aww.data.children[i].data.preview.images[0].source.url;
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
    author.innerHTML = aww.data.children[i].data.author;
    articleContainer.appendChild(author);

    //Views
    var views = document.createElement('div');
    views.className = 'views';
    views.innerHTML = aww.data.children[i].data.num_comments;
    articleContainer.appendChild(views);

    //Date
    var dateDivCreate = document.createElement('div');
    dateDivCreate.className = 'time-ago';
    var date = moment.unix(aww.data.children[i].data.created_utc);
    var today = new Date();
    var duration = document.createTextNode(date.from(today));
    dateDivCreate.innerHTML = duration;
    articleContainer.appendChild(duration);
  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

}(window));

