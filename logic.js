var config = {
    apiKey: "AIzaSyDvgtNpEOhQhB5guOnMy_sBFcQK5AbSCFc",
    authDomain: "train-table-95a8a.firebaseapp.com",
    databaseURL: "https://train-table-95a8a.firebaseio.com",
    projectId: "train-table-95a8a",
    storageBucket: "train-table-95a8a.appspot.com"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var Name = $("#train-name-input").val().trim();
    var Destination = $("#destination-input").val().trim();
    var firstTime = $("#start-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var train = {
      name: Name,
      destination: Destination,
      time: firstTime,
      frequency: frequency
    };
  
    // Uploads employee data to the database
    database.ref().push(train);
  
    // Logs everything to console
    console.log(train.name);
    console.log(train.destination);
    console.log(train.time);
    console.log(train.frequency);
  
    alert("train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destinations-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var Name = childSnapshot.val().name;
    var Destination = childSnapshot.val().destination;
    var firstTime = childSnapshot.val().time;
    var frequency = childSnapshot.val().frequency;
  
    // Employee Info
    console.log(Name);
    console.log(Destination);
    console.log(firstTime);
    console.log(frequency);
  
    
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(Name),
      $("<td>").text(Destination),
      $("<td>").text(firstTime),
      $("<td>").text(frequency),
    );
  
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
  });
  
 
  