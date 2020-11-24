interface PromptKeys {
  [key: string]: string[];
}

interface DevPromptsData extends PromptKeys {
  webComponent: string[];
  visualStyle: string[];
  theInspirator: string[];
}

export let devPromptsData: DevPromptsData = {
  webComponent: [
    "Navigation breadcrumbs",
    "Image carousel",
    "Password strength validator",
    "Captcha validator",
    "Dropdown menu",
    "Stopwatch timer",
    "Newsletter signup",
    "Testimonial quote",
    "Like button",
    "Save for later button"
  ],
  visualStyle: [
    "Art nouveau",
    "Midcentury modern",
    "Cubism",
    "1960's Psychedelic",
    "Brutalism",
    "Art deco",
    "Bauhaus",
    "Celtic folk art"
  ],
  theInspirator: [
    "The Muppets",
    "Kermit the Frog",
    "Mormonism",
    "Camels",
    "Venti double-shot mocha skinny caramel cinnamon latte",
    "World's Smallest Owl",
    "Mary Poppins",
    "Pingu",
    "Beluga whales",
    "Mr. Potato Head",
    "Led Zeppelin",
    "Pompus Roman emperors",
    "Eurovision",
    "Teenage angst",
    "Ikea meatballs",
    "Stepping on Lego",
    "The French Revolution",
    "Tourists on segways",
    "Fugly Christmas sweater",
    "Playdoh",
    "British stuffiness",
    "Evil twins",
    "Dodgy alcoholic drinks served in a coconut with a tiny umbrella",
    "A glitch in the Matrix",
    "Things you find at the end of the rainbow",
    "A bottomless pit of despair",
    "Saccharine love songs",
    "Aggressive pigeons",
    "Fire vs. Ice: The Final Battle",
    "Sleeping through your alarm clock",
    "Bitcoin billionaires",
    "Soylent",
    "A magical genie lamp",
    "Rich Uncle Pennybags",
    "Hulk SMASH",
    "Sonic the Hedgehog",
    "Moral panics over TikTok"
  ],
};
