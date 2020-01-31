<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav-item"><a-icon type="search" class="icon"/></router-link> 
      <router-link to="/save" class="nav-item-lg"><a-icon type="plus" class="icon-lg"/></router-link> 
      <router-link to="/about" class="nav-item"><a-icon type="question" class="icon"/></router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>