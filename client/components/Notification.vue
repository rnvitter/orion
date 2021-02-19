<template>
  <div :class="`text-white px-6 py-4 border-0 rounded relative mb-4 bg-${color}-500`">
    <span class="inline-block align-middle mr-8">
      {{ message }}
    </span>
  </div>
</template>

<script>
const props = {
  message: String,
  color: String
}

export default {
  props
}
</script>
