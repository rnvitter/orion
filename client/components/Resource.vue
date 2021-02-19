<template>
  <div class="h-full inline-block">
    <div class="h-full flex">
      <img
        :class="`rounded-sm h-full w-auto opacity-0`"
        :style="`animation: fadeIn ${randomNumber(250, 1000)}ms ease-in forwards; animation-delay: ${randomNumber(150, 600)}ms;`"
        :src="imageUrl"
        @click="setActiveResource(item.id)"/>
      <div class="p-3 bg-gray-100 overflow-hidden" style="width: 350px;" v-if="activeResource == item.id">
        <div class="flex flex-wrap">
          <div class="w-full flex-none text-sm font-medium text-gray-500">
            {{ mediaTypeKey[item.media_type] }}
          </div>
          <h1 class="flex-auto text-xl font-semibold">{{ item.title }}</h1>
        </div>
        <div class="my-2 overflow-y-auto whitespace-normal" style="height: 100px;">
          {{ item.description }}
        </div>
        <div class="flex space-x-3 mb-4 text-sm font-medium">
          <div class="flex-auto flex space-x-3">
            <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Link</button>
            <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Link</button>
          </div>
          <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
            <svg width="20" height="20" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

const props = {
  item: {
    type: Object,
    required: true
  }
}

const computed = {
  ...mapGetters({
    activeResource: 'ux/activeResource'
  }),
  imageUrl () {
    return `${process.env.apiUrl}${this.item.image.url}`
  }
}

const methods = {
  ...mapMutations({
    setActiveResource: 'ux/setActiveResource'
  }),
  randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

export default {
  props,
  computed,
  methods,
  data: () => ({
    isActive: false,
    mediaTypeKey: {
      'book': 'Book',
      'article': 'Article',
      'movie': 'Movie',
      'tv_show': 'TV Show',
      'podcast': 'Podcast',
      'documentary': 'Documentary',
      'youtube': 'Youtube',
      'website': 'Website',
      'pdf': 'PDF',
      'tutorial': 'Tutorial',
      'app': 'App',
      'art': 'Art',
      'music': 'Music',
      'comic': 'Comic'
    }
  })
}
</script>
