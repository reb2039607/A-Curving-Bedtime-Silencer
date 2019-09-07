$(document).ready(function() {
  $("#createTaskId").on("click", function(event) {
    event.preventDefault();
    let taskCreate = {};
    taskCreate.title = $("#title")
      .val()
      .trim();
    taskCreate.skillsrequired = $("#skillsrequired")
      .val()
      .trim();
    taskCreate.skilllevel = $("#skilllevel")
      .val()
      .trim();
    taskCreate.taskduration = $("#taskduration")
      .val()
      .trim();
    taskCreate.rewardpoints = $("#rewardpoints")
      .val()
      .trim();
    taskCreate.enddate = $("#enddate")
      .val()
      .trim();
    taskCreate.description = $("#description")
      .val()
      .trim();
    taskCreate.userid = 12;
    console.log(taskCreate);
    $.post("/api/createtasks/", taskCreate).then(function(response) {
      console.log(response);
      alert("Challenge Created!");
      $(".form-control").empty();
    });
  });
});
