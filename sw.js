console.log("SW: Hola mundo")

self.addEventListener("install", (e) => {
    console.log("SW: Instalado");
})

self.addEventListener("activate", (e) => {
    console.log("SW: Activado y controlando desde la app");
})

self.addEventListener("fetch", (e) => {
    if (e.request.url.includes('.jpg')) {
        let res = fetch("/PWA-U1-P1/images/felino.jpg")
        console.log("Es una imagen :D");
        e.respondWith(res)
    }

    if (e.request.url.includes('pages.css')) {
        let newRes = new Response(`body {
            background-color: black !important;
            color: red !important;
        }`, {
            headers: {
                'Content-Type': 'text/css'
            }
        });
        e.respondWith(newRes)
    }
})