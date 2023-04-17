<template>
    <div class="container">
        <div class="row">
            <div class="col-2 d-flex align-self-start">
                <b-button @click="goBack"><b-icon icon="arrow-left" class="mx-2"></b-icon> Regresar</b-button>
            </div>
            <div class="col-6">

                <h3>Informacion Personal</h3><br>
                <b-img rounded
                    src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                    class="w-100"></b-img>
                <img img-left class="w-100" alt="">
            </div>4


            <div class="col-12">

                <h3 class="d-flex align-items-baseline">{{ oferta.id_ofertaEmpleo }}.{{ oferta.titulo }}</h3><br>
                <h6 class="d-flex align-items-baseline">{{ oferta.descripcion }}</h6><br>
                <h6 class="d-flex align-items-baseline">Direccion: {{ oferta.ubicacion }}</h6><br>
                <h6 class="d-flex align-items-baseline">Salario: ${{ oferta.salario }}</h6><br>
                <h6 class="d-flex align-items-baseline">Duracion: {{ oferta.tipoDeContrato }}</h6><br>
            </div>

        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'DetalleOferta',
    data() {
        return {
            oferta: {},
            idOferta: null
        }
    },
    components: {
    },
    async mounted() {
        this.idOferta = this.$route.params.id
        await this.verDetalleOferta()
    },
    methods: {
        verDetalleOferta() {
            axios.get("http://localhost:3000/ofertaEmpleo/" + this.idOferta)
                .then((respuesta) => {
                    // console.log(respuesta.data);
                    this.oferta = respuesta.data
                })

                .catch((err) => {//500
                    alert("error del servidor")
                })
                .finally(() => { })
        },
        goBack() {
            window.history.back();
        }
    }
}
</script>