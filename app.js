const bookmarkEl = document.getElementById('bookmark-container');
const radioBtnEls = document.querySelectorAll('input[type=radio]');
const backProjectBtnEl = document.getElementById('back-project-btn');
const closeBtnMdlEl = document.getElementById('close-modal-btn');
const selectRwdBtnEls = document.querySelectorAll('#get-started .btn');
const pledgeAmountInEl = document.querySelectorAll('.accordion input');
console.log(pledgeAmountInEl);

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

// Add Event Listeners

for (const el of radioBtnEls) {
    el.addEventListener('click', radioBtnClickHandler);
}

for (const el of selectRwdBtnEls) {
    el.addEventListener('click', selectRewardBtnHandler);
}

bookmarkEl.addEventListener('click', bookmarkClickHandler);
backProjectBtnEl.addEventListener('click', backProjectClickHandler);
closeBtnMdlEl.addEventListener('click', closeBtnMdlHandler);