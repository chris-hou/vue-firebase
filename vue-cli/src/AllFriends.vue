<template>
    <div id="all-friends">
        <h2>All Friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span @click="changeState(friend.name)">{{friend.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AllFriends',
    props: ['friends'],
    data() {
        return {
            

        }
    },
    methods: {
        changeState(AName) {
            return this.$emit('changeState', {AName})
        }
    }
}
</script>