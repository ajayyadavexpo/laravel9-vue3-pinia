<template>

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <router-link class="navbar-brand" :to="{name :'Home' }">Home</router-link>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="text-white" :to="{name : 'Login' }" v-if="token == 0">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white ml-2" :to="{name : 'Register' }" v-if="token == 0"> Register</router-link>
            </li>
            <li class="nav-item">
                <router-link class="text-white ml-2" :to="{name : 'Dashboard' }" v-if="token != 0"> Dashboard </router-link>
            </li>

        </ul>
    </nav>

    <router-view></router-view>

</template>
<script>
    import { UserStore } from '@/store/UserStore'
    import { mapState } from 'pinia'
    export default({
        computed:{
            ...mapState(UserStore,['token'])
        }
    })
</script>
