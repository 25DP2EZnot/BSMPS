document.addEventListener("mousemove", e => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = (x*1000) + "px " + (y*1000) + "px";
});



function toggleImage() {
  var imge = document.getElementById('topImage');
  imge.classList.toggle('show');
};



const Door = document.getElementById("Door");
const Box = document.getElementById("BOXERS_Shorts");
const Camera = document.getElementById("Pojektors");


Box?.addEventListener('click', () => {
  if (Box.style.top === '82px') {
    Box.style.top = '137px';
    Box.style.left = '-33px';
    Door.style.pointerEvents = 'none';
  } else {
    Box.style.top = '82px';
    Box.style.left = '517px';
    Door.style.pointerEvents = 'auto';
  }
});

Camera?.addEventListener('click', () => {
  if (Door.style.display === 'block') {
    Door.style.display = 'none';
  } else {
    Door.style.display = 'block';
  }
});



const gif1 = document.getElementById("gif1");
const gif2 = document.getElementById("gif2");
const gif3 = document.getElementById("gif3");
const gif4 = document.getElementById("gif4");

const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");
const vid4 = document.getElementById("vid4");



vid1?.addEventListener('click', () => {
  if (gif1.style.display === 'block') {
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
  } else {
    gif1.style.display = 'block';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
  }
});

vid2?.addEventListener('click', () => {
  if (gif2.style.display === 'block') {
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
  } else {
    gif1.style.display = 'none';
    gif2.style.display = 'block';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
  }
});

vid3?.addEventListener('click', () => {
  if (gif3.style.display === 'block') {
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
  } else {
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'block';
    gif4.style.display = 'none';
  }
});

vid4?.addEventListener('click', () => {
  if (gif4.style.display === 'block') {
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'none';
  } else {
    gif1.style.display = 'none';
    gif2.style.display = 'none';
    gif3.style.display = 'none';
    gif4.style.display = 'block';
  }
});