document.querySelector(".przycisk").addEventListener("click", function() {
    const inputValue = document.querySelector("input").value; 
    const validKeywords = ["Mietek", "proszę"]; 

    if (validKeywords.includes(inputValue)) {
        window.open("https://www.google.com");
    } else {
        alert("Nieprawidłowe hasło!"); 
    }
});