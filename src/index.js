document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  // Handle form submission to add a new task
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get task details from form inputs
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-date").value;

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskDescription} (Due: ${dueDate})`;

    // Set task color based on priority
    if (priority === "high") {
      taskItem.style.color = "red";
    } else if (priority === "medium") {
      taskItem.style.color = "yellow";
    } else {
      taskItem.style.color = "green";
    }

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    // Append task to the list
    taskItem.appendChild(deleteButton);
    tasksList.appendChild(taskItem);

    // Clear the form after submission
    form.reset();
  });
});
