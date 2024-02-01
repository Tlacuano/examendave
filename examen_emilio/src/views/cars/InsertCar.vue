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
                <h2>Agregar carro</h2>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="text-center">
                
                <b-row>
                    <b-col cols="6">
                        <b-form-group
                            label="Marca"  
                        >
                            <b-form-input
                                type="text"
                                v-model="carro.brand"
                                :state="errors.brand.error ? !errors.brand.error : null"
                            />
                            <b-form-invalid-feedback v-if="errors.brand.error">
                                        {{ errors.brand.message }}
                            </b-form-invalid-feedback>
                        </b-form-group>             
                    </b-col>

                    <b-col cols="6">
                        <b-form-group
                            label="Modelo"  
                        >
                            <b-form-input
                                type="text"
                                v-model="carro.model"
                                :state="errors.model.error ? !errors.model.error : null"
                            />
                            <b-form-invalid-feedback v-if="errors.model.error">
                                        {{ errors.model.message }}
                            </b-form-invalid-feedback>
                        </b-form-group>             
                    </b-col>
                </b-row>


                <b-row class="mt-4">
                    <b-col cols="6">
                        <b-form-group
                            label="Año"  
                        >
                            <b-form-input
                                type="number"
                                v-model="carro.year"
                                :state="errors.year.error ? !errors.year.error : null"
                            />
                            <b-form-invalid-feedback v-if="errors.year.error">
                                        {{ errors.year.message }}
                            </b-form-invalid-feedback>
                        </b-form-group>             
                    </b-col>

                    <b-col cols="6">
                        <b-form-group
                            label="Serie"  
                        >
                            <b-form-input
                                type="text"
                                v-model="carro.serie"
                                :state="errors.serie.error ? !errors.serie.error : null"
                            />
                            <b-form-invalid-feedback v-if="errors.serie.error">
                                        {{ errors.serie.message }}
                            </b-form-invalid-feedback>
                        </b-form-group>             
                    </b-col>
                </b-row>

            </b-col>
        </b-row>

        <b-row class="mt-4">
            <b-col cols="12" class="text-center">
                <b-button @click="validar()" >Registrar</b-button>
            </b-col>
        </b-row>

    </div>
</template>

<script>
export default {
    name:'InsetCar',
    data () {
        return {
            carro:{
                brand: '',
                model: '',
                serie:'',
                year:0,

            },
            errors:{
                brand:{
                    error:null,
                    message:''
                },
                model:{
                    error:null,
                    message:''
                },
                year:{
                    error:null,
                    message:''
                },
                serie:{
                    error:null,
                    message:''
                }
            }
        }
    },
    methods:{
        validar(){
            //validar marca
            if(this.carro.brand !== ''){
                if(/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/g.test(this.carro.brand)){
                    this.errors.brand.error = false
                    this.errors.brand.message = ''
                }else{
                    this.errors.brand.error = true
                    this.errors.brand.message = 'No puede tener caracteres especiales'
                }
                
            }else{
                this.errors.brand.error = true
                this.errors.brand.message = 'No puede estar vacio'
            }

            //modelo
            if(this.carro.model !== ''){
                if(/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/g.test(this.carro.model)){
                    this.errors.model.error = false
                    this.errors.model.message = ''
                }else{
                    this.errors.model.error = true
                    this.errors.model.message = 'No puede tener caracteres especiales'
                }
                
            }else{
                this.errors.model.error = true
                this.errors.model.message = 'No puede estar vacio'
            }

            if(this.carro.serie !== ''){
                if(/^[A-Z]{4}\d{3}-\d{2}[A-Z]{2}$/g.test(this.carro.serie)){
                    this.errors.serie.error = false
                    this.errors.serie.message = ''
                }else{
                    this.errors.serie.error = true
                    this.errors.serie.message = 'Debe seguir el siguiente formato XXXX000-00XX'
                }
                
            }else{
                this.errors.serie.error = true
                this.errors.serie.message = 'No puede estar vacio'
            }

            if(this.carro.year !== 0 &&  this.carro.year !== undefined){
                const actualYear = Number(new Date().getFullYear()) 

                if(!(this.carro.year > actualYear)){
                    this.errors.year.error = false
                    this.errors.year.message = ''
                }else{
                    this.errors.year.error = true
                    this.errors.year.message = 'No puede ser mayor al año actual'
                }
                
            }else{
                this.errors.year.error = true
                this.errors.year.message = 'No puede estar vacio'
            }


            

            if(!(this.errors.year.error)
                &&  !(this.errors.model.error)
                &&  !(this.errors.model.error)){

                    this.insetar()
            }

        },


        async insetar(){
            try {
                const response = await fetch('http://localhost:8080/api/vehiculos/save',{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    
                    },
                    body: JSON.stringify( {
                        brand: this.carro.brand,
                        model: this.carro.model,
                        serie: this.carro.serie,
                        year: Number.parseInt(this.carro.year)
                    })
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
            
        }
    },
}
</script>