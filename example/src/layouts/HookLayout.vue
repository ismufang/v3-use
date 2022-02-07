<template>
  <div class="hook-container">
    <div class="hook-container-title">
      <slot name="title" />
    </div>
    <div class="hook-container-content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hook-container {
  padding: 15px 0;
  &-title {
    font-size: 18px;
    font-weight: bold;
    color: #252525;
    margin-bottom: 15px;
  }
  &-content {
    font-size: 16px;
    color: #333333;
  }
}
</style>
