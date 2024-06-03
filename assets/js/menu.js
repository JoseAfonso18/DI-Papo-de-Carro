// acessibilidade.js
document.addEventListener("DOMContentLoaded", function() {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const resetFontButton = document.getElementById('reset-font');
    const toggleThemeButton = document.getElementById('toggle-theme');
    let currentFontSize = 16;

    increaseFontButton.addEventListener('click', function() {
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + 'px';
    });

    decreaseFontButton.addEventListener('click', function() {
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + 'px';
    });

    resetFontButton.addEventListener('click', function() {
        currentFontSize = 16;
        document.body.style.fontSize = currentFontSize + 'px';
    });

    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})