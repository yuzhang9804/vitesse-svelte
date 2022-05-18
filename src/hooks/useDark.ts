import { onMount } from 'svelte'

const DARK_NAME = 'dark'

export const useDark = (isDark) => {
  onMount(() => {
    isDark = !!Array.from(document.documentElement.classList).includes(DARK_NAME)
  })

  const toggle = () => {         
    isDark = !isDark
    console.log(isDark);
   }

  return {
    isDark,
    toggle
  }
}
