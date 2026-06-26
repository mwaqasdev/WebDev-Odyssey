function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁';
    }
}

function showRegisterMessage() {
    alert('Registration functionality would be implemented here.');
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');

    btnText.innerHTML = '<div class="loading"></div>';
    submitBtn.disabled = true;

    // Simulate login process
    setTimeout(() => {
        btnText.textContent = 'Success!';
        setTimeout(() => {
            btnText.textContent = 'Sign Me In';
            submitBtn.disabled = false;
            alert('Login functionality would redirect to dashboard here.');
        }, 1000);
    }, 2000);
});

// Add subtle animations on input focus
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
        this.parentElement.style.transform = 'scale(1)';
    });
});
