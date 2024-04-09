function getURLString(url) {
    const range=url.length;
    const random = Math.floor(Math.random()*range)
    return url[random].url
}
//버전2
function getRandomURL(vodArray){
    let range=vodArray.length;
    const random = Math.floor(Math.random()*range);
    const playList=Object.keys(vodArray[random]);
    range=vodArray[random][playList].length;
    const vodindex=Math.floor(Math.random()*range);
    const urlString=`https://vod.afreecatv.com/player/${vodArray[random][playList][vodindex]}/playlist/${playList}`;
    return urlString
}
