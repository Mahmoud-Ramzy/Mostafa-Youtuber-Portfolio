/*Start reveal*/
ScrollReveal({
    reset:false, //repeat move
    distance:'3000px',
    duration:600,
    delay:100
});
ScrollReveal().reveal('.s1, .main-heading, .about-me', {  origin: 'left' });
ScrollReveal().reveal('.s2, .m1', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.s3, .vids, .i1', { delay: 100, origin: 'right' });

if(window.innerWidth > 906){
    ScrollReveal().reveal('.proto2', { delay: 100, origin: 'bottom' });
}
else{
    ScrollReveal().reveal('.proto2', { delay: 100, origin: 'right' });
}