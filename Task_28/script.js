const API_URL = "https://6afb6770730c1d152f338dbc.mockapi.io/items"; 

const itemsContainer = document.getElementById("items-container");
const itemForm = document.getElementById("item-form");
const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");

async function fetchItems() {
    try {
        const response = await fetch(API_URL);
        const items = await response.json();
        
        itemsContainer.innerHTML = "";
        
        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            card.innerHTML = `
                <div class="card-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <button onclick="deleteItem('${item.id}')">წაშლა</button>
            `;
            
            itemsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("შეცდომა მონაცემების წამოღებისას:", error);
    }
}

itemForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const newItem = {
        title: titleInput.value,
        description: descInput.value
    };

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        });

        titleInput.value = "";
        descInput.value = "";
        fetchItems(); // სიის განახლება
    } catch (error) {
        console.error("შეცდომა დამატებისას:", error);
    }
});


async function deleteItem(id) {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        fetchItems();
    } catch (error) {
        console.error("შეცდომა წაშლისას:", error);
    }
}

fetchItems();