function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const correctUser = "Snowman";
  const correctPass = "Pandu107";

  if (user === correctUser && pass === correctPass) {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText =
      "Wrong username or password ❌";
  }
}
