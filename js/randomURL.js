function getURLString(url) {
    const range=url.length;
    const random = Math.floor(Math.random()*range)
    return url[random].url
}