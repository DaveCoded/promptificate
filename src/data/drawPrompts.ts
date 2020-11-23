// This helps TypeScript understand that the data can be indexed with a string
interface PromptKeys {
    [key: string]: string[];
}

interface DrawPromptsData extends PromptKeys {
    visualStyle: string[],
    designPrinciple: string[],
    object: string[],
    mood: string[],
    abstractConcept: string[]
}

export let drawPromptsData: DrawPromptsData = {
    visualStyle: ['Punk rock', 'Bauhaus', '1960s Psychadelics', '1920s Fighter pilot'],
    designPrinciple: [
        'Value',
        'Negative space',
        'Colour',
        'Proximity',
        'Similarity',
        'Continuity',
        'Figure'
    ],
    object: ['Banana', 'Book', 'Stiletto', 'Porcupine', 'Samurai sword', 'Shrubbery'],
    mood: ['Anxious', 'Sombre', 'Regretful', 'Capricious', 'Existential', 'Morbid'],
    abstractConcept: [
        'Modern monetary theory',
        'State management',
        'Liminality',
        'The subconscious',
        'APIs',
        'Indirect voice'
    ]
}
