const inspirational_button = document.getElementById("inspirational");
// const funny_button = document.getElementById("funny");
let main_text = document.getElementById("click-text");

// Random quote generator and display on page
function newInspirationalQuote() {
    fetch('https://type.fit/api/quotes')
    .then(response => {
      if (response.ok) {
        data = response.json();
        return data; // return json data to next .then
      } else {
        console.log("FAILURE")
      }
    })
    .then(function quoteFunction(data) {
      let quote = data[Math.round(data.length * Math.random())].text;
      while (quote.length > 50) {
        quote = data[Math.round(data.length * Math.random())].text;
      }
      document.getElementById('inspirational').onclick = function inspirationalClicked() {
          document.getElementById('click-text').innerText = `'${quote}'`;
          newInspirationalQuote();
      };
    })
}
newInspirationalQuote();