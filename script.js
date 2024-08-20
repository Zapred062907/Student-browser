
const btnPopup = document.querySelector('.btnSearch-popup');
const wrapper = document.querySelector('.wrapper');
const iconClose = document.querySelector('.icon-close');
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
