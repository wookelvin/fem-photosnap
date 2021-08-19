<template>
  <div class="row" :class="{'text-right':!textLeft, 'dark-mode': darkMode}">
    <div class="col-text">
      <div class="col-text-inner">
        <div class="gradient" v-if="darkMode && textLeft"></div>
        <div class="text-content">
          <h1>{{ headingText }}</h1>
          <p>{{ paragraphText }}</p>
          <Button v-if="to" arrow :variant="darkMode?'light':'dark'" :to="to" @click="onClick">{{ linkText }}</Button>
        </div>
      </div>
    </div>
    <div class="col-pic" >
      <ResponsiveImg :initPath="imgInitPath" :filename="imgFileName" :alt="alt" :objectCenter="responsiveCenter"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'
import ResponsiveImg from './ResponsiveImg.vue'

export default defineComponent({
  name: 'FullScreenSection',
  components: { 
    Button,
    ResponsiveImg,
  },
  props: {
    imgInitPath: String, 
    imgFileName: String,
    alt: String,
    headingText: String, 
    paragraphText: String, 
    linkText: String, 
    to: String,
    darkMode: Boolean,
    textLeft: Boolean, 
    responsiveCenter: { 
      type: String, 
      default: 'center center'
    }
  }, 
  emits:['click'],
  methods:{ 
    onClick(){ 
      this.$emit('click');
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";

.row{ 
  height:600px;
  display:flex;
  align-items: stretch;
  overflow:hidden;
  position:relative;
  &.dark-mode{ 
    background: black;
    color:white;
  }
}
.col-text{ 
  width:35%;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
@media screen and (max-width: $width-md-lg) {
  .col-text{ 
    width:65%;
  }
}
.row.text-right{ 
  .col-text{ 
    order: 2;
  }
  .col-pic{ 
    order: 1;
  }
}
.col-pic{ 
  flex-grow: 1;
  position:relative;
}
.responsive-img{ 
  height:100%;
}
h1{ 
  margin-top:0;
}
.col-text-inner{
  display:flex;
  width:100%;
}
.gradient{ 
  width:12px;
  height:100%;
  background:$gradient;
}
.text-content{ 
  flex-grow:1;
  padding: 0 6em;
}
.img-lg{ 
  display:block;
}
.img-md{ 
  display:none;
}
@media screen and (max-width: $width-md-lg) {
 .img-lg{ 
    display:none;
  }
  .img-md{ 
    display:block;
  }
}
</style>
