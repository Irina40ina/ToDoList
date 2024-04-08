let screenX = 0;
let screenY = 0;

function setPositionOptionMenu() {
    const optionMenu = document.querySelector('.option__menu');
    optionMenu.style.display = 'flex';
    optionMenu.style.top = screenY + 'px';
    optionMenu.style.left = screenX + 'px';

}

document.addEventListener("mousemove", (event) => {
    screenX = event.pageX;
    screenY = event.pageY;
  });
