function main() {

    var location    = rbtrackingLocation();
    var product     = rbtrackingProductInfo();
    var cart        = rbtrackingCart();
    var searchsite  = rbtrackingSearch();

    if (location.x = "homepage") {
        console.log("homepage");
    }

    if (location.x = "productpage") {
        console.log(product.name);
        console.log(product.price);
    }

    if (location.x = "shoppingcart") {
        console.log(cart.count);
        console.log(cart.avp);
    }

    if (location.x = "search") {
        console.log(searchsite.term);
        $(function () {
            $('button[type=button]').click(function () {
                console.log("added to cart + ") // event.object.name
            });
        });

    }



    function rbtrackingLocation() {
        var x = null;
        if (utag_data["page_type"] = "home page") {
            x = "homepage"
        } else if (utag_data["page_type"] = "product information page") {
            x = "productpage"
        } else if (utag_data["site_level_1"] = "shoppingcart") {
            x = "shoppingcart";
        } else if (utag_data["site_level_1"] = "search") {
            x = "search";
        }

        return x;
    }
    function rbtrackingProductInfo() {
        var name    = null;
        var price   = new number;

        if (utag_data["product_names"] != null) {
            name = utag_data["product_names"];
        }
        if (utag_data["price"] != null) {
            price = utag_data["price"];
        }
        return name, price;
    }
    function rbtrackingCart() {
        var count       = 0;
        var plist       = new element(document.getElementsByClassName("product__total"));
        var pricetotal  = new number;
        var avp         = new number;

        plist.forEach(element => {
            pricetotal = pricetotal + element.outerText;
            count = count + 1;
        });
        avp = pricetotal / count;
        return count, avp;
    }

    function rbtrackingSearch() {
        var term = window.location.search;


        return term;
    }
}