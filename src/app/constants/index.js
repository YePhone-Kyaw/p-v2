export const navLinks = [
    {
        id: 1,
        name: "About",
        href: "#about",
    },
    {
        id: 2, 
        name: "Projects",
        href: "#projects",
    },
    {
        id:3, 
        name: "Awards",
        href: '#awards'
    },
    {
        id: 4,
        name: "Skills",
        href: "#skills",
    },
    
    {
        id: 5,
        name: "Contact",
        href: "#contact",
    }
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'React',
    },
    {
        id: 3,
        name: 'TypeScript',
    },
    {
        id: 4,
        name: 'HTML',
    },
    {
        id: 5,
        name: 'CSS',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Java',
    },
    {
        id: 8,
        name: 'C#',
    }
]

export const socialMedia = [
    {
        id: 1,
        name: 'GitHub',
        href: 'https://github.com/YePhone-Kyaw',
    },
    {
        id: 2,
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ye-phone-kyaw-george-1161a7223/',
    },
    {
        id: 3,
        name: 'Facebook',
        href: "https://www.facebook.com/yair.yint.92798/",
    },
    {
        id: 4,
        name: 'Instagram',
        href: 'https://www.instagram.com/yair2202/'
    },
    {
        id: 5,
        name: 'Resume',
        href: '/Resume.pdf'
    }
]

export const email = 'yephonekyaw920@gmail.com'


export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };