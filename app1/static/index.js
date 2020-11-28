window.onload = initAll;
var saveBookButton;
var showBook;

function initAll() {
    saveBookButton = document.getElementById('save_book');
    saveBookButton.addEventListener('click', saveBook);
    showBook = document.getElementById('showBook');
    showBook.addEventListener('click', showAllBooks);
}

function showAllBooks() {
    console.log('show books clicked');
    let url = '/getAllBooks';
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = eval(req.responseText)
            // alert(data);
            let div = document.getElementById('nav-profile');
            div.innerHTML = "";

            let table = document.createElement('TABLE');

            let row = table.insertRow(0);
            let name = row.insertCell(0);
            let price = row.insertCell(1);
            let pages = row.insertCell(2);
            let clicktodelete = row.insertCell(3);

            name.innerHTML = 'Book Name';
            price.innerHTML = 'Price';
            pages.innerHTML = 'No. of Pages';
            clicktodelete.innerHTML = 'Delete Book';

            for (let i = 0; i < data.length; i++) {
                let row = table.insertRow(i + 1);
                let name = row.insertCell(0);
                let price = row.insertCell(1);
                let pages = row.insertCell(2);
                let deletebook = row.insertCell(3);

                name.innerHTML = data[i].name;
                price.innerHTML = data[i].price;
                pages.innerHTML = data[i].pages;
                deletebook.innerHTML = '&times';
                deletebook.className = 'text-danger text-center deleteButton';
                deletebook.style.fontSize = '20px';
                deletebook.style.cursor = 'pointer';
                deletebook.id = data[i].id;
                deletebook.onclick = function () {
                    let obj = this;
                    // alert(this.id);
                    let id = this.id;
                    let url = '/deletebook?id=' + id;
                    let req = new XMLHttpRequest();
                    req.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            alert('delete book?')
                            console.log(req.responseText);
                            if (req.responseText == 'true') {
                                table.deleteRow(obj.parentNode.rowIndex);
                            }

                        }
                    };
                    req.open("GET", url, true);
                    req.send();
                }
            }

            table.className = 'table table-striped text-center';
            div.appendChild(table);

        }
    }
    req.open("GET", url, true);
    req.send();
}


function saveBook() {
    var name = document.getElementById('book_name').value;
    var price = document.getElementById('book_price').value;
    var pages = document.getElementById('book_pages').value;

    // alert(name);
    // alert(price);
    // alert(pages);

    var url = '/save_book?name='+name+'&price='+price+'&pages='+pages;
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert('save Book:'+(req.responseText));
            console.log(req.responseText);
            if (req.responseText == 'true') {
                document.getElementById('book_name').value = "";
                document.getElementById('book_price').value = "";
                document.getElementById('book_pages').value = "";
            }
        }
    }
    req.open("GET", url, true);
    req.send();
}

