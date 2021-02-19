<template>
  <div class="container mx-auto">
    <category
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :resources="resources.filter(r => r.categories.map(c => c.id).includes(category.id))">
    </category>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [],
      resources: []
    }
  },
  created: async function () {
    this.$axios.get(`categories`).then((response) => {
      this.categories = response.data
    })

    this.$axios.get(`resources`).then((response) => {
      this.resources = response.data
    })
  }
}
</script>
