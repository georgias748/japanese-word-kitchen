
const outline = 'stroke="#674e37" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round"';

function foodShape(ingredient) {
  const c = escapeHtml(ingredient.color);
  const shapes = {
    rice: `<path d="M9 48q2-22 25-38 23 16 26 38z" fill="${c}" ${outline}/><path d="m20 36 4-3m7-9 3 4m6 10 4-3m-22 7 3-2" stroke="#c7bca5" stroke-width="1.5"/>`,
    "sushi-rice": `<path d="M8 45q4-19 26-26 23 7 28 26-28 13-54 0z" fill="${c}" ${outline}/><path d="M18 42q15-8 33 0" fill="none" stroke="#d0c3aa" stroke-width="2"/>`,
    "mochi-rice": `<path d="M9 48q7-24 25-28 20 5 27 28-24 13-52 0z" fill="${c}" ${outline}/><ellipse cx="23" cy="42" rx="3" ry="1.6" fill="#d3c9b6"/><ellipse cx="40" cy="34" rx="3" ry="1.6" fill="#d3c9b6"/>`,
    nori: `<path d="M14 11q18-5 42 1l-2 43q-21 5-42 0z" fill="${c}" ${outline}/><path d="M19 17v32m8-34v34m8-34v34m8-33v32m8-31v29" stroke="#7c8a6b" stroke-width="1" opacity=".8"/>`,
    ume: `<path d="M36 15q8-12 16-3" fill="none" stroke="#68764d" stroke-width="4"/><path d="M20 25q-8-8 1-15 8-7 15 2 8-10 17-2 9 9-1 17 5 13-5 21-11 9-22 0-12-8-5-23z" fill="${c}" ${outline}/><circle cx="31" cy="27" r="2" fill="#e6a2a3"/>`,
    dashi: `<path d="M11 28h47l-6 25H18z" fill="#e8d1aa" ${outline}/><path d="M16 32q17-9 37 0l-4 16H20z" fill="${c}"/><path d="M20 32q12-6 28 0" fill="none" stroke="#fff0cd" stroke-width="2"/>`,
    miso: `<path d="M13 29h45q-3 23-22 23T13 29z" fill="#bb8b63" ${outline}/><path d="M17 29q18-9 37 0v6H17z" fill="${c}"/><path d="M22 38q14 5 28 0" fill="none" stroke="#e4c08a" stroke-width="2"/>`,
    tofu: `<path d="m13 25 13-8 28 6-12 9z" fill="#fff4db" ${outline}/><path d="m13 25 29 7v22l-29-7z" fill="#efe3c9" ${outline}/><path d="m42 32 12-9v22l-12 9z" fill="#d9cfb9" ${outline}/>`,
    wakame: `<path d="M15 50q-10-12 5-19-10-13 5-19 13 6 6 19 17-13 25-3 1 14-15 16 11 14-3 19-10-3-9-13-11 10-14 0z" fill="${c}" ${outline}/><path d="M18 46q10-7 13-21m4 19q9-12 20-15" fill="none" stroke="#b6c38d" stroke-width="2"/>`,
    "ramen-noodles": `<path d="M9 19q9-13 17 1t17 0q8-13 17 0M10 31q9-13 17 1t17 0q8-13 17 0M12 43q9-13 17 1t17 0q8-13 15 0" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/><path d="M9 19q9-13 17 1t17 0" fill="none" stroke="#fff0c9" stroke-width="1.3"/>`,
    "udon-noodles": `<path d="M10 18q10-10 18 2t17 0q8-12 16 0M10 31q10-10 18 2t17 0q8-12 16 0M10 44q10-10 18 2t17 0q8-12 16 0" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M11 18q10-10 18 2" fill="none" stroke="#fff5de" stroke-width="1.5"/>`,
    "soba-noodles": `<path d="M9 18q8-12 16 1t17 0q8-12 16 0M10 31q8-12 16 1t17 0q8-12 16 0M11 44q8-12 16 1t17 0q8-12 16 0" fill="none" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/><path d="M14 20q8-8 14 3" fill="none" stroke="#e2c394" stroke-width="1.3"/>`,
    "ramen-broth": `<path d="M8 28h52q-4 25-26 25T8 28z" fill="#f1e2c1" ${outline}/><path d="M13 29q22-12 43 0v8H13z" fill="${c}"/><path d="M18 28q10-5 18 0m4 2q8-4 14 0" fill="none" stroke="#eed5a7" stroke-width="2"/>`,
    chashu: `<ellipse cx="35" cy="35" rx="25" ry="23" fill="${c}" ${outline}/><path d="M19 32q7-17 21-13 13 4 4 14-6 7-15 2-8-4-4 7 4 8 14 4" fill="none" stroke="#f0c2a3" stroke-width="5"/><ellipse cx="35" cy="34" rx="4" ry="3" fill="#f0d4b1"/>`,
    "green-onion": `<path d="M14 50 43 14m-20 39L53 25" fill="none" stroke="#597244" stroke-width="7" stroke-linecap="round"/><path d="m40 17 6-8m2 21 8-5" stroke="#92a95e" stroke-width="7" stroke-linecap="round"/><path d="M13 51q5 5 11 0" fill="none" stroke="#eee5ce" stroke-width="5"/>`,
    tuna: `<path d="M9 20q25-13 48 0v27q-25 13-48 0z" fill="${c}" ${outline}/><path d="M12 26q20-9 42 0M11 35q21-9 45 0M12 44q20-8 42 0" fill="none" stroke="#f0c0aa" stroke-width="3"/>`,
    wasabi: `<path d="M13 48q2-15 16-17 4-14 17-12 13 14 4 27-13 13-37 2z" fill="${c}" ${outline}/><path d="M20 41q13-9 29-7" fill="none" stroke="#d0d99a" stroke-width="2"/>`,
    salmon: `<path d="M8 21q28-13 54 0v25q-27 14-54 0z" fill="${c}" ${outline}/><path d="M11 25q17 6 4 14m11-18q17 7 4 18m11-18q17 7 4 18m11-16q11 7 1 17" fill="none" stroke="#ffe0bd" stroke-width="3"/>`,
    tamago: `<path d="M13 19h44v34H13z" rx="7" fill="${c}" ${outline}/><path d="M19 25h32M19 33h32M19 41h32M19 49h32" stroke="#fff0b1" stroke-width="2"/>`,
    shiitake: `<path d="M11 34q3-24 24-24t24 24z" fill="${c}" ${outline}/><path d="M26 34h18v20q-9 6-18 0z" fill="#eee1c9" ${outline}/><path d="M22 19q10 7 22 0" fill="none" stroke="#bb9a73" stroke-width="2"/>`,
    shrimp: `<path d="M15 46q-9-8-2-19 7-12 20-6 8 4 4 12-4 9-13 4-7-4-8 2-1 5 8 8" fill="${c}" ${outline}/><path d="M18 28q10-5 18 1m-17 7q7-4 14 1m-11 7q4-3 8 1" fill="none" stroke="#f6c7a1" stroke-width="2"/><circle cx="33" cy="21" r="2" fill="#3c3329"/>`,
    eggplant: `<path d="M16 18q10-11 29 0 12 12 1 31-10 12-25 3-14-10-5-34z" fill="${c}" ${outline}/><path d="m17 20-9-9 15 2 5-8 5 14" fill="#67804d" ${outline}/><path d="M28 25q8 11 3 24" fill="none" stroke="#a995bb" stroke-width="2"/>`,
    "tempura-batter": `<path d="M12 44q-5-8 2-13-2-11 10-13 4-12 17-6 11 2 9 13 11 10 2 19-15 12-40 0z" fill="${c}" ${outline}/><path d="M18 30q5-7 11 0m7-9q6-4 10 2m-20 17q7-5 15 0" fill="none" stroke="#f8e6b5" stroke-width="2"/>`,
    cabbage: `<path d="M11 28q-4-13 9-18 9-5 16 3 15-6 21 7 9 14-4 27-13 13-29 4-16-5-13-23z" fill="${c}" ${outline}/><path d="M34 50q-16-19-3-37m4 35q2-19 19-27m-21 12q-12-9-20-3" fill="none" stroke="#e1e7c0" stroke-width="2"/>`,
    "okonomi-batter": `<path d="M9 39q2-22 26-25 26 3 27 25-18 17-53 0z" fill="${c}" ${outline}/><path d="M17 34q17-9 37 0" fill="none" stroke="#f7e4ba" stroke-width="3"/>`,
    "pork-belly": `<path d="M11 21q22-12 47 0v27q-24 12-47 0z" fill="${c}" ${outline}/><path d="M14 27q18-8 41 0v6q-22 8-41 0zm0 13q19-8 41 0" fill="none" stroke="#f4d2bb" stroke-width="4"/>`,
    bonito: `<path d="m13 20 13-7 4 13-13 4zm19 3 14-7 4 13-13 4zm-13 17 12-7 5 12-13 5zm18 5 10-6 3 10-11 5z" fill="${c}" ${outline}/><path d="m17 20 8-3m11 9 8-4m-20 21 8-4" stroke="#ead3a6" stroke-width="1.5"/>`,
    octopus: `<path d="M17 30q-4-17 13-21 18 0 18 19-1 10-12 11-12 2-19-9z" fill="${c}" ${outline}/><path d="M21 37q-10 4-8 15m16-12q-5 8-2 15m9-15q4 7 9 8m-2-14q8 5 15 1" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/><g fill="#f5d8bd"><circle cx="14" cy="49" r="1.4"/><circle cx="29" cy="51" r="1.4"/><circle cx="47" cy="47" r="1.4"/><circle cx="55" cy="37" r="1.4"/></g>`,
    "takoyaki-batter": `<g fill="${c}" ${outline}><circle cx="20" cy="25" r="12"/><circle cx="43" cy="25" r="12"/><circle cx="31" cy="45" r="12"/></g><path d="M15 23q5-5 10 0m13 0q5-5 10 0m-13 20q5-5 10 0" fill="none" stroke="#f8e5b9" stroke-width="2"/>`,
    curry: `<path d="M8 31h54q-4 23-27 23T8 31z" fill="#f1e1c3" ${outline}/><path d="M13 31q18-16 43 0l-2 8H14z" fill="${c}"/><path d="M22 29q11-6 21-1m-19 18q9 5 18 0" fill="none" stroke="#e6b96c" stroke-width="3"/>`,
    potato: `<path d="M12 30q-1-14 14-18 16-3 23 10 9 16-5 27-19 10-30-3-5-7-2-16z" fill="${c}" ${outline}/><circle cx="24" cy="26" r="1.5" fill="#795d3b"/><circle cx="39" cy="37" r="1.5" fill="#795d3b"/>`,
    carrot: `<path d="M14 19q16-10 39 2L29 55q-12-12-15-36z" fill="${c}" ${outline}/><path d="M26 28l10 5m-14 2 7 4m-2-18 13 5" stroke="#f5b16d" stroke-width="2"/>`,
    chicken: `<path d="M13 34q-3-15 13-20 22-3 31 15 5 17-16 25-21 4-28-20z" fill="${c}" ${outline}/><path d="M38 43q7 8 15 2m-29-16q7-6 15 1" fill="none" stroke="#eed0ab" stroke-width="3"/>`,
    egg: `<path d="M35 10q16 0 20 20 4 23-20 31Q11 54 15 30 19 10 35 10z" fill="#fff4dc" ${outline}/><circle cx="35" cy="35" r="10" fill="${c}" stroke="#b2884e" stroke-width="2"/>`,
    onion: `<path d="M35 12q-22 10-23 29 2 17 23 18 21-1 23-18-1-19-23-29z" fill="${c}" ${outline}/><path d="M35 15q-9 17 0 40m0-30q13 6 14 18m-14-7q-11 2-14 10" fill="none" stroke="#c4b99e" stroke-width="2"/>`,
    "pork-cutlet": `<path d="M12 21q23-15 47 0v27q-24 15-47 0z" fill="${c}" ${outline}/><path d="m16 25 5-5 5 5 5-5 5 5 5-5 5 5 5-4m-35 14 5-5 5 5 5-5 5 5 5-5 5 5 5-5" fill="none" stroke="#f4d0a6" stroke-width="3"/>`,
    pork: `<path d="M12 25q14-15 33-6 18 10 9 27-12 18-34 7-17-9-8-28z" fill="${c}" ${outline}/><path d="M18 31q10 7 22 0m-19 12q12 6 24-1" fill="none" stroke="#f1cab4" stroke-width="3"/>`,
    "gyoza-wrapper": `<path d="M9 43q5-29 27-29t27 29q-26 15-54 0z" fill="${c}" ${outline}/><path d="M10 41q7-8 13 0 6-8 13 0 6-8 13 0 5-8 11 0" fill="none" stroke="#c7a66d" stroke-width="3"/><path d="M19 24q17 15 34 0" fill="none" stroke="#fff0cb" stroke-width="2"/>`,
    anko: `<path d="M12 37q4-21 23-23 20 3 24 23-2 14-24 18-21-2-23-18z" fill="${c}" ${outline}/><g fill="#c98166"><ellipse cx="24" cy="34" rx="3" ry="2"/><ellipse cx="38" cy="27" rx="3" ry="2"/><ellipse cx="44" cy="40" rx="3" ry="2"/></g>`,
    kinako: `<path d="M12 38q3-20 23-20t23 20q-4 13-23 13T12 38z" fill="#d7c49f" ${outline}/><path d="M18 34q14-8 34 0m-31 7q14-7 28 0" fill="none" stroke="${c}" stroke-width="4"/>`,
  };
  return shapes[ingredient.id] ?? shapes[ingredient.kind] ?? shapes.rice;
}

