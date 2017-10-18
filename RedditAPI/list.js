$.get("https://www.reddit.com/r/elderscrollsonline/.json")
.then(function(success) {
console.log(success)

    var subreddits = success.data.children

    for(i = 0; i < subreddits.length; i++) {
        //DEFINE
        var container = document.createElement('div');
        var heading = document.createElement('h2');
        var link = document.createElement('a');
        var image = document.createElement('img');
        var thumbnail = subreddits[i].data.thumbnail;
        var title = subreddits[i].data.title;
    
        //CONNECT
        heading.innerHTML = title;
        link.href="single.html?url=" + subreddits[i].data.permalink;
        if (thumbnail === "self" || "default") {
            image.src = 'https://assets-auto.rbl.ms/cb3fa385fe465a9d059d1ea0aa3f3d34ceb3f113ef3ade2a2864c2027d8cb850';
        }
        else {
            image.src = thumbnail;
        }

        //APPEND TO DOC
        document.body.appendChild(container);
        container.appendChild(link);
        container.appendChild(image);
        link.appendChild(heading);
    }
});

//not pretty but aye it works!!!

