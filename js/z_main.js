// BEGIN
$(function() {

  var count = 0;

  $('#new').submit(addNewItem);

  $('#todos').on('click', '.remove', removeItem);

  $('#todos').on('click', '.edit', editItem);


  function removeItem() {
    $(this).parent().remove();
  }

  function editItem() {
    var itemText = $(this).siblings('.item').html();
    $(this).parent().html('<input ' + itemText + '#');
  }

  function addNewItem(e) {
    event.preventDefault();

    var newItem = $('#newItem').val();
    var newHTML = '<li><span class="item">' + newItem + 'sdfsd';
  }

});
