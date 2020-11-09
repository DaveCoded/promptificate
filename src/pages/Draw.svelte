<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string
        text: string
    }

    export interface Prompt {
        value: string
        isLocked: boolean
    }
</script>

<script lang="ts">
    import CategorySelect from '../components/CategorySelect.svelte'
    import PromptResult from '../components/PromptResult.svelte'

    import { promptsData } from '../data/prompts'
    import Timer from '../components/Timer.svelte'

    let isReady: boolean = false

    let firstOption: string
    let secondOption: string
    let thirdOption: string

    let firstPrompt: Prompt = {
        value: '',
        isLocked: false
    }
    let secondPrompt: Prompt = {
        value: '',
        isLocked: false
    }
    let thirdPrompt: Prompt = {
        value: '',
        isLocked: false
    }

    let categories = [
        { value: 'visualStyle', text: 'Visual style' },
        { value: 'principle', text: 'Principle' },
        { value: 'object', text: 'Object' },
        { value: 'mood', text: 'Mood' },
        { value: 'abstractConcept', text: 'Abstract concept' }
    ]

    function generate() {
        function getRandomInt(min: number, max: number): number {
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min) + min)
        }

        const firstIndex = getRandomInt(0, promptsData[firstOption].length)
        const secondIndex = getRandomInt(0, promptsData[secondOption].length)
        const thirdIndex = getRandomInt(0, promptsData[thirdOption].length)

        if (!firstPrompt.isLocked) {
            firstPrompt.value = promptsData[firstOption][firstIndex]
        }
        if (!secondPrompt.isLocked) {
            secondPrompt.value = promptsData[secondOption][secondIndex]
        }
        if (!thirdPrompt.isLocked) {
            thirdPrompt.value = promptsData[thirdOption][thirdIndex]
        }

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
