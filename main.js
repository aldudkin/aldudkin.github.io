//Language Switch JavaScript
const btnEn = document.getElementById('lang-en');
const btnCz = document.getElementById('lang-cz');
const sectionEn = document.getElementById('cv-en');
const sectionCz = document.getElementById('cv-cz');

btnEn.addEventListener('click', () => {
    btnEn.classList.add('active');
    btnCz.classList.remove('active');
    sectionEn.style.display = 'block';
    sectionCz.style.display = 'none';
});

btnCz.addEventListener('click', () => {
    btnCz.classList.add('active');
    btnEn.classList.remove('active');
    sectionEn.style.display = 'none';
    sectionCz.style.display = 'block';
});