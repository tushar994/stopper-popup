const map = {
    "https://www.youtube.com/*": "messaeg",
    "https://linear.app/*": "m"
}

var scriptElement = document.createElement('script');

const currentURL = window.location.href;

// Iterate over the keys in the map
for (const key in map) {
    // Check if the current URL matches the pattern in the key
    if (currentURL.match(new RegExp(key.replace(/\*/g, '.*')))) {
        // If there's a match, get the corresponding message string
        const message = map[key];
        scriptElement.src = alert(message);

        // Append the script to the DOM
        (document.head || document.documentElement).appendChild(scriptElement);
        // You can now use the 'message' variable as needed
        break; // Exit the loop since we found a match
    }
}