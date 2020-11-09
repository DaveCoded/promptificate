<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string
        text: string
    }
</script>

<script lang="ts">
    import { promptsData } from '../data/prompts'
    import { getRandomInt } from '../helpers/mathsHelpers'

    import CategorySelect from '../components/CategorySelect.svelte'
    import PromptResult from '../components/PromptResult.svelte'
    import Timer from '../components/Timer.svelte'

    const categoryOptions = [
        { value: 'visualStyle', text: 'Visual style' },
        { value: 'principle', text: 'Principle' },
        { value: 'object', text: 'Object' },
        { value: 'mood', text: 'Mood' },
        { value: 'abstractConcept', text: 'Abstract concept' }
    ]

    let promptsArray = [
        {
            category: '',
            result: '',
            isLocked: false
        },
        {
            category: '',
            result: '',
            isLocked: false
        }
    ]

    let isReady = false

    const generate = () => {
        promptsArray = promptsArray.map(prompt => {
            let index = getRandomInt(0, promptsData[prompt.category].length)
            return {
                ...prompt,
                result: prompt.isLocked ? prompt.result : promptsData[prompt.category][index]
            }
        })
        isReady = true
    }

    const addPrompt = () =>
        (promptsArray = [...promptsArray, { category: '', result: '', isLocked: false }])
</script>

<nav><a href="/develop">Develop</a> <a href="/about">About</a></nav>

<h1>Draw this</h1>
<h2>Categories</h2>

<div class="generator-container">
    {#each promptsArray as prompt, i}
        <CategorySelect
            label={prompt + String(i)}
            bind:boundOption={prompt.category}
            {categoryOptions} />
        <PromptResult
            prompt={prompt.result}
            lockPrompt={() => (prompt.isLocked = !prompt.isLocked)}
            {isReady}
            isLocked={prompt.isLocked} />
    {/each}

    <button on:click={generate}>Generate!</button>
    <button on:click={addPrompt}>Add a prompt</button>
</div>

<Timer />
