var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- Messages.username %></div>
        <div class="text"><%- Messages.text %></div>
        <div class="roomname"><%- Messages.roomname %></div>
      </div>
    `)

};

// var Messages = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };