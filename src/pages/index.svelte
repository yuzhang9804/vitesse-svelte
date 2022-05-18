<script lang="ts">
  let value = ''

  let name = ''

  const go = () => {
    name = value
  }

</script>

<div>
  <div class="i-carbon-campsite text-4xl inline-block" />
  <p>
    <a rel="noreferrer" href="https://github.com/yuzhang9804/vitesse-lite-react" target="_blank">
      Vitesse Lite
    </a>
  </p>
  <p>
    <em class="text-sm op75">Opinionated Vite Starter Template For Svelte</em>
  </p>

  <div class="py-4"/>

  {#if !name}
    <div>
      <input
        type="text"
        placeholder="What's your name?"
        autoComplete="false"
        class="px-4 py-2 w-250px text-center bg-transparent border border-rounded border-gray-200 dark:text-gray-700 outline-none outline-active:none"
        on:keyup={({ key }) => key === 'Enter' && go()}
        bind:value
      />

      <div>
        <button
          value="{value}"
          class="m-3 text-sm btn"
          disabled={!value}
          on:click={go}
        >
          Go
        </button>
      </div>
    </div>
  {:else}
    <div>
      <div class="i-carbon-pedestrian text-4xl inline-block"/>

      <p>
        Hi, {name}
      </p>

      <div>
        <button class="btn m-3 text-sm mt-8" on:click="{() => { name = '' }}">
          Back
        </button>
      </div>
    </div>
  {/if}

</div>
