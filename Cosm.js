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
  if (Door.style.opacity === '1') {
    Door.style.opacity = '0';
    setTimeout(() => {
      Door.style.display = 'none';
    }, 5000);
  } else {
    Door.style.display = 'block';
    setTimeout(() => {
      Door.style.opacity = '1';
    }, 10);
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



let AtilknePressed = false;

function changeImage(id, first, second,
  firstTop, firstLeft, firstWidth, firstHeight,
  secondTop, secondLeft, secondWidth, secondHeight) {

    let img = document.getElementById(id);

    if (img.src.includes(first)) {
        img.src = second;
        img.style.top = secondTop;
        img.style.left = secondLeft;
        img.style.width = secondWidth;
        img.style.height = secondHeight;
    } else {
        img.src = first;
        img.style.top = firstTop;
        img.style.left = firstLeft;
        img.style.width = firstWidth;
        img.style.height = firstHeight;
    }

    if (id === "Atilkne" && !AtilknePressed) {
        AtilknePressed = true;
        HandyDandy();
    }
}

function HandyDandy() {
    LetOut = true;

    let handy = document.getElementById("HandyDandy");
    handy.style.display = "block";

    setTimeout(() => {
        let startTop = parseFloat(handy.style.top) || 491;
        let startTime = performance.now();
        let duration = 3000;
        let distance = 2000;

        function flyUp(time) {
            let progress = (time - startTime) / duration;
            if (progress > 1) progress = 1;
            let ease = progress * progress;
            handy.style.top = (startTop - distance * ease) + "px";

            if (progress < 1) {
                requestAnimationFrame(flyUp);
            } else {
                handy.style.left = "420px";
                handy.style.top = "1000px";
                handy.style.scale = "0.8";
                handy.src = "IMG/Worm_houses/handdy_dandy.png";

                let music2 = new Audio("AUD/Wormwood/Swush.mp3");
                music2.play();

                let startTime2 = performance.now();
                let duration2 = 1000;

                function moveToPlace(time2) {
                    let progress2 = (time2 - startTime2) / duration2;

                    if (progress2 > 1) progress2 = 1;

                    let ease2 = 1 - Math.pow(1 - progress2, 3);

                    handy.style.top = (1000 - 960 * ease2) + "px";

                    if (progress2 < 1) {
                        requestAnimationFrame(moveToPlace);
                    } else {
                        handy.style.top = "40px";

                        alert("Sveiks! Emm... Izglābēj! Esmu Dulahāns Handy Dendijs, jā es māku mentāli runāt ar jums izmantojot kaut ko vārdā Alert! Man ir piedāvājums, kamēr es esmu šeit brīvībā, varu paturēt grāmatas, kas ir skapī, vienkārši noklikšķini uz kādu, un es to paņemšu rokā!");
                    }
                }

                requestAnimationFrame(moveToPlace);
            }
        }

        requestAnimationFrame(flyUp);
    }, 500);
}