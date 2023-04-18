<template >
    <div class="container-fluid">
        
            <div class="row">
                <b-card>                    <template #header>
                    <div class="d-flex justify-content-center">
                        <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                         alt="" class="w-50 d-flex justify-content-center"
                        >
                    </div><br><br>
                        <div class="row">
                            <div class="col-11">
                                <b-input-group >
                                    <template #prepend>
                          <b-dropdown text="Seleccione una categoría" variant="secondary" >
                            <b-dropdown-item @click="cat = c.id_categoria; nom = c.nombre" v-for="c in categorias" :key="c.id">{{c.nombre}}</b-dropdown-item>
                          </b-dropdown>
                                </template>
                                    <b-form-input style="max-width: 5%;" :value="cat" id="id_categoria" name="id_categoria" :v-model="ofertaEmpleo.id_categoria" >{{cat}}</b-form-input>
                                    <b-form-input v-model="nom">{{nom}}</b-form-input>
                                </b-input-group>
                            </div><br>
                        </div>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="Titulo" placeholder="Escriba un titulo" v-model="ofertaEmpleo.titulo"></base-input>
                            </div>
                            </div>
                        <div class="row d-flex">
                            <div class="col-11">
                               <label for="">Descripcion</label>
                                <b-form-textarea   label="Descripcion" placeholder="Se permite al menos 500 caracteres"
                                    v-model="ofertaEmpleo.descripcion" > </b-form-textarea>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="Salario" placeholder="$" v-model="ofertaEmpleo.salario"></base-input>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="ubicacion" placeholder="Escriba su ubicacion" v-model="ofertaEmpleo.ubicacion"></base-input>
                            </div>
                        </div>
                        <br>
                        <div class="row d-flex">
                            <div class="col-11">
                                <base-input type="text" label="Duracion del trabajo" placeholder="Duracion del trabajo" v-model="ofertaEmpleo.tipoDeContrato"></base-input>
                            </div>
                        </div>
                        <br>
                    </template>

                    <b-button v-on:click="publicarOferta()" variant="primary" class="m-1"><b-icon icon="check2"></b-icon>
                        Publicar Oferta</b-button>
                    <b-button href="#" variant="danger" class="m-1"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
                </b-card>
            </div>
        
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "PublicarOferta",
    data() {
        return {
            ofertaEmpleo: {
                titulo: "",
                salario: "",
                descripcion: "",
                ubicacion: "",
                tipoDeContrato: "",
                id_categoria : "",
                id_usuario: 1
            },
            categoria: '',
            categorias: [],
            selectedCategoriaId: null,
            id_categoria: null,
            cat: null,
            nom: ''
        };
    },

    methods: {
        publicarOferta() {
            //   user = localStorage.getItem("usuario")
            //   user.id
            axios.post("http://localhost:3000/guardarOfertaEmpleo", this.ofertaEmpleo)
                .then((data) => {
                    alert("Tu oferta se ha publicado exitosamente!")
                    console.log(data);
                })},
    },
    mounted(){
  axios.get("http://localhost:3000/listarCategoria/")
    .then(response => {
      this.categorias = response.data;
      this.selectedCategoriaId = this.categorias[0].id;
//       response.data.forEach((dato) => {
//   console.log(dato.id_categoria);
// });
  });
 }
};
</script>