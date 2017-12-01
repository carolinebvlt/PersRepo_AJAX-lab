function fillAddBox(nbr) {
  var rq = new XMLHttpRequest();
  rq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("addBox"+nbr).innerHTML = this.responseText;
    }
  };
  rq.open("GET", nbr+".php", true);
  rq.send();
}
function emptyAddBox(nbr){
  var addBox = document.getElementById('addBox'+nbr);
  var view = document.getElementById('view'+nbr);
  addBox.removeChild(view);
}
