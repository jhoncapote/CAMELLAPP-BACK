<template>
  <div>
    <div class="row">
      <div class="col-8 offset-2">
        <router-link class="btn btn-info " to="/admin/Registro"> Agregar usuario</router-link>
      </div>
      <div class="col-12 ">
        <h3>USUARIOS</h3>
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover ">
              <thead>
                <tr >
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo_electronico</th>
                  <th scope="col">Rol</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="usuario in listarUsuario" :key=" usuario.id_usuario" >
                <th scope="row">{{ usuario.id_usuario }}</th>
                <td>{{ usuario.nombres }}{{ usuario.apellidos }} </td>
                <td>{{ usuario.correo}}</td>
                <td>{{usuario.rol.nombreRol }}</td>
                <td>
                  <router-link class="btn bg-primary text-white" :to="{name: 'Verusuario', params: {idUsuario: usuario.id_usuario}  }">
                    <i class="fas fa-eye"></i>
                  </router-link>

                  <router-link class="btn bg-success text-white" :to="{ name: 'Editarusuario', 
                  }">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  
                  <button class="btn  bg-danger text-white" @click="eliminar()">
                    <i class="fas fa-trash-alt"></i>
                  </button>


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
    name: 'VerDetalleOfertas',
    data() {
        return {
          listarUsuario: {},
          id_usuario:null
        }
    },
    mounted() {
        axios.get("http://localhost:3000/consultarUsuarioXrol").then(response => {
            this.listarUsuario = response.data
        });
    },
}
</script>