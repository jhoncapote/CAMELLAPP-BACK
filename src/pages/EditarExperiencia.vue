<template>
    <div class="container lg">
        <div class="container-fluid"><br>
            <b-card>
                <div class="row">
                    <b-form-file class=" mx-3" placeholder="elija el archivo que desea subir"></b-form-file><br><br>
                    <div class="col-12">
                        <base-input label="Titulo" v-model="Exp.titulo" class="from_control"
                            placeholder="titulo"></base-input>
                    </div>
                    <br>
                    <div class="col-2">
                        <label for="">Descripcion</label>
                    </div>
                    <div class="col-12">
                        <b-form-textarea v-model="Exp.descripcion" placeholder="se permite al menos 500 caracteres"
                            rows="3">
                        </b-form-textarea>
                    </div>
                    <br>
                    <div class="col-12">
                        <base-input label="Lugar De trabajo" v-model="Exp.lugarDeTrabajo" class="from_control"
                            placeholder="duracion"></base-input>
                    </div>
                    <br>
                    <div class="col-12">
                        <base-input label="Experiencia de Trabajo " v-model="Exp.experienciaDeTrabajo" class="from_control"
                            placeholder="cuantos años de experiencia tiene"></base-input>
                    </div>
                    <br>
                    <div class="mx-2">
                        <b-button v-on:click="" href="#" variant="primary" class="m-1"><b-icon
                                icon="check2"></b-icon>Actualizar
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
    name: 'EditarExperiencia',

    data() {
        return {
            Exp: {
                id_usuario:"4",
                titulo: "",
                descripcion: "",
                lugarDeTrabajo: "",
                experienciaDeTrabajo: ""
            }
        }
    },
    components: {

    },
    async mounted(){
    await this.listarD()

  },
  methods:{
    listarD(){
      axios.get("http://localhost:3000/experiencia/"+2)
      .then((res) => {
        // console.log(respuesta.data);
       this.Exp.titulo = res.data.titulo;
       this.Exp.descripcion = res.data.descripcion;
       this.Exp.lugarDeTrabajo = res.data.lugarDeTrabajo;
       this.Exp.experienciaDeTrabajo = res.data.experienciaDeTrabajo;  
      })
      .catch((err) => {//500
        alert("error del servidor")

      })
    },
    },
  
}
</script>