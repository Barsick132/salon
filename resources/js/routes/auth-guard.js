export default async (to, from, next) => {
    let isLoggedIn = window.Laravel.isLoggedIn;

    // Если пользователь авторизован, не пускаем его на страницу авторизации
    if ((to.fullPath === '/login' || to.fullPath === '/register') && isLoggedIn) {
        next(from);
    }

    if (to.meta.role) {
        if(to.meta.role === 'user' && isLoggedIn)
            next();
        else if(to.meta.role === 'admin' && isLoggedIn && window.Laravel.user.role === 'admin') {
            next()
        } else {
            next(from);
        }
    } else {
        next();
    }
}
