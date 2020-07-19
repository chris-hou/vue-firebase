<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <navbar />
    <AllFriends :friends="Friends" @changeState="changeState" />
    <OnlineFriends :friends="Friends" />
    <Blog></Blog>
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blog from './Blogs'


export default {
  name: 'app',

  components: {
    navbar: Navbar,
    AllFriends,
    OnlineFriends,
    Blog
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Friends: [
                {name: 'Mario', online:true},
                {name: 'Luigi', online:false},
                {name: 'Toad', online:true},
                {name: 'Bowser', online:false},
            ]
    }
  },
  methods: {
    changeState(AData) {
      console.log(AData)
      var LFriend = this.Friends.filter(AFriend => {
        // console.log("AFriend:", AFriend.name, ", AData:", AData.AName)
        return AFriend.name === AData.AName
      })
      // console.log("find: ", LFriend[0])
      LFriend[0].online = !LFriend[0].online
      // console.log("change: ", LFriend[0].online)

    }
  }
}
</script>

<style>

</style>
