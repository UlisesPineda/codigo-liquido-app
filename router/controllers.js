let title;
let description;
let robots;
let canonical;
let urlImgRSS

const mainPage = ( req, res ) => {
    title = 'Código Líquido || Desarrollo Web Fullstack';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'all, max-image-preview:large';
    canonical = 'https://codigoliquido.com';
    urlImgRSS = '/img/imagen-rss.png';

    res.render('inicio', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
    });
};

const privacyPage = ( req, res ) => {
    title = 'Código Líquido || Política de Privacidad';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'noindex, nofollow, max-image-preview:large';
    canonical = 'https://codigoliquido.com/politica-de-privacidad';
    urlImgRSS = '/img/imagen-rss.png';

    res.render('privacy-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
    });
};

const cookiesPage = ( req, res ) => {
    title = 'Código Líquido || Política de Cookies';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'noindex, nofollow, max-image-preview:large';
    canonical = 'https://codigoliquido.com/politica-de-cookies';
    urlImgRSS = '/img/imagen-rss.png';

    res.render('cookies-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
    });
};

const notFoundPage = ( req, res ) => {
    title = '¡ No Encontrado !';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'noindex, nofollow, max-image-preview:large';
    canonical = 'https://codigoliquido.com';
    urlImgRSS = '/img/imagen-rss.png';

    res.render('not-found-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
    });
};

const portfolioPage = ( req, res ) => {
    title = 'Ulises Pineda || Desarrollador Web Fullstack';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos, desde una landing page hasta complejos sistemas web comerciales y empresariales.';
    robots = 'all, max-image-preview:large';
    canonical = 'https://codigoliquido.com/portafolio';
    urlImgRSS = '/img/imagen-rss-ulises-pineda.png';

    res.render('portfolio-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
    });
};

module.exports = {
    mainPage,
    privacyPage,
    cookiesPage,
    portfolioPage,
    notFoundPage,
};