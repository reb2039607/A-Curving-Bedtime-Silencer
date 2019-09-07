$(document).ready(function () {

    const challenge = $(".challenge");
    let tasks;


$.get("/")
.then(function(response) {

    display();
});





function display(author) {
    console.log("Author: " + author);
    
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/task" + authorId, function(data) {
      console.log("Task", data);
      tasks = data;
      if (!tasks || !tasks.length) {
        displayEmpty(author);
      }
      else {
        initializeRows();
      }
    });
}

function initializeRows() {
    challenge.empty();
    const taskToAdd = [];
    for (let i = 0; i < tasks.length; i++) {
      taskToAdd.push(createNewRow(tasks[i]));
    }
    challenge.append(taskToAdd);
  }

  function createNewRow(post) {

    //Creating the divs for each part of the Challenge card
    const taskCardcol=$("<div>");
    taskCardcol.addClass("col-md-4 col-sm-6");
    const newPostCard = $("<div>");
    newPostCard.addClass("card");
    const newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    const newPostTitle = $("<h2>");
    const newStartDate = $("<small>");
    const newPostAuthor = $("<h5>");
    const newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    const newPostBody = $("<p>");
    const newPostDate = $("<p>");
    const newSkillsRequired = $("<p>");
    const newSkillLevel = $("<p>");
    const newFLPoints = $("<p>");
    const newTaskStatus = $("<p>"); 

    const acceptBtn = $("<button>");
    acceptBtn.addClass("btn btn-primary");
    acceptBtn.attr("id", "accept"+post.id);
    acceptBtn.attr("value", post.id);
    const start = post.startdate;
    const end = post.enddate;
    acceptBtn.attr("onClick", "acceptTask("+post.id, post.userid, start, end+")");

    // console.log("Task Id: " + post.id);
    
    //Placing info inside each div
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.description);
    newStartDate.text(post.createdAt);
    newPostAuthor.text(`Posted by ${post.userid}`);
    newSkillsRequired.text(`Main Skill Needed: ${post.skillsrequired}`);
    newSkillLevel.text(`Level ${post.skilllevel}`);
    newFLPoints.text(`FL Points: ${post.rewardpoints}`);
    newTaskStatus.text(`Current Status is ${post.taskstatus}`);
    newPostDate.append(newStartDate);
    acceptBtn.text("Accept Challenge");

    //Placing title and User inside the Header
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostAuthor);

    //Placing date, description, and other info into the card body
    newPostCardBody.append(newPostBody);
    newPostCardBody.append(newSkillLevel);
    newPostCardBody.append(newSkillsRequired);
    newPostCardBody.append(newTaskStatus);
    newPostCardBody.append(newFLPoints);
    newPostCardBody.append(newPostDate);
    newPostCardBody.append(acceptBtn);

    //Placing the Card Header and Card Body into the actual Card
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    taskCardcol.append(newPostCard);

    return taskCardcol;


  }



});









