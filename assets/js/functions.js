$( document ).ready(function() {

  smoothScroll(1000);
  workBelt();
  workLoad();
});

function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function(event) {


        var target = $($(this).attr('href'));
        if ( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

function workBelt() {
    //TODO: This totally isnt how it is supposed to go.....

    $('.thumb-unit').click(function(){
        $('.work-belt').css('left', '-100%');
        $('.work-container').show('800ms');
        $('.thumb-container').css('padding-right', '20px');
    });
    $('.work-return').click(function(){
        $('.thumb-container').css('padding-right', '0px');
        $('.work-belt').css('left', '0%');
        $('.work-container').hide('800ms');

    });
}

function workLoad() {
    $.ajaxSetup({cache: false});
    $('.thumb-unit').click(function()   {
        var $this = $(this),
            newTitle = $this.find('string').text(),
            newFolder = $this.data('folder'),
            spinner = "<div class=\"loader\">Loading....</div>",
            newHTML = "/assets/work/" + newFolder + "/" + newFolder + ".html" ;

        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);

    });
}