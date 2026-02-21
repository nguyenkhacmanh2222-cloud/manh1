// Cart functionality
let cartCount = 0;
const cartIcon = document.querySelector('.cart-count');

// Add to cart button functionality
const addCartButtons = document.querySelectorAll('.btn-add-cart');

addCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        updateCartCount();
        
        // Add visual feedback
        this.textContent = 'Đã thêm!';
        this.style.backgroundColor = '#6c757d';
        
        setTimeout(() => {
            this.textContent = 'Thêm vào giỏ';
            this.style.backgroundColor = '';
        }, 1500);
    });
});

function updateCartCount() {
    cartIcon.textContent = cartCount;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cart icon click functionality
const cart = document.querySelector('.cart-icon');
cart.addEventListener('click', function() {
    if (cartCount > 0) {
        alert(`Bạn có ${cartCount} sản phẩm trong giỏ hàng`);
    } else {
        alert('Giỏ hàng trống');
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input, textarea');
        let allFilled = true;
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });
        
        if (allFilled) {
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
            this.reset();
        }
    });
}

// Add animation when page loads
window.addEventListener('load', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Banner button functionality
const bannerBtn = document.querySelector('.banner-content .btn-primary');
if (bannerBtn) {
    bannerBtn.addEventListener('click', function() {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}
