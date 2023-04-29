<!-- <template>
    <div class="container">
        <div class="col-2 d-flex align-self-start">
            <b-button @click="goBack"><b-icon icon="arrow-left" class="mx-2"></b-icon> Regresar</b-button>
        </div>
        <div class="row d-flex justify-content-center">

            <div class="col-11">
                <h2>Perfil</h2><br>
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
                        <h3>{{ usuario.id_usuario }}- </h3>
                        <hr>
                        <h4 class="d-flex align-items-baseline">Nombres : {{ usuario.nombres }}</h4>
                        <h4 class="d-flex align-items-baseline">Apellidos : {{ usuario.apellidos }}</h4>
                        <h4 class="d-flex align-items-baseline">Celular: {{ usuario.telefono }}</h4>
                        <h4 class="d-flex align-items-baseline">Correo Electronico : {{ usuario.correo}}</h4>
                        <h4 class="d-flex align-items-baseline">Direccion : {{ usuario.direccion}}</h4>
                        <h4 class="d-flex align-items-baseline">Nacionalidad : {{ usuario.nacionalidad}}</h4>

                    </div>

                    <hr>

                </div>
                <div>
                    <div class="row  d-flex justify-content-center  ">
                        <router-link class="btn btn-primary  col-3 "
                            :to="{ name: 'EditarExperiencias', params: { id_usuario: usuario.id_usuario } }">Actualizar</router-link>
                        <div class="col-5"> <b-button v-on:click="" variant="danger"
                                class="mx-1">Eliminar Experiencia</b-button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'Detalleperfil',
    data() {
        return { 
            usuariols: {},
            usuario: {},
            id_usuario:null,

        }
    },
    created() {
        this.usuariols = JSON.parse(localStorage.getItem('usuario'));
        console.log(this.usuariols);
    },
    async mounted() {
        this.id_usuario = this.$route.params.id_usuario
        await this.listarDatos()
    },
    methods: {

        listarDatos() {
            this.id_usuario = this.usuariols.id_usuario
            axios.get("http://localhost:3000/verUsuario/" + this.id_usuario)
                .then((res) => {
                    this.usuario = res.data
                   
                })
                .catch((err) => {//500
                    alert("error del servidor")
                })
        },
    }
}     -->