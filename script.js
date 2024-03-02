function videoDegistir(yeniKaynak) {
  setTimeout(function() {
    var video = document.getElementById('hero-video'); // video elementini al
    video.src = yeniKaynak; // yeni video kaynağını ayarla
    video.load(); // yeni videoyu yükle
    video.play(); // yeni videoyu oynat
  }, 1000);
  
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openForm").addEventListener("click", function() {
      document.getElementById("contactForm").style.display = "flex";
    });
  
    document.getElementById("closeForm").addEventListener("click", function() {
      document.getElementById("contactForm").style.display = "none";
    });
  });
 // JavaScript ile formu göstermek için her linkin tıklama olayını dinle
document.getElementById('link1').addEventListener('click', function() {
 
  setTimeout(function() {
    document.getElementById('icerikContainer1').style.display = 'block';
    document.getElementById("icerikContainer2").style.display = "none";
    document.getElementById("icerikContainer3").style.display = "none";
  },1000);

});

document.getElementById('link2').addEventListener('click', function() {
 
  setTimeout(function() {
    document.getElementById('icerikContainer2').style.display = 'block';
    document.getElementById("icerikContainer1").style.display = "none";
    document.getElementById("icerikContainer3").style.display = "none";
  },1000);
});

document.getElementById('link3').addEventListener('click', function() {
  setTimeout(function() {
    document.getElementById('icerikContainer3').style.display = 'block';
    document.getElementById("icerikContainer1").style.display = "none";
    document.getElementById("icerikContainer2").style.display = "none";
  },1000);
 
});
