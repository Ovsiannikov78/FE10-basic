/* The Golden Random Quotes project.
Write a random quote generator - when you press a button, 
show the new randomly selected quote from the list (10 quotes at least). 
You can copy quotes from https://www.thegoldenquotes.net/best-100-public-domain-quotes-of-all-time-collection-01/ 

*/

 let quotes = [
    '1. The secret of getting ahead is getting started... - Mark Twain',
    '2. Beware of missing chances, otherwise it may be altogether too late some day... - Franz Liszt',
    '3. The great aim of education is not knowledge but action...  - Herbert Spencer',
    '4. As I grow older, I pay less attention to what men say. I just watch what they do... - Andrew Carnegie',
    '5. Experience is the teacher of all things... - Julius Caesar',
    '6. We are shaped by our thoughts, we become what we think... - Gautama The Lord Buddha',
    '7. Well done is better than well said... - Benjamin Franklin',
    '8. He is able who think he is able... - Gautama The Lord Buddha',
    '9. For every minute you are angry you lose sixty seconds of happiness... - Ralph Waldo Emerson',
    '10. There is nothing on this earth more to be prized than true friendship... - St. Thomas Aquinas'
];

document.getElementById("quoteDisplay").addEventListener("click", function () {
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("text").innerHTML = quote;
});

 

