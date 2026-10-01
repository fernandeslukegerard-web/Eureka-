import { Chapter } from '../../types';

export const chemistryReactionsChapters: Chapter[] = [
  {
    id: 'chem_ch4',
    subjectId: 'chemistry',
    number: 4,
    title: 'Stoichiometry',
    description: 'Formulas, balanced chemical equations, the mole concept, and reacting masses.',
    subtopics: [
      {
        id: 'chemistry_4',
        chapterId: 'chem_ch4',
        subjectId: 'chemistry',
        code: '4',
        title: 'Stoichiometry and the Mole',
        description: 'Molar mass, reacting mass calculations, Avogadro constant, and molar gas volume.',
        durationMinutes: 14,
        experience: {
          type: 'reaction_recipe',
          title: 'Chemical Reaction Recipe Lab',
          scenario: 'A pharmaceutical batch plant must synthesize aspirin without wasting expensive precursor reagents.',
          prompt: 'Balance chemical recipes in moles! Adjust reactant masses: 2 moles of H₂ + 1 mole of O₂ → 2 moles of H₂O. Notice limiting reagents and calculate theoretical yields.',
          goal: 'Synthesize exactly 4 moles of water (72 g) by providing stoichiometric amounts of hydrogen and oxygen with zero waste.'
        },
        lesson: {
          whatHappened: 'Adding excess hydrogen when oxygen ran out left unused reactant. Chemical equations work in exact molar ratios: 1 mole contains Avogadro’s number of particles (6.02 × 10²³) and occupies 24 dm³ for any gas at room temperature and pressure.',
          academicConcept: 'The mole: Amount of substance containing 6.02 × 10²³ particles. Formula: Moles = Mass / Molar Mass (n = m / Mr). Moles of gas = Volume (dm³) / 24 dm³ at r.t.p. Solution concentration: Concentration (mol/dm³) = Moles / Volume (dm³). Percentage yield = (Actual yield / Theoretical yield) × 100%.',
          interactiveDiagram: {
            title: 'The Stoichiometric Triangle Pathways',
            caption: 'Mass (g) = Moles × Mr; Gas Volume = Moles × 24 dm³; Concentration = Moles / Volume',
            keyPoints: [
              'Moles = Mass / Mr (relative formula mass).',
              'Avogadro Constant: 6.02 × 10²³ particles per mole.',
              'Molar volume of ANY gas at r.t.p. (20°C, 1 atm) is 24 dm³ (24,000 cm³).',
              'Limiting reactant determines maximum product that can form.'
            ]
          },
          workedExample: {
            title: 'Calculating Mass of Product from a Balanced Equation',
            problem: 'Calculate the mass of Magnesium Oxide (MgO, Mr = 40) produced when 12 g of Magnesium (Mg, Ar = 24) reacts completely with oxygen: 2Mg + O₂ → 2MgO.',
            stepByStep: [
              { step: 'Moles of Mg', detail: 'Moles = mass / Ar = 12 g / 24 g/mol = 0.50 mol' },
              { step: 'Molar ratio', detail: 'From balanced equation, 2 mol Mg yields 2 mol MgO (1:1 ratio), so 0.50 mol MgO forms' },
              { step: 'Mass of MgO', detail: 'Mass = moles × Mr = 0.50 mol × 40 g/mol = 20 g', math: 'm = 0.50 \\times 40 = 20\\text{ g}' }
            ],
            keyTakeaway: 'Always convert given mass to moles first, use stoichiometric ratio, then convert moles back to mass.'
          },
          quickChallenge: {
            prompt: 'What volume does 0.25 moles of carbon dioxide (CO₂) gas occupy at room temperature and pressure (r.t.p.)?',
            options: ['6.0 dm³ (6,000 cm³)', '24 dm³', '4.8 dm³', '1.2 dm³'],
            correctIndex: 0,
            explanation: 'Volume = moles × 24 dm³ = 0.25 × 24 = 6.0 dm³ (or 6000 cm³).'
          },
          summary: [
            'Moles = mass / molar mass (n = m / Mr).',
            '1 mole of any gas occupies 24 dm³ at r.t.p.',
            'Reacting ratios follow balanced chemical coefficients.'
          ]
        },
        questions: [
          {
            id: 'c4_q1',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'How many moles are in 44 g of Carbon Dioxide (CO₂, Mr = 44)?',
            options: ['1.0 mole', '44 moles', '0.5 moles', '2.0 moles'],
            correctAnswer: '1.0 mole',
            explanation: 'Moles = mass / Mr = 44 g / 44 g/mol = 1.0 mol.'
          },
          {
            id: 'c4_q2',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the volume occupied by 2 moles of Oxygen gas at room temperature and pressure (r.t.p.)?',
            options: ['48 dm³', '24 dm³', '12 dm³', '96 dm³'],
            correctAnswer: '48 dm³',
            explanation: 'Volume = moles × 24 dm³ = 2 × 24 = 48 dm³.'
          },
          {
            id: 'c4_q3',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the relative formula mass (Mr) of Calcium Carbonate (CaCO₃)? [Ar: Ca=40, C=12, O=16]',
            options: ['100', '68', '84', '50'],
            correctAnswer: '100',
            explanation: 'Mr = 40 + 12 + (3 × 16) = 40 + 12 + 48 = 100.'
          },
          {
            id: 'c4_q4',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the concentration of a solution containing 0.1 moles of solute dissolved in 0.5 dm³ of water?',
            options: ['0.2 mol/dm³', '0.05 mol/dm³', '5.0 mol/dm³', '0.5 mol/dm³'],
            correctAnswer: '0.2 mol/dm³',
            explanation: 'Concentration = moles / volume = 0.1 / 0.5 = 0.2 mol/dm³.'
          },
          {
            id: 'c4_q5',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'In the reaction N₂ + 3H₂ → 2NH₃, how many moles of hydrogen are needed to react completely with 2 moles of nitrogen?',
            options: ['6 moles', '3 moles', '2 moles', '1 mole'],
            correctAnswer: '6 moles',
            explanation: 'The molar ratio of N₂ to H₂ is 1:3; therefore 2 moles of N₂ requires 2 × 3 = 6 moles of H₂.'
          },
          {
            id: 'c4_q6',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the empirical formula of a compound with molecular formula C₆H₁₂O₆ (glucose)?',
            options: ['CH₂O', 'C₆H₁₂O₆', 'CHO', 'C₂H₄O₂'],
            correctAnswer: 'CH₂O',
            explanation: 'The simplest whole-number ratio of 6:12:6 is 1:2:1, giving CH₂O.'
          },
          {
            id: 'c4_q7',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'If a reaction produces 16 g of product when theoretical yield was calculated as 20 g, what is the percentage yield?',
            options: ['80%', '125%', '20%', '64%'],
            correctAnswer: '80%',
            explanation: 'Percentage yield = (16 / 20) × 100% = 80%.'
          },
          {
            id: 'c4_q8',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the mass of 0.5 moles of Sulfuric acid (H₂SO₄)? [Mr = 98]',
            options: ['49 g', '98 g', '196 g', '24.5 g'],
            correctAnswer: '49 g',
            explanation: 'Mass = moles × Mr = 0.5 × 98 = 49 g.'
          },
          {
            id: 'c4_q9',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the Avogadro constant value?',
            options: ['6.02 × 10²³ particles/mol', '3.0 × 10⁸ m/s', '9.8 N/kg', '1.6 × 10⁻¹⁹ C'],
            correctAnswer: '6.02 × 10²³ particles/mol',
            explanation: 'Avogadro’s number defines the count of elementary entities per mole.'
          },
          {
            id: 'c4_q10',
            subtopicId: 'chemistry_4',
            type: 'multiple_choice',
            question: 'What is the limiting reactant in a chemical process?',
            options: ['The reactant that is completely consumed first, dictating maximum product yield', 'The reactant present in excess', 'The solvent', 'The catalyst'],
            correctAnswer: 'The reactant that is completely consumed first, dictating maximum product yield',
            explanation: 'Once the limiting reactant is exhausted, the reaction stops.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch5',
    subjectId: 'chemistry',
    number: 5,
    title: 'Electricity and Chemistry',
    description: 'Electrolysis of molten and aqueous electrolytes, half-equations, and electroplating.',
    subtopics: [
      {
        id: 'chemistry_5',
        chapterId: 'chem_ch5',
        subjectId: 'chemistry',
        code: '5',
        title: 'Electricity and Chemistry',
        description: 'Electrolysis principles, cathode vs anode reactions, and electroplating.',
        durationMinutes: 14,
        experience: {
          type: 'electroplating_workshop',
          title: 'Electroplating & Electrolysis Workshop',
          scenario: 'An industrial plating bath coats copper onto steel cutlery and nickel car parts.',
          prompt: 'Set up an electrolytic cell: select electrolyte (copper(II) sulfate CuSO₄), connect copper anode (+) and brass key cathode (-), and adjust current and plating timer to deposit a shiny copper layer.',
          goal: 'Electroplate a brass key with 0.5 g of pure copper metal using optimal electrical current.'
        },
        lesson: {
          whatHappened: 'Positive copper ions (Cu²⁺) were attracted to the negative cathode where they gained electrons (reduction) to form solid copper metal. Negative sulfate ions migrated to the positive anode.',
          academicConcept: 'Electrolysis is the breakdown of an ionic compound, molten or in aqueous solution, by the passage of electricity. Anode is positive (+); Cathode is negative (-). PANIC: Positive Anode Negative Is Cathode. Reduction occurs at cathode (gain of electrons, RED CAT). Oxidation occurs at anode (loss of electrons, OIL RIG). Electroplating: Object to be plated is the CATHODE; plating metal is the ANODE; electrolyte contains ions of the plating metal.',
          interactiveDiagram: {
            title: 'Electrolysis Cell & Half-Equations',
            caption: 'Cathode (-) reduction: Cu²⁺ + 2e⁻ → Cu; Anode (+) oxidation: Cu → Cu²⁺ + 2e⁻',
            keyPoints: [
              'Molten Lead(II) Bromide (PbBr₂): Lead forms at cathode (Pb²⁺ + 2e⁻ → Pb), Bromine gas at anode (2Br⁻ → Br₂ + 2e⁻).',
              'Aqueous solutions: If metal is more reactive than hydrogen, H₂ gas is liberated at cathode.',
              'At anode in aqueous solutions: Halides produce halogens (Cl₂, Br₂, I₂); otherwise O₂ gas is discharged from OH⁻.',
              'Electroplating enhances appearance and protects against corrosion.'
            ]
          },
          workedExample: {
            title: 'Predicting Products of Electrolysis of Aqueous Sodium Chloride (Brine)',
            problem: 'Predict the products formed at the cathode and anode during the electrolysis of concentrated aqueous NaCl.',
            stepByStep: [
              { step: 'Identify ions present', detail: 'Na⁺, Cl⁻ (from salt) and H⁺, OH⁻ (from water)' },
              { step: 'Cathode (-)', detail: 'Na is more reactive than H; therefore H⁺ ions are discharged: 2H⁺ + 2e⁻ → H₂ gas' },
              { step: 'Anode (+)', detail: 'Halide is present in high concentration; Cl⁻ ions are discharged: 2Cl⁻ → Cl₂ + 2e⁻ gas' },
              { step: 'Solution remaining', detail: 'Na⁺ and OH⁻ remain, forming sodium hydroxide (NaOH) solution' }
            ],
            keyTakeaway: 'In aqueous electrolysis, the less reactive species is discharged at the cathode; halides are discharged at the anode over hydroxide.'
          },
          quickChallenge: {
            prompt: 'During electroplating of a steel spoon with silver, what must be placed at the cathode and anode?',
            options: ['Cathode = Steel spoon, Anode = Pure silver bar, Electrolyte = Silver nitrate solution', 'Cathode = Silver, Anode = Spoon', 'Cathode = Carbon, Anode = Lead', 'Both are steel spoons'],
            correctIndex: 0,
            explanation: 'The object receiving the metal deposit is always the negative cathode where metal cations gain electrons to form a solid layer.'
          },
          summary: [
            'Electrolysis decomposes ionic compounds using direct electrical current.',
            'Reduction occurs at the negative cathode; oxidation at the positive anode.',
            'Electroplating uses the object as cathode and plating metal as anode.'
          ]
        },
        questions: [
          {
            id: 'c5_q1',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'What are the products formed during the electrolysis of molten Lead(II) bromide (PbBr₂)?',
            options: ['Lead metal at cathode, brown Bromine vapor at anode', 'Bromine at cathode, Lead at anode', 'Hydrogen at cathode, Oxygen at anode', 'Lead oxide at cathode'],
            correctAnswer: 'Lead metal at cathode, brown Bromine vapor at anode',
            explanation: 'Pb²⁺ cations migrate to the cathode (Pb²⁺ + 2e⁻ → Pb); Br⁻ anions migrate to the anode (2Br⁻ → Br₂ + 2e⁻).'
          },
          {
            id: 'c5_q2',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'What does the acronym OIL RIG stand for in electrochemistry?',
            options: ['Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)', 'Oxygen Is Lost, Radiation Is Gained', 'Oil In Liquid, Rust In Gas', 'One Ion Lost, Rest Ion Gained'],
            correctAnswer: 'Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)',
            explanation: 'Oxidation involves loss of electrons; reduction involves gain of electrons.'
          },
          {
            id: 'c5_q3',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'During the electrolysis of dilute sulfuric acid (H₂SO₄), what gases are collected at the cathode and anode in a 2:1 volume ratio?',
            options: ['Hydrogen at cathode, Oxygen at anode', 'Oxygen at cathode, Hydrogen at anode', 'Sulfur dioxide at cathode', 'Chlorine and Hydrogen'],
            correctAnswer: 'Hydrogen at cathode, Oxygen at anode',
            explanation: 'Water is split into 2H₂ at cathode and O₂ at anode, giving a 2:1 gas volume ratio.'
          },
          {
            id: 'c5_q4',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'Why must cryolite (Na₃AlF₆) be added to molten bauxite (Al₂O₃) in the industrial extraction of Aluminium?',
            options: ['To lower the melting point from ~2050°C to ~950°C and improve electrical conductivity, saving energy', 'To make aluminium shiny', 'To produce oxygen', 'To prevent graphite from burning'],
            correctAnswer: 'To lower the melting point from ~2050°C to ~950°C and improve electrical conductivity, saving energy',
            explanation: 'Dissolving alumina in molten cryolite massively reduces electrical operating costs.'
          },
          {
            id: 'c5_q5',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'What is the half-equation for the reduction of copper(II) ions at the cathode?',
            options: ['Cu²⁺ + 2e⁻ → Cu', 'Cu → Cu²⁺ + 2e⁻', 'Cu²⁺ + e⁻ → Cu⁺', 'Cu + 2e⁻ → Cu²⁻'],
            correctAnswer: 'Cu²⁺ + 2e⁻ → Cu',
            explanation: 'Reduction is the gain of two electrons by copper(II) cations to produce neutral copper metal.'
          },
          {
            id: 'c5_q6',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'In the industrial electrolysis of brine, what is formed in solution after H₂ and Cl₂ gases are evolved?',
            options: ['Sodium hydroxide solution (NaOH)', 'Pure water', 'Hydrochloric acid', 'Sodium chlorate'],
            correctAnswer: 'Sodium hydroxide solution (NaOH)',
            explanation: 'Remaining unreacted Na⁺ and OH⁻ ions form valuable alkaline sodium hydroxide.'
          },
          {
            id: 'c5_q7',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'Why must carbon (graphite) anodes in the Hall-Héroult aluminium extraction process be replaced regularly?',
            options: ['They react with evolved oxygen gas at high temperature to form CO₂ gas and burn away', 'They melt into the bath', 'They absorb aluminium', 'They become non-conductive'],
            correctAnswer: 'They react with evolved oxygen gas at high temperature to form CO₂ gas and burn away',
            explanation: 'C + O₂ → CO₂ consumes the carbon anode rods continuously at 950°C.'
          },
          {
            id: 'c5_q8',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'What electrical supply is strictly required for electrolysis?',
            options: ['Direct Current (DC)', 'Alternating Current (AC)', 'Radio waves', 'High-frequency sound'],
            correctAnswer: 'Direct Current (DC)',
            explanation: 'DC maintains fixed electrode polarities; AC would reverse the electrode reactions every half-cycle.'
          },
          {
            id: 'c5_q9',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'What is a major reason for electroplating chrome onto steel automobile bumpers?',
            options: ['Corrosion resistance and shiny decorative finish', 'To make the car lighter', 'To make the bumper magnetic', 'To conduct electricity to lights'],
            correctAnswer: 'Corrosion resistance and shiny decorative finish',
            explanation: 'Chromium provides an attractive mirror sheen and acts as a barrier preventing rust.'
          },
          {
            id: 'c5_q10',
            subtopicId: 'chemistry_5',
            type: 'multiple_choice',
            question: 'In the electrolysis of concentrated aqueous copper(II) chloride using inert platinum electrodes, what is produced at the anode?',
            options: ['Chlorine gas (Cl₂)', 'Oxygen gas', 'Copper metal', 'Hydrogen gas'],
            correctAnswer: 'Chlorine gas (Cl₂)',
            explanation: 'Concentrated chloride ions are preferentially discharged at the anode: 2Cl⁻ → Cl₂ + 2e⁻.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch6',
    subjectId: 'chemistry',
    number: 6,
    title: 'Chemical Energetics',
    description: 'Exothermic and endothermic reactions, energy level diagrams, and bond energy calculations.',
    subtopics: [
      {
        id: 'chemistry_6',
        chapterId: 'chem_ch6',
        subjectId: 'chemistry',
        code: '6',
        title: 'Chemical Energetics',
        description: 'Exothermic and endothermic enthalpy changes, activation energy, and bond energies.',
        durationMinutes: 12,
        experience: {
          type: 'hot_or_cold_reaction',
          title: 'Hot or Cold Calorimetry Lab',
          scenario: 'A thermos insulated reaction calorimeter tests sports hot packs and instant cold packs.',
          prompt: 'Mix combinations: Magnesium + Hydrochloric acid (exothermic, temperature shoots up +25°C) and Ammonium Nitrate + Water (endothermic, drops to 2°C). Trace the enthalpy energy level diagrams.',
          goal: 'Identify whether reactions are exothermic (ΔH negative) or endothermic (ΔH positive) based on thermometer readings.'
        },
        lesson: {
          whatHappened: 'Exothermic reactions transferred chemical potential energy to the surroundings as heat, raising the thermometer reading. Endothermic reactions absorbed thermal energy from the surroundings, causing the beaker to feel cold.',
          academicConcept: 'Exothermic reaction: Releases heat to surroundings; temperature increases; enthalpy change ΔH is negative (-ΔH); products have lower chemical energy than reactants. Endothermic reaction: Absorbs heat from surroundings; temperature decreases; ΔH is positive (+ΔH); products have higher energy. Bond breaking is ENDOTHERMIC (requires energy input); Bond forming is EXOTHERMIC (releases energy). Overall ΔH = Energy of bonds broken - Energy of bonds formed.',
          interactiveDiagram: {
            title: 'Energy Profile Diagrams',
            caption: 'Reactants → Activation Energy Peak (Ea) → Products; ΔH = Energy Products - Energy Reactants',
            keyPoints: [
              'Exothermic: Reactant energy > Product energy; ΔH is negative.',
              'Endothermic: Product energy > Reactant energy; ΔH is positive.',
              'Activation Energy (Ea): Minimum energy required for colliding particles to react.',
              'Combustion, neutralisation, and respiration are always exothermic.'
            ]
          },
          workedExample: {
            title: 'Calculating Enthalpy Change from Bond Energies',
            problem: 'Calculate ΔH for the reaction H₂ + Cl₂ → 2HCl given bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol.',
            stepByStep: [
              { step: 'Bonds broken (reactants)', detail: '(1 × H-H) + (1 × Cl-Cl) = 436 + 242 = +678 kJ/mol' },
              { step: 'Bonds formed (products)', detail: '2 × (H-Cl) = 2 × 431 = 862 kJ/mol (released: -862 kJ/mol)' },
              { step: 'Net ΔH', detail: 'ΔH = Bonds broken - Bonds formed = 678 - 862 = -184 kJ/mol', math: '\\Delta H = 678 - 862 = -184\\text{ kJ/mol}' }
            ],
            keyTakeaway: 'Since more energy was released forming bonds than taken in breaking bonds, the reaction is exothermic (-184 kJ/mol).'
          },
          quickChallenge: {
            prompt: 'In terms of bond breaking and bond making, why is the combustion of methane an exothermic reaction?',
            options: ['More energy is released when forming new bonds in CO₂ and H₂O than is taken in to break bonds in CH₄ and O₂', 'No bonds are broken', 'Bond breaking releases heat', 'Methane contains fire'],
            correctIndex: 0,
            explanation: 'A reaction is exothermic when the energy released during bond formation in products exceeds the energy invested in bond breaking of reactants.'
          },
          summary: [
            'Exothermic releases heat (ΔH is negative); endothermic absorbs heat (ΔH is positive).',
            'Activation energy is the minimum barrier needed to initiate a reaction.',
            'ΔH = Total energy absorbed breaking bonds - Total energy released forming bonds.'
          ]
        },
        questions: [
          {
            id: 'c6_q1',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'What is true about the temperature of the reaction mixture during an exothermic reaction?',
            options: ['Temperature increases', 'Temperature decreases', 'Temperature remains identical', 'Temperature drops to 0°C'],
            correctAnswer: 'Temperature increases',
            explanation: 'Chemical energy is converted into thermal kinetic energy, heating the surroundings.'
          },
          {
            id: 'c6_q2',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'What sign does the enthalpy change ΔH have for an endothermic process?',
            options: ['Positive (+ΔH)', 'Negative (-ΔH)', 'Zero', 'Infinity'],
            correctAnswer: 'Positive (+ΔH)',
            explanation: 'Endothermic reactions take in energy from surroundings, increasing the system enthalpy (+ΔH).'
          },
          {
            id: 'c6_q3',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'Which of the following processes is endothermic?',
            options: ['Thermal decomposition of limestone (CaCO₃)', 'Combustion of natural gas', 'Neutralisation of acid by alkali', 'Respiration in human cells'],
            correctAnswer: 'Thermal decomposition of limestone (CaCO₃)',
            explanation: 'CaCO₃ requires continuous intense heating to decompose into CaO and CO₂.'
          },
          {
            id: 'c6_q4',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'What is activation energy (Ea)?',
            options: ['The minimum amount of energy colliding particles must possess to react successfully', 'The total energy released by fuel', 'The energy of a bond', 'The heat capacity of water'],
            correctAnswer: 'The minimum amount of energy colliding particles must possess to react successfully',
            explanation: 'Activation energy is the energy threshold needed to stretch and break existing bonds.'
          },
          {
            id: 'c6_q5',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'Is breaking a chemical bond an endothermic or exothermic process?',
            options: ['Endothermic (always requires energy input)', 'Exothermic (releases energy)', 'Neither', 'Depends on temperature'],
            correctAnswer: 'Endothermic (always requires energy input)',
            explanation: 'Overcoming attractive electrostatic forces between atoms requires work/energy input.'
          },
          {
            id: 'c6_q6',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'In an exothermic energy level diagram, where do the products sit relative to reactants?',
            options: ['At a lower energy level than reactants', 'At a higher energy level than reactants', 'At the same exact energy level', 'At zero energy'],
            correctAnswer: 'At a lower energy level than reactants',
            explanation: 'Energy is lost to surroundings, leaving products with lower enthalpy.'
          },
          {
            id: 'c6_q7',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'What type of chemical reaction is utilised in disposable hand-warmers?',
            options: ['Exothermic oxidation of iron powder with atmospheric oxygen', 'Endothermic dissolution of salt', 'Photosynthesis', 'Nuclear fission'],
            correctAnswer: 'Exothermic oxidation of iron powder with atmospheric oxygen',
            explanation: 'Rusting of fine iron powder in air is an exothermic reaction releasing steady heat.'
          },
          {
            id: 'c6_q8',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'What happens to the activation energy when a suitable chemical catalyst is added to a reaction?',
            options: ['It lowers the activation energy by providing an alternative reaction pathway', 'It increases activation energy', 'It changes ΔH', 'It stops the reaction'],
            correctAnswer: 'It lowers the activation energy by providing an alternative reaction pathway',
            explanation: 'A catalyst offers an easier pathway with lower Ea without changing overall ΔH.'
          },
          {
            id: 'c6_q9',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'If bonds broken require +2000 kJ and bonds formed release -2800 kJ, what is ΔH for the reaction?',
            options: ['-800 kJ (exothermic)', '+800 kJ (endothermic)', '+4800 kJ', '-2000 kJ'],
            correctAnswer: '-800 kJ (exothermic)',
            explanation: 'ΔH = 2000 - 2800 = -800 kJ/mol.'
          },
          {
            id: 'c6_q10',
            subtopicId: 'chemistry_6',
            type: 'multiple_choice',
            question: 'What chemical fuel in hydrogen fuel cells produces only water as a clean reaction product?',
            options: ['Hydrogen gas reacting with oxygen: 2H₂ + O₂ → 2H₂O', 'Methane gas', 'Coal slurry', 'Diesel'],
            correctAnswer: 'Hydrogen gas reacting with oxygen: 2H₂ + O₂ → 2H₂O',
            explanation: 'Hydrogen fuel cells produce electrical energy directly with harmless water as the sole effluent.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch7',
    subjectId: 'chemistry',
    number: 7,
    title: 'Chemical Reactions',
    description: 'Rates of reaction, collision theory, reversible reactions, and redox reactions.',
    subtopics: [
      {
        id: 'chemistry_7',
        chapterId: 'chem_ch7',
        subjectId: 'chemistry',
        code: '7',
        title: 'Chemical Reactions',
        description: 'Collision theory, catalysts, surface area, concentration, and reversible equilibrium.',
        durationMinutes: 14,
        experience: {
          type: 'reaction_detective',
          title: 'Reaction Detective Rate Investigator',
          scenario: 'A forensic investigator analyzes evidence of chemical change and controls reaction kinetics.',
          prompt: 'Test marble chips (CaCO₃) reacting with hydrochloric acid. Vary particle size (large chips vs powdered), acid concentration (0.5M vs 2.0M), temperature, and add a catalyst. Collect CO₂ gas in a syringe to measure rate.',
          goal: 'Maximize initial reaction rate to produce 50 cm³ of carbon dioxide gas in under 15 seconds.'
        },
        lesson: {
          whatHappened: 'Using powdered marble chips exposed a much larger surface area, and increasing acid concentration increased particle collisions per second. Heating gave particles more kinetic energy exceeding activation energy.',
          academicConcept: 'Collision Theory: For a reaction to occur, particles must collide with correct orientation and energy greater than or equal to activation energy (Ea). Rate increases by: (1) Increasing concentration/pressure (more collisions per unit time), (2) Increasing temperature (more frequent and energetic collisions with energy ≥ Ea), (3) Increasing surface area of solids, (4) Adding a catalyst (lowers Ea). Reversible reactions reach dynamic equilibrium in a closed system where forward and reverse reaction rates are equal (Le Chatelier’s Principle).',
          interactiveDiagram: {
            title: 'Collision Frequency & Maxwell-Boltzmann Distribution',
            caption: 'Rate = Δ[Product] / Δt; Shaded area shows particles with energy E ≥ Activation Energy Ea',
            keyPoints: [
              'Temperature: Small increase in temperature produces a massive increase in particles with energy ≥ Ea.',
              'Catalysts increase rate without being chemically changed or consumed at the end of the reaction.',
              'Redox: Oxidation is loss of electrons/gain of oxygen; Reduction is gain of electrons/loss of oxygen.',
              'Oxidising agent: oxidises another substance while itself being reduced.'
            ]
          },
          workedExample: {
            title: 'Finding Reaction Rate from a Gas Volume Graph',
            problem: 'In a gas syringe experiment, 40 cm³ of CO₂ is produced in the first 20 seconds. What is the initial rate of reaction?',
            stepByStep: [
              { step: 'Formula', detail: 'Rate = Volume of gas / Time taken' },
              { step: 'Calculation', detail: 'Rate = 40 cm³ / 20 s = 2.0 cm³/s', math: '\\text{Rate} = \\frac{40}{20} = 2.0\\text{ cm}^3/\\text{s}' }
            ],
            keyTakeaway: 'The gradient of a volume-time graph gives the rate of reaction at that instant; rate is steepest at t = 0.'
          },
          quickChallenge: {
            prompt: 'Why does food keep much longer without spoiling when stored in a refrigerator at 4°C?',
            options: ['Low temperature slows bacterial chemical reactions by decreasing particle kinetic energy and collision frequency', 'Cold destroys bacteria instantly', 'Food becomes frozen solid', 'Darkness in the fridge stops reactions'],
            correctIndex: 0,
            explanation: 'Lower temperature reduces bacterial metabolic reaction rates because fewer reactant molecules possess energy ≥ activation energy.'
          },
          summary: [
            'Rate increases with concentration, surface area, temperature, and catalysts.',
            'Collision theory states particles must collide with energy exceeding activation energy.',
            'Dynamic equilibrium: forward rate equals reverse rate in a closed system.'
          ]
        },
        questions: [
          {
            id: 'c7_q1',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'Why does powdered calcium carbonate react much faster with acid than large lumps of the same mass?',
            options: ['Powder has a much greater total surface area, exposing more particles to collisions', 'Powder is more concentrated', 'Powder has lower activation energy', 'Powder acts as a catalyst'],
            correctAnswer: 'Powder has a much greater total surface area, exposing more particles to collisions',
            explanation: 'Subdividing a solid exposes vast numbers of internal atoms to reactant acid collisions.'
          },
          {
            id: 'c7_q2',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'How does increasing temperature primarily speed up chemical reactions according to collision theory?',
            options: ['A significantly larger proportion of colliding particles possess energy greater than or equal to activation energy', 'Particles get heavier', 'Activation energy is increased', 'Molecules expand in size'],
            correctAnswer: 'A significantly larger proportion of colliding particles possess energy greater than or equal to activation energy',
            explanation: 'Higher thermal energy shifts the Maxwell-Boltzmann curve, dramatically multiplying successful collisions.'
          },
          {
            id: 'c7_q3',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'What is a catalyst?',
            options: ['A substance that speeds up a chemical reaction by providing an alternative pathway with lower activation energy, without being consumed', 'A chemical that adds heat to a beaker', 'A reactant that dissolves', 'An indicator for acids'],
            correctAnswer: 'A substance that speeds up a chemical reaction by providing an alternative pathway with lower activation energy, without being consumed',
            explanation: 'Catalysts emerge chemically unchanged at the end of the process and can be reused.'
          },
          {
            id: 'c7_q4',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'What does the term dynamic equilibrium mean in a reversible chemical reaction?',
            options: ['The rate of the forward reaction equals the rate of the reverse reaction, and concentrations remain constant', 'All reactions have completely stopped', 'Reactants have completely converted to products', 'The temperature has reached 0°C'],
            correctAnswer: 'The rate of the forward reaction equals the rate of the reverse reaction, and concentrations remain constant',
            explanation: 'In dynamic equilibrium, reactions continue in both directions at identical rates.'
          },
          {
            id: 'c7_q5',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'In the Haber process: N₂ + 3H₂ ⇌ 2NH₃ (exothermic forward), what happens to ammonia yield if temperature is increased?',
            options: ['Ammonia yield decreases because equilibrium shifts in the endothermic reverse direction', 'Ammonia yield increases', 'Yield stays identical', 'Ammonia decomposes into water'],
            correctAnswer: 'Ammonia yield decreases because equilibrium shifts in the endothermic reverse direction',
            explanation: 'Le Chatelier’s principle: heating shifts equilibrium in the direction that absorbs heat (endothermic).'
          },
          {
            id: 'c7_q6',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'In the reaction CuO + H₂ → Cu + H₂O, what is happening to the Copper(II) oxide?',
            options: ['It is reduced because it loses oxygen', 'It is oxidized', 'It acts as a catalyst', 'It stays unchanged'],
            correctAnswer: 'It is reduced because it loses oxygen',
            explanation: 'Reduction is the loss of oxygen; CuO loses oxygen to form elemental Cu.'
          },
          {
            id: 'c7_q7',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'What observation provides clear visual evidence of a chemical change?',
            options: ['Effervescence (gas bubbles), color change, temperature change, or precipitate formation', 'Water turning into ice', 'Dissolving sugar in coffee', 'Chopping wood'],
            correctAnswer: 'Effervescence (gas bubbles), color change, temperature change, or precipitate formation',
            explanation: 'These indicate new chemical substances being formed with distinct properties.'
          },
          {
            id: 'c7_q8',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'Why does increasing pressure increase the rate of reaction between gases?',
            options: ['It forces gas particles closer together, increasing collision frequency per unit volume', 'It makes gas particles move faster', 'It cools the gas', 'It reduces activation energy'],
            correctAnswer: 'It forces gas particles closer together, increasing collision frequency per unit volume',
            explanation: 'Higher pressure increases particle concentration, leading to more frequent collisions.'
          },
          {
            id: 'c7_q9',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'What color change occurs when acidified potassium manganate(VII) acts as an oxidising agent?',
            options: ['From purple to colorless', 'From orange to green', 'From blue to red', 'From clear to milky white'],
            correctAnswer: 'From purple to colorless',
            explanation: 'MnO₄⁻ (purple) is reduced to Mn²⁺ (colorless), serving as a standard test for reducing agents.'
          },
          {
            id: 'c7_q10',
            subtopicId: 'chemistry_7',
            type: 'multiple_choice',
            question: 'On a graph of volume of gas evolved versus time, what does the gradient of the curve at any point represent?',
            options: ['The rate of reaction at that instant', 'The activation energy', 'The total mass of reactants', 'The temperature of the room'],
            correctAnswer: 'The rate of reaction at that instant',
            explanation: 'Gradient = ΔVolume / ΔTime, which is the definition of rate of reaction.'
          }
        ]
      }
    ]
  }
];
