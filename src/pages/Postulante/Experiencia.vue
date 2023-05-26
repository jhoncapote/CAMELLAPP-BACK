<template>
    <div class="container-xg">

        <h3>Añadir Experiencia</h3><br>
        <b-card>
            <form @submit.prevent="handleSubmit">
                <div class="row">
                    <div class="col-12">
                        <b-form-file label="subir archivo" class=" mx-12"
                            placeholder="elija el archivo que desea subir"></b-form-file><br>
                        <hr>
                        <br>
                    </div>

                    <div class="col-12">
                        <base-input label="Titulo" v-model="Experiencia.titulo" type="text" class="from_control"
                            placeholder="titulo" v-validate="'required'" id="titulo" name="titulo" :class="{
                                'is-invalid': submitted && errors.has('titulo'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('titulo')" class="invalid-feedback">
                            {{ errors.first("titulo") }}
                        </div>
                    </div>
                    <br>
                    <div class="col-2">
                        <label for="">Descripcion</label>
                    </div>
                    <div class="col-12">
                        <b-form-textarea v-model="Experiencia.descripcion" type="text"
                            placeholder="se permite maximo 500 caracteres" rows="3"
                            v-validate="{ required: true, max: 500 }" id="descripcion" name="descripcion" :class="{
                                'is-invalid': submitted && errors.has('descripcion'),
                            }">
                        </b-form-textarea>
                        <div v-if="submitted && errors.has('descripcion')" class="invalid-feedback">
                            {{ errors.first("descripcion") }}
                        </div>
                    </div>
                    <div class="col-12">
                        <base-input label="Lugar de trabajo" v-model="Experiencia.lugarDeTrabajo" type="text"
                            class="from_control" placeholder="Lugar de trabajo" v-validate="'required'"
                            id="Lugar de trabajo" name="Lugar de trabajo" :class="{
                                'is-invalid': submitted && errors.has('Lugar de trabajo'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('Lugar de trabajo')" class="invalid-feedback">
                            {{ errors.first("Lugar de trabajo") }}
                        </div>
                    </div>
                    <div class="col-12">
                        <base-input label="Experiencia de Trabajo " type="text" v-model="Experiencia.experienciaDeTrabajo"
                            class="from_control" placeholder="cuantos años de experiencia tiene" v-validate="'required'"
                            id="Experiencia de Trabajo" name="Experiencia de Trabajo" :class="{
                                'is-invalid': submitted && errors.has('Experiencia de Trabajo'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('Experiencia de Trabajo')" class="invalid-feedback">
                            {{ errors.first("Experiencia de Trabajo") }}
                        </div>
                    </div>
                </div>

                <h3>Referencia de Empleador</h3>
                <hr>
                <div>
                    <div class="col-12">
                        <base-input label="Nombre Completo" v-model="Experiencia.nombre" type="text" class="from_control"
                            placeholder="digite el nombre completo del empleador" v-validate="'required'"
                            id="Nombre Completo" name="Nombre Completo" :class="{
                                'is-invalid': submitted && errors.has('Nombre Completo'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('Nombre Completo')" class="invalid-feedback">
                            {{ errors.first("Nombre Completo") }}
                        </div>
                    </div>
                    <div class="col-12">
                        <base-input label="Correo Electronico" v-model="Experiencia.correo" type="email"
                            class="from_control" placeholder="digite el correo electronico" v-validate="'required|email'"
                            name="Correo Electronico"
                            :class="{ 'is-invalid': submitted && errors.has('Correo Electronico') }"></base-input>

                        <div v-if="submitted && errors.has('Correo Electronico')" class="invalid-feedback">
                            {{ errors.first("Correo Electronico") }}
                        </div>
                    </div>
                    <div class="col-12">
                        <base-input label="Numero de Celular" v-model="Experiencia.celular" type="number"
                            class="from_control" placeholder="numero de celular"
                            v-validate="{ required: true, numeric: true, min: 10, max: 10 }" id="Celular" name="Celular"
                            :class="{
                                'is-invalid': submitted && errors.has('Celular'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('Celular')" class="invalid-feedback">
                            {{ errors.first("Celular") }}
                        </div>
                    </div>

                </div>
                <br>
                <hr>
                <br>
                <div class="col-12 d-flex justify-content-center">
                    <button  variant="primary" class="col-3 btn btn-info"><b-icon
                            icon="check2"></b-icon>Agregar
                        experiencia</button>
                    <router-link to="/admin/VerExperiencia" class="btn btn-danger col-3"><b-icon
                            icon="x-circle"></b-icon>Cancelar </router-link>
                </div>
            </form>
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
                nombre: "",
                correo: "",
                celular: "",
                id_usuario: null
            },
            submitted: false,
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

        },
        handleSubmit() {
            this.submitted = true;
            this.$validator.validate().then((valid) => {
                if (valid) {

                    // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.usuario));
                   this.publicarExperiencia()

                }
            });
        },
    },
}
</script>