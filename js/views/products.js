window.Products = Backbone.View.extend({

    template: _.template($('#products-template').html()),

    renderOne: function(product) {
        var itemView = new ProductView({model: product});
        this.$('.products-container').append(itemView.renderDos().$el);
    },

    render: function() {
        var html = this.template();
        this.$el.html(html);

        this.collection.each(this.renderOne, this);

        return this;
    }

});