export function ingredientPicture(ingredient, index = 0, count = 3) {
  const positions = count === 4 ? [98, 193, 287, 382] : [130, 240, 350];
  const position = positions[index] ?? 240;
  const label = escapeHtml(ingredient.name);
  return `
    <g transform="translate(${position} 109)" class="ingredient-art">
      <g transform="translate(-35 -36)">
        <g transform="translate(-35 -35) scale(1.2) translate(35 35)">${foodShape(ingredient)}</g>
      </g>
      <text x="0" y="47" text-anchor="middle">${label}</text>
    </g>`;
}

export function dishArtwork(dish, ingredients, modifier = "") {
  const ingredientNames = ingredients.map((ingredient) => ingredient.name).join(", ") || "no earned ingredients yet";
  const title = escapeHtml(`${dish.englishName} plate with ${ingredientNames}`);
  const tone = ingredients.length / dish.ingredients.length;
  const pictures = ingredients
    .map((ingredient, index) => ingredientPicture(ingredient, index, dish.ingredients.length))
    .join("");
  return `
    <figure class="dish-art ${modifier}" style="--dish-tone:${Math.max(0.38, tone)}">
      <svg viewBox="0 0 480 210" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="240" cy="107" rx="220" ry="94" fill="#e7d3a8" stroke="#75543a" stroke-width="4"/>
        <ellipse cx="240" cy="104" rx="192" ry="76" fill="#fbf4e3" stroke="#b28d57" stroke-width="3"/>
        <ellipse cx="240" cy="101" rx="166" ry="61" fill="#f2e8d2" stroke="#d0bd96" stroke-width="2"/>
        <path d="M89 113q18 33 72 43h158q54-10 72-43" fill="none" stroke="#d6c49f" stroke-width="2"/>
        ${pictures}
      </svg>
      <figcaption>${escapeHtml(dish.englishName)} — ${ingredients.length} / ${dish.ingredients.length} earned</figcaption>
    </figure>`;
}

