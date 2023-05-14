<template>
  <div class="content">
    <div class="container-fluid">
      <div>
        <user-card>
          </user-card>
      </div>
      <div class="row">
        <div class="col-md-12">
          
          <EditarPerfil>
          </EditarPerfil>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import EditarPerfil from './UserProfile/EditarPerfil.vue'
import UserCard from './UserProfile/UserCard.vue'

export default {
  components: {
    EditarPerfil,
    UserCard
  }
}


</script>
<style></style>
