<template>
  <div class="calendar container">
    <div class="card">
      <div class="card-content">
        <v-calendar></v-calendar>
      </div>
    </div>
  </div>
</template>
<script>
import VCalendar from "v-calendar";
// import "v-calendar/lib/v-calendar.min.css";

// Vue.use(VCalendar);

export default {
  name: "Calendar",
  components: {
    VCalendar,
  },
};
</script>