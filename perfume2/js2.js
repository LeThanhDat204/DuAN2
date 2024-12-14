
var slide = document.querySelector('#img')
var arraySlide = [
    'albumn/1.jpg', 
    'albumn/3.jpg',
    'albumn/images.jpg',


]
var count = 0;

function next() {
    count ++;
    if(count >= arraySlide.length){
        count =0;
    }
    slide.src = arraySlide[count];
}

function prev() {
    count--;
    if(count<0){
        count = arraySlide.length -1;
    }
    slide.src = arraySlide[count];
}

  function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const errorPassword = document.getElementById('errPassword');
    // Kiểm tra điều kiện cho Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorMessage.innerText = 'Email không hợp lệ. Vui lòng nhập đúng định dạng a@b.';
      return false;
    }
    
    // Kiểm tra điều kiện cho Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
      errorPassword.innerText = 'Mật khẩu phải có ít nhất 5 kí tự, bao gồm chữ thường, chữ hoa và số.';
      return false;
    }
    // Nếu mọi thứ đều hợp lệ, cho phép submit form
    errorMessage.innerText = '';
    return true;
  }
  