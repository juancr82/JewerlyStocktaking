window.ProductOne = Backbone.View.extend({

    initialize: function () {
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    }

});