<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Manajemen Layanan</h1>
      <button 
        @click="openModal()" 
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        <span class="material-icons align-middle mr-1">add</span> Tambah Layanan
      </button>
    </div>

    <!-- Error State -->
    <div v-if="error" class="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
      Gagal memuat data layanan. Pastikan backend server berjalan.
    </div>

    <!-- Loading State -->
    <div v-else-if="pending" class="flex justify-center p-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <!-- Table -->
    <div v-else class="bg-white rounded-xl shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ikon</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judul</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deskripsi</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Urutan</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="!services?.data || services.data.length === 0">
            <td colspan="5" class="px-6 py-12 text-center text-gray-500">
              Belum ada data layanan.
            </td>
          </tr>
          <tr v-for="service in services?.data" :key="service.id" class="hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="material-icons text-blue-600 text-3xl">{{ service.icon }}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">{{ service.title }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-500 max-w-xs truncate">{{ service.description }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ service.order }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="openModal(service)" class="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
              <button @click="deleteService(service.id)" class="text-red-600 hover:text-red-900">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div class="px-6 py-4 border-b flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ isEditing ? 'Edit Layanan' : 'Tambah Layanan' }}
          </h3>
          <button @click="closeModal()" class="text-gray-400 hover:text-gray-600">
            <span class="material-icons">close</span>
          </button>
        </div>
        
        <form @submit.prevent="saveService" class="p-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Judul Layanan</label>
              <input 
                v-model="form.title" 
                type="text" 
                required
                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Contoh: Medical Check Up"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Deskripsi Singkat</label>
              <textarea 
                v-model="form.description" 
                required
                rows="3"
                class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Deskripsi layanan..."
              ></textarea>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Ikon (Material Icon)</label>
                <div class="flex items-center gap-2">
                  <span class="material-icons text-gray-500 bg-gray-100 p-2 rounded">{{ form.icon || 'star' }}</span>
                  <input 
                    v-model="form.icon" 
                    type="text" 
                    class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="medical_services"
                  >
                </div>
                <a href="https://fonts.google.com/icons" target="_blank" class="text-xs text-blue-500 mt-1 inline-block hover:underline">Cari nama ikon</a>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Urutan Tampil</label>
                <input 
                  v-model.number="form.order" 
                  type="number" 
                  class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
              </div>
            </div>
          </div>
          
          <div class="mt-6 flex justify-end gap-3">
            <button 
              type="button" 
              @click="closeModal()" 
              class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Batal
            </button>
            <button 
              type="submit" 
              :disabled="isSaving"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {{ isSaving ? 'Menyimpan...' : 'Simpan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

definePageMeta({
  layout: 'admin',
})

const { data: services, pending, error, refresh } = useFetch('/api/services')

const isModalOpen = ref(false)
const isEditing = ref(false)
const isSaving = ref(false)

const form = reactive({
  id: '',
  title: '',
  description: '',
  icon: 'medical_services',
  order: 0
})

const openModal = (service = null) => {
  if (service) {
    isEditing.value = true
    form.id = service.id
    form.title = service.title
    form.description = service.description
    form.icon = service.icon
    form.order = service.order
  } else {
    isEditing.value = false
    form.id = ''
    form.title = ''
    form.description = ''
    form.icon = 'medical_services'
    form.order = 0
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const saveService = async () => {
  if (isSaving.value) return
  isSaving.value = true
  
  try {
    const url = isEditing.value ? `/api/services/${form.id}` : '/api/services'
    const method = isEditing.value ? 'PUT' : 'POST'
    
    await $fetch(url, {
      method,
      body: {
        title: form.title,
        description: form.description,
        icon: form.icon,
        order: form.order
      }
    })
    
    await refresh()
    closeModal()
  } catch (err) {
    alert('Gagal menyimpan data')
    console.error(err)
  } finally {
    isSaving.value = false
  }
}

const deleteService = async (id) => {
  if (confirm('Apakah Anda yakin ingin menghapus layanan ini?')) {
    try {
      await $fetch(`/api/services/${id}`, { method: 'DELETE' })
      await refresh()
    } catch (err) {
      alert('Gagal menghapus layanan')
    }
  }
}
</script>
