<template>
    <div>
        <div class="container">
            <div class="row">
                <h2 class="m-2">CAMELLAPP</h2>
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
                                        <b-dropdown-item v-for="categoria in listarCategoria" :key="categoria.id"
                                            :title="categoria.descripcion">{{ categoria.nombre }}</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </template>
                        </b-input-group>
                    </div>
                    <br>
                    <!--aqui termina la barra de busqueda-->
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
                            :to="{ name: 'DetalleOfertas', params: { id_ofertaEmpleo: ofertaEmpleo.id_ofertaEmpleo } }">
                            <div :title="ofertaEmpleo.titulo" img-alt="Image" img-top tag="article"
                                style="max-width: 25rem;" class="displey-flex card my-0">
                                <b-card-text class="d-flex m-2">{{ ofertaEmpleo.id_ofertaEmpleo }}.
                                    {{ ofertaEmpleo.titulo }}</b-card-text>
                                <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                                    alt="">
                                <b-card-text>{{ ofertaEmpleo.descripcion }}</b-card-text>
                                <b-button href="DetalleOferta" variant="info" class="m-1">Aplicar a esta oferta</b-button>
                                <!-- <b-button variant="info" class="m-1"><b-icon icon="pencil"></b-icon> Editar</b-button> -->
                                <br>
                                <!-- <router-link class="btn" :to="{path:`detalleOferta${ofertaEmpleo.id_ofertaEmpleo}`}">ver</router-link> -->


                                <!-- <template #footer>
                                <small class="text-muted">Last updated 3 mins ago</small>
                                </template> -->
                            </div>
                        </router-link>
                    </div>
                    <!--end card-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from "axios"
import Card from 'src/components/Cards/Card.vue'
export default {
    name: 'OfertasEmpleo',
    data() {
        return {
            id_ofertaEmpleo: null,
            listaOfertaEmpleo: [],
            listarCategoria: null,
            show: 'Ofertas'
        }
    },
    components: {
        Card
    },
    mounted() {
        axios.get("http://localhost:3000/listarOfertaEmpleo/").then(response => {
            this.listaOfertaEmpleo = response.data
        });
    },
    methods: {
        eliminar() {
            axios.delete("http://localhost:3000/eliminarOfertaEmpleo/" + this.id_ofertaEmpleo,)
                .then(response => {
                    console.log(response.data)
                    // Swal.fire({
                    //     title: 'Are you sure?',
                    //     text: "You won't be able to revert this!",
                    //     icon: 'warning',
                    //     showCancelButton: true,
                    //     confirmButtonColor: '#3085d6',
                    //     cancelButtonColor: '#d33',
                    //     confirmButtonText: 'Yes, delete it!'
                    // }).then((result) => {
                    //     if (result.isConfirmed) {
                    //         Swal.fire(
                    //             'Deleted!',
                    //             'Your file has been deleted.',
                    //             'success'
                    //         )
                    //     }
                    // })

                })
        }
    }
}
</script>