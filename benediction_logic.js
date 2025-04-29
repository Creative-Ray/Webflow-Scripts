const trionfiMantras = {
  Chrononfi: "Endless as time’s march.",
  Aeronfi: "Untethered as the whistling wind.",
  Bionfi: "Vital as the beating heart.",
  Geonfi: "Steadfast as the enduring stone.",
  Thermonfi: "Passionate as a relentless wildfire.",
  Cryonfi: "Deadly as the silent end.",
  Astronfi: "Boundless as the starlit sky.",
  Phononfi: "Harmonious as the song of dawn.",
  Electronfi: "Vibrant as the thunder’s roar.",
  Hydronfi: "Fluid as the coursing river.",
  Alchonfi: "Evolving as the alchemist’s mind.",
  Necronfi: "Inevitable as death’s shadow."
};

const trionfiDeities = {
  Bionfi: { deity: "Vitalis", religion: "Vitalism" },
  Geonfi: { deity: "Eve", religion: "Terradom" },
  Aeronfi: { deity: "Aiolos", religion: "Aerathen" },
  Phononfi: { deity: "Echo", religion: "Sonara" },
  Astronfi: { deity: "Codex", religion: "The Astral Path" },
  Hydronfi: { deity: "Tritum", religion: "Aqualore" },
  Necronfi: { deity: "Xenovia", religion: "Necroshim" },
  Cryonfi: { deity: "Khione", religion: "Cryonism" },
  Thermonfi: { deity: "Zhu'Rong", religion: "Luminara" },
  Electronfi: { deity: "Zen", religion: "Zenithism" },
  Chrononfi: { deity: "Chrony", religion: "Tempora" },
  Alchonfi: { deity: "Atomikatrismegistus", religion: "Alchemoria" }
};

const creationDestruction = {
  Bionfi: "Creation",
  Geonfi: "Creation",
  Aeronfi: "Creation",
  Phononfi: "Creation",
  Astronfi: "Creation",
  Hydronfi: "Creation",
  Necronfi: "Destruction",
  Cryonfi: "Destruction",
  Thermonfi: "Destruction",
  Electronfi: "Destruction",
  Chrononfi: "Destruction",
  Alchonfi: "Destruction"
};




const trionfiImages = {
  Bionfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca89a384707551ee371_Bionfi.png",
  Geonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8841ea70441120641_Geonfi.png",
  Aeronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e1316384a07af9f7_Aeronfi.png",
  Phononfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8a14886a1d67bfd8c_Phononfi.png",
  Astronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e1316384a07af9f2_Astronfi.png",
  Hydronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca87afbced726bf2d0f_Hydronfi.png",
  Necronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8c2801fe99551f51b_Necronfi.png",
  Cryonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8740aa7cdbadd82fc_Cryonfi.png",
  Thermonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8799198fcc4f4a75e_Thermonfi.png",
  Electronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca86435d972831ab2c1_Electronfi.png",
  Chrononfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8b98ce9dc657a728e_Chrononfi.png",
  Alchonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e81f9044b0e31849_Alchonfi.png",
};


