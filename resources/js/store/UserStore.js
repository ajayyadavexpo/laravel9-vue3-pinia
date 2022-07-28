import { defineStore } from 'pinia'

export const UserStore = defineStore({
    id:'UserStoreId',

    state: () => ({
        token: localStorage.getItem('token') || 0,
    }),

    getters:{
        // getToken: function(){
        //     return this.token
        // }
        getToken : state => state.token
    },

    actions: {

        setToken: function(token){
            this.token = token
            localStorage.setItem('token',token)
        },

        removeToken: function(){
            this.token = 0
            localStorage.removeItem('token')
        }

    }




});
