/// <reference path="angular.js" />

var app = angular.module("myapp", []);

app.controller("StoreController", function() {
    this.products = [
        {
            name: 'Awesome Multi-touch Keyboard',
            price: 250.00,
            description: "......",
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author:"ruchir@gmail.com"
                },
                {
                    stars: 3,
                    body: "I love this",
                    author: "raj@gmail.com"
                }
            ]
        },
         {
             name: 'Awesome Multi-touch Mobile',
             price: 5750.00,
             description: "......",
             reviews: [
                 {
                     stars: 2,
                     body: "I love this product",
                     author: "ruchir@gmail.com"
                 },
                 {
                     stars: 9,
                     body: "I love this",
                     author: "raj@gmail.com"
                 }
             ]
         }
    ];
});

app.controller("ReviewController", function() {
    this.review = {};
    this.addReview=function(product) {
        product.reviews.push(this.review);
        this.review = {};
    };

});