const questions = [
{
  text: "In moments of chaos, do you seek to lead, heal, endure, or adapt?",
  options: [
    { text: "Lead", trionfis: ["Thermonfi", "Electronfi", "Aeronfi"] },
    { text: "Heal", trionfis: ["Bionfi", "Hydronfi", "Phononfi"] },
    { text: "Endure", trionfis: ["Geonfi", "Cryonfi", "Chrononfi"] },
    { text: "Adapt", trionfis: ["Alchonfi", "Astronfi", "Necronfi"] }
  ]
},


{
  text: "As you embark on the path to mastering your Trionfi, you encounter several obstacles that test your resolve. How do you overcome these challenges and continue to grow in your Trionfi?",
  options: [
    { text: "In the lore and wisdom of past masters, to understand the roots of my magic.", trionfis: ["Thermonfi", "Alchonfi", "Chrononfi"] },
    { text: "Trial and error. I believe practical experience is the best teacher.", trionfis: ["Geonfi", "Aeronfi", "Electronfi"] },
    { text: "Seeking mentors and joining communities of fellow practitioners, sharing insights, and supporting each other.", trionfis: ["Hydronfi", "Phononfi", "Bionfi"] },
    { text: "Self-reflection and meditation, harnessing my inner strength and intuition.", trionfis: ["Astronfi", "Cryonfi", "Necronfi"] }
  ]
},

{
  text: "Faced with a personal dilemma that challenges your beliefs and aspirations, how do you find your way forward?",
  options: [
    { text: "Reflect deeply, seeking solitude in nature or a quiet place where I can find the answers within my heart.", trionfis: ["Bionfi", "Geonfi", "Hydronfi"] },
    { text: "Experiment with different solutions, not afraid to try new approaches or learn from failure.", trionfis: ["Aeronfi", "Alchonfi", "Electronfi"] },
    { text: "Seek counsel from trusted friends or mentors, valuing diverse perspectives and wisdom.", trionfis: ["Chrononfi", "Necronfi", "Phononfi"] },
    { text: "I focus on understanding the root of the dilemma, using logic to analyze my situation and solution.", trionfis: ["Thermonfi", "Astronfi", "Cryonfi"] },
  ]
},

{
  text: "When faced with the unknown, what is your instinctive response?",
  options: [
    { text: "Illuminate the path ahead, even if the truth is harsh.", trionfis: ["Thermonfi", "Electronfi", "Chrononfi"] },
    { text: "Flow with it, adapting without fear or resistance.", trionfis: ["Hydronfi", "Aeronfi", "Alchonfi"] },
    { text: "Stand firm and endure, trusting in your strength.", trionfis: ["Geonfi", "Cryonfi", "Bionfi"] },
    { text: "Listen for hidden patterns and unseen currents beneath the surface.", trionfis: ["Phononfi", "Astronfi", "Necronfi"] },
  ]
},

{
  text: "Which inner truth guides your choices when no one is watching?",
  options: [
    { text: "My loyalty to the bonds I've formed, even if they are unseen.", trionfis: ["Hydronfi", "Chrononfi", "Astronfi"] },
    { text: "My drive to discover, no matter the risk.", trionfis: ["Alchonfi", "Electronfi", "Cryonfi"] },
    { text: "My duty to uphold a personal code of honor and strength.", trionfis: ["Geonfi", "Thermonfi", "Necronfi"] },
    { text: "My instinct to flow with change, trusting intuition over logic.", trionfis: ["Bionfi", "Aeronfi", "Phononfi"] }
  ]
},

{
  text: "You find yourself lost in an ancient ruin, the exit hidden and time running out. What is your first instinct?",
  options: [
    { text: "Break through obstacles by force, refusing to be trapped.", trionfis: ["Thermonfi", "Geonfi", "Electronfi"] },
    { text: "Study the symbols and architecture to find the correct path.", trionfis: ["Chrononfi", "Astronfi", "Alchonfi"] },
    { text: "Move carefully, feeling for changes in the air and environment.", trionfis: ["Aeronfi", "Hydronfi", "Cryonfi"] },
    { text: "Reach inward, trusting your intuition and spirit to lead you.", trionfis: ["Bionfi", "Phononfi", "Necronfi"] }
  ]
},



{
  text: "I like to...",
  options: [
    { text: "Create", trionfis: ["Bionfi", "Geonfi", "Astronfi", "Aeronfi", "Hydronfi", "Phononfi"] },
    { text: "Improve", trionfis: ["Thermonfi", "Electronfi", "Chrononfi", "Necronfi", "Cryonfi", "Alchonfi"] }
  ]
},


{
  text: "I prefer...",
  options: [
    { text: "Silence", trionfis: ["Cryonfi", "Chrononfi", "Geonfi", "Astronfi", "Necronfi", "Hydronfi"] },
    { text: "Noise", trionfis: ["Thermonfi", "Electronfi", "Phononfi", "Bionfi", "Aeronfi", "Alchonfi"] }
  ]
},


{
  text: "I am more drawn to...",
  options: [
    { text: "Familiar", trionfis: ["Geonfi", "Cryonfi", "Chrononfi", "Hydronfi", "Bionfi", "Necronfi"] },
    { text: "Unknown", trionfis: ["Astronfi", "Aeronfi", "Phononfi", "Thermonfi", "Electronfi", "Alchonfi"] }
  ]
},


{
  text: "I trust more in...",
  options: [
    { text: "Mind", trionfis: ["Chrononfi", "Astronfi", "Alchonfi", "Electronfi", "Geonfi", "Cryonfi"] },
    { text: "Heart", trionfis: ["Bionfi", "Hydronfi", "Phononfi", "Aeronfi", "Thermonfi", "Necronfi"] }
  ]
},


{
  text: "I rather be...",
  options: [
    { text: "Hot", trionfis: ["Thermonfi", "Electronfi", "Aeronfi", "Phononfi", "Bionfi", "Alchonfi"] },
    { text: "Cold", trionfis: ["Cryonfi", "Chrononfi", "Geonfi", "Astronfi", "Hydronfi", "Necronfi"] }
  ]
},

{
  text: "Which do you seek most?",
  options: [
    { text: "Freedom", trionfis: ["Aeronfi", "Alchonfi", "Astronfi"] },
    { text: "Mastery", trionfis: ["Thermonfi", "Electronfi", "Chrononfi"] },
    { text: "Connection", trionfis: ["Hydronfi", "Phononfi", "Bionfi"] },
    { text: "Endurance", trionfis: ["Geonfi", "Cryonfi", "Necronfi"] }
  ]
},


{
  text: "You wake up one day to find something you treasure has been taken from you. What loss shakes you the most?",
  options: [
    { text: "The loss of my freedom — feeling trapped and powerless.", trionfis: ["Aeronfi", "Necronfi", "Cryonfi"] },
    { text: "The loss of my knowledge or potential — becoming unable to grow.", trionfis: ["Alchonfi", "Bionfi", "Electronfi"] },
    { text: "The loss of my relationships — becoming isolated and forgotten.", trionfis: ["Hydronfi", "Phononfi", "Thermonfi"] },
    { text: "The loss of my foundation — everything familiar and stable crumbling.", trionfis: ["Geonfi", "Chrononfi", "Astronfi"] }
  ]
},



{
  text: "At the end of your journey, what remains most important to you?",
  options: [
    { text: "Living fully, embracing every moment.", trionfis: ["Bionfi"] },
    { text: "Leaving a lasting mark, a creation or legacy.", trionfis: ["Alchonfi"] },
    { text: "Understanding the mysteries of the universe.", trionfis: ["Astronfi"] },
    { text: "Protecting the bonds I've made with others.", trionfis: ["Hydronfi"] },
    { text: "Growing stronger, no matter the cost.", trionfis: ["Thermonfi"] },
    { text: "Preserving what is sacred and true.", trionfis: ["Geonfi"] }
  ]
},

{
  text: "When everything else fades away, what still drives you forward?",
  options: [
    { text: "The thrill of discovery and the unknown.", trionfis: ["Electronfi"] },
    { text: "The power to adapt, reshape, and survive.", trionfis: ["Necronfi"] },
    { text: "The pursuit of clarity and eternal truths.", trionfis: ["Chrononfi"] },
    { text: "The freedom to move beyond limits.", trionfis: ["Aeronfi"] },
    { text: "The beauty found in silence and endings.", trionfis: ["Cryonfi"] },
    { text: "The resonance of emotion and connection.", trionfis: ["Phononfi"] }
  ]
}





  // Keep adding until you have all 12 questions!
];

