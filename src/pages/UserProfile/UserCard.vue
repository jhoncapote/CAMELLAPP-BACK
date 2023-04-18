<template>
  <div class="col-6 offset-3">
  <card class="card-user"  id="card1">
    <img slot="image" src="https://i.ibb.co/ZWhrt5Y/logocamellapp-Recuperado.png" style="max-width: 90%;"
      alt="..."  />
    <div class="author">
      <a href="#">
        <img class="avatar border-0" src="https://st3.depositphotos.com/6582994/13117/v/450/depositphotos_131177892-stock-illustration-user-icon-in-trendy-flat.jpg"
          alt="..." />
        <h4 class="title" style="text-transform: uppercase;">{{usuario.nombres}} {{usuario.apellidos}}<br/>
          <small>{{usuario.correo}}</small>
        </h4>
      </a>
    </div>
    <div slot="footer" class="text-center d-flex justify-content-center">
      <button href="#" class="btn btn-simple"><i class="fa fa-facebook-square"></i></button>
      <button href="#" class="btn btn-simple"><i class="fa fa-twitter"></i></button>
      <button href="#" class="btn btn-simple"><i class="fa fa-google-plus-square"></i></button>
    </div>
  </card>
</div>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import axios from 'axios'
export default {
  data() {
    return {
    usuario:{}
    }
  },
  async mounted(){
    await this.listarDatos()
  },
  components: {
    Card
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3
      if (remainder === 0) {
        return 'col-md-3 col-md-offset-1'
      } else if (remainder === 2) {
        return 'col-md-4'
      } else {
        return 'col-md-3'
      }
    },
    listarDatos(){
      axios.get("http://localhost:3000/verUsuario/"+1)
      .then((respuesta) => {
       this.usuario = respuesta.data  
      })
      .catch((err) => {
        alert("error del servidor")
      })
      .finally(()=>{
      })
    },
  }
}

</script>
<style></style>
