// نظام الترجمة الكامل للموقع
const translations = {
    ar: {
        // Navbar
        'site_title': 'مدير المهام اليومية',
        'nav_home': 'الرئيسية',
        'nav_tasks': 'المهام',
        'nav_reminders': 'التذكيرات',
        'nav_calendar': 'التقويم',
        'nav_statistics': 'الإحصائيات',
        'nav_tips': 'نصائح',
        'language_toggle': 'English',
        
        // Home Page
        'home_hero_title': 'نظم حياتك بذكاء',
        'home_hero_subtitle': 'إدارة المهام اليومية بطريقة احترافية وسهلة',
        'home_get_started': 'ابدأ الآن',
        'home_dashboard_title': 'لوحة التحكم',
        'home_total_tasks': 'إجمالي المهام',
        'home_completed_tasks': 'المهام المكتملة',
        'home_pending_tasks': 'المهام المعلقة',
        'home_today_reminders': 'تذكيرات اليوم',
        'home_quick_actions': 'إجراءات سريعة',
        'home_add_task': 'إضافة مهمة',
        'home_view_calendar': 'عرض التقويم',
        'home_check_stats': 'الإحصائيات',
        'home_recent_tasks': 'المهام الأخيرة',
        'home_no_tasks': 'لا توجد مهام حالياً',
        
        // Tasks Page
        'tasks_title': 'إدارة المهام',
        'tasks_add_new': 'إضافة مهمة جديدة',
        'tasks_filter_all': 'الكل',
        'tasks_filter_work': 'عمل',
        'tasks_filter_personal': 'شخصي',
        'tasks_filter_study': 'دراسة',
        'tasks_filter_other': 'أخرى',
        'tasks_sort_by': 'ترتيب حسب',
        'tasks_sort_date': 'التاريخ',
        'tasks_sort_priority': 'الأولوية',
        'tasks_sort_category': 'التصنيف',
        'task_title': 'عنوان المهمة',
        'task_description': 'الوصف',
        'task_category': 'التصنيف',
        'task_priority': 'الأولوية',
        'task_priority_high': 'عالية',
        'task_priority_medium': 'متوسطة',
        'task_priority_low': 'منخفضة',
        'task_due_date': 'تاريخ الاستحقاق',
        'task_save': 'حفظ',
        'task_cancel': 'إلغاء',
        'task_edit': 'تعديل',
        'task_delete': 'حذف',
        'task_complete': 'إكمال',
        'task_uncomplete': 'إلغاء الإكمال',
        'task_completed': 'مكتملة',
        
        // Reminders Page
        'reminders_title': 'التذكيرات',
        'reminders_add_new': 'إضافة تذكير',
        'reminder_title': 'عنوان التذكير',
        'reminder_description': 'الوصف',
        'reminder_date': 'التاريخ',
        'reminder_time': 'الوقت',
        'reminder_repeat': 'تكرار',
        'reminder_repeat_none': 'بدون تكرار',
        'reminder_repeat_daily': 'يومي',
        'reminder_repeat_weekly': 'أسبوعي',
        'reminder_repeat_monthly': 'شهري',
        'reminders_upcoming': 'التذكيرات القادمة',
        'reminders_past': 'التذكيرات السابقة',
        'reminders_no_upcoming': 'لا توجد تذكيرات قادمة',
        
        // Calendar Page
        'calendar_title': 'التقويم',
        'calendar_today': 'اليوم',
        'calendar_month': 'الشهر',
        'calendar_week': 'الأسبوع',
        'calendar_day': 'اليوم',
        'calendar_events': 'الأحداث',
        'calendar_no_events': 'لا توجد أحداث في هذا اليوم',
        
        // Statistics Page
        'stats_title': 'الإحصائيات والتقارير',
        'stats_overview': 'نظرة عامة',
        'stats_completion_rate': 'معدل الإنجاز',
        'stats_by_category': 'حسب التصنيف',
        'stats_by_priority': 'حسب الأولوية',
        'stats_weekly_progress': 'التقدم الأسبوعي',
        'stats_monthly_summary': 'ملخص شهري',
        'stats_productivity_score': 'نقاط الإنتاجية',
        
        // Tips Page
        'tips_title': 'نصائح إدارة الوقت',
        'tips_subtitle': 'تعلم كيف تنظم وقتك وتزيد إنتاجيتك',
        'tips_section1_title': 'تقنية بومودورو',
        'tips_section1_desc': 'اعمل لمدة 25 دقيقة ثم خذ استراحة 5 دقائق. هذه التقنية تساعد على التركيز وتجنب الإرهاق.',
        'tips_section2_title': 'قاعدة 80/20',
        'tips_section2_desc': '20% من مهامك تحقق 80% من نتائجك. ركز على المهام الأكثر أهمية أولاً.',
        'tips_section3_title': 'تقسيم المهام الكبيرة',
        'tips_section3_desc': 'قسم المهام الكبيرة إلى مهام صغيرة قابلة للتنفيذ. هذا يجعلها أقل إرهاقاً وأسهل في الإنجاز.',
        'tips_section4_title': 'تحديد الأولويات',
        'tips_section4_desc': 'استخدم مصفوفة أيزنهاور لتصنيف المهام: عاجل ومهم، مهم وغير عاجل، عاجل وغير مهم، غير عاجل وغير مهم.',
        'tips_section5_title': 'تجنب التشتت',
        'tips_section5_desc': 'أغلق الإشعارات وخصص وقتاً محدداً للرد على الرسائل. التركيز المستمر يزيد الإنتاجية بشكل كبير.',
        'tips_section6_title': 'المراجعة الأسبوعية',
        'tips_section6_desc': 'خصص وقتاً كل أسبوع لمراجعة إنجازاتك وتخطيط الأسبوع القادم.',
        
        // Common
        'loading': 'جاري التحميل...',
        'save': 'حفظ',
        'cancel': 'إلغاء',
        'delete': 'حذف',
        'edit': 'تعديل',
        'close': 'إغلاق',
        'confirm': 'تأكيد',
        'success': 'تم بنجاح',
        'error': 'حدث خطأ',
        'search': 'بحث...',
        'no_results': 'لا توجد نتائج',
        
        // Days
        'day_sun': 'الأحد',
        'day_mon': 'الاثنين',
        'day_tue': 'الثلاثاء',
        'day_wed': 'الأربعاء',
        'day_thu': 'الخميس',
        'day_fri': 'الجمعة',
        'day_sat': 'السبت',
        
        // Months
        'month_jan': 'يناير',
        'month_feb': 'فبراير',
        'month_mar': 'مارس',
        'month_apr': 'أبريل',
        'month_may': 'مايو',
        'month_jun': 'يونيو',
        'month_jul': 'يوليو',
        'month_aug': 'أغسطس',
        'month_sep': 'سبتمبر',
        'month_oct': 'أكتوبر',
        'month_nov': 'نوفمبر',
        'month_dec': 'ديسمبر'
    },
    en: {
        // Navbar
        'site_title': 'Daily Task Manager',
        'nav_home': 'Home',
        'nav_tasks': 'Tasks',
        'nav_reminders': 'Reminders',
        'nav_calendar': 'Calendar',
        'nav_statistics': 'Statistics',
        'nav_tips': 'Tips',
        'language_toggle': 'العربية',
        
        // Home Page
        'home_hero_title': 'Organize Your Life Smartly',
        'home_hero_subtitle': 'Manage your daily tasks professionally and easily',
        'home_get_started': 'Get Started',
        'home_dashboard_title': 'Dashboard',
        'home_total_tasks': 'Total Tasks',
        'home_completed_tasks': 'Completed Tasks',
        'home_pending_tasks': 'Pending Tasks',
        'home_today_reminders': 'Today\'s Reminders',
        'home_quick_actions': 'Quick Actions',
        'home_add_task': 'Add Task',
        'home_view_calendar': 'View Calendar',
        'home_check_stats': 'Statistics',
        'home_recent_tasks': 'Recent Tasks',
        'home_no_tasks': 'No tasks available',
        
        // Tasks Page
        'tasks_title': 'Task Management',
        'tasks_add_new': 'Add New Task',
        'tasks_filter_all': 'All',
        'tasks_filter_work': 'Work',
        'tasks_filter_personal': 'Personal',
        'tasks_filter_study': 'Study',
        'tasks_filter_other': 'Other',
        'tasks_sort_by': 'Sort By',
        'tasks_sort_date': 'Date',
        'tasks_sort_priority': 'Priority',
        'tasks_sort_category': 'Category',
        'task_title': 'Task Title',
        'task_description': 'Description',
        'task_category': 'Category',
        'task_priority': 'Priority',
        'task_priority_high': 'High',
        'task_priority_medium': 'Medium',
        'task_priority_low': 'Low',
        'task_due_date': 'Due Date',
        'task_save': 'Save',
        'task_cancel': 'Cancel',
        'task_edit': 'Edit',
        'task_delete': 'Delete',
        'task_complete': 'Complete',
        'task_uncomplete': 'Uncomplete',
        'task_completed': 'Completed',
        
        // Reminders Page
        'reminders_title': 'Reminders',
        'reminders_add_new': 'Add Reminder',
        'reminder_title': 'Reminder Title',
        'reminder_description': 'Description',
        'reminder_date': 'Date',
        'reminder_time': 'Time',
        'reminder_repeat': 'Repeat',
        'reminder_repeat_none': 'No Repeat',
        'reminder_repeat_daily': 'Daily',
        'reminder_repeat_weekly': 'Weekly',
        'reminder_repeat_monthly': 'Monthly',
        'reminders_upcoming': 'Upcoming Reminders',
        'reminders_past': 'Past Reminders',
        'reminders_no_upcoming': 'No upcoming reminders',
        
        // Calendar Page
        'calendar_title': 'Calendar',
        'calendar_today': 'Today',
        'calendar_month': 'Month',
        'calendar_week': 'Week',
        'calendar_day': 'Day',
        'calendar_events': 'Events',
        'calendar_no_events': 'No events on this day',
        
        // Statistics Page
        'stats_title': 'Statistics & Reports',
        'stats_overview': 'Overview',
        'stats_completion_rate': 'Completion Rate',
        'stats_by_category': 'By Category',
        'stats_by_priority': 'By Priority',
        'stats_weekly_progress': 'Weekly Progress',
        'stats_monthly_summary': 'Monthly Summary',
        'stats_productivity_score': 'Productivity Score',
        
        // Tips Page
        'tips_title': 'Time Management Tips',
        'tips_subtitle': 'Learn how to organize your time and increase productivity',
        'tips_section1_title': 'Pomodoro Technique',
        'tips_section1_desc': 'Work for 25 minutes then take a 5-minute break. This technique helps focus and avoid burnout.',
        'tips_section2_title': '80/20 Rule',
        'tips_section2_desc': '20% of your tasks achieve 80% of your results. Focus on the most important tasks first.',
        'tips_section3_title': 'Break Down Large Tasks',
        'tips_section3_desc': 'Divide large tasks into smaller actionable tasks. This makes them less overwhelming and easier to accomplish.',
        'tips_section4_title': 'Prioritization',
        'tips_section4_desc': 'Use the Eisenhower Matrix to classify tasks: urgent and important, important but not urgent, urgent but not important, neither urgent nor important.',
        'tips_section5_title': 'Avoid Distractions',
        'tips_section5_desc': 'Turn off notifications and allocate specific time to respond to messages. Continuous focus significantly increases productivity.',
        'tips_section6_title': 'Weekly Review',
        'tips_section6_desc': 'Allocate time each week to review your accomplishments and plan the next week.',
        
        // Common
        'loading': 'Loading...',
        'save': 'Save',
        'cancel': 'Cancel',
        'delete': 'Delete',
        'edit': 'Edit',
        'close': 'Close',
        'confirm': 'Confirm',
        'success': 'Success',
        'error': 'Error occurred',
        'search': 'Search...',
        'no_results': 'No results',
        
        // Days
        'day_sun': 'Sunday',
        'day_mon': 'Monday',
        'day_tue': 'Tuesday',
        'day_wed': 'Wednesday',
        'day_thu': 'Thursday',
        'day_fri': 'Friday',
        'day_sat': 'Saturday',
        
        // Months
        'month_jan': 'January',
        'month_feb': 'February',
        'month_mar': 'March',
        'month_apr': 'April',
        'month_may': 'May',
        'month_jun': 'June',
        'month_jul': 'July',
        'month_aug': 'August',
        'month_sep': 'September',
        'month_oct': 'October',
        'month_nov': 'November',
        'month_dec': 'December'
    }
};

// وظيفة الحصول على اللغة الحالية
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ar';
}

// وظيفة تعيين اللغة
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updatePageTranslations();
}

// وظيفة الحصول على الترجمة
function t(key) {
    const lang = getCurrentLanguage();
    return translations[lang][key] || key;
}

// وظيفة تحديث جميع الترجمات في الصفحة
function updatePageTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
    
    // تحديث اتجاه الصفحة
    const lang = getCurrentLanguage();
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// تهيئة اللغة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updatePageTranslations();
});