let images = document.querySelectorAll('.slide');
let start = 0;
images[start].style.display = 'block';

document.querySelectorAll('.dot').forEach((elem, index) => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        images[index].style.display = 'block';
    })
})

document.querySelectorAll('.nav__pic').forEach((elem, index) => {
    elem.addEventListener('click', () => {
        for (let k = 0; k < images.length; k++) {
            images[k].style.display = 'none';
        }
        images[index].style.display = 'block';
    })
})