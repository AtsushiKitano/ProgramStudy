const lang = document.querySelector('html').lang;

if ( lang === "ja") {
  document.querySelector('option[value="pulldown.html"]').selected = true;
} else if ( lang === "en") {
  document.querySelector('option[value="pulldown-en.html"]').selected = true;
}

document.getElementById("form").select.onchange = () => { // formを変更したときに実行される
  console.log("フォームの変更がされた");
  console.log(document.getElementById("lang").value);
  console.log(document.querySelector('option[value="pulldown.html"]').selected);
  console.log(document.querySelector('html').lang);
  console.log(location.href);
  console.log(document.getElementById("form").select.value);
  location.href=document.getElementById("form").select.value;
};
