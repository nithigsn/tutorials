step 1 =>
npm i gsap

step 2 =>

gsap.registerPlugin(ScrollTrigger);


step 3 =>
animate on scroll 

useEffect(() => {
    const textElements = gsap.utils.toArray('.animate-text');
    const textSide = gsap.utils.toArray('.to-left');
    const projectElements = gsap.utils.toArray('.project-card');
    const lowHeight = gsap.utils.toArray('low-h');

    textElements.forEach((textElement) => {
      gsap.fromTo(
        textElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: textElement,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    textSide.forEach((textSide) => {
      gsap.fromTo(
        textSide,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: textSide,
            start: 'right 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    projectElements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    lowHeight.forEach((lowHeight) => {
      gsap.fromTo(
        lowHeight,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: lowHeight,
            start: 'top 120%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
