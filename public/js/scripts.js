const isMainPage = document.querySelector('.main-page');

/*---------- Background Animado ----------*/
const animatedBackground = () => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const followMouse = () => {
        const cursorBuble = document.querySelector('.interactive');
        currentX += (targetX - currentX) / 15;
        currentY += (targetY - currentY) / 15;
        cursorBuble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
        requestAnimationFrame(() => {
            followMouse();
        });
    };

    const mouseCoordinates = () => {
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });
    };

    mouseCoordinates();
    followMouse();

};

/*---------- Texto Aleatorio ----------*/
const scrambleText = () => {
    const textContainer = document.querySelector('.text');
    const chars = '!<>-_\\/[]{}—=+*^?#%_(__)_&';
    const phrases = [
        'Sitios Web Dinámicos',
        'Desarrollo Web Eficiente',
        'API\'s Dedicadas',
        'Bases de Datos para Web',
        'Desarrollo Personalizado',
        'Tecnologías Web Modernas',
        'Desarrollo Interactivo',
    ];
    
    let frameRequest;
    let frame = 0;
    let queue = [];
    let resolveFunction;
    let counter = 0;

    const randomChar = () => {
        return chars[Math.floor(Math.random() * chars.length)];
    };

    const update = () => {
        let output = '';
        let complete = 0;
        for (let i = 0, n = queue.length; i < n; i++) {
            let { from, to, start, end, char } = queue[i];
            if (frame >= end) {
                complete++;
                output += to;
            } else if (frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = randomChar();
                    queue[i].char = char;
                }
                output += `<span class="simbols">${char}</span>`;
            } else {
                output += from;
            }
        }
        textContainer.innerHTML = output;
        if (complete === queue.length) {
            resolveFunction();
        } else {
            frameRequest = requestAnimationFrame(update);
            frame++;
        }
    };

    const setText = (newText) => {
        const oldText = textContainer.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (resolveFunction = resolve));
        queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(frameRequest);
        frame = 0;
        update();
        return promise;
    };

    const initScrambleText = () => {
        setTimeout(() => {
            setText(phrases[counter]).then(() => {
                setTimeout(initScrambleText, 1500);
            });
            counter = (counter + 1) % phrases.length;        
        }, 1400);
    };

    initScrambleText();

};

/*---------- ESTADO ACTIVE EN LINKS ----------*/
const handleLinksActive = () => {
    const logo = document.querySelector('.logo-container');
    const links = document.querySelectorAll('.site-links');
    const titles = document.querySelector('.title-section');
    const aboutSection = document.querySelector('.about-section');
    const portfolioSection = document.querySelector('.portfolio-section');
    const contactSection = document.querySelector('.contact-section');
    const homeLink = document.querySelector('button[data-link=home]');
    
    const addActiveClassLink = () => {
        for (const link of links) {
            link.addEventListener('click', (e) => {
                if( e.target === e.currentTarget ) {
                    links.forEach(link => link.lastChild.classList.remove('hover-line-active'));
                    e.target.lastChild.classList.add('hover-line-active');
                    titles.classList.add('hide-title-section');
                    if( e.target.getAttribute('data-link') === 'home' ) {
                        titles.classList.remove('hide-title-section')
                        aboutSection.classList.remove('about-section-active');
                        portfolioSection.classList.remove('portfolio-section-active');
                        contactSection.classList.remove('contact-section-active');
                    }
                    if( e.target.getAttribute('data-link') === 'about' ) {
                        aboutSection.classList.add('about-section-active');
                        portfolioSection.classList.remove('portfolio-section-active');
                        contactSection.classList.remove('contact-section-active');
                    }
                    if ( e.target.getAttribute('data-link') === 'portfolio' ) {
                        portfolioSection.parentElement.classList.add('second-view-index');
                        contactSection.parentElement.classList.remove('second-view-index');
                        portfolioSection.classList.add('portfolio-section-active');
                        aboutSection.classList.remove('about-section-active');
                        contactSection.classList.remove('contact-section-active');
                    }
                    if ( e.target.getAttribute('data-link') === 'contact' ) {
                        contactSection.parentElement.classList.add('second-view-index');
                        portfolioSection.parentElement.classList.remove('second-view-index');
                        contactSection.classList.add('contact-section-active');
                        portfolioSection.classList.remove('portfolio-section-active');
                        aboutSection.classList.remove('about-section-active');
                    }
                }
                else {
                    return
                }
            }); 
        }
    };

    const addActiveClassInLogo = () => {
        logo.addEventListener('click', (e) => {
            links.forEach(link => link.lastChild.classList.remove('hover-line-active'));
            homeLink.lastChild.classList.add('hover-line-active');
            titles.classList.remove('hide-title-section');
            aboutSection.classList.remove('about-section-active');
            portfolioSection.classList.remove('portfolio-section-active');
            contactSection.classList.remove('contact-section-active');
            portfolioSection.parentElement.classList.remove('second-view-index');
            contactSection.parentElement.classList.remove('second-view-index');
        });
    };

    addActiveClassLink();
    addActiveClassInLogo();

};

