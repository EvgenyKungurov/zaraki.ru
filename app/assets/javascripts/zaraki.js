$(document).on('turbolinks:load', function() {
  $('#edit_mode').click(function() {
    check_edit_mode();
    show_hide_links();
  });
});

function check_edit_mode() {
  if ($('#edit_mode').attr('checked') && document.cookie.match('edit_mode=true')) {
    disable_edit_mode();
  }
  else {
    enable_edit_mode();
  }
}

function disable_edit_mode() {
  document.cookie = 'edit_mode' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'edit_mode = false; path: /';
}

function enable_edit_mode() {
  document.cookie = 'edit_mode' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'edit_mode = true; path: /';
}

function show_hide_links() {
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
}
