var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div class="text"><%- text %></div>
      </div>
    `)

};

// var Messages = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };