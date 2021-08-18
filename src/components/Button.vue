<template>
  <router-link :to="to" :class="`${arrow?'arrow':''} ${variant}`" class="button">
    <slot></slot>
    <img v-if="arrow" src="/shared/desktop/arrow.svg" alt="">
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props:{ 
    to:{ 
      type: String, 
      default: ''
    }, 
    arrow:{ 
      type: Boolean, 
      default: false,
    }, 
    variant:{ 
      type: String, 
      default: 'dark',
    }
  }
})
</script>

<style lang="scss" scoped>
@import './../scss/_variables.scss';
a{
  background: #000;
  color:white;
  text-decoration: none;
  text-transform: uppercase;
  font-size:10px;
  letter-spacing: 2px;
  margin-bottom:5px;
  display:inline-block;
  line-height:1em;
  &:hover{ 
    background: $color-light-grey;
    color: $color-black;
  }
}
a:not(.arrow){ 
  padding: 1em 3em;
}
a.arrow{ 
  background: transparent;
  color:#000;
  font-weight:bold;
  &:hover{ 
    text-decoration: underline ;
  }
}

a.light:not(.arrow){ 
  background: #fff;
  color: #000;
  &:hover{ 
    background: $color-light-grey;
    color: $color-black;
  }
}
a.light.arrow{ 
  background:transparent;
  color:white;
  img{ 
    filter:invert(1);
  }
  &:hover{ 
    text-decoration: underline ;
  }
}
img{ 
  vertical-align: middle;
  margin-left:0.75em;
}
</style>
