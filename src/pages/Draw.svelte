<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string;
        text: string;
    }

    export interface FreestylePrompt {
        category: string;
        result: string;
        isLocked: boolean;
    }
</script>

<script lang="ts">
    import { drawPromptsData } from "../data/drawPrompts";
    import { getRandomInt } from "../helpers/mathsHelpers";
    import type { Mode } from "../types/mode.type";

    import Toggle from "../components/Toggle.svelte";
    import Classic from "../components/Classic.svelte";
    import Advanced from "../components/Advanced.svelte";
    import Freestyle from "../components/Freestyle.svelte";

    let promptsArray: FreestylePrompt[] = [
        {
            category: "",
            result: "",
            isLocked: false,
        },
        {
            category: "",
            result: "",
            isLocked: false,
        },
    ];

    const categoryOptions = [
        { value: "visualStyle", text: "Visual Style" },
        { value: "designPrinciple", text: "Design Principle" },
        { value: "object", text: "Object" },
        { value: "mood", text: "Mood" },
        { value: "abstractConcept", text: "Abstract Concept" },
    ];

    let isReady = false;
    let mode: Mode = "classic";

    const generate = () => {
        promptsArray = promptsArray.map((prompt) => {
            const dataCategory = drawPromptsData[prompt.category];
            let index = getRandomInt(0, dataCategory.length);
            return {
                ...prompt,
                result: prompt.isLocked ? prompt.result : dataCategory[index],
            };
        });
        isReady = true;
    };

    const addPrompt = () =>
        (promptsArray = [
            ...promptsArray,
            { category: "", result: "", isLocked: false },
        ]);

    const deletePrompt = (index: number) =>
        (promptsArray = promptsArray.filter((_p, i) => i !== index));

    const switchMode = (newMode: Mode) => (mode = newMode);
</script>

<nav><a href="/develop">Develop</a> <a href="/about">About</a></nav>

<h1>Draw this</h1>

<div class="generator-container">
    <Toggle currentMode={mode} {switchMode} />

    {#if mode === 'classic'}
        <Classic />
    {:else if mode === 'advanced'}
        <Advanced />
    {:else}
        <Freestyle
            {promptsArray}
            {categoryOptions}
            {isReady}
            {mode}
            {addPrompt}
            {deletePrompt} />
    {/if}

    <button class="button" on:click={generate}>Prompt Me!</button>
</div>

<!-- <Timer /> -->
