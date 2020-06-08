// const groceriesArray = []

$(document).ready(function () {
  $('#questions').submit(function (event) {
    // gather input from user through form
    event.preventDefault();
    const userInput = $('input#groceries').val();
    

    // insert user input into groceriesArray
    // groceriesArray.push(userInput);
    const groceriesArray = userInput.split(' ');

    // output groceriesArray to user
    $('.groceriesList').empty();
    groceriesArray.forEach(function(grocery) {
      $('.groceriesList').append('<li>' + 'You need ' + grocery + '</li>');
    });
  });
});