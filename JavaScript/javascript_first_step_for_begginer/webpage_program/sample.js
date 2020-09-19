window.onload = function(){
  var photoList = [
    { src: 'img/spring.jpg', title: '春の桜'},
    { src: 'img/summer.jpg', title: '夏のひまわり'},
    { src: 'img/autumn.jpg', title: '秋の紅葉'},
    { src: 'img/winter.jpg', title: '冬の山'}
  ];

  var photoLength = photList.length;


  var photo = document.getElementById('phto');
  var nextBtn = document.getElementById('nextBtn');
  var title = document.getElementById('title');

  var currentIndex = 0;

  function showPhoto(index) {
    for (var i = 0; i < photoLength ; i++) {
      photoList[i].elem.style.display = 'none';
    }

    var targetPhoto = photoList[index];

    var viewNumber = index + 1;
    title.innerHTML = '[' + viewNumber +  ']' + targetPhoto.title;

    targetPhoto.elem.style.display = 'inline';
  }

  nextBtn.onclick = function() {
    currentIndex++;
    if (currentIndex === photoLength) {
      currentIndex = 0;
    }

    showPhoto(currentIndex);
  };

  var item, img;

  for (var i = 0; i < photoLength; i++) {
    item = photoList[i];

    img = document.createElement('img');

    img.src = item.src;
    img.alt = item.titile;

    photo.appendChild(img);


    item.elem = img;
  }

  showPhoto(currentIndex);
};
