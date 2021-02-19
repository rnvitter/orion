<template>
  <div>
    <div class="my-2 text-lg font-extrabold animate-fadeIn">{{ category.name }}</div>
    <div
      class="whitespace-no-wrap space-x-2 overflow-x-auto overflow-y-hidden"
      style="height: 220px;">
      <resource
        v-for="item in resources"
        :key="item.id"
        :item="item">
      </resource>
    </div>
  </div>
</template>

<script>
const props = {
  category: {
    type: Object,
    required: true
  },
  resources: {
    type: Array,
    required: true
  }
}

export default {
  props
}
</script>
