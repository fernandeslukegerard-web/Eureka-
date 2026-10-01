import { Chapter } from '../../types';

export const biologyPart1Chapters: Chapter[] = [
  {
    id: 'bio_ch1',
    subjectId: 'biology',
    number: 1,
    title: 'Characteristics and Classification of Living Organisms',
    description: 'MRS GREN characteristics of life, binomial system, dichotomous keys, and vertebrate classification.',
    subtopics: [
      {
        id: 'biology_1',
        chapterId: 'bio_ch1',
        subjectId: 'biology',
        code: '1',
        title: 'Characteristics and Classification of Living Organisms',
        description: 'The 7 characteristics of living things, dichotomous keys, and the five kingdoms.',
        durationMinutes: 12,
        experience: {
          type: 'wildlife_classifier',
          title: 'Virtual Wildlife Reserve Dichotomous Classifier',
          scenario: 'You are an ecologist in the Serengeti reserve classifying newly discovered animal species.',
          prompt: 'Use dichotomous branching keys: check for backbone (vertebrates vs invertebrates), fur/scales/feathers, warm-bloodedness, and egg-laying to classify Mammals, Birds, Reptiles, Amphibians, and Fish.',
          goal: 'Correctly classify 4 specimens using anatomical features down the dichotomous key tree.'
        },
        lesson: {
          whatHappened: 'By observing physical traits (e.g. hair and mammary glands for mammals, feathers for birds, scales and gills for fish), organisms were systematically identified using yes/no branching choices.',
          academicConcept: 'The 7 characteristics of living organisms (MRS GREN): Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition. Binomial nomenclature (Linnaeus): Genus (capitalised) + species (lowercase) in italics, e.g. Homo sapiens. Classification reflects evolutionary relationships. Five Kingdoms: Animals, Plants, Fungi, Protoctists, Prokaryotes (bacteria). Five vertebrate groups: Mammals, Birds, Reptiles, Amphibians, Fish.',
          interactiveDiagram: {
            title: 'Vertebrate Classification Hierarchy',
            caption: 'Mammals (hair, live young, milk) · Birds (feathers, beaks, hard eggs) · Reptiles (dry scales, leathery eggs)',
            keyPoints: [
              'MRS GREN: The 7 universal vital life processes.',
              'Binomial name: Genus + species (e.g. Panthera leo).',
              'Arthropods: Invertebrates with jointed legs and exoskeleton (Insects, Crustaceans, Arachnids, Myriapods).',
              'Dichotomous keys use pairs of contrasting statements to identify unknown specimens.'
            ]
          },
          workedExample: {
            title: 'Using a Dichotomous Key',
            problem: 'An organism has jointed legs, an exoskeleton, and 3 pairs of legs (6 legs total) with wings. Identify its arthropod group.',
            stepByStep: [
              { step: 'Check legs', detail: '3 pairs of jointed legs (6 legs total)' },
              { step: 'Check body divisions', detail: 'Body divided into head, thorax, and abdomen' },
              { step: 'Conclusion', detail: 'It belongs to the Insect class (Arachnids have 8 legs, Crustaceans have 10+ legs).' }
            ],
            keyTakeaway: 'Count jointed legs to distinguish insects (6), arachnids (8), and crustaceans (10+).'
          },
          quickChallenge: {
            prompt: 'Which characteristic of living organisms describes the chemical reactions inside cells that break down nutrient molecules to release energy?',
            options: ['Respiration', 'Breathing alone', 'Nutrition', 'Excretion'],
            correctIndex: 0,
            explanation: 'Respiration is the cellular biochemical release of energy from glucose; breathing/ventilation is merely mechanical gas exchange.'
          },
          summary: [
            'Living things display MRS GREN characteristics.',
            'Binomial names give genus and species.',
            'Dichotomous keys identify organisms using observable traits.'
          ]
        },
        questions: [
          {
            id: 'b1_q1',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'What is the biological definition of excretion?',
            options: ['Removal from organisms of toxic materials and substances in excess of requirements', 'Passing undigested food as feces (egestion)', 'Breathing out air', 'Sweating to cool down'],
            correctAnswer: 'Removal from organisms of toxic materials and substances in excess of requirements',
            explanation: 'Excretion removes metabolic waste (urea, CO₂); egestion is the expulsion of undigested dietary fiber.'
          },
          {
            id: 'b1_q2',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'How are scientific binomial names correctly written according to international rules?',
            options: ['Genus capitalized, species lowercase, in italics (e.g. Panthera tigris)', 'Both capitalized in bold', 'Species first then genus', 'In all capital letters'],
            correctAnswer: 'Genus capitalized, species lowercase, in italics (e.g. Panthera tigris)',
            explanation: 'The genus is capitalized and species is lowercase; printed in italics or underlined if handwritten.'
          },
          {
            id: 'b1_q3',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'Which vertebrate group has moist permeable skin, lays jelly-coated eggs in water, and undergoes metamorphosis?',
            options: ['Amphibians', 'Reptiles', 'Fish', 'Mammals'],
            correctAnswer: 'Amphibians',
            explanation: 'Amphibians (frogs, toads, newts) lack waterproof scales and require moist aquatic breeding sites.'
          },
          {
            id: 'b1_q4',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'What feature uniquely distinguishes birds from all other vertebrate classes?',
            options: ['Feathers', 'Laying eggs', 'Warm-bloodedness', 'Having a backbone'],
            correctAnswer: 'Feathers',
            explanation: 'Feathers are unique to birds; mammals and some reptiles lay eggs, and mammals are also endothermic.'
          },
          {
            id: 'b1_q5',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'How many pairs of walking legs do arachnids (spiders, scorpions) possess?',
            options: ['4 pairs (8 legs)', '3 pairs (6 legs)', '5 pairs (10 legs)', 'Over 20 pairs'],
            correctAnswer: '4 pairs (8 legs)',
            explanation: 'Arachnids have 8 jointed legs and a body divided into cephalothorax and abdomen.'
          },
          {
            id: 'b1_q6',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'Which kingdom of organisms consists of unicellular organisms with no true nucleus (circular DNA loop free in cytoplasm)?',
            options: ['Prokaryotes (Bacteria)', 'Fungi', 'Protoctists', 'Plants'],
            correctAnswer: 'Prokaryotes (Bacteria)',
            explanation: 'Prokaryotic cells lack membrane-bound organelles and a true nuclear envelope.'
          },
          {
            id: 'b1_q7',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'What is the main modern basis used by biologists to classify organisms most accurately?',
            options: ['DNA base sequences and amino acid sequences', 'Body color', 'Geographic location', 'Diet'],
            correctAnswer: 'DNA base sequences and amino acid sequences',
            explanation: 'DNA homology reveals true evolutionary lineage far more accurately than superficial anatomy.'
          },
          {
            id: 'b1_q8',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'Which of the following is NOT one of the 7 life processes summarized by MRS GREN?',
            options: ['Thinking / Intelligence', 'Respiration', 'Growth', 'Excretion'],
            correctAnswer: 'Thinking / Intelligence',
            explanation: 'MRS GREN represents Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.'
          },
          {
            id: 'b1_q9',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'What group of plants produces flowers and has seeds enclosed inside a protective fruit ovary?',
            options: ['Angiosperms (Flowering plants)', 'Ferns', 'Mosses', 'Gymnosperms (Conifers)'],
            correctAnswer: 'Angiosperms (Flowering plants)',
            explanation: 'Angiosperms are divided into monocotyledons and dicotyledons.'
          },
          {
            id: 'b1_q10',
            subtopicId: 'biology_1',
            type: 'multiple_choice',
            question: 'A dicotyledonous leaf is typically characterized by which venation pattern?',
            options: ['A broad leaf blade with a network of branching veins (reticulate venation)', 'Narrow parallel veins', 'No veins at all', 'Circular concentric rings'],
            correctAnswer: 'A broad leaf blade with a network of branching veins (reticulate venation)',
            explanation: 'Dicots have branching net-like veins; monocots (grasses, lilies) have parallel veins.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch2',
    subjectId: 'biology',
    number: 2,
    title: 'Organisation of the Organism',
    description: 'Cell structure, plant vs animal cells, specialised cells, and levels of biological organisation.',
    subtopics: [
      {
        id: 'biology_2',
        chapterId: 'bio_ch2',
        subjectId: 'biology',
        code: '2',
        title: 'Organisation of the Organism',
        description: 'Organelles, plant vs animal cells, magnification formula, and cell-to-organism hierarchy.',
        durationMinutes: 14,
        experience: {
          type: 'build_a_human',
          title: 'Build-a-Human Biological Hierarchy Lab',
          scenario: 'A bio-engineering tissue printer constructs living systems from single organelles up to complex organisms.',
          prompt: 'Assemble the biological hierarchy in order: Muscle Cell → Cardiac Muscle Tissue → Heart Organ → Circulatory Organ System → Human Organism. Calculate microscope magnification using Image = Actual × Magnification.',
          goal: 'Successfully assemble all 5 structural tiers from organelle to organism without architectural errors.'
        },
        lesson: {
          whatHappened: 'Individual specialised cells grouped together to form tissues with common functions; tissues combined to form organs (like the heart); organs formed coordinated organ systems working together as an organism.',
          academicConcept: 'Levels of organisation: Cell → Tissue → Organ → Organ System → Organism. Plant vs Animal cells: Both have nucleus, cell membrane, cytoplasm, mitochondria, ribosomes. Plant cells also possess: cellulose cell wall (structural turgor support), chloroplasts (photosynthesis), and a large permanent central vacuole. Magnification formula: Magnification = Image size / Actual size (M = I / A). Specialised cells: Red blood cells (biconcave, no nucleus, haemoglobin), Root hair cells (elongated projection for water uptake), Ciliated cells (sweep mucus in airways), Neurons (axon transmits nerve impulses).',
          interactiveDiagram: {
            title: 'Cell Ultrastructure & Magnification Triangle',
            caption: 'Plant cell vs Animal cell; I = A × M (Image size = Actual size × Magnification)',
            keyPoints: [
              'Nucleus: Contains genetic material (DNA), controls cell activities.',
              'Mitochondria: Site of aerobic respiration to release ATP energy.',
              'Cell membrane: Partially permeable barrier controlling substance entry/exit.',
              'Chloroplasts: Contain chlorophyll pigments to absorb light for photosynthesis.'
            ]
          },
          workedExample: {
            title: 'Calculating Actual Cell Size Using the Magnification Triangle',
            problem: 'A photomicrograph shows a plant cell with an image length of 30 mm. The magnification is ×600. What is the actual length of the cell in micrometres (µm)?',
            stepByStep: [
              { step: 'Convert units', detail: '30 mm = 30 × 1000 µm = 30,000 µm' },
              { step: 'Formula', detail: 'Actual size A = Image size I / Magnification M' },
              { step: 'Calculation', detail: 'A = 30,000 µm / 600 = 50 µm', math: 'A = \\frac{30,000}{600} = 50\\ \\mu\\text{m}' }
            ],
            keyTakeaway: 'Always convert measurements to the same units (1 mm = 1,000 µm) before using M = I / A.'
          },
          quickChallenge: {
            prompt: 'Which three cellular structures are present in typical plant leaf cells but ABSENT from animal cells?',
            options: ['Cellulose cell wall, Chloroplasts, and Large permanent vacuole', 'Nucleus, Membrane, Mitochondria', 'Ribosomes, Cytoplasm, DNA', 'Centrioles and Flagella'],
            correctIndex: 0,
            explanation: 'Animal cells lack a rigid cellulose wall, green chloroplasts, and permanent fluid vacuoles.'
          },
          summary: [
            'Hierarchy: Cell → Tissue → Organ → Organ System → Organism.',
            'Plant cells feature cellulose walls, chloroplasts, and large vacuoles.',
            'Magnification M = Image size / Actual size (1 mm = 1000 µm).'
          ]
        },
        questions: [
          {
            id: 'b2_q1',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'What is the correct sequence of biological organisation from smallest to largest?',
            options: ['Cell → Tissue → Organ → Organ system → Organism', 'Tissue → Cell → Organism → Organ', 'Organ → Tissue → Cell → System', 'Cell → Organ → Tissue → Organism'],
            correctAnswer: 'Cell → Tissue → Organ → Organ system → Organism',
            explanation: 'Cells form tissues, tissues compose organs, organs group into systems, systems form an organism.'
          },
          {
            id: 'b2_q2',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'An image of a bacterium is 20 mm long under a microscope with magnification ×4000. What is its actual size?',
            options: ['5 µm', '50 µm', '0.5 µm', '80 µm'],
            correctAnswer: '5 µm',
            explanation: '20 mm = 20,000 µm. Actual = Image / Magnification = 20,000 / 4000 = 5 µm.'
          },
          {
            id: 'b2_q3',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'What organelle is known as the powerhouse of the cell where aerobic respiration occurs to release energy?',
            options: ['Mitochondria', 'Ribosome', 'Vacuole', 'Golgi apparatus'],
            correctAnswer: 'Mitochondria',
            explanation: 'Mitochondria synthesize ATP through glucose oxidation in aerobic respiration.'
          },
          {
            id: 'b2_q4',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'How is a mature human red blood cell adapted to transport oxygen efficiently?',
            options: ['Biconcave disc shape increases surface area; contains haemoglobin; lacks a nucleus to pack more oxygen', 'It has cilia on its surface', 'It has chloroplasts', 'It is a rigid square shape'],
            correctAnswer: 'Biconcave disc shape increases surface area; contains haemoglobin; lacks a nucleus to pack more oxygen',
            explanation: 'The absence of a nucleus maximizes volume for oxygen-carrying hemoglobin molecules.'
          },
          {
            id: 'b2_q5',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'What is the function of the root hair cell projection in flowering plants?',
            options: ['Greatly increases surface area for rapid absorption of water and mineral ions from soil', 'Performs photosynthesis underground', 'Stores starch', 'Protects against frost'],
            correctAnswer: 'Greatly increases surface area for rapid absorption of water and mineral ions from soil',
            explanation: 'The hair-like extension maximizes contact area with soil water films.'
          },
          {
            id: 'b2_q6',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'What structure lines the human respiratory trachea to sweep trapped dust and microbes upward?',
            options: ['Ciliated epithelial cells', 'Squamous cells', 'Red blood cells', 'Nerve cells'],
            correctAnswer: 'Ciliated epithelial cells',
            explanation: 'Tiny hair-like cilia beat synchronously to move mucus up and out of the lungs.'
          },
          {
            id: 'b2_q7',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'What material constitutes the tough outer cell wall of plant cells?',
            options: ['Cellulose', 'Chitin', 'Glycogen', 'Keratin'],
            correctAnswer: 'Cellulose',
            explanation: 'Cellulose microfibrils form a strong tensile mesh preventing plant cells from bursting under turgor pressure.'
          },
          {
            id: 'b2_q8',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'What organelle synthesizes proteins inside all living cells?',
            options: ['Ribosome', 'Mitochondria', 'Vacuole', 'Chloroplast'],
            correctAnswer: 'Ribosome',
            explanation: 'Ribosomes translate mRNA transcripts into polypeptide amino acid chains.'
          },
          {
            id: 'b2_q9',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'Which of the following is considered an organ rather than a tissue?',
            options: ['The Stomach', 'Epithelium', 'Muscle tissue', 'Blood'],
            correctAnswer: 'The Stomach',
            explanation: 'The stomach is an organ made of muscular tissue, glandular tissue, and epithelial tissue.'
          },
          {
            id: 'b2_q10',
            subtopicId: 'biology_2',
            type: 'multiple_choice',
            question: 'How many micrometres (µm) are in one millimetre (mm)?',
            options: ['1,000 µm', '100 µm', '10 µm', '1,000,000 µm'],
            correctAnswer: '1,000 µm',
            explanation: '1 millimetre equals 1,000 micrometres (1 µm = 10⁻³ mm).'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch3',
    subjectId: 'biology',
    number: 3,
    title: 'Movement into and out of Cells',
    description: 'Diffusion, osmosis, active transport, and water potential in biological systems.',
    subtopics: [
      {
        id: 'biology_3',
        chapterId: 'bio_ch3',
        subjectId: 'biology',
        code: '3',
        title: 'Movement into and out of Cells',
        description: 'Diffusion, osmosis down water potential gradients, and ATP-powered active transport.',
        durationMinutes: 14,
        experience: {
          type: 'cell_border_control',
          title: 'Cell Membrane Border Control Checkpoint',
          scenario: 'The cell membrane is a busy international border checkpoint controlling entry and exit of molecules.',
          prompt: 'Operate transport gates: allow passive diffusion of oxygen, observe osmosis of water molecules across a partially permeable membrane into hypertonic vs hypotonic solutions, and expend ATP to pump glucose against its concentration gradient.',
          goal: 'Manage cellular homeostasis by maintaining cell turgor pressure without causing cell lysis or crenation.'
        },
        lesson: {
          whatHappened: 'Oxygen diffused freely through lipid pores without energy. Water moved by osmosis from high to low water potential; animal cells burst in pure water (lysis) while plant cells became firm (turgid) due to the cell wall. Active transport required ATP to pump ions against their gradient.',
          academicConcept: 'Diffusion: Net movement of particles from a region of higher concentration to lower concentration down a concentration gradient as a result of their random movement. Osmosis: Net movement of water molecules from a region of higher water potential (dilute solution) to lower water potential (concentrated solution) through a partially permeable membrane. Turgid: Plant cell swollen with water; Plasmolysis: Plant cell cytoplasm pulls away from cell wall in concentrated solution. Active Transport: Movement of particles through a cell membrane against a concentration gradient using energy from respiration (ATP) via carrier proteins (e.g. root hair mineral uptake, intestinal glucose absorption).',
          interactiveDiagram: {
            title: 'Osmosis & Active Transport Mechanisms',
            caption: 'Osmosis (down water potential gradient) vs Active Transport (against gradient using ATP)',
            keyPoints: [
              'Partially permeable membrane: Allows small molecules (water) through but blocks large solutes (sucrose).',
              'Pure water has the HIGHEST water potential (0 kPa); adding solute lowers water potential (negative).',
              'Animal cells in pure water: Absorb water and burst (lysis); in salty water: shrivel (crenation).',
              'Plant cells in pure water: Water enters until cell wall exerts turgor pressure (turgid).'
            ]
          },
          workedExample: {
            title: 'Analyzing Potato Chip Osmosis Experiment',
            problem: 'Potato cylinders of equal length (50 mm) are placed in test tubes with: (A) pure water and (B) 20% sucrose solution for 2 hours. Describe and explain changes in length and texture.',
            stepByStep: [
              { step: 'Tube A (Pure Water)', detail: 'Pure water has higher water potential than potato cell sap. Water enters by osmosis. Cylinder becomes longer (>52 mm) and firm/turgid.' },
              { step: 'Tube B (20% Sucrose)', detail: 'Sucrose solution has lower water potential than potato cells. Water leaves cells by osmosis. Cylinder becomes shorter (<48 mm) and soft/flaccid.' }
            ],
            keyTakeaway: 'Water always moves into regions of lower water potential (more concentrated solute).'
          },
          quickChallenge: {
            prompt: 'Why do plant cells placed in pure water become turgid rather than bursting like red blood cells do?',
            options: ['The rigid cellulose cell wall exerts pressure that prevents excessive swelling and bursting', 'Plant cells do not absorb water', 'Plant cell membranes are impermeable to water', 'Plant vacuoles pump water out'],
            correctIndex: 0,
            explanation: 'The strong cellulose cell wall withstands high internal hydrostatic turgor pressure, keeping the plant upright.'
          },
          summary: [
            'Diffusion is passive movement down a concentration gradient.',
            'Osmosis is water movement down a water potential gradient across a partially permeable membrane.',
            'Active transport moves molecules against a concentration gradient using ATP.'
          ]
        },
        questions: [
          {
            id: 'b3_q1',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'What is the definition of osmosis in biology?',
            options: ['The net movement of water molecules from a region of higher water potential to lower water potential through a partially permeable membrane', 'The movement of minerals against a concentration gradient', 'The diffusion of gases in lungs', 'The active pumping of glucose'],
            correctAnswer: 'The net movement of water molecules from a region of higher water potential to lower water potential through a partially permeable membrane',
            explanation: 'Osmosis is the specialized passive diffusion of water across selectively permeable boundaries.'
          },
          {
            id: 'b3_q2',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'What happens to human red blood cells when placed into a beaker of distilled pure water?',
            options: ['They take in water by osmosis, swell, and burst (lysis)', 'They shrivel and shrink', 'They remain unchanged', 'They form a protective shell'],
            correctAnswer: 'They take in water by osmosis, swell, and burst (lysis)',
            explanation: 'Animal cells lack a protective rigid cell wall to resist osmotic influx.'
          },
          {
            id: 'b3_q3',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'What biological process requires energy from respiration (ATP) to move molecules against a concentration gradient?',
            options: ['Active transport', 'Diffusion', 'Osmosis', 'Evaporation'],
            correctAnswer: 'Active transport',
            explanation: 'Carrier protein pumps require metabolic energy (ATP) to transport substances against gradient.'
          },
          {
            id: 'b3_q4',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'What term describes a plant cell whose cytoplasm and vacuole have shrunk away from the cell wall in a concentrated salt solution?',
            options: ['Plasmolysed', 'Turgid', 'Lysed', 'Hypotonic'],
            correctAnswer: 'Plasmolysed',
            explanation: 'Severe water loss causes plasmolysis, where the protoplast detaches from the cell wall.'
          },
          {
            id: 'b3_q5',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'Which of the following processes in living organisms relies directly on active transport?',
            options: ['Uptake of mineral nitrate and potassium ions by plant root hair cells from low-concentration soil', 'Absorption of oxygen in the alveoli', 'Carbon dioxide entering leaf stomata', 'Water entering roots by osmosis'],
            correctAnswer: 'Uptake of mineral nitrate and potassium ions by plant root hair cells from low-concentration soil',
            explanation: 'Soil minerals are often at much lower concentrations than root cell sap, requiring active pumping.'
          },
          {
            id: 'b3_q6',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'How does increasing temperature affect the rate of diffusion across a cell membrane?',
            options: ['Increases rate because particles possess more kinetic energy and move faster', 'Decreases rate', 'Stops diffusion completely', 'Destroys the molecules'],
            correctAnswer: 'Increases rate because particles possess more kinetic energy and move faster',
            explanation: 'Thermal energy increases molecular velocity, speeding up net dispersion.'
          },
          {
            id: 'b3_q7',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'A dialysis (Visking) tubing bag filled with starch and glucose solution is placed in a beaker of water. What passes through the tubing into the water?',
            options: ['Glucose passes through because it is a small molecule; starch cannot pass because it is a large polymer', 'Starch passes through', 'Both pass through', 'Neither passes through'],
            correctAnswer: 'Glucose passes through because it is a small molecule; starch cannot pass because it is a large polymer',
            explanation: 'Visking tubing acts as a partially permeable membrane with microscopic pore cutoffs.'
          },
          {
            id: 'b3_q8',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'What is turgor pressure in plant tissues?',
            options: ['The outward pressure exerted by the swollen cell contents against the rigid cell wall', 'The atmospheric pressure on leaves', 'Root pressure alone', 'Capillary water tension'],
            correctAnswer: 'The outward pressure exerted by the swollen cell contents against the rigid cell wall',
            explanation: 'Turgor pressure provides mechanical support keeping non-woody plant stems upright.'
          },
          {
            id: 'b3_q9',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'Which factor would DECREASE the rate of diffusion of gas into a cell?',
            options: ['Increasing diffusion distance (thicker membrane barrier)', 'Increasing surface area', 'Increasing concentration difference', 'Increasing temperature'],
            correctAnswer: 'Increasing diffusion distance (thicker membrane barrier)',
            explanation: 'Fick\'s Law: Rate is inversely proportional to diffusion path length.'
          },
          {
            id: 'b3_q10',
            subtopicId: 'biology_3',
            type: 'multiple_choice',
            question: 'What liquid has the highest possible water potential?',
            options: ['Pure distilled water (0 kPa)', '10% sucrose solution', 'Sea water', 'Cell sap'],
            correctAnswer: 'Pure distilled water (0 kPa)',
            explanation: 'Pure water has the maximum water potential of zero; any dissolved solute makes it negative.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch4',
    subjectId: 'biology',
    number: 4,
    title: 'Biological Molecules',
    description: 'Carbohydrates, lipids, proteins, DNA, and food tests.',
    subtopics: [
      {
        id: 'biology_4',
        chapterId: 'bio_ch4',
        subjectId: 'biology',
        code: '4',
        title: 'Biological Molecules and Food Tests',
        description: 'Nutrient polymers, Benedict’s, iodine, biuret, and ethanol emulsion tests.',
        durationMinutes: 12,
        experience: {
          type: 'food_forensics',
          title: 'Food Forensics Biochemical Analysis Lab',
          scenario: 'A forensic nutritional laboratory investigates four unknown mystery food powders.',
          prompt: 'Apply chemical reagents: Iodine solution for starch (orange-brown to blue-black), Benedict\'s reagent with water bath heating for reducing sugars (blue to brick-red), Biuret test for protein (blue to violet), and Ethanol emulsion for lipids (white milky layer).',
          goal: 'Identify the exact nutritional macromolecule profile of all 4 unknown food samples.'
        },
        lesson: {
          whatHappened: 'Starch turned iodine solution blue-black. Heating with Benedict\'s solution produced a brick-red precipitate for reducing sugars. Protein formed a purple complex with Biuret reagent, and fats formed an emulsion in water.',
          academicConcept: 'Carbohydrates: Made of Carbon, Hydrogen, Oxygen (CHO). Monomers: Simple sugars (glucose C₆H₁₂O₆). Polymers: Starch, glycogen, cellulose. Proteins: Made of Carbon, Hydrogen, Oxygen, Nitrogen, and sulfur (CHONS). Monomers: Amino acids. Lipids (fats/oils): Made of CHO (1 glycerol + 3 fatty acids). DNA: Double helix composed of nucleotides (A pairs with T, C pairs with G). Food Tests: (1) Starch: Iodine solution (brown → blue-black). (2) Reducing sugar (glucose): Benedict\'s reagent + heat at 80°C (blue → green → yellow → brick-red precipitate). (3) Protein: Biuret reagent (blue → violet/purple). (4) Lipids: Ethanol emulsion test (dissolve in ethanol, pour into cold water → milky white emulsion). (5) Vitamin C: DCPIP test (decolorizes blue DCPIP).',
          interactiveDiagram: {
            title: 'Biochemical Food Tests Spectrum',
            caption: 'Iodine (blue-black) · Benedict\'s + heat (brick-red) · Biuret (violet) · Ethanol (milky emulsion)',
            keyPoints: [
              'Starch test: Iodine solution turns from orange-brown to intense blue-black.',
              'Benedict’s test: Requires heating in a water bath at 80°C; colour shows sugar concentration.',
              'Biuret test: Detects peptide bonds in proteins, turning from pale blue to lilac/violet.',
              'Lipid emulsion: Lipids dissolve in ethanol but precipitate as tiny microscopic droplets in water.'
            ]
          },
          workedExample: {
            title: 'Interpreting a Table of Food Test Results',
            problem: 'Food Sample X gives: Iodine: Blue-black. Benedict\'s: Stays blue. Biuret: Stays blue. Ethanol: Clear. Identify the macromolecule present.',
            stepByStep: [
              { step: 'Iodine test', detail: 'Positive for starch (blue-black)' },
              { step: 'Benedict\'s test', detail: 'Negative for reducing sugars (remained blue)' },
              { step: 'Biuret & Ethanol', detail: 'Negative for proteins and lipids' },
              { step: 'Conclusion', detail: 'Sample X contains starch and no reducing sugars, proteins, or lipids.' }
            ],
            keyTakeaway: 'Always cross-reference specific color changes with the corresponding macromolecule.'
          },
          quickChallenge: {
            prompt: 'Which food test strictly requires heating in a hot water bath (approx 80°C) to observe a color change?',
            options: ['Benedict\'s test for reducing sugars', 'Iodine test for starch', 'Biuret test for protein', 'Ethanol emulsion test for fats'],
            correctIndex: 0,
            explanation: 'The reduction of copper(II) ions by aldehyde/ketone groups in reducing sugars requires thermal activation in a water bath.'
          },
          summary: [
            'Carbohydrates = simple sugars; Proteins = amino acids; Lipids = glycerol + fatty acids.',
            'Starch: Iodine turns blue-black; Glucose: Benedict\'s + heat turns brick-red.',
            'Protein: Biuret turns purple; Lipids: Ethanol produces milky emulsion.'
          ]
        },
        questions: [
          {
            id: 'b4_q1',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What color change indicates a positive result for starch using iodine solution?',
            options: ['From orange-brown to blue-black', 'From blue to brick-red', 'From clear to purple', 'From yellow to green'],
            correctAnswer: 'From orange-brown to blue-black',
            explanation: 'Iodine intercalates inside the helical amylose starch polymer, producing an intense blue-black complex.'
          },
          {
            id: 'b4_q2',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What reagent is used to test for proteins in a food sample, and what is the positive color change?',
            options: ['Biuret reagent, turning from pale blue to violet / purple', 'Benedict\'s reagent, turning green', 'Iodine turning yellow', 'Ethanol turning clear'],
            correctAnswer: 'Biuret reagent, turning from pale blue to violet / purple',
            explanation: 'Copper(II) ions in alkaline Biuret solution chelate with peptide bonds to form a violet complex.'
          },
          {
            id: 'b4_q3',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'How do you perform the ethanol emulsion test for lipids (fats)?',
            options: ['Dissolve sample in ethanol, pour into cold water; a cloudy milky-white emulsion indicates lipids', 'Boil with acid', 'Add iodine', 'Heat with Benedict\'s'],
            correctAnswer: 'Dissolve sample in ethanol, pour into cold water; a cloudy milky-white emulsion indicates lipids',
            explanation: 'Lipids dissolve in alcohol but are insoluble in water, forming a scattering micro-droplet emulsion.'
          },
          {
            id: 'b4_q4',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What chemical elements are present in all protein molecules that are NOT present in pure carbohydrates?',
            options: ['Nitrogen and often Sulfur', 'Carbon and Oxygen', 'Hydrogen only', 'Phosphorus only'],
            correctAnswer: 'Nitrogen and often Sulfur',
            explanation: 'Carbohydrates and lipids contain only C, H, and O; amino acids always contain Nitrogen.'
          },
          {
            id: 'b4_q5',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What are the basic monomer building blocks of proteins?',
            options: ['Amino acids', 'Simple sugars (glucose)', 'Fatty acids and glycerol', 'Nucleotides'],
            correctAnswer: 'Amino acids',
            explanation: '20 different amino acids link via peptide bonds to form polypeptide protein chains.'
          },
          {
            id: 'b4_q6',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What complementary base pairs link the two strands of a DNA double helix together?',
            options: ['Adenine with Thymine (A-T), and Cytosine with Guanine (C-G)', 'A with C, and T with G', 'A with G, and T with C', 'All bases pair with any base'],
            correctAnswer: 'Adenine with Thymine (A-T), and Cytosine with Guanine (C-G)',
            explanation: 'Hydrogen bonds form between complementary bases: A pairs with T (2 bonds), C pairs with G (3 bonds).'
          },
          {
            id: 'b4_q7',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What is the storage carbohydrate in animal liver and muscle cells?',
            options: ['Glycogen', 'Starch', 'Cellulose', 'Sucrose'],
            correctAnswer: 'Glycogen',
            explanation: 'Animals store glucose as branched glycogen; plants store glucose as starch.'
          },
          {
            id: 'b4_q8',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'In the Benedict\'s test, what sequence of colors indicates increasing concentrations of reducing sugar?',
            options: ['Blue (none) → Green → Yellow → Orange → Brick-red precipitate (high)', 'Red → Blue → Clear', 'Purple → Yellow → Blue', 'Colorless → Black'],
            correctAnswer: 'Blue (none) → Green → Yellow → Orange → Brick-red precipitate (high)',
            explanation: 'The amount of cuprous oxide precipitate increases proportionally with sugar concentration.'
          },
          {
            id: 'b4_q9',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What test reagent is used to detect Vitamin C (ascorbic acid), and what is the positive result?',
            options: ['DCPIP solution decolourises from blue to colorless', 'Benedict\'s turns purple', 'Iodine turns white', 'Biuret turns green'],
            correctAnswer: 'DCPIP solution decolourises from blue to colorless',
            explanation: 'Vitamin C is a reducing agent that reduces and bleaches blue DCPIP.'
          },
          {
            id: 'b4_q10',
            subtopicId: 'biology_4',
            type: 'multiple_choice',
            question: 'What are the two components of a lipid (fat) molecule?',
            options: ['One glycerol molecule and three fatty acid chains', 'Glucose and amino acids', 'Two starches and one oil', 'Nucleic acids and proteins'],
            correctAnswer: 'One glycerol molecule and three fatty acid chains',
            explanation: 'Triglycerides consist of glycerol ester-bonded to three fatty acid chains.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch5',
    subjectId: 'biology',
    number: 5,
    title: 'Enzymes',
    description: 'Biological catalysts, active sites, lock-and-key hypothesis, effects of temperature, and pH.',
    subtopics: [
      {
        id: 'biology_5',
        chapterId: 'bio_ch5',
        subjectId: 'biology',
        code: '5',
        title: 'Enzymes and Reaction Rates',
        description: 'Active site specificity, lock-and-key model, denaturation by heat and extreme pH.',
        durationMinutes: 14,
        experience: {
          type: 'enzyme_kitchen',
          title: 'Virtual Enzyme Kitchen & Reaction Rates',
          scenario: 'A bioreactor kitchen tests digestive enzymes (Amylase and Catalase) under varying conditions.',
          prompt: 'Adjust temperature (0°C to 80°C) and pH (2 to 12). Observe enzyme-substrate collisions, optimum activity peak at 37°C / pH 7, and irreversible active site denaturation at temperatures > 55°C.',
          goal: 'Map the bell-shaped temperature and pH activity curves for human salivary amylase.'
        },
        lesson: {
          whatHappened: 'At low temperatures, molecules had low kinetic energy and collided rarely. At optimum temperature (37°C), reaction rate peaked. Above 50°C, thermal vibrations broke hydrogen bonds in the enzyme protein, permanently altering the active site shape (denaturation).',
          academicConcept: 'Enzymes are biological catalysts made of protein that increase the rate of chemical reactions without being consumed. Lock and Key hypothesis: Substrate is complementary in shape to the specific active site of the enzyme, forming an enzyme-substrate complex. Optimum temperature for human enzymes is ~37°C. High temperatures (>50°C) denature enzymes permanently. Extreme pH shifts also disrupt ionic charges and denature the active site. Pepsin (stomach) has optimum pH ~2; Amylase (saliva) has optimum pH ~7; Trypsin (intestine) has optimum pH ~8.',
          interactiveDiagram: {
            title: 'The Lock-and-Key Mechanism & Denaturation',
            caption: 'Enzyme + Substrate → Enzyme-Substrate Complex → Enzyme + Products; Heat denatures active site',
            keyPoints: [
              'Enzyme specificity: One enzyme catalyzes only one specific reaction because only that substrate fits its active site.',
              'Active site: Specific 3D pocket where the catalytic reaction occurs.',
              'Denaturation: Permanent loss of active site shape; substrate can no longer bind (NOT "killed" because enzymes are proteins, not living organisms).',
              'Substrate concentration increases rate until all active sites become saturated (plateau).'
            ]
          },
          workedExample: {
            title: 'Explaining the Effect of Temperature on Enzyme Activity',
            problem: 'Describe and explain the shape of a graph showing enzyme activity from 0°C to 70°C.',
            stepByStep: [
              { step: '0°C to 37°C', detail: 'Rate increases because kinetic energy increases, leading to more frequent collisions between enzyme active sites and substrate molecules.' },
              { step: 'At 37°C (Optimum)', detail: 'Maximum rate of reaction with highest frequency of successful enzyme-substrate complexes.' },
              { step: 'Above 40°C to 70°C', detail: 'Rate drops rapidly to zero. High thermal energy breaks bonds maintaining the tertiary protein structure, denaturing the active site so substrate no longer fits.' }
            ],
            keyTakeaway: 'Never say enzymes are "killed" by heat; enzymes are chemical proteins and are "denatured".'
          },
          quickChallenge: {
            prompt: 'Why does an enzyme cease to function when heated above 60°C?',
            options: ['The active site permanently changes shape (denatures) so substrate molecules can no longer bind', 'The enzyme is killed', 'The substrate freezes', 'The activation energy becomes zero'],
            correctIndex: 0,
            explanation: 'Thermal energy disrupts weak internal hydrogen and ionic bonds, unraveling the active site geometry so the complementary substrate cannot dock.'
          },
          summary: [
            'Enzymes are proteins that act as biological catalysts.',
            'Lock-and-key model explains substrate specificity at the active site.',
            'High temperatures and extreme pH values cause irreversible denaturation.'
          ]
        },
        questions: [
          {
            id: 'b5_q1',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'What type of biological macromolecule are all enzymes made of?',
            options: ['Proteins', 'Carbohydrates', 'Lipids', 'Nucleic acids'],
            correctAnswer: 'Proteins',
            explanation: 'Enzymes are globular proteins folded into precise 3D tertiary conformations.'
          },
          {
            id: 'b5_q2',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'What is the region on an enzyme molecule where the substrate binds called?',
            options: ['Active site', 'Binding pocket', 'Catalytic pore', 'Receptor node'],
            correctAnswer: 'Active site',
            explanation: 'The active site has a specific shape complementary to the substrate.'
          },
          {
            id: 'b5_q3',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'Why does enzyme activity decline to zero at freezing temperatures (0°C)?',
            options: ['Molecules have very low kinetic energy, resulting in minimal collision frequency (enzyme is inactive but NOT denatured)', 'The enzyme is denatured', 'The substrate is destroyed', 'The water boils'],
            correctAnswer: 'Molecules have very low kinetic energy, resulting in minimal collision frequency (enzyme is inactive but NOT denatured)',
            explanation: 'Cold slows molecular motion; warming restores full enzyme activity.'
          },
          {
            id: 'b5_q4',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'What is the optimum pH for the stomach protease enzyme Pepsin?',
            options: ['pH 1.5 to 2.0 (strongly acidic)', 'pH 7.0 (neutral)', 'pH 8.5 (alkaline)', 'pH 12.0'],
            correctAnswer: 'pH 1.5 to 2.0 (strongly acidic)',
            explanation: 'Pepsin operates in the acidic hydrochloric acid environment of the human stomach.'
          },
          {
            id: 'b5_q5',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'What happens to an enzyme when it is denatured?',
            options: ['The active site changes its 3D shape irreversibly so the substrate no longer fits', 'The enzyme multiplies', 'The enzyme is digested', 'The enzyme turns into fat'],
            correctAnswer: 'The active site changes its 3D shape irreversibly so the substrate no longer fits',
            explanation: 'Denaturation breaks tertiary bonds, destroying active site complementarity.'
          },
          {
            id: 'b5_q6',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'What substrate does the digestive enzyme Amylase break down, and what product does it form?',
            options: ['Starch broken down into Maltose (reducing sugar)', 'Protein into amino acids', 'Fats into fatty acids', 'Cellulose into glucose'],
            correctAnswer: 'Starch broken down into Maltose (reducing sugar)',
            explanation: 'Amylase hydrolyzes starch into maltose disaccharides.'
          },
          {
            id: 'b5_q7',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'Why does increasing substrate concentration eventually reach a maximum rate of reaction (Vmax plateau)?',
            options: ['All enzyme active sites are occupied (saturated) with substrate', 'The substrate runs out', 'The enzyme gets tired', 'The temperature drops'],
            correctAnswer: 'All enzyme active sites are occupied (saturated) with substrate',
            explanation: 'Enzyme active site availability becomes the limiting factor.'
          },
          {
            id: 'b5_q8',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'Which enzyme is responsible for breaking down lipids (fats) into fatty acids and glycerol?',
            options: ['Lipase', 'Protease', 'Amylase', 'Catalase'],
            correctAnswer: 'Lipase',
            explanation: 'Lipase secreted by the pancreas hydrolyzes ester bonds in lipids.'
          },
          {
            id: 'b5_q9',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'What does the enzyme Catalase decompose into harmless water and oxygen bubbles?',
            options: ['Toxic Hydrogen peroxide (H₂O₂)', 'Hydrochloric acid', 'Carbon monoxide', 'Ethanol'],
            correctAnswer: 'Toxic Hydrogen peroxide (H₂O₂)',
            explanation: '2H₂O₂ → 2H₂O + O₂ protects cellular tissues from metabolic peroxide oxidation.'
          },
          {
            id: 'b5_q10',
            subtopicId: 'biology_5',
            type: 'multiple_choice',
            question: 'Why are biological washing powders containing enzymes washed at temperatures around 35°C to 40°C rather than boiling 90°C?',
            options: ['High temperatures (>60°C) denature the enzymes, rendering them useless for removing stains', 'Enzymes work best in cold ice', 'Boiling water stains clothes', 'Enzymes explode in boiling water'],
            correctAnswer: 'High temperatures (>60°C) denature the enzymes, rendering them useless for removing stains',
            explanation: 'Proteases and lipases in biological detergents denature in hot boiling cycles.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch6',
    subjectId: 'biology',
    number: 6,
    title: 'Plant Nutrition',
    description: 'Photosynthesis, chlorophyll, leaf structure, limiting factors, and mineral requirements.',
    subtopics: [
      {
        id: 'biology_6',
        chapterId: 'bio_ch6',
        subjectId: 'biology',
        code: '6',
        title: 'Plant Nutrition and Photosynthesis',
        description: 'Photosynthesis equation, leaf anatomy, limiting factors, and chlorophyll necessity.',
        durationMinutes: 14,
        experience: {
          type: 'greenhouse_manager',
          title: 'Commercial Greenhouse Photosynthesis Manager',
          scenario: 'A high-tech automated commercial greenhouse optimizes tomato crop yields.',
          prompt: 'Tune atmospheric CO₂ concentration (ppm), grow light intensity, temperature, and water irrigation. Count oxygen bubble evolution rates and find the limiting factor ceiling.',
          goal: 'Maximize photosynthesis rate to produce 60 O₂ bubbles/min by balancing light, CO₂, and temperature.'
        },
        lesson: {
          whatHappened: 'Increasing light intensity increased the rate of photosynthesis until CO₂ concentration became the limiting factor. Raising temperature above 45°C denatured photosynthetic enzymes and reduced oxygen production.',
          academicConcept: 'Photosynthesis: Process by which plants synthesize carbohydrates from raw materials using light energy: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light and chlorophyll required). Chlorophyll traps light energy and converts it into chemical energy. Leaf structure: Waxy cuticle (reduces water loss), Upper epidermis (transparent), Palisade mesophyll (dense chloroplasts for maximum light absorption), Spongy mesophyll (air spaces for gas diffusion), Stomata & guard cells (control gas exchange and transpiration). Limiting factors: Light intensity, Carbon dioxide concentration, Temperature. Mineral requirements: Nitrate ions (make amino acids/proteins; deficiency = stunted growth), Magnesium ions (make chlorophyll; deficiency = yellowing leaves / chlorosis).',
          interactiveDiagram: {
            title: 'Leaf Cross-Section & Photosynthesis Pathways',
            caption: 'Palisade layer absorbs light; Spongy layer diffuses CO₂ and O₂ through stomata',
            keyPoints: [
              'Chemical Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
              'Palisade mesophyll: Packed with chloroplasts near the upper leaf surface to capture maximum sunlight.',
              'Stomata: Pores controlled by turgid/flaccid guard cells on the lower epidermis.',
              'Nitrate ions: Essential for amino acids and proteins; Magnesium: Essential for green chlorophyll.'
            ]
          },
          workedExample: {
            title: 'Testing a Leaf for Starch to Prove Photosynthesis Occurred',
            problem: 'Outline the 4 steps to test a green leaf for starch, explaining the purpose of each step.',
            stepByStep: [
              { step: 'Boiling water (1 min)', detail: 'Kills the leaf and disrupts cell membranes to make it permeable to iodine.' },
              { step: 'Warm ethanol in water bath', detail: 'Dissolves and extracts green chlorophyll pigment (leaves leaf pale white so color change is visible).' },
              { step: 'Rinse in warm water', detail: 'Softens the brittle leaf and washes off residual alcohol.' },
              { step: 'Add iodine solution', detail: 'Iodine turns blue-black where starch is present, confirming photosynthesis occurred.' }
            ],
            keyTakeaway: 'Always remember to extinguish Bunsen burners when heating ethanol because ethanol is highly flammable.'
          },
          quickChallenge: {
            prompt: 'What mineral deficiency causes plant leaves to turn yellow between the veins (chlorosis)?',
            options: ['Magnesium ion deficiency (required to synthesize green chlorophyll)', 'Nitrate deficiency', 'Calcium deficiency', 'Iron excess'],
            correctIndex: 0,
            explanation: 'Magnesium sits at the center of the chlorophyll molecule; without it, plants cannot produce green chlorophyll, leading to yellowing chlorosis.'
          },
          summary: [
            'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.',
            'Palisade cells are optimized for light capture; stomata for gas exchange.',
            'Limiting factors are light intensity, CO₂ concentration, and temperature.'
          ]
        },
        questions: [
          {
            id: 'b6_q1',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'What is the balanced chemical equation for photosynthesis?',
            options: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', 'CO₂ + H₂O → C₆H₁₂O₆ + O₂', '6O₂ + 6H₂O → C₆H₁₂O₆ + 6CO₂'],
            correctAnswer: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
            explanation: 'Carbon dioxide and water react using absorbed solar energy to form glucose and oxygen gas.'
          },
          {
            id: 'b6_q2',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'Which tissue layer inside a plant leaf contains the highest density of chloroplasts for absorbing sunlight?',
            options: ['Palisade mesophyll', 'Spongy mesophyll', 'Upper epidermis', 'Waxy cuticle'],
            correctAnswer: 'Palisade mesophyll',
            explanation: 'Palisade cells are tall, column-shaped cells packed with chloroplasts near the top sunlit leaf surface.'
          },
          {
            id: 'b6_q3',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'What is a limiting factor in photosynthesis?',
            options: ['Something present in the environment in such short supply that it restricts the rate of photosynthesis', 'The size of the plant', 'The color of the flower', 'The height of the stem'],
            correctAnswer: 'Something present in the environment in such short supply that it restricts the rate of photosynthesis',
            explanation: 'The reaction rate cannot increase further unless this specific factor is increased.'
          },
          {
            id: 'b6_q4',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'Why do commercial greenhouse growers pump extra carbon dioxide gas into their greenhouses?',
            options: ['CO₂ is often the limiting factor on sunny days; boosting CO₂ increases photosynthesis and crop yields', 'CO₂ kills insect pests', 'CO₂ makes the greenhouse warmer only', 'Plants breathe CO₂ for respiration'],
            correctAnswer: 'CO₂ is often the limiting factor on sunny days; boosting CO₂ increases photosynthesis and crop yields',
            explanation: 'Atmospheric CO₂ is only 0.04%; elevating it to 0.1% accelerates photosynthetic glucose production.'
          },
          {
            id: 'b6_q5',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'What is the function of stomata on the underside of leaves?',
            options: ['Allow carbon dioxide to diffuse into the leaf and oxygen/water vapor to diffuse out', 'Absorb liquid water directly from rain', 'Absorb sunlight', 'Prevent insects from entering'],
            correctAnswer: 'Allow carbon dioxide to diffuse into the leaf and oxygen/water vapor to diffuse out',
            explanation: 'Stomatal pores facilitate gas exchange and regulate transpiration.'
          },
          {
            id: 'b6_q6',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'What role do nitrate ions (NO₃⁻) play in plant nutrition?',
            options: ['They provide nitrogen required to synthesize amino acids and proteins for growth', 'They make the plant flower', 'They form cell walls', 'They are used to make starch'],
            correctAnswer: 'They provide nitrogen required to synthesize amino acids and proteins for growth',
            explanation: 'Without nitrates, plants cannot build proteins, resulting in stunted yellowed growth.'
          },
          {
            id: 'b6_q7',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'Why must a leaf be destarched by keeping it in total darkness for 48 hours before a photosynthesis investigation?',
            options: ['To ensure any starch detected during the experiment was synthesized during the experimental period', 'To kill the leaf', 'To soften the cuticle', 'To stop respiration'],
            correctAnswer: 'To ensure any starch detected during the experiment was synthesized during the experimental period',
            explanation: 'In darkness, the plant consumes all pre-existing starch stores through respiration.'
          },
          {
            id: 'b6_q8',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'What gas is collected in an inverted measuring cylinder over an illuminated waterweed (Elodea)?',
            options: ['Oxygen gas', 'Carbon dioxide', 'Hydrogen', 'Nitrogen'],
            correctAnswer: 'Oxygen gas',
            explanation: 'Oxygen is released as a by-product of photolysis during photosynthesis.'
          },
          {
            id: 'b6_q9',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'What happens to the rate of photosynthesis if temperature rises above 45°C?',
            options: ['It drops sharply to zero because photosynthetic enzymes are denatured', 'It increases infinitely', 'It stays constant', 'It doubles every 10 degrees'],
            correctAnswer: 'It drops sharply to zero because photosynthetic enzymes are denatured',
            explanation: 'Photosynthesis is catalyzed by enzymes (like RuBisCO) that denature at high temperatures.'
          },
          {
            id: 'b6_q10',
            subtopicId: 'biology_6',
            type: 'multiple_choice',
            question: 'Why is glucose converted into insoluble starch for storage inside plant cells?',
            options: ['Starch is insoluble and does not exert an osmotic effect on cell water potential', 'Starch is smaller than glucose', 'Glucose is poisonous to plants', 'Starch conducts electricity'],
            correctAnswer: 'Starch is insoluble and does not exert an osmotic effect on cell water potential',
            explanation: 'Soluble glucose would lower cell water potential, causing excessive water influx by osmosis.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch7',
    subjectId: 'biology',
    number: 7,
    title: 'Human Nutrition',
    description: 'Diet, carbohydrates, fats, proteins, vitamins, minerals, fibre, water, digestive system, and enzymes.',
    subtopics: [
      {
        id: 'biology_7',
        chapterId: 'bio_ch7',
        subjectId: 'biology',
        code: '7',
        title: 'Human Nutrition and the Digestive System',
        description: 'Balanced diet, deficiency diseases, alimentary canal organs, mechanical vs chemical digestion.',
        durationMinutes: 14,
        experience: {
          type: 'lunchbox_builder',
          title: 'Lunchbox Nutrition & Digestion Simulator',
          scenario: 'A clinical dietitian plans balanced meal plans for an athlete and tracks their digestive journey.',
          prompt: 'Balance daily macronutrients: Carbohydrates (energy), Lipids, Proteins (growth/repair), Vitamin C (scurvy prevention), Vitamin D & Calcium (rickets prevention), Iron (anaemia prevention), and dietary fibre. Follow food breakdown through the stomach, duodenum, ileum, and colon.',
          goal: 'Construct a 2,200 kcal balanced lunchbox meeting all 7 nutritional classes with zero vitamin deficiencies.'
        },
        lesson: {
          whatHappened: 'A balanced diet supplied energy and building blocks without deficiency. In the digestive tract, physical teeth chewing and stomach churning increased surface area for digestive enzymes, while bile emulsified fats.',
          academicConcept: 'A balanced diet contains all 7 nutrient classes in correct proportions: Carbohydrates, Fats, Proteins, Vitamins (C and D), Minerals (Calcium and Iron), Dietary Fibre, and Water. Deficiency diseases: Scurvy (Vitamin C deficiency: bleeding gums), Rickets (Vitamin D / Calcium deficiency: soft, bowed bones), Anaemia (Iron deficiency: low hemoglobin, fatigue), Kwashiorkor (Protein deficiency: swollen abdomen). Digestion: Breakdown of large insoluble food molecules into small soluble molecules. Alimentary canal: Mouth → Oesophagus → Stomach (pepsin, HCl) → Duodenum (bile, amylase, trypsin, lipase) → Ileum (absorption via villi) → Colon (water absorption) → Rectum. Villi adapt the ileum for absorption: large surface area, microvilli, thin one-cell epithelium, dense capillary network, lacteal for fat absorption.',
          interactiveDiagram: {
            title: 'The Human Alimentary Canal & Villi Structure',
            caption: 'Mouth → Stomach → Small Intestine (Villi absorb nutrients) → Large Intestine (Water reabsorption)',
            keyPoints: [
              'Bile: Produced in liver, stored in gallbladder; neutralises stomach acid and emulsifies fats (increases surface area).',
              'Peristalsis: Waves of circular and longitudinal muscular contractions pushing food along the gut.',
              'Villi: Tiny finger-like projections in the small intestine featuring lacteals and capillary networks.',
              'Mechanical digestion: Chewing, churning, emulsification (NO chemical bonds broken).'
            ]
          },
          workedExample: {
            title: 'Explaining How Villi Adapt the Small Intestine for Absorption',
            problem: 'Describe 3 structural adaptations of villi in the ileum that maximize the rate of absorption of digested nutrients.',
            stepByStep: [
              { step: 'Surface Area', detail: 'Millions of finger-like villi and microvilli provide a massive surface area for diffusion and active transport.' },
              { step: 'Diffusion Distance', detail: 'The wall of the villus is only one cell thick (thin epithelium), minimizing diffusion distance.' },
              { step: 'Concentration Gradient', detail: 'Dense capillary blood supply and central lacteal constantly carry absorbed nutrients away, maintaining steep concentration gradients.' }
            ],
            keyTakeaway: 'Villi satisfy Fick\'s Law: maximum surface area, minimal diffusion distance, and maintained concentration gradients.'
          },
          quickChallenge: {
            prompt: 'What role does bile play in the digestion of fats?',
            options: ['It emulsifies large fat globules into tiny droplets to increase surface area for lipase enzymes, and neutralises acidic chyme from the stomach', 'It chemically breaks fats into amino acids', 'It is an enzyme that digests starch', 'It converts fat into water'],
            correctIndex: 0,
            explanation: 'Bile is an alkaline fluid that performs physical emulsification, breaking large lipid droplets into micro-droplets without breaking chemical ester bonds.'
          },
          summary: [
            'A balanced diet includes carbohydrates, proteins, fats, vitamins, minerals, fibre, and water.',
            'Bile neutralises acid and emulsifies fats; enzymes perform chemical digestion.',
            'Villi in the small intestine absorb nutrients with high surface area and thin walls.'
          ]
        },
        questions: [
          {
            id: 'b7_q1',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What deficiency disease is caused by a severe lack of Vitamin C in the diet?',
            options: ['Scurvy (bleeding gums, poor wound healing)', 'Rickets (bowed leg bones)', 'Anaemia (pale skin and fatigue)', 'Kwashiorkor'],
            correctAnswer: 'Scurvy (bleeding gums, poor wound healing)',
            explanation: 'Vitamin C is essential for collagen synthesis; deficiency causes scurvy.'
          },
          {
            id: 'b7_q2',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What mineral is a vital component of hemoglobin in red blood cells to transport oxygen?',
            options: ['Iron', 'Calcium', 'Sodium', 'Magnesium'],
            correctAnswer: 'Iron',
            explanation: 'Iron sits in the heme prosthetic group binding O₂; iron deficiency causes anaemia.'
          },
          {
            id: 'b7_q3',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'Where is bile produced and where is it stored before being released into the duodenum?',
            options: ['Produced in the liver, stored in the gallbladder', 'Produced in pancreas, stored in liver', 'Produced in stomach, stored in spleen', 'Produced in kidneys'],
            correctAnswer: 'Produced in the liver, stored in the gallbladder',
            explanation: 'The liver synthesizes bile, which is concentrated and stored in the gallbladder.'
          },
          {
            id: 'b7_q4',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What is the function of hydrochloric acid in the human stomach?',
            options: ['Kills harmful bacteria ingested with food and provides the optimal acidic pH (~2) for pepsin protease', 'Digests fats directly', 'Absorbs water', 'Neutralises bile'],
            correctAnswer: 'Kills harmful bacteria ingested with food and provides the optimal acidic pH (~2) for pepsin protease',
            explanation: 'Gastric acid denatures foreign proteins, kills pathogens, and activates pepsinogen to pepsin.'
          },
          {
            id: 'b7_q5',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What is peristalsis in the alimentary canal?',
            options: ['Waves of rhythmic contraction and relaxation of longitudinal and circular muscles that push food along the gut', 'Enzymatic digestion of starch', 'Chewing food with molars', 'Absorption of vitamins'],
            correctAnswer: 'Waves of rhythmic contraction and relaxation of longitudinal and circular muscles that push food along the gut',
            explanation: 'Antagonistic circular and longitudinal smooth muscle contractions propel the bolus/chyme.'
          },
          {
            id: 'b7_q6',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What vessel in the center of an intestinal villus absorbs digested fatty acids and glycerol into the lymphatic system?',
            options: ['Lacteal', 'Blood capillary', 'Hepatic vein', 'Artery'],
            correctAnswer: 'Lacteal',
            explanation: 'Lacteals are specialized lymphatic capillaries that absorb lipids as chylomicrons.'
          },
          {
            id: 'b7_q7',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What is the primary function of the colon (large intestine)?',
            options: ['Reabsorption of water and mineral salts from undigested food residue', 'Protein digestion', 'Lipid breakdown', 'Production of insulin'],
            correctAnswer: 'Reabsorption of water and mineral salts from undigested food residue',
            explanation: 'The colon reabsorbs ~90% of water and electrolytes, forming firm feces.'
          },
          {
            id: 'b7_q8',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'What deficiency condition results in weak, soft, deformed bones in children due to lack of Vitamin D and Calcium?',
            options: ['Rickets', 'Scurvy', 'Goitre', 'Night blindness'],
            correctAnswer: 'Rickets',
            explanation: 'Vitamin D facilitates calcium absorption into bone matrix; deficiency leads to rickets.'
          },
          {
            id: 'b7_q9',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'Why is dietary fiber (roughage) an essential component of a healthy diet?',
            options: ['It adds bulk to the food, stimulating gut muscles and preventing constipation and bowel disease', 'It provides high energy', 'It breaks down into protein', 'It dissolves cholesterol'],
            correctAnswer: 'It adds bulk to the food, stimulating gut muscles and preventing constipation and bowel disease',
            explanation: 'Insoluble plant cellulose stimulates efficient peristaltic contractions.'
          },
          {
            id: 'b7_q10',
            subtopicId: 'biology_7',
            type: 'multiple_choice',
            question: 'Which tooth type in humans has a chisel-shaped edge adapted for biting and cutting off pieces of food?',
            options: ['Incisor', 'Canine', 'Premolar', 'Molar'],
            correctAnswer: 'Incisor',
            explanation: 'Incisors cut food; canines tear; premolars and molars crush and grind.'
          }
        ]
      }
    ]
  }
];
