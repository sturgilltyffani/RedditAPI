var url = location.search.substring(1).split('=')[1];
console.log(location.search);
$.get("https://www.reddit.com/" + url + ".json")
.then(function(success) {
console.log(success)

    //DEFINE
    var container = document.createElement('div');
    var heading = document.createElement('h2');
    var image = document.createElement('img');
    var title = success[0].data.children[0].data.title
    console.log(title)
    var thumbnail = success[0].data.children[0].data.thumbnail
    console.log(thumbnail)
    //CONNECT
    heading.innerHTML = title;
    if (thumbnail === "self" || "default") {
        image.src = 'https://assets-auto.rbl.ms/cb3fa385fe465a9d059d1ea0aa3f3d34ceb3f113ef3ade2a2864c2027d8cb850';
    }
    else {
        image.src = thumbnail;
    }
    //APPEND TO SINGLE DOC
    document.body.appendChild(container);
    container.appendChild(image);
    container.appendChild(heading);
});