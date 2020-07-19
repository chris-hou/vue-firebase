<template>
    <div class="vue-profile">
        <h2>Vue Profile for {{userId}}</h2>
    </div>
</template>
<script>
// Test: http://localhost:8080/#/profile/999
export default {
    name: 'VueProfile',
    data() {
        return {
            UserId: this.$route.params.user_id
        }
    },
    methods: {
        updateId() {
            this.UserId = this.$route.params.user_id
        }
    },
    watch: {
        $route: 'updateId'
    },
    computed: {
        userId: function() {
            return  this.$route.params.user_id
        }
    }

}
</script>