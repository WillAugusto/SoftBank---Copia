const toggleButton = document.getElementById('toggleButton');
const saldo = document.getElementById('saldo');

toggleButton.addEventListener('click', () => {
    saldo.classList.toggle('block');
    }
);