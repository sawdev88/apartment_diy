$(function () {
  // Fade in social-toolbar
  $('.social-toolbar').css('right', 0);

  // Fade in email tooltip
  setTimeout(function () {
    $('#email-container').css('bottom', 0);
  }, 2000);

  // Close email tooltip
  $('.fa-close').on('click', function () {
    $('#email-container').css('bottom', '-20rem');
  })

  // truncate blog paragraph
  $('.column-callout .content p').each(function () {
    var paragraphLength = 550;

    if ($(this).text().length >  paragraphLength) {
      var text = $(this).text().substring(0, paragraphLength);
      $(this).text(text + '...');
    }
  })

  // Smooth scroll
  $('a').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });
})
