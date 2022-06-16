const logout = () => {
    localStorage.clear();
    window.location.pathname = '/login'
}

export default logout;