  // Submit form using AJAX
  /*
  $('#todoForm').submit(function (event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/items',
      data: $(this).serialize()
    })
    .done(function (response) {
      // Reset form and add new item
      $('#todoForm')[0].reset();
      const categoryUL = $('#' + response.category_id);
      const newItemHTML = `
        <li class="list-group-item draggable-item ${response.checked}" data-item-id="${response.id}">
          <input class="form-check-input me-2" type="checkbox" value="${response.id}" />
          ${response.description}
        </li>`;
      categoryUL.append(newItemHTML);
    })
    .fail(function () {
      console.error('failed');
    });
  });
  */
