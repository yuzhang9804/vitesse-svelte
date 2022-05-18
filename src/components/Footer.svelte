<script lang="ts">
  import { useDark } from '../hooks'

  let isDark

  const { toggle } = useDark(isDark)

  $: isDark, toggle()
</script>

<nav class="text-xl mt-6 inline-flex gap-2">
  <button class="icon-btn !outline-none" on:click={toggle}>
  {#if isDark}
    <div class="i-carbon-moon" />
  {:else}
  <div class="i-carbon-sun" />
  {/if}
  </button>

  <!-- svelte-ignore a11y-missing-content -->
  <a
    class="icon-btn i-carbon-logo-github"
    rel="noreferrer"
    href="https://github.com/yuzhang9804/vitesse-svelte"
    target="_blank"
    title="Github"
  />
</nav>
