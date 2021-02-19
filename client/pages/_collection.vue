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
  data: () => ({
    categories: [],
    resources: []
  }),
  created: async function () {
    const categories = await fetch(`${process.env.apiUrl}/categories?collections_in=${this.$route.params.collection}`)
    this.categories = await categories.json()
    const resources = await fetch(`${process.env.apiUrl}/resources?collections_in=${this.$route.params.collection}`)
    this.resources = await resources.json()
  }
}
</script>
