document.getElementById('form__reg').addEventListener("submit" , checkForm);

function checkForm(event) {
  event.preventDefault();
  var el = document.getElementById('form__reg');
  var name = el.name.value;
  var email = el.email.value;
  var tel = el.tel.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var arr = [name , email , tel , pass];

  if (name == "") alert("имя забыл")
  else if (email == "") alert("почту забыл")
  else if (tel == "") alert("телефон забыл")
  else if (isNaN(tel) === true) alert("телефон должен состоять из цифр")
  else if (tel.length != 11) alert("цифры должно быть 11")
  else if (pass == "") alert("пароль забыл")
  else if (pass != repass) alert("повтор пороля не совпал")
  else console.log(arr);

}
