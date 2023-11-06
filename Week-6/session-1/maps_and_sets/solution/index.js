const productViews = new WeakMap();
const cartItems = new WeakSet();


function incrementProductViews(product) {
    if (productViews.has(product)) {
        const value = productViews.get(product);
        productViews.set(product, value + 1); //increasing the product view by one as already product id is present
    } else {
        productViews.set(product, 1); //assigning the product view value as 1 since product id is not present in map
    }
}

function addToCart(product) {
    if (!productViews.has(product)) {
        return "Something went wrong as product doesn't viewed but adding to cart";
    }

    if (cartItems.has(product)) {
        return "Product already in cart";
    } else {
        cartItems.add(product); //inserting product to cartItems Set
        return 'Product added to cart';
    }
}

const userOneProductOne = { userId: 1, productId: 1 };
const userTwoProductOne = { userId: 2, productId: 1 };

// first case
incrementProductViews(userOneProductOne); //user 1 has viewed the product 1 for the first time
incrementProductViews(userOneProductOne); //user 1 has viewed the product 1 for the second time
console.log(addToCart(userOneProductOne)); // user 1 has added the product 1 to cart, expected output: Product added to cart
console.log(addToCart(userOneProductOne)); // user 1 tried to add product to cart which already exist, expected output: Product already in cart

// second case
console.log(addToCart(userTwoProductOne)); // user 2 is trying to add product 1 to the cart which doesn't exist, expected output: Something went wrong as product doesn't viewed but adding to cart

// below code is to verify the values as per above expectations
console.log(productViews.get(userOneProductOne)); // expected output: 2
console.log(productViews.get(userTwoProductOne)); // expected output: undefined

console.log(cartItems.has(userOneProductOne)); // expected output: true
console.log(cartItems.has(userTwoProductOne)); // expected output: false

// Note for suture reference:
// 1. Not able to iterate through weak sets
// 2. not able to know the size of weaksets