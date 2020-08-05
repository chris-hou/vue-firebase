<template>
  <nav>
    <div class="nav-wrapper indigo darken-2">
      <router-link :to="{name:'Index'}">
        <span class="brand-logo">Ninja Smoothies</span>
      </router-link>
      <a href class="btn-floating btn-large btn halfway-fab pink">
        <router-link :to="{name:'AddSmoothie'}">
          <i class="material-icons">add</i>
        </router-link>
      </a>
    </div>
  </nav>
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
.navbar-wrapper {
  padding: 0px 20px;
}
</style>