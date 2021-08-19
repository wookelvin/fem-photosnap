<template>
  <div class="grid-col">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GridCol',
})
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";
.grid-col{ 
  padding: 2em;
  text-align: center;
  width: 33.333%;
}
@media screen and (max-width: $width-md-lg){ 
  .grid-col{ 
    width: 80%;
    
  }
}
</style>
