function getnews() {
    fetch("https://newsapi.org/v2/top-headlines?q=tech&apiKey=66e66b6362804d97a87fe9decd230ccc").
    then(res => res.json()).then(data =>  {
        const randomNews = Math.floor(Math.random() * data.articles.length)
        document.getElementById("news").style.backgroundImage = "url('"+data.articles[randomNews].urlToImage+"')"
        document.getElementById("news-title").innerHTML = data.articles[randomNews].title
        document.getElementById("news-link").href = data.articles[randomNews].url})
}
getnews()
setInterval(getnews, 20000)
