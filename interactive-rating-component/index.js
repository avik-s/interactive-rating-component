function submitRating() {
    try {
        var theRating = document.querySelector('input[name="rating"]:checked').value;
        document.getElementById("rating-state").classList.add("hidden");
        document.getElementById("thankYou-state").classList.remove("hidden");
        document.getElementById("userRating").innerHTML = theRating;    
    } catch {
        alert('Please choose a rating!');
    }
}