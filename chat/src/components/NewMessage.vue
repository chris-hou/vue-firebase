<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label form="new-message">New Message (enter to add):</label>
            <input type="text" name="new-message" v-model="LNewMessage">

        </form>
    </div>
</template>
<script>
export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            LNewMessage:null
        }
    },
    methods: {
        addMessage() {
            console.log(this.LNewMessage, this.name, Date.now())
        }
    }
}
</script>