var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<p> ${room} </p>`);
  }

};

// RoomsView.renderRoom('superLobby');
// expect($('#rooms select').children().length).to.equal(1);

// renderMessage: function(message) {
//   $( "#chats" ).append(`<p> ${message} </p>`);
// }