const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const card = document.getElementById("card");
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
let oldQuote;
let oldAuthor;
const sorov = new XMLHttpRequest();


function sorovFn() {
    sorov.open("GET", "https://api.api-ninjas.com/v1/quotes?category=happiness ");
    sorov.setRequestHeader("X-Api-Key", "U/LMDglXOMvkQRpb2tXDbA==bAeFWRlv23gO510R");
    sorov.send();
}


function newQuote() {
    const data = JSON.parse(sorov.response);
    quoteEl.textContent = data[0].quote;
    authorEl.textContent = data[0].author;
}
window.addEventListener('DOMContentLoaded', function() {
    sorovFn();
    newQuote();
})
sorov.addEventListener("load", () => {
    newQuote();
});


rightBtn.addEventListener('click', function() {
    oldAuthor = authorEl.textContent;
    oldQuote = quoteEl.textContent;
    leftBtn.style.color = '#0000ff';
    sorovFn();
    newQuote();
})
leftBtn.addEventListener('click', function() {

    leftBtn.style.color = '#0000ff6e';
    authorEl.textContent = oldAuthor;
    quoteEl.textContent = oldQuote;

})