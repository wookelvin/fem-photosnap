<template>
  <div class="busy" :class="{show: busy}">
    <div>
      <img src="/public/shared/desktop/logo.svg" alt="Photosnap Logo" >
      <div class="gradient"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BusyService from '../services/BusyService'

export default defineComponent({
  name: 'Busy',
  setup(){ 
    const { busy } = BusyService();
    return { 
      busy
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";
.busy{ 
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:white;
  z-index:1000;
  display:flex;
  align-items:center;
  justify-content:center;
  pointer-events: none;
  opacity: 0%;
  transition: 0.2s all ease;
  &.show{ 
    opacity: 100%;
    pointer-events:initial;
  }
}
img{ 
  display:block;
  margin: 0 auto;
}
.gradient{
  height:5px;
  width:200px;
  margin-top:1em;
  background: $gradient-horizontal;
  background-size: 200% 200%;
  animation: gradient 1s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
