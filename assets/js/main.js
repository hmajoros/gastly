function randomizeBackgrounds() {
  var posts = document.getElementsByClassName('post-info');

  var offset = Math.floor(Math.random() * 3) + 1;
  for (var i = 0; i < posts.length; i++) {

    var num = ((i + offset) % 4) + 1;
    posts[i].classList.add('bg-' + num);
  }
}

function replaceImages() {
  var images = document.querySelectorAll('[data-img]');

  for (var i = 0; i < images.length; i++) {
    images[i].style.backgroundImage = 'url(' + images[i].dataset.img + ')';
  }
}

function colorizePagination() {
  var num1 = Math.floor(Math.random() * 4) + 1,
      num2 = (num1 + 1) % 4 + 1;
  document.querySelector('.prev-post').classList.add('bg-' + num1 + '-hover');
  document.querySelector('.next-post').classList.add('bg-' + num2 + '-hover');
}

if (document.body.classList.contains('home-template')) {
  randomizeBackgrounds();
  replaceImages();
}

if (document.body.classList.contains('post-template')) {
  replaceImages();
  colorizePagination();
}


