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

    let classicPrompts: FixedPrompt[] = generateClassic();
    let advancedPrompts: FixedPrompt[] = generateAdvanced();

    let promptsArray: FreestylePrompt[] = [
        {
            category: "object",
            result: "",
            isLocked: false,
        },
        {
            category: "visualStyle",
            result: "",
            isLocked: false,
        },
        {
            category: "designPrinciple",
            result: "",
            isLocked: false,
        },
    ];
    promptsArray = generateFreestyle(promptsArray);

    const categoryOptions = [
        { value: "visualStyle", text: "Visual Style" },
        { value: "designPrinciple", text: "Design Principle" },
        { value: "object", text: "Object" },
        { value: "mood", text: "Mood" },
        { value: "abstractConcept", text: "Abstract Concept" },
    ];

    let mode: Mode = "classic";
    let generate: () => void;

    $: if (mode === "classic") {
        generate = () => (classicPrompts = generateClassic());
    } else if (mode === "advanced") {
        generate = () => (advancedPrompts = generateAdvanced());
    } else {
        generate = () => {
            promptsArray = generateFreestyle(promptsArray);
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

<div class="generator-container">
    <Toggle
        modes={['classic', 'advanced', 'freestyle']}
        currentMode={mode}
        {switchMode} />

    {#if mode === 'classic'}
        <Classic prompts={classicPrompts} />
    {:else if mode === 'advanced'}
        <Advanced prompts={advancedPrompts} />
    {:else}
        <Freestyle
            {promptsArray}
            {categoryOptions}
            {addPrompt}
            {deletePrompt} />
    {/if}

    <button class="promptButton" on:click={generate}>Prompt Me!</button>
</div>
