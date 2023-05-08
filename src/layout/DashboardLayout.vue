<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>

      <sidebar-link :to="{ name: 'User', params: { id_usuario } }">
        <i class="nc-icon nc-circle-09"></i>
        <p>Perfil</p>
      </sidebar-link>
      <sidebar-link  to="/admin/OfertasEmpleo">
        <i class="nc-icon nc-grid-45"></i>
        <p>Mis Ofertas</p>
      </sidebar-link>
      <sidebar-link to="/admin/PublicarOferta">
        <i class="nc-icon nc-tap-01"></i>
        <p>Publicar Oferta</p>
      </sidebar-link>
      <sidebar-link to="/admin/Experiencia">
        <i class="nc-icon nc-tap-01"></i>
        <p>Añadir Experiencia</p>
      </sidebar-link>
      <sidebar-link to="/admin/VerExperiencia">
        <i class="nc-icon nc-tap-01"></i>
        <p>Mis Experiencias</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/admin/EditarOferta">
        <i class="nc-icon nc-pin-3"></i>
        <p>editar oferta</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/VerOferta">
        <i class="nc-icon nc-pin-3"></i>
        <p>Oferta Disponibles</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/EditarExperiencia">
        <i class="nc-icon nc-bell-55"></i>
        <p>Editar Experiencia</p>
      </sidebar-link> -->
       <!-- <sidebar-link to="/admin/LoginView">
        <i class="nc-icon nc-bell-55"></i>
        <p>login</p>
      </sidebar-link>
      <sidebar-link to="/admin/Registro">
        <i class="nc-icon nc-pin-3"></i>
        <p>registro</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
      <!-- <template slot="bottom-links">
        <sidebar-link class="active" to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"> </dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'
export default {
  data() {
    return {
      id_usuario: null,
    }
  },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  mounted() {
    this.usuariologueado = localStorage.getItem('usuario'),
      this.id_usuario = this.$route.params.id_usuario
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}

</script>
