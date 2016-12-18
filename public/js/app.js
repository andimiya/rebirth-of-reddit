(function(window){

console.log('Test app.js');

function reqListener(){

  var aww = JSON.parse(this.responseText);

  for (var i = 0; i < 10; i++){

    var titleDivCreate = document.createElement('div');
    var awwTitle = document.createTextNode(aww.data.children[i].data.title);
    titleDivCreate.appendChild(awwTitle);
    document.body.appendChild(titleDivCreate);

    var awwPic = document.createElement('img');
    awwPic.setAttribute('src', aww.data.children[i].data.url);
    awwPic.setAttribute("height", "200");
    document.getElementById('img-1').appendChild(awwPic);
  }

  // console.log(aww.data.children[0].data.title);
  // console.log(aww.data.children[1].data.title);

}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', 'https://www.reddit.com/r/aww.json');
oReq.send();


}(window));

