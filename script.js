// الوظائف الأساسية للموقع

// تبديل اللغة
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
}

// تبديل القائمة المحمولة
function setMobileMenu(open) {
    const menu = document.querySelector('.navbar-menu');
    if (!menu || menu.classList.contains('active') === open) return;

    menu.classList.toggle('active', open);
    document.querySelector('.nav-backdrop')?.classList.toggle('active', open);
    document.querySelector('.mobile-menu-toggle')?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('scroll-locked', open);
}

function toggleMobileMenu() {
    const menu = document.querySelector('.navbar-menu');
    if (menu) setMobileMenu(!menu.classList.contains('active'));
}

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
        document.body.classList.add('scroll-locked');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('scroll-locked');
    }
}

// إغلاق المودال عند النقر خارجه
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.classList.remove('scroll-locked');
    }
});

// تهريب النص قبل إدراجه في innerHTML حتى يظهر كما كتبه المستخدم
function escapeHtml(value) {
    const replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return String(value ?? '').replace(/[&<>"']/g, char => replacements[char]);
}

// تنسيق التاريخ
function formatDate(dateString) {
    // YYYY-MM-DD وحدها تُقرأ كتوقيت UTC، لذلك نضيف الوقت لتُقرأ كتاريخ محلي
    const date = new Date(`${dateString}T00:00:00`);
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

    getToastRegion().appendChild(notification);

    setTimeout(() => {
        notification.classList.add('leaving');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// منطقة الإشعارات: عنصر aria-live ثابت حتى تعلن قارئات الشاشة عن الرسائل الجديدة
function getToastRegion() {
    let region = document.querySelector('.toast-region');
    if (!region) {
        region = document.createElement('div');
        region.className = 'toast-region';
        region.setAttribute('role', 'status');
        region.setAttribute('aria-live', 'polite');
        document.body.appendChild(region);
    }
    return region;
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    getToastRegion();

    // إضافة مستمع لزر تبديل اللغة
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            toggleLanguage();
            setMobileMenu(false);
        });
    }

    // القائمة المحمولة: يُربط الزر هنا فقط (الربط المزدوج كان يفتحها ويغلقها في نفس النقرة)
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (navbar && mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);

        // الخلفية داخل .navbar لتشارك القائمة نفس سياق التراص
        const backdrop = document.createElement('div');
        backdrop.className = 'nav-backdrop';
        backdrop.addEventListener('click', () => setMobileMenu(false));
        navbar.appendChild(backdrop);

        document.querySelectorAll('.navbar-menu a').forEach(link => {
            link.addEventListener('click', () => setMobileMenu(false));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMobileMenu(false);
        });

        // إغلاق القائمة عند التكبير إلى مقاس سطح المكتب
        window.matchMedia('(max-width: 1024px)').addEventListener('change', (e) => {
            if (!e.matches) setMobileMenu(false);
        });
    }
});

// تصدير الوظائف
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleLanguage,
        escapeHtml,
        openModal,
        closeModal,
        formatDate,
        formatTime,
        getPriorityColor,
        getCategoryColor,
        showNotification
    };
}