<template>
    <div class="products">
        <img class="productimage" src="@/assets/products page.png"> <br> <br>
        <RouterLink to="AddProduct"> Add Product </RouterLink>
        
        <!-- Product List Wrapper -->
        <div class="productlist">
            <div v-for="product in products" :key="product.title" class="productcard">
                <!-- Add RouterLink for the image -->
                <RouterLink :to="'/product/' + product.id">
                    <img :src="product.picture" alt="Product Image" class="product-card-image">
                </RouterLink>
                <p>{{product.title}}</p>
            </div>
        </div>
    </div>
</template>


<style>
.productimage {
    width: 100%;
    flex-shrink: 0;
}

.products {
    display: block;
}

.product-link-wrapper {
    display: block;
    text-decoration: none;  /* Removes underline from the link */
    color: inherit; /* Takes the color from its parent */
}

.product-inner-card {
    border: 2px solid #748C70; /* Green border around the product */
    padding: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Adds a slight shadow for better visual separation */
}

.product-card-image {
    width: 100%; 
    height: auto;
    display: block;
    margin: 0 auto; /* Centers the image */
    margin-bottom: 10px; 
}

.products a {
    background-color: #748C70;
    color: white;
    display: block;
    width: 250px;
    height: 20px;
    padding: 16px;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;
    margin: auto;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 22.4px */
    text-transform: capitalize;
}

.productlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* This will ensure there's space between the products */
}

/* Each product card */
.productcard {
    flex-basis: calc(33.33% - 10px); /* Taking 1/3 of the space minus a small margin */
    margin-bottom: 20px; /* Adjust this margin as per your requirement */
    box-sizing: border-box;
    padding: 5px; /* padding to give space inside each card */
}

.product-card-image {
    width: 100%; /* Adjust this value to fit your design */
    height: auto;
    margin-bottom: 10px; /* Space between the image and the title */
}

</style>

<script>
import firebaseApp from "@/firebase.js";
import { RouterLink } from 'vue-router';
import { getFirestore, setDoc, getDocs, doc, deleteDoc, getDoc, onSnapshot, collection} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable, getStorage } from "firebase/storage";

const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            username: "testuser",
            products: []
        }
    },
    async mounted() {
        const fbproducts = []
        let alldocs = await getDocs(collection(db,'Eco-Entrepreneur',this.username,'Products'))
        console.log(alldocs)
        alldocs.forEach((doc)=> {
            const product ={
                id: doc.id,  // Include the document's id
                title : doc.data().title,
                picture : doc.data().pictures
            }
            fbproducts.push(product)
            console.log(product)
        })
        this.products = fbproducts
        console.log(this.products)
    }
}
</script>