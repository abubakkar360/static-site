const hamburg = document.querySelector('.hamburg img');
const links_container = document.querySelector('.links_container')
const links = document.querySelector('.links');
const p = document.querySelector('p');
hamburg.addEventListener('click',function(){
    // links_container.classList.toggle('showbar');
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = links_container.getBoundingClientRect().height;

    if (containerHeight === 0) {
        links_container.style.height =`${linksHeight}px`;
        links_container.style.transitionDuration = '1s';
    } else {
        links_container.style.height = 0;
    }
});
const navbar = document.querySelector('.head_nav');
const fixed_btn = document.querySelector('.btn_fixed');

window.addEventListener('scroll',function(){
    const scroll_height = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scroll_height > navHeight){
        navbar.classList.add('fixed_nav')
    }else{
        navbar.classList.remove('fixed_nav')
    }
    if(scroll_height > 500){
        fixed_btn.classList.add('btn_show');
    }else{
        fixed_btn.classList.remove('btn_show')
    }
});
 const scroll_link = document.querySelectorAll('.scroll_link');
 
 scroll_link.forEach(function(link){
     
     link.addEventListener('click',function(e){
         e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = links_container.getBoundingClientRect().height;
        const fixed_nav = navbar.classList.contains('fixed_nav');
        let position = element.offsetTop - navHeight;
        
        // if(!fixed_nav){
        //     position = position - navHeight;
        // }
        if(navHeight > 100){
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top:position,
            
        });
        links_container.style.height=0;
     })
 })