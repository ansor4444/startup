import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "uz" | "ru" | "en";

type Translations = Record<string, Record<Language, string>>;

const t: Translations = {
  // Brand
  "brand.name": { uz: "BarberTop", ru: "BarberTop", en: "BarberTop" },

  
  // Common
  "common.unknown": { uz: "Noma'lum", ru: "Неизвестно", en: "Unknown" },
  "common.noData": { uz: "Ma'lumot yo'q", ru: "Нет данных", en: "No data" },

  // Auth
  "auth.login": { uz: "Kirish", ru: "Войти", en: "Sign In" },
  "auth.register": {
    uz: "Ro'yxatdan o'tish",
    ru: "Регистрация",
    en: "Sign Up",
  },
  "auth.loginDesc": {
    uz: "Hisobingizga kiring",
    ru: "Войдите в свой аккаунт",
    en: "Sign in to your account",
  },
  "auth.registerDesc": {
    uz: "Yangi mijoz hisobi yarating",
    ru: "Создайте новый клиентский аккаунт",
    en: "Create a new client account",
  },
  "auth.name": { uz: "Ism", ru: "Имя", en: "Name" },
  "auth.namePlaceholder": {
    uz: "To'liq ismingiz",
    ru: "Ваше имя",
    en: "Your full name",
  },
  "auth.email": { uz: "Email", ru: "Email", en: "Email" },
  "auth.password": { uz: "Parol", ru: "Пароль", en: "Password" },
  "auth.phone": { uz: "Telefon", ru: "Телефон", en: "Phone" },
  "auth.noAccount": {
    uz: "Hisobingiz yo'qmi?",
    ru: "Нет аккаунта?",
    en: "Don't have an account?",
  },
  "auth.hasAccount": {
    uz: "Hisobingiz bormi?",
    ru: "Уже есть аккаунт?",
    en: "Already have an account?",
  },
  "auth.demoTitle": {
    uz: "Demo akkauntlar",
    ru: "Демо аккаунты",
    en: "Demo accounts",
  },
  "auth.seedBtn": {
    uz: "Demo akkauntlarni yaratish",
    ru: "Создать демо аккаунты",
    en: "Create demo accounts",
  },
  "auth.fillDemo": { uz: "To'ldirish", ru: "Заполнить", en: "Fill" },
  "auth.success": { uz: "Muvaffaqiyatli", ru: "Успешно", en: "Success" },
  "auth.required": {
    uz: "Avval tizimga kiring",
    ru: "Сначала войдите в систему",
    en: "Please sign in first",
  },
  "auth.backHome": { uz: "Bosh sahifa", ru: "На главную", en: "Home" },

  // Sidebar
  "nav.main": { uz: "Asosiy", ru: "Главное", en: "Main" },
  "nav.management": { uz: "Boshqaruv", ru: "Управление", en: "Management" },
  "nav.dashboard": { uz: "Bosh sahifa", ru: "Дашборд", en: "Dashboard" },
  "nav.appointments": { uz: "Bronlar", ru: "Записи", en: "Appointments" },
  "nav.services": { uz: "Xizmatlar", ru: "Услуги", en: "Services" },
  "nav.barbers": { uz: "Sartaroshlar", ru: "Барберы", en: "Barbers" },
  "nav.clients": { uz: "Mijozlar", ru: "Клиенты", en: "Clients" },
  "nav.payments": { uz: "To'lovlar", ru: "Платежи", en: "Payments" },
  "nav.book": { uz: "Bron qilish", ru: "Записаться", en: "Book Now" },
  "nav.myBookings": {
    uz: "Mening bronlarim",
    ru: "Мои записи",
    en: "My Bookings",
  },
  "nav.profile": { uz: "Profil", ru: "Профиль", en: "Profile" },
  "nav.logout": { uz: "Chiqish", ru: "Выход", en: "Logout" },
  "nav.bookings": { uz: "Bronlar", ru: "Записи", en: "Bookings" },
  "nav.myServices": { uz: "Xizmatlarim", ru: "Мои услуги", en: "My Services" },
  "nav.portfolio": { uz: "Portfolio", ru: "Портфолио", en: "Portfolio" },
  "nav.stats": { uz: "Statistika", ru: "Статистика", en: "Statistics" },
  "nav.reviews": { uz: "Sharhlar", ru: "Отзывы", en: "Reviews" },
  "nav.myProfile": { uz: "Profilim", ru: "Мой профиль", en: "My Profile" },
  "nav.schedule": { uz: "Ish jadvali", ru: "График работы", en: "Schedule" },

  // Common
  "common.loading": {
    uz: "Yuklanmoqda...",
    ru: "Загрузка...",
    en: "Loading...",
  },
  "common.save": { uz: "Saqlash", ru: "Сохранить", en: "Save" },
  "common.cancel": { uz: "Bekor", ru: "Отмена", en: "Cancel" },
  "common.delete": { uz: "O'chirish", ru: "Удалить", en: "Delete" },
  "common.edit": { uz: "Tahrirlash", ru: "Изменить", en: "Edit" },
  "common.add": { uz: "Qo'shish", ru: "Добавить", en: "Add" },
  "common.import": { uz: "Import (CSV)", ru: "Импорт (CSV)", en: "Import CSV" },
  "common.export": {
    uz: "Export (CSV)",
    ru: "Экспорт (CSV)",
    en: "Export CSV",
  },
  "common.pro": { uz: "PRO", ru: "PRO", en: "PRO" },
  "common.expYears": { uz: "yil tajriba", ru: "лет опыта", en: "yrs exp" },
  "common.from": { uz: "dan", ru: "от", en: "from" },
  "common.book": { uz: "Bron", ru: "Записаться", en: "Book" },
  "common.loginRequired": {
    uz: "Avval tizimga kiring",
    ru: "Сначала войдите в систему",
    en: "Please sign in first",
  },
  "common.search": { uz: "Qidirish...", ru: "Поиск...", en: "Search..." },
  "common.empty": {
    uz: "Hali ma'lumot yo'q",
    ru: "Пока нет данных",
    en: "No data yet",
  },
  "common.confirm": { uz: "Tasdiqlash", ru: "Подтвердить", en: "Confirm" },
  "common.user": { uz: "Foydalanuvchi", ru: "Пользователь", en: "User" },
  "common.sum": { uz: "so'm", ru: "сум", en: "UZS" },
  "common.minutes": { uz: "daqiqa", ru: "мин", en: "min" },
  "common.year": { uz: "yil", ru: "лет", en: "yr" },
  "common.confirmDelete": { uz: "Haqiqatan ham o'chirmoqchimisiz?", ru: "Действительно удалить?", en: "Are you sure you want to delete?" },
  "field.status": { uz: "Holat", ru: "Статус", en: "Status" },
  "field.action": { uz: "Amal", ru: "Действие", en: "Action" },

  // Dashboard - Admin
  "dash.admin.title": {
    uz: "Admin Dashboard",
    ru: "Панель Админа",
    en: "Admin Dashboard",
  },
  "dash.admin.subtitle": {
    uz: "Real vaqtdagi studiya ko'rsatkichlari",
    ru: "Показатели студии в реальном времени",
    en: "Real-time studio metrics",
  },
  "dash.admin.todayBookings": {
    uz: "Bugungi bronlar",
    ru: "Записи сегодня",
    en: "Today's Bookings",
  },
  "dash.admin.todayRevenue": {
    uz: "Bugungi tushum",
    ru: "Выручка сегодня",
    en: "Today's Revenue",
  },
  "dash.admin.monthRevenue": {
    uz: "Oylik tushum",
    ru: "Доход за месяц",
    en: "Monthly Revenue",
  },
  "dash.admin.totalClients": {
    uz: "Mijozlar",
    ru: "Всего клиентов",
    en: "Total Clients",
  },
  "dash.admin.totalRecords": {
    uz: "Jami yozuvlar",
    ru: "Всего записей",
    en: "Total records",
  },
  "dash.admin.upcoming": {
    uz: "Yaqinlashayotgan bronlar",
    ru: "Ближайшие записи",
    en: "Upcoming bookings",
  },

  // Barber
  "dash.barber.title": { uz: "Mening kunim", ru: "Мой день", en: "My Day" },
  "dash.barber.todayList": {
    uz: "Bugungi navbatlar",
    ru: "Записи на сегодня",
    en: "Today's Appointments",
  },
  "dash.barber.markDone": { uz: "Bajarildi", ru: "Выполнено", en: "Mark Done" },
  "dash.barber.markPaid": {
    uz: "To'lovni belgilash",
    ru: "Отметить оплату",
    en: "Mark Paid",
  },
  "dash.barber.paymentRecorded": {
    uz: "To'lov yozildi",
    ru: "Оплата записана",
    en: "Payment recorded",
  },
  "dash.barber.noProfile": {
    uz: "Sizning barber profilingiz hali sozlanmagan. Admin bilan bog'laning.",
    ru: "Ваш профиль барбера еще не настроен. Свяжитесь с администратором.",
    en: "Your barber profile is not set up yet. Please contact an admin.",
  },
  "action.confirm": {
    uz: "Tasdiq",
    ru: "Подтвердить",
    en: "Confirm",
  },
  "dash.barber.totalRevenue": {
    uz: "Jami daromad",
    ru: "Общий доход",
    en: "Total revenue",
  },
  "dash.barber.manageBookings": {
    uz: "Mijozlar bronini boshqaring",
    ru: "Управление записями клиентов",
    en: "Manage client bookings",
  },
  "dash.barber.blacklistReason": {
    uz: "Sabab (ixtiyoriy):",
    ru: "Причина (необязательно):",
    en: "Reason (optional):",
  },
  "dash.barber.blacklisted": {
    uz: "Blacklist'ga qo'shildi",
    ru: "Добавлено в черный список",
    en: "Added to blacklist",
  },
  "dash.admin.last7Days": {
    uz: "So'nggi 7 kun",
    ru: "Последние 7 дней",
    en: "Last 7 days",
  },
  "filter.today": { uz: "Bugun", ru: "Сегодня", en: "Today" },
  "filter.upcoming": { uz: "Kelgusi", ru: "Предстоящие", en: "Upcoming" },
  "action.updated": { uz: "Yangilandi", ru: "Обновлено", en: "Updated" },
  "action.accept": { uz: "Qabul", ru: "Принять", en: "Accept" },
  "action.reject": { uz: "Rad et", ru: "Отклонить", en: "Reject" },
  "action.blacklist": { uz: "Qora ro'yxat", ru: "ЧС", en: "Blacklist" },


  "dash.barber.enterName": { uz: "Nom kiriting", ru: "Введите название", en: "Enter name" },
  "dash.barber.added": { uz: "Qo'shildi", ru: "Добавлено", en: "Added" },
  "dash.barber.fillProfileFirst": { uz: "Avval profilingizni to'ldiring", ru: "Сначала заполните профиль", en: "Fill your profile first" },
  "dash.barber.servicesSubtitle": { uz: "O'z xizmatlaringiz, narx va davomiyligi", ru: "Ваши услуги, цены и продолжительность", en: "Your services, price and duration" },
  "action.new": { uz: "Yangi", ru: "Новый", en: "New" },
  "dash.barber.newService": { uz: "Yangi xizmat", ru: "Новая услуга", en: "New service" },
  "field.serviceName": { uz: "Xizmatning nomi", ru: "Название услуги", en: "Service name" },
  "placeholder.serviceName": { uz: "Masalan: Fade", ru: "Например: Fade", en: "Example: Fade" },
  "field.priceWithCurrency": { uz: "Narxi (so'm)", ru: "Цена (сум)", en: "Price (UZS)" },
  "field.durationMinutes": { uz: "Davomiyligi (daqiqa)", ru: "Продолжительность (мин)", en: "Duration (minutes)" },
  "field.descriptionOpt": { uz: "Tavsif (ixtiyoriy)", ru: "Описание (необязательно)", en: "Description (optional)" },
  "placeholder.description": { uz: "Qisqacha tavsif", ru: "Краткое описание", en: "Brief description" },
  "action.save": { uz: "Saqlash", ru: "Сохранить", en: "Save" },
  "action.cancel": { uz: "Bekor", ru: "Отмена", en: "Cancel" },
  "dash.barber.noServicesYet": { uz: "Hali xizmat qo'shilmagan", ru: "Услуги еще не добавлены", en: "No services added yet" },
  "status.active": { uz: "Aktiv", ru: "Активен", en: "Active" },
  "status.inactive": { uz: "O'chiq", ru: "Отключен", en: "Inactive" },
  "dash.barber.selectBeforeFirst": { uz: "Avval 'oldin' rasmini tanlang", ru: "Сначала выберите фото 'до'", en: "Select 'before' photo first" },
  "dash.barber.uploaded": { uz: "Yuklandi", ru: "Загружено", en: "Uploaded" },
  "dash.barber.portfolioSubtitle": { uz: "Ishlaringizni Instagram-style galereyada ko'rsating", ru: "Покажите свои работы в Instagram-style галерее", en: "Showcase your work in an Instagram-style gallery" },
  "dash.barber.image": { uz: "Rasm", ru: "Фото", en: "Image" },
  "dash.barber.video": { uz: "Video", ru: "Видео", en: "Video" },
  "dash.barber.beforeAfter": { uz: "Oldin / Keyin", ru: "До / После", en: "Before / After" },
  "dash.barber.before": { uz: "Oldin", ru: "До", en: "Before" },
  "dash.barber.after": { uz: "Keyin", ru: "После", en: "After" },
  "dash.barber.selectBefore1": { uz: "1. Oldin rasmini tanlang", ru: "1. Выберите фото 'До'", en: "1. Select 'Before' photo" },
  "dash.barber.selectAfter2": { uz: "2. Keyin rasmini yuklang", ru: "2. Загрузите фото 'После'", en: "2. Upload 'After' photo" },
  "dash.barber.uploadVideo": { uz: "Video yuklash", ru: "Загрузить видео", en: "Upload Video" },
  "dash.barber.uploadImage": { uz: "Rasm yuklash", ru: "Загрузить фото", en: "Upload Image" },
  "dash.barber.noPortfolioYet": { uz: "Hali ish qo'shilmagan", ru: "Работы еще не добавлены", en: "No work added yet" },
  "dash.barber.clientsSubtitle": { uz: "Aktiv mijozlar va blacklist", ru: "Активные клиенты и черный список", en: "Active clients and blacklist" },
  "dash.barber.blacklistTab": { uz: "Blacklist", ru: "Черный список", en: "Blacklist" },
  "dash.barber.visits": { uz: "marta tashrif", ru: "визитов", en: "visits" },
  "dash.barber.lastVisit": { uz: "oxirgi:", ru: "последний:", en: "last:" },
  "dash.barber.hiddenClients": { uz: "ta mijoz yashirin", ru: "клиентов скрыто", en: "clients hidden" },
  "dash.barber.freePlanLimit": { uz: "Free rejada faqat {limit} ta mijoz ko'rinadi. Barchasini ko'rish uchun PRO ga o'ting.", ru: "На бесплатном тарифе видно только {limit} клиентов. Перейдите на PRO, чтобы увидеть всех.", en: "Only {limit} clients are visible on the Free plan. Upgrade to PRO to see all." },
  "plans.getPro": { uz: "PRO olish", ru: "Получить PRO", en: "Get PRO" },
  "dash.barber.blacklistEmpty": { uz: "Blacklist bo'sh", ru: "Черный список пуст", en: "Blacklist is empty" },
  "dash.barber.reason": { uz: "Sabab:", ru: "Причина:", en: "Reason:" },
  "dash.barber.statsSubtitle": { uz: "So'nggi 30 kunlik ko'rsatkichlaringiz", ru: "Ваши показатели за последние 30 дней", en: "Your metrics for the last 30 days" },
  "dash.barber.completed": { uz: "bajarildi", ru: "выполнено", en: "completed" },
  "dash.admin.revenue": { uz: "Daromad", ru: "Доход", en: "Revenue" },
  "dash.barber.activeClients": { uz: "Aktiv mijozlar", ru: "Активные клиенты", en: "Active clients" },
  "dash.barber.rating": { uz: "Reyting", ru: "Рейтинг", en: "Rating" },
  "dash.barber.reviews": { uz: "sharh", ru: "отзывов", en: "reviews" },
  "dash.barber.dailyRevenue30": { uz: "Kunlik daromad (30 kun)", ru: "Дневной доход (30 дней)", en: "Daily revenue (30 days)" },
  "dash.barber.topServices": { uz: "Eng ko'p buyurtma — xizmatlar", ru: "Самые популярные услуги", en: "Top booked services" },
  "dash.barber.replySaved": { uz: "Javob saqlandi", ru: "Ответ сохранен", en: "Reply saved" },
  "dash.barber.reviewsSubtitle": { uz: "Mijozlar bahosi va sharhlariga javob bering", ru: "Отвечайте на оценки и отзывы клиентов", en: "Respond to client ratings and reviews" },
  "dash.barber.noReviewsYet": { uz: "Hali sharh yo'q", ru: "Пока нет отзывов", en: "No reviews yet" },
  "dash.barber.yourReply": { uz: "Javobingiz", ru: "Ваш ответ", en: "Your reply" },
  "dash.barber.writeReply": { uz: "Javob yozing...", ru: "Напишите ответ...", en: "Write a reply..." },
  "action.send": { uz: "Yuborish", ru: "Отправить", en: "Send" },
  "dash.barber.saved": { uz: "Saqlandi", ru: "Сохранено", en: "Saved" },
  "dash.barber.profileTitle": { uz: "Profil ma'lumotlari", ru: "Данные профиля", en: "Profile Information" },
  "dash.barber.profileSubtitle": { uz: "Mijozlar profilingizda ko'radigan ma'lumotlar", ru: "Информация, которую видят клиенты в вашем профиле", en: "Information clients will see on your profile" },
  "dash.barber.profilePhoto": { uz: "Profil rasmi", ru: "Фото профиля", en: "Profile photo" },
  "dash.barber.basicInfo": { uz: "Asosiy", ru: "Основное", en: "Basic" },
  "dash.barber.fullName": { uz: "Ism familiya", ru: "Имя Фамилия", en: "Full Name" },
  "dash.barber.username": { uz: "Username (@nick)", ru: "Имя пользователя (@nick)", en: "Username (@nick)" },
  "dash.barber.telegram": { uz: "Telegram", ru: "Telegram", en: "Telegram" },
  "dash.barber.specialty": { uz: "Mutaxassislik", ru: "Специализация", en: "Specialty" },
  "dash.barber.experience": { uz: "Tajriba (yil)", ru: "Опыт (лет)", en: "Experience (years)" },
  "dash.barber.bio": { uz: "Bio", ru: "О себе", en: "Bio" },
  "dash.barber.location": { uz: "Lokatsiya", ru: "Локация", en: "Location" },
  "dash.barber.region": { uz: "Viloyat", ru: "Область", en: "Region" },
  "dash.barber.district": { uz: "Tuman", ru: "Район", en: "District" },
  "dash.barber.salonName": { uz: "Salon nomi", ru: "Название салона", en: "Salon name" },
  "dash.barber.address": { uz: "Manzil", ru: "Адрес", en: "Address" },
  "dash.barber.mapLink": { uz: "Google Maps havola", ru: "Ссылка на Google Maps", en: "Google Maps link" },
  "dash.barber.genderClient": { uz: "Jins (mijoz uchun)", ru: "Пол (для клиентов)", en: "Gender (for clients)" },
  "dash.barber.genderAny": { uz: "Universal", ru: "Универсал", en: "Universal" },
  "dash.barber.genderMale": { uz: "Erkak", ru: "Мужской", en: "Male" },
  "dash.barber.genderFemale": { uz: "Ayol", ru: "Женский", en: "Female" },
  "dash.barber.latitude": { uz: "Latitude (Google Maps'dan)", ru: "Широта (из Google Maps)", en: "Latitude (from Google Maps)" },
  "dash.barber.longitude": { uz: "Longitude", ru: "Долгота", en: "Longitude" },
  "dash.barber.homeService": { uz: "Uyga borib xizmat ko'rsataman", ru: "Оказываю услуги на дому", en: "I provide home service" },
  "dash.barber.busyStatus": { uz: "Hozir bandman", ru: "Сейчас занят", en: "I'm busy right now" },
  "dash.barber.fastResponse": { uz: "⚡ Tez javob beraman", ru: "⚡ Быстро отвечаю", en: "⚡ Fast response" },
  "dash.barber.socialMedia": { uz: "Ijtimoiy tarmoqlar", ru: "Социальные сети", en: "Social media" },
  "action.saving": { uz: "Saqlanmoqda...", ru: "Сохранение...", en: "Saving..." },

  // Client
  "client.welcome": {
    uz: "Xush kelibsiz",
    ru: "Добро пожаловать",
    en: "Welcome",
  },
  "client.bookTitle": {
    uz: "Yangi bron qilish",
    ru: "Новая запись",
    en: "Book Appointment",
  },
  "client.selectService": {
    uz: "Xizmat tanlang",
    ru: "Выберите услугу",
    en: "Select service",
  },
  "client.selectBarber": {
    uz: "Sartarosh tanlang",
    ru: "Выберите барбера",
    en: "Select barber",
  },
  "client.selectDate": { uz: "Sana", ru: "Дата", en: "Date" },
  "client.selectTime": { uz: "Vaqt", ru: "Время", en: "Time" },
  "client.bookBtn": { uz: "Bron qilish", ru: "Записаться", en: "Book Now" },
  "client.bookingSuccess": {
    uz: "Bron muvaffaqiyatli yaratildi!",
    ru: "Запись создана!",
    en: "Booking created!",
  },
  "client.totalSpent": {
    uz: "Jami sarflagan",
    ru: "Всего потрачено",
    en: "Total spent",
  },

  // Status
  "status.pending": { uz: "Kutilmoqda", ru: "Ожидает", en: "Pending" },
  "status.confirmed": {
    uz: "Tasdiqlangan",
    ru: "Подтверждено",
    en: "Confirmed",
  },
  "status.completed": { uz: "Bajarildi", ru: "Выполнено", en: "Completed" },
  "status.cancelled": { uz: "Bekor qilindi", ru: "Отменено", en: "Cancelled" },
  "status.no_show": { uz: "Kelmadi", ru: "Не пришёл", en: "No-show" },

  // Roles
  "role.admin": {
    uz: "Administrator",
    ru: "Администратор",
    en: "Administrator",
  },
  "role.barber": { uz: "Sartarosh", ru: "Барбер", en: "Barber" },
  "role.client": { uz: "Mijoz", ru: "Клиент", en: "Client" },

  // Services / Barbers fields
  "field.name": { uz: "Nomi", ru: "Название", en: "Name" },
  "field.price": { uz: "Narxi", ru: "Цена", en: "Price" },
  "field.duration": {
    uz: "Davomiyligi (daqiqa)",
    ru: "Длительность (мин)",
    en: "Duration (min)",
  },
  "field.description": {
    uz: "Tavsif (ixtiyoriy)",
    ru: "Описание (необязательно)",
    en: "Description (optional)",
  },
  "field.specialty": {
    uz: "Mutaxassislik",
    ru: "Специализация",
    en: "Specialty",
  },
  "field.bio": { uz: "Tavsif", ru: "Описание", en: "Bio" },
  "field.phone": { uz: "Telefon", ru: "Телефон", en: "Phone" },
  "field.fullName": { uz: "F.I.O", ru: "Ф.И.О", en: "Full Name" },
  "field.notes": { uz: "Izoh", ru: "Заметки", en: "Notes" },
  "field.method": { uz: "To'lov usuli", ru: "Способ", en: "Method" },
  "field.amount": { uz: "Summa", ru: "Сумма", en: "Amount" },
  "field.date": { uz: "Sana", ru: "Дата", en: "Date" },
  "field.time": { uz: "Vaqt", ru: "Время", en: "Time" },

  // Plans
  "nav.plans": { uz: "Obuna", ru: "Подписка", en: "Plans" },
  "plans.title": {
    uz: "Obuna rejalari",
    ru: "Тарифные планы",
    en: "Subscription Plans",
  },
  "plans.subtitle": {
    uz: "O'zingizga mos rejani tanlang",
    ru: "Выберите подходящий план",
    en: "Choose your plan",
  },
  "plans.free": { uz: "Bepul", ru: "Бесплатно", en: "Free" },
  "plans.subscribe": {
    uz: "Obuna bo'lish",
    ru: "Подписаться",
    en: "Subscribe",
  },
  "plans.active": { uz: "Aktiv", ru: "Активен", en: "Active" },
  "plans.current": { uz: "Joriy reja", ru: "Текущий план", en: "Current plan" },
  "plans.until": { uz: "Tugaydi", ru: "До", en: "Until" },
  "plans.activated": { uz: "faollashtirildi! (mock)", ru: "активирован! (mock)", en: "activated! (mock)" },
  "plans.mockNote": {
    uz: "* Test rejimida — haqiqiy to'lov amalga oshmaydi",
    ru: "* Тестовый режим — реальная оплата не производится",
    en: "* Mock mode — no real payment is processed",
  },
  // Plans DB dynamic texts
  "Doimiy": { uz: "Doimiy", ru: "Навсегда", en: "Forever" },
  "1 oy": { uz: "1 oy", ru: "1 месяц", en: "1 month" },
  "3 oy": { uz: "3 oy", ru: "3 месяца", en: "3 months" },
  "6 oy": { uz: "6 oy", ru: "6 месяцев", en: "6 months" },
  "1 yil": { uz: "1 yil", ru: "1 год", en: "1 year" },
  "Barber qidirish": { uz: "Barber qidirish", ru: "Поиск барбера", en: "Search barber" },
  "Sharh yozish": { uz: "Sharh yozish", ru: "Написать отзыв", en: "Write review" },
  "Telegram eslatmalar": { uz: "Telegram eslatmalar", ru: "Уведомления в Telegram", en: "Telegram reminders" },
  "Online bron qilish": { uz: "Online bron qilish", ru: "Онлайн бронирование", en: "Online booking" },
  "Portfolio ko'rish": { uz: "Portfolio ko'rish", ru: "Просмотр портфолио", en: "View portfolio" },
  "Sevimli barberlarni saqlash": { uz: "Sevimli barberlarni saqlash", ru: "Сохранение любимых барберов", en: "Save favorite barbers" },
  "Reklamasiz foydalanish": { uz: "Reklamasiz foydalanish", ru: "Использование без рекламы", en: "Ad-free experience" },
  "Premium barberlarni ko'rish": { uz: "Premium barberlarni ko'rish", ru: "Доступ к премиум барберам", en: "View premium barbers" },
  "Tez qayta bron qilish": { uz: "Tez qayta bron qilish", ru: "Быстрое повторное бронирование", en: "Fast rebook" },
  "Maxsus chegirmalar": { uz: "Maxsus chegirmalar", ru: "Специальные скидки", en: "Special discounts" },
  "Bronlarni tezroq tasdiqlash": { uz: "Bronlarni tezroq tasdiqlash", ru: "Быстрое подтверждение", en: "Faster booking confirmation" },
  "Bron tarixini saqlash": { uz: "Bron tarixini saqlash", ru: "История бронирований", en: "Booking history" },
  "Eslatmalarni sozlash": { uz: "Eslatmalarni sozlash", ru: "Настройка уведомлений", en: "Custom reminders" },
  "PRO dagi barcha imkoniyatlar": { uz: "PRO dagi barcha imkoniyatlar", ru: "Все возможности PRO", en: "All PRO features" },
  "TOP barberlarga oldinroq yozilish": { uz: "TOP barberlarga oldinroq yozilish", ru: "Ранняя запись к TOP барберам", en: "Early booking for TOP barbers" },
  "VIP badge": { uz: "VIP badge", ru: "VIP значок", en: "VIP badge" },
  "Maxsus aksiyalar": { uz: "Maxsus aksiyalar", ru: "Специальные акции", en: "Special promotions" },
  "Prioritet bron": { uz: "Prioritet bron", ru: "Приоритетное бронирование", en: "Priority booking" },
  "Eng yaxshi barber tavsiyalari": { uz: "Eng yaxshi barber tavsiyalari", ru: "Рекомендации лучших барберов", en: "Best barber recommendations" },
  "Chegirmali VIP kunlar": { uz: "Chegirmali VIP kunlar", ru: "Скидочные VIP дни", en: "Discounted VIP days" },
  "Premium support": { uz: "Premium support", ru: "Премиум поддержка", en: "Premium support" },
  "VIP barcha imkoniyatlari": { uz: "VIP barcha imkoniyatlari", ru: "Все возможности VIP", en: "All VIP features" },
  "14% chegirma": { uz: "14% chegirma", ru: "Скидка 14%", en: "14% discount" },
  "15% chegirma": { uz: "15% chegirma", ru: "Скидка 15%", en: "15% discount" },
  "16% chegirma": { uz: "16% chegirma", ru: "Скидка 16%", en: "16% discount" },
  "22% chegirma": { uz: "22% chegirma", ru: "Скидка 22%", en: "22% discount" },
  "23% chegirma": { uz: "23% chegirma", ru: "Скидка 23%", en: "23% discount" },
  "26% chegirma": { uz: "26% chegirma", ru: "Скидка 26%", en: "26% discount" },
  "35% chegirma": { uz: "35% chegirma", ru: "Скидка 35%", en: "35% discount" },
  "36% chegirma": { uz: "36% chegirma", ru: "Скидка 36%", en: "36% discount" },
  "37% chegirma": { uz: "37% chegirma", ru: "Скидка 37%", en: "37% discount" },
  "PRO barcha imkoniyatlari": { uz: "PRO barcha imkoniyatlari", ru: "Все возможности PRO", en: "All PRO features" },
  "Online navbat olish": { uz: "Online navbat olish", ru: "Онлайн очередь", en: "Online queue" },
  "Ish vaqtini belgilash": { uz: "Ish vaqtini belgilash", ru: "Настройка рабочего времени", en: "Set working hours" },
  "Mijozlar ro'yxati": { uz: "Mijozlar ro'yxati", ru: "Список клиентов", en: "Client list" },
  "Telegram xabarnoma": { uz: "Telegram xabarnoma", ru: "Telegram уведомления", en: "Telegram notifications" },
  "Oddiy statistika": { uz: "Oddiy statistika", ru: "Базовая статистика", en: "Basic statistics" },
  "BarberTop profili": { uz: "BarberTop profili", ru: "Профиль BarberTop", en: "BarberTop profile" },
  "Cheksiz mijozlar": { uz: "Cheksiz mijozlar", ru: "Неограниченные клиенты", en: "Unlimited clients" },
  "SMS eslatmalar": { uz: "SMS eslatmalar", ru: "SMS напоминания", en: "SMS reminders" },
  "To'liq statistika": { uz: "To'liq statistika", ru: "Полная статистика", en: "Full statistics" },
  "Portfolio yuklash": { uz: "Portfolio yuklash", ru: "Загрузка портфолио", en: "Portfolio upload" },
  "Sharh va reytinglar": { uz: "Sharh va reytinglar", ru: "Отзывы и рейтинги", en: "Reviews & ratings" },
  "QR orqali bron": { uz: "QR orqali bron", ru: "Бронирование по QR", en: "QR booking" },
  "VIP belgi": { uz: "VIP belgi", ru: "VIP значок", en: "VIP badge" },
  "Qidiruvda tepada chiqish": { uz: "Qidiruvda tepada chiqish", ru: "Топ в поиске", en: "Top in search" },
  "Premium profil dizayni": { uz: "Premium profil dizayni", ru: "Премиум дизайн профиля", en: "Premium profile design" },
  "Kuchaytirilgan reklama": { uz: "Kuchaytirilgan reklama", ru: "Усиленная реклама", en: "Boosted promotion" },
  "Batafsil statistika": { uz: "Batafsil statistika", ru: "Детальная статистика", en: "Detailed statistics" },
  "Prioritet support": { uz: "Prioritet support", ru: "Приоритетная поддержка", en: "Priority support" },

  "plans.tier.free": { uz: "FREE — Bepul", ru: "FREE — Бесплатно", en: "FREE" },
  "plans.tier.pro": { uz: "PRO ⭐", ru: "PRO ⭐", en: "PRO ⭐" },
  "plans.tier.vip": { uz: "VIP 👑", ru: "VIP 👑", en: "VIP 👑" },

  // Chat
  "nav.messages": { uz: "Xabarlar", ru: "Сообщения", en: "Messages" },
  "chat.empty": {
    uz: "Suhbatlar yo'q",
    ru: "Нет чатов",
    en: "No conversations",
  },
  "chat.selectThread": {
    uz: "Suhbatni tanlang",
    ru: "Выберите чат",
    en: "Select a conversation",
  },
  "chat.placeholder": {
    uz: "Xabar yozing...",
    ru: "Сообщение...",
    en: "Type a message...",
  },

  // Barber detail
  "barber.portfolio": { uz: "Portfolio", ru: "Портфолио", en: "Portfolio" },
  "barber.schedule": { uz: "Ish vaqti", ru: "Расписание", en: "Schedule" },
  "barber.upload": { uz: "Rasm yuklash", ru: "Загрузить", en: "Upload" },
  "barber.working": { uz: "Ishlaydi", ru: "Работает", en: "Working" },
  "barber.off": { uz: "Dam olish", ru: "Выходной", en: "Off" },
  "barber.chat": { uz: "Yozish", ru: "Написать", en: "Message" },

  // Reviews
  "reviews.title": { uz: "Sharhlar", ru: "Отзывы", en: "Reviews" },
  "reviews.count": { uz: "ta sharh", ru: "отзывов", en: "reviews" },
  "reviews.leave": {
    uz: "Sharh qoldiring",
    ru: "Оставьте отзыв",
    en: "Leave a review",
  },
  "reviews.comment": {
    uz: "Sizning fikringiz...",
    ru: "Ваш отзыв...",
    en: "Your comment...",
  },
  "reviews.none": {
    uz: "Hali sharhlar yo'q",
    ru: "Пока нет отзывов",
    en: "No reviews yet",
  },

  // Landing
  "land.tag": {
    uz: "#1 O'zbekistondagi premium barber platforma",
    ru: "#1 Премиум барбер-платформа Узбекистана",
    en: "#1 premium barber platform in Uzbekistan",
  },
  "land.heroTitle1": {
    uz: "O'zingizga mos",
    ru: "Найдите своего",
    en: "Find your perfect",
  },
  "land.heroAccent": {
    uz: "TOP barberni toping",
    ru: "TOP барбера",
    en: "TOP barber",
  },
  "land.heroTitle2": { uz: "toping", ru: "", en: "" },
  "land.heroDesc": {
    uz: "1 daqiqada bron qiling. Yaqin atrofdagi eng yaxshi sartaroshlar, real sharhlar, AI tavsiyalar va premium xizmatlar — barchasi bir joyda.",
    ru: "Бронируйте за 1 минуту. Лучшие барберы рядом, реальные отзывы, AI-рекомендации и премиум-сервис — всё в одном месте.",
    en: "Book in 1 minute. The best barbers nearby, real reviews, AI recommendations and premium services — all in one place.",
  },
  "land.findBarber": {
    uz: "Barber topish",
    ru: "Найти барбера",
    en: "Find a barber",
  },
  "land.joinBarber": {
    uz: "Barber sifatida qo'shilish",
    ru: "Стать барбером",
    en: "Join as a barber",
  },
  "land.happy": {
    uz: "10,000+ baxtli mijoz",
    ru: "10,000+ счастливых клиентов",
    en: "10,000+ happy clients",
  },
  "land.bookedToday": {
    uz: "Bugun bron qilindi",
    ru: "Записей сегодня",
    en: "Booked today",
  },
  "land.onlineNow": {
    uz: "Online hozir",
    ru: "Онлайн сейчас",
    en: "Online now",
  },
  "land.acceptingNow": {
    uz: "ta barber qabul qilmoqda",
    ru: "барберов принимают",
    en: "barbers accepting now",
  },
  "land.searchBarber": {
    uz: "Barber ismi yoki xizmat...",
    ru: "Имя барбера или услуга...",
    en: "Barber name or service...",
  },
  "land.searchLoc": {
    uz: "Toshkent, Yunusobod...",
    ru: "Ташкент, Юнусабад...",
    en: "Tashkent, Yunusabad...",
  },
  "land.searchBtn": { uz: "Qidirish", ru: "Найти", en: "Search" },
  "land.topBarbers": {
    uz: "Top sartaroshlar",
    ru: "Топ барберы",
    en: "Top barbers",
  },
  "land.topTitle1": { uz: "Eng yaxshilarni", ru: "Выберите", en: "Choose the" },
  "land.topTitle2": { uz: "tanlang", ru: "лучших", en: "best" },
  "land.viewAll": { uz: "Barchasini ko'rish", ru: "Все", en: "View all" },
  "land.exp": { uz: "yil tajriba", ru: "лет опыта", en: "yrs exp" },
  "land.from": { uz: "dan", ru: "от", en: "from" },
  "land.book": { uz: "Bron", ru: "Записаться", en: "Book" },
  "land.aiTag": { uz: "AI POWERED", ru: "AI POWERED", en: "AI POWERED" },
  "land.aiTitle1": {
    uz: "AI siz uchun",
    ru: "AI подберёт вам",
    en: "AI finds your",
  },
  "land.aiAccent": {
    uz: "mukammal stilni topadi",
    ru: "идеальный стиль",
    en: "perfect style",
  },
  "land.aiDesc": {
    uz: "Yuz shaklingiz, sochingiz turi va shaxsiyatingizga qarab AI sizga eng mos haircut va barberni tavsiya qiladi.",
    ru: "AI порекомендует стрижку и барбера на основе вашей формы лица, типа волос и образа жизни.",
    en: "AI recommends the perfect haircut and barber based on your face shape, hair type and lifestyle.",
  },
  "land.aiBtn": {
    uz: "AI tavsiya olish",
    ru: "Получить AI-рекомендацию",
    en: "Get AI recommendation",
  },
  "land.aiChat1": {
    uz: "Salom! Qaysi haircut sizga mos kelishini bilmoqchimisiz?",
    ru: "Привет! Хотите узнать, какая стрижка вам подойдет?",
    en: "Hi! Want to know which haircut suits you best?",
  },
  "land.aiChat2": {
    uz: "Ha, men oval yuzga ega va ofisda ishlayman",
    ru: "Да, у меня овальное лицо и я работаю в офисе",
    en: "Yes, I have an oval face and work in an office",
  },
  "land.aiChatPre": {
    uz: "Sizga ",
    ru: "Вам ",
    en: "For you, ",
  },
  "land.aiChatHighlight": {
    uz: "Classic Taper",
    ru: "Classic Taper",
    en: "Classic Taper",
  },
  "land.aiChatPost": {
    uz: " juda mos keladi. Davron Karimovni tavsiya qilaman ✨",
    ru: " идеально подойдет. Рекомендую Даврона Каримова ✨",
    en: " would be perfect. I recommend Davron Karimov ✨",
  },
  "land.aiBarberName": {
    uz: "Barber AI",
    ru: "Barber AI",
    en: "Barber AI",
  },
  "land.aiOnline": {
    uz: "Online",
    ru: "Онлайн",
    en: "Online",
  },
  "land.trends2026": {
    uz: "2026 trendlari",
    ru: "Тренды 2026",
    en: "2026 trends",
  },
  "land.trendTitle1": { uz: "Hozir", ru: "Что", en: "What's" },
  "land.trendAccent": {
    uz: "nima trendda",
    ru: "в тренде",
    en: "trending now",
  },
  "land.whyTitle1": { uz: "Nega", ru: "Почему", en: "Why" },
  "land.feat.fast": {
    uz: "Tez bron",
    ru: "Быстрая запись",
    en: "Fast booking",
  },
  "land.feat.fastDesc": {
    uz: "1 daqiqada tasdiqlangan navbat",
    ru: "Подтверждённая запись за минуту",
    en: "Confirmed slot in a minute",
  },
  "land.feat.real": {
    uz: "Real sharhlar",
    ru: "Настоящие отзывы",
    en: "Real reviews",
  },
  "land.feat.realDesc": {
    uz: "Faqat haqiqiy mijozlardan",
    ru: "Только от реальных клиентов",
    en: "Only from real clients",
  },
  "land.feat.top": {
    uz: "TOP barberlar",
    ru: "TOP барберы",
    en: "TOP barbers",
  },
  "land.feat.topDesc": {
    uz: "Tekshirilgan professionalar",
    ru: "Проверенные профессионалы",
    en: "Verified professionals",
  },
  "land.feat.ai": {
    uz: "AI tavsiya",
    ru: "AI-рекомендации",
    en: "AI recommendations",
  },
  "land.feat.aiDesc": {
    uz: "Sizga mos stil va barber",
    ru: "Подходящий стиль и барбер",
    en: "Style and barber for you",
  },
  "land.feat.safe": {
    uz: "Xavfsiz to'lov",
    ru: "Безопасная оплата",
    en: "Secure payment",
  },
  "land.feat.safeDesc": {
    uz: "Hech qanday yashirin to'lov",
    ru: "Никаких скрытых платежей",
    en: "No hidden fees",
  },
  "land.feat.com": {
    uz: "10K+ mijoz",
    ru: "10K+ клиентов",
    en: "10K+ clients",
  },
  "land.feat.comDesc": {
    uz: "Bizga ishonadigan jamoa",
    ru: "Доверяющее сообщество",
    en: "A trusting community",
  },
  "land.howTag": {
    uz: "Qanday ishlaydi",
    ru: "Как это работает",
    en: "How it works",
  },
  "land.howTitle1": { uz: "3 oddiy", ru: "3 простых", en: "3 simple" },
  "land.howAccent": { uz: "qadam", ru: "шага", en: "steps" },
  "land.step1": {
    uz: "Barber tanlang",
    ru: "Выберите барбера",
    en: "Pick a barber",
  },
  "land.step1Desc": {
    uz: "Reyting, narx va joylashuvga qarab",
    ru: "По рейтингу, цене и локации",
    en: "By rating, price and location",
  },
  "land.step2": {
    uz: "Vaqtni belgilang",
    ru: "Выберите время",
    en: "Choose a time",
  },
  "land.step2Desc": {
    uz: "Bo'sh slotlardan birini tanlang",
    ru: "Из свободных слотов",
    en: "From the free slots",
  },
  "land.step3": { uz: "Bron qiling", ru: "Забронируйте", en: "Book it" },
  "land.step3Desc": {
    uz: "1 click — tasdiqlanadi",
    ru: "1 клик — подтверждено",
    en: "1 click — confirmed",
  },
  "land.premBenefit1": {
    uz: "Navbatsiz bron qilish",
    ru: "Бронь без очереди",
    en: "Skip-the-line booking",
  },
  "land.premBenefit2": {
    uz: "TOP barberlarga kirish",
    ru: "Доступ к TOP барберам",
    en: "Access to TOP barbers",
  },
  "land.premBenefit3": {
    uz: "Maxsus chegirmalar",
    ru: "Специальные скидки",
    en: "Special discounts",
  },
  "land.premBenefit4": {
    uz: "VIP qo'llab-quvvatlash",
    ru: "VIP поддержка",
    en: "VIP support",
  },
  "land.premTitle1": {
    uz: "Premium obuna bilan",
    ru: "С премиум-подпиской",
    en: "With Premium subscription",
  },
  "land.premAccent": {
    uz: "VIP imkoniyatlar",
    ru: "VIP возможности",
    en: "VIP features",
  },
  "land.premDesc": {
    uz: "Eng yaxshi sartaroshlarga doimiy kirish, eksklyuziv chegirmalar va navbatsiz bron qilish imkoniyati.",
    ru: "Постоянный доступ к лучшим барберам, эксклюзивные скидки и бронь без очереди.",
    en: "Permanent access to top barbers, exclusive discounts and skip-the-line booking.",
  },
  "land.premPerMonth": { uz: "so'm/oy", ru: "сум/мес", en: "UZS/mo" },
  "land.premBtn": {
    uz: "Premium olish",
    ru: "Получить Premium",
    en: "Get Premium",
  },
  "land.forBarbers": {
    uz: "Barberlar uchun",
    ru: "Для барберов",
    en: "For barbers",
  },
  "land.joinTitle1": {
    uz: "Minglab klientlarga",
    ru: "Получите тысячи",
    en: "Get thousands of",
  },
  "land.joinAccent": { uz: "ega bo'ling", ru: "клиентов", en: "clients" },
  "land.joinDesc": {
    uz: "Professional CRM, AI tahlillar va premium bron tizimi bilan biznesingizni keyingi darajaga olib chiqing.",
    ru: "Профессиональная CRM, AI-аналитика и премиум система бронирования.",
    en: "Professional CRM, AI analytics and premium booking system.",
  },
  "land.joinB1": {
    uz: "Avtomatik bron tizimi",
    ru: "Автоматическая система записи",
    en: "Automated booking system",
  },
  "land.joinB2": {
    uz: "Mijozlar bazasi va CRM",
    ru: "База клиентов и CRM",
    en: "Client base and CRM",
  },
  "land.joinB3": {
    uz: "Real-time analitika",
    ru: "Real-time аналитика",
    en: "Real-time analytics",
  },
  "land.joinB4": {
    uz: "AI tools va smart queue",
    ru: "AI инструменты и умная очередь",
    en: "AI tools and smart queue",
  },
  "land.joinBtn": {
    uz: "Barber sifatida qo'shilish",
    ru: "Стать барбером",
    en: "Join as barber",
  },
  "land.statBarbers": {
    uz: "Faol barberlar",
    ru: "Активных барберов",
    en: "Active barbers",
  },
  "land.statBookings": {
    uz: "Oylik bron",
    ru: "Записей в месяц",
    en: "Monthly bookings",
  },
  "land.statRating": {
    uz: "O'rtacha reyting",
    ru: "Средний рейтинг",
    en: "Average rating",
  },
  "land.statRetention": {
    uz: "Mijoz qaytishi",
    ru: "Возврат клиентов",
    en: "Client retention",
  },
  "land.reviewsTag": { uz: "Sharhlar", ru: "Отзывы", en: "Reviews" },
  "land.reviewsTitle1": {
    uz: "Mijozlarimiz",
    ru: "Что говорят",
    en: "What our",
  },
  "land.reviewsAccent": {
    uz: "nima deydi",
    ru: "наши клиенты",
    en: "clients say",
  },
  "land.review1": {
    uz: "Eng yaxshi xizmat! Davron aka shunaqa toza ishlaydi-ki, har oy faqat o'sha yerga boraman.",
    ru: "Лучший сервис! Давроном так чисто работает, что хожу к нему каждый месяц.",
    en: "The best service! Davron is so precise, I only go to him every month.",
  },
  "land.review2": {
    uz: "AI tavsiya juda zo'r ishladi. Tavsiya qilingan stil mukammal mos keldi.",
    ru: "AI-рекомендация отлично сработала. Рекомендованный стиль идеально подошёл.",
    en: "The AI recommendation worked great. The suggested style fit perfectly.",
  },
  "land.review3": {
    uz: "Tez, oson va sifatli. Bron qilish 30 sekundda bo'ladi, premium qiymat.",
    ru: "Быстро, удобно и качественно. Бронь за 30 секунд, премиум-уровень.",
    en: "Fast, easy and high quality. Booking in 30 seconds, premium value.",
  },
  "land.client": { uz: "Mijoz", ru: "Клиент", en: "Client" },
  "land.mobileTag": { uz: "Mobile app", ru: "Mobile app", en: "Mobile app" },
  "land.mobileTitle1": {
    uz: "Cho'ntagingizda",
    ru: "В вашем кармане —",
    en: "Barber studio in",
  },
  "land.mobileAccent": {
    uz: "barber studiya",
    ru: "барбер-студия",
    en: "your pocket",
  },
  "land.mobileDesc": {
    uz: "Push-bildirishnomalar, offline bron, qulay interfeys. iOS va Android uchun tez orada.",
    ru: "Push-уведомления, офлайн-запись, удобный интерфейс. Для iOS и Android — скоро.",
    en: "Push notifications, offline booking, smooth UI. Coming soon to iOS and Android.",
  },
  "land.menu.barbers": { uz: "Barberlar", ru: "Барберы", en: "Barbers" },
  "land.menu.trends": { uz: "Trendlar", ru: "Тренды", en: "Trends" },
  "land.menu.premium": { uz: "Premium", ru: "Premium", en: "Premium" },
  "land.menu.join": {
    uz: "Barber bo'lish",
    ru: "Стать барбером",
    en: "Become a barber",
  },
  "land.cta.start": { uz: "Boshlash", ru: "Начать", en: "Get started" },
  "land.appStore": { uz: "App Store", ru: "App Store", en: "App Store" },
  "land.googlePlay": { uz: "Google Play", ru: "Google Play", en: "Google Play" },
  "land.nextBooking": { uz: "Keyingi bron", ru: "Следующая запись", en: "Next booking" },
  "land.nextBarber": { uz: "Davron Karimov", ru: "Даврон Каримов", en: "Davron Karimov" },
  "land.todayTime": { uz: "Bugun, 14:30", ru: "Сегодня, 14:30", en: "Today, 14:30" },
  "land.confirmed": { uz: "Tasdiqlangan", ru: "Подтверждено", en: "Confirmed" },

  // Footer
  "land.footer.desc": {
    uz: "O'zbekistondagi #1 premium barber bron platformasi.",
    ru: "Премиум платформа бронирования барберов #1 в Узбекистане.",
    en: "#1 premium barber booking platform in Uzbekistan.",
  },
  "land.footer.company": { uz: "Kompaniya", ru: "Компания", en: "Company" },
  "land.footer.about": { uz: "Biz haqimizda", ru: "О нас", en: "About Us" },
  "land.footer.careers": { uz: "Karyera", ru: "Карьера", en: "Careers" },
  "land.footer.contact": { uz: "Bog'lanish", ru: "Контакты", en: "Contact" },
  "land.footer.product": { uz: "Mahsulot", ru: "Продукт", en: "Product" },
  "land.footer.features": { uz: "Funksiyalar", ru: "Функции", en: "Features" },
  "land.footer.premium": { uz: "Premium", ru: "Премиум", en: "Premium" },
  "land.footer.forBarbers": { uz: "Barberlar uchun", ru: "Для барберов", en: "For Barbers" },
  "land.footer.legal": { uz: "Yuridik", ru: "Юридическое", en: "Legal" },
  "land.footer.terms": { uz: "Foydalanish shartlari", ru: "Условия использования", en: "Terms of Service" },
  "land.footer.privacy": { uz: "Maxfiylik", ru: "Конфиденциальность", en: "Privacy" },
  "land.footer.security": { uz: "Xavfsizlik", ru: "Безопасность", en: "Security" },
  "land.footer.copyright": {
    uz: "© 2026 BarberTop. Barcha huquqlar himoyalangan.",
    ru: "© 2026 BarberTop. Все права защищены.",
    en: "© 2026 BarberTop. All rights reserved.",
  },

  // Schedule page
  "sched.title": {
    uz: "Ish jadvali",
    ru: "График работы",
    en: "Work schedule",
  },
  "sched.subtitle": {
    uz: "Hafta kunlari uchun ish vaqtingizni belgilang",
    ru: "Установите рабочее время на каждый день недели",
    en: "Set your working hours per day of week",
  },
  "sched.day": { uz: "Kun", ru: "День", en: "Day" },
  "sched.start": { uz: "Boshlanish", ru: "Начало", en: "Start" },
  "sched.end": { uz: "Tugash", ru: "Конец", en: "End" },
  "sched.off": { uz: "Dam olish kuni", ru: "Выходной", en: "Day off" },

  // Admin barber form
  "barbers.addTitle": {
    uz: "Yangi barber qo'shish",
    ru: "Добавить нового барбера",
    en: "Add new barber",
  },
  "barbers.addNote": {
    uz: "Email va parol kiriting — barber shu ma'lumotlar bilan tizimga kira oladi",
    ru: "Введите email и пароль — барбер сможет войти с этими данными",
    en: "Enter email & password — barber can sign in with them",
  },

  // Filters
  "filter.title": { uz: "Filtrlar", ru: "Фильтры", en: "Filters" },
  "filter.search": {
    uz: "Barber ismi yoki xizmat...",
    ru: "Имя барбера или услуга...",
    en: "Barber name or service...",
  },
  "filter.region": { uz: "Viloyat", ru: "Регион", en: "Region" },
  "filter.district": { uz: "Tuman", ru: "Район", en: "District" },
  "filter.all": { uz: "Hammasi", ru: "Все", en: "All" },
  "filter.priceRange": {
    uz: "Narx oralig'i",
    ru: "Диапазон цен",
    en: "Price range",
  },
  "filter.rating": { uz: "Reyting", ru: "Рейтинг", en: "Rating" },
  "filter.experience": { uz: "Tajriba", ru: "Опыт", en: "Experience" },
  "filter.gender": { uz: "Jins", ru: "Пол", en: "Gender" },
  "filter.male": { uz: "Erkak", ru: "Мужчина", en: "Male" },
  "filter.female": { uz: "Ayol", ru: "Женщина", en: "Female" },
  "filter.sort": { uz: "Saralash", ru: "Сортировка", en: "Sort" },
  "filter.sort.rating": {
    uz: "Eng yaxshi reyting",
    ru: "Лучший рейтинг",
    en: "Top rated",
  },
  "filter.sort.priceLow": {
    uz: "Eng arzon",
    ru: "Сначала дешёвые",
    en: "Cheapest",
  },
  "filter.sort.priceHigh": {
    uz: "Eng qimmat",
    ru: "Сначала дорогие",
    en: "Most expensive",
  },
  "filter.sort.exp": { uz: "Tajribali", ru: "Опытные", en: "Most experienced" },
  "filter.chip.near": { uz: "📍 Yaqin", ru: "📍 Рядом", en: "📍 Nearby" },
  "filter.chip.top": { uz: "⭐ TOP", ru: "⭐ TOP", en: "⭐ TOP" },
  "filter.chip.cheap": { uz: "💰 Arzon", ru: "💰 Недорого", en: "💰 Cheap" },
  "filter.chip.open": { uz: "🕒 Ochiq", ru: "🕒 Открыто", en: "🕒 Open now" },
  "filter.chip.pro": { uz: "💎 PRO", ru: "💎 PRO", en: "💎 PRO" },
  "filter.chip.vip": { uz: "👑 VIP", ru: "👑 VIP", en: "👑 VIP" },
  "filter.chip.home": {
    uz: "🏠 Uyga boradi",
    ru: "🏠 На дом",
    en: "🏠 Home service",
  },
  "filter.chip.fast": {
    uz: "⚡ Tez javob",
    ru: "⚡ Быстрый ответ",
    en: "⚡ Fast response",
  },
  "filter.reset": { uz: "Tozalash", ru: "Сбросить", en: "Reset" },
  "filter.results": { uz: "ta natija", ru: "результатов", en: "results" },

  // Plan gating
  "gate.locked": {
    uz: "Bu funksiya yopiq",
    ru: "Эта функция недоступна",
    en: "Feature locked",
  },
  "gate.upgradeTo": {
    uz: "ga o'tkazing",
    ru: "обновитесь до",
    en: "Upgrade to",
  },
  "gate.viewPlans": {
    uz: "Rejalarni ko'rish",
    ru: "Посмотреть тарифы",
    en: "View plans",
  },
};

export const langLabels: Record<Language, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

interface LanguageCtx {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: "uz",
  setLang: () => {},
  t: (k) => k,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(
    () => (localStorage.getItem("lang") as Language) || "uz",
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Language) => setLangState(l);
  const translate = (key: string) => t[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
