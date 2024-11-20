var quotes =[];
quotes.push(["“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "― Marilyn Monroe"],["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","― Albert Einstein"],["“A room without books is like a body without a soul.”","― Marcus Tullius Cicero"],["“You only live once, but if you do it right, once is enough.”","― Mae West"],["“A friend is someone who knows all about you and still loves you.”","― Elbert Hubbard"],["“To live is the rarest thing in the world. Most people exist, that is all.”","― Oscar Wilde"],["“We accept the love we think we deserve.”","― Stephen Chbosky"],["“Without music, life would be a mistake.”","― Friedrich Nietzsche, Twilight of the Idols"],["“It is better to be hated for what you are than to be loved for what you are not.”","― Andre Gide"],["“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”","― Martin Luther "],["“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”","― Maya Angelou"],["“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not leadWalk beside me… just be my friend”","― Albert Camus"],["“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”","― J.K. Rowling"],["“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”","― Helen Keller"]);

var i;
var previous;
function getRandomInt(min, max) {
 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function display_quote() {

    var quote = document.getElementById('quote');
    var quoteText = document.getElementById('quote-text');
    var quoteAuthor = document.getElementById('quote-author');
    quote.style.display='block';
    i=getRandomInt(0,quotes.length-1);
    while(i==previous){
        i=getRandomInt(0,quotes.length-1);
    }
    
    quoteText.innerHTML=quotes[i][0];
    quoteAuthor.innerHTML=quotes[i][1];
     previous =i;

//console.log(i)
        
        
    }
   
    
    
    



