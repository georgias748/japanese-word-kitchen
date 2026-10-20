export const DISHES = [
  {
    id: "onigiri",
    japaneseName: "おにぎり",
    englishName: "Onigiri",
    ingredients: [
      { id: "rice", name: "seasoned rice", kind: "grain", color: "#f5eedb" },
      { id: "nori", name: "nori seaweed", kind: "leaf", color: "#344638" },
      { id: "ume", name: "pickled plum", kind: "fruit", color: "#a84154" },
    ],
    facts: [
      "Onigiri are shaped portions of rice, often wrapped in nori and filled with a savory center.",
      "Onigiri are a familiar portable food in Japan and come in many regional and family variations.",
      "The word onigiri is also commonly written as おむすび (omusubi).",
    ],
  },
  {
    id: "miso-soup",
    japaneseName: "味噌汁",
    englishName: "Miso soup",
    ingredients: [
      { id: "dashi", name: "dashi broth", kind: "liquid", color: "#c79452" },
      { id: "miso", name: "miso", kind: "paste", color: "#8d5639" },
      { id: "tofu", name: "tofu", kind: "cube", color: "#fff4da" },
      { id: "wakame", name: "wakame seaweed", kind: "leaf", color: "#45634a" },
    ],
    facts: [
      "Miso is a fermented seasoning commonly made from soybeans, salt, and koji.",
      "Miso soup is often served as part of a Japanese home-style meal, with ingredients varying by season and region.",
      "Dashi is a light stock that can be made from ingredients such as kombu kelp and dried bonito.",
    ],
  },
  {
    id: "ramen",
    japaneseName: "ラーメン",
    englishName: "Ramen",
    ingredients: [
      { id: "ramen-noodles", name: "wheat noodles", kind: "noodle", color: "#e6c46d" },
      { id: "ramen-broth", name: "broth", kind: "liquid", color: "#bd8650" },
      { id: "chashu", name: "chashu pork", kind: "protein", color: "#bd7664" },
      { id: "green-onion", name: "green onion", kind: "leaf", color: "#66844e" },
    ],
    facts: [
      "Ramen shops often specialize in a particular broth style, such as miso, shoyu, or tonkotsu.",
      "Ramen has developed many regional styles across Japan, with different noodles, broths, and toppings.",
      "A ramen bowl is usually built from broth, noodles, and chosen toppings rather than one fixed recipe.",
    ],
  },
  {
    id: "sushi",
    japaneseName: "寿司",
    englishName: "Sushi",
    ingredients: [
      { id: "sushi-rice", name: "vinegared rice", kind: "grain", color: "#f4ebd6" },
      { id: "tuna", name: "tuna", kind: "fish", color: "#cf7774" },
      { id: "nori", name: "nori seaweed", kind: "leaf", color: "#344638" },
      { id: "wasabi", name: "wasabi", kind: "paste", color: "#9bad5a" },
    ],
    facts: [
      "Sushi is defined in part by its vinegared rice; it is not limited to raw fish.",
      "Different sushi forms include nigiri, maki rolls, and pressed sushi.",
      "Wasabi is traditionally served as a sharp, aromatic condiment with some kinds of sushi.",
    ],
  },
  {
    id: "chirashi",
    japaneseName: "ちらし寿司",
    englishName: "Chirashi sushi",
    ingredients: [
      { id: "sushi-rice", name: "vinegared rice", kind: "grain", color: "#f4ebd6" },
      { id: "salmon", name: "salmon", kind: "fish", color: "#e58d6e" },
      { id: "tamago", name: "sweet omelet", kind: "egg", color: "#edc653" },
      { id: "shiitake", name: "shiitake mushroom", kind: "mushroom", color: "#806044" },
    ],
    facts: [
      "Chirashi-zushi means scattered sushi: toppings are arranged over a bed of vinegared rice.",
      "Toppings vary with region, season, occasion, and household tradition.",
      "Chirashi sushi is often served in a bowl, making its colorful toppings visible from above.",
    ],
  },
  {
    id: "tempura",
    japaneseName: "天ぷら",
    englishName: "Tempura",
    ingredients: [
      { id: "shrimp", name: "shrimp", kind: "seafood", color: "#dd916e" },
      { id: "eggplant", name: "eggplant", kind: "vegetable", color: "#775779" },
      { id: "tempura-batter", name: "light batter", kind: "batter", color: "#edcf82" },
    ],
    facts: [
      "Tempura is made by coating ingredients in a light batter and frying them.",
      "The frying technique is commonly linked to Portuguese influence in Japan during the 16th century.",
      "Tempura can feature seafood or vegetables, often served with a dipping sauce.",
    ],
  },
  {
    id: "udon",
    japaneseName: "うどん",
    englishName: "Udon",
    ingredients: [
      { id: "udon-noodles", name: "thick wheat noodles", kind: "noodle", color: "#f1dfb7" },
      { id: "dashi", name: "dashi broth", kind: "liquid", color: "#c79452" },
      { id: "green-onion", name: "green onion", kind: "leaf", color: "#66844e" },
    ],
    facts: [
      "Udon noodles are thick wheat noodles, served in many hot and cold preparations.",
      "Udon broth and toppings can differ considerably between regions of Japan.",
      "Some udon dishes are served chilled with a dipping sauce, especially in warmer weather.",
    ],
  },
  {
    id: "soba",
    japaneseName: "そば",
    englishName: "Soba",
    ingredients: [
      { id: "soba-noodles", name: "buckwheat noodles", kind: "noodle", color: "#a77a4d" },
      { id: "dipping-sauce", name: "dipping sauce", kind: "liquid", color: "#725039" },
      { id: "nori", name: "nori seaweed", kind: "leaf", color: "#344638" },
    ],
    facts: [
      "Soba noodles are made with buckwheat flour, sometimes blended with wheat flour.",
      "Toshikoshi soba is eaten by many people on New Year's Eve as a seasonal custom.",
      "Soba can be served hot in broth or cold with a dipping sauce.",
    ],
  },
  {
    id: "okonomiyaki",
    japaneseName: "お好み焼き",
    englishName: "Okonomiyaki",
    ingredients: [
      { id: "cabbage", name: "cabbage", kind: "leaf", color: "#91a75f" },
      { id: "okonomi-batter", name: "savory batter", kind: "batter", color: "#e0b86a" },
      { id: "pork-belly", name: "pork", kind: "protein", color: "#bc7868" },
      { id: "bonito", name: "bonito flakes", kind: "fish", color: "#c18f64" },
    ],
    facts: [
      "The name okonomiyaki combines okonomi (as you like it) and yaki (grilled or cooked).",
      "Osaka-style and Hiroshima-style okonomiyaki are well-known regional variations.",
      "Toppings can include a savory sauce, mayonnaise, aonori seaweed, and bonito flakes.",
    ],
  },
  {
    id: "takoyaki",
    japaneseName: "たこ焼き",
    englishName: "Takoyaki",
    ingredients: [
      { id: "octopus", name: "octopus", kind: "seafood", color: "#a9675e" },
      { id: "takoyaki-batter", name: "savory batter", kind: "batter", color: "#e0b86a" },
      { id: "bonito", name: "bonito flakes", kind: "fish", color: "#c18f64" },
    ],
    facts: [
      "Takoyaki are small, round savory snacks cooked in a specially shaped pan.",
      "Takoyaki are strongly associated with Osaka and are commonly sold at festivals and food stalls.",
      "The name combines tako (octopus) and yaki (grilled or cooked).",
    ],
  },
  {
    id: "curry-rice",
    japaneseName: "カレーライス",
    englishName: "Japanese curry rice",
    ingredients: [
      { id: "rice", name: "steamed rice", kind: "grain", color: "#f5eedb" },
      { id: "curry", name: "curry sauce", kind: "liquid", color: "#b67535" },
      { id: "potato", name: "potato", kind: "vegetable", color: "#c7a46d" },
      { id: "carrot", name: "carrot", kind: "vegetable", color: "#de8044" },
    ],
    facts: [
      "Japanese curry rice is often served as a thick sauce beside or over rice.",
      "Curry became popular in Japan after arriving by way of the British navy in the late 19th century.",
      "Common home-style additions include potatoes, carrots, and onions.",
    ],
  },
  {
    id: "oyakodon",
    japaneseName: "親子丼",
    englishName: "Oyakodon",
    ingredients: [
      { id: "rice", name: "steamed rice", kind: "grain", color: "#f5eedb" },
      { id: "chicken", name: "chicken", kind: "protein", color: "#c58c63" },
      { id: "egg", name: "egg", kind: "egg", color: "#edc653" },
      { id: "onion", name: "onion", kind: "vegetable", color: "#e6dfca" },
    ],
    facts: [
      "Oyakodon is a rice bowl topped with chicken and egg simmered together.",
      "The name means parent-and-child bowl, referring to the chicken and egg.",
      "Oyakodon is one example of a donburi, a meal served over rice in a bowl.",
    ],
  },
  {
    id: "katsudon",
    japaneseName: "カツ丼",
    englishName: "Katsudon",
    ingredients: [
      { id: "rice", name: "steamed rice", kind: "grain", color: "#f5eedb" },
      { id: "pork-cutlet", name: "breaded pork cutlet", kind: "protein", color: "#b96c50" },
      { id: "egg", name: "egg", kind: "egg", color: "#edc653" },
      { id: "onion", name: "onion", kind: "vegetable", color: "#e6dfca" },
    ],
    facts: [
      "Katsudon is a rice bowl topped with tonkatsu, a breaded pork cutlet, often with egg and onion.",
      "The word katsu is associated with cutlet and is also a homophone of a word meaning to win.",
      "Katsudon belongs to the broad family of Japanese rice bowls called donburi.",
    ],
  },
  {
    id: "gyoza",
    japaneseName: "餃子",
    englishName: "Gyoza",
    ingredients: [
      { id: "gyoza-wrapper", name: "thin wrapper", kind: "dough", color: "#eed8a8" },
      { id: "pork", name: "pork filling", kind: "protein", color: "#ba7865" },
      { id: "cabbage", name: "cabbage", kind: "leaf", color: "#91a75f" },
    ],
    facts: [
      "Japanese gyoza are dumplings related to Chinese jiaozi, with local variations in wrapper and filling.",
      "Pan-fried yaki-gyoza are a common style, crisp on one side and soft on the other.",
      "Gyoza are often served with a dipping sauce made with soy sauce and vinegar.",
    ],
  },
  {
    id: "mochi",
    japaneseName: "餅",
    englishName: "Mochi",
    ingredients: [
      { id: "mochi-rice", name: "glutinous rice", kind: "grain", color: "#f4ebdc" },
      { id: "anko", name: "sweet red bean paste", kind: "paste", color: "#8b4e43" },
      { id: "kinako", name: "roasted soybean flour", kind: "grain", color: "#c7a76d" },
    ],
    facts: [
      "Mochi is made from glutinous rice that is steamed and pounded until soft and stretchy.",
      "Mochi is enjoyed throughout the year and is also associated with New Year's celebrations.",
      "Daifuku is a familiar sweet made by wrapping a filling, often red bean paste, in soft mochi.",
    ],
  },
];
