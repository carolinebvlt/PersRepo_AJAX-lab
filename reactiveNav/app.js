function viewOfS(nbr){
  var s4 = document.getElementById('s'+nbr);
  s4.scrollIntoView({behavior: "smooth", block: "start"});
}
function highlightLi(nbr){
  var li = document.getElementById('ch'+nbr);
  li.style.fontWeight = "bold";
}
function normalLi(nbr){
  var li = document.getElementById('ch'+nbr);
  li.style.fontWeight = "normal";
}
