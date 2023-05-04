<template>
    <div class="container">
        <div class="col-2 d-flex align-self-start">
            <b-button @click="goBack"><b-icon icon="arrow-left" class="mx-2"></b-icon> Regresar</b-button>
        </div>
        <div class="row d-flex justify-content-center">

            <div class="col-11">
                <h2>Experiencia</h2><br>
                <hr>
                <div class="row">
                    <div class="col-11">

                        <div class="col-5 ">
                            <b-img rounded
                                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYRA6SJJXNCSNIWPTRXDJW2ABI.jpg"
                                class="w-100"></b-img>
                            <img img-left class="w-100" alt="">

                        </div>
                        <hr>
                        <h3 class="d-flex align-items-baseline">
                            <h3>{{ experiencia.id_experiencia }}- </h3>{{ experiencia.titulo }}
                        </h3>
                        <hr>
                        <h4 class="d-flex align-items-baseline">Descripcion : {{ experiencia.descripcion }}</h4>

                        <h4 class="d-flex align-items-baseline">Lugar De Trabajo : {{ experiencia.lugarDeTrabajo }}</h4>
                        <h4 class="d-flex align-items-baseline">experiencia De Trabajo : {{ experiencia.experienciaDeTrabajo
                        }}</h4>

                    </div>

                    <hr>

                </div>
                <div>
                    <div class="row  d-flex justify-content-center  ">
                        <router-link class="btn btn-primary  col-3 "
                            :to="{ name: 'EditarExperiencias', params: { id_experiencia: experiencia.id_experiencia } }">Actualizar
                        </router-link>
                        
                        <div class="col-5"> <b-button v-on:click="eliminarExperiencia()" variant="danger"
                                class="mx-1">Eliminar Experiencia</b-button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import Swal from 'sweetalert2'
export default {
    name: 'Detalleexperiencia',
    data() {
        return {
            experiencia: {},
            id_experiencia: null,
        }
    },
    components: {
    },
    async mounted() {
        this.id_experiencia = this.$route.params.id_experiencia
        await this.verDetalleExperiencia()
    },
    methods: {
        verDetalleExperiencia() {
            axios.get("http://localhost:3000/experiencia/" + this.id_experiencia)
                .then((res) => {
                    // console.log(respuesta.data);
                    this.experiencia = res.data
                })
                .catch((err) => {//500
                    alert("error del servidor")
                })
                .finally(() => { })
        },
        goBack() {
            window.history.back();
        },
        eliminarExperiencia() {
            // alert("hahaha")
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
                    axios.delete("http://localhost:3000/eliminarExperiencia/" + this.id_experiencia)
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