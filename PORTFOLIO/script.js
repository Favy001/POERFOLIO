document.addEventListener('DOMContentLoaded', () => {
    const EMAILJS_SERVICE_ID = 'service_xf3yabx';
    const EMAILJS_TEMPLATE_ID = 'template_gylhw22';
    const EMAILJS_PUBLIC_KEY = 'egE5_xK8aise2cbqy';
    const EMAILJS_CONFIGURED = window.emailjs &&
        EMAILJS_SERVICE_ID !== 'service_XXXXXXX' &&
        EMAILJS_TEMPLATE_ID !== 'template_YYYYYYY' &&
        EMAILJS_PUBLIC_KEY !== 'your_public_key';

    if (window.emailjs) {
        if (EMAILJS_CONFIGURED) {
            emailjs.init(EMAILJS_PUBLIC_KEY);
        } else {
            console.log('EmailJS configuration incomplete. Add your Service ID, Template ID, and Public Key.');
        }
    } else {
        console.error('EmailJS SDK was not loaded. The contact form will not work without it.');
    }

    const navLinks = document.querySelectorAll('.side-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const sections = document.querySelectorAll('main .section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const link = document.querySelector(`.side-nav a[href="#${id}"]`);
            if (entry.isIntersecting) {
                link?.classList.add('active');
            } else {
                link?.classList.remove('active');
            }
        });
    }, { threshold: 0.25 });

    sections.forEach(section => sectionObserver.observe(section));

    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please complete all fields before sending.');
            return;
        }

        if (EMAILJS_CONFIGURED) {
            const templateParams = {
                from_name: name,
                from_email: email,
                reply_to: email,
                subject: 'New contact request from portfolio',
                message: message
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(() => {
                    alert(`Thank you, ${name}! Your message has been sent.`);
                    form.reset();
                })
                .catch((error) => {
                    console.error('EmailJS error:', error);
                    alert('There was an error sending your message. Please try again later.');
                });
        } else {
            alert(`Thank you, ${name}! Your message details:\n\nEmail: ${email}\nMessage: ${message}\n\nNote: Email service is not configured yet. Contact configuration is needed to send emails.`);
            form.reset();
        }
    });

    const skillPills = document.querySelectorAll('.skill-pill');
    skillPills.forEach((pill, index) => {
        pill.style.opacity = '0';
        pill.style.transform = 'translateY(20px)';
        pill.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        setTimeout(() => {
            pill.style.opacity = '1';
            pill.style.transform = 'translateY(0)';
        }, 120 * index);
    });
});