function getRandomPokemonQuote() {
    fetch('/api/randomPokenea/quote')
    .then(response => response.json())
    .then(data => {
        document.getElementById('pokemon-image').src = data.imagen;
        document.getElementById('pokemon-quote').textContent = data.frase_filosofica;
    })
    .catch(error => console.error('Error fetching Pokémon quote:', error));
}

// Call the function initially to load a random Pokémon quote when the page loads
getRandomPokemonQuote();
