var q = document.getElementById("quote");
var a = document.getElementById("author");
var c = document.getElementById("copy");

async function generate() {
    let response = await fetch("https://dummyjson.com/quotes/random")
    let data = await response.json();
    console.log(data)
    q.innerText = data.quote;
    a.innerText = data.author;
}

function copyText() {
    let text = q.innerText + " - " + a.innerText;
    navigator.clipboard.writeText(text);

    c.innerText = "Copied..👍🏻";

    // Fade in
    c.style.opacity = "1";

    // Fade out after 1 sec
    setTimeout(() => {
        c.style.opacity = "0";
    }, 1000);
}