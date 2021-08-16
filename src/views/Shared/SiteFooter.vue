<template>
  <footer>
    <div class="container">
      <div class="footer-col-1">
        <div class="logo">
          <img src="/public/shared/desktop/logo-white.svg" alt="Photosnap Logo" class="logo" >
        </div>
        <div>
          <a href="#" class="social-link"><img src="/public/shared/desktop/facebook.svg" alt="Facebook" ></a>
          <a href="#" class="social-link"><img src="/public/shared/desktop/youtube.svg" alt="YouTube" ></a>
          <a href="#" class="social-link"><img src="/public/shared/desktop/twitter.svg" alt="Twitter" ></a>
          <a href="#" class="social-link"><img src="/public/shared/desktop/pinterest.svg" alt="Pinterest" ></a>
          <a href="#" class="social-link"><img src="/public/shared/desktop/instagram.svg" alt="Instagram" ></a>
        </div>
      </div>
      <div class="footer-col-2">
        <router-link class="site-link" to="/">Home</router-link>
        <router-link class="site-link" to="/stories">Stories</router-link>
        <router-link class="site-link" to="/features">Features</router-link>
        <router-link class="site-link" to="/pricing">Pricing</router-link>
      </div>
      <div class="footer-col-3">
        <Button variant="light" arrow>
          Get An Invite
        </Button>
        <div class="copyright">
          Copyright 2021. All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Button from './../../components/Button.vue';

import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SiteFooter',
  components: { 
    Button
  }
})
</script>

<style lang="scss" scoped>
@import './../../scss/_variables.scss';

footer{ 
  color:white;
  background:black;
  padding: 2em;
}
.container{ 
  display:flex;
  align-items: start;
}
.site-link{ 
  display:block;
  text-decoration: none;
  color:white;
  font-weight:bold;
  font-size:12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  &:hover{ 
    color: $color-light-grey;
  }
}
.logo{ 
  margin-bottom: 1.75em;
}
.social-link{ 
  filter: brightness(500%);
  margin-right:1em;
  &:hover{ 
    filter: brightness(100%);
  }
}
.footer-col-1{ 
  margin-right:7em;
}
.footer-col-2{ 
  flex: 1;
}
.footer-col-3{ 
  text-align: right;
}
.copyright{ 
  margin-top:3.25em;
  color: $color-light-grey;
  opacity: 0.5;
}
</style>
