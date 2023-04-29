<template>
    <div class="container lg">
        <div class="container-fluid"><br>
            <b-card>
                <div class="row">
                    <b-form-file class=" mx-3" placeholder="elija el archivo que desea subir"></b-form-file><br><br>
                    <div class="col-12">
                        <base-input label="Titulo" v-model="Experiencia.titulo" class="from_control"
                            placeholder="titulo"></base-input>
                    </div>
                    <br>
                    <div class="col-2">
                        <label for="">Descripcion</label>
                    </div>
                    <div class="col-12">
                        <b-form-textarea v-model="Experiencia.descripcion" placeholder="se permite al menos 500 caracteres"
                            rows="3">
                        </b-form-textarea>
                    </div>
                    <br>
                    <div class="col-12">
                        <base-input label="Lugar De trabajo" v-model="Experiencia.lugarDeTrabajo" class="from_control"
                            placeholder="duracion"></base-input>
                    </div>
                    <br>
                    <div class="col-12">
                        <base-input label="Experiencia de Trabajo " v-model="Experiencia.experienciaDeTrabajo"
                            class="from_control" placeholder="cuantos años de experiencia tiene"></base-input>
                    </div>
                    <br>
                    <div class="mx-2">
                        <b-button v-on:click="editar()" variant="primary" class="m-1"><b-icon
                                icon="check2"></b-icon>Actualizar experiencia</b-button>

                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'EditarExperiencia',

    data() {
        return {
            id_experiencia: null,
            Experiencia: {
                titulo: "",
                descripcion: "",
                lugarDeTrabajo: "",
                experienciaDeTrabajo: ""
            }
        }
    },
    components: {

    },
    async mounted() {
        this.id_experiencia = this.$route.params.id_experiencia
        await this.DatosExperiencia()
    },
    methods: {
        DatosExperiencia() {
            axios.get("http://localhost:3000/experiencia/" + this.id_experiencia)
                .then((res) => {
                    // console.log(respuesta.data);
                    this.Experiencia = res.data
                })
                .catch((err) => {//500
                    alert("error del servidor")

                })
        },
        editar() {
            axios.put("http://localhost:3000/editarExperiencia/" + this.id_experiencia, this.Experiencia)
                .then(response => {
                    console.log(response)
                })
                .catch((err) => {
                    alert("problemas del servidor no se actualizo")

                })

        },

    }
}
</script>