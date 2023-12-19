import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WaterFall: typeof components.WaterFall;
    WaterFallItem: typeof components.WaterFallItem;
  }
}
export {};
