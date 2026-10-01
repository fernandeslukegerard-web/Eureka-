import { Chapter } from '../../types';
import { chemistryReactionsChapters } from './chemistry_reactions';
import { chemistryAdvancedChapters } from './chemistry_advanced';

const baseChemistryChapters: Chapter[] = [
  {
    id: 'chem_ch1',
    subjectId: 'chemistry',
    number: 1,
    title: 'Particulate Nature of Matter',
    description: 'Kinetic particle theory, states of matter, diffusion, and state changes.',
    subtopics: [
      {
        id: 'chemistry_1',
        chapterId: 'chem_ch1',
        subjectId: 'chemistry',
        code: '1',
        title: 'Particulate Nature of Matter',
        description: 'States of matter, phase changes, and diffusion rates in gases and liquids.',
        durationMinutes: 12,
        experience: {
          type: 'particle_freeze',
          title: 'Particle Freeze Phase Transition Lab',
          scenario: 'A cryogenic laboratory flask allows you to control temperature and pressure on chemical elements.',
          prompt: 'Adjust the thermal slider from -200°C to 300°C. Observe phase changes from crystalline solid lattice to fluid liquid and rapid gas diffusion.',
          goal: 'Demonstrate melting, boiling, condensation, freezing, and sublimation (iodine crystals).'
        },
        lesson: {
          whatHappened: 'Heating broke intermolecular forces between particles. In diffusion, particles moved randomly from regions of higher concentration to lower concentration, with lighter gas molecules diffusing faster.',
          academicConcept: 'All matter is made of moving particles (atoms, molecules, or ions). In solids, particles vibrate in fixed regular arrays. In liquids, particles slide past each other with short-range order. In gases, particles move randomly at high speed with large empty spaces. Diffusion is the net movement of particles from high to low concentration down a concentration gradient. Graham\'s Law: lighter particles (lower molecular mass Mr) diffuse faster than heavier particles (e.g. NH₃ vs HCl).',
          interactiveDiagram: {
            title: 'Diffusion of Ammonia and Hydrogen Chloride Gas',
            caption: 'NH₃ (Mr = 17) travels faster than HCl (Mr = 36.5); white ring of NH₄Cl forms closer to HCl end',
            keyPoints: [
              'Melting & Boiling: Temperature remains constant while latent heat breaks intermolecular bonds.',
              'Diffusion rate depends on: (1) temperature (faster when hotter), and (2) relative molecular mass (Mr).',
              'Sublimation: Direct transition from solid to gas (e.g. Iodine I₂, dry ice CO₂).'
            ]
          },
          workedExample: {
            title: 'Predicting Diffusion Distance in a Sealed Tube',
            problem: 'Cotton wool soaked in ammonia (NH₃, Mr = 17) is placed at one end of a glass tube, and hydrochloric acid (HCl, Mr = 36.5) at the other. Where does the white smoke ring of NH₄Cl form?',
            stepByStep: [
              { step: 'Compare molecular masses', detail: 'Mr(NH₃) = 14 + 3 = 17; Mr(HCl) = 1 + 35.5 = 36.5' },
              { step: 'Apply kinetic theory', detail: 'Lighter molecules have higher average speed at the same temperature.' },
              { step: 'Conclusion', detail: 'NH₃ diffuses faster and covers a greater distance. The white ring forms closer to the HCl end.' }
            ],
            keyTakeaway: 'Lighter gas molecules diffuse faster than heavier gas molecules at the same temperature.'
          },
          quickChallenge: {
            prompt: 'Why does a white cloud of ammonium chloride form closer to the concentrated HCl end than the NH₃ end in a diffusion tube?',
            options: ['Ammonia molecules have lower relative molecular mass (Mr = 17) and diffuse faster than HCl molecules (Mr = 36.5)', 'HCl is a liquid', 'Ammonia is a heavier gas', 'Air pushes ammonia backwards'],
            correctIndex: 0,
            explanation: 'NH₃ has an Mr of 17 g/mol, which is less than half that of HCl (36.5 g/mol); lighter particles travel faster at equal kinetic energies.'
          },
          summary: [
            'Solids have fixed shapes; liquids take container shapes; gases fill the container.',
            'Diffusion is driven by random thermal collisions down a concentration gradient.',
            'Gases with lower relative molecular mass diffuse faster.'
          ]
        },
        questions: [
          {
            id: 'c1_q1',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'Which gas diffuses the fastest at room temperature and pressure?',
            options: ['Methane (CH₄, Mr = 16)', 'Oxygen (O₂, Mr = 32)', 'Carbon dioxide (CO₂, Mr = 44)', 'Chlorine (Cl₂, Mr = 71)'],
            correctAnswer: 'Methane (CH₄, Mr = 16)',
            explanation: 'Methane has the lowest relative molecular mass (16) and therefore the highest average molecular speed.'
          },
          {
            id: 'c1_q2',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'What is the change of state from solid directly to gas called without becoming liquid first?',
            options: ['Sublimation', 'Evaporation', 'Condensation', 'Melting'],
            correctAnswer: 'Sublimation',
            explanation: 'Sublimation occurs when vapor pressure exceeds atmospheric pressure before the melting point is reached.'
          },
          {
            id: 'c1_q3',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'What happens to the kinetic energy of particles when a substance is heated?',
            options: ['Kinetic energy increases', 'Kinetic energy decreases', 'Kinetic energy drops to zero', 'Particles lose mass'],
            correctAnswer: 'Kinetic energy increases',
            explanation: 'Temperature is directly proportional to the average kinetic energy of the constituent particles.'
          },
          {
            id: 'c1_q4',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'Why does the temperature of pure water remain constant at 100°C while it is actively boiling?',
            options: ['Supplied energy is used to break intermolecular hydrogen bonds between molecules', 'The thermometer maxes out', 'Steam cools the liquid instantly', 'Heat is destroyed'],
            correctAnswer: 'Supplied energy is used to break intermolecular hydrogen bonds between molecules',
            explanation: 'Latent heat of vaporisation overcomes attractive forces rather than increasing particle speed.'
          },
          {
            id: 'c1_q5',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'A purple crystal of potassium manganate(VII) is placed at the bottom of a beaker of still water. What happens over several days?',
            options: ['The purple color slowly spreads uniformly throughout the beaker by diffusion', 'The crystal floats to the top', 'The water turns black and boils', 'The crystal solidifies the water'],
            correctAnswer: 'The purple color slowly spreads uniformly throughout the beaker by diffusion',
            explanation: 'Random molecular collisions disperse manganate ions throughout the water molecules.'
          },
          {
            id: 'c1_q6',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'Which state of matter has particles arranged in a regular, tightly packed lattice?',
            options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
            correctAnswer: 'Solid',
            explanation: 'Solids have fixed lattice geometry with strong bonding forces restricting particles to vibration.'
          },
          {
            id: 'c1_q7',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'What is the term for a substance undergoing cooling that shows a horizontal plateau on its cooling curve?',
            options: ['Freezing or condensation point (phase change)', 'Thermal runaway', 'Absolute zero', 'Critical refraction'],
            correctAnswer: 'Freezing or condensation point (phase change)',
            explanation: 'The latent heat released during bond formation halts the temperature drop during freezing.'
          },
          {
            id: 'c1_q8',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'Why do gases compress much more easily than liquids or solids?',
            options: ['Gases have vast empty space between widely separated particles', 'Gas particles are soft squishy spheres', 'Gas particles have negative mass', 'Liquids have no atoms'],
            correctAnswer: 'Gases have vast empty space between widely separated particles',
            explanation: 'Particles in liquids and solids are already touching, so repulsive electron forces resist compression.'
          },
          {
            id: 'c1_q9',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'How does increasing temperature affect the rate of diffusion in a gas?',
            options: ['Diffusion rate increases because particles move faster with higher kinetic energy', 'Diffusion rate decreases', 'Diffusion rate remains unaffected', 'Diffusion stops completely'],
            correctAnswer: 'Diffusion rate increases because particles move faster with higher kinetic energy',
            explanation: 'Higher thermal energy gives particles greater mean velocity, increasing displacement rate.'
          },
          {
            id: 'c1_q10',
            subtopicId: 'chemistry_1',
            type: 'multiple_choice',
            question: 'Which of the following substances sublimes at atmospheric pressure when gently warmed?',
            options: ['Iodine crystals', 'Common table salt (NaCl)', 'Copper sulfate', 'Pure water ice'],
            correctAnswer: 'Iodine crystals',
            explanation: 'Dark purple solid iodine crystals sublime directly into dense violet iodine vapour.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch2',
    subjectId: 'chemistry',
    number: 2,
    title: 'Experimental Techniques',
    description: 'Measurement of physical quantities, criteria of purity, chromatography, and separation methods.',
    subtopics: [
      {
        id: 'chemistry_2',
        chapterId: 'chem_ch2',
        subjectId: 'chemistry',
        code: '2',
        title: 'Experimental Techniques',
        description: 'Apparatus selection, filtration, crystallisation, distillation, and paper chromatography.',
        durationMinutes: 14,
        experience: {
          type: 'mystery_lab',
          title: 'Mystery Chemical Analysis Lab',
          scenario: 'A forensic laboratory receives a contaminated liquid sample containing dissolved salts, sand, and ink dyes.',
          prompt: 'Select the correct apparatus: filter funnel to remove insoluble sand, simple distillation to recover pure water, and paper chromatography with Rf calculations to separate food colorings.',
          goal: 'Separate and purify all 3 phases and calculate the retention factor Rf of the mystery dye.'
        },
        lesson: {
          whatHappened: 'Filtration separated insoluble solids from liquids. Distillation separated liquids with differing boiling points. Paper chromatography separated dissolved pigments based on their differential solubility in the mobile phase.',
          academicConcept: 'Separation techniques: (1) Filtration: insoluble solid from liquid. (2) Crystallisation: soluble solute from solution. (3) Simple distillation: solvent from a solution. (4) Fractional distillation: miscible liquids with close boiling points (e.g. ethanol/water, crude oil). (5) Chromatography: mixtures of soluble substances. Retention factor Rf = distance moved by substance / distance moved by solvent front.',
          interactiveDiagram: {
            title: 'Paper Chromatography & Distillation Setup',
            caption: 'Rf = Distance travelled by solute / Distance travelled by solvent front; Liebig condenser water in at bottom',
            keyPoints: [
              'Liebig Condenser: Cooling water must always enter at the bottom and exit at the top to ensure full jacket filling.',
              'Chromatography baseline: Always drawn in PENCIL (graphite is insoluble and will not run with solvent).',
              'Pure substances: Have sharp, precise melting and boiling points; impurities lower the melting point and elevate boiling point.',
              'Locating agents (e.g. ninhydrin) are sprayed on colorless amino acids to make spots visible.'
            ]
          },
          workedExample: {
            title: 'Calculating Rf Value in Paper Chromatography',
            problem: 'In a paper chromatogram, the solvent front advances 8.0 cm from the pencil origin. Red dye spot travels 5.2 cm. What is the Rf value of the red dye?',
            stepByStep: [
              { step: 'Formula', detail: 'Rf = distance moved by spot / distance moved by solvent front' },
              { step: 'Calculation', detail: 'Rf = 5.2 cm / 8.0 cm = 0.65', math: 'R_f = \\frac{5.2}{8.0} = 0.65' }
            ],
            keyTakeaway: 'Rf is a ratio between 0 and 1 with no units; identical substances have identical Rf under identical conditions.'
          },
          quickChallenge: {
            prompt: 'Why must the starting baseline on a chromatography paper strip be drawn in pencil rather than ink pen?',
            options: ['Pencil looks tidier', 'Ink contains soluble dyes that would dissolve in the solvent and contaminate the chromatogram', 'Pencil conducts electricity', 'Ink destroys paper'],
            correctIndex: 1,
            explanation: 'Pencil lead is graphite, which is insoluble in chromatographic solvents, ensuring only the test spots travel.'
          },
          summary: [
            'Filtration separates insoluble solids; distillation separates solvents.',
            'Fractional distillation separates miscible liquids using a fractionating column.',
            'Rf = spot distance / solvent front distance; purity is shown by sharp melting points.'
          ]
        },
        questions: [
          {
            id: 'c2_q1',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'What apparatus is used to accurately measure exactly 25.0 cm³ of a solution for a titration?',
            options: ['Volumetric pipette', 'Beaker', 'Measuring cylinder', 'Test tube'],
            correctAnswer: 'Volumetric pipette',
            explanation: 'A volumetric pipette has high precision calibrated to deliver exactly 25.0 cm³.'
          },
          {
            id: 'c2_q2',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'Why does cooling water enter at the bottom of a Liebig condenser and exit at the top?',
            options: ['To ensure the condenser jacket fills completely with water without air pockets for maximum cooling', 'To let gravity push the water', 'Because hot water is denser', 'To prevent condensation'],
            correctAnswer: 'To ensure the condenser jacket fills completely with water without air pockets for maximum cooling',
            explanation: 'Bottom-to-top flow keeps the entire glass cooling sleeve flooded with circulating cold water.'
          },
          {
            id: 'c2_q3',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'How can you confirm whether a sample of water is chemically pure rather than tap water?',
            options: ['Check if it boils sharply at exactly 100.0°C at 1 atm', 'Taste it to see if it is sweet', 'Check if it is clear and transparent', 'Shake it for bubbles'],
            correctAnswer: 'Check if it boils sharply at exactly 100.0°C at 1 atm',
            explanation: 'Pure chemical substances have sharp, distinct melting and boiling points; dissolved minerals alter boiling point.'
          },
          {
            id: 'c2_q4',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'What separation technique is used to obtain pure copper(II) sulfate crystals from an aqueous solution?',
            options: ['Evaporate water to point of crystallisation, then allow to cool and filter crystals', 'Simple filtration', 'Paper chromatography', 'Centrifugation'],
            correctAnswer: 'Evaporate water to point of crystallisation, then allow to cool and filter crystals',
            explanation: 'Gentle heating to saturation followed by slow cooling yields pure crystalline hydrate.'
          },
          {
            id: 'c2_q5',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'What is the formula for calculating Rf value in paper chromatography?',
            options: ['Distance moved by spot / Distance moved by solvent front', 'Distance moved by solvent / Distance moved by spot', 'Spot width × solvent height', 'Spot mass / liquid volume'],
            correctAnswer: 'Distance moved by spot / Distance moved by solvent front',
            explanation: 'Rf is the relative retardation factor comparing solute travel to total solvent migration.'
          },
          {
            id: 'c2_q6',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'Which method is used to separate ethanol (boiling point 78°C) from water (boiling point 100°C)?',
            options: ['Fractional distillation', 'Filtration', 'Simple evaporation to dryness', 'Magnetism'],
            correctAnswer: 'Fractional distillation',
            explanation: 'Miscible liquids with close boiling points require a fractionating column with repeated condensation cycles.'
          },
          {
            id: 'c2_q7',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'What is a locating agent used for in chromatography?',
            options: ['To react with colorless spots (such as amino acids) to make them visible colored spots', 'To find the beaker', 'To dissolve the paper', 'To measure pH'],
            correctAnswer: 'To react with colorless spots (such as amino acids) to make them visible colored spots',
            explanation: 'Spraying ninhydrin develops purple spots for colorless amino acids.'
          },
          {
            id: 'c2_q8',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'What apparatus is best suited to separate two immiscible liquids such as oil and water?',
            options: ['Separating funnel', 'Burette', 'Filter paper', 'Condenser'],
            correctAnswer: 'Separating funnel',
            explanation: 'A separating funnel allows the denser lower layer (water) to be drained through a tap.'
          },
          {
            id: 'c2_q9',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'What effect does an impurity have on the melting point of a solid substance?',
            options: ['It lowers the melting point and causes it to melt over a wider temperature range', 'It makes melting point higher and sharper', 'It has zero effect', 'It makes the solid boil'],
            correctAnswer: 'It lowers the melting point and causes it to melt over a wider temperature range',
            explanation: 'Foreign molecules disrupt crystal lattice regularity, lowering the thermal energy needed to melt.'
          },
          {
            id: 'c2_q10',
            subtopicId: 'chemistry_2',
            type: 'multiple_choice',
            question: 'A dye spot moves 3.0 cm and the solvent moves 6.0 cm. What is the Rf value?',
            options: ['0.50', '2.0', '18.0', '0.33'],
            correctAnswer: '0.50',
            explanation: 'Rf = 3.0 / 6.0 = 0.50.'
          }
        ]
      }
    ]
  },
  {
    id: 'chem_ch3',
    subjectId: 'chemistry',
    number: 3,
    title: 'Atoms, Elements and Compounds',
    description: 'Atomic structure, electron configurations, ionic bonding, and covalent bonding.',
    subtopics: [
      {
        id: 'chemistry_3',
        chapterId: 'chem_ch3',
        subjectId: 'chemistry',
        code: '3',
        title: 'Atoms, Elements and Compounds',
        description: 'Electronic structure, valence electrons, ionic lattice, and covalent molecules.',
        durationMinutes: 14,
        experience: {
          type: 'atom_factory',
          title: 'Chemical Atom Factory & Bonding Lab',
          scenario: 'A molecular synthesis chamber lets you assemble atoms and trigger chemical bonding.',
          prompt: 'Configure electron shells (2, 8, 8). Transfer an electron from Sodium (2,8,1) to Chlorine (2,8,7) to form an ionic NaCl crystal, or share electron pairs between Hydrogen and Oxygen to build covalent H₂O.',
          goal: 'Construct one giant ionic lattice (NaCl) and one simple molecular covalent compound (CH₄ or H₂O).'
        },
        lesson: {
          whatHappened: 'Sodium transferred its valence electron to chlorine, forming Na⁺ and Cl⁻ ions held by strong electrostatic attractions. Non-metal atoms shared pairs of electrons to achieve full octet noble gas configurations.',
          academicConcept: 'Elements contain only one type of atom. Compounds contain two or more different elements chemically bonded. Ionic bonding: Metal transfers electron(s) to non-metal, forming positive cations and negative anions in a giant ionic lattice (high melting point, conducts electricity when molten or aqueous). Covalent bonding: Non-metals share pairs of electrons, forming molecules (low melting point due to weak intermolecular forces). Giant covalent structures: Diamond, Graphite, Silicon(IV) oxide.',
          interactiveDiagram: {
            title: 'Ionic vs Covalent Bonding Models',
            caption: 'Electron transfer (Na⁺ and Cl⁻) vs Electron sharing (H:O:H water molecule)',
            keyPoints: [
              'Valence shell filling: Atoms react to achieve stable noble gas electronic configurations (e.g. 2,8 or 2,8,8).',
              'Ionic compounds: Giant lattices, strong electrostatic forces between oppositely charged ions, high melting points.',
              'Simple covalent molecules: Strong covalent bonds inside molecules, but weak intermolecular forces between molecules (low melting points).',
              'Graphite conducts electricity because each carbon atom has one delocalised free electron.'
            ]
          },
          workedExample: {
            title: 'Deducing the Chemical Formula of Magnesium Chloride',
            problem: 'Magnesium is in Group II (2 valence electrons) and Chlorine is in Group VII (7 valence electrons). Deduce the ionic formula.',
            stepByStep: [
              { step: 'Magnesium ion', detail: 'Loses 2 electrons to form Mg²⁺' },
              { step: 'Chloride ion', detail: 'Each Chlorine atom gains 1 electron to form Cl⁻' },
              { step: 'Charge balance', detail: 'Two Cl⁻ ions are required to balance one Mg²⁺ ion: MgCl₂', math: '\\text{Mg}^{2+} + 2\\text{Cl}^- \\rightarrow \\text{MgCl}_2' }
            ],
            keyTakeaway: 'The overall electrical charge of an ionic compound must balance to zero.'
          },
          quickChallenge: {
            prompt: 'Why does solid sodium chloride NOT conduct electricity, but molten sodium chloride conducts very well?',
            options: ['Solid NaCl has no ions', 'In solid NaCl, ions are fixed in rigid lattice positions; in molten liquid, ions are free to move and carry charge', 'Molten NaCl contains free electrons', 'Solid NaCl is a metal'],
            correctIndex: 1,
            explanation: 'Electrical conduction in ionic substances requires mobile charged particles: ions cannot move in the solid lattice, but can flow freely when molten or dissolved in water.'
          },
          summary: [
            'Metals lose electrons to form cations; non-metals gain electrons to form anions.',
            'Ionic bonds are strong electrostatic attractions between oppositely charged ions.',
            'Covalent bonds consist of shared electron pairs between non-metal atoms.'
          ]
        },
        questions: [
          {
            id: 'c3_q1',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'What is the electronic configuration of an uncharged Argon atom (atomic number 18)?',
            options: ['2, 8, 8', '2, 8, 7', '2, 8, 8, 2', '2, 16'],
            correctAnswer: '2, 8, 8',
            explanation: 'First shell holds 2, second holds 8, third holds 8: 2 + 8 + 8 = 18 electrons.'
          },
          {
            id: 'c3_q2',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'What type of chemical bond is formed when Calcium (metal) reacts with Oxygen (non-metal)?',
            options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
            correctAnswer: 'Ionic bond',
            explanation: 'Reaction between a reactive metal (Ca) and non-metal (O) involves complete electron transfer to form Ca²⁺ and O²⁻.'
          },
          {
            id: 'c3_q3',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'Why does diamond have an exceptionally high melting point (over 3500°C)?',
            options: ['Each carbon atom is covalently bonded to 4 others in a rigid 3D giant tetrahedral network', 'It contains strong ionic bonds', 'It has delocalised electrons', 'It is made of heavy metal'],
            correctAnswer: 'Each carbon atom is covalently bonded to 4 others in a rigid 3D giant tetrahedral network',
            explanation: 'Breaking diamond requires severing thousands of strong carbon-carbon covalent bonds throughout the giant lattice.'
          },
          {
            id: 'c3_q4',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'Why does graphite conduct electricity whereas diamond is an electrical insulator?',
            options: ['Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along hexagonal layers', 'Graphite contains copper ions', 'Graphite is softer than diamond', 'Diamond has too many electrons'],
            correctAnswer: 'Each carbon in graphite forms 3 bonds, leaving one delocalised electron per atom free to move along hexagonal layers',
            explanation: 'The unbonded fourth electron in carbon forms delocalised pi systems capable of electrical conduction.'
          },
          {
            id: 'c3_q5',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'How many shared pairs of electrons are present in a nitrogen molecule (N₂)?',
            options: ['3 shared pairs (triple covalent bond)', '1 shared pair', '2 shared pairs', '4 shared pairs'],
            correctAnswer: '3 shared pairs (triple covalent bond)',
            explanation: 'Each nitrogen atom needs 3 electrons to complete its valence octet, forming a triple bond N≡N.'
          },
          {
            id: 'c3_q6',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'What is the formula of Aluminium Oxide formed from Al³⁺ and O²⁻ ions?',
            options: ['Al₂O₃', 'AlO', 'Al₃O₂', 'Al₂O'],
            correctAnswer: 'Al₂O₃',
            explanation: 'Two Al³⁺ ions (+6) balance three O²⁻ ions (-6): Al₂O₃.'
          },
          {
            id: 'c3_q7',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'Why do simple covalent molecular compounds like carbon dioxide (CO₂) have low boiling points?',
            options: ['Forces between molecules (intermolecular forces) are very weak and easily overcome', 'Covalent bonds inside the molecule are weak', 'They are non-polar', 'Molecules are tiny'],
            correctAnswer: 'Forces between molecules (intermolecular forces) are very weak and easily overcome',
            explanation: 'Boiling separates whole molecules without breaking the strong internal covalent bonds.'
          },
          {
            id: 'c3_q8',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'What structure does Silicon(IV) oxide (silica / quartz, SiO₂) possess?',
            options: ['Giant covalent structure similar to diamond', 'Simple molecular gas', 'Giant ionic lattice', 'Metallic lattice'],
            correctAnswer: 'Giant covalent structure similar to diamond',
            explanation: 'Each silicon atom is covalently bonded to 4 oxygen atoms in a giant tetrahedral network.'
          },
          {
            id: 'c3_q9',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'What is an element defined as?',
            options: ['A pure substance made of only one type of atom that cannot be split into simpler substances by chemical means', 'A mixture of metals', 'Any liquid found in nature', 'A bonded molecule'],
            correctAnswer: 'A pure substance made of only one type of atom that cannot be split into simpler substances by chemical means',
            explanation: 'Elements consist of atoms with identical proton numbers.'
          },
          {
            id: 'c3_q10',
            subtopicId: 'chemistry_3',
            type: 'multiple_choice',
            question: 'What is metallic bonding described as?',
            options: ['A lattice of positive metal ions in a sea of delocalised mobile electrons', 'Shared pairs of electrons between metals', 'Transfer of electrons to oxygen', 'Electrostatic attraction between opposite ions'],
            correctAnswer: 'A lattice of positive metal ions in a sea of delocalised mobile electrons',
            explanation: 'The sea of free electrons accounts for high electrical conductivity, malleability, and ductility.'
          }
        ]
      }
    ]
  }
];

export const chemistryChapters: Chapter[] = [
  ...baseChemistryChapters,
  ...chemistryReactionsChapters,
  ...chemistryAdvancedChapters
];
