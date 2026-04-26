document.addEventListener("mousemove", e => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  document.body.style.backgroundPosition = (x*1000) + "px " + (y*1000) + "px";
});



function toggleImage() {
  var img = document.getElementById('topImage');
  img.classList.toggle('show');
}
