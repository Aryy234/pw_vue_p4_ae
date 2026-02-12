
import { AUTH_BASE_URL } from '@/utils/constanst'
import axios from 'axios'


export const authorizationClient = {

  async getToken(user, password) {
    const url = `${AUTH_BASE_URL}/auth/token?user=${encodeURIComponent(user)}&password=${encodeURIComponent(password)}`
    try {
      const { data } = await axios.get(url)
      return data
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Credenciales incorrectas')
      }
      throw new Error('Error de autenticación')
    }
  }
}

export default authorizationClient
