<template>
  <div class="vehiculo-form">
    <h2>VEHICULO</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Token</label>
        <textarea v-model="token" rows="3" readonly></textarea>
      </div>

      <div class="form-group">
        <label>Marca</label>
        <input v-model="form.marca" type="text" required />
      </div>

      <div class="form-group">
        <label>Modelo</label>
        <input v-model="form.modelo" type="text" required />
      </div>

      <div class="form-group">
        <label>Chasis</label>
        <input v-model="form.chasis" type="text" required />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Fecha de matrícula</label>
          <input v-model="form.fechaMatricula" type="date" required />
        </div>

        <div class="form-group">
          <label>Fecha de fabricación</label>
          <input v-model="form.fechaFabricacion" type="date" required />
        </div>
      </div>

      <button type="submit" class="btn-submit">Obtener</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { STORAGE_KEYS } from '@/utils/constanst'

const emit = defineEmits(['submit'])

const token = ref('')
const form = ref({
  marca: '',
  modelo: '',
  chasis: '',
  fechaMatricula: '',
  fechaFabricacion: ''
})

onMounted(() => {
  token.value = localStorage.getItem(STORAGE_KEYS.TOKEN) || ''
})

const handleSubmit = () => {
  emit('submit', form.value)
}

const resetForm = () => {
  form.value = {
    marca: '',
    modelo: '',
    chasis: '',
    fechaMatricula: '',
    fechaFabricacion: ''
  }
}

defineExpose({ resetForm })
</script>

<style scoped>
.vehiculo-form { max-width: 600px; margin: 20px auto; padding: 20px; }
h2 { text-align: center; color: #0088cc; }
.form-group { margin-bottom: 15px; }
.form-row { display: flex; gap: 10px; }
.form-row .form-group { flex: 1; }
label { display: block; color: #0088cc; }
input, textarea { width: 100%; padding: 8px; border: 2px solid #333; box-sizing: border-box; color: #000; }
textarea { min-height: 80px; }
.btn-submit { padding: 10px; background: #0099dd; color: white; border: none; cursor: pointer; margin-top: 10px; }
</style>
