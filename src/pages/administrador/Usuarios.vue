<template>
  <div class="container-fluid"><br>
    <div class="row">
      <div  class="d-flex">
        <router-link class="btn btn-info me-md-2" to="/admin/Registro"><a><b-icon icon="person-plus "></b-icon></a>Agregar
          usuario</router-link>
      </div>
      <div class="col-12 ">
        <h4>USUARIOS</h4>
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover ">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo_electronico</th>
                  <th scope="col">Rol</th>
                  <th scope="col">opcion</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="usuario in listarUsuario" :key="usuario.id_usuario">
                  <th scope="row">{{ usuario.id_usuario }}</th>
                  <td>{{ usuario.nombres }}{{ usuario.apellidos }} </td>
                  <td>{{ usuario.correo }}</td>
                  <td>{{ usuario.rol.nombreRol }}</td>
                  <td>
                    <!-- <router-link class="btn bg-primary text-white" :to="{name: 'user', params: {id_usuario: usuario.id_usuario}  }">
                    <i class="fas fa-eye"></i>
                  </router-link>

                  <router-link class="btn bg-success text-white" :to="{ name: 'Editarusuario', 
                  }">
                    <i class="fas fa-edit"></i>
                  </router-link> -->
                    <b-button v-on:click="EliminarUsuario(usuario.id_usuario)" variant="danger">Eliminar <b-icon
                        icon="basket-fill"></b-icon> </b-button>
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
// import Card from 'src/components/Cards/Card.vue'
export default {
  name: 'usuarios',
  data() {
    return {
      listarUsuario: {},
        id_usuario: null
      
    }
  },
  async mounted() {
    // this.id_usuario = this.$route.params.id_usuario
    await this.Verusuarios()
    await this.EliminarUsuario()
    

  },
  methods: {
    Verusuarios() {
      axios.get("http://localhost:3000/consultarUsuarioXrol")
        .then(response => {
          this.listarUsuario = response.data
        });
    },
    EliminarUsuario(id) {
      axios.delete("http://localhost:3000/eliminarUsuario/"+ id)
        .then(res => {
          
          console.log(res);
        });
    }
     
  }
}
</script>