var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    this.render();
  },

  render: function () {
    Parse.readAll((data) => {
      for (var i = 0; i < data.results.length; i++) {

        this.renderMessage(data.results[i]);
      }
    });
  },

  renderMessage: function (message) {
    if (message.text !== undefined && message.text.length !== 0) {
      var html = `<div id="message" class="${message.username}">`;

      html += `<b>${message.username}</b>: ${message.text}`;
      html += "</div>"

      this.$chats.append(html);
    }
  }

};