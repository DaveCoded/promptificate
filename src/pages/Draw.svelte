<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string
        text: string
    }
</script>

<script lang="ts">
    import CategorySelect from '../components/CategorySelect.svelte'
    import PromptResult from '../components/PromptResult.svelte'

    import { prompts } from '../data/prompts'
    import Timer from '../components/Timer.svelte'

    let isReady: boolean = false

    let firstOption: string
    let secondOption: string
    let thirdOption: string

    let firstPrompt: string
    let secondPrompt: string
    let thirdPrompt: string

    let categories = [
        { value: 'visualStyle', text: 'Visual style' },
        { value: 'principle', text: 'Principle' },
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

<div class="generator-container">
    <CategorySelect label="firstOption" bind:boundOption={firstOption} {categories} />
    <PromptResult {isReady} prompt={firstPrompt} />

    <CategorySelect label="secondOption" bind:boundOption={secondOption} {categories} />
    <PromptResult {isReady} prompt={secondPrompt} />

    <CategorySelect label="thirdOption" bind:boundOption={thirdOption} {categories} />
    <PromptResult {isReady} prompt={thirdPrompt} />

    <button on:click={generate}>Generate!</button>
</div>

<Timer />