let currentQuestionIndex = 0;
let trionfiTally = {};
let selectedOption = null;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const container = document.getElementById("quiz-container");

  container.innerHTML = `
    <div class="question-progress">Question ${currentQuestionIndex + 1} of ${questions.length}</div>
    <div class="question-container">
      <div class="question-text">${question.text}</div>
      <div class="answer-options">
        ${question.options.map((option, index) => `
          <div 
            class="answer-option" 
            id="option-${index}" 
            role="button" 
            tabindex="0"
            onclick='selectAnswer(${JSON.stringify(option.trionfis).replace(/"/g, "&quot;")}, ${index})' 
            onkeydown='if(event.key === "Enter") selectAnswer(${JSON.stringify(option.trionfis).replace(/"/g, "&quot;")}, ${index})'
          >
            ${option.text}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


function selectAnswer(trionfis, index) {
  if (selectedOption !== null) return; // Prevent multiple clicks
  selectedOption = index;

  trionfis.forEach(trionfi => {
    trionfiTally[trionfi] = (trionfiTally[trionfi] || 0) + 1;
  });

  document.getElementById("next-button").disabled = false;

  // Highlight selected
  document.querySelectorAll('.answer-option').forEach(option => option.classList.remove('selected'));
  document.getElementById(`option-${index}`).classList.add('selected');
}

