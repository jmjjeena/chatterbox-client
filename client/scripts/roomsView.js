var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: function () {
  },

  renderRoom: function (room) {
    var html = "<div>";
    html += (room + '</div>');
    this.$select.append(html);

  }
};
