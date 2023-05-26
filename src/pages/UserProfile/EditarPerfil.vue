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
          <base-input type="text" label="Celular" placeholder="Celular" v-model="user.telefono">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text" label="Nacionalidad" placeholder="Nacionalidad" v-model="user.nacionalidad">
          </base-input>
        </div>
      </div>
      <div class="col-md-12">
          <base-input type="text" label="Ciudad" placeholder="Numero de celular" v-model="user.ciudad">
          </base-input>
        </div>
      <div class="row">
        <div class="col-md-12">
          <base-input type="date" label="fecha de Nacimiento" placeholder="fecha de nacimiento" v-model="user.fechaNacimiento">
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
      </div><br>
      <div class="text-center d-flex justify-content-center ">
        <button type="submit" class="btn btn-info col-3" @click="editarPerfil()">Actualizar</button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios'
export default {
  name:'User',
  data() {
    return {
       usuariols: {},
      id_usuario:null,
      user: {
        nombres: "",
        apellidos: "",
        telefono: "",
        nacionalidad: "",
        ciudad:"",
        fechaNacimiento:"",
        fotoPerfil: "url",
        correo: "",
        direccion: ""
      }
    }
  },
  components: {
    Card
  },
  created() {
    this.usuariols = JSON.parse(localStorage.getItem('usuario'));
  },
  async mounted() {
    this.id_usuario = this.$route.params.id_usuario
    await this.listarDatos()
    
  },
  methods:{
    listarDatos(){
      this.id_usuario = this.usuariols.id_usuario
      axios.get("http://localhost:3000/verUsuario/"+ this.id_usuario )
      .then((res) => {
        this.user = res.data;
      })
      .catch((err) => {//500
        alert("error del servidor")
      })
    },
    editarPerfil(){
      axios.put("http://localhost:3000/editarusuario/"+ this.usuariols.id_usuario,this.user)
      .then(res => {
       console.log(res.data)
       this.$router.push("/admin/user")
       
      })
    }
  }
}

</script>
<style></style>
