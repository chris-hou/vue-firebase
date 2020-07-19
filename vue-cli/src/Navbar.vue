<template>
    <nav class='navMenu'>
        <h2>Menu</h2>
        <ul class='navUl'>
            <li class='navLi'><a href="http://home.org">home</a></li>
            <li><a href="http://contact.org">contact</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>
<style>
.navMenu {
    text-align: center;
}
.navUl{
    padding: 0;
}

.navLi{
    display:inline-block;
    list-style-type: none;
    margin: 0;
}
</style>