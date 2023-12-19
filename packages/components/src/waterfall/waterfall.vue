<script setup lang="ts">
import { computed, ref, nextTick } from "vue";

type WidthType = string | number;
interface WaterfallProps {
  width: WidthType;
}
const props = withDefaults(defineProps<WaterfallProps>(), {
  width: "100%",
});
const positions = ref<number[]>([]);

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
const items = ref<HTMLDivElement[]>([]);
const waterfallContainer = ref<HTMLDivElement>();
const cal = () => {
  const containerWidth =
    typeof props.width === "number"
      ? props.width
      : (waterfallContainer.value?.getBoundingClientRect().width as number);

  console.log("容器宽度", containerWidth);
  const columns = parseInt(String(containerWidth / (400 + 10)));
  console.log("列数", columns);
  // for (let index = 0; index < columns; index++) {
  //   positions.value.push(index);
  // }
  console.log("所有子元素", items.value);
  for (let index = 0; index < items.value.length; index++) {
    if (index < columns) {
      items.value[index].style.top = "0";
      items.value[index].style.left = `${index * (400 + 10)}px`;
      positions.value.push(items.value[index].offsetHeight);
    } else {
      let minHeight = positions.value[0];
      let i = 0;
      for (let j = 0; j < positions.value.length; j++) {
        if (minHeight > positions.value[j]) {
          minHeight = positions.value[j];
          i = j;
        }
      }
      items.value[index].style.top = `${positions.value[i] + 10}px`;
      items.value[index].style.left = `${i * (400 + 10)}px`;
      positions.value[i] += items.value[index].offsetHeight + 10;
    }
  }
};
nextTick(() => {
  cal();
});
</script>
<template>
  <div
    ref="waterfallContainer"
    class="waterfall-vue3"
    :style="{ width: waterfallWidth }"
  >
    <div
      v-for="(item, index) in 44"
      ref="items"
      :key="item"
      class="item"
      :class="`item-${item % 22}`"
    >
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="less">
.waterfall-vue3 {
  position: relative;
  background: rgba(0, 24, 100, 0.2);
}
.item {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  color: aliceblue;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 400px;
  position: absolute;
}
.item-1 {
  background-color: rgb(206, 169, 169);
  height: 300px;
}
.item-2 {
  background-color: rgb(131, 226, 174);
  height: 150px;
}
.item-3 {
  background-color: rgb(77, 30, 30);
  height: 350px;
}
.item-4 {
  background-color: rgb(49, 62, 134);
  height: 300px;
}
.item-5 {
  background-color: rgb(230, 99, 99);
  height: 200px;
}
.item-6 {
  background-color: rgb(206, 169, 169);
  height: 300px;
}
.item-7 {
  background-color: rgb(124, 126, 145);
  height: 400px;
}
.item-8 {
  background-color: rgb(169, 199, 38);
  height: 230px;
}
.item-9 {
  background-color: rgb(114, 128, 53);
  height: 300px;
}
.item-10 {
  background-color: rgb(48, 54, 18);
  height: 260px;
}
.item-11 {
  background-color: rgb(118, 122, 96);
  height: 230px;
}
.item-12 {
  background-color: rgb(118, 122, 96);
  height: 240px;
}
.item-13 {
  background-color: rgb(118, 122, 96);
  height: 250px;
}
.item-14 {
  background-color: rgb(118, 122, 96);
  height: 270px;
}
.item-15 {
  background-color: rgb(118, 122, 96);
  height: 330px;
}
.item-16 {
  background-color: rgb(118, 122, 96);
  height: 200px;
}
.item-17 {
  background-color: rgb(118, 122, 96);
  height: 100px;
}
.item-18 {
  background-color: rgb(118, 122, 96);
  height: 400px;
}
.item-19 {
  background-color: rgb(118, 122, 96);
  height: 340px;
}
.item-20 {
  background-color: rgb(118, 122, 96);
  height: 350px;
}
.item-21 {
  background-color: rgb(118, 122, 96);
  height: 360px;
}
.item-0 {
  background-color: rgb(118, 122, 96);
  height: 370px;
}
</style>
