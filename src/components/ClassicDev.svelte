<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];
</script>

<p>Classic Dev</p>
<p>Prompts</p>
{#each prompts as prompt}{prompt}{/each}
