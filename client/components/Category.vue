<template>
  <div>
    <div class="my-2 text-lg font-extrabold">{{ category.name }}</div>
    <div
      class="flex flex-nowrap space-x-2 bg-rose-300 overflow-x-auto"
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
