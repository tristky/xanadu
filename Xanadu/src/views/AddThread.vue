<template>
    <div class="adding">
        <form @submit.prevent="addThread">
            <div class="title">
            <input v-model="threadTitle" placeholder="Thread Title" type="text" required />
            </div>

            <div class="description">
            <textarea v-model="threadContent" placeholder="Write your thread here..." required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import firebase from '@/Config/firebaseConfig.js';

export default {
    data() {
        return {
            threadTitle: '',      // Added thread title data property
            threadContent: ''
        };
    },
    methods: {
        addThread() {
            const db = firebase.firestore();
            db.collection('threads').add({
                title: this.threadTitle,  // Save thread title to database
                content: this.threadContent,
                timestamp: new Date() 
            }).then(() => {
                this.$router.push('/ForumView');
            });
        }

        
    }
}
</script>

<style scoped>

.adding{
    margin-top: 50px;
}

.adding .description{
    width: 100%;
    min-height: 100px;
    padding: 10px;
    margin-block: 10px;
}

.adding .title{
    width: 100%;
    padding: 8px;
    margin-block: 10px;
}
</style>