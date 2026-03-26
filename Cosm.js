document.addEventListener("mousemove", e => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  document.body.style.backgroundPosition = (x*1000) + "px " + (y*1000) + "px";
});





let count = 1;
const links = [
  document.getElementById('vid1'),
  document.getElementById('vid2'),
  document.getElementById('vid3'),
  document.getElementById('vid4')
];

document.getElementById('clickImg').addEventListener('click', () => {
  count++;
  if(count <= 5){
    videos[count-1].style.display = 'inline-block';
  } else {
    videos.forEach(v => v.style.display = 'none');
    count = 1;
  }
});