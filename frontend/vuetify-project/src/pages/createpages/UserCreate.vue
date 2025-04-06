<template>
    <Navbar></Navbar>
    <RouterLink to="/usercreate"></RouterLink>
  
    <v-container>
      <v-text-field
        v-model="name"
        label="Name"
        outlined
        dense
        class="mb-4"
      ></v-text-field>
  
      <v-row justify="space-around">
        <v-date-picker elevation="24" class="mb-4" v-model="selectedDate"></v-date-picker>
      </v-row>
  
      <v-btn @click="saveData" color="primary" class="mt-4">Save</v-btn>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import Navbar from '@/components/Navbar.vue';
  
  document.title = "User | Create";
  
  // Declare the data to be saved
  const name = ref('');
  const selectedDate = ref(null);
  
  // Method to save data
  const saveData = async () => {
  if (!name.value || !selectedDate.value) {
    alert('Please fill in all fields!');
    return;
  }

  const formattedDate = new Date(selectedDate.value).toISOString(); // ISO format
  
  try {
    const response = await axios.post('http://localhost:3300/api/user', {
      name: name.value,
      birthdate: formattedDate, // Send ISO formatted date
    });
    
    // Handle success
    alert('Data saved successfully!');
    console.log(response.data);
  } catch (error) {
    // Handle error
    console.error('Error saving data:', error);
    alert('An error occurred while saving the data.');
  }
};

  </script>
  
  <style scoped>
  .centered-select {
    margin: 0 auto;
  }
  
  .v-select .v-input__slot {
    padding: 0.5rem;
  }
  
  .v-select .v-input__label {
    font-size: 1rem;
  }
  
  .v-container {
    max-width: 360px;
    margin: 0 auto;
  }
  </style>
  