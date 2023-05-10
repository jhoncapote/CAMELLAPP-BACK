<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CAMELLAPP</a>
      <button type="button" class="navbar-toggler navbar-toggler-right" :class="{ toggled: $sidebar.showSidebar }"
        aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link v-if="usuariols==null" class="nav-link " to="/admin/">REGISTRARTE </router-link>
            <router-link v-if="usuariols==null" class="nav-link " to="/admin/LoginView">INICIAR SESION </router-link>

            <router-link v-if="usuariols!=null" class="nav-link " to="/admin/OfertasEmpleo"><a><b-icon icon="house-fill"></b-icon></a> INICIO </router-link>
            <router-link v-if="usuariols!=null" class="nav-link " to="/admin/LoginView"> <a><i class=" nc-icon nc-button-power"></i></a>CERRAR SESION </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route
      return this.capitalizeFirstLetter(name)
    }
  },
  data() {
    return {
      activeNotifications: false,
      usuariols : null,
    }
  },
  mounted() {
    // this.usuariologueado = localStorage.getItem('usuario'),
    this.usuariols = JSON.parse(localStorage.getItem('usuario'));
      this.id_usuario = this.$route.params.id_usuario
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown() {
      this.activeNotifications = false
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false)
    }
  }
}

</script>
<style></style>
