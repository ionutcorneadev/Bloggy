// Sample product data
const products = [
    {
        id: 1,
        name: 'Luna Lace Dress',
        price: 89.99,
        image: 'https://www.polagoclothing.com/cdn/shop/files/RVP_4801_1154x.jpg?v=1740392380',
        category: 'dresses',
        sizes: ['S', 'M', 'L'],
        featured: true
    },
    {
        id: 2,
        name: 'Amara Bloom Gown',
        price: 49.99,
        image: 'https://poetdresses.com/cdn/shop/products/DSC01056_d52f4ece-2912-4e22-9445-faca0f207408_2048x.jpg?v=1723500046',
        category: 'blouses',
        sizes: ['XS', 'S', 'M', 'L'],
        featured: true
    },
    {
        id: 3,
        name: 'Seraphina Midi',
        price: 59.99,
        image: 'https://www.inheritco.com/cdn/shop/articles/ariella-long-sleeve-floral-smocked-maxi-dress-ic-dresses-30634411720791.webp?v=1695855175',
        category: 'skirts',
        sizes: ['S', 'M', 'L', 'XL'],
        featured: true
    },
    {
        id: 4,
        name: 'Isla Petal Dress',
        price: 99.99,
        image: 'https://janielanie.com/cdn/shop/products/2E2FE9CE-1A64-41FA-BCAC-2E7A6D1C7AE5_300x.jpg',
        category: 'dresses',
        sizes: ['M', 'L', 'XL'],
        featured: false
    },
    {
        id: 5,
        name: 'Celeste Wrap',
        price: 54.99,
        image: 'https://i.etsystatic.com/10020309/r/il/b7150a/3700890788/il_570xN.3700890788_kg5j.jpg',
        category: 'skirts',
        sizes: ['XS', 'S', 'M'],
        featured: false
    },
    {
        id: 6,
        name: 'Nova Slip Dress',
        price: 45.99,
        image: 'https://sowears.net/cdn/shop/files/1q7a8280-6808b0a8bd7b3_600x.webp?v=1745400470',
        category: 'blouses',
        sizes: ['S', 'M', 'L', 'XL'],
        featured: true
    },
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const cartCount = document.getElementById('cart-count');
const featuredProductsContainer = document.getElementById('featured-products');
const allProductsContainer = document.getElementById('all-products');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');
const contactForm = document.getElementById('contact-form');
const sizeFilter = document.getElementById('size-filter');
const sortBy = document.getElementById('sort-by');

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart
function addToCart(productId, size = 'M', quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        });
    }
    saveCart();
    updateCartCount();
    renderCart();
    showNotification(`${product.name} added to cart`);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove from cart
function removeFromCart(productId, size) {
    const itemIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartCount();
        renderCart();
        showNotification('Item removed from cart');
    }
}

// Update cart item quantity
function updateQuantity(productId, size, newQuantity) {
    const item = cart.find(item => item.id === productId && item.size === size);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        saveCart();
        updateCartCount();
        renderCart();
    }
}

// Calculate cart totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // Add shipping, tax, etc. if needed
    
    return { subtotal, total };
}

// Render cart
function renderCart() {
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        subtotalElement.textContent = '$0.00';
        totalElement.textContent = '$0.00';
        return;
    }
    
    const { subtotal, total } = calculateTotals();
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                <div>Size: ${item.size}</div>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id}, '${item.size}')">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
            <div class="cart-item-total">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    `).join('');
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Show notification
function showNotification(message) {
    // Check if notification already exists
    let notification = document.querySelector('.notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Render products
function renderProducts(productsToRender, container) {
    if (!container) return;
    
    container.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.featured ? '<span class="product-badge">Featured</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <select class="size-select" id="size-${product.id}">
                    <option value="">Select Size</option>
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
                <button class="add-to-cart" onclick="addToCart(${product.id}, document.getElementById('size-${product.id}').value, 1)">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter and sort products
function filterAndSortProducts() {
    if (!allProductsContainer) return;
    
    let filteredProducts = [...products];
    
    // Filter by size
    if (sizeFilter && sizeFilter.value) {
        filteredProducts = filteredProducts.filter(product => 
            product.sizes.includes(sizeFilter.value)
        );
    }
    
    // Sort products
    if (sortBy) {
        switch(sortBy.value) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'featured':
            default:
                filteredProducts.sort((a, b) => b.featured - a.featured);
                break;
        }
    }
    
    renderProducts(filteredProducts, allProductsContainer);
}

// Initialize the page
function init() {
    // Update cart count on page load
    updateCartCount();
    
    // Render featured products on homepage
    if (featuredProductsContainer) {
        const featuredProducts = products.filter(product => product.featured);
        renderProducts(featuredProducts, featuredProductsContainer);
    }
    
    // Render all products on products page
    if (allProductsContainer) {
        filterAndSortProducts();
    }
    
    // Render cart on cart page
    if (cartItemsContainer) {
        renderCart();
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formObject);
            
            // Show success message
            showNotification('Your message has been sent! We\'ll get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add event listeners for filters
    if (sizeFilter) {
        sizeFilter.addEventListener('change', filterAndSortProducts);
    }
    
    if (sortBy) {
        sortBy.addEventListener('change', filterAndSortProducts);
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
                return;
            }
            
            // Here you would typically redirect to a checkout page
            showNotification('Proceeding to checkout...');
            console.log('Checkout:', cart);
            
            // For demo purposes, we'll just clear the cart
            // cart = [];
            // updateCartCount();
            // renderCart();
        });
    }
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally for HTML onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
