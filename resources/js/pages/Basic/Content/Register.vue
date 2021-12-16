<template>
    <v-container>
        <v-card>
            <v-form @submit.prevent="submit">
                <v-card-title>
                    <h1 class="display-1">Регистрация</h1>
                </v-card-title>
                <v-card-text>
                    <span v-if="getError" class="error--text">{{ getError }}</span>
                    <v-text-field
                        v-model="name"
                        label="Имя"
                        color="pink"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        type="email"
                        label="Email"
                        color="pink"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        type="password"
                        label="Пароль"
                        color="pink"
                        required
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn type="submit" color="pink" dark>Зарегистрироваться</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
        }
    },


    computed: {
        ...mapGetters(['getError']),
    },


    methods: {
        ...mapActions(['register']),

        submit() {
            this.register({
                name: this.name,
                email: this.email,
                password: this.password,
            })
        }
    }
}
</script>

<style scoped>

</style>
