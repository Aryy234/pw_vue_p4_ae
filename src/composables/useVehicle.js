import { ref } from 'vue'
import vehiculosClient from '@/clients/vehiculosClient'
import { STORAGE_KEYS } from '@/utils/constanst'

export function useVehicle() {
  const vehiculos = ref([])
  const loading = ref(false)
  const error = ref('')
  const message = ref('')
  const messageType = ref('success')

  const loadVehiculos = async () => {
    loading.value = true
    error.value = ''
    
    try {
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
      const data = await vehiculosClient.getAllVehiculos(token)
      vehiculos.value = data
    } catch (err) {
      error.value = err.message || 'Error al cargar los vehículos'
    } finally {
      loading.value = false
    }
  }

  const createVehiculo = async (vehiculoData) => {
    try {
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
      await vehiculosClient.createVehiculo(vehiculoData, token)
      
      message.value = 'Vehículo creado exitosamente'
      messageType.value = 'success'
      
      setTimeout(() => {
        message.value = ''
      }, 3000)
      
      return true
    } catch (err) {
      message.value = err.message || 'Error al crear el vehículo'
      messageType.value = 'error'
      return false
    }
  }

  return {
    vehiculos,
    loading,
    error,
    message,
    messageType,
    loadVehiculos,
    createVehiculo
  }
}

export default useVehicle
