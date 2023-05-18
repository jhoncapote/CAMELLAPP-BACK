<template>
  <div class="container"><br>
    <div class=" row d-flex justify-content-center"><br>
      <h1><strong>!Bienvenido¡</strong></h1>
    </div><br><br>
    <div class="d-flex align-self-center">
      <div class="row d-flex">
        <div class="col-5 ">
          <h3 style="color: rgb(18, 204, 255);">Aqui podras encontrar las mejores
            ofertas de empleo de forma informal para construccion</h3>
          <h3 style="color: rgb(18, 208, 255);">Publica tu oferta completamente gratis</h3>
        </div>
        <br>
        <div class="col-6">
          <form><br>

            <base-input v-model="usuario.correo" type="email" placeholder="Correo Electronico"></base-input><br>
            <base-input v-model="usuario.password" type="password" placeholder="Contraseña"></base-input><br>
          </form>
          <div class="row d-flex justify-content-center">
            <b-button class="col-4" variant="info" v-on:click="iniciarSesion()">Iniciar Sesion</b-button>

            <router-link class="btn btn-warning  col-4 " to="/admin/RegistroEmpleador">Registrate </router-link>
          </div><br>
          <hr>
          <a href="" class="d-flex justify-content-center">Olvidaste tu contraseña?</a><br>
        </div><br>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      usuario: {
        correo: "",
        password: "",
      },
    }
  },
  components: {},
  methods: {
    iniciarSesion() {
      // alert("a")
      axios.post('http://localhost:3000/Login', this.usuario)
        .then(res => {
          // console.log(res.data.msg);
          if (res.data.status == "error") {
            // alert(res.data.msg)
            console.log(res, data.msg);

          } else {
            // console.log(res.data);
            this.$router.push("/admin/OfertasEmpleo")

            localStorage.setItem('usuario', JSON.stringify(res.data.usuarios))
            console.log(res.data);
           
          }
        })
    }
   
  }
}
</script>
<style>
/* .pagina{
     position: absolute;
    top: 0;
     left: 0;
    width: 100%;
       height: 100%;
    z-index: 9999;
 } */
/* $sidebar-width:               calc(100% - 260px) !default; */
</style>