document.getElementById("next-button").addEventListener("click", () => {
  currentQuestionIndex++;
  selectedOption = null; // ✅ reset so they can select again on the next question

  if (currentQuestionIndex < questions.length) {
    showQuestion();
    document.getElementById("next-button").disabled = true;
  } else {
    document.getElementById("next-button").style.display = "none";
    document.getElementById("fate-button").style.display = "block";
  }
});

document.getElementById("fate-button").addEventListener("click", showResult);


trionfi_data = {
    "Bionfi": {
        "name": "Bionfi",
        "color": "#ff0000",
        "description": "As a practitioner of Bionfi, you harness the energies of life and soul. You can heal the living, channel energy to manipulate life forces to bolster strength. Your magic delves into the essence of existence. Your capabilities reflect a profound understanding of the cycle of life, embodying the nurturing aspect of creation.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca89a384707551ee371_Bionfi.png"
    },
    "Geonfi": {
        "name": "Geonfi",
        "color": "#654321",
        "description": "As a bearer of Geonfi, you command the enduring strength of stone and gravity. Your power roots deep, shaping terrain and pulling foes to the ground with unseen weight. You are unshakable, a quiet force of patience and resolve, embodying the foundation of all things. Your presence brings stability—an unyielding shield against chaos.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8841ea70441120641_Geonfi.png"
    },
    "Astronfi": {
        "name": "Astronfi",
        "color": "#8000ff",
        "description": "With Astronfi, the cosmos bends to your intent. You distort distances, walk across space, and fold dimensions to your will. Your Trionfi is abstract yet precise—crafted by intellect and wonder. You are a voyager of planes unseen, ever searching the stars for truth. Space is your canvas, and you move through it like a god dreaming in equations.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e1316384a07af9f2_Astronfi.png"
    },
    "Aeronfi": {
        "name": "Aeronfi",
        "color": "#00ff00",
        "description": "As a wielder of Aeronfi, you move like the wind—unpredictable, swift, and free. Your mastery of currents and pressure lets you reshape the skies, summon storms, and outpace any threat. You are the breath between stillness and storm, a roaming spirit who cannot be tethered. You embody the essence of movement, change, and boundless freedom.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e1316384a07af9f7_Aeronfi.png"
    },
    "Hydronfi": {
        "name": "Hydronfi",
        "color": "#0000ff",
        "description": "As a vessel of Hydronfi, you are one with the ocean’s flow—gentle or crushing, still or spiraling. You shape tides, purify streams, and drown your enemies in silence. Your power is connection—every droplet carries your will. You are fluidity incarnate, never rigid, always adapting—letting go, and returning stronger.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca87afbced726bf2d0f_Hydronfi.png"
    },
    "Phononfi": {
        "name": "Phononfi",
        "color": "#ff008c",
        "description": "As a conduit of Phononfi, you tap into the resonance of sound and mind. Your voice is more than words—it’s persuasion, illusion, and raw frequency. You ripple through minds and silence with equal force, guiding thought with tone alone. You are a living echo of emotion and control.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8a14886a1d67bfd8c_Phononfi.png"
    },
    "Thermonfi": {
        "name": "Thermonfi",
        "color": "#ffa500",
        "description": "As a flamebearer of Thermonfi, you ignite every path you tread. Your heat consumes, transforms, and inspires. Fire dances to your will—raw, relentless, and untamed. You are passion given form, a wildfire that cannot be stopped. Your magic is not just power—it’s purpose, lit with intensity that dares to defy.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8799198fcc4f4a75e_Thermonfi.png"
    },
    "Electronfi": {
        "name": "Electronfi",
        "color": "#ffff00",
        "description": "As a spark of Electronfi, you surge with energy and edge. Your lightning is instinct, leaping before thought. You channel voltage into speed, brilliance, and impact, striking with chaotic precision. You are motion, reaction, and rebellion. Wherever you go, things change—and they do so fast.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca86435d972831ab2c1_Electronfi.png"
    },
    "Chrononfi": {
        "name": "Chrononfi",
        "color": "#ffa7f0",
        "description": "As a vessel of Chrononfi, time slows beneath your gaze. You see what was, what is, and what could be, weaving memory into motion. Your magic is rhythm and consequence, bending timelines with careful hands. You are never late, never early. You arrive exactly when fate intends—and you never waste a second.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8b98ce9dc657a728e_Chrononfi.png"
    },
    "Necronfi": {
        "name": "Necronfi",
        "color": "#800080",
        "description": "As a master of Necronfi, you walk in the shadow of endings. You command what lies beyond life—spirits, decay, and forgotten echoes. Death answers your call, not as an enemy, but as a loyal guide. You do not fear the abyss; you are its voice. Through you, endings become beginnings, and the veil between worlds thins.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8c2801fe99551f51b_Necronfi.png"
    },
    "Cryonfi": {
        "name": "Cryonfi",
        "color": "#00ffff",
        "description": "With Cryonfi, time slows and silence reigns. You hold winter’s stillness in your grasp, freezing movement, halting progress, and preserving what should not yet fade. You are calm when all else panics, distant but not detached. Your frost is not cruelty—it is clarity, a glacial truth in a world of chaos.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8740aa7cdbadd82fc_Cryonfi.png"
    },
    "Alchonfi": {
        "name": "Alchonfi",
        "color": "#d0ff00",
        "description": "With Alchonfi, you unravel the world’s code. Every atom is a puzzle, every transformation a possibility. You transmute matter, rewrite laws, and dance with discovery. You are a seeker, a creator, a mind that refuses to settle. Your hands stir potential—always innovating, never satisfied with what is.",
        "image": "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e81f9044b0e31849_Alchonfi.png"
    }
}









