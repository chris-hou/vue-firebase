<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (enter to add):</label>
      <input type="text" name="new-message" v-model="LNewMessage" />
      <p class="red-text" v-if="feedback">{{feedback}}</p>
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
      LNewMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.LNewMessage) {
        db.collection("message")
          .add({
            content: this.LNewMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .then(() => {
            this.LNewMessage = null;
          });
      } else {
        this.feedback = "Enter message to send";
      }
      // console.log(this.LNewMessage, this.name, Date.now())
    },
  },
};
</script>