<script setup lang="ts">
import { computed, ref } from "vue";
import { nextTick } from "@vue/runtime-core";

type WidthType = string | number;
interface WaterfallProps {
  width?: WidthType;
  gap?: number;
  slotWidth?: WidthType;
}
const props = withDefaults(defineProps<WaterfallProps>(), {
  width: "100%",
  gap: 10,
  slotWidth: "20%"
});

/* width */
const waterfallWidth = computed(() => {
  const type = typeof props.width as WidthType;
  if (type === "string") {
    return props.width;
  } else if (type === "number") {
    return `${props.width}px`;
  } else {
    console.error(`width property just is string or number`);
  }
});

const waterfallContainer = ref<HTMLDivElement>();
nextTick(() => {
  console.log(waterfallContainer.value?.children);
})
</script>
<template>
  <div
    ref="waterfallContainer"
    class="waterfall-vue3"
    :style="{ width: waterfallWidth }"
  >
    <slot/>
  </div>
</template>

<style scoped lang="less">
.waterfall-vue3 {
  position: relative;
  background: rgba(0, 24, 100, 0.2);
}
</style>
