<template>
    <div>
        <v-app-bar color="black" dark>
            <v-avatar>
                <img
                    src="https://sun9-80.userapi.com/impf/c850036/v850036280/14f866/n9J3Y7sanPM.jpg?size=1080x1080&quality=96&sign=4e54efc6c4778659d8844738a4520a24&type=album"
                    alt="John"
                >
            </v-avatar>
            <span class="ml-2">{{ MIX_APP_NAME }}</span>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/home" text dark>Главная</v-btn>
                <template v-if="isLoggedIn">
                    <v-btn to="/record" text dark>Запись</v-btn>
                    <v-btn @click="logout" text dark>Выход</v-btn>
                </template>
                <template v-else>
                    <v-btn to="/login" text dark>Войти</v-btn>
                    <v-btn to="/register" text dark>Зарегистрироваться</v-btn>
                </template>
            </v-toolbar-items>

            <v-app-bar-nav-icon @click="drawer = !drawer" dark class="hidden-md-and-up"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
            class="hidden-md-and-up"
            color="black"
            dark
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group>
                    <v-list-item to="/home">
                        <v-list-item-title>Главная</v-list-item-title>
                    </v-list-item>
                    <template v-if="isLoggedIn">
                        <v-list-item to="/record">
                            <v-list-item-title>Запись</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="logout">
                            <v-list-item-title>Выход</v-list-item-title>
                        </v-list-item>
                    </template>
                    <template v-else>
                        <v-list-item to="/login">
                            <v-list-item-title>Войти</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/register">
                            <v-list-item-title>Зарегистрироваться</v-list-item-title>
                        </v-list-item>
                    </template>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: "Layout",


    created() {
        if (window.Laravel.isLoggedIn) {
            this.isLoggedIn = true
        }
    },


    data() {
        return {
            drawer: false,
            isLoggedIn: false,
            MIX_APP_NAME: process.env.MIX_APP_NAME
        }
    },


    methods: {
        ...mapActions(['logout']),
    }
}
</script>

<style scoped>

</style>
