const images = document.querySelectorAll('.gallery img');

const lightbox =
document.getElementById('lightbox');

const lightboxImg =
document.querySelector('.lightbox-img');

const closeBtn =
document.querySelector('.close');

const nextBtn =
document.getElementById('next');

const prevBtn =
document.getElementById('prev');

let currentIndex = 0;

let visibleImages = [];
function filterSelection(category) {

  visibleImages = [];

  images.forEach((img) => {

    if (
      category === 'all' ||
      img.classList.contains(category)
    ) {

      img.style.display = 'block';

      visibleImages.push(img);

    }

    else {

      img.style.display = 'none';

    }

  });

}
function showCategory(category) {

  filterSelection(category);

  const quote =
  document.getElementById('quote');

  if (category === 'all') {

    quote.innerHTML =
    " Explore beautiful memories ";

  }

  else if (category === 'aesthetic') {

    quote.innerHTML =
    " Aesthetic vibes heal the soul 🌸";

  }

  else if (category === 'landscape') {

    quote.innerHTML =
    "🏔️ Nature paints the best landscapes ";

  }

  else if (category === 'nature') {

    quote.innerHTML =
    "🌿 Feel the calmness of nature ";

  }

  else if (category === 'beach') {

    quote.innerHTML =
    "🌊 Ocean breeze & beach dreams ";

  }

}

showCategory('all');

images.forEach((img) => {

  img.addEventListener('click', () => {

    visibleImages =
    Array.from(images).filter(
      image =>
      image.style.display !== 'none'
    );

    currentIndex =
    visibleImages.indexOf(img);

    lightbox.style.display = 'flex';

    lightboxImg.src = img.src;

  });

});

function showImage(index) {

  if (visibleImages.length === 0) return;

  if (index < 0) {

    index =
    visibleImages.length - 1;

  }

  if (index >= visibleImages.length) {

    index = 0;

  }

  currentIndex = index;

  lightboxImg.src =
  visibleImages[currentIndex].src;

}

nextBtn.addEventListener('click', () => {

  showImage(currentIndex + 1);

});


prevBtn.addEventListener('click', () => {

  showImage(currentIndex - 1);

});


closeBtn.addEventListener('click', () => {

  lightbox.style.display = 'none';

});


document.addEventListener('keydown', (e) => {

  if (lightbox.style.display === 'flex') {

    if (e.key === 'ArrowRight') {

      showImage(currentIndex + 1);

    }

    if (e.key === 'ArrowLeft') {

      showImage(currentIndex - 1);

    }

    if (e.key === 'Escape') {

      lightbox.style.display = 'none';

    }

  }

});