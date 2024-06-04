'use strict';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// window scroll down
let wHeight = window.innerHeight;
let calcul = Number(wHeight) * 10;

window.addEventListener('load', () => {
    window.scrollBy({
        top: calcul,
        left: 0,
        behavior: 'smooth',
    });
});

/////////////////////////////////////////////////////////          FOOTER          ////////////////////////////////////////////////////////

// parallax 
gsap.fromTo('.footer__parallax__layer--back', {
    backgroundPositionY: 'center'},
    {backgroundPositionY: '30vh',
    scrollTrigger:{
      trigger: '.footer',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.fromTo('.footer__parallax__layer--middle', {
    backgroundPositionY: '10vh'},
    {backgroundPositionY: '40vh',
    scrollTrigger:{
      trigger: '.footer',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.fromTo('.footer__parallax__layer--front', {
    backgroundPositionY: 'center'},
    {backgroundPositionY: '-5vh',
    scrollTrigger:{
      trigger: '.footer',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  // text avatar
  gsap.to('.footer__avatar-text-center', {
    display:'none',
    scrollTrigger:{
      trigger: '.contact',
      start: '20% bottom',
      end: '20% bottom',
      scrub: true,
    }
  });

/////////////////////////////////////////////////////////          CONTACT          ////////////////////////////////////////////////////////

// parallax 
gsap.to('.contact__parallax__layer--front', {
    backgroundPositionY: '2000px',
    scrollTrigger:{
      trigger: '.contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.contact__parallax__layer--middle-1', {
    backgroundPositionY: '1500px',
    scrollTrigger:{
      trigger: '.contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.contact__parallax__layer--middle-2', {
    backgroundPositionY: '1000px',
    scrollTrigger:{
      trigger: '.contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.contact__parallax__layer--back', {
    backgroundPositionY: '500px',
    scrollTrigger:{
      trigger: '.contact',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  // platform
  gsap.to('.contact__platform', {
    left: '-20vh',
    scrollTrigger:{
      trigger: '.contact',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // avatar text
  gsap.fromTo('.contact__avatar-text-left', {
    display:'none'},
    {display:'block',
    scrollTrigger:{
      trigger: '.contact',
      start: 'center bottom',
      end: 'center bottom',
      scrub: true,
    }
  });
  gsap.fromTo('.contact__avatar-text-left', {
    display:'block'},
    {display:'none',
    scrollTrigger:{
      trigger: '.contact',
      start: '70% bottom',
      end:'70% bottom',
      scrub: true,
    }
  });

  // content anim
  gsap.fromTo('.content--hidden', {
    opacity: 0},
    {opacity: 1,
    scrollTrigger:{
      trigger: '.projets',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true
    }
  });

/////////////////////////////////////////////////////////          PROJETS          ////////////////////////////////////////////////////////

gsap.to('.projets__liste', {
    transform: 'translateX(0vw)',
    scrollTrigger:{
        trigger: '.projets',
        start: 'top top',
        scrub: true,
        pin: true,
    }
});

// platform
gsap.to('.projets__platform', {
    right: '-20vh',
    scrollTrigger:{
      trigger: '.projets',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // avatar text
  gsap.fromTo('.projets__avatar-text-right', {
    display:'none'},
    {display:'block',
    scrollTrigger:{
      trigger: '.projets',
      start: 'center bottom',
      end: 'center bottom',
      scrub: true,
    }
  });
  gsap.fromTo('.projets__avatar-text-right', {
    display:'block'},
    {display:'none',
    scrollTrigger:{
      trigger: '.projets',
      start: '70% bottom',
      end:'70% bottom',
      scrub: true,
    }
  });

  // content anim
gsap.fromTo('.contact__text', {
  opacity: 0},
  {opacity: 1,
  scrollTrigger:{
    trigger: '.contact',
    start: '70% bottom',
    end: 'bottom bottom',
    scrub: true
  }
});
gsap.fromTo('.contact__title', {
  opacity: 0},
  {opacity: 1,
  scrollTrigger:{
    trigger: '.contact',
    start: '70% bottom',
    end: 'bottom bottom',
    scrub: true
  }
});
gsap.fromTo('.contact__link', {
  opacity: 0},
  {opacity: 1,
  scrollTrigger:{
    trigger: '.contact',
    start: '70% bottom',
    end: 'bottom bottom',
    scrub: true
  }
});
/////////////////////////////////////////////////////////          COMPETENCES          ////////////////////////////////////////////////////////

// parallax 
gsap.to('.compétences__parallax__layer--front', {
    backgroundPositionY: '2000px',
    scrollTrigger:{
      trigger: '.compétences',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.compétences__parallax__layer--middle-1', {
    backgroundPositionY: '1500px',
    scrollTrigger:{
      trigger: '.compétences',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.compétences__parallax__layer--middle-2', {
    backgroundPositionY: '1000px',
    scrollTrigger:{
      trigger: '.compétences',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.compétences__parallax__layer--back', {
    backgroundPositionY: '500px',
    scrollTrigger:{
      trigger: '.compétences',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  // platform
  gsap.to('.compétences__platform', {
    right: '-20vh',
    scrollTrigger:{
      trigger: '.compétences',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // avatar text
  gsap.fromTo('.compétences__avatar-text-right', {
    display:'none'},
    {display:'block',
    scrollTrigger:{
      trigger: '.compétences',
      start: 'center bottom',
      end: 'center bottom',
      scrub: true,
    }
  });
  gsap.fromTo('.compétences__avatar-text-right', {
    display:'block'},
    {display:'none',
    scrollTrigger:{
      trigger: '.compétences',
      start: '70% bottom',
      end:'70% bottom',
      scrub: true,
    }
  });

  // bat anim
  gsap.fromTo('.bat', {
    x: 0,
    y: 0},
    {x: '100vw',
    y: '100vh',
    scrollTrigger:{
      trigger: '.présentation',
      start: 'top bottom',
      end: 'center bottom',
      scrub: true
    }, stagger:{
      each: 0.1,
    }
  });

/////////////////////////////////////////////////////////          PRESENTATION          ////////////////////////////////////////////////////////

// parallax 
gsap.to('.présentation__parallax__layer--front', {
    backgroundPositionY: '2000px',
    scrollTrigger:{
      trigger: '.présentation',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.présentation__parallax__layer--middle-1', {
    backgroundPositionY: '1500px',
    scrollTrigger:{
      trigger: '.présentation',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.présentation__parallax__layer--middle-2', {
    backgroundPositionY: '1000px',
    scrollTrigger:{
      trigger: '.présentation',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.présentation__parallax__layer--back', {
    backgroundPositionY: '500px',
    scrollTrigger:{
      trigger: '.présentation',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

   // platform
   gsap.to('.présentation__platform', {
    left: '-20vh',
    scrollTrigger:{
      trigger: '.présentation',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // avatar text
  gsap.fromTo('.présentation__avatar-text-left', {
    display:'none'},
    {display:'block',
    scrollTrigger:{
      trigger: '.présentation',
      start: 'center bottom',
      end: 'center bottom',
      scrub: true,
    }
  });
  gsap.fromTo('.présentation__avatar-text-left', {
    display:'block'},
    {display:'none',
    scrollTrigger:{
      trigger: '.présentation',
      start: '70% bottom',
      end:'70% bottom',
      scrub: true,
    }
  });

  // anim content
  gsap.fromTo('.présentation__title', {
    opacity: 0},
    {opacity: 1,
    scrollTrigger:{
      trigger: '.présentation',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true
    }
  });
  gsap.fromTo('.présentation__text', {
    opacity: 0},
    {opacity: 1,
    scrollTrigger:{
      trigger: '.présentation',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true
    }
  });

/////////////////////////////////////////////////////////          HEADER          ////////////////////////////////////////////////////////

// parallax 
gsap.to('.header__parallax__layer--front', {
    backgroundPositionY: '2000px',
    scrollTrigger:{
      trigger: '.header',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.header__parallax__layer--middle-1', {
    backgroundPositionY: '1500px',
    scrollTrigger:{
      trigger: '.header',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.header__parallax__layer--middle-2', {
    backgroundPositionY: '1000px',
    scrollTrigger:{
      trigger: '.header',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.header__parallax__layer--back', {
    backgroundPositionY: '500px',
    scrollTrigger:{
      trigger: '.header',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  // platform
  gsap.to('.header__platform', {
    right: '-20vh',
    scrollTrigger:{
      trigger: '.header',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });

  // text avatar
  gsap.to('.header__avatar-text-center', {
    display:'block',
    scrollTrigger:{
      trigger: '.header',
      start: 'bottom bottom',
      end: 'bottom bottom',
      scrub: true,
    }
  });
  gsap.fromTo('.header__avatar-text-right', {
    display:'none'},
    {display:'block',
    scrollTrigger:{
      trigger: '.header',
      start: 'center bottom',
      end: 'center bottom',
      scrub: true,
    }
  });
  gsap.fromTo('.header__avatar-text-right', {
    display:'block'},
    {display:'none',
    scrollTrigger:{
      trigger: '.header',
      start: '70% bottom',
      end:'70% bottom',
      scrub: true,
    }
  });

  // anim content
  gsap.fromTo('.header__title', {
    opacity: 0},
    {opacity: 1,
    scrollTrigger:{
      trigger: '.header',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true
    }
  });
  gsap.fromTo('.header__slogan', {
    opacity: 0},
    {opacity: 1,
    scrollTrigger:{
      trigger: '.header',
      start: '70% bottom',
      end: 'bottom bottom',
      scrub: true
    }
  });

/////////////////////////////////////////////////////////          Avatar         ////////////////////////////////////////////////////////

const tlAvatar = gsap.timeline();
tlAvatar.to('.avatar', {
    top: '680vh',
    right: 'calc(50vw - 5vh)',
    display: 'none',
    opacity: 0,
    backgroundImage: 'url(../../assets/images/gandalf_right.png)',
    scrollTrigger:{
        trigger: '.header',
        start:'bottom bottom',
        end:'bottom bottom',
        scrub: true,
    }
})
.to('.header__avatar', {
    display: 'block',
    scrollTrigger:{
        trigger: '.header',
        start:'top top',
        end:'top top',
        scrub: true,
    }
})
.to('.projets__avatar', {
    opacity: 0,
    scrollTrigger:{
        trigger: '.header',
        start:'top top',
        end:'top top',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '630vh',
    right: '10vh'},
    {top: '680vh',
    right: 'calc(50vw - 5vh)',
    scrollTrigger:{
        trigger: '.header',
        start: '70% bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    backgroundImage: 'url(../../assets/images/gandalf_left.png)',},
    {backgroundImage: 'url(../../assets/images/gandalf_right.png)',
    scrollTrigger:{
        trigger: '.header',
        start: 'center bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '580vh',
    right: 'calc(50vw - 5vh)'},
    {top: '630vh',
    right: '10vh',
    scrollTrigger:{
        trigger: '.header',
        start: '20% bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '530vh',
    right: 'calc(100vw - 20vh)'},
    {top: '580vh',
    right: 'calc(50vw - 5vh)',
    scrollTrigger:{
        trigger: '.présentation',
        start: '70% bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    backgroundImage: 'url(../../assets/images/gandalf_right.png)',},
    {backgroundImage: 'url(../../assets/images/gandalf_left.png)',
    scrollTrigger:{
        trigger: '.présentation',
        start: 'center bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '480vh',
    right: 'calc(50vw - 5vh)'},
    {top: '530vh',
    right: 'calc(100vw - 20vh)',
    scrollTrigger:{
        trigger: '.présentation',
        start: '20% bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '430vh',
    right: '10vh'},
    {top: '480vh',
    right: 'calc(50vw - 5vh)',
    scrollTrigger:{
        trigger: '.compétences',
        start: '70% bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    backgroundImage: 'url(../../assets/images/gandalf_left.png)',},
    {backgroundImage: 'url(../../assets/images/gandalf_right.png)',
    scrollTrigger:{
        trigger: '.compétences',
        start: 'center bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '380vh',
    right: 'calc(50vw - 5vh)'},
    {top: '430vh',
    right: '10vh',
    scrollTrigger:{
        trigger: '.compétences',
        start: '20% bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '280vh',
    right: 'calc(50vw - 5vh)',
    opacity: 0,
    backgroundImage: 'url(../../assets/images/gandalf_right.png)'},
    {top: '380vh',
    right: 'calc(50vw - 5vh)',
    opacity: 1,
    backgroundImage:'url(../../assets/images/gandalf_left.png)',
    scrollTrigger:{
        trigger:'.compétences',
        start:'top bottom',
        end:'top bottom',
        scrub: true,
    }
})
.fromTo('.projets__avatar', {
    opacity: 1},
    {opacity: 0,
    scrollTrigger:{
        trigger:'.compétences',
        start:'top bottom',
        end:'top bottom',
        scrub: true,
    }
})
.fromTo('.projets__avatar', {
    opacity: 0},
    {opacity: 1,
    scrollTrigger:{
        trigger: '.projets',
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    opacity: 1},
    {opacity: 0,
    scrollTrigger:{
        trigger: '.projets',
        start: 'bottom bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '230vh',
    right: '10vh'},
    {top: '280vh',
    right: 'calc(50vw - 5vh)',
    scrollTrigger:{
        trigger: '.projets',
        start: '70% bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    backgroundImage: 'url(../../assets/images/gandalf_left.png)',},
    {backgroundImage: 'url(../../assets/images/gandalf_right.png)',
    scrollTrigger:{
        trigger: '.projets',
        start: 'center bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '180vh',
    right: 'calc(50vw - 5vh)'},
    {top: '230vh',
    right: '10vh',
    scrollTrigger:{
        trigger: '.projets',
        start: '20% bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '130vh',
    right: 'calc(100vw - 20vh)'},
    {top: '180vh',
    right: 'calc(50vw - 5vh)',
    scrollTrigger:{
        trigger: '.contact',
        start: '70% bottom',
        end: 'bottom bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    backgroundImage: 'url(../../assets/images/gandalf_right.png)',},
    {backgroundImage: 'url(../../assets/images/gandalf_left.png)',
    scrollTrigger:{
        trigger: '.contact',
        start: 'center bottom',
        end: 'center bottom',
        scrub: true,
    }
})
.fromTo('.avatar', {
    top: '80vh',
    right: 'calc(50vw - 5vh)'},
    {top: '130vh',
    right: 'calc(100vw - 20vh)',
    scrollTrigger:{
        trigger: '.contact',
        start: '20% bottom',
        end: 'center bottom',
        scrub: true,
    }
})