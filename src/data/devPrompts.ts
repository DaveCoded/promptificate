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
    "Psychedelic",
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
    "Double Venti Half-Caf Mocha Skinny Latte",
    "World's Smallest Owl",
    "Mary Poppins",
    "Pingu",
    "Beluga Whales",
    "Mr. Potato Head",
    "Led Zeppelin",
    "Pompus Roman Emperors",
    "Eurovision",
    "Teenage Angst",
    "Ikea Meatballs",
    "Stepping on Lego",
    "The French Revolution",
    "Tourists on Segways",
    "Fugly Christmas Sweaters",
  ],
};
