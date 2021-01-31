interface PromptKeys {
    [key: string]: string[];
}

interface DevPromptsData extends PromptKeys {
    uiComponent: string[];
    inspirator: string[];
    designConstraint: string[];
}

export let devPromptsData: DevPromptsData = {
    uiComponent: [
        "navigation breadcrumbs",
        "an image carousel",
        "a password strength validator",
        "a captcha validator",
        "a dropdown menu",
        "a stopwatch timer",
        "a newsletter signup",
        "a testimonial quote",
        "a like button",
        "a save for later button",
        "a progres bar",
        "a loading animation",
        "a search bar",
        "some radio buttons",
        "a toggle button",
    ],
    inspirator: [
        "The Muppets",
        "Kermit the Frog",
        "Mormonism",
        "camels",
        "a venti double-shot mocha skinny caramel cinnamon latte",
        "the world's smallest owl",
        "Mary Poppins",
        "Pingu",
        "Beluga whales",
        "Mr. Potato Head",
        "Led Zeppelin",
        "pompous Roman emperors",
        "teenage angst",
        "Ikea meatballs",
        "stepping on Lego",
        "the French Revolution",
        "tourists on segways",
        "a fugly Christmas sweater",
        "Playdoh",
        "British stuffiness",
        "evil twins",
        "dodgy alcoholic drinks served in a coconut with a tiny umbrella",
        "a glitch in the Matrix",
        "things you find at the end of the rainbow",
        "a bottomless pit of despair",
        "saccharine love songs",
        "aggressive pigeons",
        "Fire vs. Ice: The Final Battle",
        "sleeping through your alarm clock",
        "Bitcoin billionaires",
        "soylent",
        "a magical genie lamp",
        "rich uncle Pennybags"
    ],
    designConstraint: [
        "thing",
        "other thing",
        "another thing"
    ]
};