/*---------- Manejo del Formulario ----------*/
const handleform = () => {
    const messageContainer = document.querySelector('.form-message');
    const formButton = document.querySelector('.form-button');
    const formSite = document.querySelector('.form-site');
    const specialCharacter = /[`~!@#$%^&*()_°¬|+\-=?;:"<>\{\}\[\]\\\/]/;
    const mailChain = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const showMessage = ( message ) => {
        messageContainer.classList.add('form-message-active');
        messageContainer.innerText = message;
        setTimeout(() => {
            messageContainer.classList.remove('form-message-active');
            messageContainer.innerText = '';
        }, 2000);
    };
    const disableForm = () => {
        formButton.setAttribute('disabled', 'true');
        formButton.classList.add('form-button-blocked');
        messageContainer.classList.add('form-message-processing');
        messageContainer.innerText = 'Enviando información...';
    };
    const enableForm = () => {
        messageContainer.innerText = '¡INFORMACIÓN RECIBIDA EXITOSAMENTE!';
        formSite.reset();        
        formButton.removeAttribute('disabled');
        formButton.classList.remove('form-button-blocked');
        setTimeout(() => {
            messageContainer.classList.remove('form-message-processing');
            messageContainer.innerText = '';
        }, 1700);
    };
    const sendMessage = async( name, phone, email )=>{
        try {
            disableForm();
            await fetch('https://formspree.io/f/mzbnqjan', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({name, phone, email})
            });
            enableForm();
        } catch ( error ) {
            console.log( error );
            showMessage('Ocurrió un error al enviar tu información');
        }
    };    

    formSite.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameForm = document.querySelector('#name').value;
        const phoneForm = document.querySelector('#phone').value;
        const emailForm = document.querySelector('#email').value;

        if( nameForm === '' || phoneForm === '' || emailForm === '' ) {
            showMessage('Todos los campos son obligatorios');
            return;
        }
        if(nameForm.length > 35){
            showMessage('El nombre es muy largo');
            return;
        }
        if(specialCharacter.test(nameForm)){
            showMessage('No puedes usar caracteres especiales en el nombre');
            return;
        }
        if(phoneForm.length > 12){
            showMessage('El formato de teléfono es incorrecto');
            return;
        }
        if(specialCharacter.test(phoneForm)){
            showMessage('El número de teléfono no acepta caracteres especiales');
            return;
        }
        if(isNaN(parseInt(phoneForm))){
            showMessage('El formato de teléfono solo acepta números');
            return;
        }
        if(!mailChain.test(emailForm)){
            showMessage('El formato de tu correo es inválido');
            return;
        }
        sendMessage( nameForm, phoneForm, emailForm );
    });
};

const initialScripts = () => {
    if( isMainPage ) {
        handleform();
        scrambleText();
        handleLinksActive();
        animatedBackground();
    }
    else {
        animatedBackground();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initialScripts();
});