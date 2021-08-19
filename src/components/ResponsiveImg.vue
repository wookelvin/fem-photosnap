<template>
  <div class="responsive-img">
    <img :src="imgLg" :alt="alt" class="img-lg" :style="{'object-position': objectCenter}">
    <img :src="imgMd" :alt="alt" class="img-md" :style="{'object-position': objectCenter}">
    <img :src="imgSm" :alt="alt" class="img-sm" :style="{'object-position': objectCenter}">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ResponsiveImg',
  props: {
    initPath: String,
    filename: String,
    alt: String,
    objectCenter: String,
  }, 
  computed: { 
    imgLg() { 
      return `${this.initPath}/desktop/${this.filename}`
    },
    imgMd() { 
      return `${this.initPath}/tablet/${this.filename}`
    },
    imgSm() { 
      return `${this.initPath}/mobile/${this.filename}`
    },
    srcset() { 
      return `${this.imgSm} 500w, ${this.imgMd} 900w, ${this.imgLg} 1200w`
    }, 
    sizes() { 
      return `(min-width:250px) 500px, (min-width:501px) 900px, 100vw`;
    }
  }
})
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";

.responsive-img{ 
  display:block;
  position:relative;
}
img{ 
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: center center;
}
.img-lg{ 
  display:block;
}
.img-md,.img-sm{ 
  display:none;
}
@media screen and (max-width: $width-sm-md){
  .img-lg,.img-md{ 
    display:none;
  }
  .img-sm{ 
    display:block;
  }
}
@media screen and (max-width: $width-md-lg) and (min-width: $width-sm-md){
  .img-sm,.img-md{ 
    display:none;
  }
  .img-md{ 
    display:block;
  }
}
</style>
