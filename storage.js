// إدارة التخزين المحلي للمهام والتذكيرات

// وظائف إدارة المهام
const TaskStorage = {
    // الحصول على جميع المهام
    getAllTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    },
    
    // حفظ جميع المهام
    saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    
    // إضافة مهمة جديدة
    addTask(task) {
        const tasks = this.getAllTasks();
        task.id = Date.now().toString();
        task.createdAt = new Date().toISOString();
        task.completed = false;
        tasks.push(task);
        this.saveTasks(tasks);
        return task;
    },
    
    // تحديث مهمة
    updateTask(taskId, updates) {
        const tasks = this.getAllTasks();
        const index = tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updates };
            this.saveTasks(tasks);
            return tasks[index];
        }
        return null;
    },
    
    // حذف مهمة
    deleteTask(taskId) {
        const tasks = this.getAllTasks();
        const filtered = tasks.filter(t => t.id !== taskId);
        this.saveTasks(filtered);
    },
    
    // تبديل حالة الإكمال
    toggleTaskComplete(taskId) {
        const tasks = this.getAllTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveTasks(tasks);
            return task;
        }
        return null;
    },
    
    // الحصول على المهام حسب التصنيف
    getTasksByCategory(category) {
        const tasks = this.getAllTasks();
        return category === 'all' ? tasks : tasks.filter(t => t.category === category);
    },
    
    // الحصول على المهام المكتملة
    getCompletedTasks() {
        return this.getAllTasks().filter(t => t.completed);
    },
    
    // الحصول على المهام المعلقة
    getPendingTasks() {
        return this.getAllTasks().filter(t => !t.completed);
    },
    
    // الحصول على إحصائيات المهام
    getTaskStats() {
        const tasks = this.getAllTasks();
        const completed = tasks.filter(t => t.completed).length;
        const pending = tasks.length - completed;
        
        const byCategory = {
            work: tasks.filter(t => t.category === 'work').length,
            personal: tasks.filter(t => t.category === 'personal').length,
            study: tasks.filter(t => t.category === 'study').length,
            other: tasks.filter(t => t.category === 'other').length
        };
        
        const byPriority = {
            high: tasks.filter(t => t.priority === 'high').length,
            medium: tasks.filter(t => t.priority === 'medium').length,
            low: tasks.filter(t => t.priority === 'low').length
        };
        
        return {
            total: tasks.length,
            completed,
            pending,
            completionRate: tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0,
            byCategory,
            byPriority
        };
    }
};

// وظائف إدارة التذكيرات
const ReminderStorage = {
    // الحصول على جميع التذكيرات
    getAllReminders() {
        const reminders = localStorage.getItem('reminders');
        return reminders ? JSON.parse(reminders) : [];
    },
    
    // حفظ جميع التذكيرات
    saveReminders(reminders) {
        localStorage.setItem('reminders', JSON.stringify(reminders));
    },
    
    // إضافة تذكير جديد
    addReminder(reminder) {
        const reminders = this.getAllReminders();
        reminder.id = Date.now().toString();
        reminder.createdAt = new Date().toISOString();
        reminders.push(reminder);
        this.saveReminders(reminders);
        return reminder;
    },
    
    // تحديث تذكير
    updateReminder(reminderId, updates) {
        const reminders = this.getAllReminders();
        const index = reminders.findIndex(r => r.id === reminderId);
        if (index !== -1) {
            reminders[index] = { ...reminders[index], ...updates };
            this.saveReminders(reminders);
            return reminders[index];
        }
        return null;
    },
    
    // حذف تذكير
    deleteReminder(reminderId) {
        const reminders = this.getAllReminders();
        const filtered = reminders.filter(r => r.id !== reminderId);
        this.saveReminders(filtered);
    },
    
    // الحصول على تذكيرات اليوم
    getTodayReminders() {
        const reminders = this.getAllReminders();
        const today = new Date().toISOString().split('T')[0];
        return reminders.filter(r => r.date === today);
    },
    
    // الحصول على التذكيرات القادمة
    getUpcomingReminders() {
        const reminders = this.getAllReminders();
        const now = new Date();
        return reminders.filter(r => {
            const reminderDate = new Date(r.date + 'T' + r.time);
            return reminderDate >= now;
        }).sort((a, b) => {
            const dateA = new Date(a.date + 'T' + a.time);
            const dateB = new Date(b.date + 'T' + b.time);
            return dateA - dateB;
        });
    },
    
    // الحصول على التذكيرات السابقة
    getPastReminders() {
        const reminders = this.getAllReminders();
        const now = new Date();
        return reminders.filter(r => {
            const reminderDate = new Date(r.date + 'T' + r.time);
            return reminderDate < now;
        }).sort((a, b) => {
            const dateA = new Date(a.date + 'T' + a.time);
            const dateB = new Date(b.date + 'T' + b.time);
            return dateB - dateA;
        });
    }
};

// تصدير الوظائف
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TaskStorage, ReminderStorage };
}