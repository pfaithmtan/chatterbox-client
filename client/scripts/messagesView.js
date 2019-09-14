var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      for (let i = 0; i < data.results.length; i++) {
        var rendered = MessageView.render(data.results[i]);

        MessagesView.$chats.append(rendered);
      }
    });


  },

  // Parse.readAll((data) => {
  //   // examine the response from the server request:
  //   console.log(data);

  //   callback();
  // });


  render: function() {
  },

  renderMessage: function(message) {
    var $message = $('<div class="message"></div>');
    $message.append(`<div class="username"> ${message.username} </div>`);
    $message.append(`<div class="text"> ${message.text} </div>`);
    $message.append(`<div class="roomname"> ${message.roomname} </div>`);
    $( "#chats" ).append($message);
  }


};

// it('should be able to add messages to the DOM', function() {
//   var message = {
//     username: 'Mel Brooks',
//     text: 'Never underestimate the power of the Schwartz!',
//     roomname: 'lobby'
//   };
//   MessagesView.renderMessage(message);
//   expect($('#chats').children().length).to.equal(1);
// });

