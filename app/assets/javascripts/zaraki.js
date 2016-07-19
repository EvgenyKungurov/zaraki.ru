$(document).on('turbolinks:load', function() {
  $('#edit_mode').click(function() {
    if ($('#edit_mode').attr('checked')) {
      document.cookie = 'edit_mode = false; path: /';
    }
    else {
      document.cookie = 'edit_mode = true; path: /';
    }

    if (document.cookie.match('edit_mode = true')) {
      location.reload();
      $('a:contains("Edit")').show();
      $('a:contains("Destroy")').show();
    }
    else {
      location.reload();
      $('a:contains("Edit")').hide();
      $('a:contains("Destroy")').hide();
    }
  });
});
