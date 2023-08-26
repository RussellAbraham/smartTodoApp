// Client-facing scripts here
$(document).ready(function () {

  // Initialize a variable to store the selected item during drag and drop
  let selected = null;

  // Function to handle drag over event during drag and drop
  function dragOver(event) {
    event.preventDefault();

    // Check if the selected item is before or after the target item
    if (isBefore(selected, event.target)) {
      $(event.target).before(selected);
    } else {
      $(event.target).after(selected);
    }

    console.log("over");
  }

  // Function to handle drag end event
  function dragEnd() {
    if (selected) {
      const itemId = $(selected).data("item-id");
      const newCategoryId = $(selected).closest(".list-group").attr("id");

      // Send AJAX request to update the item's category
      $.ajax({
        type: "POST",
        url: `/items/${itemId}/category`,
        data: {
          itemId: itemId,
          newCategoryId: newCategoryId
        }
      })
      .done(function (response) {
        console.log(response);
      })
      .fail(function () {
        console.error('failed');
      });
    }

    // Reset the selected item
    selected = null;
    console.log("end");
  }

  // Function to handle drag start event
  function dragStart(event) {
    selected = event.target;
    console.log("start");
  }

  // Function to check if el1 is before el2 in the DOM
  function isBefore(el1, el2) {
    if ($(el2).prev()[0] === el1) {
      return true;
    }
    return false;
  }

  // Attach drag and drop event listeners to draggable items
  $(".draggable-item").on({
    dragend: dragEnd,
    dragstart: dragStart
  });

  // Attach drag over event listener to list groups
  $(".list-group").on("dragover", dragOver);

  // Handle checkbox click using event delegation
  $(document).on('click', 'input.form-check-input.me-2', function (event) {
    const listItem = $(event.currentTarget).closest('.list-group-item');
    const checked = event.currentTarget.checked;
    const itemId = listItem.data('item-id');

    // Send AJAX request to update item's checked status
    $.ajax({
      type: 'POST',
      url: `/items/${itemId}/checked`,
      data: { checked: checked, itemId: itemId }
    })
    .done(function (response) {
      console.log(response);

      // Toggle the text decoration class based on checked status
      listItem.toggleClass('text-decoration-line-through', checked);
    })
    .fail(function () {
      console.error('failed');
    });
  });
});
