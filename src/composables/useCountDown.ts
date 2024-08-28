import {computed, ComputedRef, onUnmounted, ref} from "vue";
import dayjs from "dayjs";


/**
 * @description: 格式化时间
 * @return {
 *     formatTime:格式化时间文本,
 *     start:计时时长
 * }
 */
export const useCountDown = () => {
    let timer: any = null
    //1.响应式的数据
    const time = ref(0)
    //格式化时间
    const formatTime: ComputedRef<any> = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    //2.开始倒计时的函数
    const start = (currentTime) => {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {formatTime, start}
}