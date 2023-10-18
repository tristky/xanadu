<template>
    <div class = "products">
    <img class="productimage" src="@/assets/products page.png"> <br> <br>
    <RouterLink to ="AddProduct"> Add Product </RouterLink>
    <div v-for="product in products" class="productlist">
        <div class="productcard">
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