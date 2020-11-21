<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
  export interface Category {
    value: string;
    text: string;
  }
</script>

<script lang="ts">
  import { promptsData } from "../data/prompts";
  import { getRandomInt } from "../helpers/mathsHelpers";
  import type { Mode } from "../types/mode.type";

  import CategorySelect from "../components/CategorySelect.svelte";
  import PromptResult from "../components/PromptResult.svelte";
  import Toggle from "../components/Toggle.svelte";

  const categoryOptions = [
    { value: "visualStyle", text: "Visual Style" },
    { value: "designPrinciple", text: "Design Principle" },
    { value: "object", text: "Object" },
    { value: "mood", text: "Mood" },
    { value: "abstractConcept", text: "Abstract Concept" },
  ];

  let promptsArray = [
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

  let isReady = false;
  let mode: Mode = "classic";

  const generate = () => {
    promptsArray = promptsArray.map((prompt) => {
      const dataCategory = promptsData[prompt.category];
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

<style>
  .toggleButton {
    border-radius: 20px;
  }
  .active-mode {
    background-color: #5e5e85;
  }
</style>

<nav><a href="/develop">Develop</a> <a href="/about">About</a></nav>

<h1>Draw this</h1>

<div class="generator-container">
  <Toggle />

  
    {#each promptsArray as prompt, i}
    <div class="prompt-container">
      <CategorySelect
        label={prompt + String(i)}
        bind:boundOption={prompt.category}
        {categoryOptions} />
      <PromptResult
        prompt={prompt.result}
        lockPrompt={() => (prompt.isLocked = !prompt.isLocked)}
        deletePrompt={() => deletePrompt(i)}
        {isReady}
        isLocked={prompt.isLocked}
        {mode} />
    </div>
    {/each}
  
  <button id="addPromptButton" on:click={addPrompt}>
      <svg width="40px" height="40px" viewBox="0 0 40 40" tabindex="0" aria-hidden="true">
          
      </svg>
      <span class="sr-only">Add a prompt</span>
  </button>

  <button class="button" on:click={generate}>Generate!</button>
</div>

<!-- <Timer /> -->
