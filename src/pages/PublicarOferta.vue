<template >
    <div class="container-fluid">
        
            <div class="row">
                <b-card>                    <template #header>
                    <div class="d-flex justify-content-center">
                        <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                         alt="" class="w-50 d-flex justify-content-center"
                        >
                    </div>
                        
                        <br><br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="Categoria" placeholder="Seleccione una categoria" v-model="ofertaEmpleo.categoria"></base-input>
                                
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="Titulo" placeholder="Escriba un titulo" v-model="ofertaEmpleo.titulo"></base-input>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                               <label for="">Descripcion</label>
                                <b-form-textarea   label="Descripcion" placeholder="Se permite al menos 500 caracteres"
                                    v-model="ofertaEmpleo.descripcion" > </b-form-textarea>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="Salario" placeholder="$" v-model="ofertaEmpleo.salario"></base-input>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="ubicacion" placeholder="Escriba su ubicacion" v-model="ofertaEmpleo.ubicacion"></base-input>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="tipoDeContrato" placeholder="tipoDeContrato" v-model="ofertaEmpleo.tipoDeContrato"></base-input>
                            </div>
                        </div>
                        <br>
                    </template>

                    <b-button v-on:click="publicarOferta()" variant="primary" class="m-1"><b-icon icon="check2"></b-icon>
                        Publicar Oferta</b-button>
                    <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
                </b-card>
            </div>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "PublicarOferta",
    data() {
        return {
            ofertaEmpleo: {
                titulo: "",
                salario: "",
                descripcion: "",
                ubicacion: "",
                tipoDeContrato: "",
                id_categoria: 1,
                id_usuario: 1
            }
        };
    },
    methods: {
        publicarOferta() {
            //   user = localStorage.getItem("usuario")
            //   user.id
            axios.post("http://localhost:3000/guardarOfertaEmpleo", this.ofertaEmpleo)
                .then((data) => {
                    console.log(data);
                });

        }
    },
};
</script>