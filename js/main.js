window.Router = Backbone.Router.extend({

    routes: {
        "": "home",
        "viewProductOne": "viewProductOne",
        "viewProductTwo": "viewProductTwo",
        "viewProductThree": "viewProductThree"
    },

    initialize: function () {
        this.menuView = new MenuView();
        $('.menu').html(this.menuView.render().el);
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!this.menuView) {
            this.menuView = new HomeView();
            this.menuView.render();
        } else {
            this.menuView.delegateEvents(); // delegate events when the view is recycled
        }
        $("#content").html(this.menuView.el);
    },

    viewProductOne: function () {
        if (!this.productOne) {
            this.productOne = new ProductView();
            this.productOne.render();
        }
        $("#productInfo").html(this.productOne.el);
    },

    viewProductTwo: function () {
        var products= new ProductCollection ([
          {
            id: 1,
            name : 'Terrence S. Hatfield',
            tel: '651-603-1723',
            email: 'TerrenceSHatfield@rhyta.com'
          },
          {
            id: 2,
            name : 'Chris M. Manning',
            tel: '513-307-5859',
            email: 'ChrisMManning@dayrep.com'
          },
          {
            id: 3,
            name : 'Ricky M. Digiacomo',
            tel: '918-774-0199',
            email: 'RickyMDigiacomo@teleworm.us'
          },
          {
            id: 4,
            name : 'Michael K. Bayne',
            tel: '702-989-5145',
            email: 'MichaelKBayne@rhyta.com'
          },
          {
            id: 5,
            name : 'John I. Wilson',
            tel: '318-292-6700',
            email: 'JohnIWilson@dayrep.com'
          },
          {
            id: 6,
            name : 'Rodolfo P. Robinett',
            tel: '803-557-9815',
            email: 'RodolfoPRobinett@jourrapide.com'
          }
        ]);
        
        if (!this.productTwo) {
            var productModelOne = new Product({name: 'Paula'});
            var productModelTwo = new Product({name: 'Juan'});
            this.productTwo = new ProductView({model: productModelOne});
            this.productTwo
            this.productTwo.renderDos();
        }
        $("#productInfo").html(this.productTwo.el);
        var productCollection = new Products({
            collection: products
        });
        $('.main-products-container').html(productCollection.render().$el);
    },

    viewProductThree: function () {
        if (!this.productThree) {
            this.productThree = new ProductView();
            this.productThree.render();
        }
        $("#productInfo").html(this.productThree.el);
    }

});

templateLoader.load(["MenuView","ProductView"],
    function () {
        app = new Router();
        Backbone.history.start();
    });