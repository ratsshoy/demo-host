// main-window-js

(function() {

    // message event
    window.addEventListener('message', (event) => {
        // alert(event.data + ' at ' + new Date());
        document.querySelector('#dd-recieved-at').textContent = new Date().toISOString();
        document.querySelector('#dd-origin').textContent = event.origin;
        document.querySelector('#dd-message').textContent = event.data;
    });
    
})();