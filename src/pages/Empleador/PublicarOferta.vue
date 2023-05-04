<template >
    <div class="container-fluid ">
        <h3>Publicar Oferta</h3>
        <b-card class=" d-flex justify-content-center ">
            <template #header>

                <div class="col-10 d-flex justify-content-center">
                    <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                        rounded img-top alt="" class="w-50"><br><br>
                </div>
                <div class="row d-flex ">
                    <div class="col-11">
                        <label for="">Selecciona una categoria</label><br>
                        <select class="btn w-100" v-model="selected">
                            <option :value="1">Ayudante general</option>
                            <option :value="2">Construcción</option>
                            <option :value="3">Servicios de soldadura</option>
                            <option :value="4">Plomería</option>
                            <option :value="5">Servicio de instalación eléctrica</option>
                            <option :value="6">Pintado de paredes y techos</option>
                            <option :value="7">Arreglos y mantenimientos del Hogar</option>
                            <option :value="8">Recogida de basura</option>
                            <option :value="9">Servicios de Jardineria</option>
                            <option :value="10">Diseño y presupuesto</option>
                            <option :value="11">Otra</option>
                        </select>
                    </div>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="Titulo" placeholder="elija una titulo"
                        v-model="ofertaEmpleo.titulo"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <label for="">Descripcion</label>
                    <b-form-textarea label="Descripcion" placeholder="Se permite al menos 500 caracteres"
                        v-model="ofertaEmpleo.descripcion"> </b-form-textarea>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="number" label="Numero de celular" placeholder="digite en numero de contacto"
                        v-model="ofertaEmpleo.celular"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="number" label="Salario" placeholder="$" v-model="ofertaEmpleo.salario"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="ubicacion" placeholder="digite la ubicacion"
                        v-model="ofertaEmpleo.ubicacion"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="tipoDeContrato" placeholder="tipoDeContrato"
                        v-model="ofertaEmpleo.tipoDeContrato"></base-input>
                </div>
                
            </template>
            <hr>
            <br>
           <div class="col-12 d-flex justify-content-center">
            <b-button v-on:click="publicarOferta()" variant="primary" class="m-1 col-3"><b-icon
                    icon="check2"></b-icon>Publicar Oferta</b-button>
            <b-button href="#" variant="danger" class="m-1 col-3"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
            </div>
        </b-card>
    </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: "PublicarOferta",
    data() {
        return {
            usuariols: {},
            ofertaEmpleo: {
                titulo: "",
                salario: "",
                descripcion: "",
                celular:"",
                ubicacion: "",
                tipoDeContrato: "",
                id_categoria: "",
                id_usuario: null,
            },
            num: null,
            selected: null,
        };
    },
    mounted() {
        this.usuariols = JSON.parse(localStorage.getItem('usuario'))
        // this.usuariols = JSON.parse(localStorage.getItem('respuesta'));
    },
    methods: {
        publicarOferta() {
            // Asignar el valor seleccionado al campo id_categoria en ofertaEmpleo
            this.ofertaEmpleo.id_categoria = this.selected;
            this.ofertaEmpleo.id_usuario = this.usuariols.id_usuario
            console.log(this.ofertaEmpleo);
            Swal.fire({
                title: 'Estas seguro',
                text: "de guardar es oferta!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post("http://localhost:3000/guardarOfertaEmpleo", this.ofertaEmpleo)
                    Swal.fire(
                        'Guardar',
                        'se a guardado con exito',
                        'success',
                        this.$router.push("/admin/OfertasEmpleo")
                    )
                }
            }).catch(error => {
                    // Manejar errores si es necesario
                    console.error(error);
                });
        },
    },
};
</script>