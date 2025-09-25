
const hero = document.getElementById("hero");
const backgrounds = [

    "assets/hero_banner/books.jpg",
    "assets/hero_banner/romeo.jpg",
    "assets/hero_banner/typing-machine.jpg",
    // "assets/hero_banner/creepy-doll.jpg",
    // "assets/hero_banner/fantasy.jpg",
    "assets/hero_banner/romeo_juliet.jpg"
];

let current = 0;

// Set the first image immediately
hero.style.backgroundImage = `url('${backgrounds[current]}')`;

// Then rotate every 7 seconds
setInterval(() => {
    current = (current + 1) % backgrounds.length;
    hero.style.backgroundImage = `url('${backgrounds[current]}')`;
}, 5000);



// second section

const books = [
    {
        bg: 'assets/categories/little-women.jpg',
        thumb: 'assets/categories/little-women.jpg',
        title: 'Little Women',
        author: 'Author : Louisa May Alcott',
        desc: '"Little Women" follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—as they grow up during the Civil War era. It’s a heartwarming story of family, love, struggle, and the journey from childhood to womanhood.'
    },

    {
        bg: 'assets/categories/pride-and-prejudice.jpg',
        thumb: 'assets/book_cover/pride-and-prejudice-9781471134746_hr.jpg',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        desc: 'A classic romance about Elizabeth Bennet and Mr. Darcy, exploring love, pride, and social expectations. It highlights wit, misunderstandings, and the search for true happiness.'

    },

    {
        bg: 'assets/hero_banner/romeo_juliet.jpg',

        thumb: 'assets/book_cover/124983282.jpg',
        title: 'Romeo and Juliet',
        author: 'William Shakespeare',
        desc: 'A timeless tragedy of Romeo and Juliet, two young lovers whose passion is doomed by family conflict, fate, and sacrifice. Their story remains one of the most powerful portrayals of love and loss.'

    },
    {
        bg: 'assets/categories/Frankenstein1.webp',
        thumb: 'assets/categories/Frankenstein_cover.jpg',
       
title: 'Jane Eyre: An Autobiography by Charlotte Brontë',
author: 'Charlotte Brontë',
desc: 'Jane Eyre follows an orphan who grows into a strong, independent woman. Her love for Mr. Rochester tests her search for freedom and identity.'

    }
];

let currentIndex = 0;
const bgLayer = document.getElementById('bgLayer');
const bookContent = document.getElementById('bookContent');
const bookThumb = document.getElementById('bookThumb');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookDesc = document.getElementById('bookDesc');

function updateBook() {
    // Fade out
    bookContent.style.opacity = 0;
    bgLayer.style.opacity = 0;

    setTimeout(() => {
        const book = books[currentIndex];
        bgLayer.style.backgroundImage = `url(${book.bg})`;
        bookThumb.src = book.thumb;
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookDesc.textContent = book.desc;

        // Fade in
        bookContent.style.opacity = 1;
        bgLayer.style.opacity = 1;

        // Next index
        currentIndex = (currentIndex + 1) % books.length;
    }, 500); // half-second fade
}

updateBook();

// Change every 6 seconds
setInterval(updateBook, 6000);




// hamburger

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});