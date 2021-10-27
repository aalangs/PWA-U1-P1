//Preguntamos si el navegador tiene ServiceWorker
let url = window.location.href;
let swDirect = "/miRepositorio/sw.js"

if (navigator.serviceWorker) {
    console.log("Service Worker disponible")
    if (url.includes("localhost")) {
        swDirect = "/sw.js"
    }
    navigator.serviceWorker.register(swDirect)
} else {
    console.log("Service Worker NO disponible")
}