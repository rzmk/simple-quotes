const inspirational_button = document.getElementById("inspirational");
// const funny_button = document.getElementById("funny");
let main_text = document.getElementById("click-text");

// Random quote generator and display on page
function newInspirationalQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      if (response.ok) {
        data = response.json();
        return data; // return json data to next .then
      } else {
        console.log("FAILURE");
      }
    })
    .then(function quoteFunction(data) {
      let data_set = data[Math.round(data.length * Math.random())];
      let quote = data_set.text;
      let author = data_set.author;
      while (quote.length > 50 || author == null) {
        data_set = data[Math.round(data.length * Math.random())];
        quote = data_set.text;
        author = data_set.author;
      }
      document.getElementById("inspirational").onclick =
        function inspirationalClicked() {
          document.getElementById("click-text").innerText = `"${quote}"`;
          document.getElementById("author-text").innerText = `- ${author}`;
          quoteFunction(data);
        };
    });
}

newInspirationalQuote();
