// الوظائف الأساسية للموقع

// تبديل اللغة
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
}

// تبديل القائمة المحمولة
function toggleMobileMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

// إغلاق القائمة المحمولة عند النقر خارجها
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.navbar-menu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// تحديث الرابط النشط في شريط التنقل
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// وظائف المودال
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// إغلاق المودال عند النقر خارجه
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// تنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const lang = getCurrentLanguage();
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    return date.toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', options);
}

// تنسيق الوقت
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const lang = getCurrentLanguage();
    
    if (lang === 'ar') {
        return `${hours}:${minutes}`;
    } else {
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    }
}

// الحصول على لون الأولوية
function getPriorityColor(priority) {
    const colors = {
        high: 'danger',
        medium: 'warning',
        low: 'success'
    };
    return colors[priority] || 'primary';
}

// الحصول على لون التصنيف
function getCategoryColor(category) {
    const colors = {
        work: 'primary',
        personal: 'success',
        study: 'warning',
        other: 'secondary'
    };
    return colors[category] || 'primary';
}

// عرض إشعار
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// إضافة أنماط الإشعارات
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    
    // إضافة مستمع لزر تبديل اللغة
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // إضافة مستمع لزر القائمة المحمولة
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
});

// تصدير الوظائف
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleLanguage,
        openModal,
        closeModal,
        formatDate,
        formatTime,
        getPriorityColor,
        getCategoryColor,
        showNotification
    };
}