<template>
    <div class="container-xg">
        <div class="container-fluid"><br>
            <h2>Añadir experiencia</h2>
            <b-card>
                
                <div class="row">
                    <div class="col-12">
                       <b-form-file label="subir archivo" class=" mx-12" placeholder="elija el archivo que desea subir"></b-form-file><br>
                    <hr>
                <br></div>
                    
                    <div class="col-12">
                        <base-input label="Titulo" v-model="Experiencia.titulo" class="from_control"
                            placeholder="titulo"></base-input>
                    </div>
                    <br><br>
                    <div class="col-2">
                        <label for="">Descripcion</label>
                    </div>
                    <div class="col-12">
                        <b-form-textarea v-model="Experiencia.descripcion" placeholder="se permite al menos 500 caracteres"
                            rows="3">
                        </b-form-textarea><br>
                    </div>
                    <br>
                    <div class="col-12">
                        <base-input label="Lugar De trabajo" v-model="Experiencia.lugarDeTrabajo" class="from_control"
                            placeholder="duracion"></base-input><br>
                    </div>
                    <br>
                    <div class="col-12">
                        <base-input label="Experiencia de Trabajo " v-model="Experiencia.experienciaDeTrabajo"
                            class="from_control" placeholder="cuantos años de experiencia tiene"></base-input>
                    </div>
                    <br>
                
                    <div class="col-12 displey flex justify-content-center  mx-2">
                        <br>
                        <hr>
                        <br>
                        <b-button v-on:click="publicarExperiencia()" href="#" variant="primary" class="m-1"><b-icon
                                icon="check2"></b-icon>Agregar
                            experiencia</b-button>
                        <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon>
                            Cancelar</b-button>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Experiencia',
    data() {
        return {
            usuariols:{},
            Experiencia: {
                titulo: "",
                descripcion: "",
                lugarDeTrabajo: "",
                experienciaDeTrabajo: "",
                id_usuario: null
            }
        }
    },
    components: {
    },
    computed: {
    },
    mounted() {
        this.usuariols = JSON.parse(localStorage.getItem('usuario'))
        // this.usuariols = JSON.parse(localStorage.getItem('respuesta'));
    },
    
    methods: {
        publicarExperiencia() {
            this.Experiencia.id_usuario = this.usuariols.id_usuario
            axios.post("http://localhost:3000/guardarExperiencia", this.Experiencia)
                .then((data) => {
                 console.log(data);
                });

        }
    },
}
</script>