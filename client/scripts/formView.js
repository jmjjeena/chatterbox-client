var FormView = {
  $chats: $('#chats'),
  $form: $('form'),


  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //if(input) {
    // let newMessage = new MessageView
    //push the newMessage to MessageView.render
    //save it to the storage 
    // reset the form
    // }
    var message = {};
    message.text = $('form #message').val();
    message.username = window.App.username

    message.roomname = $('#rooms select').val();

    Parse.create(message);
    var html = MessageView.render(message);
    console.log($('#chats'));
    $('#message').val('');
    $('#chats').prepend(html);
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};