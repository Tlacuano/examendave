<template>
    <div>
        <b-row>
            <b-col class="text-center">
                <h1>Inicio</h1>
            </b-col>
        </b-row>
        <b-row  align-h="between">
            <b-col cols="5" class="text-center mt-4">
                <b-card  class="selectable" @click="navigateFun('/carros')">
                    <b-img src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_960_720.jpg" fluid alt="Fluid image"></b-img>
                    <hr>
                    <h1>Administrar vehiculos</h1>
                </b-card>
            </b-col>
            <b-col cols="5" class="text-center mt-4">
                <b-card class="selectable" >
                    <b-img src="https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_960_720.jpg" fluid alt="Fluid image"></b-img>
                    <hr>
                    <h1>Otros</h1>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name:'LandingPage',
    methods:{
        navigateFun(route){
            console.log(this.$route)
            if(this.$route !==  route){
                this.$router.push({ path: route })
            }
        }
    },
    
}
</script>
