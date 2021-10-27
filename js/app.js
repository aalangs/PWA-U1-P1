//Preguntamos si el navegador tiene ServiceWorker
if (navigator.serviceWorker) {
    console.log("Service Worker disponible")
    navigator.serviceWorker.register('/sw.js')
} else {
    console.log("Service Worker NO disponible")
}