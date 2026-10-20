export function restaurantInterior() {
  return `
    <svg class="restaurant-interior" viewBox="0 0 920 500" role="img"
         aria-label="A cozy Japanese restaurant with the grandparents cooking behind a wooden counter, bonsai, and old monochrome pictures">
      <defs>
        <pattern id="paper-wall" width="38" height="38" patternUnits="userSpaceOnUse">
          <rect width="38" height="38" fill="#dce0ca"/>
          <path d="M0 8h38M0 29h38" stroke="#aeb79b" stroke-width=".6" opacity=".32"/>
          <circle cx="8" cy="17" r="1" fill="#9da982" opacity=".3"/>
        </pattern>
        <pattern id="wood-grain" width="90" height="16" patternUnits="userSpaceOnUse">
          <rect width="90" height="16" fill="#805739"/>
          <path d="M0 5q18-5 34 0t30 0 26 0M0 13q25-4 49 0t41 0" fill="none" stroke="#b18358" stroke-width="1" opacity=".48"/>
        </pattern>
        <linearGradient id="lamp-glow" x2="0" y2="1">
          <stop stop-color="#fff1b8"/>
          <stop offset="1" stop-color="#d79a4b"/>
        </linearGradient>
      </defs>
      <rect width="920" height="500" fill="url(#paper-wall)"/>
      <path d="M0 0h920v30H0zM0 30h920v12H0z" fill="#5d4430"/>
      <path d="M35 42v270M272 42v270M615 42v270M884 42v270" stroke="#654a34" stroke-width="13"/>
      <path d="M42 128h224M282 128h320M626 128h246" stroke="#76563a" stroke-width="8"/>

      <g aria-hidden="true">
        <path d="M117 0v52M99 48h38l-4 58q-15 12-30 0z" fill="#b95642" stroke="#613e2b" stroke-width="3"/>
        <path d="M100 58h36M103 102h31" stroke="#f2d69a" stroke-width="3"/>
        <path d="M117 107v14" stroke="#613e2b" stroke-width="3"/>
        <circle cx="118" cy="79" r="11" fill="url(#lamp-glow)" opacity=".8"/>
      </g>

      <g class="wall-picture" aria-hidden="true">
        <rect x="304" y="55" width="112" height="62" rx="2" fill="#f2e9d6" stroke="#6c5037" stroke-width="5"/>
        <rect x="311" y="62" width="98" height="48" fill="#d5d2c5"/>
        <path d="M315 96q17-28 31-13 18-27 32-5 10-12 27-4v30h-90z" fill="#77766d"/>
        <path d="M315 101q24-8 42 0t52-3v12h-94z" fill="#a9a79b"/>
        <rect x="444" y="55" width="112" height="62" rx="2" fill="#f2e9d6" stroke="#6c5037" stroke-width="5"/>
        <rect x="451" y="62" width="98" height="48" fill="#d4d0c3"/>
        <path d="M455 100q13-20 29-13 15-25 31-6 17-19 30-7v36h-90z" fill="#85847a"/>
        <path d="M462 76q9-4 16 1M514 78q11-4 18 0" stroke="#eeeadf" stroke-width="2"/>
      </g>

      <g class="wall-scroll" aria-hidden="true">
        <rect x="185" y="157" width="68" height="88" rx="3" fill="#f3e5c8" stroke="#80583b" stroke-width="4"/>
        <path d="M192 167h54M192 235h54" stroke="#b85f49" stroke-width="4"/>
        <circle cx="219" cy="194" r="14" fill="#d98756"/>
        <path d="M200 219q19-26 38 0v8h-38z" fill="#68846a" stroke="#526847" stroke-width="2"/>
        <path d="M211 183q-8-10 0-16M226 183q8-10 0-16" fill="none" stroke="#80583b" stroke-width="2" stroke-linecap="round"/>
      </g>

      <g class="shelf" aria-hidden="true">
        <path d="M656 125h195v8H656z" fill="#684b32"/>
        <path d="M677 94q17-14 34 0v28h-34zM726 84q20-16 40 0v38h-40zM782 98q15-13 30 0v24h-30z"
              fill="#a98761" stroke="#694b32" stroke-width="2"/>
        <path d="M682 104h24M731 98h30M785 107h24" stroke="#eee0bd" stroke-width="3"/>
      </g>

      <g class="noren" aria-hidden="true">
        <path d="M286 139h313v25q-18 10-36 0-18 10-36 0-18 10-36 0-18 10-36 0-18 10-36 0-18 10-36 0-18 10-36 0-18 10-36 0z"
              fill="#b85f49" stroke="#704536" stroke-width="3"/>
        <path d="M365 140v23M443 140v23M521 140v23" stroke="#e6c98e" stroke-width="3" opacity=".9"/>
        <circle cx="325" cy="151" r="4" fill="#e6c98e"/>
        <circle cx="560" cy="151" r="4" fill="#e6c98e"/>
      </g>

      <g class="shoji" aria-hidden="true">
        <rect x="641" y="156" width="225" height="158" fill="#dfcfad" stroke="#644a34" stroke-width="8"/>
        <path d="M697 158v154M754 158v154M811 158v154M643 208h221M643 260h221" stroke="#876648" stroke-width="5"/>
        <path d="M647 163h44v39h-44zM702 163h46v39h-46zM759 163h47v39h-47zM816 163h44v39h-44z"
              fill="#f4ecd9" opacity=".45"/>
      </g>

      <g class="bonsai" aria-label="bonsai tree">
        <path d="M67 322h96l-8 28H76z" fill="#9f593c" stroke="#674733" stroke-width="3"/>
        <path d="M112 319q20-42 0-78M112 285q-27-22-45-31M115 276q26-27 48-31" fill="none" stroke="#76513a" stroke-width="8" stroke-linecap="round"/>
        <path d="M72 252q2-27 31-24 14-28 40-8 25-15 31 14 21 13 2 31H85q-24 0-13-13z"
              fill="#65754f" stroke="#46563b" stroke-width="3"/>
        <circle cx="93" cy="240" r="13" fill="#839265"/><circle cx="133" cy="231" r="14" fill="#758657"/>
        <circle cx="158" cy="252" r="12" fill="#81905f"/><circle cx="105" cy="258" r="12" fill="#879566"/>
      </g>

      <g class="grandparents" aria-label="grandparents preparing food">
        <g transform="translate(300 166)">
          <path d="M5 164q6-77 64-77 58 0 65 77" fill="#526a59" stroke="#4b3d2e" stroke-width="4"/>
          <path d="M26 97q6-24 41-24t45 24l-13 29H35z" fill="#f2e7cb" stroke="#66503a" stroke-width="3"/>
          <path class="grandparent-neck" d="M55 78h26l6 27q0 12-19 19-19-7-19-19z" fill="#edcba4" stroke="#75543c" stroke-width="3"/>
          <ellipse cx="68" cy="44" rx="40" ry="47" fill="#edcba4" stroke="#75543c" stroke-width="3"/>
          <path class="grandparent-ear" d="M30 39q-9-4-9 6t9 9q4-4 1-7M106 39q9-4 9 6t-9 9q-4-4-1-7"
                fill="#edcba4" stroke="#a67c60" stroke-width="2" stroke-linejoin="round"/>
          <path d="M26 44q3-3 5 1M110 44q-3-3-5 1" fill="none" stroke="#b68163" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M29 37q3-38 38-38 34 0 41 37l-16-14q-22 11-54-1z" fill="#c8c4b8" stroke="#655849" stroke-width="3"/>
          <path d="M49 45h8M77 45h8" stroke="#463a30" stroke-width="5" stroke-linecap="round"/>
          <path d="M57 67q11 9 22 0" fill="none" stroke="#9d5f4c" stroke-width="3" stroke-linecap="round"/>
          <path d="M5 119h126M5 133h126" stroke="#f0e5ce" stroke-width="3"/>
          <path d="M118 108q24-8 30 7l-22 14" fill="none" stroke="#edcba4" stroke-width="12" stroke-linecap="round"/>
        </g>
        <g transform="translate(455 165)">
          <path d="M3 165q5-79 63-79 57 0 64 79" fill="#b66852" stroke="#4b3d2e" stroke-width="4"/>
          <path d="M28 96q7-23 39-23 34 0 44 23l-13 32H40z" fill="#f1e4cb" stroke="#71543b" stroke-width="3"/>
          <path class="grandparent-neck" d="M54 77h26l7 29q0 12-20 19-20-7-20-19z" fill="#e9c49d" stroke="#75543c" stroke-width="3"/>
          <ellipse cx="67" cy="43" rx="40" ry="47" fill="#e9c49d" stroke="#75543c" stroke-width="3"/>
          <path class="grandparent-ear" d="M29 38q-9-4-9 6t9 9q4-4 1-7M105 38q9-4 9 6t-9 9q-4-4-1-7"
                fill="#e9c49d" stroke="#a67c60" stroke-width="2" stroke-linejoin="round"/>
          <path d="M25 43q3-3 5 1M109 43q-3-3-5 1" fill="none" stroke="#b68163" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M28 36q4-39 39-39 36 0 40 40l-14-15q-26 12-53-1z" fill="#d2cec2" stroke="#665c50" stroke-width="3"/>
          <path d="M45 44h17M72 44h17" fill="none" stroke="#5a5048" stroke-width="3"/>
          <circle cx="54" cy="45" r="8" fill="none" stroke="#5a5048" stroke-width="2"/>
          <circle cx="80" cy="45" r="8" fill="none" stroke="#5a5048" stroke-width="2"/>
          <path d="M62 45h10M58 67q10 8 20 0" fill="none" stroke="#9d5f4c" stroke-width="3" stroke-linecap="round"/>
          <path d="M5 120h125M5 135h125" stroke="#f5e7cb" stroke-width="3"/>
          <path d="M7 111q-22-8-26 9l21 12" fill="none" stroke="#e9c49d" stroke-width="12" stroke-linecap="round"/>
        </g>
      </g>

      <g class="kitchenware" aria-hidden="true">
        <path d="M180 288h90l-6 25h-78z" fill="#bf9a68" stroke="#60462f" stroke-width="3"/>
        <path d="M190 279q6-28 35-28t35 28z" fill="#f0e3c6" stroke="#60462f" stroke-width="3"/>
        <path d="M218 251q7-14 17 0" fill="none" stroke="#60462f" stroke-width="3"/>
        <path d="M734 274h52q-2 28-26 28t-26-28z" fill="#c27c59" stroke="#65492f" stroke-width="3"/>
        <path d="M786 281q24-8 16 10-5 8-17 1" fill="none" stroke="#65492f" stroke-width="4"/>
        <path d="M750 269q-10-12 0-20M765 268q-8-13 2-21" fill="none" stroke="#f8efd9" stroke-width="3" stroke-linecap="round"/>
      </g>

      <path d="M0 317h920v183H0z" fill="url(#wood-grain)" stroke="#543c2a" stroke-width="5"/>
      <path d="M0 326h920M0 350h920" stroke="#d0a16b" stroke-width="3" opacity=".55"/>
      <path d="M206 321q22-29 44 0v28h-44z" fill="#ece1c7" stroke="#66513c" stroke-width="3"/>
      <path d="M211 321q17-17 34 0" fill="none" stroke="#bf7051" stroke-width="5"/>
      <path d="M255 309q22-29 44 0v39h-44z" fill="#d7e2d5" stroke="#66513c" stroke-width="3"/>
      <path d="M261 319q16-18 32 0" fill="none" stroke="#7d956c" stroke-width="5"/>
      <path d="M814 315q20-24 40 0v33h-40z" fill="#eee4ce" stroke="#66513c" stroke-width="3"/>
      <path d="M819 322q14-13 29 0" fill="none" stroke="#bd7857" stroke-width="4"/>
    </svg>`;
}

