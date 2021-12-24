window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const burgerMenu = document.getElementById('mobile-menu')
  burgerMenu.addEventListener('click', () => {
    const drawer = document.getElementById('mobile-drawer').classList.toggle('open')
    const body = document.body.classList.toggle('noscroll')
    const header = document.getElementById('header')
    const headerAction = header.classList.toggle('no-after')
  })

  const test1 = document.getElementById("test-1");
  const test2 = document.getElementById("test-2");
  const test3 = document.getElementById("test-3");

  const slider = [test1, test2, test3];
  let currentIndex = -1;

  //On load, show the first slide
  loadPage(0);

  function loadPage(i) {
    slider[i].classList.add('active');
    currentIndex = i
  }

  function triggerSlide(i) {
    //Check if index is valid
    if (slider[i]) {
      slider[i - 1].classList.add('left');
      slider[i].classList.add('next');
      setTimeout(() => {
        slider[i].classList.add('left');
      }, 50)
      currentIndex = i;
    } else {
      slider[i - 1].classList.add('left');
      slider[i - slider.length].classList.add('next');
      setTimeout(() => {
        slider[i - slider.length].classList.add('left');
      }, 50)
      currentIndex = 0;
    }

    //Hide previous slide
    setTimeout(() => {
      if (slider[currentIndex - 1]) {
        // console.log(currentIndex - 1)
        slider[currentIndex - 1].classList.remove('active', 'left')
        slider[i].classList.remove('next', 'left')
        slider[i].classList.add('active')
      } else {
        // console.log(currentIndex)
        slider[i - 1].classList.remove('active', 'left')
        slider[i - slider.length].classList.remove('next', 'left')
        slider[i - slider.length].classList.add('active')
      }
    }, 600)

  }
  
  setInterval(() => triggerSlide(currentIndex + 1), 8000)

  // const interval = setInterval(myInterval, 8000)

  // document.addEventListener('visibilitychange', () => {
  //   if (document.hidden || document.hasFocus()) {
  //     console.log('lol')
  //     clearInterval(interval)
  //   } else {
  //     console.log('document on focus')
  //     setInterval(myInterval, 8000)
  //   }
  // })


  // setInterval(myInterval, 8000)

  // function myInterval() {
  //   console.log('time')
  //   triggerSlide(currentIndex + 1)
  // }

});