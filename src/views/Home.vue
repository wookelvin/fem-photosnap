<template>
  <FullScreenSection
    imgInitPath="/home"
    imgFileName="create-and-share.jpg"
    headingText="Create and share your photo Stories"
    paragraphText="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
    linkText="Get An Invite"
    darkMode
    textLeft
  />
  <FullScreenSection
    imgInitPath="/home"
    imgFileName="beautiful-stories.jpg"
    headingText="Beautiful stories every time"
    paragraphText="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
    linkText="View The Stories"
    responsiveCenter="25% center"
  />
  <FullScreenSection
    imgInitPath="/home"
    imgFileName="designed-for-everyone.jpg"
    headingText=" Designed for everyone"
    paragraphText="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
    linkText="View The Stories"
    textLeft
  />
  <ArticleShortcutContainer>
    <ArticleShortcut
      img="/stories/desktop/mountains.jpg"
      alt="Mountains"
      title="The Mountains"
      subtitle="by John Appleseed"
      to="/"
    />
    <ArticleShortcut
      img="/stories/desktop/cityscapes.jpg"
      alt="Sunset Cityscapes"
      title="Sunset Cityscapes"
      subtitle="by Benjamin Cruz"
      to="/"
    />
    <ArticleShortcut
      img="/stories/desktop/18-days-voyage.jpg"
      alt="18"
      title="18 Days Voyage"
      subtitle="by Alexei Borodin"
      to="/"
    />
    <ArticleShortcut
      img="/stories/desktop/architecturals.jpg"
      alt="Architecturals"
      title="Architecturals"
      subtitle="by Samantha Brooke"
      to="/"
    />
  </ArticleShortcutContainer>
  <Grid class="features">
    <GridCol>
      <div class="img-container">
        <img src="/features/desktop/responsive.svg" alt="Responsive icon" >
      </div>
      <h3>100% Responsive</h3>
      <p>No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
    </GridCol>
    <GridCol>
      <div class="img-container">
        <img src="/features/desktop/no-limit.svg" alt="Responsive icon" >
      </div>
      <h3>No Photo Upload Limit</h3>
      <p>Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
    </GridCol>
    
    <GridCol>
      <div class="img-container">
        <img src="/features/desktop/embed.svg" alt="Responsive icon" >
      </div>
      <h3>Available to Embed</h3>
      <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
    </GridCol>
  </Grid>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import FullScreenSection from './../components/FullScreenSection.vue'
import ArticleShortcut from './../components/ArticleShortcut.vue'
import ArticleShortcutContainer from './../components/ArticleShortcutContainer.vue'
import Grid from './../components/Grid.vue'
import GridCol from './../components/GridCol.vue'
import BusyService from './../services/BusyService'


export default defineComponent({
  name: 'Home',
  components:{ 
    FullScreenSection,
    ArticleShortcut,
    ArticleShortcutContainer,
    Grid, 
    GridCol
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

.features{ 
  padding-top:4em;
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
