<template>
  <div class="container">
    <h1>TOKEN</h1>
    <form @submit.prevent="handleLogin">
      <label>Usuario</label>
      <input v-model="username" type="text" required />
      
      <label>Password</label>
      <input v-model="password" type="password" required />
      
      <label>Rol</label>
      <input v-model="rol" type="text" readonly />
      
      <label>Token</label>
      <textarea v-model="token" rows="3" readonly></textarea>
      
      <button type="submit">Generar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { login } = useAuth()

const username = ref('')
const password = ref('')
const rol = ref('')
const token = ref('')

const handleLogin = async () => {
  const success = await login(username.value, password.value)
  if (success) {
    token.value = localStorage.getItem('auth_token') || ''
    rol.value = localStorage.getItem('user_role') || ''
  }
}
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
}

h1 {
  margin: 0 0 2rem;
  font-size: 2rem;
  color: #0088cc;
  letter-spacing: 0.1em;
}

form {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 1rem;
}

label {
  font-size: 1rem;
  color: #0088cc;
  margin-bottom: -0.5rem;
}

input, textarea {
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  padding: 0.9rem;
  background: #0099dd;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

button:hover {
  background: #0088cc;
}
</style>
