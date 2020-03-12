<style>
	h1 {
		color: purple;
	}
</style>

<script>
let bread = 0;
</script>

{#if bread}
Bread was clicked.
{/if}

<button on:click={ () => bread = 1}>Bread</button>
