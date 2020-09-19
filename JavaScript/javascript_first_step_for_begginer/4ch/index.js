window.onload = function(){

  var photoList = [
    { src: 'img/spring.jpg', title: '春の桜'},
    { src: 'img/summer.jpg', title: '夏のひまわり'},
    { src: 'img/autumn.jpg', title: '秋の紅葉'},
    { src: 'img/winter.jpg', title: '冬の山'},
  ];

  var photoLength = photoList.length;

  var photo = document.getElementById('photo');
  var nextBtn = document.getElementById('nextBtn');
  var title = document.getElementById('title');
  var currentIndex = 0;

  var item,img;

  for (let i = 0; i < photoLength; i++) {
    img = document.createElement('img');
    item = photoList[i];

    img.src = item.src;
    img.alt = item.title;

    photo.appendChild(img);

    item.elem  = img;
  }

  function showPhoto(index) {
    for (let i = 0; i< photoList.length; i++) {
      photoList[i].elem.style.display = 'none';
    }

    var targetPhoto = photoList[index];
    var viewNumber = index + 1;

    title.innerHTML = '['+ viewNumber +']' + targetPhoto.title;
    targetPhoto.elem.style.display = 'inline';
  }

  nextBtn.onclick = function() {
    currentIndex++;
    if(currentIndex === photoList.length) {
      currentIndex = 0;
    }

    showPhoto(currentIndex);
  };

  showPhoto(currentIndex);
};
