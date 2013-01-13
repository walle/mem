// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

function setHight () {
  document.getElementById('game').style.height = window.innerHeight + 'px';
}
setHight();
window.onresize = setHight;