const auntieStyles = [
  { hair: "#d4d0c4", robe: "#bd7056", face: "#efcaa0", hairShape: "M-39-39q7-47 42-47 40 0 43 47L31-51Q0-35-31-51z", accessory: "glasses" },
  { hair: "#aaa99d", robe: "#668071", face: "#e9c29a", hairShape: "M-40-45q2-40 43-40 38 0 42 42l-12-10q-31 14-61-2z", accessory: "bun" },
  { hair: "#c5c1b5", robe: "#83749a", face: "#f0cda5", hairShape: "M-40-41q5-45 41-45 36 0 40 44l-15-13q-25 10-53-1z", accessory: "clip" },
];

function auntieFigure(style, mood, x) {
  const mouth = {
    happy: '<path d="M-10 21q10 13 20 0" fill="none" stroke="#884c40" stroke-width="3" stroke-linecap="round"/>',
    neutral: '<path d="M-9 25h18" fill="none" stroke="#884c40" stroke-width="3" stroke-linecap="round"/>',
    upset: '<path d="M-10 29q10-12 20 0" fill="none" stroke="#884c40" stroke-width="3" stroke-linecap="round"/>',
  }[mood];
  const accessory = style.accessory === "glasses"
    ? '<g fill="none" stroke="#56493c" stroke-width="2.5"><circle cx="-13" cy="1" r="9"/><circle cx="13" cy="1" r="9"/><path d="M-4 1h8"/></g>'
    : style.accessory === "bun"
      ? `<circle cx="33" cy="-67" r="15" fill="${style.hair}" stroke="#63594f" stroke-width="2"/>`
      : '<path d="M19-71l11 11-11 8-11-8z" fill="#e1b970" stroke="#765b39" stroke-width="2"/>';
  return `
    <g transform="translate(${x} 109)" class="auntie-figure" aria-label="A seated older woman looking ${mood}">
      <path d="M-62 183Q-60 45 0 45Q60 45 62 183z" fill="${style.robe}" stroke="#594633" stroke-width="3"/>
      <path class="auntie-neck" d="M-13 15h26l9 43H-22z" fill="${style.face}" stroke="#76543e" stroke-width="2.5"/>
      <path d="M-22 49 0 77 22 49" fill="#f2e6d2" stroke="#6d523b" stroke-width="2"/>
      <path d="M-5 79h10v102H-5z" fill="#e5d0ac" opacity=".75"/>
      <ellipse cx="0" cy="-19" rx="39" ry="49" fill="${style.face}" stroke="#76543e" stroke-width="3"/>
      <path class="auntie-ear" d="M-36-27q-10-3-9 7t10 8q4-4 1-7M36-27q10-3 9 7t-10 8q-4-4-1-7"
            fill="${style.face}" stroke="#a67c60" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M-42-21q3-3 5 1M42-21q-3-3-5 1" fill="none" stroke="#b68163" stroke-width="1.3" stroke-linecap="round"/>
      <path d="${style.hairShape}" fill="${style.hair}" stroke="#61594d" stroke-width="3"/>
      ${accessory}
      <circle cx="-13" cy="1" r="2.6" fill="#3d332a"/>
      <circle cx="13" cy="1" r="2.6" fill="#3d332a"/>
      <path d="M-2 8l-3 8 8 0" fill="none" stroke="#bc8a67" stroke-width="2"/>
      ${mouth}
      <path d="M-25 18q7 5 13 0M25 18q-7 5-13 0" fill="#d58c7d" opacity=".48"/>
      <path d="M-24 81q24 14 48 0" fill="none" stroke="#594633" stroke-width="2"/>
    </g>`;
}

