<template>
  <div class="sidebar-item py-6 border-t border-gray-300">
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

<style lang="scss" scoped>
.sidebar-item:first-child {
  padding-top: 0;
  border-top: 0;
}
</style>
