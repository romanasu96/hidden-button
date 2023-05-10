function createButtons() {
    const numBtns = document.getElementById('numBtns').value;
    const buttonsContainer = document.getElementById('buttons');
    buttonsContainer.innerHTML = '';

    for (let i = 0; i < numBtns; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.addEventListener('click', checkWinner);
        buttonsContainer.appendChild(button);
    }

    const randomIndex = Math.floor(Math.random() * numBtns);
    buttonsContainer.children[randomIndex].setAttribute('data-winner', true);
}

function checkWinner(event) {
    const button = event.target;
    button.classList.add('flipped');
    const isWinner = button.getAttribute('data-winner');
    if (isWinner) {
        button.classList.add('winner');
        button.innerText = ":)";
    } else {
        button.classList.add('loser');
        button.innerText = ":(";
    }
    button.removeEventListener('click', checkWinner);

    setTimeout(() => {
        if (isWinner) {
            alert('Congratulations! You won!');
        } else {
            alert('Sorry, you lost.');
        }
    }, 250);
}

