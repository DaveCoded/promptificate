<script lang="ts">
    import { onMount } from 'svelte';

    let isDarkMode: boolean = false
    onMount(() => {
        isDarkMode = !!document.querySelector('.darkWrapper');
    });
    $: openColor = isDarkMode ? '#5E7C9B' : "#989CBB"
    $: lockedColor = isDarkMode ? '#B2D75F' : "#878CB0"

    export let width: number = 16;
    export let isLocked: boolean = false;
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} height={width} viewBox="0 -35 240 298">
    <g id="Whole_Padlock" data-name="Whole Padlock" transform="translate(-841 -343.027)">
        <path
            id="Rectangle"
            d="M30,0H210c16.569,0,30,11.394,30,25.449V132.334c0,14.055-13.431,25.449-30,25.449H30c-16.569,0-30-11.394-30-25.449V25.449C0,11.394,13.431,0,30,0Z"
            transform="translate(841 448)"
            fill={isLocked ? lockedColor : openColor}
        />
        <path
            id="Path_1"
            data-name="Path 1"
            d="M880.815,474.909v-84.4s-1.866-55.482,76.516-55.482,77.48,55.482,77.48,55.482v33.369"
            transform={isLocked ? 'translate(3.189 25)' : 'translate(3.189 -10)'}
            fill="none"
            stroke={isLocked ? lockedColor : openColor}
            stroke-width="34"
        />
    </g>
</svg>

<style>
    #Path_1 {
        transition: all 0.3s ease-out;
    }

</style>
