<script setup lang="ts">
import { WaterFall, WaterFallItem } from "@waterfall-plus/components";
</script>

<template>
  <div>
    <WaterFall width="80%">
      <WaterFallItem v-for="item in 22" :key="item">
        {{ item }}
      </WaterFallItem>
    </WaterFall>
  </div>
</template>

<style scoped lang="less">

</style>
