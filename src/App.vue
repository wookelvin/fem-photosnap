<template>
  <div id="app">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
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
html, body, #app{ 
  min-height:100vh;
}
#app{ 
  display: flex;
  flex-direction: column;
}
main{ 
  flex-grow: 1;
}

</style>
