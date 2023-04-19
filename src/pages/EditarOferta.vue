<template>
  <div class="container">
    <div class="row">

      <b-card>
        <template #header>
          <div class="col-10 d-flex justify-content-center">
            <img
              src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
              rounded img-top alt="" class="w-50"><br><br>
          </div>
          <div class="col-11">
            <base-input type="text" label="Categoria" placeholder="elija una categoria"></base-input>
          </div>
          <br>
          <div class="col-11">
            <base-input type="text" label="Titulo" placeholder="elija una titulo" v-model="ofertas.titulo"></base-input>
          </div>
          <br>
          <div class="col-11">
            <label for="">Descripcion</label>
            <b-form-textarea label="Descripcion" placeholder="Se permite al menos 500 caracteres"
              v-model="ofertas.descripcion"> </b-form-textarea>
          </div>
          <br>
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
            <base-input type="text" label="tipoDeContrato" placeholder="tipoDeContrato"
              v-model="ofertas.tipoDeContrato"></base-input>
          </div>
          <br>
        </template>

        <b-button v-on:click="editar()" variant="primary" class="m-1 col-5"><b-icon
            icon="check2"></b-icon>Actualizar</b-button>
        <b-button href="#" variant="danger" class="m-1 col-5"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
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

      ofertas: {
        titulo: "",
        descripcion: "",
        salario: "",
        ubicacion: "",
        tipoDeContrato: ""
      }
    }
  },
  components: {
  },
  async mounted() {
    await this.verDatos()
  },

  methods: {
    verDatos() {
      axios.get("http://localhost:3000/ofertaEmpleo/" + 1)
        .then((res) => {
          console.log(res.data);
          this.ofertas.titulo = res.data.titulo;
          this.ofertas.descripcion = res.data.descripcion;
          this.ofertas.salario = res.data.salario;
          this.ofertas.ubicacion = res.data.ubicacion;
          this.ofertas.tipoDeContrato = res.data.tipoDeContrato;

        })
        .catch((err) => {//500
          alert("error del servidor")
        })
    },

    editar() {
      axios.put("http://localhost:3000/editarOfertaEmpleo/" + 1)
        .then(res => {
          console.log(res.data)
        })
    }
  }

}
</script>