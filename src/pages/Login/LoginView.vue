<template>
  <div>
    <div class="row">
      <div class="container"><br>
        <div class="container col-4">
          <div class="d-flex">
            <h1 class="m-5"><strong>!Bienvenido¡</strong></h1>
          </div><br>
          <form>
            <input class="form-control m-2" v-model="usuario.correo" type="email" placeholder="Usuario"><br>
            <input class="form-control m-2" v-model="usuario.password" type="password" placeholder="Contraseña"><br>
          </form>
          <b-button href="" class="mb-2" variant="info" v-on:click="iniciarSesion()">Iniciar Sesion</b-button><br>Ó<br>
          <b-button href="/Registro" class="mb-2" variant="warning">Registrate</b-button><br><br>

          <div class="alert alert-light" role="alert"> </div>
          <a href="./RegistroView" class="px-4">No tienes cuenta?</a>
          <a href="" class="px-4">Olvidaste tu contraseña?</a><br><br>
        </div>
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
      // respuesta: "",
      // usuariols: []
    }
  },
  components: {},
  // created() {
  //   this.usuariols = JSON.parse(localStorage.getItem('respuesta'));
  // },
  methods: {
    // updateProfile() {
    //   alert("your data:" + JSON.stringify(this.usuario))
    // },
    iniciarSesion() {
      // alert("a")
      axios.post('http://localhost:3000/Login', this.usuario)
        .then(res => {
          // console.log(res.data.msg);
          if (res.data.status == "error") {
            // alert(res.data.msg)
             console.log(res,data.msg);
          } else {
            alert("Bienvenido a camellApp")
            // console.log(res.data);
            this.$router.push("/")
            
            localStorage.setItem('usuario', JSON.stringify(res.data.usuarios))
            console.log(res.data);
            // console.log( this.usuario = JSON.parse(localStorage.getItem('respuesta'))); 
          //  console.log(localStorage.getItem('respuesta','usuarios.id_usuario')  ); 

            // localStorage.setItem('respuesta',usuarios.id_usuario)
          }
        })
    }
  }
}
</script>