<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
})
</script>

<style lang="scss" scoped>
.row{ 
  display: flex;
  flex-wrap: wrap;
}
</style>
