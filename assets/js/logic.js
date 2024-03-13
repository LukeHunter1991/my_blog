const switchEl = document.querySelector("#display-toggle");
const bodyEl = document.querySelector("body")
const backBtn = document.querySelector("#back")

switchEl.addEventListener('click', function () {
    state = switchEl.dataset.status;

    if (state === 'light') {
        switchEl.dataset.status = 'dark';
        switchEl.textContent = '🌙';
        bodyEl.setAttribute('class', 'dark');
    } else {
        switchEl.dataset.status = 'light';
        switchEl.textContent = '🌞';
        bodyEl.setAttribute('class', 'light');
    }

})
