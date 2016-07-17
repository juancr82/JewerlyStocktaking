var source   = $("#main-page-template").html();
var template = Handlebars.compile(source);

var sourceProducts   = $("#products-template").html();
var templateProducts = Handlebars.compile(sourceProducts);

var data = {
    jewerly: {
        title: "Jewerly Stocktaking",
        products_list: "List of products"
    },
    body: "This is my first post!",
    story: {
        intro: "Before the jump",
        body: "After the jump"
    },
    people: [
        {firstName: "Yehuda", lastName: "Katz"},
        {firstName: "Carl", lastName: "Lerche"},
        {firstName: "Alan", lastName: "Johnson"}
    ],
    comments: [
        {subject: "First Comment", body: "First Body"},
        {subject: "Second Comment", body: "Second Body"},
        {subject: "Third Comment", body: "Third Body"}
    ],
    nav: [
        { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
        { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" },
    ],
    isActive: false
};
$('#header').html(template(data));
$('.main-products-container').html(templateProducts(data));