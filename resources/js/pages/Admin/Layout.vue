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
                <v-btn to="/apanel/posts" text dark>Посты</v-btn>
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
                    <v-list-item to="/apanel/posts">
                        <v-list-item-title>Посты</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>

export default {
    name: "Layout",


    data() {
        return {
            drawer: false,
            MIX_APP_NAME: process.env.MIX_APP_NAME
        }
    },
}
</script>

<style scoped>

</style>
