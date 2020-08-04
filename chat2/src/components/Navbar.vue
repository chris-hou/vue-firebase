<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{name:'Welcome'}">
          <span class="nav-title">Chat</span>
        </router-link>
        <a href class="btn-floating btn-large btn halfway-fab pink">
          <router-link :to="{name:'Calendar'}">
            <i class="material-icons">date_range</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>
<style>
navbar nav {
  padding: 0px 20px;
}
</style>