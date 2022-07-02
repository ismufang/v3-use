import { ref, onMounted, Ref } from 'vue'

export default function useFirstMountState(): Ref<boolean> {
  const isFirst = ref(true)

  onMounted(() => {
    isFirst.value = false
  })

  return isFirst
}
