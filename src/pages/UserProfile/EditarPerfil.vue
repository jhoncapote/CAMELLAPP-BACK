<template>
  <card>
    <h4 slot="header" class="card-title">Editar Perfil</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text" label="Nombres" placeholder="Nombres" v-model="user.nombres">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text" label="Apellidos" placeholder="Apellidos" v-model="user.apellidos">
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text" label="Nacionalidad" placeholder="Nacionalidad" v-model="user.nacionalidad">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text" label="Celular" placeholder="Celular" v-model="user.telefono">
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <base-input type="email" label="Correo electronico" placeholder="correo" v-model="user.correo">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="text" label="Direccion" placeholder="Direccion" v-model="user.direccion">
          </base-input>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click="editar()">
          Actualizar
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios'
export default {
  
  data() {
    return {
      user: {
        nombres: "",
        apellidos: "",
        nacionalidad: "",
        correo: "",
        documento: "",
        fotoPerfil: "url",
        telefono: "",
        direccion: ""
      }
    }
  },
  components: {
    Card
  },
  async mounted(){
    await this.listarDatos()

  },

  methods:{

    listarDatos(){
      axios.get("http://localhost:3000/verUsuario/"+1)
      .then((res) => {
        // console.log(respuesta.data);
       this.user.nombres = res.data.nombres;
       this.user.apellidos = res.data.apellidos;
       this.user.nacionalidad = res.data.nacionalidad;
       this.user.correo = res.data.correo;
       this.user.documento = res.data.documento;
       this.user.fotoPerfil = res.data.fotoPerfil;
       this.user.telefono = res.data.telefono;
       this.user.direccion = res.data.direccion;
      })
      .catch((err) => {//500
        alert("error del servidor")
      })
    },
    editar(){
      axios.put("http://localhost:3000/editarusuario/"+1)
      .then(res => {
       console.log(res.data)
      })
    }
  }
}

</script>
<style></style>
