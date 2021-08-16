<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteHeader from './views/Shared/SiteHeader.vue'
import SiteFooter from './views/Shared/SiteFooter.vue'

export default defineComponent({
  name: 'App',
  components: { 
    SiteHeader, 
    SiteFooter
  }
})
</script>

<style lang="scss">
</style>
