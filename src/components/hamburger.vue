<template>
    <div class="relative">
      <button @click="toggleMenu" class="hamburger" :class="{ open: isOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
  </script>
  
  <style scoped>
  .hamburger {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 45px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 100;
    padding: 0;
  }
  
  /* Hamburger lines */
  .hamburger span {
    position: absolute;
    width: 100%;
    height: 6px; 
    background-color: white;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  /* Line positions for normal state */
  .hamburger span:nth-child(1) {
    top: 12px;
  }
  .hamburger span:nth-child(2) {
    top: 25px;
  }
  .hamburger span:nth-child(3) {
    top: 38px;
  }
  
  /* Transform into X */
  .hamburger.open span:nth-child(1) {
    top: 25px;
    transform: rotate(45deg);
  }
  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.open span:nth-child(3) {
    top: 25px;
    transform: rotate(-45deg);
  }
  </style>
  