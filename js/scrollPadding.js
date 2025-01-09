const navItems = [...document.querySelectorAll('nav ul li a')];

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        let section = item.href.split('#')[1];
        if (!section) return;
        
        e.preventDefault();
        section = document.querySelector('#' + section);
        console.log(section);
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
        });
    })
})