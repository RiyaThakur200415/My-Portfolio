const cards = document.querySelectorAll(
  '.project-card,.skill-card,.box'
);

cards.forEach(card => {

  card.style.opacity='0';
  card.style.transform='translateY(40px)';
  card.style.transition='0.6s ease';

});

window.addEventListener('scroll',()=>{

  cards.forEach(card=>{

    const position=card.getBoundingClientRect().top;

    if(position < window.innerHeight-100){

      card.style.opacity='1';
      card.style.transform='translateY(0px)';

    }

  });

});