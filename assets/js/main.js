document.addEventListener("DOMContentLoaded", () => {
    
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission
            
            let isValid = true;
            
            // Get form fields
            const nameField = document.getElementById("name");
            const emailField = document.getElementById("email");
            const countryField = document.getElementById("country");
            const commentsField = document.getElementById("comments");
            const successMsg = document.getElementById("formSuccessMessage");

            // Reset errors
            resetError(nameField);
            resetError(emailField);
            resetError(countryField);
            resetError(commentsField);
            successMsg.style.display = "none";

            // Basic Validation
            if (nameField.value.trim() === "") {
                showError(nameField);
                isValid = false;
            }

            if (emailField.value.trim() === "" || !isValidEmail(emailField.value.trim())) {
                showError(emailField);
                isValid = false;
            }

            if (countryField.value.trim() === "") {
                showError(countryField);
                isValid = false;
            }

            if (commentsField.value.trim() === "") {
                showError(commentsField);
                isValid = false;
            }

            // If valid, show success message and clear form
            if (isValid) {
                successMsg.style.display = "block";
                contactForm.reset(); // clear values
                
                // Optional: hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 5000);
            }
        });
    }

    // Email format validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // UI Error helpers
    function showError(inputElement) {
        inputElement.parentElement.classList.add("error");
    }

    function resetError(inputElement) {
        inputElement.parentElement.classList.remove("error");
    }
});
