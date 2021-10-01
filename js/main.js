const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.showcase-name`, {origin: 'left', delay: 300})
sr.reveal(`.showcase-img`,{origin: 'bottom', delay: 300})
sr.reveal(`.info`,{origin:'right', delay:300})
sr.reveal('.features-name',{origin: 'left',delay: 300})
sr.reveal('#card1',{origin:'bottom',delay: 500})
sr.reveal('#card2',{origin:'bottom',delay: 700})
sr.reveal('#card3',{origin:'bottom',delay: 900})
sr.reveal('.soon-name',{origin: 'bottom',delay: 200})
sr.reveal('.soon-img')