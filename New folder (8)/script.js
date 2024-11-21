// Array of product objects
const products = [
    {
        image: "assets/Apple-iPhone-14-Pro.jpg",
        name: "iPhone 14 Pro Max",
        price: "PKR 320,000"
    },
    {
        image: "assets/civic-2023.png",
        name: "Honda Civic 2023",
        price: "PKR 5,000,000"
    },
    {
        image: "assets/dell.jpg",
        name: "Dell Inspiron 15",
        price: "PKR 150,000"
    },
    {
        image: "assets/Sony-PlayStation-5.jpg",
        name: "Sony PlayStation 5",
        price: "PKR 120,000"
    },
    {
        image: "assets/samsung-galaxy-watch.jpg",
        name: "Samsung Galaxy Watch",
        price: "PKR 30,000"
    },
    {
        image: "assets/house-sale.jpg",
        name: "House",
        price: "PKR 25,000000"
    },
    {
        image: "assets/cycle.jpg",
        name: "Cycle",
        price: "PKR 25,000"
    },
    {
        image: "assets/bike.jpg",
        name: "Bike",
        price: "PKR 49,0000"
    }
];

// Function to render product cards
const renderCards = () => {
    const container = document.getElementById('productCards');
    products.forEach(product => {
        const cardHTML = `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="details">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
};

// Call the render function
renderCards();