function showResult() {
  const resultContainer = document.getElementById("result-container");
  const quizContainer = document.getElementById("quiz-container");
  const fateButton = document.getElementById("fate-button");
  const resultImage = document.getElementById("result-image");
  const resultTitle = document.getElementById("result-title");
  const resultDesc = document.getElementById("result-description");

  quizContainer.style.display = "none";
  fateButton.style.display = "none";

  // Show loading first
  document.getElementById("loading-fate").style.display = "block";

  setTimeout(() => {
    document.getElementById("loading-fate").style.display = "none";
    resultContainer.style.display = "block";

    // Pick the Trionfi
    let chosenTrionfi = Object.keys(trionfiTally).reduce((a, b) => 
      trionfiTally[a] > trionfiTally[b] ? a : b
    );

    const data = trionfi_data[chosenTrionfi];

    // Set result info
    resultTitle.innerText = `You are blessed by ${data.name}`;
    resultTitle.className = `result-title ${chosenTrionfi.toLowerCase()}-title`;
    resultDesc.innerHTML = `
      ${data.description}<br><br>
      <em>"${trionfiMantras[chosenTrionfi]}"</em><br><br>
      <small><strong>Deity:</strong> ${trionfiDeities[chosenTrionfi].deity} | <strong>Religion:</strong> ${trionfiDeities[chosenTrionfi].religion}</small><br><br>
      <span class="result-nature ${creationDestruction[chosenTrionfi].toLowerCase()}">
  ${creationDestruction[chosenTrionfi]}
</span>

    `;

    // Set dynamic image
    resultImage.src = data.image;
    resultImage.className = `result-trionfi-image ${chosenTrionfi.toLowerCase()}`;
    resultImage.style.opacity = 1;


    // Optional: Get 2nd and 3rd place Trionfi
    const sortedTrionfis = Object.entries(trionfiTally)
  .filter(([key]) => key !== chosenTrionfi)
  .sort((a, b) => b[1] - a[1]);
    const runnerUp = sortedTrionfis[1] ? `${sortedTrionfis[1][0]} (${sortedTrionfis[1][1]} points)` : null;
    const thirdPlace = sortedTrionfis[2] ? `${sortedTrionfis[2][0]} (${sortedTrionfis[2][1]} points)` : null;

    // Create Share and Return buttons
    const extraDiv = document.createElement("div");
    extraDiv.style.marginTop = "3rem";
    extraDiv.innerHTML = `
  <div class="result-extras">
    <p>✦ Share this quiz with your friends and see which Trionfi calls to them!</p>
    <button class="quiz-share-button"
      onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied! Share the blessing of Trionfi ✦');">
      Copy Quiz Link
    </button>

    ${runnerUp ? `<div class="runner-up"><strong>Runner-up:</strong> ${runnerUp}</div>` : ""}
    ${thirdPlace ? `<div class="third-place"><strong>Third place:</strong> ${thirdPlace}</div>` : ""}
  </div>
`;


    document.getElementById("extra-result-info").appendChild(extraDiv);
    // 🛠️ END OF EXTRA STUFF
  }, 4000);
}





