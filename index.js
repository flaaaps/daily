const clock = document.querySelector('#time');
const wrapper = document.querySelector('.wrapper');

function currentTime() {
  const currentTime = moment().format('LTS'); // 12:39:37 AM
  clock.innerHTML = currentTime;
}

setInterval(currentTime, 1000);

fetch('https://quotes.rest/qod')
  .then((response) => response.json())
  .then((data) => {
    const quoteData = data.contents.quotes[0];

    const quoteTitle = document.querySelector('#quote .quote-title');
    const quoteAuthor = document.querySelector('#quote .quote-author');

    quoteTitle.innerHTML = quoteData.quote;
    quoteAuthor.innerHTML = `- ${quoteData.author}`;
    console.log(quote);
  });
