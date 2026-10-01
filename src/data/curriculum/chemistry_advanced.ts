import { Chapter } from '../../types';

export const chemistryAdvancedChapters: Chapter[] = [
  {
    id: 'chem_ch8',
    subjectId: 'chemistry',
    number: 8,
    title: 'Acids, Bases and Salts',
    description: 'Characteristics of acids and bases, pH scale, neutralisation, oxides, and salt preparation.',
    subtopics: [
      {
        id: 'chemistry_8',
        chapterId: 'chem_ch8',
        subjectId: 'chemistry',
        code: '8',
        title: 'Acids, Bases and Salts',
        description: 'Universal indicator, pH scale, acid reactions, and insoluble vs soluble salt preparation.',
        durationMinutes: 14,
        experience: {
          type: 'ph_rescue_lab',
          title: 'pH Rescue Neutralisation Lab',
          scenario: 'An accidental industrial spill into a freshwater river needs immediate pH stabilization.',
          prompt: 'Test 5 unknown solutions with Universal Indicator (observe colors from Red pH 1, Orange pH 4, Green pH 7, Blue pH 9, Purple pH 14). Neutralise acidic river runoff with powdered limestone (CaCO₃) or calcium hydroxide.',
          goal: 'Neutralise a strongly acidic waste tank (pH 2) to safe aquatic neutral (pH 7.0).'
        },
        lesson: {
          whatHappened: 'Acids produced hydrogen ions (H⁺) turning indicator red; alkalis produced hydroxide ions (OH⁻) turning indicator purple. Mixing them in stoichiometric amounts produced neutral water (H⁺ + OH⁻ → H₂O) and a salt.',
          academicConcept: 'Acids: Proton (H⁺) donors in aqueous solution (pH < 7). Alkalis: Soluble bases producing OH⁻ ions (pH > 7). Reactions of acids: (1) Acid + Metal → Salt + Hydrogen gas (test: squeaky pop). (2) Acid + Base → Salt + Water. (3) Acid + Carbonate → Salt + Water + Carbon Dioxide gas (test: limewater turns cloudy/milky). Salt preparation: Titration for soluble sodium/potassium/ammonium salts; excess insoluble base method for other soluble salts; precipitation for insoluble salts.',
          interactiveDiagram: {
            title: 'Universal Indicator Scale & Ionic Neutralisation',
            caption: 'pH 1 (red, strong acid) → pH 7 (green, neutral) → pH 14 (violet, strong alkali); H⁺ + OH⁻ → H₂O',
            keyPoints: [
              'Neutralisation ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l).',
              'Oxides classification: Basic (metal oxides), Acidic (non-metal oxides e.g. SO₂, CO₂), Amphoteric (Al₂O₃, ZnO react with both acids and bases), Neutral (CO, NO).',
              'Solubility rules: All nitrates are soluble; all group 1 and ammonium salts are soluble; silver and lead halides are insoluble.',
              'Precipitation reactions mix two soluble solutions to form an insoluble solid salt precipitate.'
            ]
          },
          workedExample: {
            title: 'Preparing Pure Dry Crystals of Copper(II) Sulfate',
            problem: 'Outline the steps to prepare dry crystals of CuSO₄ starting from insoluble black Copper(II) oxide powder and dilute sulfuric acid.',
            stepByStep: [
              { step: 'Reaction', detail: 'Warm dilute H₂SO₄ and add excess CuO powder until no more dissolves (ensuring all acid is neutralised)' },
              { step: 'Filtration', detail: 'Filter the mixture to remove excess unreacted black CuO solid residue' },
              { step: 'Crystallisation', detail: 'Heat the blue filtrate gently in an evaporating dish until crystallisation point, then leave to cool and crystallise' },
              { step: 'Drying', detail: 'Filter the blue crystals and pat dry between filter papers' }
            ],
            keyTakeaway: 'The excess insoluble base method guarantees that all acid has reacted, yielding pure neutral salt crystals.'
          },
          quickChallenge: {
            prompt: 'Which chemical equation represents the fundamental ionic equation for all acid-alkali neutralisation reactions?',
            options: ['H⁺(aq) + OH⁻(aq) → H₂O(l)', 'Na⁺ + Cl⁻ → NaCl', '2H₂ + O₂ → 2H₂O', 'Ca²⁺ + CO₃²⁻ → CaCO₃'],
            correctIndex: 0,
            explanation: 'Neutralisation in aqueous solution is the combination of hydrogen ions from the acid with hydroxide ions from the alkali to form neutral liquid water.'
          },
          summary: [
            'Acids have pH < 7 (H⁺ ions); alkalis have pH > 7 (OH⁻ ions).',
            'Acid + Base → Salt + Water; Acid + Carbonate → Salt + Water + CO₂.',
            'Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l).'
          ]
        },
        questions: [
          {
            id: 'c8_q1',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What color does Universal Indicator turn in a neutral solution (pH 7)?',
            options: ['Green', 'Red', 'Purple', 'Yellow'],
            correctAnswer: 'Green',
            explanation: 'Universal indicator is red at pH 1-2, green at neutral pH 7, and dark purple at pH 13-14.'
          },
          {
            id: 'c8_q2',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What gas is evolved when dilute hydrochloric acid reacts with calcium carbonate (marble chips)?',
            options: ['Carbon dioxide (turns limewater cloudy)', 'Hydrogen (burns with squeaky pop)', 'Oxygen (relights glowing splint)', 'Chlorine (bleaches damp litmus)'],
            correctAnswer: 'Carbon dioxide (turns limewater cloudy)',
            explanation: 'Acid + Carbonate → Salt + Water + CO₂; carbon dioxide precipitates CaCO₃ in limewater.'
          },
          {
            id: 'c8_q3',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What is an amphoteric oxide?',
            options: ['An oxide that reacts with both acids and bases to form salts (e.g. Al₂O₃, ZnO)', 'An oxide that never reacts', 'An oxide that dissolves in water to form acid only', 'A neutral gas'],
            correctAnswer: 'An oxide that reacts with both acids and bases to form salts (e.g. Al₂O₃, ZnO)',
            explanation: 'Amphoteric oxides like aluminium oxide and zinc oxide react with both hydrochloric acid and sodium hydroxide.'
          },
          {
            id: 'c8_q4',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'Which method should be used to prepare a soluble salt like Sodium chloride (NaCl) from an acid and alkali?',
            options: ['Titration using an indicator, then repeating without indicator and evaporating', 'Adding excess insoluble metal', 'Precipitation', 'Fractional distillation'],
            correctAnswer: 'Titration using an indicator, then repeating without indicator and evaporating',
            explanation: 'Both reactants are soluble, so exact stoichiometric volumes must be found via titration.'
          },
          {
            id: 'c8_q5',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'Which of the following salts is completely insoluble in water?',
            options: ['Barium sulfate (BaSO₄)', 'Sodium nitrate (NaNO₃)', 'Potassium chloride (KCl)', 'Ammonium sulfate ((NH₄)₂SO₄)'],
            correctAnswer: 'Barium sulfate (BaSO₄)',
            explanation: 'Barium sulfate is an insoluble white precipitate used as a medical contrast medium and sulfate test.'
          },
          {
            id: 'c8_q6',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What is the ionic equation for the neutralisation of nitric acid by potassium hydroxide solution?',
            options: ['H⁺(aq) + OH⁻(aq) → H₂O(l)', 'K⁺ + NO₃⁻ → KNO₃', 'H⁺ + NO₃⁻ → HNO₃', 'K⁺ + OH⁻ → KOH'],
            correctAnswer: 'H⁺(aq) + OH⁻(aq) → H₂O(l)',
            explanation: 'Spectator ions (K⁺ and NO₃⁻) cancel, leaving the fundamental neutralisation equation.'
          },
          {
            id: 'c8_q7',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What test confirms the presence of aqueous sulfate ions (SO₄²⁻) in a solution?',
            options: ['Add dilute nitric acid then aqueous barium nitrate; a dense white precipitate forms', 'Add silver nitrate; yellow precipitate', 'Add sodium hydroxide; brown precipitate', 'Flame test turns green'],
            correctAnswer: 'Add dilute nitric acid then aqueous barium nitrate; a dense white precipitate forms',
            explanation: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) produces an insoluble white precipitate.'
          },
          {
            id: 'c8_q8',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What gas is produced when an ammonium salt (e.g. NH₄Cl) is warmed with aqueous sodium hydroxide?',
            options: ['Ammonia gas (NH₃), which turns damp red litmus paper blue', 'Hydrogen gas', 'Chlorine gas', 'Nitrogen dioxide'],
            correctAnswer: 'Ammonia gas (NH₃), which turns damp red litmus paper blue',
            explanation: 'NH₄⁺ + OH⁻ → NH₃(g) + H₂O; pungent alkaline ammonia gas turns damp red litmus blue.'
          },
          {
            id: 'c8_q9',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'Why is powdered limestone (calcium carbonate) spread over agricultural soils by farmers?',
            options: ['To neutralise excess soil acidity and raise soil pH to an optimal level for crops', 'To kill weeds', 'To make soil darker', 'To add oxygen'],
            correctAnswer: 'To neutralise excess soil acidity and raise soil pH to an optimal level for crops',
            explanation: 'CaCO₃ is an insoluble basic carbonate that safely neutralises acidic ground without over-alkalising.'
          },
          {
            id: 'c8_q10',
            subtopicId: 'chemistry_8',
            type: 'multiple_choice',
            question: 'What is the gas test for hydrogen gas produced when an acid reacts with magnesium ribbon?',
            options: ['A lighted splint produces a squeaky pop sound', 'A glowing splint relights', 'Limewater turns cloudy', 'Damp blue litmus bleaches white'],
            correctAnswer: 'A lighted splint produces a squeaky pop sound',
            explanation: 'Hydrogen reacts explosively on a miniature scale with atmospheric oxygen to form water: 2H₂ + O₂ → 2H₂O.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch9',
    subjectId: 'chemistry',
    number: 9,
    title: 'The Periodic Table',
    description: 'Periodic trends, Group I alkali metals, Group VII halogens, transition elements, and noble gases.',
    subtopics: [
      {
        id: 'chemistry_9',
        chapterId: 'chem_ch9',
        subjectId: 'chemistry',
        code: '9',
        title: 'The Periodic Table',
        description: 'Groups, periods, alkali metal reactivity trends, halogen displacement, and noble gases.',
        durationMinutes: 14,
        experience: {
          type: 'element_treasure_map',
          title: 'Interactive Periodic Table Treasure Map',
          scenario: 'A giant interactive Periodic Table map reveals elemental secrets across groups and periods.',
          prompt: 'Complete explorer missions: "Find an Alkali Metal that explodes in water", "Find a Halogen that is a liquid at room temperature (Bromine)", "Find an unreactive Noble Gas used in neon lighting", and predict reactivity trends down Group I and Group VII.',
          goal: 'Complete all 4 chemical treasure missions across Group I, VII, VIII and Transition Metals.'
        },
        lesson: {
          whatHappened: 'Group I metals became softer and more reactive down the group (Li → Na → K). Group VII halogens became darker and LESS reactive down the group (F₂ → Cl₂ → Br₂ → I₂), with more reactive halogens displacing less reactive halide ions from solution.',
          academicConcept: 'Elements are arranged in order of atomic number (proton number). Groups (vertical columns): Elements have the same number of valence electrons and similar chemical properties. Periods (horizontal rows): Number of electron shells. Group I (Alkali metals): 1 valence electron, soft, low density, react vigorously with water forming alkaline hydroxide and H₂ gas; reactivity INCREASES down the group. Group VII (Halogens): 7 valence electrons, diatomic non-metals; reactivity DECREASES down the group. Group VIII/0 (Noble gases): Full outer shell, unreactive/inert.',
          interactiveDiagram: {
            title: 'Periodic Table Trends & Displacement',
            caption: 'Group I reactivity increases down; Group VII reactivity decreases down; Halogen displacement: Cl₂ + 2KBr → 2KCl + Br₂',
            keyPoints: [
              'Group I trend: Down the group, valence electron is further from the positive nucleus, shielded by extra shells, so it is lost more easily.',
              'Group VII trend: Down the group, incoming electron is less attracted due to greater distance and shielding, so reactivity decreases.',
              'Transition metals: High densities, high melting points, variable oxidation states (Fe²⁺, Fe³⁺), form colored compounds, act as catalysts.',
              'Noble gases (He, Ne, Ar, Kr, Xe): Monatomic, non-flammable, chemically inert due to stable full valence shells.'
            ]
          },
          workedExample: {
            title: 'Predicting a Halogen Displacement Reaction',
            problem: 'Chlorine water (Cl₂) is added to a colourless solution of Potassium Bromide (KBr). Describe the observation and write the balanced chemical equation.',
            stepByStep: [
              { step: 'Reactivity comparison', detail: 'Chlorine is higher in Group VII than Bromine and is therefore more reactive.' },
              { step: 'Displacement', detail: 'Chlorine displaces bromide ions: Cl₂ + 2KBr → 2KCl + Br₂' },
              { step: 'Observation', detail: 'The solution turns orange-brown due to the liberation of aqueous bromine (Br₂).' }
            ],
            keyTakeaway: 'A more reactive halogen always displaces a less reactive halide ion from its aqueous salt solution.'
          },
          quickChallenge: {
            prompt: 'What happens when a small lump of potassium metal is dropped into a trough of cold water?',
            options: ['It sinks to the bottom silently', 'It melts into a silvery ball, darts around the water surface, and burns with a lilac flame producing hydrogen gas', 'It dissolves without reaction', 'It solidifies the water'],
            correctIndex: 1,
            explanation: 'Potassium reacts violently: 2K + 2H₂O → 2KOH + H₂; the heat ignites hydrogen, burning with a characteristic lilac flame due to potassium ions.'
          },
          summary: [
            'Group number indicates valence electrons; Period indicates electron shells.',
            'Group I reactivity increases down the group; Group VII reactivity decreases.',
            'Transition elements have variable valencies, colored compounds, and catalytic power.'
          ]
        },
        questions: [
          {
            id: 'c9_q1',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'Why does reactivity increase as you descend Group I (the alkali metals)?',
            options: ['The single outer valence electron is further from the nucleus and more shielded, so it is lost more easily', 'The atoms get smaller', 'Nuclear charge decreases', 'Electrons become positive'],
            correctAnswer: 'The single outer valence electron is further from the nucleus and more shielded, so it is lost more easily',
            explanation: 'Increased atomic radius and electron shielding weaken electrostatic hold on the valence electron.'
          },
          {
            id: 'c9_q2',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'What is the color and physical state of Chlorine (Cl₂) at room temperature and pressure?',
            options: ['Pale yellow-green gas', 'Red-brown liquid', 'Dark purple solid', 'Colorless liquid'],
            correctAnswer: 'Pale yellow-green gas',
            explanation: 'Fluorine is yellow gas, Chlorine is pale green gas, Bromine is red-brown liquid, Iodine is dark grey solid.'
          },
          {
            id: 'c9_q3',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'Which of the following halogens will displace Iodine from an aqueous solution of Potassium iodide (KI)?',
            options: ['Both Chlorine (Cl₂) and Bromine (Br₂)', 'Neither', 'Bromine only', 'Iodine itself'],
            correctAnswer: 'Both Chlorine (Cl₂) and Bromine (Br₂)',
            explanation: 'Both Cl₂ and Br₂ are higher in Group VII than Iodine and are more reactive, displacing iodide ions.'
          },
          {
            id: 'c9_q4',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'Why are Group VIII / 0 noble gases (Helium, Neon, Argon) chemically unreactive?',
            options: ['They possess full outer shells of electrons, giving them stable electronic configurations', 'They have no electrons', 'They are too heavy', 'They are frozen'],
            correctAnswer: 'They possess full outer shells of electrons, giving them stable electronic configurations',
            explanation: 'With complete valence shells, noble gases do not need to lose, gain, or share electrons.'
          },
          {
            id: 'c9_q5',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'Which is a characteristic property of transition elements (e.g. Iron, Copper)?',
            options: ['They form colored chemical compounds and act as industrial catalysts', 'They have very low melting points', 'They react violently with cold water', 'They have only 1 oxidation state'],
            correctAnswer: 'They form colored chemical compounds and act as industrial catalysts',
            explanation: 'Transition metals feature partially filled d-orbitals, producing variable valencies, colored complexes, and catalytic utility.'
          },
          {
            id: 'c9_q6',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'What gas is used to fill filament light bulbs to prevent the tungsten wire from burning away?',
            options: ['Argon (inert noble gas)', 'Oxygen', 'Chlorine', 'Hydrogen'],
            correctAnswer: 'Argon (inert noble gas)',
            explanation: 'Argon is chemically inert and does not react with the white-hot tungsten filament.'
          },
          {
            id: 'c9_q7',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'What flame test color is characteristic of Sodium compounds?',
            options: ['Persistent golden yellow', 'Crimson red', 'Lilac', 'Apple green'],
            correctAnswer: 'Persistent golden yellow',
            explanation: 'Sodium emits intense 589 nm yellow light in a Bunsen flame.'
          },
          {
            id: 'c9_q8',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'What element in the Periodic Table has atomic number 1 and consists of 1 proton and 1 electron?',
            options: ['Hydrogen', 'Helium', 'Lithium', 'Carbon'],
            correctAnswer: 'Hydrogen',
            explanation: 'Hydrogen (H) is the first and simplest element in the periodic table.'
          },
          {
            id: 'c9_q9',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'Which halogen is a red-brown liquid at standard room temperature?',
            options: ['Bromine (Br₂)', 'Chlorine', 'Fluorine', 'Iodine'],
            correctAnswer: 'Bromine (Br₂)',
            explanation: 'Bromine and mercury are the only two liquid elements at standard conditions.'
          },
          {
            id: 'c9_q10',
            subtopicId: 'chemistry_9',
            type: 'multiple_choice',
            question: 'Across a Period from left to right, how does character change?',
            options: ['From metallic to non-metallic', 'From non-metallic to metallic', 'From gases to liquids', 'Elements become radioactive'],
            correctAnswer: 'From metallic to non-metallic',
            explanation: 'Left side holds electropositive metals; right side holds electronegative non-metals.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch10',
    subjectId: 'chemistry',
    number: 10,
    title: 'Metals',
    description: 'Properties of metals, reactivity series, extraction of metals, and alloys.',
    subtopics: [
      {
        id: 'chemistry_10',
        chapterId: 'chem_ch10',
        subjectId: 'chemistry',
        code: '10',
        title: 'Metals and the Reactivity Series',
        description: 'Reactivity series, blast furnace extraction of iron, corrosion prevention, and alloys.',
        durationMinutes: 14,
        experience: {
          type: 'metal_workshop',
          title: 'Metals Workshop & Reactivity Lab',
          scenario: 'An engineering metallurgy forge selects alloys and extracts metals from ore.',
          prompt: 'Test metals in the Reactivity Series: K > Na > Ca > Mg > Al > (C) > Zn > Fe > (H) > Cu > Ag > Au. Test displacement reactions (drop iron nail in blue copper sulfate) and forge brass alloy (copper + zinc).',
          goal: 'Displace copper from copper sulfate and explain why steel is an alloy superior to pure iron.'
        },
        lesson: {
          whatHappened: 'More reactive metals displaced less reactive metals from solutions (Iron displaced copper, turning the nail reddish-brown and liquid pale green). Carbon reduced iron ore in the blast furnace because carbon is more reactive than iron.',
          academicConcept: 'Reactivity Series: Tendency of a metal to lose electrons and form positive ions. Metals above carbon (K, Na, Ca, Mg, Al) must be extracted by electrolysis. Metals below carbon (Zn, Fe, Pb, Cu) are extracted by chemical reduction with carbon or carbon monoxide in a blast furnace. Blast furnace reactions: C + O₂ → CO₂; CO₂ + C → 2CO; Fe₂O₃ + 3CO → 2Fe + 3CO₂. Limestone (CaCO₃) removes silica impurities as molten slag (CaSiO₃). Alloys: Mixtures of a metal with other elements; different sized atoms disrupt regular layers, preventing layers from sliding and making alloys harder and stronger than pure metals.',
          interactiveDiagram: {
            title: 'Blast Furnace & Alloy Structure',
            caption: 'Iron extraction (Fe₂O₃ + 3CO → 2Fe + 3CO₂); Alloy atoms disrupt sliding planes',
            keyPoints: [
              'Extraction cutoff: Potassium to Aluminium extracted by electrolysis; Zinc to Copper by carbon reduction.',
              'Rusting of iron requires BOTH oxygen AND water (accelerated by salt).',
              'Rust prevention: Barrier methods (paint, grease, galvanising) and Sacrificial protection (zinc blocks on ship hulls).',
              'Alloy examples: Brass (copper + zinc), Bronze (copper + tin), Steel (iron + carbon), Stainless steel (iron + chromium + nickel).'
            ]
          },
          workedExample: {
            title: 'Explaining Sacrificial Protection of Iron',
            problem: 'Zinc blocks are bolted to the steel hulls of ships. Explain how zinc prevents the iron from rusting even if the paint is scratched.',
            stepByStep: [
              { step: 'Reactivity comparison', detail: 'Zinc is more reactive than iron in the reactivity series.' },
              { step: 'Electron transfer', detail: 'Zinc oxidises and loses electrons more readily than iron: Zn → Zn²⁺ + 2e⁻' },
              { step: 'Protection', detail: 'The electrons flow to the iron, preventing iron from oxidising to Fe²⁺/Fe³⁺ ions. The zinc sacrifices itself.' }
            ],
            keyTakeaway: 'In sacrificial protection, the more reactive metal oxidizes preferentially, keeping the protected metal intact.'
          },
          quickChallenge: {
            prompt: 'Why are alloys like brass or steel significantly harder and stronger than pure copper or pure iron?',
            options: ['Alloy atoms of different sizes disrupt the regular lattice layers, preventing them from sliding easily over one another', 'Alloys are frozen', 'Alloys contain glue', 'Pure metals have no electrons'],
            correctIndex: 0,
            explanation: 'Foreign atoms of differing radii distort the crystalline array, locking slip planes and preventing plastic dislocation movement.'
          },
          summary: [
            'Reactivity series orders metals by ease of cation formation.',
            'Iron is extracted in a blast furnace using carbon monoxide as a reducing agent.',
            'Alloys are harder because different-sized atoms prevent lattice layers from sliding.'
          ]
        },
        questions: [
          {
            id: 'c10_q1',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'What two conditions are strictly essential for iron to rust?',
            options: ['Oxygen and Water', 'Oxygen only', 'Water and Nitrogen', 'Carbon dioxide and Salt'],
            correctAnswer: 'Oxygen and Water',
            explanation: 'Hydrated iron(III) oxide (rust) requires both O₂ and liquid H₂O.'
          },
          {
            id: 'c10_q2',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'Why can iron NOT be extracted from haematite ore (Fe₂O₃) using simple heating with hydrogen in a blast furnace?',
            options: ['Carbon and carbon monoxide are much cheaper and highly effective reducing agents at blast furnace temperatures', 'Hydrogen does not react with iron', 'Iron does not melt', 'Carbon is less reactive than iron'],
            correctAnswer: 'Carbon and carbon monoxide are much cheaper and highly effective reducing agents at blast furnace temperatures',
            explanation: 'Coke (carbon) burns to produce CO gas, reducing Fe₂O₃ economically on a massive scale.'
          },
          {
            id: 'c10_q3',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'What is the role of limestone (CaCO₃) added to the blast furnace alongside iron ore and coke?',
            options: ['It thermally decomposes to CaO, which reacts with acidic sand/silica (SiO₂) impurities to form molten slag (CaSiO₃)', 'It burns to produce heat', 'It acts as an electrical conductor', 'It colors the iron grey'],
            correctAnswer: 'It thermally decomposes to CaO, which reacts with acidic sand/silica (SiO₂) impurities to form molten slag (CaSiO₃)',
            explanation: 'CaO + SiO₂ → CaSiO₃ (calcium silicate slag), which floats on top of molten iron and is tapped off.'
          },
          {
            id: 'c10_q4',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'What happens when a strip of Zinc metal is placed into aqueous Copper(II) sulfate (CuSO₄)?',
            options: ['Zinc displaces copper; a reddish-brown coating forms and the blue solution turns colorless', 'No reaction occurs', 'Zinc dissolves with violet fire', 'Copper bubbles away as gas'],
            correctAnswer: 'Zinc displaces copper; a reddish-brown coating forms and the blue solution turns colorless',
            explanation: 'Zn is more reactive than Cu: Zn + CuSO₄ → ZnSO₄ + Cu.'
          },
          {
            id: 'c10_q5',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'Why must Aluminium be extracted by electrolysis rather than heating with carbon in a blast furnace?',
            options: ['Aluminium is more reactive than carbon; carbon cannot reduce aluminium oxide', 'Aluminium melts at too high a temperature', 'Aluminium reacts with coke to form diamond', 'Electrolysis produces gold'],
            correctAnswer: 'Aluminium is more reactive than carbon; carbon cannot reduce aluminium oxide',
            explanation: 'Carbon cannot displace metals higher than itself in the reactivity series.'
          },
          {
            id: 'c10_q6',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'What is galvanising?',
            options: ['Coating iron or steel with a protective layer of zinc', 'Painting metal red', 'Heating metal in oil', 'Mixing iron with copper'],
            correctAnswer: 'Coating iron or steel with a protective layer of zinc',
            explanation: 'Galvanised steel has a zinc barrier and benefits from sacrificial protection if scratched.'
          },
          {
            id: 'c10_q7',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'What elements are combined to create Brass?',
            options: ['Copper and Zinc', 'Copper and Tin', 'Iron and Carbon', 'Lead and Tin'],
            correctAnswer: 'Copper and Zinc',
            explanation: 'Brass is an alloy of copper and zinc (bronze is copper and tin).'
          },
          {
            id: 'c10_q8',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'Why does aluminium appear unreactive despite being high up in the reactivity series?',
            options: ['It rapidly forms a tough, unreactive, impermeable oxide layer (Al₂O₃) on its surface', 'It is secretly a noble metal', 'Its atoms are too small', 'Air cannot touch it'],
            correctAnswer: 'It rapidly forms a tough, unreactive, impermeable oxide layer (Al₂O₃) on its surface',
            explanation: 'The self-passivating alumina skin adheres tightly, shielding underlying metal from water/air.'
          },
          {
            id: 'c10_q9',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'Which metal in the reactivity series will NOT react with dilute hydrochloric acid?',
            options: ['Copper', 'Magnesium', 'Zinc', 'Iron'],
            correctAnswer: 'Copper',
            explanation: 'Copper is below hydrogen in the reactivity series and cannot displace H⁺ ions from acids.'
          },
          {
            id: 'c10_q10',
            subtopicId: 'chemistry_10',
            type: 'multiple_choice',
            question: 'What is stainless steel composed of to resist corrosion completely?',
            options: ['Iron, Chromium, and Nickel', 'Pure iron and gold', 'Iron and lead', 'Aluminium and copper'],
            correctAnswer: 'Iron, Chromium, and Nickel',
            explanation: 'Chromium forms an invisible protective chromium oxide film preventing oxidation.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch11',
    subjectId: 'chemistry',
    number: 11,
    title: 'Air and Water',
    description: 'Composition of clean air, air pollutants, global warming, water purification, and fertilisers.',
    subtopics: [
      {
        id: 'chemistry_11',
        chapterId: 'chem_ch11',
        subjectId: 'chemistry',
        code: '11',
        title: 'Air and Water',
        description: 'Clean dry air composition, catalytic converters, greenhouse effect, and municipal water treatment.',
        durationMinutes: 12,
        experience: {
          type: 'planet_clean_up',
          title: 'Planet Clean-Up Atmospheric & Water Lab',
          scenario: 'A municipal environmental station treats river water and purifies automotive exhaust fumes.',
          prompt: 'Manage water purification (sedimentation tank, sand filtration, and chlorination to kill bacteria). In the exhaust system, configure a catalytic converter to turn harmful CO and NOx into harmless CO₂ and N₂.',
          goal: 'Produce potable drinking water and reduce vehicle toxic exhaust emissions by over 90%.'
        },
        lesson: {
          whatHappened: 'Water treatment removed insoluble particles via sedimentation and filtration, while chlorine killed harmful bacteria. The platinum catalytic converter catalysed redox reactions converting toxic carbon monoxide and nitrogen oxides into safe carbon dioxide and nitrogen.',
          academicConcept: 'Clean dry air composition: ~78% Nitrogen (N₂), ~21% Oxygen (O₂), ~0.9% Argon, ~0.04% Carbon dioxide. Common air pollutants: (1) Carbon monoxide (CO): incomplete combustion; toxic, binds irreversibly to hemoglobin. (2) Sulfur dioxide (SO₂): burning fossil fuels containing sulfur; causes acid rain. (3) Oxides of nitrogen (NO and NO₂): high temperature car engines; acid rain and photochemical smog. Catalytic converter: 2CO + 2NO → 2CO₂ + N₂. Water treatment steps: screening → sedimentation/coagulation → sand filtration → chlorination. NPK fertilisers provide nitrogen, phosphorus, and potassium.',
          interactiveDiagram: {
            title: 'Water Purification & Catalytic Converter',
            caption: 'Sedimentation → Filtration → Chlorination; Catalytic converter: 2CO + 2NO → 2CO₂ + N₂',
            keyPoints: [
              'Clean air: 78% N₂, 21% O₂, remainder noble gases and CO₂.',
              'Global warming: Greenhouse gases (CO₂, CH₄) absorb and re-emit infrared radiation.',
              'Chemical test for water: Turns white anhydrous copper(II) sulfate blue (CuSO₄ + 5H₂O → CuSO₄·5H₂O).',
              'Eutrophication: Excessive fertiliser runoff leads to algal blooms, oxygen depletion, and aquatic death.'
            ]
          },
          workedExample: {
            title: 'The Chemical Reactions in a Catalytic Converter',
            problem: 'Write balanced equations for the conversion of toxic exhaust pollutants in a car catalytic converter.',
            stepByStep: [
              { step: 'Carbon monoxide and nitrogen monoxide', detail: '2CO + 2NO → 2CO₂ + N₂' },
              { step: 'Unburnt hydrocarbons', detail: 'CH₄ + 2O₂ → CO₂ + 2H₂O' },
              { step: 'Outcome', detail: 'Harmful CO and NOx are transformed into non-toxic N₂, CO₂, and water vapor over platinum/rhodium catalysts.' }
            ],
            keyTakeaway: 'Catalytic converters facilitate simultaneous oxidation of CO/hydrocarbons and reduction of nitrogen oxides.'
          },
          quickChallenge: {
            prompt: 'What chemical substance is added in water treatment works to sterilise drinking water by killing harmful pathogens?',
            options: ['Chlorine', 'Fluoride alone', 'Copper sulfate', 'Sodium chloride'],
            correctIndex: 0,
            explanation: 'Chlorine acts as a powerful disinfectant, killing bacteria and viruses to make water safe for human consumption.'
          },
          summary: [
            'Clean air is 78% N₂ and 21% O₂; common pollutants include CO, SO₂, and NOx.',
            'Water treatment involves filtration and chlorination.',
            'Catalytic converters transform CO and NOx into CO₂ and N₂.'
          ]
        },
        questions: [
          {
            id: 'c11_q1',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What is the approximate percentage of Nitrogen gas in clean dry air?',
            options: ['78%', '21%', '0.04%', '50%'],
            correctAnswer: '78%',
            explanation: 'Air is approximately 78% nitrogen, 21% oxygen, 0.9% argon, and 0.04% carbon dioxide.'
          },
          {
            id: 'c11_q2',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'Why is carbon monoxide (CO) gas classified as a dangerous air pollutant?',
            options: ['It is a toxic, colorless, odorless gas that binds strongly to hemoglobin, preventing oxygen transport in blood', 'It smells like sulfur', 'It causes acid rain', 'It turns water blue'],
            correctAnswer: 'It is a toxic, colorless, odorless gas that binds strongly to hemoglobin, preventing oxygen transport in blood',
            explanation: 'Carboxyhemoglobin formation deprives the brain and vital organs of oxygen.'
          },
          {
            id: 'c11_q3',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What chemical test confirms the presence of water?',
            options: ['It turns white anhydrous copper(II) sulfate blue', 'It turns limewater milky', 'It bleaches damp litmus', 'It burns with a pop'],
            correctAnswer: 'It turns white anhydrous copper(II) sulfate blue',
            explanation: 'Anhydrous CuSO₄ (white) hydrates to form copper(II) sulfate pentahydrate (bright blue).'
          },
          {
            id: 'c11_q4',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What major environmental problem is caused by sulfur dioxide (SO₂) released from coal-fired power stations?',
            options: ['Acid rain that damages limestone buildings, forests, and aquatic ecosystems', 'Depletion of the ozone layer', 'Photochemical smog only', 'Eutrophication'],
            correctAnswer: 'Acid rain that damages limestone buildings, forests, and aquatic ecosystems',
            explanation: 'SO₂ dissolves in clouds forming sulfurous and sulfuric acids (acid rain with pH < 5).'
          },
          {
            id: 'c11_q5',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What reaction occurs inside a car catalytic converter to neutralize nitrogen monoxide (NO)?',
            options: ['2CO + 2NO → 2CO₂ + N₂', 'NO + O₂ → NO₂', 'NO + H₂O → HNO₃', 'NO + C → CN'],
            correctAnswer: '2CO + 2NO → 2CO₂ + N₂',
            explanation: 'Carbon monoxide reduces nitrogen monoxide to harmless nitrogen gas and carbon dioxide.'
          },
          {
            id: 'c11_q6',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What are the two most significant greenhouse gases responsible for enhanced global warming?',
            options: ['Carbon dioxide (CO₂) and Methane (CH₄)', 'Nitrogen and Oxygen', 'Argon and Helium', 'Sulfur dioxide and Chlorine'],
            correctAnswer: 'Carbon dioxide (CO₂) and Methane (CH₄)',
            explanation: 'CO₂ and CH₄ absorb infrared thermal radiation re-radiated by the Earth’s surface.'
          },
          {
            id: 'c11_q7',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What essential plant elements are supplied by standard NPK synthetic fertilisers?',
            options: ['Nitrogen, Phosphorus, Potassium', 'Nickel, Platinum, Krypton', 'Sodium, Potassium, Calcium', 'Nitrogen, Lead, Carbon'],
            correctAnswer: 'Nitrogen, Phosphorus, Potassium',
            explanation: 'NPK stands for Nitrogen (leaf growth), Phosphorus (roots), Potassium (flowering/fruiting).'
          },
          {
            id: 'c11_q8',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What causes the formation of toxic nitrogen oxides (NO and NO₂) in petrol vehicle engines?',
            options: ['Nitrogen and oxygen from intake air react under the extreme temperatures and pressures inside the engine cylinder', 'Nitrogen is in the petrol fuel', 'Oil leaks into exhaust', 'Air filter is dirty'],
            correctAnswer: 'Nitrogen and oxygen from intake air react under the extreme temperatures and pressures inside the engine cylinder',
            explanation: 'Normally inert atmospheric N₂ reacts with O₂ only at temperatures exceeding ~1500°C.'
          },
          {
            id: 'c11_q9',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What is the purpose of the sedimentation stage in municipal water treatment?',
            options: ['To allow heavy suspended particles and flocculated dirt to settle to the bottom of the basin', 'To kill bacteria with chlorine', 'To remove dissolved salts', 'To add oxygen to water'],
            correctAnswer: 'To allow heavy suspended particles and flocculated dirt to settle to the bottom of the basin',
            explanation: 'Coagulants (like aluminium sulfate) clump fine sediment so it settles before filtration.'
          },
          {
            id: 'c11_q10',
            subtopicId: 'chemistry_11',
            type: 'multiple_choice',
            question: 'What test confirms that a sample of water is purely H₂O with zero dissolved impurities?',
            options: ['It boils at exactly 100°C and freezes at exactly 0°C at 1 atm pressure', 'It turns anhydrous cobalt(II) chloride paper pink', 'It is transparent', 'It creates soap suds'],
            correctAnswer: 'It boils at exactly 100°C and freezes at exactly 0°C at 1 atm pressure',
            explanation: 'Chemical tests (anhydrous salts) show water presence, but only exact boiling/freezing points verify purity.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch12',
    subjectId: 'chemistry',
    number: 12,
    title: 'Sulfur',
    description: 'Sources of sulfur, sulfur dioxide, Contact process for sulfuric acid, and uses of sulfuric acid.',
    subtopics: [
      {
        id: 'chemistry_12',
        chapterId: 'chem_ch12',
        subjectId: 'chemistry',
        code: '12',
        title: 'Sulfur and the Contact Process',
        description: 'Sulfur dioxide, the Contact process for H₂SO₄, vanadium(V) oxide catalyst, and sulfuric acid uses.',
        durationMinutes: 12,
        experience: {
          type: 'volcano_lab',
          title: 'Volcano Sulfur Lab & Contact Process Plant',
          scenario: 'A chemical plant at the base of a volcanic sulfur vent synthesizes sulfuric acid via the Contact process.',
          prompt: 'Burn yellow sulfur to produce SO₂ gas. In the catalytic converter, react SO₂ + O₂ ⇌ 2SO₃ over Vanadium(V) oxide (V₂O₅) at 450°C. Dissolve in concentrated H₂SO₄ to form oleum (H₂S₂O₇) safely without mist.',
          goal: 'Achieve a 98% equilibrium yield of SO₃ in the Contact process stage.'
        },
        lesson: {
          whatHappened: 'Burning sulfur created pungent sulfur dioxide. Converting SO₂ to SO₃ was an exothermic reversible reaction requiring an optimal compromise temperature of 450°C and V₂O₅ catalyst. Adding water directly to SO₃ created a dangerous corrosive acid mist, which is avoided industrially by forming oleum.',
          academicConcept: 'The Contact Process: (1) S + O₂ → SO₂. (2) 2SO₂ + O₂ ⇌ 2SO₃ (exothermic, ΔH = -196 kJ/mol). Operating conditions: 450°C, 1-2 atm pressure, Vanadium(V) oxide catalyst (V₂O₅). (3) SO₃ is dissolved in concentrated 98% H₂SO₄ to form oleum: SO₃ + H₂SO₄ → H₂S₂O₇. (4) Oleum is carefully diluted with water: H₂S₂O₇ + H₂O → 2H₂SO₄. Uses of sulfuric acid: manufacturing phosphate fertilisers, paints, detergents, and car batteries.',
          interactiveDiagram: {
            title: 'The Contact Process Flow Diagram',
            caption: 'S + O₂ → SO₂ → (+O₂, V₂O₅, 450°C) → SO₃ → (+H₂SO₄) → Oleum → (+H₂O) → H₂SO₄',
            keyPoints: [
              'Temperature compromise: 450°C gives high enough reaction rate while maintaining good equilibrium yield.',
              'Vanadium(V) oxide (V₂O₅) speeds up SO₂ oxidation without shifting equilibrium.',
              'Low pressure (1-2 atm) is sufficient because yield is already >98% at 1 atm.',
              'Sulfur dioxide is used as a food preservative (wine, dried fruits) and in paper pulp bleaching.'
            ]
          },
          workedExample: {
            title: 'Equilibrium Analysis of the Contact Process',
            problem: 'Explain why a temperature of 450°C is chosen for the reaction 2SO₂ + O₂ ⇌ 2SO₃ (ΔH is negative).',
            stepByStep: [
              { step: 'Equilibrium yield', detail: 'Because the forward reaction is exothermic, a low temperature favors a higher yield of SO₃.' },
              { step: 'Rate of reaction', detail: 'At low temperature, the reaction rate is too slow to be commercially viable.' },
              { step: 'Compromise', detail: '450°C is an optimum compromise providing a rapid reaction rate and an excellent 98% conversion yield with V₂O₅.' }
            ],
            keyTakeaway: 'Industrial conditions balance theoretical thermodynamic yield against practical kinetic reaction rates.'
          },
          quickChallenge: {
            prompt: 'Why is sulfur trioxide (SO₃) dissolved in concentrated sulfuric acid rather than directly into water in the Contact process?',
            options: ['Reacting SO₃ directly with water produces an uncontrollable exothermic reaction creating a dense, hazardous acid mist', 'SO₃ does not dissolve in water', 'Water destroys sulfuric acid', 'To make water turn pink'],
            correctIndex: 0,
            explanation: 'The direct reaction with water is so violently exothermic that sulfuric acid vaporises into a dangerous, unmanageable acid fog.'
          },
          summary: [
            'Sulfur is burned to SO₂, then converted to SO₃ using V₂O₅ at 450°C.',
            'SO₃ is dissolved in H₂SO₄ to make oleum, then diluted to H₂SO₄.',
            'Sulfuric acid is primarily used to manufacture agricultural fertilisers.'
          ]
        },
        questions: [
          {
            id: 'c12_q1',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What catalyst is used in the Contact process to convert SO₂ to SO₃?',
            options: ['Vanadium(V) oxide (V₂O₅)', 'Finely divided iron', 'Platinum gauze', 'Nickel'],
            correctAnswer: 'Vanadium(V) oxide (V₂O₅)',
            explanation: 'Vanadium(V) oxide is the standard commercial catalyst for the Contact process operating at ~450°C.'
          },
          {
            id: 'c12_q2',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What is the chemical formula of oleum formed when SO₃ dissolves in concentrated H₂SO₄?',
            options: ['H₂S₂O₇', 'H₂SO₄', 'H₂SO₃', 'H₂S'],
            correctAnswer: 'H₂S₂O₇',
            explanation: 'SO₃ + H₂SO₄ → H₂S₂O₇ (disulfuric acid or oleum).'
          },
          {
            id: 'c12_q3',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What is a major domestic or commercial use of sulfur dioxide gas?',
            options: ['Preservative in fruit juices and dried fruits, and bleaching wood pulp', 'Rocket fuel', 'Breathing gas in hospitals', 'Refrigerant in air conditioners'],
            correctAnswer: 'Preservative in fruit juices and dried fruits, and bleaching wood pulp',
            explanation: 'SO₂ kills bacteria and inhibits enzymatic browning in wines and dried fruit products.'
          },
          {
            id: 'c12_q4',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What pressure is used in the Contact process, and why?',
            options: ['1 to 2 atmospheres, because the equilibrium yield is already very high (~98%) without expensive high-pressure plant', '200 atmospheres', '0.01 atmospheres', '1000 atmospheres'],
            correctAnswer: '1 to 2 atmospheres, because the equilibrium yield is already very high (~98%) without expensive high-pressure plant',
            explanation: 'Atmospheric pressure achieves nearly complete conversion, avoiding expensive high-pressure containment.'
          },
          {
            id: 'c12_q5',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What is the primary industrial use of the vast majority of manufactured sulfuric acid?',
            options: ['Manufacturing agricultural phosphate fertilisers', 'Car battery acid alone', 'Making plastic bottles', 'Making glass windows'],
            correctAnswer: 'Manufacturing agricultural phosphate fertilisers',
            explanation: 'Over 60% of world sulfuric acid is used to treat rock phosphate into soluble superphosphate fertilisers.'
          },
          {
            id: 'c12_q6',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What color is elemental solid sulfur at room temperature?',
            options: ['Bright yellow', 'Deep blue', 'Shiny silver', 'Brick red'],
            correctAnswer: 'Bright yellow',
            explanation: 'Sulfur is a brittle, bright yellow non-metallic solid composed of S₈ rings.'
          },
          {
            id: 'c12_q7',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'What happens when concentrated sulfuric acid is added to solid sucrose (cane sugar, C₁₂H₂₂O₁₁)?',
            options: ['It dehydrates the sugar, leaving a black steaming column of spongy elemental carbon', 'The sugar dissolves cleanly', 'It freezes into ice', 'It turns bright green'],
            correctAnswer: 'It dehydrates the sugar, leaving a black steaming column of spongy elemental carbon',
            explanation: 'Concentrated H₂SO₄ is a powerful dehydrating agent, stripping hydrogen and oxygen as water from sugar.'
          },
          {
            id: 'c12_q8',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'In the reversible reaction 2SO₂ + O₂ ⇌ 2SO₃, what happens to SO₃ yield if pressure is increased?',
            options: ['Yield increases because there are 3 moles of gas on the left and only 2 on the right', 'Yield decreases', 'Yield stays identical', 'Reaction stops'],
            correctAnswer: 'Yield increases because there are 3 moles of gas on the left and only 2 on the right',
            explanation: 'Le Chatelier’s principle: increasing pressure shifts equilibrium towards fewer gas moles (the right).'
          },
          {
            id: 'c12_q9',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'How does sulfur dioxide act as a reducing agent in testing with potassium manganate(VII)?',
            options: ['It turns acidified KMnO₄ from purple to colorless', 'It turns orange dichromate blue', 'It forms a black precipitate', 'It has zero effect'],
            correctAnswer: 'It turns acidified KMnO₄ from purple to colorless',
            explanation: 'SO₂ is easily oxidised to SO₄²⁻, reducing purple manganate(VII) to colorless Mn²⁺.'
          },
          {
            id: 'c12_q10',
            subtopicId: 'chemistry_12',
            type: 'multiple_choice',
            question: 'Where is elemental sulfur naturally extracted from on Earth?',
            options: ['Underground deposits using the Frasch process and recovery from crude oil/natural gas desulfurization', 'From the ocean surface', 'From limestone quarries', 'From air distillation'],
            correctAnswer: 'Underground deposits using the Frasch process and recovery from crude oil/natural gas desulfurization',
            explanation: 'Most modern sulfur is recovered during petroleum refining to prevent fuel emissions.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch13',
    subjectId: 'chemistry',
    number: 13,
    title: 'Carbonates',
    description: 'Limestone, thermal decomposition of calcium carbonate, quicklime, slaked lime, and lime cycle.',
    subtopics: [
      {
        id: 'chemistry_13',
        chapterId: 'chem_ch13',
        subjectId: 'chemistry',
        code: '13',
        title: 'Carbonates and the Lime Cycle',
        description: 'Calcium carbonate, quicklime (CaO), slaked lime (Ca(OH)₂), limewater, and cement manufacturing.',
        durationMinutes: 12,
        experience: {
          type: 'limestone_factory',
          title: 'Limestone Processing Plant & Lime Cycle',
          scenario: 'A lime kiln processes quarried calcium carbonate rock into industrial building materials.',
          prompt: 'Operate the rotary kiln: heat limestone (CaCO₃) to >900°C to trigger thermal decomposition into quicklime (CaO) + CO₂. Add water (slaking) to create slaked lime (Ca(OH)₂), and bubble CO₂ through limewater to complete the Lime Cycle.',
          goal: 'Complete all 4 stages of the industrial lime cycle: Limestone → Quicklime → Slaked lime → Limewater → Limestone.'
        },
        lesson: {
          whatHappened: 'Heating limestone drove off carbon dioxide gas in an endothermic reaction. Adding drops of water to quicklime hissed violently in a vigorous exothermic reaction, forming slaked lime powder. Bubbling CO₂ into clear limewater regenerated insoluble calcium carbonate precipitate.',
          academicConcept: 'The Limestone Cycle: (1) Thermal decomposition: CaCO₃(s) → CaO(s) + CO₂(g) (requires heat >900°C in a lime kiln). CaO is quicklime (calcium oxide). (2) Slaking: CaO(s) + H₂O(l) → Ca(OH)₂(s) (slaked lime / calcium hydroxide; highly exothermic). (3) Limewater: Saturated aqueous Ca(OH)₂. (4) Carbon dioxide test: Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l) (milky white precipitate). Uses of limestone: iron blast furnace slag removal, cement manufacturing, neutralising acidic soils.',
          interactiveDiagram: {
            title: 'The Industrial Lime Cycle Cycle',
            caption: 'Limestone (CaCO₃) → [+heat] → Quicklime (CaO) → [+water] → Slaked lime (Ca(OH)₂) → [+CO₂] → CaCO₃',
            keyPoints: [
              'Limestone: Inexpensive natural calcium carbonate rock.',
              'Quicklime (CaO): Used in steel making and chemical neutralisation.',
              'Slaked lime (Ca(OH)₂): Used to neutralise acidic soil and industrial effluent.',
              'Cement: Made by heating powdered limestone with clay in a rotary kiln.'
            ]
          },
          workedExample: {
            title: 'Mass Balance in Thermal Decomposition of Limestone',
            problem: 'Calculate the theoretical mass of quicklime (CaO, Mr = 56) obtained from heating 200 kg of pure limestone (CaCO₃, Mr = 100).',
            stepByStep: [
              { step: 'Molar relationship', detail: 'CaCO₃ → CaO + CO₂ (1:1 molar ratio)' },
              { step: 'Moles of limestone', detail: 'Moles = mass / Mr = 200,000 g / 100 g/mol = 2000 mol' },
              { step: 'Mass of CaO', detail: 'Mass = 2000 mol × 56 g/mol = 112,000 g = 112 kg', math: 'm_{\\text{CaO}} = 2000 \\times 56 = 112\\text{ kg}' }
            ],
            keyTakeaway: 'Thermal decomposition of 100 g CaCO₃ produces 56 g CaO and 44 g CO₂ gas.'
          },
          quickChallenge: {
            prompt: 'What happens when a small amount of carbon dioxide is bubbled through limewater (calcium hydroxide solution)?',
            options: ['The limewater turns cloudy / milky due to formation of a white precipitate of calcium carbonate', 'It boils violently', 'It turns bright pink', 'It releases chlorine gas'],
            correctIndex: 0,
            explanation: 'Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s) + H₂O(l); insoluble CaCO₃ micro-crystals form the milky appearance.'
          },
          summary: [
            'Heating limestone yields quicklime: CaCO₃ → CaO + CO₂.',
            'Adding water to quicklime yields slaked lime: CaO + H₂O → Ca(OH)₂.',
            'Limewater turns milky with CO₂ because calcium carbonate reforms.'
          ]
        },
        questions: [
          {
            id: 'c13_q1',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What is the chemical name and formula of quicklime?',
            options: ['Calcium oxide (CaO)', 'Calcium carbonate (CaCO₃)', 'Calcium hydroxide (Ca(OH)₂)', 'Calcium sulfate (CaSO₄)'],
            correctAnswer: 'Calcium oxide (CaO)',
            explanation: 'Quicklime is calcium oxide (CaO) produced by heating limestone.'
          },
          {
            id: 'c13_q2',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What is slaked lime chemically?',
            options: ['Calcium hydroxide, Ca(OH)₂', 'Calcium carbonate', 'Calcium nitrate', 'Calcium chloride'],
            correctAnswer: 'Calcium hydroxide, Ca(OH)₂',
            explanation: 'Slaked lime is solid calcium hydroxide produced by slaking quicklime with water.'
          },
          {
            id: 'c13_q3',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What type of reaction is the decomposition of limestone: CaCO₃(s) → CaO(s) + CO₂(g)?',
            options: ['Endothermic thermal decomposition', 'Exothermic combustion', 'Neutralisation', 'Precipitation'],
            correctAnswer: 'Endothermic thermal decomposition',
            explanation: 'It requires continuous high heat input (>900°C) to break chemical bonds.'
          },
          {
            id: 'c13_q4',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'How is industrial cement manufactured?',
            options: ['Heating powdered limestone with clay in a high-temperature rotary kiln', 'Mixing sand and water', 'Crushing marble', 'Electrolysis of sea shells'],
            correctAnswer: 'Heating powdered limestone with clay in a high-temperature rotary kiln',
            explanation: 'Limestone and clay react at ~1400°C to form calcium silicates and aluminates (cement).'
          },
          {
            id: 'c13_q5',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What observation is made when a few drops of water are added to a lump of solid quicklime (CaO)?',
            options: ['The lump swells, cracks, releases steam and hisses violently in an exothermic reaction', 'It dissolves silently without heat', 'It freezes the water', 'It catches fire with a blue flame'],
            correctAnswer: 'The lump swells, cracks, releases steam and hisses violently in an exothermic reaction',
            explanation: 'CaO + H₂O → Ca(OH)₂ is intensely exothermic, boiling some water into steam.'
          },
          {
            id: 'c13_q6',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What happens if excess carbon dioxide continues to be bubbled into milky limewater for several minutes?',
            options: ['The cloudiness clears and the solution becomes colorless as soluble calcium hydrogencarbonate forms', 'It turns black', 'The beaker explodes', 'It solidifies into glass'],
            correctAnswer: 'The cloudiness clears and the solution becomes colorless as soluble calcium hydrogencarbonate forms',
            explanation: 'CaCO₃(s) + H₂O + CO₂ → Ca(HCO₃)₂(aq), which is completely soluble.'
          },
          {
            id: 'c13_q7',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What is mortar used for in masonry construction?',
            options: ['A paste of slaked lime, sand, and water used to bind bricks together', 'Metal coating', 'Paint solvent', 'Glass cleaner'],
            correctAnswer: 'A paste of slaked lime, sand, and water used to bind bricks together',
            explanation: 'Mortar hardens over time as slaked lime absorbs CO₂ from air to regenerate CaCO₃.'
          },
          {
            id: 'c13_q8',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'Which of the following is a naturally occurring geological form of calcium carbonate (CaCO₃)?',
            options: ['Chalk, marble, and limestone', 'Granite', 'Basalt', 'Sandstone'],
            correctAnswer: 'Chalk, marble, and limestone',
            explanation: 'All three are mineral forms of calcium carbonate formed from marine fossil shells.'
          },
          {
            id: 'c13_q9',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'Why is calcium carbonate used in power station Flue Gas Desulfurisation (FGD)?',
            options: ['To react with and remove acidic sulfur dioxide from exhaust smoke: CaCO₃ + SO₂ → CaSO₃ + CO₂', 'To make smoke white', 'To generate electricity', 'To cool the chimney'],
            correctAnswer: 'To react with and remove acidic sulfur dioxide from exhaust smoke: CaCO₃ + SO₂ → CaSO₃ + CO₂',
            explanation: 'FGD scrubbers neutralize SO₂, producing calcium sulfate (gypsum) used in plasterboard.'
          },
          {
            id: 'c13_q10',
            subtopicId: 'chemistry_13',
            type: 'multiple_choice',
            question: 'What gas is released when hydrochloric acid is dropped onto a piece of limestone?',
            options: ['Carbon dioxide', 'Hydrogen', 'Oxygen', 'Chlorine'],
            correctAnswer: 'Carbon dioxide',
            explanation: 'Acid + Carbonate → Salt + Water + Carbon Dioxide gas.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch14',
    subjectId: 'chemistry',
    number: 14,
    title: 'Organic Chemistry',
    description: 'Hydrocarbons, alkanes, alkenes, alcohols, carboxylic acids, and polymers.',
    subtopics: [
      {
        id: 'chemistry_14',
        chapterId: 'chem_ch14',
        subjectId: 'chemistry',
        code: '14',
        title: 'Organic Chemistry and Polymers',
        description: 'Alkanes, alkenes, cracking, fermentation of ethanol, addition vs condensation polymerization.',
        durationMinutes: 15,
        experience: {
          type: 'carbon_lego',
          title: 'Carbon Lego Molecular Builder',
          scenario: 'A molecular nanotechnology synthesizer snaps carbon atoms and functional groups into organic compounds.',
          prompt: 'Snap carbon atoms into chains: build Methane (CH₄), Ethene (C₂H₄ with C=C double bond), Ethanol (C₂H₅OH), and Ethanoic acid (CH₃COOH). Test ethene with bromine water (decolorizes from orange to colorless) and link monomers into Poly(ethene).',
          goal: 'Build an alkane, an alkene, an alcohol, and synthesize an addition polymer chain of poly(ethene).'
        },
        lesson: {
          whatHappened: 'Alkanes contained single C-C bonds and were unreactive except for combustion. Alkenes had reactive C=C double bonds that opened up to add bromine, turning orange bromine water colorless. Alkenes linked together into long addition polymer plastics.',
          academicConcept: 'Homologous series: Family of organic compounds with same functional group, same general formula, and similar chemical properties. Alkanes (CnH2n+2): Saturated hydrocarbons; undergo substitution with halogens in UV light. Alkenes (CnH2n): Unsaturated hydrocarbons with C=C double bond; undergo addition reactions (test: decolourises orange bromine water). Catalytic cracking: Long alkanes → shorter alkane + alkene (using heat ~500°C and zeolite/silica catalyst). Alcohols (-OH group): Ethanol produced by fermentation (glucose → 2 ethanol + 2 CO₂) or hydration of ethene (C₂H₄ + H₂O → C₂H₅OH). Polymers: Addition (polyethene) vs Condensation (nylon, terylene with loss of small molecules like H₂O).',
          interactiveDiagram: {
            title: 'Organic Families & Polymerisation',
            caption: 'Alkane (CnH2n+2) · Alkene (CnH2n, C=C) · Alcohol (-OH) · Carboxylic Acid (-COOH) · Polymer',
            keyPoints: [
              'Prefixes by carbon count: Meth- (1), Eth- (2), Prop- (3), But- (4).',
              'Bromine water test: Alkenes decolourise orange bromine water immediately (addition across C=C).',
              'Fermentation of glucose: Yeast enzyme anaerobic respiration at 35°C produces ethanol and CO₂.',
              'Plastics disposal problems: Non-biodegradable, fill landfills, release toxic gases when burned.'
            ]
          },
          workedExample: {
            title: 'Distinguishing Between Ethane and Ethene',
            problem: 'A chemist has two unlabelled gas jars: one contains ethane (C₂H₆) and the other contains ethene (C₂H₄). Describe a chemical test to distinguish between them.',
            stepByStep: [
              { step: 'Reagent', detail: 'Add orange/brown bromine water (aqueous bromine) to each jar and shake' },
              { step: 'Ethene result', detail: 'The orange solution rapidly decolourises to colorless: C₂H₄ + Br₂ → C₂H₄Br₂ (1,2-dibromoethane)' },
              { step: 'Ethane result', detail: 'The solution remains orange/brown because saturated alkanes do not react with bromine in the dark' }
            ],
            keyTakeaway: 'The bromine water test provides a definitive visual test for unsaturation (C=C double bonds).'
          },
          quickChallenge: {
            prompt: 'What happens to the color of orange aqueous bromine water when shaken with an unsaturated alkene like ethene?',
            options: ['It turns completely colorless immediately', 'It stays bright orange', 'It turns dark purple', 'It turns milky white'],
            correctIndex: 0,
            explanation: 'The C=C double bond undergoes an addition reaction with bromine, forming colorless 1,2-dibromoethane.'
          },
          summary: [
            'Alkanes (CnH2n+2) are saturated; alkenes (CnH2n) contain C=C double bonds.',
            'Bromine water tests for unsaturation (alkenes turn it colorless).',
            'Addition polymers form by linking alkene monomers through breaking double bonds.'
          ]
        },
        questions: [
          {
            id: 'c14_q1',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What is the general molecular formula for the homologous series of alkanes?',
            options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnH2n+1OH'],
            correctAnswer: 'CnH2n+2',
            explanation: 'Alkanes are saturated hydrocarbons with formula CnH2n+2 (e.g. methane CH₄, ethane C₂H₆).'
          },
          {
            id: 'c14_q2',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What functional group characterizes organic carboxylic acids such as ethanoic acid (vinegar)?',
            options: ['-COOH', '-OH', 'C=C double bond', '-NH₂'],
            correctAnswer: '-COOH',
            explanation: 'The carboxyl group (-COOH) consists of a carbonyl C=O and hydroxyl -OH on the same carbon.'
          },
          {
            id: 'c14_q3',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What is the process of cracking in petroleum refining?',
            options: ['Breaking long-chain heavy alkane molecules into shorter, more useful alkanes and reactive alkenes using heat and a catalyst', 'Burning oil for heat', 'Filtering sand from crude oil', 'Separating oil by boiling point'],
            correctAnswer: 'Breaking long-chain heavy alkane molecules into shorter, more useful alkanes and reactive alkenes using heat and a catalyst',
            explanation: 'Cracking converts low-demand heavy fractions into high-octane petrol and alkene feedstocks.'
          },
          {
            id: 'c14_q4',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'How is ethanol manufactured by the fermentation of aqueous glucose?',
            options: ['Using yeast enzymes at ~35°C in the absence of oxygen (anaerobic): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂', 'Boiling wood with acid', 'Reacting methane with water', 'Electrolysis of sugar'],
            correctAnswer: 'Using yeast enzymes at ~35°C in the absence of oxygen (anaerobic): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂',
            explanation: 'Yeast ferments sugar anaerobically at warm body temperature until alcohol reaches ~14%.'
          },
          {
            id: 'c14_q5',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What monomer is used to produce the plastic Poly(ethene)?',
            options: ['Ethene (C₂H₄)', 'Ethane (C₂H₆)', 'Ethanol (C₂H₅OH)', 'Methane (CH₄)'],
            correctAnswer: 'Ethene (C₂H₄)',
            explanation: 'Thousands of ethene molecules link together through addition polymerization of their C=C bonds.'
          },
          {
            id: 'c14_q6',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What chemical test confirms that a hydrocarbon is an unsaturated alkene?',
            options: ['It decolourises orange bromine water to colorless', 'It turns limewater milky', 'It relights a glowing splint', 'It turns blue litmus red'],
            correctAnswer: 'It decolourises orange bromine water to colorless',
            explanation: 'Bromine adds across the C=C double bond to form a colorless di-bromoalkane.'
          },
          {
            id: 'c14_q7',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What type of polymerisation forms Nylon and Terylene, releasing small molecules (such as water) as by-products?',
            options: ['Condensation polymerisation', 'Addition polymerisation', 'Cracking', 'Combustion'],
            correctAnswer: 'Condensation polymerisation',
            explanation: 'Condensation polymers form when bifunctional monomers join with the elimination of small molecules like H₂O.'
          },
          {
            id: 'c14_q8',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What is the molecular formula of propane, a 3-carbon alkane?',
            options: ['C₃H₈', 'C₃H₆', 'C₃H₄', 'CH₃OH'],
            correctAnswer: 'C₃H₈',
            explanation: 'For n = 3, CnH2n+2 gives C₃H(2×3+2) = C₃H₈.'
          },
          {
            id: 'c14_q9',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'What is the complete combustion product of any pure hydrocarbon reacting with excess oxygen?',
            options: ['Carbon dioxide (CO₂) and Water (H₂O)', 'Carbon monoxide and soot', 'Hydrogen gas and carbon', 'Sulfur dioxide'],
            correctAnswer: 'Carbon dioxide (CO₂) and Water (H₂O)',
            explanation: 'Hydrocarbon + O₂ → CO₂ + H₂O with release of substantial thermal energy.'
          },
          {
            id: 'c14_q10',
            subtopicId: 'chemistry_14',
            type: 'multiple_choice',
            question: 'Why are synthetic addition polymers (plastics) an environmental hazard?',
            options: ['They are non-biodegradable because microorganisms lack enzymes to break down inert C-C bonds', 'They dissolve into acid in rivers', 'They attract lightning', 'They turn into radioactive waste'],
            correctAnswer: 'They are non-biodegradable because microorganisms lack enzymes to break down inert C-C bonds',
            explanation: 'Strong, non-polar carbon-carbon backbone bonds persist in landfill environments for centuries.'
          }
        ]
      }
    ]
  }
];
