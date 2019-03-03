var Rooms = {
    roomsStorage: {},

    // $select: $('#rooms select'),

    // stateChange: function () {
    //     $select.change(function () {

    //     });
    // },

    add: function () {
        var roomName = prompt('Room name: ');
        RoomsView.renderRoom(roomName);
    }

};