// Client facing scripts here

$(document).ready(function () {

  $('#todoForm').submit(function (event){
    event.preventDefault();
    $.ajax({
      type : 'POST',
      url : '/items',
      data : $(this).serialize(),
      success : function(response){
        console.log('success');
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

});