function finalDishBase(dishId) {
  if (dishId === "onigiri") {
    return '<ellipse cx="240" cy="155" rx="157" ry="53" fill="#fbf8eb" stroke="#766044" stroke-width="5"/><ellipse cx="240" cy="150" rx="135" ry="39" fill="#f1e5cc" stroke="#c4ab7e" stroke-width="3"/>';
  }
  if (["miso-soup", "ramen", "udon", "soba"].includes(dishId)) {
    return `<ellipse cx="240" cy="164" rx="153" ry="68" fill="#a88155" stroke="#674d37" stroke-width="5"/>
      <ellipse cx="240" cy="145" rx="140" ry="59" fill="#f7edda" stroke="#a17d53" stroke-width="4"/>
      <ellipse cx="240" cy="138" rx="122" ry="45" fill="#f0e5d0" stroke="#d4ba87" stroke-width="3"/>`;
  }
  if (["sushi", "chirashi"].includes(dishId)) {
    return '<ellipse cx="240" cy="143" rx="180" ry="75" fill="#e4d4b7" stroke="#735b41" stroke-width="5"/><ellipse cx="240" cy="135" rx="156" ry="57" fill="#fbf8ed" stroke="#b0956c" stroke-width="3"/><path d="M99 139q34 35 78 37m201-38q-34 36-78 38" fill="none" stroke="#c3ad88" stroke-width="2"/>';
  }
  if (dishId === "tempura") {
    return '<path d="M91 144q18-71 149-71t149 71q-36 58-149 58T91 144z" fill="#f5ebd6" stroke="#816141" stroke-width="5"/><path d="M117 149q24 35 123 35t123-35" fill="none" stroke="#d8c39b" stroke-width="3"/><path d="M126 91h228" stroke="#fffdf5" stroke-width="5" opacity=".7"/>';
  }
  if (dishId === "okonomiyaki") {
    return '<ellipse cx="240" cy="140" rx="167" ry="67" fill="#e8d3ac" stroke="#725638" stroke-width="5"/><ellipse cx="240" cy="130" rx="142" ry="51" fill="#b57743" stroke="#684b31" stroke-width="4"/><path d="M123 129q48-28 97 0t99 0" fill="none" stroke="#f1d9a4" stroke-width="8"/><path d="M151 147q72 23 154 0" fill="none" stroke="#873e32" stroke-width="5"/>';
  }
  if (dishId === "takoyaki") {
    return '<path d="M95 127q5-57 145-57t145 57v49q-145 45-290 0z" fill="#d99f60" stroke="#73553a" stroke-width="5"/><path d="M108 128q15-46 130-46t130 46" fill="none" stroke="#f2d392" stroke-width="4"/><path d="M117 173q122 30 246 0" fill="none" stroke="#f3dfba" stroke-width="3"/>';
  }
  if (dishId === "curry-rice") {
    return '<path d="M83 123q6-63 157-63t157 63v42q-157 67-314 0z" fill="#f8efdc" stroke="#73543b" stroke-width="5"/><path d="M101 120q54-35 129-6v46q-68 24-129-3z" fill="#f4e8d0" stroke="#d5c29e" stroke-width="2"/><path d="M231 110q68-34 145 0v50q-73 32-145 0z" fill="#f4e8d0" stroke="#d5c29e" stroke-width="2"/>';
  }
  if (["oyakodon", "katsudon"].includes(dishId)) {
    return '<path d="M88 116q9-67 152-67t152 67v51q-152 69-304 0z" fill="#f8efdc" stroke="#73543b" stroke-width="5"/><path d="M108 116q59-32 132-4v57q-70 31-132-2z" fill="#f5ead2" stroke="#d4c09a" stroke-width="2"/>';
  }
  if (dishId === "gyoza") {
    return '<ellipse cx="240" cy="143" rx="177" ry="69" fill="#f8f0df" stroke="#77583d" stroke-width="5"/><ellipse cx="240" cy="134" rx="151" ry="49" fill="#eee0c5" stroke="#c5ac7e" stroke-width="3"/><path d="M115 151q26-34 55-5t56 0 57 0 58-1" fill="none" stroke="#b6915d" stroke-width="4"/>';
  }
  if (dishId === "mochi") {
    return '<ellipse cx="240" cy="145" rx="173" ry="64" fill="#fbf4e4" stroke="#826343" stroke-width="5"/><ellipse cx="240" cy="139" rx="145" ry="45" fill="#f1e2c6" stroke="#cfb78d" stroke-width="3"/><path d="M110 167q130 33 260 0" fill="none" stroke="#d5bc90" stroke-width="3"/>';
  }
  return '<ellipse cx="240" cy="145" rx="170" ry="65" fill="#f9f2df" stroke="#75543a" stroke-width="5"/>';
}

