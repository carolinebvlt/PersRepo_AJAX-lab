window.addEventListener('scroll', function isOnScreen(){
  var trois = document.getElementById('trois');
  var pxScrolled = window.pageYOffset; // = B
  var szWindowPx = window.innerHeight; // = S
  var distanceTopPx3 = trois.offsetTop; // = A
  if ((distanceTopPx3 - szWindowPx) > pxScrolled){
    console.log('no');
  }
  else {
    console.log('yes');
    deux.style.backgroundColor = "green";
  }
})
