window.ProductView = Backbone.View.extend({

    initialize: function () {
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    },

    renderDos: function () {
        var html = '<h1>' + this.model.get('name') + '</h1>';
		this.$el.html(html);
		return this;
    }

});