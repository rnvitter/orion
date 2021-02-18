<template>
  <li>
    <a
      :href="href"
      :class="[['block', 'px-4', 'py-2', 'rounded-lg', { 'bg-black text-white': isActive }]]"
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
