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
          <form @submit.prevent="handleSubmit"><br>
            <div>
              <base-input v-model="usuario.correo" id="Correo Electronico" v-validate="'required|email'" type="email"
                placeholder="Correo Electronico"
                name="Correo Electronico" :class="{ 'is-invalid': submitted && errors.has('Correo Electronico') }"></base-input>
              <div v-if="submitted && errors.has('Correo Electronico')" class="invalid-feedback">
                {{ errors.first("Correo Electronico") }}
              </div><br>
            </div>
            <div>
              <base-input v-model="usuario.password" type="password" id="contraseña" placeholder="Contraseña"
                v-validate="{ required: true, min: 8 }" name="contraseña"
                :class="{ 'is-invalid': submitted && errors.has('contraseña') }"></base-input>
              <div v-if="submitted && errors.has('contraseña')" class="invalid-feedback">
                {{ errors.first("contraseña") }}
              </div><br>
            </div>
            <div class="row d-flex justify-content-center">
              <button class="col-4 btn btn-primary" variant="info" >Iniciar Sesion</button>
              <!-- <b-button class="col-4" variant="info" v-on:submit.prevent="handleSubmit">Iniciar Sesion</b-button>  -->
              <!-- <p> <button class="">Register</button></p> -->
              <router-link class="btn btn-warning  col-4 " to="/admin/RegistroEmpleador">Registrate </router-link>
            </div><br>
          </form>

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
      submitted: false,
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
             alert(res.data.msg)
            console.log(res, data.msg);
            this.$router.push("/admin/LoginView") 
          } else {
            // console.log(res.data);
            this.$router.push("/admin/OfertasEmpleo")
            window.location.reload(),
            localStorage.setItem('usuario', JSON.stringify(res.data.usuarios))
            console.log(res.data);

          }
        })
    },
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {

          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.usuario));
          this.iniciarSesion()

        }
      });
    },
  }
}
</script>
