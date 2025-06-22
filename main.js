let menuBtn=document.getElementById("menuBtn");
menuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle("fa-xmark")
})
let typed = new Typed("#auto-input", {
    strings: ['Front End Developer', 'Web Designer'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true
});
