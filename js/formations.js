document.querySelectorAll('.info-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const info = button.nextElementSibling;
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
        const info = button.nextElementSibling;
        if (!button.contains(e.target) && !info.contains(e.target)) {
            info.style.display = 'none';
        }
    });
});
