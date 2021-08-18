<template>
  <div class="container">
    <div class="grid">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Grid',
})
</script>

<style lang="scss" scoped>
.grid{ 
  display:flex;
  flex-wrap: wrap;
}
.grid > div { 
  flex: 1;
}
</style>
