import './homework_10.scss';

function lightWidget(rootElementSelector) {

    const rootElement = document.querySelector(rootElementSelector);
    const lights = rootElement.querySelectorAll('.light');
    const globalSwitcher = rootElement.querySelector('.globalSwitcher');

    lights.forEach((light) => {
        const bntToggle = light.querySelector('.light_switcher');

        bntToggle.onclick = toggleLight;

        function toggleLight() {
            if (switchIsOn()) {
                clearAll();
                light.classList.add('light_toggle');
            }
        }
    });

    globalSwitcher.onclick = switching;

    function switching() {
        globalSwitcher.classList.toggle('globalSwitcher_on');
        if (switchIsOn() === false) {
            clearAll();
        }
    }

    function switchIsOn() {
        return globalSwitcher.classList.contains('globalSwitcher_on');
    }

    function clearAll() {
        lights.forEach((light) => {
            light.classList.remove('light_toggle');
        });
    }

}

lightWidget('#lights');

