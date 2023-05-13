<template>
    <div class="container-xg">

        <h3>Añadir Experiencia</h3><br>
        <b-card>
            <div class="row">
                <div class="col-12">
                    <b-form-file label="subir archivo" class=" mx-12"
                        placeholder="elija el archivo que desea subir"></b-form-file><br>
                    <hr>
                    <br>
                </div>

                <div class="col-12">
                    <base-input label="Titulo" v-model="Experiencia.titulo" type="text"  class="from_control"
                        placeholder="titulo"></base-input>
                </div>
                <br>
                <div class="col-2">
                    <label for="">Descripcion</label>
                </div>
                <div class="col-12">
                    <b-form-textarea v-model="Experiencia.descripcion" type="text" placeholder="se permite al menos 500 caracteres"
                        rows="3">
                    </b-form-textarea><br>
                </div>
                <div class="col-12">
                    <base-input label="Lugar De trabajo" v-model="Experiencia.lugarDeTrabajo" type="text" class="from_control"
                        placeholder="duracion"></base-input>
                </div>
                <div class="col-12">
                    <base-input label="Experiencia de Trabajo " type="text"  v-model="Experiencia.experienciaDeTrabajo"
                        class="from_control" placeholder="cuantos años de experiencia tiene"></base-input>
                </div>
            </div>
            
            <h3>Referencia de Empeador</h3>
            <hr>
            <div>
                 <div class="col-12">
                    <base-input label="Nombre Completo" v-model="Experiencia.nombre" type="text"  class="from_control"
                        placeholder="digite el nombre completo del empleador"></base-input>
                </div>
                <div class="col-12">
                    <base-input label="Correo Electronico" v-model="Experiencia.correo" type="email"  class="from_control"
                        placeholder="digite el correo electronico"></base-input>
                </div>
                <div class="col-12">
                    <base-input label="Numero de Celular" v-model="Experiencia.celular" type="number"  class="from_control"
                        placeholder="numero de celular"></base-input>
                </div>
               
            </div>
            <br>
            <hr>
            <br>
            <div class="col-12 d-flex justify-content-center">
                <b-button v-on:click="publicarExperiencia()" variant="primary" class="col-3"><b-icon
                        icon="check2"></b-icon>Agregar
                    experiencia</b-button>
                <router-link to="/admin/VerExperiencia" class="btn btn-danger col-3"><b-icon
                        icon="x-circle"></b-icon>Cancelar </router-link>
            </div>
        </b-card>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'Experiencia',
    data() {
        return {
            usuariols: {},
            Experiencia: {
                titulo: "",
                descripcion: "",
                lugarDeTrabajo: "",
                experienciaDeTrabajo: "",
                nombre:"",
                correo:"",
                celular:"",
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
            Swal.fire({
                title: 'Estas seguro',
                text: "de guardar la experiencia!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post("http://localhost:3000/guardarExperiencia", this.Experiencia)
                    Swal.fire(
                        'Guardar',
                        'se a guardado la experiencia con exito',
                        'success',
                        this.$router.push("/admin/VerExperiencia")
                    )
                }
            }).catch(error => {
                // Manejar errores si es necesario
                console.error(error);
            });

        }
    },
}
</script>