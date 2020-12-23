<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let advancedResults: FixedPrompt[];

    $: console.log({ advancedResults });
</script>

<p>Advanced</p>
