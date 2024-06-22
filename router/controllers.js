let siteLanguage;
let title;
let description;
let robots;
let canonical;
let urlImgRSS;

const mainPage = ( req, res ) => {
    title = 'Código Líquido || Desarrollo Web Fullstack';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'all, max-image-preview:large';
    canonical = 'https://codigoliquido.com';
    urlImgRSS = '/img/imagen-rss.png';
    siteLanguage = "es";

    res.render('inicio', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
        siteLanguage,
    });
};

const privacyPage = ( req, res ) => {
    title = 'Código Líquido || Política de Privacidad';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'noindex, nofollow, max-image-preview:large';
    canonical = 'https://codigoliquido.com/politica-de-privacidad';
    urlImgRSS = '/img/imagen-rss.png';
    siteLanguage = "es";

    res.render('privacy-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
        siteLanguage,
    });
};

const cookiesPage = ( req, res ) => {
    title = 'Código Líquido || Política de Cookies';
    description = 'Especialista en desarrollo web fullstack. Proyectos de alta calidad con tecnologías avanzadas, desde el diseño UX/UI hasta la integración de APIs y bases de datos.';
    robots = 'noindex, nofollow, max-image-preview:large';
    canonical = 'https://codigoliquido.com/politica-de-cookies';
    urlImgRSS = '/img/imagen-rss.png';
    siteLanguage = "es";

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
    siteLanguage = "es"

    res.render('not-found-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
        siteLanguage
    });
};

const portfolioPage = ( req, res ) => {
    title = 'Ulises Pineda || Fullstack Web Developer';
    description = 'Fullstack web development specialist. High quality projects with advanced technologies, from UX/UI design to API and database integration, from landing page to complex commercial and enterprise web systems.';
    robots = 'all, max-image-preview:large';
    canonical = 'https://codigoliquido.com/portafolio';
    urlImgRSS = '/img/imagen-rss-ulises-pineda.png';
    siteLanguage = "en"

    res.render('portfolio-page', {
        title,
        description,
        robots,
        canonical,
        urlImgRSS,
        siteLanguage
    });
};

module.exports = {
    mainPage,
    privacyPage,
    cookiesPage,
    portfolioPage,
    notFoundPage,
};