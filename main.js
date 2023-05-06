//B1 : Tìm kiếm Element
//B2 : Xử lý
const loginForm = document.getElementById("login");
const error = document.querySelectorAll(".errorMsg");
loginForm.onsubmit = (e) => {
  e.preventDefault();
  //   validate USERNAME
  const userEror = loginForm.user;
  const userEl = userEror.value;
  if (userEl == "") {
    error[0].innerHTML = "Vui lòng không để trống thông tin";
    userEror.classList.add("error-border");
  } else if (userEl.length < 6) {
    userEror.classList.add("error-border");
    error[0].innerHTML = "Vui lòng điền tên đăng nhập ít nhất 6 kí tự";
  } else {
    error[0].innerHTML = "";
    userEror.classList.remove("error-border");
  }
  // validate Email
  const emailEror = loginForm.email;
  const emailEl = emailEror.value;
  console.log(emailEl);
  const regexEmail = /^\w{4,}@\w+.\w+$/;
  if (emailEl == "") {
    error[1].innerHTML = "Vui lòng không để trống thông tin";
    emailEror.classList.add("error-border");
  } else if (emailEl.length < 8) {
    emailEror.classList.add("error-border");
    error[1].innerHTML =
      "Email phải có ít nhất 8 kí tự. Ví dụ: infor@gmail.com";
  } else if (regexEmail.test(emailEl) == false) {
    emailEror.classList.add("error-border");
    error[1].innerHTML =
      "Vui lòng điền đúng định dạng Email. Ví dụ: infor@gmail.com";
  } else {
    error[1].innerHTML = "";
    emailEror.classList.remove("error-border");
  }
  // validate Password
  const passwordEror = loginForm.password;
  const passwordEl = passwordEror.value;
  if (passwordEl == "") {
    error[2].innerHTML = "Vui lòng không để trống thông tin";
    passwordEror.classList.add("error-border");
  } else if (passwordEl.length < 6) {
    passwordEror.classList.add("error-border");
    error[2].innerHTML = "Mật khẩu phải có ít nhất 6 kí tự";
  } else {
    error[2].innerHTML = "";
    passwordEror.classList.remove("error-border");
  }
  // validate age
  const ageEror = loginForm.age;
  const ageEl = ageEror.value;
  if (ageEl == "") {
    error[3].innerHTML = "Vui lòng không để trống thông tin";
    ageEror.classList.add("error-border");
  } else if (isNaN(ageEl) === true) {
    ageEror.classList.add("error-border");
    error[3].innerHTML = "Bạn phải nhập đúng số tuổi. Ví dụ: 20";
  } else if (18 > ageEl || ageEl > 56) {
    ageEror.classList.add("error-border");
    error[3].innerHTML =
      "Tuổi của bạn không đủ điều kiện. Tuổi hợp lệ : 18 < Tuổi < 56";
  } else {
    error[3].innerHTML = "";
    ageEror.classList.remove("error-border");
  }
};
