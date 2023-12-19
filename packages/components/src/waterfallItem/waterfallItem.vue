<script setup lang="ts">
import { computed } from "vue";

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
</script>

<template>
<div class="item">
  <slot/>
</div>
</template>

<style scoped lang="less">

</style>