export function auntiesAtCounter(mood) {
  const figures = auntieStyles.map((style, index) =>
    auntieFigure(style, mood, [205, 460, 715][index]),
  ).join("");
  return `
    <svg class="aunties-counter-art" viewBox="0 0 920 360" role="img"
         aria-label="Three different Japanese older women seated together at the restaurant counter, each with a plate of food. Their expressions are ${mood}.">
      <defs>
        <pattern id="counter-grain" width="72" height="13" patternUnits="userSpaceOnUse">
          <rect width="72" height="13" fill="#80583b"/>
          <path d="M0 4q17-4 34 0t38 0M0 10q19-3 38 0t34 0" fill="none" stroke="#b5885b" stroke-width="1" opacity=".5"/>
        </pattern>
      </defs>
      <rect width="920" height="360" fill="#eadbbd"/>
      <path d="M45 0v115M875 0v115M45 39h830" stroke="#77563a" stroke-width="9"/>
      <rect x="67" y="13" width="88" height="70" fill="#d4d0c4" stroke="#6b5239" stroke-width="4"/>
      <path d="M74 70q19-40 37-18 17-37 37 2v25H74z" fill="#77766d"/>
      <rect x="765" y="13" width="88" height="70" fill="#d4d0c4" stroke="#6b5239" stroke-width="4"/>
      <path d="M772 69q17-34 35-18 17-28 39 5v23h-74z" fill="#8a887d"/>
      ${figures}
      <path d="M0 202h920v158H0z" fill="url(#counter-grain)" stroke="#573e2c" stroke-width="5"/>
      <path d="M0 219h920" stroke="#d0a16b" stroke-width="5"/>
      <g class="counter-plates" fill="#f6eedc" stroke="#9f845e" stroke-width="3">
        <ellipse cx="205" cy="242" rx="79" ry="17"/><ellipse cx="460" cy="242" rx="79" ry="17"/><ellipse cx="715" cy="242" rx="79" ry="17"/>
      </g>
      <g aria-hidden="true" transform="translate(0 24)">
        <path d="M153 215q25-23 49-1l-7 9h-37z" fill="#f4ebd4" stroke="#8d7655" stroke-width="2"/>
        <path d="M174 214l8-9 9 9" fill="#b9584e"/>
        <path d="M407 215q16-19 33-1l-4 10h-29z" fill="#d58b55"/>
        <path d="M457 215q18-19 35-1l-4 10h-30z" fill="#a9ad72"/>
        <path d="M665 215q17-19 33-1l-4 10h-29z" fill="#c67b59"/>
        <path d="M704 215q17-19 34-1l-4 10h-30z" fill="#e3c36f"/>
        <path d="M747 215q16-18 31-1l-4 10h-28z" fill="#829061"/>
      </g>
      <path d="M92 278h736M125 318h670" stroke="#cb9b67" stroke-width="2" opacity=".48"/>
    </svg>`;
}
