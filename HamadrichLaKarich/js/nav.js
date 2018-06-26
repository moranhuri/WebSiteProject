$.fn.accessibleDropDown = function () {
  var el = $(this);

  $('a', el).focus(function() {
    $(this).parents('li').addClass('menu-open');
  }).blur(function() {
    $(this).parents('li').removeClass('menu-open');
  });
}

$(".nav-menu").accessibleDropDown();