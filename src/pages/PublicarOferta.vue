<template >
    <div class="container-fluid">
        <b-card>
            <template #header>
                <div class="col-10 d-flex justify-content-center">
                    <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                        rounded img-top alt="" class="w-50"><br><br>
                </div>
                <div class="col-11">
                    <base-input type="text" label="Categoria" placeholder="elija una categoria"
                        v-model="ofertaEmpleo.categoria"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="Titulo" placeholder="elija una titulo"
                        v-model="ofertaEmpleo.titulo"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <label for="">Descripcion</label>
                    <b-form-textarea label="Descripcion" placeholder="Se permite al menos 500 caracteres"
                        v-model="ofertaEmpleo.descripcion"> </b-form-textarea>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="Salario" placeholder="$" v-model="ofertaEmpleo.salario"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="ubicacion" placeholder="digite la ubicacion"
                        v-model="ofertaEmpleo.ubicacion"></base-input>
                </div>
                <br>
                <div class="col-11">
                    <base-input type="text" label="tipoDeContrato" placeholder="tipoDeContrato"
                        v-model="ofertaEmpleo.tipoDeContrato"></base-input>
                </div>
                <br>
            </template>

            <b-button v-on:click="publicarOferta()" variant="primary" class="m-1 col-5"><b-icon
                    icon="check2"></b-icon>Publicar Oferta</b-button>
            <b-button href="#" variant="danger" class="m-1 col-5"><b-icon icon="x-circle"></b-icon> Cancelar</b-button>
        </b-card>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "PublicarOferta",
    data() {
        return {
            ofertaEmpleo: {
                titulo: null,
                salario: null,
                descripcion: null,
                ubicacion: null,
                tipoDeContrato: null,
                id_categoria: null,
                id_usuario: 1,
            },
            num: null,
            selected: null,
        };
    },

    methods: {
        publicarOferta() {
            // Asignar el valor seleccionado al campo id_categoria en ofertaEmpleo
            this.ofertaEmpleo.id_categoria = this.selected;
            // Realizar una solicitud POST a la API con los datos del formulario
            axios
                .post("http://localhost:3000/guardarOfertaEmpleo", this.ofertaEmpleo)
                .then((response) => {
                    // Manejar la respuesta de la API si es necesario
                    console.log(response.data);
                    console.log('Oferta Publicada Exitosamente!!!')
                    // Otros pasos a seguir después de enviar la oferta
                })
                .catch(error => {
                    // Manejar errores si es necesario
                    console.error(error);
                });
        },
    },
};
</script>