var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log("Service Worker registered");
        });
}

window.addEventListener('beforeinstallprompt',function (event) {
   console.log('before install prompt fired');
   event.preventDefault();
   deferredPrompt = event;
   return false;
});