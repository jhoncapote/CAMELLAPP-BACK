<template>
    <div class="container d-flex justify-content-center ">
        
        <div class="row">
            <div class="col ">
                <div>
                    <b-input-group><template #append>
                            <b-button>
                                <b-icon icon="search"></b-icon>
                            </b-button>
                        </template>
                        <b-form-input></b-form-input><template #prepend>
                            <div>
                                <b-dropdown>
                                    <template #button-content>
                                        <b-icon icon="filter" aria-hidden="true"></b-icon> Filtro
                                    </template>
                                    <b-dropdown-item v-for="categoria in listarCategoria" :key="categoria.id_categoria">{{
                                        categoria.nombre }}

                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </template>
                    </b-input-group>
                </div>
                <br>
                <!--aqui termina la barra de busqueda-->
            </div>
        </div>
        <div class="col-12">
            <h3>Ofertas de Empleo</h3>
        </div>

        <div class="row">
            <div v-if="show === 'VerDetalleOfertas'">
                <DetalleOferta />
            </div>
            <div class="row" v-else-if="show === 'Ofertas'">
                <!--start card-->
                <div v-for="ofertaEmpleo in listaOfertaEmpleo" :key="ofertaEmpleo.id_ofertaEmpleo" class="d-flex w-50">
                    <router-link class="btn border border-0 m-5"
                        :to="{ name: 'VerDetalleOfertas', params: { id_ofertaEmpleo: ofertaEmpleo.id_ofertaEmpleo } }">

                        <div :title="ofertaEmpleo.titulo" img-alt="Image" img-top tag="article" style="max-width: 25rem;"
                            class="card my-0">
                            <b-card-text>{{ ofertaEmpleo.categorium.nombre }}</b-card-text>
                            <b-card-text class="d-flex m-2">{{ ofertaEmpleo.id_ofertaEmpleo }}:
                                {{ ofertaEmpleo.titulo }}</b-card-text>
                            <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                                alt="">
                            <b-card-text>{{ ofertaEmpleo.descripcion }}</b-card-text>
                            <b-button href="VerDetalleOferta" variant="info" class="m-1">Aplicar a esta
                                oferta</b-button>
                        </div>
                    </router-link>
                </div>
                <!--end card-->
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import Card from 'src/components/Cards/Card.vue'
export default {
    name: 'VerDetalleOfertas',
    data() {
        return {
            // reload:true,
            listaOfertaEmpleo: {},
            listarCategoria: {},
            id_ofertaEmpleo: null,
            show: 'Ofertas',
        }
    },
    components: {
        Card
    },
    async mounted() {
        await this.MostrarOfertas()
    },
    methods: {
        // window.location.reload()
        MostrarOfertas() {
            axios.get("http://localhost:3000/consultarofertaXcategoria/").then(response => {
                this.listaOfertaEmpleo = response.data
            });
            axios.get("http://localhost:3000/listarCategoria/")
                .then(response => {
                    this.listarCategoria = response.data
                });
        },
        // recargarp() {
        //     window.location.reload()
        // }
    }
}
</script>