console.log("This is index.js");
//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

//diplay contructor
function Display() {

}

//add methods to display prototype
Display.prototype.add = function (book) {
    console.log("adding to ui");
    tablebody = document.getElementById('tablebody')
    let uiString = ` <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;

    tablebody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset()
}
Display.prototype.add = function () { }

//submit event
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You Have Submitted Your Library Form');
    let name = document.getElementById('BookName').Value;
    let author = document.getElementById('AuthorName').Value;
    let type;
    let fiction = document.getElementById('fiction');
    let nonfiction = document.getElementById('nonfiction');
    let programming = document.getElementById('programming');
    let informationTechnology = document.getElementById('informationTechnology');
    let civilengineering = document.getElementById('civilengineering');
    let electricalengineering = document.getElementById('electricalengineering');

    if (fiction.checked) {
        type = fiction.Value;

    }
    else if (nonfiction.checked) {
        type = nonfiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (informationTechnology.checked) {
        type = informationTechnology.value;
    }
    else if (civilengineering.checked) {
        type = civilengineering.value;
    }

    else if (electricalengineering.checked) {
        type = electricalengineering.value;
    }

    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();
    if (display.validate(book)){
    display.add(book);
    display.clear();
    }

    else{
        //show eror
        display.show('error')
    }



    e.preventDefault();

}




