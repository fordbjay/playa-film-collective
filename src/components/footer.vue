<template>
    <div class="main-container">
        <div>
            <p>Playa del Carmen, <br>Quintana Roo, Mexico</p>
        </div>
        <div class="links">
            <a href="https://www.facebook.com">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com">
              <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
    </div>

  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  
  .main-container {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    /* height: 100px; */
    gap: 25px;
  }

  .main-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 250px;
    background-color: rgba(36, 203, 170, 0.75);
    transform: skewY(5deg);
    z-index: -1;
}

p {
    margin-left: 20px;
    color: white;
}

.links {
    margin: 20px;
}
  
  .links a {
      font-size: 40px;
      margin: 0 10px;
      color: white;
      /* text-decoration: none; */
      transition: color 0.3s ease;
  }
  
  .links a:hover {
      color: #000000;
  }
  
  </style>
  