function finalFood(dishId, ingredients) {
  const has = (id) => ingredients.some((ingredient) => ingredient.id === id);
  switch (dishId) {
    case "onigiri":
      return `${has("rice") ? '<path d="M169 158 240 51l71 107q-71 43-142 0z" fill="#fffaf0" stroke="#80694a" stroke-width="4"/><path d="m184 135 56-84 57 86q-56 25-113-2z" fill="none" stroke="#e4dac2" stroke-width="2"/>' : ""}
        ${has("nori") ? '<path d="m207 132 33-52 34 54q-34 13-67-2z" fill="#334a39" stroke="#273a2c" stroke-width="3"/><path d="m218 125 22-34 23 36q-22 9-45-2z" fill="#476147"/>' : ""}
        ${has("ume") ? '<path d="M237 96q-10-8-2-14 7-5 12 3 8-8 14 0 5 8-4 13 2 11-9 14-12-2-11-16z" fill="#a84754" stroke="#674e37" stroke-width="2"/><circle cx="249" cy="96" r="3" fill="#e9aa98"/>' : ""}`;
    case "miso-soup":
      return `${has("dashi") ? '<ellipse cx="240" cy="138" rx="113" ry="38" fill="#d9bb82"/><path d="M135 137q25-9 48 1t48 0 48 0 48 0" fill="none" stroke="#f6e5be" stroke-width="3"/>' : ""}
        ${has("miso") ? '<ellipse cx="240" cy="132" rx="103" ry="28" fill="#a96c48" opacity=".8"/><path d="M166 127q25-12 49 0t49 0 49 0" fill="none" stroke="#d7aa70" stroke-width="5"/>' : ""}
        ${has("tofu") ? '<g fill="#fff6df" stroke="#b6a787" stroke-width="2"><path d="m190 117 15-8 17 5-15 9z"/><path d="m190 117 17 6v17l-17-6z"/><path d="m207 123 15-9v17l-15 9z"/><path d="m244 131 13-7 15 5-13 8z"/><path d="m244 131 15 6v14l-15-6z"/><path d="m259 137 13-8v14l-13 8z"/></g>' : ""}
        ${has("wakame") ? '<path d="M169 146q-11-9 1-16 11-8 4-17m31 36q-11-9 2-16 12-7 5-18m62 43q-11-9 2-16 12-7 5-18" fill="none" stroke="#49654c" stroke-width="5" stroke-linecap="round"/>' : ""}`;
    case "ramen":
      return `${has("ramen-broth") ? '<ellipse cx="240" cy="138" rx="108" ry="34" fill="#b97940" opacity=".68"/><path d="M140 135q25-8 50 1t50 0 50 0 50 0" fill="none" stroke="#e9cb94" stroke-width="3"/>' : ""}
        ${has("ramen-noodles") ? '<path d="M144 135q16-17 32 0t32 0 32 0 32 0 32 0 32 0m-184 13q16-17 32 0t32 0 32 0 32 0 32 0 32 0" fill="none" stroke="#e0bd6b" stroke-width="7" stroke-linecap="round"/>' : ""}
        ${has("chashu") ? '<g><ellipse cx="188" cy="121" rx="23" ry="17" fill="#bd7967" stroke="#754c3d" stroke-width="2"/><path d="M171 122q10-18 22-10 10 7-1 13-8 5 2 9" fill="none" stroke="#f0cfac" stroke-width="4"/><ellipse cx="290" cy="139" rx="23" ry="17" fill="#bd7967" stroke="#754c3d" stroke-width="2"/><path d="M273 140q10-18 22-10 10 7-1 13-8 5 2 9" fill="none" stroke="#f0cfac" stroke-width="4"/></g>' : ""}
        ${has("green-onion") ? '<g fill="#f0e9d5" stroke="#58744e" stroke-width="3"><circle cx="218" cy="110" r="7"/><circle cx="238" cy="119" r="8"/><circle cx="260" cy="108" r="7"/><circle cx="315" cy="117" r="7"/></g>' : ""}`;
    case "sushi":
      return `${has("sushi-rice") ? '<g fill="#fff8e8" stroke="#cfc1a7" stroke-width="2"><path d="M132 139q3-26 39-26t39 26q-37 18-78 0z"/><path d="M208 139q3-26 39-26t39 26q-37 18-78 0z"/><path d="M284 139q3-26 39-26t39 26q-37 18-78 0z"/></g>' : ""}
        ${has("tuna") ? '<path d="M137 127q31-20 67-1v12q-33 18-67-1z" fill="#c96362" stroke="#765045" stroke-width="2"/><path d="M218 127q31-20 67-1v12q-33 18-67-1z" fill="#c96362" stroke="#765045" stroke-width="2"/>' : ""}
        ${has("nori") ? '<path d="M133 138h78v7h-78zm76 0h78v7h-78z" fill="#35483a"/>' : ""}
        ${has("wasabi") ? '<path d="M305 111q13-18 28-4 8 10-4 17-13 8-25-1z" fill="#92a65c" stroke="#647747" stroke-width="2"/>' : ""}`;
    case "chirashi":
      return `${has("sushi-rice") ? '<ellipse cx="240" cy="137" rx="111" ry="35" fill="#fff8e8" stroke="#d0c1a5" stroke-width="2"/><path d="M145 146q30-12 60 0t60 0 60 0 28 0" fill="none" stroke="#e2d7c1" stroke-width="3"/>' : ""}
        ${has("salmon") ? '<path d="M166 116q27-16 57 0l-3 21q-29 13-54-1z" fill="#e88d6d" stroke="#815642" stroke-width="2"/><path d="M174 118q14 7 2 16m17-19q15 7 3 18m17-17q13 7 3 16" fill="none" stroke="#ffe0bf" stroke-width="3"/>' : ""}
        ${has("tamago") ? '<rect x="239" y="113" width="50" height="25" rx="5" fill="#edc75e" stroke="#977846" stroke-width="2"/><path d="M246 120h36m-36 7h36" stroke="#fff0b7" stroke-width="2"/>' : ""}
        ${has("shiitake") ? '<path d="M292 135q2-19 19-19t18 19z" fill="#806044" stroke="#674e37" stroke-width="2"/><path d="M304 135h13v12h-13z" fill="#e8dcc2" stroke="#674e37" stroke-width="2"/>' : ""}`;
    case "tempura":
      return `<g transform="translate(240 135) scale(1.1) translate(-240 -135)">
        ${has("shrimp") ? '<path d="M144 138q-24-17-7-42 16-22 45-13 21 8 15 26-4 12-19 8-13-4-12 8 2 12 21 12l-8 13q-28 2-35-12z" fill="#df9a3b" stroke="#87552c" stroke-width="4"/><path d="M146 111q17-17 38-6m-34 22q18-15 35-5m-25 19q12-9 23-3" fill="none" stroke="#ffdc91" stroke-width="5"/><path d="m147 96-14-13 20 4m-17 16-18-4" fill="none" stroke="#9e6040" stroke-width="4" stroke-linecap="round"/><g fill="#ffd986"><circle cx="158" cy="96" r="3"/><circle cx="177" cy="103" r="2.5"/><circle cx="155" cy="119" r="2.5"/></g>' : ""}
        ${has("eggplant") ? '<g stroke="#8a552d" stroke-width="3"><path d="M245 131q-4-12 3-23l30-13q16-5 24 7l-4 31q-4 14-19 17l-25-4z" fill="#e9ae4c"/><path d="M258 126q-1-10 7-15l18-6q10-1 13 8l-3 16q-4 8-13 9l-16-3z" fill="#69475e" stroke="#473548" stroke-width="4"/><path d="M268 123q1-7 7-8l10 1-1 11-9 4z" fill="#bc8a9c" stroke="#866072" stroke-width="2"/><path d="M292 145q-2-10 5-18l20-9q13-3 19 8l-3 24q-4 11-15 13l-20-4z" fill="#efb34e"/><path d="M302 141q0-8 7-12l11-3q8 2 8 9l-3 12q-5 5-12 6l-10-3z" fill="#67465b" stroke="#473548" stroke-width="4"/><path d="M310 141q2-5 7-6l5 2-1 7-7 3z" fill="#bc8a9c" stroke="#866072" stroke-width="2"/></g><g fill="#ffe29a"><circle cx="256" cy="111" r="2.5"/><circle cx="283" cy="100" r="2.5"/><circle cx="314" cy="123" r="2.5"/><circle cx="329" cy="148" r="2"/></g>' : ""}
        ${has("tempura-batter") ? '<g fill="#f5c866" stroke="#a36c32" stroke-width="2"><path d="m169 153 10-11 12 6-6 12z"/><path d="m216 109 9-12 11 5-3 12z"/><path d="m343 128 10-10 11 7-5 10z"/><path d="m202 91 7-9 9 4-3 10z"/><circle cx="191" cy="142" r="4"/><circle cx="231" cy="152" r="3"/><circle cx="333" cy="99" r="4"/></g>' : ""}
      </g>`;
    case "udon":
      return `${has("dashi") ? '<ellipse cx="240" cy="138" rx="125" ry="41" fill="#dfa542" stroke="#a96b2f" stroke-width="2"/><path d="M128 137q27-12 54 0t54 0 54 0 54 0" fill="none" stroke="#f6d17c" stroke-width="5"/><ellipse cx="176" cy="119" rx="25" ry="7" fill="#f3ca71" opacity=".45"/>' : ""}
        ${has("udon-noodles") ? '<path d="M140 129q12-20 24 0t24 0 24 0 24 0 24 0 24 0 24 0 24 0m-168 20q12-20 24 0t24 0 24 0 24 0 24 0 24 0 24 0 24 0" fill="none" stroke="#ad793c" stroke-width="16" stroke-linecap="round"/><path d="M140 127q12-20 24 0t24 0 24 0 24 0 24 0 24 0 24 0 24 0m-168 20q12-20 24 0t24 0 24 0 24 0 24 0 24 0 24 0 24 0" fill="none" stroke="#fff0c9" stroke-width="11" stroke-linecap="round"/><path d="M144 125q12-15 22 0t22 0 22 0 22 0 22 0 22 0 22 0 22 0" fill="none" stroke="#fffaf0" stroke-width="2" stroke-linecap="round"/>' : ""}
        ${has("green-onion") ? '<g stroke="#46633a" stroke-width="3"><circle cx="180" cy="111" r="10" fill="#80a64c"/><circle cx="207" cy="118" r="9" fill="#e6e9bc"/><circle cx="240" cy="108" r="10" fill="#80a64c"/><circle cx="273" cy="117" r="9" fill="#e6e9bc"/><circle cx="304" cy="109" r="10" fill="#80a64c"/></g><g fill="none" stroke="#a8c46c" stroke-width="2"><circle cx="180" cy="111" r="4"/><circle cx="240" cy="108" r="4"/><circle cx="304" cy="109" r="4"/></g>' : ""}`;
    case "soba":
      return `${has("soba-noodles") ? '<path d="M144 128q14-18 28 0t28 0 28 0 28 0 28 0 28 0 28 0m-166 14q14-18 28 0t28 0 28 0 28 0 28 0 28 0 28 0" fill="none" stroke="#a77b4e" stroke-width="5" stroke-linecap="round"/>' : ""}
        ${has("dipping-sauce") ? '<path d="M322 141h41q-3 20-21 20t-20-20z" fill="#72513a" stroke="#57412f" stroke-width="3"/><ellipse cx="343" cy="140" rx="21" ry="6" fill="#98734e"/>' : ""}
        ${has("nori") ? '<path d="M167 110q15-14 29 0l-4 20q-14 7-25 0z" fill="#37493a" stroke="#26372d" stroke-width="2"/><path d="M195 111q15-14 29 0l-4 20q-14 7-25 0z" fill="#37493a" stroke="#26372d" stroke-width="2"/>' : ""}`;
    case "okonomiyaki":
      return `${has("cabbage") ? '<ellipse cx="240" cy="137" rx="91" ry="41" fill="#8ea15e" stroke="#6a6747" stroke-width="3"/><path d="M172 135q20-20 39 0t39 0 39 0 20 0" fill="none" stroke="#dce2b0" stroke-width="4"/>' : ""}
        ${has("okonomi-batter") ? '<ellipse cx="240" cy="135" rx="100" ry="44" fill="#d7ad62" stroke="#775535" stroke-width="4"/><path d="M160 132q28-16 54 0t53 0 53 0" fill="none" stroke="#f0d79d" stroke-width="5"/><path d="M181 145q59 19 118 0" fill="none" stroke="#923f32" stroke-width="4"/>' : ""}
        ${has("pork-belly") ? '<path d="M179 116q18-8 34 0v9q-18 8-34 0zm51-4q17-9 34 0v9q-18 9-34 0zm46 5q17-8 34 0v9q-18 8-34 0z" fill="#bd7664" stroke="#754b3d" stroke-width="2"/>' : ""}
        ${has("bonito") ? '<path d="m187 109 10-9 6 10zm36-6 13-8 5 10zm35 7 13-11 6 11zm27-6 11-8 5 10z" fill="#b4885d" stroke="#8b6848" stroke-width="1.5"/>' : ""}`;
    case "takoyaki":
      return `${has("octopus") ? '<path d="M227 135q-12-12-4-28 10-15 25-5 11 9 4 19-6 9-14 2-7-5-6 3" fill="none" stroke="#a76259" stroke-width="7" stroke-linecap="round"/><circle cx="237" cy="120" r="2" fill="#f4c8ae"/>' : ""}
        ${has("takoyaki-batter") ? '<g fill="#dba866" stroke="#80603e" stroke-width="3"><circle cx="184" cy="128" r="25"/><circle cx="239" cy="124" r="25"/><circle cx="294" cy="128" r="25"/></g><path d="M167 125q17-12 33 0m22-4q17-12 33 0m22 4q17-12 33 0" fill="none" stroke="#f3d9a2" stroke-width="4"/>' : ""}
        ${has("bonito") ? '<path d="m172 99 14-8 5 12zm41-4 14-8 6 10zm35 4 14-8 6 11zm33-1 14-7 5 10z" fill="#b58a61" stroke="#876546" stroke-width="1.5"/>' : ""}`;
    case "curry-rice":
      return `${has("rice") ? '<path d="M112 146q9-42 65-43 53 5 56 44-54 29-121-1z" fill="#fff8e8" stroke="#c4b18f" stroke-width="3"/><path d="M131 127q20-8 37 0m-29 10q24-9 48 0" fill="none" stroke="#e7dec9" stroke-width="3"/>' : ""}
        ${has("curry") ? '<path d="M237 120q61-36 116 0v43q-53 29-116 0z" fill="#ad682f" stroke="#7d4d2d" stroke-width="3"/><path d="M249 126q22-9 39 0t39 0" fill="none" stroke="#e9b96d" stroke-width="4"/>' : ""}
        ${has("potato") ? '<g fill="#d4b681" stroke="#8b6c44" stroke-width="2"><path d="m267 123 13-8 14 5-12 9z"/><path d="m267 123 15 6v14l-15-6z"/><path d="m282 129 12-9v14l-12 9z"/></g>' : ""}
        ${has("carrot") ? '<path d="m307 145 16-20 11 5-13 20z" fill="#de8044" stroke="#985a33" stroke-width="2"/><path d="m318 127 5-6m1 11 6-6" stroke="#f8b56e" stroke-width="2"/>' : ""}`;
    case "oyakodon":
      return `${has("rice") ? '<ellipse cx="240" cy="151" rx="104" ry="25" fill="#fff8e8" stroke="#c5b391" stroke-width="2"/><path d="M154 151q20-9 38 0t38 0 38 0 38 0 28 0" fill="none" stroke="#e6ddc8" stroke-width="3"/>' : ""}
        ${has("chicken") ? '<g fill="#c58c63" stroke="#865d42" stroke-width="2"><path d="m174 119 16-12 19 7-12 13z"/><path d="m174 119 23 8-2 14-21-8z"/><path d="m224 121 15-13 20 7-13 14z"/><path d="m224 121 22 8-2 14-20-8z"/></g>' : ""}
        ${has("egg") ? '<path d="M145 132q28-26 54-3t51-1 49 1 38 0" fill="none" stroke="#edc653" stroke-width="9" stroke-linecap="round"/><path d="M154 130q20-17 37-2m72 2q17-16 34-1" fill="none" stroke="#fff1b4" stroke-width="2"/>' : ""}
        ${has("onion") ? '<path d="M191 119q12-11 22 0m34 5q13-12 25 0m-65 17q12-10 22 0" fill="none" stroke="#e8e0cf" stroke-width="6" stroke-linecap="round"/>' : ""}`;
    case "katsudon":
      return `${has("rice") ? '<ellipse cx="240" cy="155" rx="104" ry="23" fill="#fff8e8" stroke="#c5b391" stroke-width="2"/><path d="M154 153q20-8 38 0t38 0 38 0 38 0" fill="none" stroke="#e6ddc8" stroke-width="3"/>' : ""}
        ${has("pork-cutlet") ? '<path d="M157 119q23-20 48-2l-2 22q-24 18-49 0z" fill="#bd744f" stroke="#80513a" stroke-width="3"/><path d="m164 123 6-6 6 6 6-6 6 6 6-6 6 6m-36 10 6-6 6 6 6-6 6 6 6-6 6 6" fill="none" stroke="#f3d8a7" stroke-width="3"/><path d="M225 117q26-19 51-2l-2 22q-24 18-49 0z" fill="#bd744f" stroke="#80513a" stroke-width="3"/>' : ""}
        ${has("egg") ? '<path d="M153 140q24-18 47-1t45-1" fill="none" stroke="#efcf69" stroke-width="7" stroke-linecap="round"/>' : ""}
        ${has("onion") ? '<path d="M209 116q11-9 21 0m31 12q11-9 21 0m-78 15q11-8 21 0" fill="none" stroke="#f2e8d1" stroke-width="5" stroke-linecap="round"/>' : ""}`;
    case "gyoza":
      return `${has("gyoza-wrapper") ? '<g fill="#eed7a7" stroke="#9d8057" stroke-width="3"><path d="M144 139q4-36 33-35 28 5 34 34-34 22-67 1z"/><path d="M199 139q4-36 33-35 28 5 34 34-34 22-67 1z"/><path d="M254 139q4-36 33-35 28 5 34 34-34 22-67 1z"/></g><path d="M151 135q9-9 17 0 8-9 16 0 8-9 17 0m-1 0q9-9 17 0 8-9 16 0 8-9 17 0m-1 0q9-9 17 0 8-9 16 0 8-9 17 0" fill="none" stroke="#c2a276" stroke-width="2"/>' : ""}
        ${has("pork") ? '<ellipse cx="185" cy="127" rx="14" ry="8" fill="#bd7865"/><ellipse cx="240" cy="127" rx="14" ry="8" fill="#bd7865"/><ellipse cx="295" cy="127" rx="14" ry="8" fill="#bd7865"/>' : ""}
        ${has("cabbage") ? '<path d="M167 158q-12-16 4-20 11-3 14 8 7-13 16-5m34 17q-12-16 4-20 11-3 14 8 7-13 16-5m-1 16q-12-16 4-20 11-3 14 8 7-13 16-5" fill="none" stroke="#81915c" stroke-width="4" stroke-linecap="round"/>' : ""}`;
    case "mochi":
      return `${has("mochi-rice") ? '<g fill="#fff9eb" stroke="#b5a68e" stroke-width="3"><ellipse cx="190" cy="133" rx="34" ry="26"/><ellipse cx="240" cy="124" rx="35" ry="27"/><ellipse cx="290" cy="133" rx="34" ry="26"/></g><path d="M166 128q22-12 47 0m2-10q24-13 49 0m3 10q22-12 47 0" fill="none" stroke="#e5ddce" stroke-width="2"/>' : ""}
        ${has("anko") ? '<path d="M263 121q19-22 41-2l-4 24q-22 15-39-3z" fill="#fff9eb" stroke="#b5a68e" stroke-width="3"/><ellipse cx="282" cy="132" rx="13" ry="11" fill="#8a4b40"/><circle cx="278" cy="130" r="2" fill="#c78468"/><circle cx="286" cy="134" r="2" fill="#c78468"/>' : ""}
        ${has("kinako") ? '<g fill="#c5a267" opacity=".9"><circle cx="177" cy="119" r="2"/><circle cx="192" cy="108" r="2"/><circle cx="208" cy="119" r="2"/><circle cx="228" cy="103" r="2"/><circle cx="246" cy="111" r="2"/><circle cx="260" cy="101" r="2"/><circle cx="302" cy="116" r="2"/><circle cx="315" cy="125" r="2"/></g>' : ""}`;
    default:
      return "";
  }
}

