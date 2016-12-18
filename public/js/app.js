(function(window){

console.log('Test app.js');

function reqListener(){

  var aww = JSON.parse(this.responseText);


  for (var i = 0; i < 10; i++){

    var articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    console.log(articleContainer);
    document.getElementById('content-container').appendChild(articleContainer);

    var titleDivCreate = document.createElement('h1');
    titleDivCreate.className = 'headline';
    var awwTitle = document.createTextNode(aww.data.children[i].data.title);
    titleDivCreate.appendChild(awwTitle);
    document.getElementsByClassName('article-container')[0].appendChild(titleDivCreate);

    var awwPic = document.createElement('img');
    awwPic.className = "image-tile";
    awwPic.setAttribute('src', aww.data.children[i].data.url);
    awwPic.setAttribute("height", "100");
    awwPic.setAttribute("width", "100");
    document.getElementById('image').appendChild(awwPic);

    var authorDivCreate = document.createElement('div');
    authorDivCreate.className = 'author';
    var author = document.createTextNode(aww.data.children[i].data.author);
    authorDivCreate.appendChild(author);
    document.getElementById('author').appendChild(authorDivCreate);

    var viewDivCreate = document.createElement('div');
    viewDivCreate.className = 'views';
    var views = document.createTextNode(aww.data.children[i].data.num_comments);
    viewDivCreate.appendChild(views);
    document.getElementById('author').appendChild(viewDivCreate);
  }

}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();


}(window));

