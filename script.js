function authenticate(event) {
    event.preventDefault();
    const employeeId = document.getElementById('employeeId').value;
    const password = document.getElementById('password').value;

    // Authentication logic
    if (employeeId === '15107644'||'admin' && password === 'DBL2024') {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Replace with the URL of the page you want to redirect to
    } else {
        alert('Invalid Employee ID or password');
    }
}




function signup(event) {
    event.preventDefault();
    const employeeName = document.getElementById('employeeName').value;
    const employeeIdSignup = document.getElementById('employeeIdSignup').value;
    const unitName = document.getElementById('unitName').value;
    const newPassword = document.getElementById('newPassword').value;

    // Perform sign-up logic here
    alert(`Sign up successful for employee: ${employeeName}, ID: ${employeeIdSignup}, Unit: ${unitName}`);
    showLogin();
}

function showSignup() {
    document.querySelector('.form-container').style.transform = 'translateX(-50%)';
}

function showLogin() {
    document.querySelector('.form-container').style.transform = 'translateX(0)';
}
