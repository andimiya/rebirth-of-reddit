
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

    var awwPic = document.createElement('div');
    awwPic.className = "item-image";
    document.getElementsByClassName('item-image').style.backgroundImage = 'url(buttons/' + imagePrefix + '.png)';
    document.getElementsByClassName('article-container')[0].appendChild(awwPic);

var string = 'http://www.premiumbeat.com/blog/wp-content/uploads/2012/12/free.jpeg';
document.getElementById("divtest").style.backgroundImage = "url('" + string + "')";
document.getElementById("imgtest").src = string;




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
    console.log(duration, 'duration');
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

