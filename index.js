function setError(id, msg) {
  document.getElementById(id).innerText = msg;
}

function validateForm() {
  // Get elements from HTML first
  let name = document.getElementById("name").value;
  let phone = document.getElementById("Phone").value;
  let email = document.getElementById("email").value;
  let pass = document.forms["myForm"]["pass"].value;
  let vpass = document.forms["myForm"]["vpass"].value;

  let ok = true;

  // Name
  if (name === "" || !isNaN(name)) {
    setError("nameError", "Enter valid name");
    ok = false;
  } else setError("nameError","");

  // Phone
  if (!/^\d{10,12}$/.test(phone)) {
    setError("phoneError", "Enter 10–12 digit phone");
    ok = false;
  } else setError("phoneError","");

  // Email
  if (!email.includes("@")) {
    setError("emailError", "Invalid email");
    ok = false;
  } else setError("emailError","");

  // Password
  if (pass.length < 6) {
    setError("passError", "Min 6 characters");
    ok = false;
  } else setError("passError","");

  // Confirm Password
  if (pass !== vpass) {
    setError("vpassError", "Passwords not match");
    ok = false;
  } else setError("vpassError","");

  if (ok) {
    document.getElementById("successMessage").innerText = "✓ Form Submitted!";
  }

  return ok;
}