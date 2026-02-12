import { API_BASE_URL } from '@/utils/constanst'
import axios from 'axios'

export const vehiculosClient = {

  async getAllVehiculos(token) {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/vehiculos/listar`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } catch (error) {
      console.error('Error al obtener vehículos:', error)
      throw new Error('Error al obtener la lista de vehículos')
    }
  },

  async createVehiculo(vehiculo, token) {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/vehiculos/crear`, vehiculo, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      return data
    } catch (error) {
      console.error('Error al crear vehículo:', error)
      throw new Error('Error al crear el vehículo')
    }
  }
}

export default vehiculosClient
