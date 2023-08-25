// Client facing scripts here

$(document).ready(function () {

  $('#todoForm').submit(function (event){
    event.preventDefault();
    $.ajax({
      type : 'POST',
      url : '/items',
      data : $(this).serialize(),
      success : function(response){
        $('#todoForm')[0].reset();
        const categoryUL = $('#' + response.category_id);
        const newItemHTML = `<li class="list-group-item">${response.description}</li>`;
        categoryUL.append(newItemHTML);
      },
      error : function(){
        console.error('failed');
      }
    }).then((response)=>{
      console.log(response);
    })
  });

  $('input.form-check-input.me-2').click(function (event, data){
    $.ajax({
      type : 'POST',
      url : `/items/${event.currentTarget.value}/checked`,
      data : { checked: event.currentTarget.checked, itemId: event.currentTarget.value},
      success : function(response){
        if (event.currentTarget.checked) {
          $(`#chk${event.currentTarget.value}`).css('textDecoration', 'line-through');
        } else {
          $(`#chk${event.currentTarget.value}`).css('textDecoration', 'none');
        }
      },
      error : function(){
        console.error('failed');
      }
    }).then((response)=>{
      console.log(response);
    })
  });

});
