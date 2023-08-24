// Client facing scripts here

$(document).ready(function () {
  $("#todoForm").submit(function (event) {
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "/items",
      data: $(this).serialize(),
      success: function (response) {
        console.log("success");
        $("#todoForm")[0].reset();
        const categoryUL = $("#" + response.category_id);
        const newItemHTML = `<li class="list-group-item">${response.description}</li>`;
        categoryUL.append(newItemHTML);
      },
      error: function () {
        console.error("failed");
      },
    }).then((response) => {
      console.log(response);
    });
  });

  /* Draggable js function */

  // let selected = null;

  // function dragOver(event) {
  //   if (isBefore(selected, event.target)) {
  //     event.target.parentNode.insertBefore(selected, event.target);
  //   } else {
  //     event.target.parentNode.insertBefore(selected, event.target.nextSibling);
  //   }
  //   console.log("over");
  // }

  // function dragEnd() {
  //   selected = null;
  //   console.log("end");
  // }

  // function dragStart(event) {
  //   // event.dataTransfer.effectAllowed = "move";
  //   // event.dataTransfer.setData("text/plain", null);
  //   // selected = event.target;
  //   document.cookie = `targetCategoryId = ${targetCategoryId}; path =/`;
  //   console.log("start");
  // }

  // function isBefore(el1, el2) {
  //   let cur;
  //   if (el2.parentNode === el1.parentNode) {
  //     for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
  //       if (cur === el2) return true;
  //     }
  //   }
  //   return false;
  // }

  // function listen(element, events) {
  //   for (let event in events) {
  //     element.addEventListener(event, events[event]);
  //   }
  // }

  // document.addEventListener("DOMContentLoaded", function () {
  //   const draggableItems = document.querySelectorAll(".draggable-item");
  //   draggableItems.forEach(function (item) {
  //     listen(item, {
  //       dragend: dragEnd,
  //       //'dragover': dragOver,
  //       dragstart: dragStart,
  //     });
  //   });
  //   const dropTargets = document.querySelectorAll(".list-group");
  //   dropTargets.forEach(function (target) {
  //     listen(target, {
  //       dragover: dragOver,
  //     });
  //   });
  // });
});
