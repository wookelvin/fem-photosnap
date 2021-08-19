<template>
  <div class="feature-hero">
    <img :src="img" alt="">
    <div class="text-content">
      <div>
        <div><h4>{{feature}}</h4></div>
        <div><h1>{{title}}</h1></div>
        <div>
          <span class="date">{{ date }} </span>
          <span class="author"> by {{ author }}</span>
        </div>
        <p>{{body}}</p>
        <Button arrow variant="light">{{ctaText}}</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: { 
    Button
  },
  props:{ 
    img: String,
    feature: String, 
    title: String, 
    body: String,
    author: String,
    date: String,
    ctaText: String,
    to: String
  }
})
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";

.feature-hero{ 
  position: relative;
  min-height:500px;
}
img{ 
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
  object-position: center center;

}
.text-content{ 
  position:absolute;
  top:0;
  left:0;
  width:500px;
  max-width:100%;
  bottom:0;
  display:flex;
  align-items:center;
  color:white;
  padding: 5em;
}
p,.date{ 
  color: $color-light-grey;
}
</style>
