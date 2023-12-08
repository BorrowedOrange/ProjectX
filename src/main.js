window.addEventListener(("scroll"),()=>{
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY *1.5}px`
    document.querySelector("#Home h2").style.marginTop = `${window.scrollY *1.5}px`
    document.querySelector("#Mountain").style.marginBottom = `${106 - window.scrollY}px`
});

$(window).bind('scroll', function() {

    if ($(window).scrollTop() >= 50) {
      $('header').addClass('scrolled');
    } else { 
      $('header').removeClass('scrolled');
    }
  
  });