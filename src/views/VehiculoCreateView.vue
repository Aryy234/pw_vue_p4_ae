<template>
  <div class="container">
    <div class="nav-links">
      <router-link to="/vehiculos">Ver Lista</router-link>
      <button @click="logout" class="btn-logout">Cerrar Sesión</button>
    </div>
    
    <vehiculo-form @submit="handleCreateVehiculo" ref="formRef" />
    
    <div v-if="message" :class="['message', messageType]">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VehiculoForm from '@/components/vehiculoForm.vue'
import { useAuth } from '@/composables/useAuth'
import { useVehicle } from '@/composables/useVehicle'

const { logout } = useAuth()
const { message, messageType, createVehiculo } = useVehicle()
const formRef = ref(null)

const handleCreateVehiculo = async (vehiculoData) => {
  const success = await createVehiculo(vehiculoData)
  if (success && formRef.value) {
    formRef.value.resetForm()
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.nav-links {
  max-width: 900px;
  margin: 0 auto 20px;
  display: flex;
  justify-content: space-between;
}

.nav-links a {
  color: #0099dd;
  text-decoration: none;
}

.btn-logout {
  padding: 8px 15px;
  background: #e53e3e;
  color: white;
  border: none;
  cursor: pointer;
}

.message {
  max-width: 600px;
  margin: 15px auto;
  padding: 10px;
  text-align: center;
  color: #000;
}

.message.success {
  background-color: #c6f6d5;
  color: #22543d;
}

.message.error {
  background-color: #fed7d7;
  color: #742a2a;
}
</style>
