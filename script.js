const shareBtn = document.querySelector(".vk-button");
const trigger = document.querySelector("#new-quote");
const quoteText = document.querySelector(".quote-text");
const url = "https://api.quotable.io/random";
function generateQuote() {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML = data.content;
      document.querySelector("#author").innerHTML = "- " + data.author;
    })
    .catch(function (err) {
      console.log(err);
    });
}

generateQuote();

trigger.addEventListener("click", () => {
  generateQuote();
});

shareBtn.addEventListener("click", () => {
  const vkUrl = `https://vk.com/share.php?url=`;
  window.open(vkUrl, "_blank");
});
