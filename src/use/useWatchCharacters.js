import { watch } from 'vue'

export function useWatchCharacters (valueToWatch, maxCharacters) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxCharacters) {
      alert(`太長${maxCharacters}`)
    }
  });
}