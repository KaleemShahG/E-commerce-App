const data = {
  Electronics: [
    { title: "Microwave", desc: "Fast cooking microwave", price: "Rs 25,000", img: "images/pic1.jpg" },
    { title: "Refrigerator", desc: "Energy saving fridge", price: "Rs 85,000", img: "images/refrigerator.jpg" },
    { title: "Blender", desc: "High speed blender", price: "Rs 9,500", img: "images/blender.webp" },
    { title: "LED TV", desc: "Smart LED television", price: "Rs 120,000", img: "images/tv.webp" }
  ],

  Fashion: [
    { title: "T-Shirt", desc: "Cotton casual shirt", price: "Rs 2,000", img: "images/tshirt.webp" },
    { title: "Jeans", desc: "Slim fit jeans", price: "Rs 4,500", img: "images/jeans.webp" },
    { title: "Jacket", desc: "Winter jacket", price: "Rs 8,000", img: "images/jacket.webp" },
    { title: "Cap", desc: "Stylish cap", price: "Rs 1,200", img: "images/cap.jpg" }
  ],

  Home: [
    { title: "Washing Machine", desc: "Automatic washer", price: "Rs 70,000", img: "images/washingmachine.png" },
    { title: "Vacuum Cleaner", desc: "Powerful suction", price: "Rs 18,000", img: "images/vacuum.webp" },
    { title: "Iron", desc: "Steam iron", price: "Rs 4,000", img: "images/iron.webp" },
    { title: "Air Cooler", desc: "Fast cooling", price: "Rs 22,000", img: "images/aircooler.webp" }
  ],

  Beauty: [
    { title: "Makeup Kit", desc: "Complete beauty kit", price: "Rs 6,500", img: "images/makeup.webp" },
    { title: "Perfume", desc: "Long lasting scent", price: "Rs 5,000", img: "images/perfume.webp" },
    { title: "Face Cream", desc: "Skin care cream", price: "Rs 2,800", img: "images/cream.webp" },
    { title: "Hair Dryer", desc: "Quick drying", price: "Rs 7,500", img: "images/hairdryer.png" }
  ],

  Sports: [
    { title: "Football", desc: "Professional football", price: "Rs 3,500", img: "images/football.jpg" },
    { title: "Cricket Bat", desc: "Premium bat", price: "Rs 9,000", img: "images/bat.jpg" },
    { title: "Tennis Racket", desc: "Lightweight racket", price: "Rs 6,800", img: "images/racket.jpg" },
    { title: "Gym Gloves", desc: "Comfort grip", price: "Rs 1,500", img: "images/gloves.webp" }
  ],

  Books: [
    { title: "Programming Book", desc: "Learn coding", price: "Rs 2,200", img: "images/programming.jpg" },
    { title: "Business Book", desc: "Startup guide", price: "Rs 1,900", img: "images/business.webp" },
    { title: "Novel", desc: "Best selling novel", price: "Rs 1,500", img: "images/novel.webp" },
    { title: "Self Help", desc: "Motivational book", price: "Rs 1,800", img: "images/selfhelp.jpg" }
  ]
};

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts() {
  container.innerHTML = "";
  const search = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  for (let category in data) {
    if (selectedCategory !== "all" && category !== selectedCategory) continue;

    const productsHTML = data[category]
      .filter(p => p.title.toLowerCase().includes(search))
      .map(p => `
        <div class="card">
          <img src="${p.img}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <strong>${p.price}</strong>
        </div>
      `).join("");

    if (productsHTML) {
      container.innerHTML += `
        <div class="category">
          <h2>${category}</h2>
          <div class="products">
            ${productsHTML}
          </div>
        </div>
      `;
    }
  }
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

renderProducts();