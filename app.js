
let button = document.querySelector(".random_button")

button.addEventListener("click", random);

function random(){
    let currentQuote = randomPicker();
    let randomName = arr[currentQuote].author;
    let randomText = arr[currentQuote].quote;

    document.querySelector(".quoteText").textContent = randomText;
    document.querySelector(".author").textContent = randomName;
}
function randomPicker(){
 return Math.floor(Math.random()* arr.length);
}