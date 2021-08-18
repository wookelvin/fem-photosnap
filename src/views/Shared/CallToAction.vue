<template>
  <div class="call-to-action">
    <img src="/shared/desktop/bg-beta.jpg">
    <div class="gradient"></div>
    <div class="text-content">
      <div class="container">
        <h1>We're in Beta. Get your invite today!</h1>
        <div><Button to="/" variant="light" arrow>Get an Invite</Button></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../../components/Button.vue'

export default defineComponent({
  name: 'CallToAction',
  components:{ 
    Button
  }
})
</script>

<style lang="scss" scoped>
@import "./../../scss/_variables.scss";

.call-to-action{ 
  position: relative;
}
img{ 
  width:100%;
  display:block;
}
.gradient{ 
  position:absolute;
  left:0;
  top:0;
  bottom:0;
  width:6px;
  background: $gradient-reverse;
}
.text-content{ 
  position: absolute;
  color:white;
  top: 0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content: center;
}
.container{ 
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
h1 { 
  max-width:300px;
  line-height:1.2em;
}
</style>
