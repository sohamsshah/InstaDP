chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);


            console.log("Thank you for using InstaDP Downloader.");


        }
    }, 10);
});