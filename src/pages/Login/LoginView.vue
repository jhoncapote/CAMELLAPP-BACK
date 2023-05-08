<template>
  <div class="container ">
    <div class=" row d-flex justify-content-center">
          <h1><strong>!Bienvenido¡</strong></h1>
        </div><br>
    <div class="row d-flex">
      <div class="col-5 "  >
        <h3>Aqui podras encontrar las mejores
          ofertas de empleo de forma informal para construccion</h3>
        <h3>Publica tu oferta completamente gratis</h3>
      </div>
      <br>
      <div class="col-6">
        <form><br>
          <input class="form-control m-2" v-model="usuario.correo" type="email" placeholder="Correo Electronico"><br>
          <input class="form-control m-2" v-model="usuario.password" type="password" placeholder="Contraseña"><br>
        </form>
        <div class="row d-flex justify-content-center">
          <b-button class="col-4" variant="info" v-on:click="iniciarSesion()">Iniciar Sesion</b-button>
          
        <router-link class="btn btn-warning  col-4 " :to="{ name: 'Registro' }">Registrate </router-link>
        </div><br>
        
        <hr>
        <a href="" class="d-flex justify-content-center">Olvidaste tu contraseña?</a><br>
      </div><br>

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
            alert("Bienvenido a camellApp")
            // console.log(res.data);
            this.$router.push("/")

            localStorage.setItem('usuario', JSON.stringify(res.data.usuarios))
            console.log(res.data);
          }
        })
    }
  }
}
</script>