<template >
    <div class="container-lg">
        <h3>Publicar Oferta</h3>
        <b-card>
                <div class="col-10 d-flex justify-content-center">
                    <img src="https://www.semana.com/resizer/JmiB52VJxZmk799j7D2CEeTZ1x4=/arc-anglerfish-arc2-prod-semana/public/R52D6MSO7ZB4DF3W4QM4LECYIA.jpg"
                        rounded img-top alt="" class="w-50"><br><br>
                </div><br>
                <div class="row d-flex ">
                    <div class="col-10">
                        <label for="">Selecciona una categoria</label><br>
                        <select class="btn w-100" v-model="selected">
                            <option :value="1">Ayudante general</option>
                            <option :value="2">Construcción</option>
                            <option :value="3">Servicios de soldadura</option>
                            <option :value="4">Plomería</option>
                            <option :value="5">Servicio de instalación eléctrica</option>
                            <option :value="6">Pintado de paredes y techos</option>
                            <option :value="7">Arreglos y mantenimientos del Hogar</option>
                            <option :value="8">Recogida de basura</option>
                            <option :value="9">Servicios de Jardineria</option>
                            <option :value="10">Diseño y presupuesto</option>
                            <option :value="11">Otra</option>
                        </select>
                    </div>
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="col-10">
                        <base-input type="text" label="Titulo" placeholder="elija una titulo" v-model="ofertaEmpleo.titulo"
                            v-validate="'required'" id="titulo" name="titulo" :class="{
                                'is-invalid': submitted && errors.has('titulo'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('titulo')" class="invalid-feedback">
                            {{ errors.first("titulo") }}
                        </div>
                    </div>
                    <div class="col-10">
                        <base-input type="email" label="Correo Electronico" placeholder="digite el correo electronico"
                            v-model="ofertaEmpleo.correo" v-validate="'required|email'" name="Correo Electronico"
                            :class="{ 'is-invalid': submitted && errors.has('Correo Electronico') }"></base-input>

                        <div v-if="submitted && errors.has('Correo Electronico')" class="invalid-feedback">
                            {{ errors.first("Correo Electronico") }}
                        </div>
                    </div>
                    <div class="col-10">
                        <label for="">Descripcion</label>
                        <b-form-textarea label="Descripcion" type="text" placeholder="Se permite maximo 500 caracteres"
                            v-model="ofertaEmpleo.descripcion" v-validate="{required:true, max:500}" id="descripcion" name="descripcion"
                            :class="{
                                'is-invalid': submitted && errors.has('descripcion'),
                            }"></b-form-textarea>
                        <div v-if="submitted && errors.has('descripcion')" class="invalid-feedback">
                            {{ errors.first("descripcion") }}
                        </div><br>
                    </div>
                    <div class="col-10">
                        <base-input type="text" label="Numero de celular" placeholder="digite en numero de contacto"
                            v-model="ofertaEmpleo.celular"  v-validate="{required:true, numeric:true, min:10, max:10}" id="Celular" name="Celular"
                            :class="{
                                'is-invalid': submitted && errors.has('Celular'),
                            }"></base-input>
                        <div v-if="submitted && errors.has('Celular')" class="invalid-feedback">
                            {{ errors.first("Celular") }}
                        </div>
                    </div>
                    <div class="col-10">
                        <base-input type="number" label="Salario" placeholder="$"
                            v-model="ofertaEmpleo.salario" v-validate="'required'" id="Salario" name="Salario"
                            :class="{
                                'is-invalid': submitted && errors.has('Salario'),
                            }"
                            ></base-input>
                        <div v-if="submitted && errors.has('Salario')" class="invalid-feedback">
                            {{ errors.first("Salario") }}
                        </div>

                    </div>
                    <div class="col-10">
                        <base-input type="text" label="ubicacion" placeholder="digite la ubicacion"
                            v-model="ofertaEmpleo.ubicacion" v-validate="'required'" id="Ubicacion" name="Ubicacion"
                            :class="{
                                'is-invalid': submitted && errors.has('Ubicacion'),
                            }"
                            ></base-input>
                        <div v-if="submitted && errors.has('Ubicacion')" class="invalid-feedback">
                            {{ errors.first("Ubicacion") }}
                        </div>
                    </div>
                    <div class="col-10">
                        <base-input type="text" label="duracion del trabajo" placeholder="tiempo estimado para el trabajo"
                            v-model="ofertaEmpleo.duracion" v-validate="'required'" id="Duracion " name="Duracion "
                            :class="{
                                'is-invalid': submitted && errors.has('Duracion '),
                            }"
                            ></base-input>
                        <div v-if="submitted && errors.has('Duracion ')" class="invalid-feedback">
                            {{ errors.first("Duracion ") }}
                        </div>
                    </div>
                    <hr><br>
                    <div class="col-12 d-flex justify-content-center">
                        <button variant="primary" class="col-3 btn btn-info"><b-icon icon="check2"></b-icon>Publicar
                            Oferta</button>
                        <hr>
                        <router-link to="/admin/ofertasEmpleo" class="btn btn-danger col-3"><b-icon
                                icon="x-circle"></b-icon>Cancelar </router-link>
                    </div>
                </form>
        </b-card>
    </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
    name: "PublicarOferta",
    data() {
        return {
            selected: null,
            
            usuariols: {},
            ofertaEmpleo: {
                titulo: "",
                salario: "",
                descripcion: "",
                celular: "",
                ubicacion: "",
                duracion: "",
                tipoDeContrato: "",
                id_categoria: "",
                id_usuario: null,
            },
            num: null,
            selected: null,
            submitted: false,
        };
    },
    mounted() {
        this.usuariols = JSON.parse(localStorage.getItem('usuario'))
        // this.usuariols = JSON.parse(localStorage.getItem('respuesta'));
    },
    methods: {
        publicarOferta() {
            // Asignar el valor seleccionado al campo id_categoria en ofertaEmpleo
            this.ofertaEmpleo.id_categoria = this.selected;
            this.ofertaEmpleo.id_usuario = this.usuariols.id_usuario
            console.log(this.ofertaEmpleo);
            Swal.fire({
                title: 'Estas seguro',
                text: "de guardar es oferta!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post("http://localhost:3000/guardarOfertaEmpleo", this.ofertaEmpleo)
                    Swal.fire(
                        'Guardar',
                        'se a guardado con exito',
                        'success',
                        this.$router.push("/admin/OfertasEmpleo")
                    )
                }
            }).catch(error => {
                // Manejar errores si es necesario
                console.error(error);
            });
        },
        handleSubmit() {
            this.submitted = true;
            this.$validator.validate().then((valid) => {
                if (valid) {

                    // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.usuario));
                    this.publicarOferta()

                }
            });
        },
    },
};
</script>