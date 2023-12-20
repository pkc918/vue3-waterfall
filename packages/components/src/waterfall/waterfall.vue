<script setup lang="ts">
import { computed, ref } from "vue";
import { nextTick } from "@vue/runtime-core";

type WidthType = string | number;
interface WaterfallProps {
  width: WidthType;
  gap?: number;
}
const props = withDefaults(defineProps<WaterfallProps>(), {
  width: "100%",
  gap: 10,
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
const cal = () => {
  const waterfallItemWidth = waterfallContainer.value?.children[0].getBoundingClientRect().width;
  const waterfallWidth = typeof props.width === "string" ? waterfallContainer.value?.getBoundingClientRect().width : props.width;
  const columns = Math.floor(waterfallWidth! / waterfallItemWidth!);
  const spaceSum = columns - 1;
  const spaceWidth = waterfallWidth! - columns * waterfallItemWidth!;
  const spaceItemWidth = spaceWidth / spaceSum;
  return {
    spaceItemWidth: spaceItemWidth,
    waterfallWidth: waterfallWidth,
    waterfallItemWidth: waterfallItemWidth,
    columns: columns
  };
};

const setPosition = () => {
  const {spaceItemWidth, waterfallItemWidth = 0, columns} = cal();
  const length = waterfallContainer.value?.children.length || 0;
  let positions: number[] = [];
  for (let i = 0; i < length; i++) {
    if (i < columns) {
      (waterfallContainer.value?.children[i] as HTMLDivElement).style.top = "0";
      (waterfallContainer.value?.children[i] as HTMLDivElement).style.left = `${i * (spaceItemWidth + waterfallItemWidth)}px`;
      positions.push((waterfallContainer.value?.children[i] as HTMLDivElement).offsetHeight);
    } else {
      let minIndex = 0;
      let minHeight = positions[0];
      for (let j = 0; j < positions.length; j++) {
        if (minHeight > positions[j]) {
          minHeight = positions[j];
          minIndex = j;
        }
      }
      (waterfallContainer.value?.children[i] as HTMLDivElement).style.top = `${positions[minIndex] + spaceItemWidth}px`;
      (waterfallContainer.value?.children[i] as HTMLDivElement).style.left = `${minIndex * (spaceItemWidth + waterfallItemWidth)}px`;
      console.log(positions);
      positions[minIndex] = (waterfallContainer.value?.children[i] as HTMLDivElement).offsetHeight + spaceItemWidth;
    }
  }
};

nextTick(() => {
  console.log(waterfallContainer.value?.children);
  setPosition();
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
