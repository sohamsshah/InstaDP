var rule1 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: "/www.instagram.com\/[a-zA-Z0-9\.\_]*/", schemes: ['https'] },

        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
};


chrome.runtime.onInstalled.addListener(function(details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    });
});