
// my high order functions
function map(array,f){
    var acc=[];
each (array,function(e,i){
    acc.push(f(element,i));
     })
  return acc;
}

 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i], i); 
       } 
 }







const card = $(".cards-container");
const moves = $(".move-counter");
var flipedcardsarr = [];
var move = 0;
var winCount = 0;

const images = [
    { id: 1, 
        image:'https://5.imimg.com/data5/SELLER/Default/2023/2/VR/ED/EZ/184954737/joker-card-500x500.jpg',    
    }, 
    { id: 2, 
        image:'https://i.pinimg.com/736x/94/23/52/94235253b7d68dcc8dcf9239983e19ef.jpg',
    }, 
    { id: 3, 
        image:'https://www.collinsdictionary.com/images/full/deuce_134165750.jpg',   
    }, 
    { id: 4, 
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/1200px-7_of_diamonds.svg.png',  
    }, 
    { 
        id: 5, 
        image:'https://laurabaratastrologer.com/wp-content/uploads/2020/07/6Diamonds-Copy-2.png', 
    }, 
    { 
        id: 6, 
        image:'https://www.collinsdictionary.com/images/full/deuce_134165750.jpg', 
    }, 
    { 
        id: 7, 
        image:'https://laurabaratastrologer.com/wp-content/uploads/2020/07/6Diamonds-Copy-2.png', 
    }, 
    { 
        id: 8, 
        image:'https://i.pinimg.com/736x/94/23/52/94235253b7d68dcc8dcf9239983e19ef.jpg',    
    }, 
    { 
        id: 9, 
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/1200px-01_of_spades_A.svg.png',  
    }, 
    { 
        id: 10, 
        image:'https://5.imimg.com/data5/SELLER/Default/2023/2/VR/ED/EZ/184954737/joker-card-500x500.jpg',  
    }, 
    { 
        id: 11, 
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/1200px-01_of_spades_A.svg.png',  
    }, 
    { 
        id: 12, 
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/7_of_diamonds.svg/1200px-7_of_diamonds.svg.png',  
    } 
];
  //* restart the game *//
  function restartGame() {
    var flipedcards = $(".card.toggled");
    images.sort(function() {
        return Math.random() - 0.5;
    });

    for (var i = 0; i < flipedcards.length; i++) {
        var self = $(flipedcards[i]);
        setTimeout(flipback(self), 0)
    }

    flipedcardsarr.length = 0;
    move = 0;
    winCount = 0;
    moves.text("Moves: " + move);

    var cardImages = $(".card-image")
    for (var i = 0; i < cardImages.length; i++) {
        var imageSrc = images[i].image;
        $(cardImages[i]).attr("src", imageSrc)
    }
}
// flip back the element if they dont match
function flipback(element) {
    return function() {
        element.removeClass("toggled")
    };
}

// restart button
$("#restart").on("click", restartGame);
// flip the cards and check for matches
card.on("click", ".card", function () {
    var cardsthatareclicked = $(this);
    cardsthatareclicked.addClass("toggled");
    flipedcardsarr.push(cardsthatareclicked);

    var thisImgSrc = cardsthatareclicked.find('.card-image').attr('src');
    var firstimage = flipedcardsarr[flipedcardsarr.length - 2].find('.card-image').attr('src');

    if (thisImgSrc !== firstimage) {
        for (var i = 0; i < flipedcardsarr.length; i++) {
            setTimeout(flipback(flipedcardsarr[i]), 800);
        }
        flipedcardsarr.length = 0;
        move++;
    } else {
        flipedcardsarr.length = 0;
        move++;
        winCount++;
    }

    moves.text("Moves: " + move);

    if (winCount === 6) {
        setTimeout(function() {
            alert("Congratulations!!! You won the game in " + move + " moves.");
        }, 300);
    }
});
//create cards and add them to the html file giving them an id to manipulate them with jquerry and css
const cards = images.map(function(item) {
    var addedcards = '<div class="card">';
    addedcards += '<img src="https://www.imagearea.co.uk/theinthing/products/misc/16773a.jpg" class="outline-image">';
    addedcards += '<img id="' + item.id + '" src="' + item.image + '" class="card-image">';
    addedcards += '</div>';
    return addedcards;
});

card.html(cards.join(''));
