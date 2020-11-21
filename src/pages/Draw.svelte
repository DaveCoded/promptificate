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
  
<div class="addPrompt">
  <span>Add a prompt</span>
  <button on:click={addPrompt}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" tabindex="0" aria-hidden="true">
        <circle cx="18" cy="18" r="18" fill="#fff" />
        <rect x="8.52637" y="20.915" width="5.82996" height="18.9474" transform="rotate(-90 8.52637 20.915)" fill="rgb(152, 156, 187)"/>
        <rect x="21.0317" y="27.4738" width="6.06316" height="18.9474" transform="rotate(180 21.0317 27.4738)" fill="rgb(152, 156, 187)"/>
        </svg>
  </button>
</div>

  <button class="button" on:click={generate}>Generate!</button>
</div>

<!-- <Timer /> -->
