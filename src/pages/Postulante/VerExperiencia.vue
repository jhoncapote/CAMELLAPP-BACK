<template>
    <div class="container">
            <div class="row"><br>
                <h3 class="col-7 ">Experiencia</h3><br>
                <div class="col-5 d-flex justify-content-end">
                    <router-link :to="{ path: '/admin/Experiencia' }" class="d-flex justify-content-center">
                        <b-card class="btn w-100">
                            <b-card-text> <b-icon icon="plus-circle-dotted"></b-icon> Añadir Experiencia</b-card-text></b-card>
                    </router-link>
                </div>
            </div>
            <div v-if="show === 'DetalleExperiencia'">
                <DetalleExperiencia />
            </div>
            <div class="row" v-else-if="show === 'Experiencia'">
                <div v-for="experiencia in ListarExperiencia" :key="experiencia.id_experiencia"
                    >
                    <router-link style="color: rgb(117, 115, 119);" :to="{ name: 'Detalleexperiencia', params: { id_experiencia: experiencia.id_experiencia } }">
                        <b-card >
                            <div class="row" >
                                <div class="col-8">
                                    <b-card-body>
                                        <h3>{{ experiencia.titulo }}</h3>
                                        <hr>
                                        <h5>LUGAR DE TRABAJO :{{ experiencia.lugarDeTrabajo }} </h5>
                                        <h5>DESCRIPCION: {{ experiencia.descripcion }} </h5>
                                        <h5> EXPERIENCIA DEL TRABAJO : {{ experiencia.experienciaDeTrabajo }} </h5>

                                    </b-card-body><br>
                                    <div class="row  d-flex justify-content-center  ">
                                        <router-link class="btn btn-primary  col-6 "
                                            :to="{ name: 'Detalleexperiencia', params: { id_experiencia: experiencia.id_experiencia } }">Ver
                                            Experiencia</router-link><br>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <b-card-img
                                        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYRA6SJJXNCSNIWPTRXDJW2ABI.jpg"
                                        alt="Image" class="rounded-0" style="height: 100%;"></b-card-img>
                                </div>
                            </div>
                        </b-card>
                    </router-link>
                </div>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'VerExperiencias',
    data() {
        return {
            id_experiencia: null,
            ListarExperiencia: [],
            show: 'Experiencia',
        }
    },
    components: {
    },
    mounted() {
        axios.get("http://localhost:3000/ListarExperiencia/").then(response => {
            this.ListarExperiencia = response.data
        })
    }

}
</script>