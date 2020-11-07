<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string
        text: string
    }
</script>

<script lang="ts">
    import CategorySelect from '../components/CategorySelect.svelte'
    import { fade } from 'svelte/transition'
    import { prompts } from '../data/prompts'

    let isReady: boolean = false

    let firstOption: string
    let secondOption: string
    let thirdOption: string

    let firstPrompt: string
    let secondPrompt: string
    let thirdPrompt: string

    let categories = [
        { value: 'visualStyle', text: 'Visual style' },
        { value: 'principal', text: 'Principal' },
        { value: 'object', text: 'Object' },
        { value: 'mood', text: 'Mood' },
        { value: 'abstractConcept', text: 'Abstract concept' }
    ]

    function generate() {
        // Random number in range: 0 - array.length
        function getRandomInt(min: number, max: number): number {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min) + min)
        }

        console.log(prompts[firstOption])
        const firstIndex = getRandomInt(0, prompts[firstOption].length)
        const secondIndex = getRandomInt(0, prompts[secondOption].length)
        const thirdIndex = getRandomInt(0, prompts[thirdOption].length)

        firstPrompt = prompts[firstOption][firstIndex]
        secondPrompt = prompts[secondOption][secondIndex]
        thirdPrompt = prompts[thirdOption][thirdIndex]

        isReady = true
    }
</script>

<nav><a href="/develop">Develop</a> <a href="/about">About</a></nav>
<h1>Draw this</h1>

<h2>Categories</h2>

<!-- {categories} is the same as saying categories={categories} -->
<CategorySelect label="firstOption" bind:boundOption={firstOption} {categories} />
<CategorySelect label="secondOption" bind:boundOption={secondOption} {categories} />
<CategorySelect label="thirdOption" bind:boundOption={thirdOption} {categories} />

<p>First: {firstOption}</p>
<p>Second: {secondOption}</p>
<p>Third: {thirdOption}</p>

<button on:click={generate}>GO</button>

<h3>Prompts</h3>

{#if isReady}
    <div transition:fade>
        <h4>{firstPrompt}</h4>
        <h4>{secondPrompt}</h4>
        <h4>{thirdPrompt}</h4>
    </div>
{/if}
