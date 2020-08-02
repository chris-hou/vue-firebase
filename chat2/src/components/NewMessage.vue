<template>
  <div class="new-messsage">
    <form @submit.prevent="addMessage">
      <label for="message">New Message</label>
      <input name="message" type="text" v-model="message" />
      <p v-if="feedback" class="red-text">{{feedback}}</p>
    </form>
  </div>
</template>
<script>
import db from "@/firebase/init.js";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      message: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.message) {
        db.collection("messages")
          .add({
            content: this.message,
            name: this.name,
            timestamp: Date.now(),
          })
          .then(() => {
            this.message = null;
          });
      } else {
        this.feedback = "Enter the message to send";
      }
    },
  },
};
</script>