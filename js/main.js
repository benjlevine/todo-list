var count = 0;

function addNewItem(event) {
	event.preventDefault();

	var newItem = $('#newItem').val();
	var newHTML = '<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>';

	$('#todos').append(newHTML);

	// update count
	count = count + 1;
	$('#count').html(count);

	// clear field
	$('#newItem').val('');
}

function editItem() {
	var itemText = $(this).siblings('.item').html();
	var listItem = $(this).parent();
	var newEditHTML = '<form class="editor"><input value=""></form>';

	listItem.html(newEditHTML);
	listItem.find('input').focus();
	// add value after the fact so that cursor is placed after itemText
	listItem.find('input').val(itemText);
}

function saveItem(event) {
	event.preventDefault();

	var itemText = $(this).children('input').val();
	var listItem = $(this).parent();
	var newHTML = '<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>';

	listItem.html(newHTML);
}

function removeItem() {
	$(this).parent().remove();

	//update count
	count = count - 1;
	$('#count').html(count);
}

function completeItem() {
	$(this).parent().toggleClass('done');
}

function clearList() {
	$('#todos').html('');
	count = 0;
	$('#count').html(count);
}

function clearCompleted() {
	$('#todos').children().each(function() {
		if($(this).hasClass('done')) {
			$(this).remove();
			count = count - 1;
			$('#count').html(count);
		}
	});
}

// BEGIN
$(document).ready(function(){

	// add new item
	$('#new').submit(addNewItem);
	// edit existing item
	$("#todos").on('click', '.edit', editItem);
	// save edited item
	$('#todos').on('submit', '.editor', saveItem);
	// remove existing item
	$('#todos').on('click', '.remove', removeItem);
	// strikethru completed item
	$('#todos').on('click', '.item', completeItem);
	// clear entire list
	$('#clear').click(clearList);
	// clear completed
	$('#clearCompleted').click(clearCompleted);

});
