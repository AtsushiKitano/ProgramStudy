window.onload = function() {
  var box = document.getElementById('box');
  var elems = document.getElementsByTagName('div');
  var all = document.getElementsByTagName('*');
  var class_sample = document.getElementsByClassName('classsample');
  var one_div = document.querySelector('#box');
  var all_div = document.querySelectorAll('div');
  var reedit = document.getElementById('reedit');

  console.log(box.innerHTML);
  for (let i = 0; i<elems.length; i++) {
    console.log(elems[i].innerHTML);
  }

  for (let i = 0; i<all.length; i++) {
    console.log("all variable innerHTML");
    console.log(all[i].innerHTML);
  }

  console.log(class_sample.innerHTML);

  console.log(one_div);
  console.log(all_div);

  reedit.innterHTML = '<em>new </em> HTML!!';

  console.log(reedit.innerHTML);

  box.style.backgroundColor = 'red';


  var newdiv = document.createElement('div');

  newdiv.id = 'new';

  newdiv.innerHTML = 'new div';

  console.log(newdiv);
  box.appendChild(newdiv);

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    evn_btn.style.backgroundColor = 'green';
  }, false);

  btn.addEventListener('click', function() {
    alert('clicked!!');
  }, false);



  var evn_btn = document.getElementById('evnbtn');
};
