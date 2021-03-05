const bookmarkEl = document.getElementById('bookmark-container');
const radioBtnEls = document.querySelectorAll('input[type=radio]');
console.log(radioBtnEls);

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


for (const el of radioBtnEls) {
    el.addEventListener('click', radioBtnClickHandler);
}
bookmarkEl.addEventListener('click', bookmarkClickHandler);