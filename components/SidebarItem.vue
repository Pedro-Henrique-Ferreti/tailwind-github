<template>
  <div class="py-6 border-b border-gray-300">
    <div class="flex items-center justify-between">
      <h4 class="text-base font-semibold">{{ title }}</h4>
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    title: String,
  },
};
</script>
