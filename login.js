function loGin() {
  let tendangnhap = document.getElementById("tendangnhap").value;
  let password = document.getElementById("password").value;

  console.log(tendangnhap);
  console.log(password);

  if (tendangnhap === "" || password === "") {
    console.log("Không được để trống tên đăng nhập hoặc mật khẩu");
  } else if (tendangnhap === "quynh" && password === "123") {
    console.log("Welcome Quynh");
    document.getElementById("show_html").innerHTML = `Welcome ${tendangnhap}`;

    var userData = {
      username: tendangnhap,
      isLoggedIn: true,
    };
    localStorage.setItem("dataLogin", JSON.stringify(userData));
  } else if (tendangnhap === "an" && password === "123") {
    console.log("Welcome An");
    document.getElementById("show_html").innerHTML = `Welcome ${tendangnhap}`;

    var userData = {
      username: tendangnhap,
      isLoggedIn: true,
    };
    localStorage.setItem("dataLogin", JSON.stringify(userData));
  } else {
    console.log("Bạn đã đăng nhập sai");
  }
}
