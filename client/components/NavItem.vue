<template>
  <li>
    <a
      :href="href"
      :class="[['block', 'text-sm', 'mr-2', { 'border-b-2 border-black font-bold': isActive }]]"
    >
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    isActive: Boolean,
  }
}
</script>
