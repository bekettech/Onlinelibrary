// Sample book data (usually this would come from a server)
let books = [
    {
        id: 1,
        title: "The Evolution of Everything",
        author: "Matt Ridley",
        coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73",
        content: "Sample content for this book..."
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        coverUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666",
        content: "Sample content for this book..."
    }
];

// DOM Elements
const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const bookReader = document.getElementById('bookReader');
const bookContent = document.getElementById('bookContent');

// Display all books
function displayBooks(booksToShow = books) {
    bookGrid.innerHTML = booksToShow.map(book => `
        <div class="book-card" onclick="openBook(${book.id})">
            <img src="${book.coverUrl}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
            </div>
        </div>
    `).join('');
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
});

// Open book reader
function openBook(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    bookContent.innerHTML = `
        <h2>${book.title}</h2>
        <h3>by ${book.author}</h3>
        <div class="book-text">
            ${book.content}
        </div>
    `;
    bookReader.style.display = 'block';
}

// Close book reader
function closeReader() {
    bookReader.style.display = 'none';
}

// Initialize the app
displayBooks();
