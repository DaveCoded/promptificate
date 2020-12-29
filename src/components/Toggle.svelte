<script>
    export let currentMode = "classic";
    export let switchMode;
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding: 0px 4px;
        margin: 1em auto;
        border-radius: 30px;
        border: 1px solid #f1eff4;
        background: linear-gradient(180deg, #f5f4f6, #fcfbfc);
    }

    button {
        padding: 0.8em 1em;
        border-radius: 30px;
        transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }

    button:focus {
        outline: none;
    }

    .active {
        color: white;
        background: linear-gradient(0deg, #2e58f0, #3195ff);
        border: 1px solid #2c79ec;
    }

    .toggle {
        height: 32px;
        width: 52px;
        display: inline-block;
        position: relative;
        margin: 0 auto;
        border: 1px solid #d8eaff;
        background: linear-gradient(30deg, #3d67ff, #238dff);
        transition: all 0.2s ease;
    }

    @media (max-width: 724px) {
        .container {
            padding: 0px 2px;
            margin: 0.4em auto;
        }
        button {
        padding: 0.5em 0.7em;
    }

}
</style>

<div class="container">
    <button
        class={currentMode === 'classic' ? 'active' : ''}
        on:click={() => switchMode('classic')}>Classic</button>

    <button
        class={currentMode === 'advanced' ? 'active' : ''}
        on:click={() => switchMode('advanced')}>Advanced</button>

    <button
        class={currentMode === 'freestyle' ? 'active' : ''}
        on:click={() => switchMode('freestyle')}>Freestyle</button>
</div>