export function finalDishArtwork(dish, ingredients) {
  const ingredientNames = ingredients.map((ingredient) => ingredient.name).join(", ") || "no ingredients earned";
  const title = escapeHtml(`Finished ${dish.englishName} illustration: ${ingredientNames}`);
  const base = finalDishBase(dish.id);
  const missingIngredients = dish.ingredients.filter(
    (ingredient) => !ingredients.some((earned) => earned.id === ingredient.id),
  );
  const missingNames = escapeHtml(missingIngredients.map((ingredient) => ingredient.name).join(", "));
  const completionNote = missingIngredients.length
    ? `<p class="ingredient-note" role="status">Still to add next time: ${missingNames}</p>`
    : "";
  return `
    <figure class="final-dish-art ${dish.id}">
      <span class="dish-sparkles" aria-hidden="true"><span>✦</span><span>✧</span><span>✦</span><span>✧</span></span>
      <svg viewBox="0 0 480 230" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="240" cy="207" rx="148" ry="12" fill="#79563a" opacity=".18"/>
        ${base}
        <g transform="translate(240 138) scale(1.22) translate(-240 -138)">${finalFood(dish.id, ingredients)}</g>
      </svg>
      <figcaption>Prepared with ${ingredients.length} of ${dish.ingredients.length} earned key ingredients</figcaption>
      ${completionNote}
    </figure>`;
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}
