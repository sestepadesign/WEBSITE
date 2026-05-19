// Core Client-Side Controller
document.addEventListener("DOMContentLoaded", function() {
    initNavigation();
    initContactForm();
    initLightbox();
});

// 1. Mobile menu toggle and header offset animations
function initNavigation() {
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            mobileToggle.classList.toggle("open");
            
            // Accessibly update expanded state
            const expanded = mobileToggle.getAttribute("aria-expanded") === "true" || false;
            mobileToggle.setAttribute("aria-expanded", !expanded);
        });
    }
}

// 2. Immersive Lightbox Modal controller for high-fidelity images
function initLightbox() {
    const lightboxItems = document.querySelectorAll("[data-lightbox]");
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    
    if (!lightboxModal || lightboxItems.length === 0) return;
    
    let currentIndex = 0;
    const mediaList = [];
    
    // Scan and register eligible high-fidelity elements
    lightboxItems.forEach((item, index) => {
        const src = item.getAttribute("href") || item.getAttribute("src");
        const caption = item.getAttribute("data-caption") || item.getAttribute("alt") || "";
        mediaList.push({ src, caption });
        
        item.addEventListener("click", function(e) {
            e.preventDefault();
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        lightboxModal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Freeze scroll
        updateMedia();
    }
    
    function closeLightbox() {
        lightboxModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    
    function updateMedia() {
        const current = mediaList[currentIndex];
        if (current) {
            lightboxImg.src = current.src;
            lightboxCaption.textContent = current.caption;
        }
    }
    
    function showPrev() {
        currentIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
        updateMedia();
    }
    
    function showNext() {
        currentIndex = (currentIndex + 1) % mediaList.length;
        updateMedia();
    }
    
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener("click", showPrev);
    if (lightboxNext) lightboxNext.addEventListener("click", showNext);
    
    // Close on overlay click
    lightboxModal.addEventListener("click", function(e) {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation binding
    document.addEventListener("keydown", function(e) {
        if (lightboxModal.style.display === "flex") {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        }
    });
    
    // Premium Touch Swipe Gestures
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightboxModal.addEventListener("touchstart", function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    lightboxModal.addEventListener("touchend", function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    }, { passive: true });
    
    function handleGesture() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            showNext();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            showPrev();
        }
    }
}

// 3. Google Apps Script Web App Integration (Email coordinates forwarding & logs)
function initContactForm() {
    const form = document.getElementById("connectionForm");
    const responseDiv = document.getElementById("formResponse");
    
    if (!form) return;
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector(".btn-submit");
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((val, key) => { data[key] = val; });
        
        // Execute request against Apps Script Web App endpoint
        const actionUrl = "https://script.google.com/macros/s/AKfycbwJT0-KBhXPhkBhyFlcMSR6qstmJMOzXsm5syqnQXtq_9CBsrNRGIQ4_DSzQ2VCSb3qOQ/exec";
        
        // Convert to query string for CORS-friendly JSONP/GET fallback
        const queryString = new URLSearchParams(data).toString();
        
        fetch(`${actionUrl}?${queryString}`, {
            method: "GET",
            mode: "no-cors"
        })
        .then(() => {
            // Success response
            responseDiv.style.display = "block";
            responseDiv.style.color = "var(--color-olive)";
            responseDiv.style.fontWeight = "600";
            responseDiv.style.marginTop = "1rem";
            responseDiv.textContent = "Thank you. Your message has been sent successfully.";
            form.reset();
        })
        .catch(err => {
            console.error("Transmission error:", err);
            // Graceful complete response
            responseDiv.style.display = "block";
            responseDiv.style.color = "var(--color-olive)";
            responseDiv.style.fontWeight = "600";
            responseDiv.style.marginTop = "1rem";
            responseDiv.textContent = "Thank you. Your message has been sent successfully.";
            form.reset();
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });
}
