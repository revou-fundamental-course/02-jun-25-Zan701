let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
  var btnNama = document.getElementById('btnNama');
  var inputNama = document.getElementById('inputNama');
  var welcomeTitle = document.getElementById('welcomeTitle');
  var popupNama = document.getElementById('popupNama');

  if (inputNama) {
    inputNama.focus();
  }

  if(btnNama && inputNama && welcomeTitle && popupNama) {
    btnNama.addEventListener('click', function() {
      var nama = inputNama.value.trim();
      if(nama.length > 0) {
        welcomeTitle.innerHTML = 'Hi ' + nama + ', Welcome To Website';
        popupNama.style.display = 'none';
      } else {
        inputNama.focus();
      }
    });
    inputNama.addEventListener('keydown', function(e) {
      if(e.key === 'Enter') {
        btnNama.click();
      }
    });
  }
});

// Message Us Form Validation & Show Preview
const messageForm = document.getElementById('messageForm');
if (messageForm) {
  messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('formNama').value.trim();
    const tgl = document.getElementById('formTgl').value;
    const pesan = document.getElementById('formPesan').value.trim();
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    const gender = genderRadio ? genderRadio.value : '';

    if (!nama || !tgl || !pesan || !gender) {
      alert('Semua field harus diisi!');
      return;
    }

    document.getElementById('previewNama').textContent = nama;
    document.getElementById('previewTgl').textContent = tgl;
    document.getElementById('previewGender').textContent = gender;
    document.getElementById('previewPesan').textContent = pesan;
  });
}

// Popup modal untuk gambar achievements
const popupImgs = document.querySelectorAll('.popup-img');
const imgModal = document.getElementById('imgModal');
const imgModalImg = document.getElementById('imgModalImg');
const imgModalClose = document.getElementById('imgModalClose');

if (popupImgs && imgModal && imgModalImg && imgModalClose) {
  popupImgs.forEach(function(img) {
    img.addEventListener('click', function() {
      imgModal.style.display = 'flex';
      imgModalImg.src = img.getAttribute('data-img');
      imgModalImg.alt = img.alt;
    });
  });
  imgModalClose.addEventListener('click', function() {
    imgModal.style.display = 'none';
    imgModalImg.src = '';
  });
  imgModal.addEventListener('click', function(e) {
    if (e.target === imgModal) {
      imgModal.style.display = 'none';
      imgModalImg.src = '';
    }
  });
}
