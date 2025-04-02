const apiUrl = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "Y96eVC5a258NH6Vya58s3w==b9cmrz4Ab2KBiYgz";

const controlBtn= document.querySelector(".control-btn");
const quoteText=document.querySelector(".quote-text");
const quoteAuthor=document.querySelector(".quote-author");
const tweet=document.querySelector(".twitter");
const copyBtn=document.querySelector(".copy");

let data={};
async function generateQuote() {
    try {
        const response = await fetch(apiUrl,{
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            }, 
        });

        data = await response.json();
        console.log(data[0]);

    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

controlBtn.addEventListener("click",async ()=>{
    await generateQuote();
    quoteText.innerHTML=data[0].quote;
    quoteAuthor.innerHTML=data[0].author;
});

function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data[0].quote)} - ${encodeURIComponent(data[0].author)}`;
    window.open(tweetUrl);
}

tweet.addEventListener("click",tweetQuote);

function copyPass(){
    const text = quoteText.innerText;
    navigator.clipboard.writeText(text)
}

copyBtn.addEventListener("click",copyPass);
