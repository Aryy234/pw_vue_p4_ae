<template>
  <div class="container">
    <div class="nav-links">
      <router-link to="/vehiculos/crear">Crear Vehículo</router-link>
      <button @click="logout" class="btn-logout">Cerrar Sesión</button>
    </div>

    <div class="content">
      <h1>Lista de Vehículos</h1>
      
      <div v-if="loading" class="loading">
        Cargando vehículos...
      </div>
      
      <div v-else-if="error" class="error">
        {{ error }}
      </div>
      
      <vehiculo-table v-else :vehiculos="vehiculos" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import VehiculoTable from '@/components/vehiculoTable.vue'
import { useAuth } from '@/composables/useAuth'
import { useVehicle } from '@/composables/useVehicle'

const { logout } = useAuth()
const { vehiculos, loading, error, loadVehiculos } = useVehicle()

onMounted(() => {
  loadVehiculos()
})
</script>

<style scoped>
.container { padding: 20px; }
.nav-links { max-width: 900px; margin: 0 auto 20px; display: flex; justify-content: space-between; }
.nav-links a { color: #0099dd; text-decoration: none; }
.btn-logout { padding: 8px 15px; background: #e53e3e; color: white; border: none; cursor: pointer; }
.content { max-width: 900px; margin: 0 auto; }
h1 { text-align: center; color: #000; }
.loading, .error { text-align: center; padding: 20px; color: #000; }
.error { color: #e53e3e; background: #fed7d7; }
</style>
