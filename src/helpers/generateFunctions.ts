import type { FreestylePrompt } from "../types/types"
import { drawPromptsData } from "../data/drawPrompts";
import { devPromptsData } from "../data/devPrompts";
import { getRandomInt } from "./mathsHelpers";

const getRandomResult = (category: string, data: any): string => {
    const options = data[category];
    const randomIndex = getRandomInt(0, options.length);
    return options[randomIndex];
}

export const generateFreestyle = (promptsArray: FreestylePrompt[]) => {
    return promptsArray.map((prompt) => {
        if (!prompt.category) {
            return {
                ...prompt,
                error: "Please select a category"
            }
        }

        return {
            ...prompt,
            error: "",
            result: prompt.isLocked
                ? prompt.result
                : getRandomResult(prompt.category, drawPromptsData)
        };
    });
};

export const generateDevClassic = () => [
    {
        category: "uiComponent",
        result: getRandomResult("uiComponent", devPromptsData)
    },
    {
        category: "inspirator",
        result: getRandomResult("inspirator", devPromptsData)
    }
];

export const generateDevAdvanced = (promptsArray: any[]) => [
    {
        uiComponent: promptsArray[0].isLocked ? promptsArray[0].uiComponent : getRandomResult("uiComponent", devPromptsData),
        inspirator: promptsArray[0].isLocked ? promptsArray[0].inspirator : getRandomResult("inspirator", devPromptsData),
        isLocked: promptsArray[0].isLocked
    },
    {
        challenge: promptsArray[1].isLocked ? promptsArray[1].challenge : getRandomResult("challenge", devPromptsData),
        isLocked: promptsArray[1].isLocked
    }
];

export const generateClassic = () => [
    {
        category: "object",
        result: getRandomResult("object", drawPromptsData)
    },
    {
        category: "abstractConcept",
        result: getRandomResult("abstractConcept", drawPromptsData)
    }
];

export const generateAdvanced = () => [
    {
        category: "object",
        result: getRandomResult("object", drawPromptsData)
    },
    {
        category: "abstractConcept",
        result: getRandomResult("abstractConcept", drawPromptsData)
    },
    {
        category: "visualStyle",
        result: getRandomResult("visualStyle", drawPromptsData)
    }
];
