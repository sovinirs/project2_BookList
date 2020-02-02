class Book{
    constructor (title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookList = function (book) {
        // Initialize table body
        const list = document.getElementById("book-list");
        
        // Create list item
        const listItem = document.createElement("tr");
        
        // Create string
        listItem.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
    
        // Add text node
        list.appendChild(listItem);
    
        console.log(list);
    }

    deleteBook = function (target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    showAlert = function (message, alertType) {
        const alertBox = document.createElement("div");
    
        alertBox.className = `alert ${alertType}`;
    
        alertBox.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        // Get form
        const form = document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(alertBox, form);
    
        // Time out
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000);
    
    }
    
    clearFields = function () {
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById('isbn').value = '';
    }

}

// Event for submit click
document.getElementById("button").addEventListener('click', function(e){
    // Initialize variables
    const title = document.getElementById("title").value,
    author = document.getElementById("author").value;
    isbn = document.getElementById("isbn").value;

    const ui = new UI();

    if(title === '' | author === '' | isbn === ''){
        // Show error alert
        ui.showAlert("Please don't leave any field empty", "error")
    } else {
        // Call the constructor
        const book = new Book(title, author, isbn);
        // Add the list item
        ui.addBookList(book);
        // Show success alert
        ui.showAlert("Book added successfully","success");
        // Clear the input fields
        ui.clearFields();
    }
    e.preventDefault();
});

// Event listener for delete item
document.getElementById("book-list").addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBook(e.target);

    // Show delete alert
    ui.showAlert("Book deleted sucessfully", "success");
});

