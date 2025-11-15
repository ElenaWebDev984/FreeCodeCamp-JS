document.addEventListener('DOMContentLoaded', function () {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    function validatePhoneNumber(phone) {
        return phoneRegex.test(phone);
    }

    checkBtn.addEventListener('click', function () {
        const phoneNumber = userInput.value.trim();

        if (!phoneNumber) {
            alert('Please provide a phone number');
            return;
        }

        const isValid = validatePhoneNumber(phoneNumber);

        if (isValid) {
            resultsDiv.innerHTML = `<p class="valid">Valid US number: ${phoneNumber}</p>`;
        } else {
            resultsDiv.innerHTML = `<p class="invalid">Invalid US number: ${phoneNumber}</p>`;
        }
    });

    clearBtn.addEventListener('click', function () {
        resultsDiv.innerHTML = '';
        userInput.value = '';
        userInput.focus();
    });

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });
});
