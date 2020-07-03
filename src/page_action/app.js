function mainContent() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url_ = tabs[0].url;
        username = getUserName(url_)
        var final = "Click on the DOWNLOAD button below to SAVE <b>" + username + "'s</b> Instagram DP"
        document.getElementById("demo").innerHTML = final;
    });

}

function getUserName(str) {
    var ans = ""
    var cnt = 0
    for (var i = 0; i < str.length; i++) {
        if (cnt === 3 && str[i] !== "/") {
            ans = ans + str[i]
        }

        if (str[i] === '/') {
            cnt = cnt + 1;
        }
        if (cnt === 4) {
            return ans
        }


    }
}

mainContent()


function getPhoto() {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url_ = tabs[0].url;
        username = getUserName(url_)
        $.get("https://www.instagram.com/" + username + "/?__a=1")
            .done(function(data) {
                var photoURL = data["graphql"]["user"]["profile_pic_url_hd"];
                $('a').attr('href', photoURL)

            })
    })
}

document.getElementsByClassName('automate')[0].addEventListener("click", getPhoto())