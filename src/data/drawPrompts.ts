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
        "The Simpsons",
        "Pop art",
        "Egyptian heiroglyphics",
        "Pixel art",
        "Brutalism",
        "Cubo-futurism",
        "Graffiti",
        "De Stijl",
        "Kinetic pointillism",
        "Kitsch",
        "Mingei",
        "Optical illusions",
        "Retrofuturism",
        "Ukiyo-e",
        "Calvin and Hobbes",
        "Wes Anderson"
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
        "a miniature banana",
        "a used book",
        "a tweed jacket",
        "a porcupine",
        "a samurai sword",
        "a shrubbery",
        "a fugly Christmas sweater",
        "Kermit the Frog",
        "an aquaduct system",
        "a pineapple",
        "Scrabble tiles",
        "a Swiss army knife",
        "a potato peeler",
        "a lightsaber",
        "an umbrella",
        "a toaster Oven",
        "Pop Tarts",
        "Paleolithic stone tools",
        "a vending machine",
        "carrot sticks",
        "a beret",
        "a telescope",
        "a sextant",
        "Bing Crosby's sweater",
        "a full English breakfast",
        "a pot goulash",
        "a stack of mince pies",
        "a human pyramid",
        "a blunt pencil",
        "an x-ray",
        "a traffic accident",
        "the Bill of Rights",
        "a wicked witch",
        "a Matrix coat",
        "a dead bouquet",
        "a single scissor",
        "a sad sandwich",
        "a CCTV camera",
        "a mouse hole",
        "a bear trap",
        "a partridge in a pear tree",
        "two turtle doves",
        "three french hens",
        "four calling birds",
        "FIVE GOLD RINGS",
        "six geese a-laying",
        "seven swans a-swimming",
        "eight maids a-milking",
        "nine ladies dancing",
        "ten lords a-leaping",
        "eleven pipers piping",
        "twelve drummers drumming",
        "a gender-neutral merperson",
        "a snorkel",
        "a treadmill",
        "dumbells",
        "a china teacup",
        "a matador's cape",
        "a sacrificial altar",
        "wedding bands",
        "a tiered cake",
        "magic mushrooms",
        "a Rubik's cube",
        "a chess set",
        "a ceremonial gong",
        "a stamped letter",
        "assless chaps",
        "handcuffs",
        "a raven",
        "a snowflake",
        "a poisoned rose",
        "a hippopotamus",
        "a cereal box",
        "a Christmas ornament",
        "the juice of a thousand oranges"
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
        "modern monetary theory",
        "state management",
        "liminality",
        "the subconscious",
        "APIs",
        "indirect voice",
        "bad karma",
        "temptation",
        "passive aggressive pettiness",
        "a glitch in the Matrix",
        "unrequited love",
        "overconfident white dudes",
        "the Patriarchy",
        "parental dissapointment",
        "filial piety",
        "civil disobedience",
        "Instagram influencer culture",
        "commodifying children's hopes and dreams",
        "the subprime mortgage crisis",
        "domestic 'terrorism'",
        "fully automated luxury communism",
        "indifference to poverty",
        "digital detoxing",
        "the Paleo diet",
        "seasonal affectedness disorder",
        "Adderall addiction",
        "the dark net",
        "judgement day",
        "class inequality",
        "Cartesian dualism",
        "commodity fetishism",
        "tall poppy syndrome",
        "outrage porn",
        "clickbait",
        "feral children",
        "obsessive compulsive disorder",
        "being too high",
        "grammar Nazism",
        "pedantry",
        "the overton window",
        "effective altruism",
        "turtles all the way down",
        "moral relativism",
        "transhumanism"
    ],
};
