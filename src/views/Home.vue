<template>
  <FullScreenSection
    img="/home/desktop/create-and-share.jpg"
    headingText="Create and share your photo Stories"
    paragraphText="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
    linkText="Get An Invite"
    darkMode
    textLeft
  />
  <FullScreenSection
    img="/home/desktop/beautiful-stories.jpg"
    headingText="Beautiful stories every time"
    paragraphText="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
    linkText="View The Stories"
  />
  <FullScreenSection
    img="/home/desktop/designed-for-everyone.jpg"
    headingText=" Designed for everyone"
    paragraphText="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
    linkText="View The Stories"
    textLeft
  />
  <div class="row">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FullScreenSection from './../components/FullScreenSection.vue'
import ArticleShortcut from './../components/ArticleShortcut.vue'

export default defineComponent({
  name: 'Home',
  components:{ 
    FullScreenSection,
    ArticleShortcut,
  }
})
</script>

<style lang="scss" scoped>
.row{ 
  display:flex;
}
</style>
