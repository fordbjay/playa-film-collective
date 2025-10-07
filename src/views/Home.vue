<template>

    <open/>
    <div>test</div>
    <aboutUs/>

</template>

<script>

    import open from '../components/open.vue'
    import aboutUs from '../components/about-us.vue'

    export default {
        
        components: { open, aboutUs },

    data() {
        return {
        
        }
    }

    };

</script>

<style scoped>

div {
    z-index: 10000;
}

</style>