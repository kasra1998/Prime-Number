function cPrime() {
    const n = parseInt(document.getElementById('input').value);
    const res = document.getElementById('result');
    const number = document.getElementById('number');

    if (isNaN(n) || n <= 1) {
        res.textContent = "Please enter a number greater than 1.";
        res.style.color = "red";
        number.textContent = "";
        return;
    }

    let divisors = [];

    // Find divisors
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) { // Avoid duplicate for perfect squares
                divisors.push(n / i);
            }
        }
    }

    if (divisors.length === 0) {
        res.textContent = `${n} is a Prime Number.`;
        res.style.color = "green";
        number.textContent = "";
    } else {
        res.textContent = `${n} is a Non-Prime Number.`;
        res.style.color = "blue";
        divisors.sort((a, b) => a - b); // Sort for nicer output
        number.textContent = 'Divisors of ' + n + ':  ' + divisors.join(", ");
        //console.log(divisors); // Log array for debugging
    }
}
