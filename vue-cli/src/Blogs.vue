<template>
    <div class=blogs>
        <h2>{{blogTitle}}</h2>
        <button @click="changeBlogTitle">Change Title</button><p></p>
        <span>Search: </span><input type="text" v-model="searchItem" />
        <div v-for="post in searchedPosts">
            <h2>{{post.title}}</h2>
            <p>{{post.body | sniffet}}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'My Blogs',
            posts: [],
            searchItem:''
        }
    },
    methods: {
        changeBlogTitle() {
            this.blogTitle = 'Changed Blogs'
        }
    },
    computed: {
        searchedPosts() {
            return this.posts.filter(post => {
                return post.title.match(this.searchItem)
            })
        }
    },
    beforeCreate() {
        console.log('before Create')
    },
    created() {
        console.log('created')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.posts = response.data
        }).catch(err => {
            console.log(err)
        })
    },
    beforeUpdate() {
        console.log('before Update')
    },
    updated() {
        console.log('updated')
    }
}
</script>