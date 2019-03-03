var MessagesView = {

  $chats: $('#chats'),
  $select: $('#rooms select'),


  initialize: function () {

  },

  render: function (data) {
    var defaultRoom = this.$select.val();
    for (var i = 0; i < data.results.length; i++) {
      // console.log(data.results[i]);
      if (data.results[i].roomname === defaultRoom) {
        this.renderMessage(data.results[i]);

      }

    }

  },

  renderMessage: function (message) {

    if (message.text !== undefined && message.username !== undefined && message.text !== null && message.text.length !== 0) {

      var html = MessageView.render(message);
      //console.log(html);
      this.$chats.append(html);
    }
  }

};