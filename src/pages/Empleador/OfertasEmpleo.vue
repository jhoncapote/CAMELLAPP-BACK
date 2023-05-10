<template>

        <div class="container"><br>
            <div class="row">
                <div class="col">
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
                                         <b-dropdown-item v-for="categoria in listarCategoria"
                                            :key="categoria.id_categoria">{{ categoria.nombre }}</b-dropdown-item> 
                                    </b-dropdown>
                                </div>
                            </template>
                        </b-input-group>
                    </div>
                    <br>
                    <!--aqui termina la barra de busqueda-->
                </div>
            </div>
            <div class="row"><br>
                <h2 class="col-7 ">Mis Ofertas</h2><br>
                <div class="col-5 d-flex justify-content-end">
                    <router-link :to="{ path: '/admin/PublicarOferta' }" class="d-flex justify-content-center ">
                        <b-card class="btn w-100">
                            <b-icon icon="plus-circle-dotted"></b-icon>
                            <b-card-text>Añadir Oferta De Empleo</b-card-text></b-card>
                    </router-link>
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div v-if="show === 'DetalleOferta'">
                    <DetalleOferta />
                </div>
                <div class="row" v-else-if="show === 'Ofertas'">
                    <!--start card-->

                    <div v-for="ofertaEmpleo in listaOfertaEmpleo" :key="ofertaEmpleo.id_ofertaEmpleo" class="d-flex w-50">
                        <router-link class="btn border border-0 m-5"
                            :to="{ name: 'DetalleOfertas', params: { id_ofertaEmpleo: ofertaEmpleo.id_ofertaEmpleo}}">

                            <div img-alt="Image" img-top tag="article" style="max-width: 25rem;"
                                class="displey-flex card my-0">
                               
                                <b-card-text> {{ ofertaEmpleo.categorium.nombre }}</b-card-text>
                                <b-card-text class="d-flex m-2">{{ ofertaEmpleo.id_ofertaEmpleo }}.{{ ofertaEmpleo.titulo
                                }}</b-card-text>
                                <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                                    alt="">
                                <b-card-text>{{ ofertaEmpleo.descripcion }}</b-card-text>

                                <b-button href="DetalleOferta" variant="info" class="m-1">Ver Oferta</b-button>
                                <br>
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
    name: 'OfertasEmpleo',
    data() {
        return {
              id_ofertaEmpleo: null,
            listaOfertaEmpleo: {},
             listarCategoria: {},
            id_categoria:null,
            id_usuario:null,
            show: 'Ofertas'
        }
    },
    components: {
        Card
    },
    async mounted() {
        this.id_ofertaEmpleo = this.$route.params.id_ofertaEmpleo
        await this.ofertas()
        
    },
    methods: {
        ofertas() {
            axios.get("http://localhost:3000/listarOfertaEmpleo/")
                .then(res => {
                    this.listaOfertaEmpleo = res.data
                });

            axios.get("http://localhost:3000/listarCategoria/")
                .then(res => {
                    this.listarCategoria = res.data
                });
        },
        // VerCategoria() {
            
        //     axios.get("http://localhost:3000/consultarOfertaXcategoria/" + this.id_ofertaEmpleo )
        //         .then(responde => {
                     
        //             // this.categoriaXid = responde.data
                
        //         });
        // }

    },
}
</script>