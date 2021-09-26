import {onBeforeRouteLeave} from 'vue-router'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export function useLeaveGuard(hasChanges) {
  const router = useRouter()
  const leave = ref(false)
  const canLeave = ref(false)
  const leaveTo = ref(null)

  const navigate = async ( ) => {
    leave.value = false
    canLeave.value = true
    await router.push(leaveTo.value)
  }

  onBeforeRouteLeave(to => {
    if (canLeave.value) {
      return true
    }

    if (hasChanges.value) {
      leave.value = true
      leaveTo.value = to.path
      return false
    }

    return true
  })

  return {leave, navigate}
}