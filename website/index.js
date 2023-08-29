// Javascript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ystbokglls45kedledujzbtobe0kaity.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();