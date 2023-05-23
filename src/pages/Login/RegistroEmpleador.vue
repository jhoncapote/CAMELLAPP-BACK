<template>
  <div>

    <div class="container">
      <div class="container col-8">
        <form @submit.prevent="handleSubmit">
          <div v-if="registro === 'registro1'">
            <div class="d-flex">
              <h2 class="mt-5"><strong>Registrate</strong></h2>
            </div>
            <div class="d-flex">
              <h5>! Bienvenido ¡</h5>
            </div>
            <br />

            <div class="row">
              <div class="col-6">
                <input class="form-control" v-model="form.nombres" type="text" placeholder="Nombres"
                  v-validate="'required'" id="Nombres" name="Nombres" :class="{
                    'is-invalid': submitted && errors.has('Nombres'),
                  }" />
                <div v-if="submitted && errors.has('Nombres')" class="invalid-feedback">
                  {{ errors.first("Nombres") }}
                </div>
              </div>
              <div class="col-6">
                <input class="form-control" v-model="form.apellidos" type="text" placeholder="Apellidos"
                  v-validate="'required'" id="Apellido" name="Apellido"
                  :class="{ 'is-invalid': submitted && errors.has('Apellido') }" />
                <div v-if="submitted && errors.has('Apellido')" class="invalid-feedback">
                  {{ errors.first("Apellido") }}
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <br />
              <div class="col-6 d-flex justify-content-center">
                <input class="form-control" v-model="form.telefono" type="number" placeholder="Numero de Celular"
                  v-validate="'required'" id="Celular" name="Celular"
                  :class="{ 'is-invalid': submitted && errors.has('Celular') }" /><br />
                <div v-if="submitted && errors.has('Celular')" class="invalid-feedback">
                  {{ errors.first("Celular") }}
                </div>
              </div>
              <div class="col-6 d-flex justify-content-between">
                <input class="form-control" v-model="form.correo" type="email" placeholder="Correo"
                  id="Correo Electronico" v-validate="'required|email'" name="Correo Electronico"
                  :class="{ 'is-invalid': submitted && errors.has('Correo Electronico') }" /><br />
                <div v-if="submitted && errors.has('Correo Electronico')" class="invalid-feedback">
                  {{ errors.first("Correo Electronico") }}
                </div><br>
              </div>
            </div>
            <br />
            <input class="form-control" :v-model="form.fotoPerfil" type="file" src="foto"
              alt="Selecciona una foto de perfil" />
            <br />
            <b-button type="submit" @click="registro = 'registro2'" variant="info">Siguiente</b-button>
            <!-- <input type="submit" value="Submit" @click="registro = 'registro2'" >  -->
          </div>
          <div v-else-if="registro === 'registro2'">
            <div class="d-flex">
              <h2 class="mt-5"><strong>Registrate</strong></h2>
            </div>
            <div class="d-flex">
              <h5>Como podemos encontrarte</h5>
            </div>
            <br />
            <div class="row">
              <div class="col-6">
                <input class="form-control" v-model="form.nacionalidad" type="text" placeholder="Pais de Origen" id="Nacionalidad"
                  v-validate="'required'"  name="Nacionalidad"
                  :class="{ 'is-invalid': submitted && errors.has('Nacionalidad') }" />
                <div v-if="submitted && errors.has('Nacionalidad')" class="invalid-feedback">
                  {{ errors.first("Nacionalidad") }}
                </div><br>
              </div>
              <div class="col-6">
                <input class="form-control" v-model="form.ciudad" type="text" placeholder="ciudad/municipio"
                  v-validate="'required'" id="ciudad" name="ciudad"
                  :class="{ 'is-invalid': submitted && errors.has('ciudad') }" />
                <div v-if="submitted && errors.has('ciudad')" class="invalid-feedback">
                  {{ errors.first("ciudad") }}
                </div><br>
              </div>
            </div>
            <br />
            <div>
              <input class="form-control" v-model="form.direccion" type="text" placeholder="Direccion de Residencia"
                v-validate="'required'" id="direccion" name="direccion"
                :class="{ 'is-invalid': submitted && errors.has('direccion') }" />
              <br>
              <div v-if="submitted && errors.has('direccion')" class="invalid-feedback">
                {{ errors.first("direccion") }}
              </div><br>
            </div>
            <div>
              <input class="form-control" v-model="form.documento" type="number" placeholder="Numero de Documento"
                v-validate="'required'" id="documento" name="documento"
                :class="{ 'is-invalid': submitted && errors.has('documento') }" />
              <div v-if="submitted && errors.has('documento')" class="invalid-feedback">
                {{ errors.first("documento") }}
              </div><br>
            </div>
            <br />
            <div class="d-flex">
              <p>Algunos datos no seran visibles por tu seguridad*</p>
            </div>
            <br />
            <b-button @click="registro = 'registro3'" variant="info">Siguiente</b-button>
          </div>
          <div v-else-if="registro === 'registro3'">
            <div class="d-flex">
              <h2 class="mt-5"><strong>Registrate</strong></h2>
            </div>
            <div class="d-flex">
              <h5>Ya casi terminamos!</h5>
            </div>
            <br />
            <div>
             <input class="form-control" v-model="form.username" type="text" placeholder="digite su usuario"  v-validate="'required'" id="user name" 
             name="user name" :class="{ 'is-invalid': submitted && errors.has('user name') }" />
              <div v-if="submitted && errors.has('user name')" class="invalid-feedback">
                {{ errors.first("user name") }}
              </div><br>
            </div>
            <div>
              <input class="form-control" v-model="form.fechaNacimiento" type="date" v-validate="'required'"
              placeholder="fecha de Nacimiento" id="Fecha Nacimiento" 
             name="Fecha Nacimiento" :class="{ 'is-invalid': submitted && errors.has('Fecha Nacimiento') }" />
              <div v-if="submitted && errors.has('Fecha Nacimiento')" class="invalid-feedback">
                {{ errors.first("Fecha Nacimiento") }}
              </div><br>
            </div>
           
            <div>
              <input class="form-control" id="password" v-model="form.password" type="password" placeholder="Contraseña"
                v-validate="{ required: true, min: 8 }" name="password"
                :class="{ 'is-invalid': submitted && errors.has('password') }" />
              <div v-if="submitted && errors.has('password')" class="invalid-feedback">
                {{ errors.first("password") }}
              </div><br>
            </div>

            <br />
            <div>
              <input class="form-control" id="contraseña" v-model="form.contraseña" type="password"
                placeholder="Confirma tu Contraseña" v-validate="{ required: true, min: 8 }" name="Contraseña"
                :class="{ 'is-invalid': submitted && errors.has('Contraseña') }" />
              <div v-if="submitted && errors.has('Contraseña')" class="invalid-feedback">
                {{ errors.first("Contraseña") }}
              </div>
            </div>

            <br />
            <div class="d-flex justify-content-evenly">
              <b-button variant="info" class="m-1"><b-icon icon="megaphone"></b-icon>
                GUARDAR</b-button><br />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RegistroView",
  data() {
    return {
      registro: "registro1",
      
      form: {
        nombres: "",
        apellidos: "",
        nacionalidad: "",
        ciudad: "",
        documento: "",
        fotoPerfil: "url",
        fechaNacimiento: "",
        telefono: "",
        correo: "",
        direccion: "",
        username: "",
        password: "",
        contraseña: "",
        id_rol: 2,

      },
      submitted: false,
    };
  },
  components: {},
  methods: {
    GuardarEmpleador() {
      if (this.form.contraseña == this.form.password) {
        axios.post(" http://localhost:3000/Registro", this.form)
          .then((data) => {
            console.log(data);
            this.$router.push("/admin/LoginView")
          });
      } else {
        alert("contraseñas no coinciden");
      }
    },
    handleSubmit() {
      
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {

          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.usuario));
          this.GuardarEmpleador()

        }
      });
    },

  },
};
</script>