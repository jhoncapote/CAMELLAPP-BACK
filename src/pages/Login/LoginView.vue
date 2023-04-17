<template>
  <div>

    <div class="row">
      <div class="container"><br>
        <div class="container col-4">
          <div class="d-flex">
            <h1 class="m-5"><strong>!Bienvenido¡</strong></h1>
          </div><br>
          <form>
            <input class="form-control m-2" v-model="user.correo" type="email" placeholder="Usuario"><br>
            <input class="form-control m-2" v-model="user.password" type="password" placeholder="Contraseña"><br>
          </form>
          <b-button href="" class="mb-2" variant="info" v-on:click="iniciarSesion" >Iniciar Sesion</b-button><br>Ó<br>
          <b-button href="./RegistroView" class="mb-2" variant="warning">Registrate</b-button><br><br>

          <div class="alert alert-light" role="alert"> </div>
          <a href="./RegistroView" class="px-4">No tienes cuenta?</a>
          <a href="" class="px-4">Olvidaste tu contraseña?</a><br><br>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
       user:{  
        correo: "",
        password: "",
        error: false,
       },
        
        
        // error_msg: ""


    
      usuariobd: "jhon@.com",
      passworddb:"1234",
      res:{
        nombre:"yenifer",
        id_usuario:4,
        id_foto: 3
      }
    }
  },
  components: {},
  methods: {

    updateProfile() {
      alert("your data:" + JSON.stringify(this.user))
    },
    iniciarSesion() {
      if (this.user.correo == this.usuariobd && this.user.password == this.passworddb) {
        alert('correcto')
        // localStorage.setItem('usuario', '4')
       this.$router.push("PublicarOferta")
      } else {
        alert('el usuario no existe')
      }
    }
    // login() {
    //   let json = {
    //     "correo": this.correo,
    //     "password": this.password
    //   }
 
    //     axios.post('http://localhost:3000/Login', json)
    //       .then(res => {
    //         if (res.data == "ok") {
    //           console.log("todo correo")
    //         } else {
    //           this.error = true;
    //           // this.error_msg
    //           console.log ('error')
    //         }
    //       })
      
    // }


  }
}
</script>