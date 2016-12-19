
(function(window){

console.log('Test app.js');




function reqListener(){

  var aww = JSON.parse(this.responseText);


  for (var i = 0; i < 10; i++){


    var articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    document.getElementById('content-container').appendChild(articleContainer);

    var titleDivCreate = document.createElement('h1');
    titleDivCreate.className = 'headline';
    var awwTitle = document.createTextNode(aww.data.children[i].data.title);
    titleDivCreate.appendChild(awwTitle);
    document.getElementsByClassName('article-container')[0].appendChild(titleDivCreate);

    // var awwPic = document.createElement('div');
    // awwPic.className = "item-image";
    // document.body.style.backgroundImage = "url('aww.data.children[i].data.preview.images[0].source.url')";
    // document.getElementById(tabName).style.backgroundImage = 'url(buttons/' + imagePrefix + '.png)';

    // awwPic.setAttribute("height", "170");
    // awwPic.setAttribute("width", "275");
    // document.getElementsByClassName('article-container')[0].appendChild(awwPic);

var imageDivCreate = document.createElement('div');
imageDivCreate.className = "item-image";
var string = aww.data.children[i].data.preview.images[0].source.url;
imageDivCreate.style.backgroundImage = "url('" + string + "')";
// console.log(temp, 'temp');

// imageDivCreate.appendChild(temp);
// document.getElementsByClassName('item-image')[0].appendChild(imageDivCreate);

    var authorDivCreate = document.createElement('div');
    authorDivCreate.className = 'author';
    var author = document.createTextNode(aww.data.children[i].data.author);
    authorDivCreate.appendChild(author);
    document.getElementsByClassName('article-container')[0].appendChild(authorDivCreate);

    var viewDivCreate = document.createElement('div');
    viewDivCreate.className = 'views';
    var views = document.createTextNode(aww.data.children[i].data.num_comments);
    viewDivCreate.appendChild(views);
    document.getElementsByClassName('article-container')[0].appendChild(viewDivCreate);

    var date = moment.unix(aww.data.children[i].data.created_utc);
    var today = new Date();
    var duration = document.createTextNode(date.from(today));
    var dateDivCreate = document.createElement('div');
    dateDivCreate.className = 'time-ago';
    dateDivCreate.appendChild(duration);
    document.getElementsByClassName('article-container')[0].appendChild(dateDivCreate);
  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

}(window));

