import './main.scss'

import $ from 'jquery';

$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',   method: 'GET',
  dataType: 'json',
  success: function(response) {
    // Clear previous content in the restApi div
    $('#restApi').empty();

    // Create a row wrapper for cards
    var row = $('<div class="row"></div>');

    // Loop through each JSON object and create Bootstrap cards
    $.each(response, function(index, post) {
      var cardHtml = `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div class="card apiCard">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
            </div>
          </div>
        </div>
      `;
      // Append each card to the row
      row.append(cardHtml);

      // Add the row to the restApi div for every 4 cards
      if ((index + 1) % 4 === 0 || index === response.length - 1) {
        $('#restApi').append(row);
        row = $('<div class="row"></div>'); // Create a new row for the next set of cards
      }
    });
  },
  error: function(xhr, status, error) {
    // Handle errors
    console.error('Error fetching data', error);
  }
})

// to-do Dynamics
function setupList() {
  function addTask() {
      var taskText = $("#taskInput").val();
      if (taskText.trim() !== "") {
          var listItem = $("<li>").text(taskText);
          $("#taskList").append(listItem);
          $("#taskInput").val("");
          attachTaskClickEvent(listItem);
          saveTasksToSession(); // Save tasks to session storage
      }
  }

  function toggleTaskStatus() {
      $(this).toggleClass("completed");
      saveTasksToSession(); // Save tasks to session storage when task status is toggled
  }

  function attachTaskClickEvent(task) {
      task.on("click", toggleTaskStatus);
  }

  function saveTasksToSession() {
      var tasks = $("#taskList").html();
      sessionStorage.setItem("tasks", tasks);
  }

  // Restore tasks from session storage on page load
  function restoreTasksFromSession() {
      var tasks = sessionStorage.getItem("tasks");
      if (tasks) {
          $("#taskList").html(tasks);
          // Attach click event to restored tasks
          $("#taskList li").each(function () {
              attachTaskClickEvent($(this));
          });
      }
  }

  $("#addTask").on("click", addTask);

  $("#taskInput").keypress(function (e) {
      if (e.which === 13) {
          addTask();
      }
  });
  function eraseAllTasks ()  {
    $('#eraseAll').on('click', () =>{
    $("#taskList").empty(); // Remove all tasks from the list
    sessionStorage.removeItem("tasks");
    }) // Clear tasks from session storage
};

  // Attach click event to existing tasks
  eraseAllTasks()
  restoreTasksFromSession();}
setupList()