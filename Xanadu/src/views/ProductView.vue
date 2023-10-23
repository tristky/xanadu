<template>
    <div class="product-view-container">
        <!-- Product Image -->
        <img :src="product.pictures" alt="Product Image" class="product-view-image">

        <!-- Product Title -->
        <h2 class="product-title">{{ product.title }}</h2>

        <!-- Product Description -->
        <p class="product-description">{{ product.desc }}</p>

        <!-- Product Short Description -->
        <p class="product-short-description">{{ product.shortdesc }}</p>

        <!-- Product Shipping Information -->
        <p class="product-shipping">Shipping: {{ product.shipping }}</p>

        <!-- Product Dimensions -->
        <p class="product-dimensions">Dimensions: {{ product.dimensions }}</p>

        <!-- Quantity Selector and Buy Button -->
        <div class="purchase-section">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" v-model="quantity" min="1">

            <button @click="buyProduct">Buy</button>
        </div>
    </div>
</template>

<script>
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const db = getFirestore();

export default {
    data() {
        return {
            product: {},
            quantity: 1
        };
    },
    async mounted() {
        const productId = this.$route.params.id; // Assuming you passed the product ID as a route parameter named 'id'
        const productDoc = await getDoc(doc(db, 'Eco-Entrepreneur', 'yourUsername', 'Products', productId));
        if (productDoc.exists()) {
            this.product = {
                id: productDoc.id,
                title: productDoc.data().title,
                pictures: productDoc.data().pictures,
                desc: productDoc.data().desc,
                shortdesc: productDoc.data().shortdesc,
                shipping: productDoc.data().shipping,
                dimensions: productDoc.data().dimensions
            };  
            console.log(this.product);
        } else {
            console.error("No such product!");
        }
    },
    methods: {
        buyProduct() {
            // Your logic to process the purchase.
            console.log(`Purchased ${this.quantity} of ${this.product.title}`);
        }
    }
}
</script>

<style>
.product-view-container {
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 50px;
}

.product-view-image {
    width: 100%;
    max-width: 400px; /* Adjust this value */
    display: block;
    margin: 20px auto;
}

.product-title {
    font-size: 24px;
    margin: 20px 0;
}

.product-description {
    font-size: 16px;
    margin: 20px 0;
}

.product-short-description {
    font-size: 16px;
    margin: 20px 0;
}

.product-shipping {
    font-size: 16px;
    margin: 20px 0;
}

.product-dimensions {
    font-size: 16px;
    margin: 20px 0;
}

.purchase-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.purchase-section input {
    width: 50px;
    padding: 5px;
}
</style>