<template>
  <div class="container-xxl ">
    <div class="row">
      <b-card class="">

        <template #header>
          <h3>Editar Oferta</h3><br>
          <div class="col-10 d-flex justify-content-center">
            <img
              src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
              rounded img-top alt="" class="w-50"><br><br>
          </div>
          
          <div class="col-11">
            <base-input type="text" label="Categoria" placeholder="elija una categoria"
              v-model="ofertas.id_categoria"></base-input>
          </div>
          <br>
          <div class="col-11">
            <base-input type="text" label="Titulo" placeholder="elija una titulo" v-model="ofertas.titulo"></base-input>
          </div>
          <br>
          <div class="col-11">
                    <base-input type="email" label="Correo Electronico" placeholder="digite el correo electronico"
                        v-model="ofertas.correo"></base-input>
                </div>
          <div class="col-11">
            <label for="">Descripcion</label>
            <b-form-textarea label="Descripcion" placeholder="Se permite al menos 500 caracteres"
              v-model="ofertas.descripcion"> </b-form-textarea>
          </div>
          <br>
          <div class="col-11">
                    <base-input type="number" label="Numero de celular" placeholder="digite en numero de contacto"
                        v-model="ofertas.celular"></base-input>
                </div>
          <div class="col-11">
            <base-input type="text" label="Salario" placeholder="$" v-model="ofertas.salario"></base-input>
          </div>
          <br>
          <div class="col-11">
            <base-input type="text" label="ubicacion" placeholder="digite la ubicacion"
              v-model="ofertas.ubicacion"></base-input>
          </div>
          <br>
          <div class="col-11">
            <base-input type="text" label="Duracion del Empleo" placeholder=""
              v-model="ofertas.duracion"></base-input>
          </div>
          <br>
        </template>
        <b-button v-on:click="editar()" variant="primary" class="m-1 col-5"><b-icon icon="check2"></b-icon>Actualizar</b-button>
        <b-button  variant="danger" class="m-1 col-5"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'EditarOferta',
  data() {
    return {
      usuariols: {},
      ofertas: {
        id_ofertaEmpleo: null,
        id_categoria: "",
        titulo: "",
        correo:"",
        celular:"",
        descripcion: "",
        salario: "",
        ubicacion: "",
        duracion: "",
        id_usuario: null
      }
    }
  },
  components: {
  },
  created() {
    this.usuariols = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.usuariols);
  },
  async mounted() {
    this.ofertas.id_ofertaEmpleo = this.$route.params.id_ofertaEmpleo
    await this.obtenerOfertaempleo()
  },
  methods: {
    obtenerOfertaempleo() {
      this.ofertas.id_usuario = this.usuariols.id_usuario
      axios.get("http://localhost:3000/ofertaEmpleo/" + this.ofertas.id_ofertaEmpleo)
        .then((res) => {
          this.ofertas = res.data;
        })
        .catch((err) => {//500
          alert("error del servidor")
        })
    },
    editar() {
   
      axios.put("http://localhost:3000/editarOfertaEmpleo/" + this.ofertas.id_ofertaEmpleo, this.ofertas)
        .then(response => {
          console.log(response);
          this.$router.push("/admin/OfertasEmpleo")
        })
        .catch((err) => {
          alert("problemas del servidor no se actualizo")
        })
    }
  }

}
</script>