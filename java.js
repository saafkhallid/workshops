

function addFavoriteBook(bookName) {

    var favoriteBooks = ["k", "m", "c"];
    var bookName = favoriteBooks.includes("Great")

    if (bookName == false) {
        favoriteBooks.push("Great");
        // console.log(favoriteBooks)
    } else {
        console.log("It already exists");

    }

    function printFavoritBooks() {
        var a = favoriteBooks.length;
        console.log("livres"+" "+"favoris:"+ a);
        for (let value of favoriteBooks) {
            console.log(value);
            // document.write()
        }

    }
    printFavoritBooks()
}
addFavoriteBook()
