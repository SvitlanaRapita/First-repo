import './homework_11.scss';

function accordionWidget(rootElementSelector, moviesList) {

    const rootElement = document.querySelector(rootElementSelector);

    function renderAccordion() {


        moviesList.forEach((movies) => {
            let accordionEl = document.createElement('div');
            accordionEl.classList.add('accordion');

            const titleEl = document.createElement('div');
            titleEl.classList.add('accordion_title');
            titleEl.textContent = movies.title;
            accordionEl.appendChild(titleEl);

            const contentEl = document.createElement('div');
            contentEl.classList.add('accordion_content');
            contentEl.innerHTML = movies.content;
            accordionEl.appendChild(contentEl);

            rootElement.appendChild(accordionEl);
        });

    }

    function renderWidget() {
        rootElement.classList.add('accordionWidget');
        renderAccordion();
    }

    renderWidget();

    const accordions = rootElement.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
        const title = accordion.querySelector('.accordion_title');

        title.addEventListener('click', accordionActive);

    });

    function accordionActive(e) {
        clearAll();
        e.target.parentElement.classList.add('accordion_active');
    }

    function clearAll() {
        accordions.forEach((accordion) => {
            accordion.classList.remove('accordion_active');
        });
    }
}

const categories = [
    {
        title: 'Фильмы',
        content: '<p>lorem asdasdas</p>'
    },
    {
        title: 'Мультфильмы',
        content: '<p>lorem asdasdas</p>'
    },
    {
        title: 'Избранное',
        content: '<p>lorem asdasdas</p>'
    }
];

accordionWidget ('#moviesOnline', categories);