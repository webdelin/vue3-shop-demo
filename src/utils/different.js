export function different(ref, initial, fields = []) {
  return fields.reduce((acc, k) => acc && ref.value[k] !== initial[k], true)
}