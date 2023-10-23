<template>
    <div class="add-reply-container">
        <h2 class="reply-title">Add Reply</h2>
        <textarea class="reply-textarea" v-model="content" placeholder="Write your reply..."></textarea>
        <button class="submit-button" @click="submitReply">Submit</button>
    </div>
</template>


<script>
import firebase from '@/Config/firebaseConfig.js';

export default {
    data() {
        return {
            content: ''
        };
    },
    methods: {
        submitReply() {
            if (this.content.trim()) {
                const db = firebase.firestore();
                // Assuming replies are stored in a sub-collection of threads
                db.collection('threads').doc(this.$route.params.id).collection('replies').add({
                    content: this.content,
                    timestamp: new Date() 
                })
                .then(() => {
                    this.$router.go(-1); // Redirects user back to the previous page after adding the reply
                })
                .catch(error => {
                    console.error("Error adding reply: ", error);
                });
            } else {
                alert("Reply content cannot be empty.");
            }
        }
    }
}
</script>

<style scoped>
.add-reply-container {
    background-color: #738678; /* Xanadu color */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the child elements */
}

h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: white;
    font-weight: bold;
    text-align: center;
}

textarea {
    width: 90%; /* Reduce width for some padding effect */
    padding: 12px;
    border: 2px solid #5a605c; 
    border-radius: 7px;
    font-size: 16px;
    color: #333;
    background-color: #e8e9e7;
    transition: border-color 0.3s ease;
    height: 100px; 
    margin-bottom: 20px;
}

textarea:focus {
    outline: none;
    border-color: #454f4b;
}

button {
    padding: 10px 20px;
    font-size: 18px;
    color: #738678; /* Xanadu color */
    background-color: white;
    border: 2px solid #738678;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #e8e9e7;
    color: #454f4b;
}

</style>