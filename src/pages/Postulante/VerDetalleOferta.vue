<template>
    <div class="container">
        <div class="row">
            <div class="col-2 d-flex align-self-start">
                <b-button @click="goBack"><b-icon icon="arrow-left" class="mx-2"></b-icon> Regresar</b-button>
            </div>
            <div class="col-11">
                <h2>Detalles</h2><br>
                <div class="row">
                    <div class="col-11">
                        <div class="col-5">
                            <b-img rounded
                                src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                                class="w-100"></b-img>
                            <img img-left class="w-100" alt="">
                        </div>
                        <hr>
                        <h3 class="d-flex align-items-baseline">
                            <h3>{{ oferta.id_ofertaEmpleo }}: </h3>Titulo: {{ oferta.titulo }}
                        </h3>
                        <hr>
                        <h4 class="d-flex align-items-baseline">Descripcion : {{ oferta.descripcion }}</h4>
                        <h4 class="d-flex align-items-baseline">Direccion : {{ oferta.ubicacion }}</h4>
                        <h4 class="d-flex align-items-baseline">Salario : ${{ oferta.salario }}</h4>
                        <h4 class="d-flex align-items-baseline">Duracion : {{ oferta.tipoDeContrato }}</h4>
                    </div>
                </div>
                <hr>
                <div class="d-flex justify-content-center ">
                    <b-button class="col-4" variant="primary" v-on:click="Aplicaroferta()">Aplicar a la Oferta</b-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import Swal from 'sweetalert2'
export default {
    name: 'VerDetalleOfertas',
    data() {
        return {
            usuariols: {},
            
            oferta: {},
            id_usuario: "",
            id_ofertaEmpleo: null,

            postulacion: {
                id_usuario: "",
                id_ofertaEmpleo: "",
                estado: "activo",
            },
        }
    },
    created() {
        this.usuariols = JSON.parse(localStorage.getItem('usuario'));
    },
    async mounted() {
        this.id_ofertaEmpleo = this.$route.params.id_ofertaEmpleo
        // this.oferta = this.id_ofertaEmpleo
        await this.verDetalleOferta()
    },
    methods: {
        verDetalleOferta() {
            axios.get("http://localhost:3000/ofertaEmpleo/" + this.id_ofertaEmpleo)
                .then((res) => {
                    // console.log(respuesta.data);
                    this.oferta = res.data
                })
                .catch((err) => {//500
                    alert("error del servidor")
                })
        },
        goBack() {

            window.history.back();
        },
        Aplicaroferta() {
            this.postulacion.id_usuario = this.usuariols.id_usuario
            this.postulacion.id_ofertaEmpleo = this.id_ofertaEmpleo
            this.id_usuario = this.usuariols.id_usuario
            Swal.fire({
                title: 'Estas seguro ?',
                text: "de postularse a esta oferta!",
                icon: 'advertencia',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡dale click para postularse !'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post("http://localhost:3000/guardarPostulacion/", this.postulacion)
                    Swal.fire(
                        '¡se ha postulado correctamente!',
                        'postulacion fue correcta',
                        'éxito'
                    )
                }
            })
        }
    }
}
</script>