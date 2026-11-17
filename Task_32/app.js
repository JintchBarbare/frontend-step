const container = document.querySelector('.container')
const erro_msg = document.querySelector('.erro_msg')
const searchFilter = document.querySelector('.filter')
const categoryFilter = document.querySelector('.category-filter')

const API_URL = 'https://api.everrest.educata.dev/shop/products/all'

function renderProducts(products) {
    if (products.length === 0) {
        container.innerHTML = ''
        erro_msg.innerHTML = `<div>No matching products found.</div>`
        return
    }

    erro_msg.innerHTML = ''
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price.current} ${product.price.currency}</strong></p>
        </div>
    `).join('')
}

function populateCategories(products) {
    const categories = [...new Set(products.map(item => item.category?.name || item.category).filter(Boolean))]
    
    categories.forEach(category => {
        const option = document.createElement('option')
        option.value = category
        option.textContent = category
        categoryFilter.appendChild(option)
    })
}

let data = []

async function getData() {
    try {
        const resp = await fetch(API_URL)

        if (!resp.ok) throw new Error("Error " + resp.status)

        const resp_obj = await resp.json()
        data = resp_obj.products
        populateCategories(data)
        renderProducts(data)
    } catch (error) {
        console.error(error)
        erro_msg.innerHTML = `<div>No data found!!!</div>`
    }
}

function applyFilters() {
    const searchText = searchFilter.value.toLowerCase()
    const selectedCategory = categoryFilter.value

    const filtered = data.filter(item => {
        const matchesTitle = item.title.toLowerCase().includes(searchText)
        const itemCategory = item.category?.name || item.category
        const matchesCategory = selectedCategory === 'all' || itemCategory === selectedCategory

        return matchesTitle && matchesCategory
    })

    renderProducts(filtered)
}

getData()

searchFilter.addEventListener('keyup', applyFilters)
categoryFilter.addEventListener('change', applyFilters)