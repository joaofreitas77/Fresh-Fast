const logedUser = JSON.parse(localStorage.getItem("logedUser"))

if (logedUser) {
    window.location.href = '/pages/inicio/index.html'
}