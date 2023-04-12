<template>
    <div class="container">
        <div class="container-fluid">
            <h2>experiencia</h2>
            <div v-for="experiencia in ListarExperiencia" class="d-flex justify-content-center">
                <b-card no-body class="my-4 overflow-hidden" style="max-width: 1540px;">
                    <b-row no-gutters>
                        <b-col md="7">
                            <b-card-body class="my-4">
                                <b-card-title
                                    class="d-flex">{{ experiencia.id_experiencia }}.{{ experiencia.titulo }}</b-card-title>
                                <b-card-sub-title class="d-flex">{{ experiencia.lugarDeTrabajo }}</b-card-sub-title><br>
                                <p class="d-flex">Descripcion: {{ experiencia.descripcion }}</p>
                                <p class="d-flex">Experiencia: {{ experiencia.experienciaDeTrabajo }}</p>
                            </b-card-body>
                        </b-col>
                        <b-col md="5">
                            <b-card-img
                                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYRA6SJJXNCSNIWPTRXDJW2ABI.jpg"
                                alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
  name:'VerExperiencia',
  data(){
    return{
      lista: null,
      ListarExperiencia: null,
      show: 'Ofertas' ,
      value1: null,
      value2: null
    }
  },
  components:{
},
mounted(){
    axios.get("http://localhost:3000/ListarExperiencia/").then(response=>{
      this.ListarExperiencia=response.data
    })
  },
}
</script>