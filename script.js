const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
    window.location.href = 'password.html';
    console.log('hi');
});

const themeBtn = document.getElementById('theme-change');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.textContent = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
    console.log('dark mode');
});