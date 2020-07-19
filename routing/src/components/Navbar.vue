<template>
    <div class="main-nav">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link :to="{name: 'About'}">About</router-link></li>
        </ul>
        <h2>User Profile</h2>
        <div>
            <ul>
                <li v-for="(id, index) in userIds" :key="index">
                    <router-link :to="{name: 'VueProfile', params: { user_id: id }}">
                        <span>Profile {{id}}</span>        
                    </router-link>
                </li>
            </ul>
        </div>
        <h2>Redirect Control</h2>
        <ul>
            <li><button @click="goHome">Go Home</button></li>
            <li><button @click="goBack">Go Back</button></li>
            <li><button @click="goForward">Go Forward</button></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            userIds: ['1', '2', '3', '4', '5']

        }
    },
    methods: {
        goHome() {
            this.$router.push({name: 'Home'})
        },
        goBack() {
            this.$router.go(-1 )
        },
        goForward() {
            this.$router.go(1 )
        }
    }
}
</script>
<style>
ul {
    list-style-type: none;
    padding: 0;
}
a {
    color: #42b983;
}

li {
    display: inline-block;
    margin: 10px;
}

a.router-link-exact-active {
    color: purple;
}

</style>