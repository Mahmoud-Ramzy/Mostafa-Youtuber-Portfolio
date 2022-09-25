/*Start reveal*/
ScrollReveal({
    reset:false, //repeat move
    distance:'3000px',
    duration:900,
    delay:300
});
ScrollReveal().reveal('.s1, .main-heading, .about-me', {  origin: 'left' });
ScrollReveal().reveal('.s2, .portfolio-container, .social-links', {origin: 'bottom',duration:'900' });
ScrollReveal().reveal('.s3,  .i1', { origin: 'right' });

if(window.innerWidth > 906){
    ScrollReveal().reveal('.proto2', { delay: 100, origin: 'bottom' });
}
else{
    ScrollReveal().reveal('.proto2', { delay: 100, origin: 'right' });
}