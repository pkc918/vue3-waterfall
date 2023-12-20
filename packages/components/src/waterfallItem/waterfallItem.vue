<script setup lang="ts">

import { computed } from "vue";

type WidthType = string | number;
interface WaterfallProps {
  width: WidthType;
}
const props = withDefaults(defineProps<WaterfallProps>(), {
  width: "20%",
});
/* width */
const waterfallItemWidth = computed(() => {
  const type = typeof props.width as WidthType;
  if (type === "string") {
    return props.width;
  } else if (type === "number") {
    return `${props.width}px`;
  } else {
    console.error(`width property just is string or number`);
  }
});
</script>

<template>
<div class="waterfall-item" :style="{width: waterfallItemWidth}">
  <slot/>
</div>
</template>

<style scoped lang="less">
.waterfall-item{
  position: absolute;
}
</style>
<style scoped lang="less">

</style>
