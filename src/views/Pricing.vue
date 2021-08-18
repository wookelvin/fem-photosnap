t<template>
  <FullScreenSection
    img="/pricing/desktop/hero.jpg"
    headingText="Pricing"
    paragraphText="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
    darkMode
    textLeft
  />
    <div class="container">
      <div class="pricing-hero">
        <div class="pricing-col" v-for="p of pricing" :key="'pricing-col'+p.name" :class="{'pricing-col-main':p.name === 'Pro'}">
          <div class="pricing-col-inner">
            <div class="gradient" v-if="p.name === 'Pro'"></div>
            <h2>{{p.name}}</h2>
            <p>{{p.description}}</p>
            <div class="price">{{monthly ? p.pricePerMonth : p.pricePerYear}}</div>
            <div class="term">{{monthly ? 'per month' : 'per year'}}</div>
            <Button :variant="p.name === 'Pro' ? 'light':'dark'">Pick Plan</Button>
          </div>
        </div>
      </div>

      <div class="section-compare">
        <h1>Compare</h1>
        <table>
          <thead>
            <tr>
              <th>The Features</th>
              <th v-for="p of pricing" :key="`thead${p.name}`">{{p.name}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="f of features" :key="`row${f.key}`">
              <td>
                {{ f.name }}
              </td>
              <td v-for="p of pricing" :key="`row${f.key}col${p.name}`">
                <img v-if="p.features[f.key]" src="/pricing/desktop/check.svg">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  <CallToAction/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FullScreenSection from './../components/FullScreenSection.vue';
import Grid from './../components/Grid.vue';
import GridCol from './../components/GridCol.vue';
import CallToAction from './Shared/CallToAction.vue';
import Button from './../components/Button.vue';

export default defineComponent({
  name: 'Pricing',
  components: { 
    FullScreenSection, 
    Grid, 
    GridCol, 
    CallToAction,
    Button
  }, 
  data: () => ({
    monthly: true,
    features: [
      {
        key: 'unlimited-story-posting',
        name: 'Unlimited Story Posting'
      },
      {
        key: 'unlimited-photo-upload',
        name: 'Unlimited Photo Upload'
      },
      {
        key: 'embedding-custom-content',
        name: 'Embedding Custom Content'
      },
      {
        key: 'customize-metadata',
        name: 'Customize Metadata'
      },
      {
        key: 'advanced-metrics',
        name: 'Advanced Metrics'
      },
      {
        key: 'photo-downloads',
        name: 'Photo Downloads'
      },
      {
        key: 'search-engine-indexing',
        name: 'Search Engine Indexing'
      },
      {
        key: 'custom-analytics',
        name: 'Custom Analytics'
      },
    ],
    pricing:[
      {
        name: 'Basic', 
        description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.', 
        pricePerMonth: '$19.00', 
        pricePerYear: '$190.00',
        features:{
          'unlimited-story-posting': true,
          'unlimited-photo-upload': true,
          'embedding-custom-content': false,
          'customize-metadata': false,
          'advanced-metrics': false,
          'photo-downloads': false,
          'search-engine-indexing': false,
          'custom-analytics': false,
        },
      },
      {
        name: 'Pro', 
        description: 'More advanced features available. Recommended for photography veterans and professionals.', 
        pricePerMonth: '$19.00', 
        pricePerYear: '$390.00',
        features:{
          'unlimited-story-posting': true,
          'unlimited-photo-upload': true,
          'embedding-custom-content': true,
          'customize-metadata': true,
          'advanced-metrics': false,
          'photo-downloads': false,
          'search-engine-indexing': false,
          'custom-analytics': false,
        },
      },
      {
        name: 'Business', 
        description: 'Additional features available such as more detailed metrics. Recommended for business owners.', 
        pricePerMonth: '$19.00', 
        pricePerYear: '$990.00',
        features:{
          'unlimited-story-posting': true,
          'unlimited-photo-upload': true,
          'embedding-custom-content': true,
          'customize-metadata': true,
          'advanced-metrics': true,
          'photo-downloads': true,
          'search-engine-indexing': true,
          'custom-analytics': true,
        }
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
@import './../scss/_variables.scss';
.pricing-hero{ 
  display:flex;
  justify-content: space-between;
  padding-top:6em;
  padding-bottom:0;
  .pricing-col-inner{ 
    background: #f5f5f5;
    text-align: center;
    flex: 1;
    margin-left:2em;
    margin-right:2em;
    padding: 3em 2em;
    position: relative;
  }
  .pricing-col{ 
    
    padding: 2em 0;
    &.pricing-col-main{
      padding: 0;
      .pricing-col-inner{ 
        padding: 5em 2em;
        background:black;
        color:white;
      }
    }
  }
  .gradient{ 
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:6px;
    background: $gradient-horizontal;
  }
  .button{ 
    display:block;
    margin: 3em 0 0em;
  }
  .price { 
    font-weight:bold;
    font-size:2.5em;
    margin: 2rem 0 0.5em;
  }
}

.section-compare{ 
  padding-top:4em;
  padding-bottom:4em;
  h1{ 
    text-align:center;
  }
}
table{ 
  max-width:700px;
  width: 100%;
  margin: 0 auto 5em;
  border-collapse: collapse;
  
  th,td{
    text-align: center;
    padding: 1em 1em;
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight:bold;
    letter-spacing: 1px;
    &:first-child{ 
      text-align: left;
      width:350px;
    }
  }
  th{ 
    border-bottom: 2px solid black;
    
  }
  td{
    border-bottom: 1px solid $color-light-grey;
  }
}
</style>
