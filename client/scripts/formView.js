var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log('click!');

    var value = $('#message').val();
    console.log(value);

    var message = {username: App.username, text: value};

    Parse.create(message, function() {
      console.log('success!!');
    }, function() {
      console.log('whomp whomp');
    });

    /*
    2. use the Parse.create POST method
    3.Consider what goes into the successCB callback

      create: function(message, successCB, errorCB = null) {
    */
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};