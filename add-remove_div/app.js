function fillAddBox() {
  var rq = new XMLHttpRequest();
  rq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("addBox").innerHTML = this.responseText;
    }
  };
  rq.open("GET", "view.php", true);
  rq.send();
}
function emptyAddBox(){
  var addBox = document.getElementById('addBox');
  var view = document.getElementById('view');
  addBox.removeChild(view);
}
