var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    this.$button.on("click", function () {
      Rooms.add();
    });
    this.$select.on('change', function () {
      console.log('changed');
      // MessagesView.render(data.results.roomname)
      // console.log(data);
      App.fetch(function (data) {
        console.log(data);
      });
    });
  },

  render: function (data) {

    for (var i = 0; i < data.results.length; i++) {
      var currentRoom = data.results[i].roomname;

      if (!Rooms.roomsStorage.hasOwnProperty(currentRoom) && currentRoom !== undefined && currentRoom !== null) {
        Rooms.roomsStorage[currentRoom] = currentRoom;
        this.renderRoom(currentRoom);
      }
    }

  },

  renderRoom: function (room) {
    var html = "<option>";
    html += (room + '</option>');
    this.$select.append(html);
  }
};
