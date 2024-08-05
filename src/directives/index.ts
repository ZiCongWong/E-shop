import { MaybeComputedElementRef, MaybeElement, MaybeRefOrGetter, useIntersectionObserver } from "@vueuse/core";
interface AppOptions {
  directive: (name: string, options: { mounted(el: any, binding: any): void }) => void;
}

export const lazyPlugin = {
  install(app: AppOptions) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        // 监听图片是否进入可视区域
        //el: 指令所在元素
        //binding: 指令绑定的数据对象
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) { 
            // 图片进入可视区域，加载图片
            const img = new Image();
            img.src = binding.value;
            img.onload = () => {
              el.src = binding.value;
            };
            stop();
          }
        });
      },
    });
  },
};
