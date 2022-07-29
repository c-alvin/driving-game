var $car = document.querySelector('img');

function turnCar() {
  if (event.keyCode === 37) {
    $car.setAttribute('class', 'transform-left');
  }
  if (event.keyCode === 38) {
    $car.setAttribute('class', 'transform-up');
  }
  if (event.keyCode === 39) {
    $car.setAttribute('class', 'transform-right');
  }
  if (event.keyCode === 40) {
    $car.setAttribute('class', 'transform-down');
  }
}

window.addEventListener('keydown', turnCar);

// left = 37
// up = 38
// right = 39
// down = 40
