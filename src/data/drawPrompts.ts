// This helps TypeScript understand that the data can be indexed with a string
interface PromptKeys {
  [key: string]: string[];
}

interface DrawPromptsData extends PromptKeys {
  visualStyle: string[];
  designPrinciple: string[];
  object: string[];
  mood: string[];
  abstractConcept: string[];
}

export let drawPromptsData: DrawPromptsData = {
  visualStyle: [
    "Bauhaus",
    "1960s Psychadelics",
    "Art nouveau",
    "Midcentury modern",
    "Cubism",
    "Brutalism",
    "Art deco",
    "Celtic folk art",
    "Cave art",
    "Aztec carvings",
  ],
  designPrinciple: [
    "Negative space",
    "Proximity",
    "Similarity",
    "Continuity",
    "Figure/Ground",
    "Symmetry",
    "Common Fate",
    "Substitute",
    "Combine",
    "Adapt",
    "Magnify",
    "Minimize",
    "Maximize",
    "Put it to other uses",
    "Eliminate",
    "Reverse",
    "Rearrange"
  ],
  object: [
    "Miniature banana",
    "Used book",
    "Tweed jacket",
    "Porcupine",
    "Samurai sword",
    "Shrubbery",
    "Fugly Christmas sweater",
    "Kermit the Frog",
    "Aquaduct system",
    "Pineapple",
    "Scrabble tiles",
    "Swiss army knife",
    "Potato peeler",
    "Light saber",
    "Umbrella",
    "Toaster Oven",
    "Pop Tarts",
    "Paleolithic stone tools",
    "Vending machine"
  ],
  mood: [
    "Anxious",
    "Sombre",
    "Regretful",
    "Capricious",
    "Existential",
    "Morbid",
  ],
  abstractConcept: [
    "Modern monetary theory",
    "State management",
    "Liminality",
    "The subconscious",
    "APIs",
    "Indirect voice",
    "Bad karma",
    "Temptation",
    "Passive aggressive pettiness",
    "A glitch in the Matrix",
    "Unrequited love",
    "Overconfident white dudes",
  ],
};
