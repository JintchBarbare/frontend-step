const books = [
    {
        id: 1,
        title: "დიუნი",
        author: "ფრენკ ჰერბერტი",
        genre: "ფანტასტიკა",
        price: 35,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "1984",
        author: "ჯორჯ ორუელი",
        genre: "კლასიკა",
        price: 18,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "მკვლელობა აღმოსავლეთის ექსპრესში",
        author: "აგათა კრისტი",
        genre: "დეტექტივი",
        price: 22,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "ატომური ჩვევები",
        author: "ჯეიმს ქლირი",
        genre: "ფსიქოლოგია",
        price: 28,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "დანაშაული და სასჯელი",
        author: "ფიოდორ დოსტოევსკი",
        genre: "კლასიკა",
        price: 25,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "ჰარი პოტერი და ფილოსოფიური ქვა",
        author: "ჯ.კ. როულინგი",
        genre: "ფანტასტიკა",
        price: 19,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "შერლოკ ჰოლმსის თავგადასავალი",
        author: "ართურ კონან დოილი",
        genre: "დეტექტივი",
        price: 16,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "იფიქრე სწრაფად, იფიქრე ნელა",
        author: "დანიელ კანემანი",
        genre: "ფსიქოლოგია",
        price: 42,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80"
    }
];

let cart = [];


const booksGrid = document.getElementById("books-grid");
const searchInput = document.getElementById("search-input");
const genreSelect = document.getElementById("genre-select");
const priceSelect = document.getElementById("price-select");
const sortSelect = document.getElementById("sort-select");
const resetBtn = document.getElementById("reset-btn");

const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

function renderBooks(bookList) {
    booksGrid.innerHTML = "";

    if (bookList.length === 0) {
        booksGrid.innerHTML = "<p>მოთხოვნის შესაბამისი წიგნი ვერ მოიძებნა.</p>";
        return;
    }

    bookList.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="card-body">
                <span class="book-genre">${book.genre}</span>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="card-meta">
                    <span class="book-price">${book.price} ₾</span>
                    <span class="book-rating">★ ${book.rating}</span>
                </div>
                <button class="btn-add" onclick="addToCart(${book.id})">კალათაში დამატება</button>
            </div>
        `;

        booksGrid.appendChild(card);
    });
}

function filterAndSortBooks() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreSelect.value;
    const maxPrice = priceSelect.value;
    const sortType = sortSelect.value;

    let filtered = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchText) || 
                              book.author.toLowerCase().includes(searchText);
        const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
        const matchesPrice = maxPrice === "all" || book.price <= Number(maxPrice);

        return matchesSearch && matchesGenre && matchesPrice;
    });

    if (sortType === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortType === "rating-desc") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    renderBooks(filtered);
}


function resetFilters() {
    searchInput.value = "";
    genreSelect.value = "all";
    priceSelect.value = "all";
    sortSelect.value = "default";
    renderBooks(books);
}

function addToCart(bookId) {
    const selectedBook = books.find(book => book.id === bookId);
    if (selectedBook) {
        cart.push(selectedBook);
        renderCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    cartCount.textContent = cart.length;

    const totalSum = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = totalSum;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">კალათა ცარიელია</p>';
        return;
    }

    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const cartRow = document.createElement("div");
        cartRow.className = "cart-item";
        cartRow.innerHTML = `
            <div>
                <strong>${item.title}</strong> — ${item.author} (${item.price} ₾)
            </div>
            <button class="btn-remove" onclick="removeFromCart(${index})">წაშლა</button>
        `;
        cartItemsContainer.appendChild(cartRow);
    });
}

searchInput.addEventListener("input", filterAndSortBooks);
genreSelect.addEventListener("change", filterAndSortBooks);
priceSelect.addEventListener("change", filterAndSortBooks);
sortSelect.addEventListener("change", filterAndSortBooks);
resetBtn.addEventListener("click", resetFilters);

renderBooks(books);