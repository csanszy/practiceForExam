<template>
    <Navbar></Navbar>
    <RouterLink to="/todolist">
    </RouterLink>

  <v-data-table
      v-if="todos.length"
      :headers="headers"
      :items="todos"
      item-key="id"
  ></v-data-table>
</template>
<script setup>
  import axios from "axios";

  import { ref, onMounted } from 'vue';

  const todos = ref([]);
  const headers = ref([
    { title: 'Id', align: 'start', sortable: false, key: 'id' },
    { title: 'Title', align: 'end', key: 'title' },
    { title: 'Task', align: 'end', key: 'task' },
    { title: 'UserId', align: 'end', key: 'user' },
  ]);

  const dialog = ref(false);
  const selectedProduct = ref(null);

  const fetchtodos = async () => {
    try {
      const response = await axios.get("http://localhost:3300/api/todo");
      todos.value = response.data;
      console.log(todos.value);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  onMounted(() => {
    fetchtodos();
  });



import Navbar from '@/components/Navbar.vue';
document.title = "Todo | List";
</script>

<style scoped>
</style>