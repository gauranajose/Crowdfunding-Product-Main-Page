const bookmarkEl = document.getElementById('bookmark-container');
console.log(bookmarkEl);

const bookmarkClickHandler = event => {
    bookmarkEl.classList.toggle('marked');
    if (bookmarkEl.classList.contains('marked')){
        event.currentTarget.lastElementChild.innerText = 'Bookmarked';
    } else {
        event.currentTarget.lastElementChild.innerText = 'Bookmark';
    }
}

bookmarkEl.addEventListener('click', bookmarkClickHandler);