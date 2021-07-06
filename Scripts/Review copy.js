const toggleBtn = document.querySelector('.navbar_tBtn');
const menu = document.querySelector('.navbar_menu');
const search = document.querySelector('.navbar_search');

toggleBtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    search.classList.toggle('active');
});
