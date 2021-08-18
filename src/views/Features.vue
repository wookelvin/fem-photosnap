<template>
  <FullScreenSection
    img="/features/desktop/hero.jpg"
    headingText="Features"
    paragraphText="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
    darkMode
    textLeft
  />

  <Grid class="features">
    <GridCol v-for="(f,i) of features" :key="i">
      <div class="img-container">
        <img :src="f.img" :alt="f.title" >
      </div>
      <h3>{{f.title}}</h3>
      <p>{{f.text}}</p>
    </GridCol>
  </Grid>

  <CallToAction/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FullScreenSection from './../components/FullScreenSection.vue';
import Grid from './../components/Grid.vue';
import GridCol from './../components/GridCol.vue';
import CallToAction from './Shared/CallToAction.vue';

export default defineComponent({
  name: 'Features',
  components: { 
    FullScreenSection, 
    Grid, 
    GridCol, 
    CallToAction,
  }, 
  data: () => ({
    features:[
      {
        img: '/features/desktop/responsive.svg',
        title: '100% Responsive',
        text: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
      },
      {
        img: '/features/desktop/no-limit.svg',
        title: 'No Photo Upload Limit',
        text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
      },
      {
        img: '/features/desktop/embed.svg',
        title: 'Available to Embed',
        text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
      },
      {
        img: '/features/desktop/custom-domain.svg',
        title: 'Custom Domain',
        text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
      },
      {
        img: '/features/desktop/boost-exposure.svg',
        title: 'Boost Your Exposure',
        text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
      },
      {
        img: '/features/desktop/drag-drop.svg',
        title: 'Drag &amp; Drop Image',
        text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.grid-col{ 
  flex:initial;
  width: 33.333%;
  padding-top:6em;
  padding-bottom: 6em;
}
.features{ 
  padding-top: 4em;
  padding-bottom: 4em;
  .img-container{
    display:flex;
    align-items: center;
    justify-content: center;
    height:5em;
    margin-bottom:3em;
  }
}
</style>
