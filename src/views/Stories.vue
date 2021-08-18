<template>
  <div>
    <FeatureHero
      img="/stories/desktop/moon-of-appalacia.jpg"
      feature="Last Month's Featured Story"
      title="Hazy Full Moon of Appalachia"
      body='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
      author="John Appleseed"
      date="March 2nd 2020"
      ctaText="Read The Story"
      to="/"
    />

  </div>

  <div class="row">
    <ArticleShortcut v-for="(s,i) of stories" :key="i"
      :alt="s.title"
      :img="s.img"
      :heading="s.date"
      :title="s.title"
      :subtitle="s.subTitle"
      to="/"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeatureHero from './../components/FeatureHero.vue'
import ArticleShortcut from './../components/ArticleShortcut.vue'

export default defineComponent({
  name: 'Stories',
  components: {
    FeatureHero, 
    ArticleShortcut
  }, 
  data:() => ({ 
    stories:[
    {
      img: '/stories/desktop/mountains.jpg',
      date: 'April 16th 2020',
      title: 'The Mountains',
      subTitle: 'by John Appleseed',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/cityscapes.jpg',
      date: 'April 14th 2020',
      title: 'Sunset Cityscapes',
      subTitle: 'by Benjamin Cruz',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/18-days-voyage.jpg',
      date: 'April 11th 2020',
      title: '18 Days Voyage',
      subTitle: 'by Alexei Borodin',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/architecturals.jpg',
      date: 'April 9th 2020',
      title: 'Architecturals',
      subTitle: 'by Samantha Brooke',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/world-tour.jpg',
      date: 'April 7th 2020',
      title: 'World Tour 2019',
      subTitle: 'by Timothy Wagner',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/unforeseen-corners.jpg',
      date: 'April 3rd 2020',
      title: 'Unforeseen Corners',
      subTitle: 'by William Malcolm',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/king-on-africa.jpg',
      date: 'March 29th 2020',
      title: 'King on Africa: Part II',
      subTitle: 'by Tim Hillenburg',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/trip-to-nowhere.jpg',
      date: 'March 21st 2020',
      title: 'The Trip to Nowhere',
      subTitle: 'by Felicia Rourke',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/rage-of-the-sea.jpg',
      date: 'March 19th 2020',
      title: 'Rage of The Sea',
      subTitle: 'by Mohammed Abdul',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/running-free.jpg',
      date: 'March 16th 2020',
      title: 'Running Free',
      subTitle: 'by Michelle',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/behind-the-waves.jpg',
      date: 'March 11th 2020',
      title: 'Behind the Waves',
      subTitle: 'by Lamarr Wilson',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/calm-waters.jpg',
      date: 'March 9th 2020',
      title: 'Calm Waters',
      subTitle: 'by Samantha Brooke',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/milky-way.jpg',
      date: 'March 5th 2020',
      title: 'The Milky Way',
      subTitle: 'by Benjamin Cruz',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/dark-forest.jpg',
      date: 'March 4th 2020',
      title: 'Night at The Dark Forest',
      subTitle: 'by  Mohammed Abdul',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/somwarpet.jpg',
      date: 'March 1st 2020',
      title: 'Somwarpet’s Beauty',
      subTitle: 'by Michelle',
      linkText: 'Read Story',
    },
    {
      img: '/stories/desktop/land-of-dreams.jpg',
      date: 'February 25th 2020',
      title: 'Land of Dreams',
      subTitle: 'by William Malcolm',
      linkText: 'Read Story',
    }]
  })
})
</script>

<style lang="scss" scoped>
.row{ 
  display:flex;
  flex-wrap: wrap;
  .article-shortcut{ 
    width: 25%;
    flex:inherit;
  }  
}
</style>
