<style>
	h1 {
		color: purple;
	}
</style>

<script>
import Button from '@smui/button';

let bread = 0;
</script>

{#if bread}
Bread was clicked.
{/if}

<Button on:click={ () => bread = 1}>Bread</Button>
