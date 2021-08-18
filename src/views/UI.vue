<template>
  <div class="page">
  <div>Design System</div>

  <h1>Colors</h1>
  <div class="flex">
    <div class="circle bg-main-accent"></div>
    <h2>Main Accent</h2>
  </div>
  <div class="flex">
    <div class="circle bg-black"></div>
    <h2>Pure Black</h2>
  </div>
  <div class="flex">
    <div class="circle bg-light-grey"></div>
    <h2>Light Grey</h2>
  </div>
  <div class="flex">
    <div class="circle bg-white"></div>
    <h2>Pure White</h2>
  </div>

  <h2>Typography</h2>
  <div>Font Family</div>
  <h2>DM Sans</h2>
  <div><strong>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</strong></div>
  <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
  <div>!@#$%^&amp;*()</div>

  <h2>Headings</h2>

  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>

  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nun.</p>

  <h2>Buttons</h2>
  <div class="p-2">
    <div><Button to="/" variant="dark">Button 1</Button></div>
    <div class="mt-2"><Button to="/" variant="dark" arrow>Button 2</Button></div>
  </div>
  <div class="bg-black p-2">
    <div><Button to="/" variant="light">Button 3</Button></div>
    <div class="mt-2"><Button to="/" variant="light" arrow>Button 4</Button></div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BusyService from '../services/BusyService';
import Button from './../components/Button.vue'

export default defineComponent({
  name: 'UI',
  components:{ 
    Button
  }, 
  setup(){ 
    const { busy, updateBusy } = BusyService();
    onMounted(() => { 
      updateBusy(false);
    })
  }
})
</script>

<style lang="scss" scoped>

.flex{ 
  display:flex;
  align-items:center;
  margin-bottom: 1em;

}
.circle{ 
  height:5em;
  width:5em;
  border-radius:50%;
  margin-right:1em;
  &.bg-white{ 
    border: 1px solid black;
  }
}

.p-2{ 
  padding: 2em;
}
.mt-2{ 
  margin-top:2em;
}
.page{ 
  max-width:500px;
  margin-left:auto;
  margin-right:auto;
  padding: 2em;
}
</style>
