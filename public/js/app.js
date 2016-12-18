
(function(window){

console.log('Test app.js');


// var NowMoment = moment();
var date = moment.unix(1482099358);

console.log(date, 'date');
console.log(moment());

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

    var awwPic = document.createElement('img');
    awwPic.className = "image-tile";
    awwPic.setAttribute('src', aww.data.children[i].data.preview.images[0].source.url);
    awwPic.setAttribute("height", "170");
    awwPic.setAttribute("width", "275");
    document.getElementsByClassName('article-container')[0].appendChild(awwPic);

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
  }

}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww/.json');
oReq.send();

// console.log(getUTCDate(1482081257), 'moment');

// function myFunction() {
//     var d = new Date(1482081257);
//     var f = new Date();
//     var n = d.toUTCString();
//     console.log(n);
//     console.log(date.now, 'date now');
//     // document.getElementById("demo").innerHTML = n;

// }
// myFunction();

}(window));

