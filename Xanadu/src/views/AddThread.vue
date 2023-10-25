<template>
    <div class="adding">
        <Toast ref="toast" position="top-right" />
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
import { ref } from 'vue';
import Toast from 'primevue/toast';
import { getFirestore, addDoc, collection } from "firebase/firestore";

export default {
    components: {
        'Toast': Toast
    },
    data() {
        return {
            threadTitle: '',
            threadContent: '',
            db: null,  // Added this property to cache the Firestore instance
            toast: ref(null)
        };
    },
    created() {
        this.db = getFirestore();  // Initialize Firestore instance on component creation
    },
    methods: {
        async addThread() {
            try {
                const thread = {
                    title: this.threadTitle,
                    content: this.threadContent,
                    timestamp: new Date()
                };
                await addDoc(collection(this.db, 'threads'), thread);
                this.$refs.toast.add({ severity: 'success', summary: 'Success', detail: 'Thread added successfully!', life: 3000 });
                this.$router.push('/forum');
            } catch (error) {
                console.error("Error adding thread: ", error);
                this.$refs.toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to add the thread!', life: 3000 });
            }
        }
    }
}
</script>

<style scoped>
.adding {
    margin-top: 50px;
}

.adding .description {
    width: 100%;
    min-height: 100px;
    padding: 10px;
    margin-block: 10px;
}

.adding .title {
    width: 100%;
    padding: 8px;
    margin-block: 10px;
}
</style>