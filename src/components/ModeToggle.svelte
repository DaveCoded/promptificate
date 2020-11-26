<script lang="ts">
    import type { Mode } from '../types/mode.type'

    export let mode: Mode
    export let onChangeMode: (event: Event) => void
</script>

<div class="toggleContainer">
    <div>
        <label>
            <input
                type="radio"
                value="classic"
                checked={mode === 'classic'}
                on:change={onChangeMode}
                name="mode" />
            Classic
        </label>
        <label>
            <input
                type="radio"
                value="freestyle"
                checked={mode === 'freestyle'}
                on:change={onChangeMode}
                name="mode" />
            Freestyle
        </label>
    </div>
</div>
