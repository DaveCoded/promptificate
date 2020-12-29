<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string;
        text: string;
    }
</script>

<script lang="ts">
    import {
        generateClassic,
        generateAdvanced,
        generateFreestyle,
    } from "../helpers/generateFunctions";
    import type { Mode, FreestylePrompt, FixedPrompt } from "../types/types";

    import Navbar from "../components/Navbar.svelte";
    import Toggle from "../components/Toggle.svelte";
    import Classic from "../components/Classic.svelte";
    import Advanced from "../components/Advanced.svelte";
    import Freestyle from "../components/Freestyle.svelte";

    let classicPrompts: FixedPrompt[];
    let advancedPrompts: FixedPrompt[];

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
    let generate: () => void;

    $: if (mode === "classic") {
        generate = () => (classicPrompts = generateClassic());
    } else if (mode === "advanced") {
        generate = () => (advancedPrompts = generateAdvanced());
    } else {
        generate = () => {
            promptsArray = generateFreestyle(promptsArray);
            isReady = true;
        };
    }

    const addPrompt = () =>
        (promptsArray = [
            ...promptsArray,
            { category: "", result: "", isLocked: false },
        ]);

    const deletePrompt = (index: number) =>
        (promptsArray = promptsArray.filter((_p, i) => i !== index));

    const switchMode = (newMode: Mode) => (mode = newMode);
</script>

<Navbar />

<h1>Draw this</h1>

<div class="generator-container">
    <Toggle currentMode={mode} {switchMode} />

    {#if mode === 'classic'}
        <Classic prompts={classicPrompts} />
    {:else if mode === 'advanced'}
        <Advanced prompts={advancedPrompts} />
    {:else}
        <Freestyle
            {promptsArray}
            {categoryOptions}
            {isReady}
            {addPrompt}
            {deletePrompt} />
    {/if}

    <button class="button" on:click={generate}>Prompt Me!</button>
</div>

