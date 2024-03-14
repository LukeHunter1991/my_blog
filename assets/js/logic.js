// Creates variables for the light/dark mode toggle and the body element.
const switchEl = document.querySelector("#display-toggle");
const bodyEl = document.querySelector("body")

// Event listener for the light/dark mode toggle.
switchEl.addEventListener('click', function () {
    // Gets curent display mode of the switch element.
    state = switchEl.dataset.status;

    // If light when the element is clicked, will change to dark mode by updating the class in the body element.
    if (state === 'light') {
        switchEl.dataset.status = 'dark';
        switchEl.textContent = '🌙';
        bodyEl.setAttribute('class', 'dark');

    // If dark when the element is clicked, will change to light mode by updating the class in the body element.
    } else {
        switchEl.dataset.status = 'light';
        switchEl.textContent = '🌞';
        bodyEl.setAttribute('class', 'light');
    }

})
