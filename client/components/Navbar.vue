<template>
  <div class="flex items-center py-2 mb-2">
    <div class="flex-none font-extrabold text-lg uppercase">Orion</div>
    <ul class="flex-grow flex space-x-1 mx-2">
      <nav-item
        href="/"
        :isActive="$route.name === 'index'">
        Home
      </nav-item>
      <nav-item
        v-for="collection in collections"
        :key="collection.id"
        :href="collection.id.toString()"
        :isActive="$route.params.collection === collection.id.toString()">
        {{ collection.name }}
      </nav-item>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    collections: [
      { id: 1, name: 'Black Lives Matter' },
      { id: 2, name: 'Climate Change' }
    ]
  })
}
</script>
