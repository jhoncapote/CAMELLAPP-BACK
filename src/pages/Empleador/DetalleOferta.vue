<template>
    <div class="container">
        <div class="col-2 d-flex align-self-start">
            <b-button @click="goBack"><b-icon icon="arrow-left" class="mx-2"></b-icon> Regresar</b-button>
        </div>
        <div class="row">
            <div class="col-12">
                <h2>Detalles</h2><br>
                <div class="row">
                    <div class="col-7">
                        <h3 class="d-flex align-items-baseline">
                            <h3>{{ oferta.id_ofertaEmpleo }}-</h3>{{ oferta.id_categoria }}
                        </h3>
                        <h5 class="d-flex align-items-baseline">Titulo : {{ oferta.titulo }}</h5>
                        <h5 class="d-flex align-items-baseline">Descripcion : {{ oferta.descripcion }}</h5>
                        <h5 class="d-flex align-items-baseline">Direccion : {{ oferta.ubicacion }}</h5>
                        <h5 class="d-flex align-items-baseline">Salario : $ {{ oferta.salario }}</h5>
                        <h5 class="d-flex align-items-baseline">Duracion: {{ oferta.tipoDeContrato }}</h5>
                    </div>
                    <div class="col-5">
                        <br>
                        <b-img rounded
                            src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                            class="w-100"></b-img>
                        <img img-left class="w-100" alt="">
                        <div class="row  d-flex justify-content-center">
                            <router-link class="btn btn-info col-5 "
                                :to="{ name: 'EditarOferta', params: { id_ofertaEmpleo: oferta.id_ofertaEmpleo } }">Actualizar
                            </router-link>
                            <div class="col-5">
                                <b-button v-on:click="eliminar()" variant="danger" class="mx-1">EliminarOferta</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <h4>Postulados</h4>

        <div v-for="postulacion in oferta.postulaciones" :key="postulacion.id_postulaciones" >
            <div  style="width: 100%; height: 30%;">
                <b-card class=" row">
                    <div class="4">
                        <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                        style="width: 30%; height: 50%; border-radius: 130%;" alt="">
                    </div>
                    <div class="col-6 ">
                        <b-card-text>{{ }}</b-card-text>
                        <b-card-text>{{ postulacion.estado }}</b-card-text>
                        <b-card-text>{{ postulacion.fecha }}</b-card-text>
                    </div>
                    <div class=" row">
                        <b-button variant="info" class="mx-1">Contratar</b-button>
                        <b-button variant="danger" class="mx-1">Eliminar</b-button>
                    </div>

                </b-card><br>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import Swal from 'sweetalert2'
export default {
    name: 'DetalleOfertas',
    data() {
        return {
            oferta:{},
            id_ofertaEmpleo: null,
            id_postulaciones: null,
            id_usuario: null,
        }
    },
    components: {
    },
    async mounted() {
        this.id_ofertaEmpleo = this.$route.params.id_ofertaEmpleo
        await this.verOfertas()
    },
    methods: {
        // DetalleOferta() {
        //     axios.get("http://localhost:3000/ofertaEmpleo/" + this.id_ofertaEmpleo)
        //         .then((respuesta) => {
        //             // console.log(respuesta.data);
        //             this.oferta = respuesta.data
        //         })
        //         .catch((err) => {//500
        //             alert("error del servidor")
        //         })
        //         .finally(() => { })
        // },
        goBack() {
            window.history.back();
        },
        verOfertas() {

            axios.get("http://localhost:3000/consultarpostulanteXoferta/" + this.id_ofertaEmpleo)
                .then((respuesta) => {
                    this.oferta = respuesta.data
                })
        },
        eliminar() {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: 'Estas seguro ?',
                text: "Esto se eliminara definitivo!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, estoy seguro!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete("http://localhost:3000/eliminarOfertaEmpleo/" + this.id_ofertaEmpleo)
                    swalWithBootstrapButtons.fire(
                        'Eliminado!',
                        'Se elimino con exito.',
                        'success'
                    )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'No se eliminara :)',
                        'error'
                    )
                }
            })

        }

    }

}

</script>