window.onload = initAll;
var saveBookButton;
function initAll(){
    saveBookButton = document.getElementById('save_book');
    saveBookButton.onclick = saveBook;
}

function saveBook(){
    var name = document.getElementById('book_name').value;
    var price = document.getElementById('book_price').value;
    var pages = document.getElementById('book_pages').value;

    alert(name);
    alert(price);
    alert(pages);
}


