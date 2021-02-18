<template>
  <div class="flex py-2 mb-2">
    <div class="flex-none font-extrabold text-lg">Orion</div>
    <ul class="flex-grow flex justify-center space-x-2">
      <nav-item
        v-for="(route, index) in routes"
        :key="index"
        :href="route.href"
        :isActive="$route.fullPath === route.href">
        {{ route.name }}
      </nav-item>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { name: 'Home', href: '/' },
      { name: 'BLM', href: '/blm' },
      { name: 'Green', href: '/green' }
    ]
  })

}
</script>
