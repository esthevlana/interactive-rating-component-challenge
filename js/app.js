let ratingNumbers = document.querySelectorAll('.circle');
let button = document.getElementById('btn');
let evaluation = document.querySelector('.evaluation-card');
let thanks = document.querySelector('.thanks-card');
let selectedRating = document.getElementById('rating');

for (let i = 0; i < ratingNumbers.length; i++) {
    ratingNumbers[i].addEventListener('click', () => {
        let rating = ratingNumbers[i].innerHTML;

    for (let i = 0; i < ratingNumbers.length; i++) {
        ratingNumbers[i].classList.contains('selected')
        ratingNumbers[i].classList.remove('selected');
    }

    ratingNumbers[i].classList.add('selected');

    button.addEventListener('click', () => {
        evaluation.style.display = 'none';
        thanks.style.display = 'block';
        selectedRating.innerHTML = rating;
    })
    })
}