// Do not edit this unless necessary
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register the service worker
        navigator.serviceWorker.register('serviceworker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(err => {
                console.error('ServiceWorker registration failed: ', err);
            });
    });
} else {
    console.warn('Service workers are not supported in this browser.');
}