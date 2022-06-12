const poemContainer = document.getElementById('poem-container');
const poemText = document.getElementById('poem');
const poet = document.getElementById('poet');
const btntwitter = document.getElementById('twitter');
const btnFacebook = document.getElementById('facebook');
const newPoem = document.getElementById('new-poem');
const loader = document.getElementById('loader');



// let apiQuote = [];
// show loading
function loading() {
    loader.hidden = false;
    poemContainer.hidden = true;
}
// hide loading
function complete(){
    poemContainer.hidden = false;
    loader.hidden = true;
}

// show new quote 

function newQuote(){
    loading();
    //to pick a random quote from api array
    const poem = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // if Poem does not have author, use Unknown
    if (!poem.author){
        poet.textContent ='Unknown';
    } else {
        poet.textContent = poem.author;
    }

    // check poem size to determine styling 
    if (poem.text.length > 60){
        poemText.classList.add('long-poem');
    } else {
        poemText.classList.remove('long-poem');
    }
    // set quote, Hide loader 
    poemText.textContent = poem.text;
    complete();
}

// // Get Quote
// async function getQuotes() {
//     const apiUrl = "https://type.fit/api/quotes";
//     try {
//       const response = await fetch(apiUrl);
//       apiQuotes = await response.json();
//       newQuote();
//     } catch (error){
//         // catch error here
//     }
// }

// // on load 
// getQuotes(); 

// tweet Poem


function TweetPoem() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${poemText.textContent} - ${poemText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newPoem.addEventListener('click', newQuote);
btntwitter.addEventListener('click', TweetPoem);
 newQuote();