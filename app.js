function generate(){
    const quotes = [
        { author: "- JENEF", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall" },
        { author: "- LEhra", quote: "Believe you can and you're halfway there." },
        { author: "- GElne", quote: "It does not matter how slowly you go as long as you do not stop." },
        { author: "- Helenia", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts" },
        { author: "- Aynoisha", quote: "You don't have to be great to start, but you have to start to be great" },
        { author: "- Deniyal", quote: "You miss 100% of the shots you don't take." }
    ];

    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').innerHTML = randomQuotes.quote;
    document.getElementById('author').innerHTML = randomQuotes.author;

}