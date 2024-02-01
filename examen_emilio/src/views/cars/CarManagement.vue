<template>
    <div>
        <b-row>
            <b-col>
                <b-breadcrumb>
                    <b-breadcrumb-item :to="{name:'landing'}">
                        <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                        Home
                    </b-breadcrumb-item>
                    <b-breadcrumb-item :to="{name:'carro'}">Carros</b-breadcrumb-item>
                    <b-breadcrumb-item :to="{name:'agregar'}">Agregar</b-breadcrumb-item>
                </b-breadcrumb>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="text-center">
                <h2>Administrar carros</h2>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name:'CarManagement',
    data () {
        return {
            
        }
    },
    methods:{

        async getCars(){
            try {
                const response = await fetch('http://localhost:8080/api/vehiculos/page',{
                    method: "POST",
                    body:{

                    }
                })
                console.log(response)
            } catch (error) {
                
            }
            
        }

    },
    mounted(){
        this.getCars()
    },
}
</script>