// Map Trionfi to their image URL
function getTrionfiImage(trionfi) {
  const images = {
    Bionfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca89a384707551ee371_Bionfi.png",
    Geonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8841ea70441120641_Geonfi.png",
    Aeronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e1316384a07af9f7_Aeronfi.png",
    Phononfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8a14886a1d67bfd8c_Phononfi.png",
    Astronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e1316384a07af9f2_Astronfi.png",
    Hydronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca87afbced726bf2d0f_Hydronfi.png",
    Necronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8c2801fe99551f51b_Necronfi.png",
    Cryonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8740aa7cdbadd82fc_Cryonfi.png",
    Thermonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8799198fcc4f4a75e_Thermonfi.png",
    Electronfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca86435d972831ab2c1_Electronfi.png",
    Chrononfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8b98ce9dc657a728e_Chrononfi.png",
    Alchonfi: "https://cdn.prod.website-files.com/66b16b31e77c9f651a9060a7/68060ca8e81f9044b0e31849_Alchonfi.png",
  };
  return images[trionfi] || null;
}


// Initialize
showQuestion();
document.getElementById("next-button").disabled = true;



  window.addEventListener('load', function() {
    document.querySelectorAll('.benediction-glyph').forEach(glyph => {
      glyph.style.opacity = '0.5';
    });
  });



  function startBenediction() {
  const checkbox = document.getElementById('trionfi-promise');
  if (!checkbox.checked) {
    alert('You must promise to wield your Trionfi for good first.');
    return;
  }
  document.getElementById('benediction-start').style.display = 'none';
  document.querySelector('.benediction-container').style.display = 'block';
}