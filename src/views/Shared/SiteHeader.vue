<template>
  <header>
    <div class="container">
      <router-link to="/">
        <img src="/public/shared/desktop/logo.svg" alt="Photosnap Logo" >
      </router-link>
      <div>
        <router-link to="/stories" class="site-link">Stories</router-link>
        <router-link to="/features" class="site-link">Features</router-link>
        <router-link to="/pricing" class="site-link">Pricing</router-link>
      </div>
      <div>
        <Button>Get An Invite</Button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Button from './../../components/Button.vue';

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SiteHeader',
  components: { 
    Button
  }
})
</script>

<style lang="scss" scoped>
@import './../../scss/_variables.scss';
.site-link { 
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size:12px;
  color: black;
  text-decoration: none;
  font-weight:bold;
  padding:1em;
  &:hover{ 
    color: $color-light-grey;
  }
}
header{ 
  border-bottom: 1px solid #ddd;
  padding:1em;
}
.container{ 
  display:flex; 
  justify-content: space-between;
  align-items:center;
}
</style>
