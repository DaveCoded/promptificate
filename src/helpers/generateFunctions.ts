import type { FreestylePrompt } from "../types/types"
import { drawPromptsData } from "../data/drawPrompts";
import { getRandomInt } from "./mathsHelpers";

const getRandomResult = (category: string): string => {
    const options = drawPromptsData[category];
    const randomIndex = getRandomInt(0, options.length);
    return options[randomIndex];
}

export const generateFreestyle = (promptsArray: FreestylePrompt[]) => {
    return promptsArray.map((prompt) => {
        return {
            ...prompt,
            result: prompt.isLocked
                ? prompt.result
                : getRandomResult(prompt.category)
        };
    });
};

export const generateClassic = () => [
    {
        category: "object",
        result: getRandomResult("object")
    },
    {
        category: "abstractConcept",
        result: getRandomResult("abstractConcept")
    }
];

export const generateAdvanced = () => [
    {
        category: "object",
        result: getRandomResult("object")
    },
    {
        category: "abstractConcept",
        result: getRandomResult("abstractConcept")
    },
    {
        category: "visualStyle",
        result: getRandomResult("visualStyle")
    }
];
