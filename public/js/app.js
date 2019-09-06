

 $(document).ready(function () {


//show username on screen
$.get("/profile")
.then(function (response) {
    // console.log(response);
    // const username = req.session.username
    // alert("Welcome " + username + "!");
    loggedIn();
});

// $.get("/", login)
// .then(function(response) {
//     console.log("Tasks: " + response);
    
// });


function loggedIn(user) {
    username = user || "";

    if (username) {
      username = "/?username=" + username;
    }
    $.get(`/api/user/${username}`, function(data) {
      console.log("User", data);
      login = data;
      if (!login || !login.length) {
        displayEmpty(user);
      }
      else {
        // initializeRows();
        // alert("TRY AGAIN!")
        for (let i = 0; i < data.length; i++) {
            if (i === $("#username").val()) {
                const showUsername = $("<h3>");
                showUsername.text("Welcome " + data[i].fullname + "!");
                $("#user").append(showUsername);
            }
            else {
                console.log("404 (NOT FOUND) ERROR");
                
            }
        }

     }
    });
  }


  $("#submit").on("click", function (event) {

    let showUser = {};
    showUser.username = $("#username").val().trim();

    $.get("/api/user/", showUser)
    .then(function (response) {
        console.log("Show user: " + response);
        // alert("Challenge Created!");

    });


  });

//show task created by user 
//total task created
//total task completed
//total task pending
//total fl-points
//their image

 });
