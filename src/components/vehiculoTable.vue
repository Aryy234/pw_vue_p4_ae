<template>
  <div class="vehiculo-table">
    <table v-if="vehiculos && vehiculos.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Marca</th>
          <th>Chasis</th>
          <th>Fecha matrícula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
          <td>{{ vehiculo.id }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.chasis }}</td>
          <td>{{ formatDate(vehiculo.fechaMatricula) }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="no-data">
      <p>No hay vehículos registrados</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  vehiculos: {
    type: Array,
    default: () => []
  }
})

const formatDate = (date) => {
  if (!date) return '....'
  const d = new Date(date)
  return d.toISOString().split('T')[0]
}
</script>

<style scoped>
.vehiculo-table {
  max-width: 900px;
  margin: 20px auto;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
  color: #000;
}

td {
  padding: 10px;
  border: 1px solid #ddd;
  color: #000;
}

.no-data {
  text-align: center;
  padding: 20px;
  color: #000;
}
</style>
