/* Menu Show & Hidden */

/* Menu Show */
/* Validate if constant exists */

/* Menu Hidden */
/* Validate if constant exists */

/* Remove Menu Mobile */

/* Change Background Header */

/* Scroll Sections Active Link */

/* Scroll About Animation */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
});

/* Dark Light Theme */

/* MixItUp Filter Portfolio */

/* Active work */

/* Email JS */

/* Scroll Reveal Animation */