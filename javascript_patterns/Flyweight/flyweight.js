/**
 * Created by Lutskiy on 12.01.14.
 */

// The Flyweight pattern is a classical structural solution for optimizing code that is repetitive,
// slow and inefficiently shares data. It aims to minimize the use of memory in an application
// by sharing as much data as possible with related objects (e.g application configuration, state and so on).

var Book = function ( title, author, genre, pageCount, publisherID, ISBN ) {

    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;

};

// Book Factory singleton
var BookFactory = (function () {
    var existingBooks = {}, existingBook;

    return {
        createBook: function ( title, author, genre, pageCount, publisherID, ISBN ) {

            // Find out if a particular book meta-data combination has been created before
            // !! or (bang bang) forces a boolean to be returned
            existingBook = existingBooks[ISBN];
            if ( !!existingBook ) {
                return existingBook;
            } else {

                // if not, let's create a new instance of the book and store it
                var book = new Book( title, author, genre, pageCount, publisherID, ISBN );
                existingBooks[ISBN] = book;
                return book;

            }
        }
    };

});

// BookRecordManager singleton
var BookRecordManager = (function () {

    var bookRecordDatabase = {};

    return {
        // add a new book into the library system
        addBookRecord: function ( id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability ) {

            var book = bookFactory.createBook( title, author, genre, pageCount, publisherID, ISBN );

            bookRecordDatabase[id] = {
                checkoutMember: checkoutMember,
                checkoutDate: checkoutDate,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book
            };
        },
        updateCheckoutStatus: function ( bookID, newStatus, checkoutDate, checkoutMember, newReturnDate ) {

            var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },

        extendCheckoutPeriod: function ( bookID, newReturnDate ) {
            bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
        },

        isPastDue: function ( bookID ) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse( bookRecordDatabase[bookID].dueReturnDate );
        }
    };

})();