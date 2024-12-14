function validateEmail() {
    const emailInput = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        alert('Email hợp lệ!');
        // Thực hiện các hành động khác ở đây nếu cần
    } else {
        alert('Email không hợp lệ. Vui lòng nhập đúng định dạng "a@b"!');
    }
}