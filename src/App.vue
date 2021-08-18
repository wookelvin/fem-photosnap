<template>
  <div id="app">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
  </div>
  <Busy />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SiteHeader from './views/Shared/SiteHeader.vue'
import SiteFooter from './views/Shared/SiteFooter.vue'
import Busy from './components/Busy.vue'

export default defineComponent({
  name: 'App',
  components: { 
    SiteHeader, 
    SiteFooter, 
    Busy
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
