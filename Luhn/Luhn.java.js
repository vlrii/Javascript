function isValidCardNumber(number) {
    let sum = 0;
    let shouldDouble = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i]);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

document.getElementById("creditForm").onsubmit = function(event) {
    event.preventDefault();

    let input = document.getElementById("cardNumber").value;
    let result = isValidCardNumber(input);

    let output = document.getElementById("output");
    if (result) {
        output.textContent = "valid";
    } else {
        output.textContent = "invalid";
    }
};




