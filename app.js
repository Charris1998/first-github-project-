function isLoggedInOrSubscribed(loggedIn, subscribed) {
    return loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED'	
}
console.log(isLoggedInOrSubscribed('NOT_LOGGED_IN', 'SUBSCRIBED'))
