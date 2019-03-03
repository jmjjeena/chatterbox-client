var Friends = {

    $userName: $('#message b'),

    initialize: function () {
        this.userName.on('click', function () {
            console.log("Hello");
        });
    },

    friendsList: {},

    toggleStatus: function (friend) {
        return true;
    }



};