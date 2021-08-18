<template>
  <router-link :to="to" class="card article-shortcut">
    <div class="inner">
      <img :src="img" :alt="alt" class="bg-img"/>
      <div class="bg-gradient" />
      <div class="text-content">
        <h4>{{heading}}</h4>
        <h2>{{title}}</h2>
        <div>{{subtitle}}</div>
        <hr/>
        <div class="link">
          <div>Read Story</div>
          <img src="/shared/desktop/arrow.svg" alt="" class="arrow">
        </div> 
        
      </div>
      <div class="gradient"></div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ArticleShortcut',
  props:{ 
    img: String,
    alt: String,
    title: String, 
    subtitle: String,
    heading: String,
    to: String,
  }
})
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";
.card{ 
  flex: 1;
}
.inner{ 
  position: relative;
  transition: 0.2s all ease;
  
}
.gradient{ 
  height: 0px; 
  background: $gradient-horizontal;
  left:0;
  right:0;
  position:absolute;
  bottom: -6px;
  z-index:-1;
  transition: 0.2s all ease;
}
img.bg-img { 
  width:100%;
  height:auto;
  display:block;
}
.text-content{ 
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  color:white;
  padding: 2em;
}
.link { 
  display:flex;
  justify-content: space-between;
  align-items:center;
}
.arrow{ 
  filter: invert(100%);
}
a:hover { 
  .inner{ 
    transform: translateY(-50px);
  }
  .gradient{ 
    height:6px;
  }
}
hr{ 
  border-color: rgba(255,255,255,0.5);
}
.bg-gradient { 
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
h2{ 
  margin-top:0;
  margin-bottom:0%
}
</style>
