// Variables
let currentAmount = 89914;
let daysLeft = 56;
let backers = 5007;
const targetAmount = 100000;

// Elements

const bookmarkEl = document.getElementById('bookmark-container');
const radioBtnEls = document.querySelectorAll('input[type=radio]');
const backProjectBtnEl = document.getElementById('back-project-btn');
const closeBtnMdlEl = document.getElementById('close-modal-btn');
const selectRwdBtnEls = document.querySelectorAll('#get-started .btn');
const modalOptionsEls = document.querySelectorAll('.modal .card');
const pledgeAmountInEl = document.querySelectorAll('.accordion input');
const contBtnEls = document.querySelectorAll('.accordion .btn');
const confBtnEl = document.querySelector('.conf .btn');

// Event Handler Functions

const bookmarkClickHandler = event => {
    bookmarkEl.classList.toggle('marked');
    if (bookmarkEl.classList.contains('marked')){
        event.currentTarget.lastElementChild.innerText = 'Bookmarked';
    } else {
        event.currentTarget.lastElementChild.innerText = 'Bookmark';
    }
}

const radioBtnClickHandler = () => {
    for (const el of radioBtnEls) {
        if (el.checked) {
            el.parentElement.parentElement.classList.add('active');
            el.parentElement.nextElementSibling.classList.add('show');
        } else {
            el.parentElement.parentElement.classList.remove('active');
            el.parentElement.nextElementSibling.classList.remove('show');
        }
    }
}

const backProjectClickHandler = () => {
    document.getElementById('overlay').classList.add('show');
    document.querySelector('.modal').classList.add('show');
}

const closeBtnMdlHandler = () => {
    document.getElementById('overlay').classList.remove('show');
    document.querySelector('.modal').classList.remove('show');
}

const selectRewardBtnHandler = event => {
    backProjectClickHandler();
    togglePledge(event.currentTarget)
}

const confBtnClickHandler = event => {
    document.getElementById('overlay').classList.remove('show');
    event.currentTarget.parentElement.classList.remove('show');
}

const contBtnClickHanlder = event => {
    document.querySelector('.conf').classList.add('show');
    document.querySelector('.modal').classList.remove('show');
    const element = event.currentTarget.parentElement;
    const amount = element.querySelector('input[type=number]').value
    updateUI(amount);
}

// Helper Functions

const togglePledge = element => {
    const idx = getIndexOf(element);
    radioBtnEls.item(idx + 1).click();
}

const getIndexOf = element => {
    let i = 0;
    for (const el of selectRwdBtnEls) {
        if (el == element) {
            return i;
        }
        i++;
    }
    return i;
}

const updateUI = amount => {
    const current = document.getElementById('current');
    const target = document.getElementById('target');
    const backs = document.getElementById('backers');
    const days = document.getElementById('days-left');
    const progress = document.getElementById('progress-status');
    if(amount) {
        currentAmount += +amount;
        backers++;
    }
    current.innerText = `\$${currentAmount.toLocaleString()}`;
    target.innerText = `of \$${targetAmount.toLocaleString()} backed`;
    backs.innerText = backers.toLocaleString();
    days.innerText = daysLeft.toLocaleString();
    const percent = currentAmount/targetAmount * 100;
    progress.style.width = `${percent}%`;
}

// Add Event Listeners

for (const el of radioBtnEls) {
    el.addEventListener('click', radioBtnClickHandler);
}

for (const el of selectRwdBtnEls) {
    el.addEventListener('click', selectRewardBtnHandler);
}

for (const el of contBtnEls) {
    el.addEventListener('click', contBtnClickHanlder);
}

for (const el of modalOptionsEls) {
    el.addEventListener('click', event => {
        event.currentTarget.querySelector('input[type=radio]').click();
    })
}

bookmarkEl.addEventListener('click', bookmarkClickHandler);
backProjectBtnEl.addEventListener('click', backProjectClickHandler);
closeBtnMdlEl.addEventListener('click', closeBtnMdlHandler);
confBtnEl.addEventListener('click', confBtnClickHandler);

// On Init
updateUI();