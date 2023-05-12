const toggleButton = document.querySelector('.toggle_button');
const navbarLinks = document.getElementsByClassName('container_fluid')[0];
const home = document.getElementsByClassName('home')[0];
const body = document.querySelector('.container');
const images = document.querySelectorAll('.image_appear');


toggleButton.addEventListener('click', e => {
    navbarLinks.classList.toggle('active')
    body.classList.toggle('active')
    home.classList.toggle('active')
})

window.addEventListener('scroll', checkImages);

function checkImages(){
    const triggerImage = window.innerHeight / 5 * 5;

    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
    if (imgTop< triggerImage){
        img.classList.add('show');
    }
    else{
        img.classList.remove('show');
    }
    })
}
