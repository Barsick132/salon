<template>
    <v-flex ref="content" fill-height>
        <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            :height="innerHeight"
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <h1 class="text-h4 font-weight-thin mb-4">
                        Page Not Found
                    </h1>
                    <div class="d-inline-flex align-center subheading">
                        <span>Yankees, </span>
                        <v-btn to="home" text dark>
                            Go Home!
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-parallax>
    </v-flex>
</template>

<script>
export default {
    name: "NotFound",


    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },


    data() {
        return {
            innerHeight: window.innerHeight
        }
    },


    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },


    methods: {
        onResize() {
            this.innerHeight = window.innerHeight;
        }
    }
}
</script>

<style scoped>

</style>
