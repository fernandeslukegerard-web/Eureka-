import { Chapter } from '../../types';

export const biologyPart2Chapters: Chapter[] = [
  {
    id: 'bio_ch8',
    subjectId: 'biology',
    number: 8,
    title: 'Transport in Plants',
    description: 'Xylem, phloem, water absorption by root hairs, transpiration, and translocation.',
    subtopics: [
      {
        id: 'biology_8',
        chapterId: 'bio_ch8',
        subjectId: 'biology',
        code: '8',
        title: 'Transport in Plants and Transpiration',
        description: 'Xylem water transport, transpiration stream, potometer, and phloem translocation of sucrose.',
        durationMinutes: 14,
        experience: {
          type: 'plant_water_pipeline',
          title: 'Plant Water Pipeline & Transpiration Lab',
          scenario: 'Trace water molecules journeying from soil moisture, across root cortex, up xylem vessels, to leaf stomata.',
          prompt: 'Operate an environmental chamber with a bubble potometer: vary wind speed (fan), temperature, humidity, and light intensity. Measure water uptake rates and observe transpiration pull in xylem.',
          goal: 'Demonstrate how high temperature and windy conditions maximize transpiration water uptake.'
        },
        lesson: {
          whatHappened: 'Water evaporated from spongy mesophyll cells into air spaces and diffused out through open stomata. This created negative tension (transpiration pull) drawing a continuous column of water up dead, hollow xylem vessels held together by cohesion.',
          academicConcept: 'Xylem: Transports water and dissolved mineral ions upward from roots to leaves (one-way flow). Made of dead, hollow cells strengthened with waterproof lignin. Phloem: Transports sucrose and amino acids from sources (leaves/storage organs) to sinks (growing shoots, roots, fruits) via active translocation (two-way flow). Transpiration: Loss of water vapor from plant leaves by evaporation at surfaces of mesophyll cells followed by diffusion of water vapor through stomata. Factors increasing transpiration rate: (1) Higher temperature, (2) Higher wind speed, (3) Higher light intensity (opens stomata), (4) LOWER humidity (steeper water vapor concentration gradient). Potometer: Measures water uptake rate as an estimate of transpiration.',
          interactiveDiagram: {
            title: 'Xylem Vessel & Transpiration Pull Dynamics',
            caption: 'Root hair osmosis → Xylem capillary column (cohesion & adhesion) → Stomatal transpiration',
            keyPoints: [
              'Xylem vessels: Dead, hollow tubes with no end walls, lignified for structural rigidity against collapse.',
              'Phloem sieve tubes: Living cells with perforated sieve plates and companion cells providing ATP.',
              'Cohesion: Water molecules stick to each other by hydrogen bonds, forming an unbroken water column.',
              'Translocation: Transport of sucrose and amino acids in phloem from source to sink.'
            ]
          },
          workedExample: {
            title: 'Measuring Transpiration Rate with a Bubble Potometer',
            problem: 'In a potometer, an air bubble moves 45 mm along a calibrated capillary tube in 15 minutes. Calculate the rate of water uptake in mm/min.',
            stepByStep: [
              { step: 'Formula', detail: 'Rate = Distance moved by bubble / Time taken' },
              { step: 'Calculation', detail: 'Rate = 45 mm / 15 min = 3.0 mm/min', math: '\\text{Rate} = \\frac{45}{15} = 3.0\\text{ mm/min}' }
            ],
            keyTakeaway: 'Potometers measure water uptake, which closely approximates the transpiration rate under steady conditions.'
          },
          quickChallenge: {
            prompt: 'Which combination of environmental conditions will result in the HIGHEST rate of transpiration in a leafy plant shoot?',
            options: ['Hot, dry, windy, and brightly lit conditions', 'Cold, humid, and dark conditions', 'Cold, calm, and wet conditions', 'High humidity and no wind'],
            correctIndex: 0,
            explanation: 'High temperature and bright light open stomata and accelerate evaporation; low humidity and wind maintain a steep water vapor diffusion gradient.'
          },
          summary: [
            'Xylem transports water and minerals up the stem via the transpiration stream.',
            'Phloem translocates sucrose and amino acids from source to sink.',
            'Transpiration increases with heat, light, wind, and dry air.'
          ]
        },
        questions: [
          {
            id: 'b8_q1',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What is the biological definition of transpiration?',
            options: ['Loss of water vapor from plant leaves by evaporation at the surface of mesophyll cells followed by diffusion through stomata', 'Absorption of water by roots', 'Transport of sugars in phloem', 'Photosynthesis in chloroplasts'],
            correctAnswer: 'Loss of water vapor from plant leaves by evaporation at the surface of mesophyll cells followed by diffusion through stomata',
            explanation: 'Transpiration is the evaporative loss of water vapor primarily through leaf stomata.'
          },
          {
            id: 'b8_q2',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What structural substance lines and reinforces the walls of xylem vessels to prevent them from collapsing under tension?',
            options: ['Lignin', 'Cellulose only', 'Keratin', 'Starch'],
            correctAnswer: 'Lignin',
            explanation: 'Woody, waterproof lignin rings and spirals provide structural strength to xylem tubes.'
          },
          {
            id: 'b8_q3',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What substances are transported through the phloem tissue in plants during translocation?',
            options: ['Sucrose and amino acids', 'Water and mineral nitrates only', 'Glucose and starch', 'Oxygen and carbon dioxide'],
            correctAnswer: 'Sucrose and amino acids',
            explanation: 'Phloem translocates soluble sucrose disaccharides and amino acids between sources and sinks.'
          },
          {
            id: 'b8_q4',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'Why does increased wind speed cause the rate of transpiration to increase?',
            options: ['It blows away humid water vapor from around stomata, maintaining a steep concentration gradient', 'It cools the leaf down', 'It forces stomata to close', 'It pumps water into roots'],
            correctAnswer: 'It blows away humid water vapor from around stomata, maintaining a steep concentration gradient',
            explanation: 'Wind prevents a stagnant boundary layer of moisture from building up around leaf pores.'
          },
          {
            id: 'b8_q5',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What property of water molecules allows them to be pulled up tall tree xylem trunks in an unbroken continuous column?',
            options: ['Cohesion between water molecules due to hydrogen bonding', 'High density', 'Viscosity', 'Low surface tension'],
            correctAnswer: 'Cohesion between water molecules due to hydrogen bonding',
            explanation: 'Cohesion holds water molecules together in a continuous hydraulic thread under tension.'
          },
          {
            id: 'b8_q6',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'In a vascular bundle of a dicotyledonous plant stem, where is the xylem located relative to the phloem?',
            options: ['Xylem is on the inside, phloem is on the outside', 'Phloem is on the inside', 'They are randomly mixed', 'Xylem is only in roots'],
            correctAnswer: 'Xylem is on the inside, phloem is on the outside',
            explanation: 'In stem vascular bundles, xylem lies toward the central pith and phloem faces the cortex.'
          },
          {
            id: 'b8_q7',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What is a "sink" in the context of plant phloem translocation?',
            options: ['A region of the plant that consumes or stores sugars (e.g. developing fruit, growing root tips)', 'A leaf producing glucose', 'A dead cell', 'The flower petals only'],
            correctAnswer: 'A region of the plant that consumes or stores sugars (e.g. developing fruit, growing root tips)',
            explanation: 'Sinks import sugars for metabolic use or convert them to insoluble storage reserves.'
          },
          {
            id: 'b8_q8',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'Why should a leafy shoot be cut underwater before being attached to a potometer?',
            options: ['To prevent air bubbles from entering and blocking the xylem capillary vessels', 'To wash the stem', 'To keep the leaves wet', 'To kill bacteria'],
            correctAnswer: 'To prevent air bubbles from entering and blocking the xylem capillary vessels',
            explanation: 'Air entry breaks the cohesive water column (air embolism), halting transpiration pull.'
          },
          {
            id: 'b8_q9',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What happens to the rate of transpiration when the surrounding atmospheric humidity is very high?',
            options: ['Transpiration decreases because the water potential gradient between inside the leaf and outside air is shallow', 'Transpiration increases', 'Transpiration rate doubles', 'Stomata open completely'],
            correctAnswer: 'Transpiration decreases because the water potential gradient between inside the leaf and outside air is shallow',
            explanation: 'High external moisture reduces the vapor concentration driving force.'
          },
          {
            id: 'b8_q10',
            subtopicId: 'biology_8',
            type: 'multiple_choice',
            question: 'What cells control the opening and closing of stomata?',
            options: ['Guard cells', 'Palisade cells', 'Epidermal cells', 'Companion cells'],
            correctAnswer: 'Guard cells',
            explanation: 'Turgid guard cells curve apart to open the stomatal aperture; flaccid guard cells close it.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch9',
    subjectId: 'biology',
    number: 9,
    title: 'Transport in Animals',
    description: 'Circulatory systems, heart anatomy, double circulation, blood vessels, and blood components.',
    subtopics: [
      {
        id: 'biology_9',
        chapterId: 'bio_ch9',
        subjectId: 'biology',
        code: '9',
        title: 'Transport in Animals and the Human Heart',
        description: 'Double circulation, 4-chambered heart, valves, arteries vs veins, and coronary heart disease.',
        durationMinutes: 14,
        experience: {
          type: 'heart_pump',
          title: 'Virtual Human Heart Double Pump Simulator',
          scenario: 'An interactive 3D cardiovascular simulator monitors blood hemodynamics and cardiac cycles.',
          prompt: 'Operate cardiac chambers: trace deoxygenated blood into right atrium/ventricle and out pulmonary artery to lungs. Trace oxygenated blood from pulmonary veins into left atrium/ventricle and pump out the aorta at 120 mmHg. Hear atrioventricular (AV) and semi-lunar (SL) valves snap shut.',
          goal: 'Maintain cardiac output of 5.0 L/min during resting and exercise states without coronary failure.'
        },
        lesson: {
          whatHappened: 'The left ventricle had a vastly thicker muscular wall than the right ventricle because it must pump blood under high pressure to the entire systemic body, while the right ventricle pumps gently to delicate lung capillaries.',
          academicConcept: 'Double circulatory system: Blood passes through the heart twice for every complete circuit of the body (pulmonary circulation to lungs + systemic circulation to body). Heart structure: 4 chambers (Right Atrium, Right Ventricle, Left Atrium, Left Ventricle). Valves (tricuspid, bicuspid, semi-lunar) ensure unidirectional blood flow, preventing backflow. Left ventricle wall is much thicker than right ventricle. Blood vessels: Arteries (thick elastic/muscular walls, narrow lumen, carry high-pressure blood away from heart); Veins (thin walls, wide lumen, valves to prevent backflow, carry low-pressure blood to heart); Capillaries (one-cell-thick walls for rapid diffusion). Blood components: Red blood cells (oxygen transport), White blood cells (phagocytes engulf, lymphocytes make antibodies), Platelets (blood clotting), Plasma (transports dissolved CO₂, urea, hormones, nutrients).',
          interactiveDiagram: {
            title: 'Heart Anatomy & Double Circulatory Loops',
            caption: 'Right side (deoxygenated to lungs); Left side (oxygenated to systemic organs via Aorta)',
            keyPoints: [
              'Vena Cava → Right Atrium → Right Ventricle → Pulmonary Artery → Lungs.',
              'Lungs → Pulmonary Vein → Left Atrium → Left Ventricle → Aorta → Body.',
              'Arteries carry blood AWAY from the heart; Veins carry blood IN to the heart.',
              'Coronary Heart Disease (CHD): Blockage of coronary arteries supplying heart muscle with oxygen, leading to myocardial infarction.'
            ]
          },
          workedExample: {
            title: 'Distinguishing Arteries, Veins, and Capillaries',
            problem: 'Compare the structural adaptations of an artery and a vein in terms of wall thickness, lumen diameter, and internal valves.',
            stepByStep: [
              { step: 'Artery', detail: 'Thick muscular and elastic wall to withstand and buffer high systolic blood pressure; narrow lumen; no valves.' },
              { step: 'Vein', detail: 'Thin muscular wall; wide lumen to minimize resistance to low-pressure flow; contains pocket valves to prevent backward flow.' },
              { step: 'Capillary', detail: 'Microscopic single-layered endothelial wall (one cell thick) to minimize diffusion distance for gas and nutrient exchange.' }
            ],
            keyTakeaway: 'Structure reflects hemodynamic pressure: high pressure requires thick elastic walls; low pressure requires wide lumens and valves.'
          },
          quickChallenge: {
            prompt: 'Why is the muscular wall of the left ventricle significantly thicker than that of the right ventricle?',
            options: ['The left ventricle must generate high pressure to pump blood around the entire systemic body, whereas the right ventricle only pumps to nearby lungs', 'The left ventricle stores fat', 'The left ventricle pumps deoxygenated blood', 'The right ventricle does not contract'],
            correctIndex: 0,
            explanation: 'Systemic vascular resistance is much higher than pulmonary resistance, requiring a thicker myocardium to generate high arterial pressures.'
          },
          summary: [
            'Humans have a double circulation system powered by a 4-chambered heart.',
            'Arteries have thick elastic walls; veins have wide lumens and valves.',
            'Blood contains red blood cells, white blood cells, platelets, and plasma.'
          ]
        },
        questions: [
          {
            id: 'b9_q1',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'Which blood vessel carries oxygenated blood from the lungs directly into the left atrium of the heart?',
            options: ['Pulmonary vein', 'Pulmonary artery', 'Aorta', 'Vena cava'],
            correctAnswer: 'Pulmonary vein',
            explanation: 'The pulmonary vein is the only vein carrying freshly oxygenated blood from lungs to heart.'
          },
          {
            id: 'b9_q2',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What is the function of heart valves (such as atrioventricular and semi-lunar valves)?',
            options: ['To ensure blood flows in one direction only and prevent backflow of blood', 'To oxygenate blood', 'To filter waste', 'To increase heart rate'],
            correctAnswer: 'To ensure blood flows in one direction only and prevent backflow of blood',
            explanation: 'Valves open and snap shut under pressure differentials to enforce unidirectional blood flow.'
          },
          {
            id: 'b9_q3',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What blood vessel supplies oxygen and glucose directly to the cardiac heart muscle itself?',
            options: ['Coronary arteries', 'Carotid artery', 'Renal artery', 'Pulmonary artery'],
            correctAnswer: 'Coronary arteries',
            explanation: 'Coronary arteries branch from the aorta to nourish the working myocardium.'
          },
          {
            id: 'b9_q4',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What blood component is responsible for initiating blood clotting to prevent blood loss and pathogen entry at a wound?',
            options: ['Platelets (cell fragments)', 'Red blood cells', 'Plasma', 'Lymphocytes'],
            correctAnswer: 'Platelets (cell fragments)',
            explanation: 'Platelets trigger fibrin mesh formation, trapping red cells into a scab.'
          },
          {
            id: 'b9_q5',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'Why do veins contain internal pocket valves while arteries do not?',
            options: ['Blood pressure in veins is low, so valves are needed to prevent blood flowing backward under gravity', 'Veins carry oxygen', 'Arteries have thicker blood', 'Veins are closer to the skin'],
            correctAnswer: 'Blood pressure in veins is low, so valves are needed to prevent blood flowing backward under gravity',
            explanation: 'Low venous pressure relies on skeletal muscle pumping and one-way valves to return blood.'
          },
          {
            id: 'b9_q6',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What is a major risk factor contributing to Coronary Heart Disease (CHD)?',
            options: ['Diet high in saturated fats, smoking, lack of exercise, obesity, and chronic stress', 'Drinking pure water', 'Regular cardiovascular exercise', 'Eating fresh vegetables'],
            correctAnswer: 'Diet high in saturated fats, smoking, lack of exercise, obesity, and chronic stress',
            explanation: 'Saturated fats lead to atheroma plaque buildup in coronary arteries, restricting myocardial blood supply.'
          },
          {
            id: 'b9_q7',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What term describes the double circulation in mammals?',
            options: ['Blood passes through the heart twice for every complete circuit of the body', 'The heart has two chambers', 'Blood has two colors', 'The pulse beats twice per second'],
            correctAnswer: 'Blood passes through the heart twice for every complete circuit of the body',
            explanation: 'One loop sends blood through pulmonary circulation; the second loop supplies systemic circulation.'
          },
          {
            id: 'b9_q8',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What is the liquid straw-colored matrix of blood that transports dissolved nutrients, urea, hormones, and heat called?',
            options: ['Plasma', 'Serum', 'Lymph', 'Cytoplasm'],
            correctAnswer: 'Plasma',
            explanation: 'Plasma makes up ~55% of blood volume, carrying dissolved solutes and blood cells.'
          },
          {
            id: 'b9_q9',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'How do capillary walls facilitate rapid diffusion between blood and body tissues?',
            options: ['They are extremely thin (one endothelial cell thick) and have microscopic gaps', 'They have thick muscular walls', 'They have active transport pumps only', 'They contain no blood'],
            correctAnswer: 'They are extremely thin (one endothelial cell thick) and have microscopic gaps',
            explanation: 'Single-layered endothelium minimizes diffusion distance for respiratory gases and glucose.'
          },
          {
            id: 'b9_q10',
            subtopicId: 'biology_9',
            type: 'multiple_choice',
            question: 'What vessel carries deoxygenated blood from the head and upper body directly into the right atrium?',
            options: ['Superior Vena Cava', 'Aorta', 'Hepatic portal vein', 'Jugular artery'],
            correctAnswer: 'Superior Vena Cava',
            explanation: 'The vena cava is the major systemic vein returning venous blood to the right heart.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch10',
    subjectId: 'biology',
    number: 10,
    title: 'Diseases and Immunity',
    description: 'Pathogens, transmissible diseases, immune defence mechanisms, phagocytosis, antibodies, and vaccination.',
    subtopics: [
      {
        id: 'biology_10',
        chapterId: 'bio_ch10',
        subjectId: 'biology',
        code: '10',
        title: 'Diseases and Immunity',
        description: 'Pathogens, physical barriers, phagocytes, lymphocytes, antibodies, and active immunization.',
        durationMinutes: 14,
        experience: {
          type: 'immune_defence',
          title: 'Immune Defence Pathogen Neutralisation Lab',
          scenario: 'A biological pathogen simulator coordinates the body’s cellular defence response.',
          prompt: 'Deploy immune defenses against invading bacteria and influenza viruses: direct Phagocytes to engulf and digest microbes, and activate Lymphocytes to release complementary Y-shaped Antibodies to neutralize viral antigens and create memory cells.',
          goal: 'Neutralize an incoming bacterial infection and demonstrate secondary immune response memory.'
        },
        lesson: {
          whatHappened: 'Phagocytes engulfed bacteria non-specifically via phagocytosis. Lymphocytes recognized foreign surface antigens and produced specific complementary antibodies. Following vaccination, memory cells responded rapidly upon secondary exposure.',
          academicConcept: 'Pathogen: Disease-causing organism (bacteria, virus, fungi, protoctists). Transmissible disease: Pathogen can be passed from one host to another (contact, droplets, contaminated food/water, vectors). Body defences: Mechanical barriers (skin, nasal hairs), Chemical barriers (stomach HCl, lysozyme in tears, mucus). White blood cells: (1) Phagocytes: Engulf pathogens by phagocytosis and digest them with lysosome enzymes (non-specific). (2) Lymphocytes: Produce antibodies complementary to specific antigens on pathogens, causing agglutination and destruction. Memory cells: Provide long-term immunity; upon reinfection, antibodies are produced much faster in greater quantities. Vaccines contain dead or weakened pathogens to induce active immunity without disease.',
          interactiveDiagram: {
            title: 'Phagocytosis & Antibody-Antigen Complementarity',
            caption: 'Phagocyte engulfs pathogen; Lymphocyte synthesizes Y-shaped antibodies matching antigens',
            keyPoints: [
              'Antigen: Distinct protein marker on pathogen surface that triggers an immune response.',
              'Antibody: Y-shaped protein synthesized by lymphocytes complementary to a specific antigen.',
              'Active immunity: Developed after infection or vaccination (produces long-lasting memory cells).',
              'Passive immunity: Short-term defence acquired from pre-made antibodies (e.g. maternal breast milk).'
            ]
          },
          workedExample: {
            title: 'Explaining Secondary Immune Response After Vaccination',
            problem: 'Explain why a person who has received the measles vaccine does not become ill when exposed to live measles virus years later.',
            stepByStep: [
              { step: 'Vaccination', detail: 'The harmless vaccine stimulated lymphocytes to produce specific antibodies and long-lived memory cells.' },
              { step: 'Secondary Exposure', detail: 'When live measles virus enters, memory cells recognize the familiar antigens immediately.' },
              { step: 'Rapid Response', detail: 'Memory cells rapidly clone and produce huge quantities of complementary antibodies before the virus can multiply and cause symptoms.' }
            ],
            keyTakeaway: 'Vaccines confer active immunity by generating immunological memory without causing symptoms of disease.'
          },
          quickChallenge: {
            prompt: 'How do phagocytes destroy invading bacterial cells in the blood?',
            options: ['They engulf the bacteria and digest them internally using enzymes (phagocytosis)', 'They produce antibodies', 'They poison bacteria with stomach acid', 'They shoot electric pulses'],
            correctIndex: 0,
            explanation: 'Phagocytes change shape, flow around the bacterium, ingest it into a phagocytic vacuole, and fuse it with digestive lysosomes.'
          },
          summary: [
            'Pathogens cause transmissible infectious diseases.',
            'Phagocytes engulf pathogens; lymphocytes synthesize specific antibodies.',
            'Vaccines stimulate active immunity and memory cell generation.'
          ]
        },
        questions: [
          {
            id: 'b10_q1',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What is a pathogen defined as in biology?',
            options: ['A disease-causing organism (such as a bacterium, virus, or fungus)', 'Any insect', 'A dead cell', 'A toxic chemical only'],
            correctAnswer: 'A disease-causing organism (such as a bacterium, virus, or fungus)',
            explanation: 'Pathogens are infectious biological agents that cause disease in hosts.'
          },
          {
            id: 'b10_q2',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What type of white blood cell synthesizes antibodies that specifically match foreign antigens?',
            options: ['Lymphocytes', 'Phagocytes', 'Platelets', 'Red blood cells'],
            correctAnswer: 'Lymphocytes',
            explanation: 'B-lymphocytes produce antigen-specific Y-shaped immunoglobulin antibodies.'
          },
          {
            id: 'b10_q3',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What is the main biological advantage of active immunity produced by vaccination over passive immunity?',
            options: ['Active immunity produces long-lived memory cells, providing long-term protection', 'Active immunity works in 2 seconds', 'Active immunity is completely free', 'Active immunity does not require antibodies'],
            correctAnswer: 'Active immunity produces long-lived memory cells, providing long-term protection',
            explanation: 'Memory cells survive for decades, rapidly responding to future infections.'
          },
          {
            id: 'b10_q4',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'How do antibodies destroy or neutralize invading pathogens?',
            options: ['Binding to antigens to cause agglutination (clumping), neutralising toxins, and marking pathogens for phagocytosis', 'Biting them in half', 'Freezing them', 'Absorbing their water'],
            correctAnswer: 'Binding to antigens to cause agglutination (clumping), neutralising toxins, and marking pathogens for phagocytosis',
            explanation: 'Antibodies immobilize pathogens, block cell entry, and signal phagocytes.'
          },
          {
            id: 'b10_q5',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What mechanical barrier prevents pathogens from entering the human body?',
            options: ['Intact unbroken skin and nasal hairs', 'Stomach acid', 'Tears', 'Antibodies'],
            correctAnswer: 'Intact unbroken skin and nasal hairs',
            explanation: 'Intact keratinized epidermis forms a continuous physical mechanical shield.'
          },
          {
            id: 'b10_q6',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What is passive immunity, and where can a newborn infant acquire it naturally?',
            options: ['Short-term immunity acquired from antibodies passed through breast milk and placenta', 'Immunity from eating fruit', 'Immunity that lasts forever', 'Immunity against exercise'],
            correctAnswer: 'Short-term immunity acquired from antibodies passed through breast milk and placenta',
            explanation: 'Maternal antibodies provide immediate passive protection without memory cell formation.'
          },
          {
            id: 'b10_q7',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'Why do antibiotics (like penicillin) kill bacteria but have absolutely NO effect on viruses?',
            options: ['Antibiotics target bacterial cell walls and bacterial ribosomes; viruses lack cell walls and reproduce inside host cells', 'Viruses are too small to be seen', 'Viruses are made of metal', 'Antibiotics feed viruses'],
            correctAnswer: 'Antibiotics target bacterial cell walls and bacterial ribosomes; viruses lack cell walls and reproduce inside host cells',
            explanation: 'Viruses hijack host cell replication machinery, offering no bacterial targets.'
          },
          {
            id: 'b10_q8',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What is an antigen?',
            options: ['A distinctive chemical molecule on the surface of a pathogen that stimulates an immune response', 'An antibiotic medicine', 'A white blood cell', 'A blood clot'],
            correctAnswer: 'A distinctive chemical molecule on the surface of a pathogen that stimulates an immune response',
            explanation: 'Antigens are molecular markers (epitopes) recognized by lymphocytes.'
          },
          {
            id: 'b10_q9',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'How does herd immunity protect vulnerable unimmunized individuals in a population?',
            options: ['When a high percentage of the population is vaccinated, the pathogen cannot spread easily, protecting those who cannot be vaccinated', 'The cows protect humans', 'Vaccinated people breathe out medicine', 'Pathogens evolve into friendly bacteria'],
            correctAnswer: 'When a high percentage of the population is vaccinated, the pathogen cannot spread easily, protecting those who cannot be vaccinated',
            explanation: 'High vaccination coverage eliminates transmission chains in the community.'
          },
          {
            id: 'b10_q10',
            subtopicId: 'biology_10',
            type: 'multiple_choice',
            question: 'What chemical substance in tears and saliva breaks down bacterial cell walls?',
            options: ['Lysozyme enzyme', 'Hydrochloric acid', 'Amylase', 'Pepsin'],
            correctAnswer: 'Lysozyme enzyme',
            explanation: 'Lysozyme is an antimicrobial enzyme hydrolyzing bacterial peptidoglycan walls.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch11',
    subjectId: 'biology',
    number: 11,
    title: 'Gas Exchange in Humans',
    description: 'Respiratory system anatomy, ventilation mechanics, alveoli gas exchange, and smoking effects.',
    subtopics: [
      {
        id: 'biology_11',
        chapterId: 'bio_ch11',
        subjectId: 'biology',
        code: '11',
        title: 'Gas Exchange in Humans and the Lungs',
        description: 'Alveoli adaptations, inhalation vs exhalation mechanics, and tobacco smoke hazards.',
        durationMinutes: 14,
        experience: {
          type: 'lung_dive',
          title: 'Interactive Lung Dive & Alveolar Diffusion Lab',
          scenario: 'A micro-submarine explores the human respiratory bronchial tree into terminal alveoli.',
          prompt: 'Control diaphragm contraction (flattens) and external intercostal muscles (lift ribs) during inhalation to expand lung volume and drop pressure. Zoom into alveoli capillary beds to observe O₂ diffusing into blood and CO₂ diffusing out.',
          goal: 'Demonstrate gas exchange across the alveolar-capillary membrane under exercise and resting ventilation rates.'
        },
        lesson: {
          whatHappened: 'Inhaling required contracting the diaphragm and external intercostals, lowering thorax pressure below atmospheric pressure so air rushed in. In alveoli, oxygen dissolved into thin fluid films and diffused across single-cell walls into capillary blood.',
          academicConcept: 'Ventilation mechanics: Inhalation: External intercostal muscles contract (ribs move up and out), diaphragm contracts and flattens → Thorax volume increases → Pressure decreases below atmospheric pressure → Air enters. Exhalation: External intercostals relax, diaphragm relaxes into dome shape → Thorax volume decreases → Pressure increases → Air forced out. Alveoli adaptations: Huge surface area, thin wall (one squamous cell thick for short diffusion distance), moist lining (gases dissolve), extensive capillary network (maintains steep concentration gradient). Tobacco smoke toxins: Tar (carcinogen causing lung cancer, coats cilia), Carbon monoxide (binds to hemoglobin), Nicotine (addictive stimulant narrowing arteries).',
          interactiveDiagram: {
            title: 'Alveolar Gas Exchange & Ventilation',
            caption: 'Diaphragm flattens → Volume up, Pressure down → Air in; O₂ into blood, CO₂ out',
            keyPoints: [
              'Alveolar adaptations satisfy Fick\'s law: maximum surface area, thin diffusion distance (~1 µm).',
              'Inspired air vs Expired air: Oxygen drops from 21% to 16%; Carbon dioxide increases from 0.04% to 4%.',
              'Water vapor is higher in expired air (saturated).',
              'Limewater test for expired CO₂: Turns cloudy much faster when breathing out through a straw.'
            ]
          },
          workedExample: {
            title: 'Comparing Inspired and Expired Air Composition',
            problem: 'Explain why expired air contains 16% oxygen and 4% carbon dioxide compared to 21% oxygen and 0.04% carbon dioxide in inspired air.',
            stepByStep: [
              { step: 'Oxygen', detail: 'Oxygen diffuses from alveoli into capillary blood where it is transported to body cells for cellular respiration (drops from 21% to 16%).' },
              { step: 'Carbon Dioxide', detail: 'Carbon dioxide is produced by body cells as a waste product of cellular respiration, diffuses into blood, and is exhaled through the lungs (rises from 0.04% to 4%).' }
            ],
            keyTakeaway: 'The gas composition difference reflects cellular aerobic respiration consuming O₂ and producing CO₂.'
          },
          quickChallenge: {
            prompt: 'During inhalation, what happens to the diaphragm and the volume of the chest cavity (thorax)?',
            options: ['The diaphragm contracts and flattens, increasing thorax volume and decreasing thoracic pressure', 'The diaphragm relaxes, decreasing thorax volume', 'The ribs move down and in', 'The lungs push air out'],
            correctIndex: 0,
            explanation: 'Active diaphragm contraction flattens the dome, expanding vertical chest cavity dimensions to draw air inwards.'
          },
          summary: [
            'Inhalation: Diaphragm flattens, volume increases, pressure decreases.',
            'Alveoli have high surface area, thin walls, and dense capillary networks.',
            'Expired air contains less O₂ (~16%) and more CO₂ (~4%) than inspired air.'
          ]
        },
        questions: [
          {
            id: 'b11_q1',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What is the correct pathway of an inhaled oxygen molecule through the respiratory system?',
            options: ['Nose / Mouth → Trachea → Bronchus → Bronchiole → Alveolus', 'Mouth → Bronchus → Trachea → Lung', 'Trachea → Alveolus → Bronchiole', 'Larynx → Esophagus → Stomach'],
            correctAnswer: 'Nose / Mouth → Trachea → Bronchus → Bronchiole → Alveolus',
            explanation: 'Air flows through the trachea, branches into bronchi, subdivides into bronchioles, and terminates in alveoli.'
          },
          {
            id: 'b11_q2',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What muscle movements occur during quiet, restful exhalation?',
            options: ['External intercostal muscles relax and the diaphragm relaxes into a dome shape', 'Diaphragm contracts down', 'Internal intercostals contract forcefully', 'Lungs pump themselves'],
            correctAnswer: 'External intercostal muscles relax and the diaphragm relaxes into a dome shape',
            explanation: 'Restful exhalation is primarily passive, driven by muscle relaxation and elastic lung recoil.'
          },
          {
            id: 'b11_q3',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What is the percentage concentration of oxygen in expired (exhaled) air compared to inspired air?',
            options: ['~16% in expired air (down from ~21% in inspired air)', '~0% in expired air', '~50% in expired air', '~4% in expired air'],
            correctAnswer: '~16% in expired air (down from ~21% in inspired air)',
            explanation: 'Only a fraction of inhaled oxygen is absorbed; expired air still contains ~16% O₂ (making mouth-to-mouth CPR effective).'
          },
          {
            id: 'b11_q4',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What is the primary role of cartilage rings in the human trachea?',
            options: ['To keep the airway open and prevent it from collapsing when air pressure drops during inhalation', 'To filter dust', 'To produce sound', 'To digest food'],
            correctAnswer: 'To keep the airway open and prevent it from collapsing when air pressure drops during inhalation',
            explanation: 'C-shaped cartilage rings provide rigid structural support against negative inhalation pressure.'
          },
          {
            id: 'b11_q5',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'How does tobacco smoke destroy the natural cleaning mechanism of the human respiratory system?',
            options: ['Tar paralyzes and destroys cilia on epithelial cells, preventing the clearing of contaminated mucus', 'Nicotine freezes the blood', 'Carbon monoxide dissolves the trachea', 'Smoke increases oxygen in lungs'],
            correctAnswer: 'Tar paralyzes and destroys cilia on epithelial cells, preventing the clearing of contaminated mucus',
            explanation: 'Paralyzed cilia cannot sweep mucus upward, leading to "smoker\'s cough" and chronic bronchitis.'
          },
          {
            id: 'b11_q6',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What structural disease caused by smoking destroys the alveolar walls, reducing the surface area for gas exchange?',
            options: ['Emphysema', 'Asthma', 'Scurvy', 'Rickets'],
            correctAnswer: 'Emphysema',
            explanation: 'Emphysema breaks down delicate alveolar septa, leaving large air spaces that severely limit O₂ absorption.'
          },
          {
            id: 'b11_q7',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What gas test proves that exhaled breath contains a significantly higher concentration of carbon dioxide than room air?',
            options: ['Bubbling exhaled breath through clear limewater turns it milky white quickly', 'Lighting a match', 'Adding iodine', 'Testing with litmus paper'],
            correctAnswer: 'Bubbling exhaled breath through clear limewater turns it milky white quickly',
            explanation: 'Expired air (~4% CO₂) precipitates calcium carbonate in limewater within seconds.'
          },
          {
            id: 'b11_q8',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'Why do alveoli have a thin film of moisture lining their internal surface?',
            options: ['Gases must dissolve in the fluid layer before diffusing across the alveolar and capillary membranes', 'To cool the lungs', 'To clean bacteria', 'To prevent lungs from drying out only'],
            correctAnswer: 'Gases must dissolve in the fluid layer before diffusing across the alveolar and capillary membranes',
            explanation: 'Gas diffusion across biological membranes requires solute dissolution in aqueous phase.'
          },
          {
            id: 'b11_q9',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'What chemical in cigarette smoke causes physical and psychological addiction?',
            options: ['Nicotine', 'Tar', 'Carbon monoxide', 'Arsenic'],
            correctAnswer: 'Nicotine',
            explanation: 'Nicotine binds acetylcholine receptors in the brain, inducing dopamine release and dependency.'
          },
          {
            id: 'b11_q10',
            subtopicId: 'biology_11',
            type: 'multiple_choice',
            question: 'During exercise, what causes breathing rate and depth to increase automatically?',
            options: ['Increased cellular respiration raises CO₂ concentration in the blood, which is detected by the brain', 'Low sugar in stomach', 'Body temperature dropping', 'Muscles asking for water'],
            correctAnswer: 'Increased cellular respiration raises CO₂ concentration in the blood, which is detected by the brain',
            explanation: 'Chemoreceptors detect blood acidosis (higher H⁺/CO₂), triggering the medulla to increase ventilation.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch12',
    subjectId: 'biology',
    number: 12,
    title: 'Respiration',
    description: 'Cellular respiration, aerobic vs anaerobic pathways, fermentation, and lactic acid oxygen debt.',
    subtopics: [
      {
        id: 'biology_12',
        chapterId: 'bio_ch12',
        subjectId: 'biology',
        code: '12',
        title: 'Cellular Respiration and Energy Release',
        description: 'Aerobic respiration equation, anaerobic respiration in muscles vs yeast, and oxygen debt.',
        durationMinutes: 14,
        experience: {
          type: 'cell_power_station',
          title: 'Mitochondrial Cell Power Station',
          scenario: 'A cellular metabolic control room routes glucose fuel through cellular respiration generators.',
          prompt: 'Manage oxygen supply: in plenty of oxygen, run Aerobic Respiration (Glucose + 6O₂ → 6CO₂ + 6H₂O + 36 ATP). Cut oxygen supply during intense sprint to trigger Anaerobic Respiration (Glucose → Lactic Acid + 2 ATP) and build up an Oxygen Debt.',
          goal: 'Power muscle contraction through a 400m sprint and repay the accumulated oxygen debt during recovery.'
        },
        lesson: {
          whatHappened: 'Aerobic respiration in mitochondria released maximum energy (ATP) per glucose molecule. When oxygen ran short during intense sprinting, cells switched to anaerobic respiration, yielding far less energy and generating toxic lactic acid causing muscle fatigue.',
          academicConcept: 'Respiration is the chemical reaction in cells that breaks down nutrient molecules to release energy for metabolism. Aerobic respiration: Chemical reactions in cells that use oxygen to break down nutrient molecules to release energy: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (releases high energy). Anaerobic respiration: Chemical reactions in cells that break down nutrient molecules to release energy without using oxygen. (1) In human muscles during vigorous exercise: Glucose → Lactic acid (releases much less energy). (2) In yeast (fermentation): Glucose → Ethanol + Carbon dioxide (used in brewing and bread-making). Oxygen debt: Volume of oxygen required after exercise to break down accumulated lactic acid in the liver.',
          interactiveDiagram: {
            title: 'Aerobic vs Anaerobic Metabolic Pathways',
            caption: 'Aerobic (Mitochondria, 36 ATP) vs Anaerobic (Cytoplasm, 2 ATP + Lactic Acid)',
            keyPoints: [
              'Aerobic Equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.',
              'Anaerobic in muscles: Glucose → Lactic acid.',
              'Anaerobic in yeast (fermentation): Glucose → Alcohol (ethanol) + CO₂.',
              'Oxygen debt: Deep breathing after exercise supplies oxygen to the liver to oxidize lactic acid to CO₂ and water.'
            ]
          },
          workedExample: {
            title: 'Explaining Oxygen Debt and Recovery Breathing',
            problem: 'Why does an athlete continue to breathe deeply and rapidly for several minutes after completing a 100m sprint?',
            stepByStep: [
              { step: 'Lactic acid accumulation', detail: 'During the sprint, muscles respired anaerobically due to oxygen shortage, accumulating lactic acid.' },
              { step: 'Oxygen debt payment', detail: 'Extra oxygen is needed to oxidize lactic acid back into pyruvic acid and carbon dioxide/water in the liver, or convert it to glycogen.' },
              { step: 'Outcome', detail: 'Rapid deep breathing repays the oxygen debt and removes accumulated lactic acid to relieve muscle fatigue.' }
            ],
            keyTakeaway: 'The oxygen debt is the volume of extra oxygen required to metabolize lactic acid post-exercise.'
          },
          quickChallenge: {
            prompt: 'What products are formed during anaerobic respiration (fermentation) in yeast cells?',
            options: ['Ethanol (alcohol) and Carbon dioxide gas', 'Lactic acid only', 'Water and Oxygen', 'Glucose and Water'],
            correctIndex: 0,
            explanation: 'Yeast enzymes convert glucose anaerobically into ethanol and CO₂: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.'
          },
          summary: [
            'Aerobic respiration uses oxygen: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.',
            'Anaerobic respiration in muscles produces lactic acid, creating an oxygen debt.',
            'Anaerobic respiration in yeast produces ethanol and CO₂ (fermentation).'
          ]
        },
        questions: [
          {
            id: 'b12_q1',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'What is the balanced equation for aerobic respiration?',
            options: ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C₆H₁₂O₆ → 2 Lactic acid', 'C₆H₁₂O₆ → 2 Ethanol + 2CO₂'],
            correctAnswer: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
            explanation: 'Aerobic cellular respiration combusts glucose with oxygen to yield carbon dioxide, water, and ATP energy.'
          },
          {
            id: 'b12_q2',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'What product builds up in human skeletal muscle tissue during vigorous exercise under anaerobic conditions?',
            options: ['Lactic acid', 'Ethanol', 'Carbon dioxide gas', 'Acetic acid'],
            correctAnswer: 'Lactic acid',
            explanation: 'Incomplete glucose breakdown under oxygen debt yields lactic acid, causing cramps and muscle fatigue.'
          },
          {
            id: 'b12_q3',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'Why does aerobic respiration release vastly more energy per glucose molecule than anaerobic respiration?',
            options: ['Glucose is completely broken down (oxidized) into CO₂ and water in aerobic respiration', 'Anaerobic uses too much oxygen', 'Mitochondria absorb the energy', 'Lactic acid contains zero energy'],
            correctAnswer: 'Glucose is completely broken down (oxidized) into CO₂ and water in aerobic respiration',
            explanation: 'Complete oxidation liberates ~36 ATP, whereas anaerobic fermentation leaves energy locked in lactic acid (~2 ATP).'
          },
          {
            id: 'b12_q4',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'Where in the human body is lactic acid primarily transported and oxidized to repay an oxygen debt?',
            options: ['The Liver', 'The Kidneys', 'The Lungs', 'The Stomach'],
            correctAnswer: 'The Liver',
            explanation: 'Blood carries lactic acid from muscles to the liver for oxidation or reconversion to glycogen.'
          },
          {
            id: 'b12_q5',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'In bread-making, what gas produced by yeast anaerobic respiration causes the dough to rise?',
            options: ['Carbon dioxide (CO₂)', 'Oxygen', 'Hydrogen', 'Nitrogen'],
            correctAnswer: 'Carbon dioxide (CO₂)',
            explanation: 'CO₂ bubbles expand during fermentation and baking, giving bread its light spongy texture.'
          },
          {
            id: 'b12_q6',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'What organelle in eukaryotic cells is the specialized site of aerobic respiration?',
            options: ['Mitochondria', 'Chloroplast', 'Ribosome', 'Nucleus'],
            correctAnswer: 'Mitochondria',
            explanation: 'The Krebs cycle and oxidative phosphorylation take place inside mitochondrial cristae.'
          },
          {
            id: 'b12_q7',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'What is the word equation for anaerobic respiration in yeast?',
            options: ['Glucose → Ethanol + Carbon dioxide', 'Glucose → Lactic acid', 'Glucose + Oxygen → Water', 'Starch → Maltose'],
            correctAnswer: 'Glucose → Ethanol + Carbon dioxide',
            explanation: 'Alcoholic fermentation yields ethanol and CO₂.'
          },
          {
            id: 'b12_q8',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'Which of the following cellular processes requires energy released by respiration?',
            options: ['Muscle contraction, protein synthesis, active transport, and cell division', 'Simple diffusion of oxygen', 'Osmosis of water', 'Evaporation from skin'],
            correctAnswer: 'Muscle contraction, protein synthesis, active transport, and cell division',
            explanation: 'All active physiological work in cells is driven by ATP hydrolyzed from respiration.'
          },
          {
            id: 'b12_q9',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'What apparatus is used to measure the rate of respiration in small living organisms (like germinating seeds or woodlice)?',
            options: ['Respirometer', 'Potometer', 'Barometer', 'Calorimeter'],
            correctAnswer: 'Respirometer',
            explanation: 'A respirometer measures oxygen consumption while soda lime absorbs released CO₂.'
          },
          {
            id: 'b12_q10',
            subtopicId: 'biology_12',
            type: 'multiple_choice',
            question: 'Why does an athlete heart rate remain elevated for several minutes after stopping exercise?',
            options: ['To continue pumping oxygenated blood to the liver to clear lactic acid and replenish oxygen stores', 'The heart cannot slow down', 'To pump extra sugar to muscles', 'To cool the body only'],
            correctAnswer: 'To continue pumping oxygenated blood to the liver to clear lactic acid and replenish oxygen stores',
            explanation: 'Elevated cardiac output maintains perfusion for lactic acid clearance and oxygen debt repayment.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch13',
    subjectId: 'biology',
    number: 13,
    title: 'Excretion in Humans',
    description: 'Kidney anatomy, nephron, ultrafiltration, selective reabsorption, urea formation, and dialysis.',
    subtopics: [
      {
        id: 'biology_13',
        chapterId: 'bio_ch13',
        subjectId: 'biology',
        code: '13',
        title: 'Excretion in Humans and the Kidney',
        description: 'Deamination of excess amino acids, nephron ultrafiltration, selective reabsorption, and dialysis.',
        durationMinutes: 14,
        experience: {
          type: 'kidney_filter',
          title: 'Virtual Nephron Ultrafiltration & Reabsorption Lab',
          scenario: 'A micro-dialysis simulator tracks blood filtration inside a single human kidney nephron.',
          prompt: 'Operate the nephron: force blood through the high-pressure glomerulus into Bowman’s capsule (ultrafiltration of water, glucose, urea, ions; large proteins/cells stay in blood). In the proximal convoluted tubule, selectively reabsorb 100% of glucose and necessary water.',
          goal: 'Filter blood plasma to produce normal sterile urine containing water, urea, and excess salts with zero glucose loss.'
        },
        lesson: {
          whatHappened: 'High blood pressure in the glomerulus pushed small molecules into the nephron tubule. All beneficial glucose was selectively reabsorbed back into capillaries by active transport, while waste urea and excess water passed to the bladder as urine.',
          academicConcept: 'Excretion: Removal of toxic metabolic waste products. Deamination: In the liver, excess amino acids have their nitrogen-containing amino group removed and converted into urea: Amino acids → Urea + carbohydrate. Kidney structure: Cortex, Medulla, Renal Pelvis, Ureter leading to Bladder. Nephron functioning: (1) Ultrafiltration in Glomerulus / Bowman\'s capsule: High pressure squeezes water, urea, glucose, and salts into filtrate; blood cells and large proteins remain in capillaries. (2) Selective Reabsorption in Proximal Tubule: 100% of glucose is actively reabsorbed back into blood; ions and water are selectively reabsorbed by osmosis. (3) Urine: Remaining fluid containing urea, excess salts, and water drains via ureter to bladder. Kidney dialysis machine: Uses partially permeable membrane and dialysis fluid with correct glucose/salt concentration to diffuse urea out while maintaining vital blood nutrients.',
          interactiveDiagram: {
            title: 'Nephron Ultrastructure & Dialysis Mechanism',
            caption: 'Glomerulus (ultrafiltration) → Tubule (glucose/water reabsorption) → Collecting duct (urine)',
            keyPoints: [
              'Ultrafiltration: High hydrostatic pressure filters small molecules; proteins and cells cannot pass.',
              'Selective reabsorption: 100% of filtered glucose is actively transported back into blood in proximal tubule.',
              'Urine of a healthy person contains: Urea, water, mineral ions (NO glucose, NO proteins).',
              'Presence of glucose in urine is a key diagnostic indicator of untreated diabetes mellitus.'
            ]
          },
          workedExample: {
            title: 'Analyzing Dialysis Fluid Composition',
            problem: 'Why must kidney dialysis fluid contain the same concentration of glucose and mineral ions as normal blood plasma, but ZERO urea?',
            stepByStep: [
              { step: 'Urea removal', detail: 'Zero urea in dialysis fluid creates a steep concentration gradient so toxic urea diffuses out of blood into the fluid.' },
              { step: 'Prevent glucose loss', detail: 'Matching glucose concentration ensures there is no net diffusion of glucose out of the patient\'s blood.' },
              { step: 'Electrolyte balance', detail: 'Matching mineral ion concentrations prevents dangerous osmotic loss or gain of vital salts.' }
            ],
            keyTakeaway: 'Dialysis fluid matches healthy blood in nutrients to prevent loss, but has zero waste to maximize waste extraction.'
          },
          quickChallenge: {
            prompt: 'Why is glucose present in the initial kidney filtrate inside Bowman\'s capsule, but completely absent from the urine of a healthy person?',
            options: ['100% of filtered glucose is selectively reabsorbed back into the blood capillaries in the proximal convoluted tubule', 'Glucose is destroyed by the kidney', 'Urea eats the glucose', 'Glucose evaporates'],
            correctIndex: 0,
            explanation: 'Active transport carrier proteins in the proximal convoluted tubule recover all filtered glucose back into circulation.'
          },
          summary: [
            'Excess amino acids are deaminated in the liver to form urea.',
            'Nephrons perform ultrafiltration at the glomerulus and selective reabsorption at the tubule.',
            'Healthy urine contains water, urea, and excess salts with zero glucose.'
          ]
        },
        questions: [
          {
            id: 'b13_q1',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'Where in the human body are excess amino acids deaminated to form toxic ammonia, which is then converted into urea?',
            options: ['The Liver', 'The Kidneys', 'The Stomach', 'The Bladder'],
            correctAnswer: 'The Liver',
            explanation: 'The liver performs deamination of surplus amino acids into urea.'
          },
          {
            id: 'b13_q2',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What substances are filtered out of the blood during ultrafiltration in the glomerulus into Bowman\'s capsule?',
            options: ['Water, glucose, urea, and mineral salts (small molecules)', 'Red blood cells and platelets', 'Large blood proteins like albumen', 'Everything including whole cells'],
            correctAnswer: 'Water, glucose, urea, and mineral salts (small molecules)',
            explanation: 'High hydrostatic pressure forces all small molecules through the basement membrane.'
          },
          {
            id: 'b13_q3',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What percentage of glucose is normally selectively reabsorbed from the nephron filtrate back into blood in a healthy person?',
            options: ['100% (all of it)', '50%', '0%', '25%'],
            correctAnswer: '100% (all of it)',
            explanation: 'Active transport proteins in the proximal convoluted tubule reabsorb all glucose.'
          },
          {
            id: 'b13_q4',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What is the presence of glucose in a person\'s urine a clinical indicator of?',
            options: ['Diabetes mellitus (blood glucose exceeds renal reabsorption threshold)', 'Kidney stones', 'High protein diet', 'Scurvy'],
            correctAnswer: 'Diabetes mellitus (blood glucose exceeds renal reabsorption threshold)',
            explanation: 'High blood glucose overloads proximal tubule carrier proteins, spilling glucose into urine.'
          },
          {
            id: 'b13_q5',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What tube carries urine from the kidney down to the urinary bladder?',
            options: ['Ureter', 'Urethra', 'Renal vein', 'Aorta'],
            correctAnswer: 'Ureter',
            explanation: 'The ureter connects kidney to bladder; the urethra connects bladder to the outside.'
          },
          {
            id: 'b13_q6',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'Why do large plasma protein molecules (like albumen) NOT appear in the kidney filtrate?',
            options: ['They are too large to pass through the microscopic pores of the basement membrane in the glomerulus', 'They are repelled by magnets', 'They are digested by enzymes', 'They are converted to urea'],
            correctAnswer: 'They are too large to pass through the microscopic pores of the basement membrane in the glomerulus',
            explanation: 'The glomerular basement membrane acts as a molecular sieve blocking large macromolecules.'
          },
          {
            id: 'b13_q7',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'How does an artificial kidney dialysis machine remove toxic urea from a patient\'s blood?',
            options: ['Urea diffuses down its concentration gradient across a partially permeable membrane into urea-free dialysis fluid', 'It boils the blood', 'It uses filters to catch cells', 'It adds chlorine to blood'],
            correctAnswer: 'Urea diffuses down its concentration gradient across a partially permeable membrane into urea-free dialysis fluid',
            explanation: 'Maintaining fresh urea-free fluid drives steady outward diffusion of urea.'
          },
          {
            id: 'b13_q8',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What hormone released by the pituitary gland increases water reabsorption in the collecting ducts when the body is dehydrated?',
            options: ['ADH (Antidiuretic Hormone)', 'Insulin', 'Adrenaline', 'Glucagon'],
            correctAnswer: 'ADH (Antidiuretic Hormone)',
            explanation: 'ADH makes collecting ducts permeable to water, conserving water and concentrating urine.'
          },
          {
            id: 'b13_q9',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What are the three main chemical constituents of normal human urine?',
            options: ['Water, urea, and excess mineral salts', 'Glucose, protein, and red cells', 'Bile, starch, and lipids', 'Alcohol, acid, and hemoglobin'],
            correctAnswer: 'Water, urea, and excess mineral salts',
            explanation: 'Healthy urine eliminates urea, excess water, and surplus electrolytes.'
          },
          {
            id: 'b13_q10',
            subtopicId: 'biology_13',
            type: 'multiple_choice',
            question: 'What blood vessel carries oxygenated blood containing urea into the kidney for filtration?',
            options: ['Renal artery', 'Renal vein', 'Hepatic vein', 'Vena cava'],
            correctAnswer: 'Renal artery',
            explanation: 'The renal artery branches from the aorta directly to the kidney vascular bed.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch14',
    subjectId: 'biology',
    number: 14,
    title: 'Coordination and Response',
    description: 'Nervous system, neurons, reflex arc, synapses, the human eye, and hormonal control.',
    subtopics: [
      {
        id: 'biology_14',
        chapterId: 'bio_ch14',
        subjectId: 'biology',
        code: '14',
        title: 'Coordination, Response and the Eye',
        description: 'Sensory/relay/motor neurons, reflex arc, chemical synapses, eye accommodation, and pupil reflex.',
        durationMinutes: 15,
        experience: {
          type: 'reaction_course',
          title: 'Sensory-Motor Reflex & Eye Accommodation Course',
          scenario: 'An athlete on an obstacle course responds to unexpected visual and auditory stimuli.',
          prompt: 'Trace the reflex arc: Stimulus (hot pan) → Receptor → Sensory Neuron → Relay Neuron in spinal cord → Motor Neuron → Effector (bicep muscle contracts). In the eye simulator, adjust ciliary muscles and suspensory ligaments for near vs distant accommodation.',
          goal: 'Complete the reflex withdrawal challenge in under 150 milliseconds and focus the eye lens on near objects.'
        },
        lesson: {
          whatHappened: 'Touching the hot object triggered an electrical nerve impulse that bypassed the brain through the spinal cord reflex arc, producing an involuntary withdrawal before pain was consciously felt. Focusing on near objects required ciliary muscles to contract, relaxing suspensory ligaments.',
          academicConcept: 'Central Nervous System (CNS): Brain and Spinal cord. Peripheral Nervous System (PNS): Nerves connecting CNS to receptors and effectors. Reflex arc pathway: Stimulus → Receptor → Sensory neuron → Relay neuron (in CNS gray matter) → Motor neuron → Effector (muscle or gland) → Response. Reflexes are involuntary, automatic, and rapid protective responses. Synapse: Junction between two neurons where electrical impulses are converted into chemical neurotransmitters that diffuse across the synaptic cleft. The Eye: Pupil reflex (dim light: radial muscles contract, pupil dilates; bright light: circular muscles contract, pupil constricts). Accommodation (focusing): Near vision: Ciliary muscles contract, suspensory ligaments slacken, lens becomes fat/convex; Distant vision: Ciliary muscles relax, suspensory ligaments pull tight, lens becomes thin. Hormones: Chemical messengers transported in blood (e.g. Adrenaline for fight-or-flight).',
          interactiveDiagram: {
            title: 'Reflex Arc & Synaptic Neurotransmission',
            caption: 'Stimulus → Receptor → Sensory → Relay → Motor → Effector; Neurotransmitter diffusion across synapse',
            keyPoints: [
              'Reflex actions: Involuntary and extremely fast because they do not require conscious brain processing.',
              'Synapses ensure impulses travel in ONE DIRECTION ONLY (vesicles are only in presynaptic neuron).',
              'Near object accommodation: Ciliary muscles CONTRACT → Suspensory ligaments SLACKEN → Lens becomes THICK/ROUND.',
              'Distant object accommodation: Ciliary muscles RELAX → Suspensory ligaments TIGHTEN → Lens pulled THIN.'
            ]
          },
          workedExample: {
            title: 'Explaining Eye Accommodation for Near Objects',
            problem: 'Describe the changes that occur in the human eye to focus light rays from a book held 25 cm away onto the retina.',
            stepByStep: [
              { step: 'Ciliary muscles', detail: 'Ciliary muscle ring contracts, reducing the diameter of the ciliary body.' },
              { step: 'Suspensory ligaments', detail: 'The suspensory ligaments slacken (become loose).' },
              { step: 'Lens shape', detail: 'Relieved of tension, the elastic lens rounds up, becoming thicker and more convex.' },
              { step: 'Optical effect', detail: 'A fatter lens refracts light rays more strongly, bringing diverging rays to a sharp focus on the fovea of the retina.' }
            ],
            keyTakeaway: 'Remember: Ciliary muscles CONTRACT for NEAR vision; suspensory ligaments SLACKEN.'
          },
          quickChallenge: {
            prompt: 'In a reflex arc, what is the correct sequence of neurons transmitting the electrical impulse from receptor to effector?',
            options: ['Sensory neuron → Relay neuron in spinal cord → Motor neuron', 'Motor neuron → Relay → Sensory', 'Relay → Motor → Sensory', 'Sensory neuron → Brain only → Muscle'],
            correctIndex: 0,
            explanation: 'Sensory carries input from receptor to CNS; relay passes signal across spinal cord; motor carries output to effector muscle.'
          },
          summary: [
            'Reflex arc: Stimulus → Receptor → Sensory → Relay → Motor → Effector.',
            'Synapses transmit signals chemically in one direction via neurotransmitters.',
            'Accommodating near objects: ciliary muscles contract, ligaments slacken, lens thickens.'
          ]
        },
        questions: [
          {
            id: 'b14_q1',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What is a reflex action in the human nervous system?',
            options: ['An involuntary, automatic, and rapid response to a specific stimulus that protects the body', 'A learned skill like riding a bicycle', 'A conscious voluntary movement', 'A slow hormonal response'],
            correctAnswer: 'An involuntary, automatic, and rapid response to a specific stimulus that protects the body',
            explanation: 'Reflexes bypass conscious cerebral processing to minimize injury response times.'
          },
          {
            id: 'b14_q2',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'How does an electrical nerve impulse cross the synaptic gap between two adjacent neurons?',
            options: ['Chemical neurotransmitter molecules diffuse across the microscopic synaptic cleft and bind to receptor proteins', 'Electricity sparks across the gap', 'Direct physical contact', 'Water carries the signal'],
            correctAnswer: 'Chemical neurotransmitter molecules diffuse across the microscopic synaptic cleft and bind to receptor proteins',
            explanation: 'Neurotransmitters released from vesicles diffuse across the ~20 nm gap to trigger depolarization.'
          },
          {
            id: 'b14_q3',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'Why can nerve impulses travel in only one direction across a chemical synapse?',
            options: ['Neurotransmitter vesicles are only present in the presynaptic neuron and receptor proteins only on the postsynaptic membrane', 'Neurons have one-way valves', 'Gravity pulls chemicals down', 'Electricity only flows forward'],
            correctAnswer: 'Neurotransmitter vesicles are only present in the presynaptic neuron and receptor proteins only on the postsynaptic membrane',
            explanation: 'Synaptic asymmetry enforces strictly unidirectional neural transmission.'
          },
          {
            id: 'b14_q4',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What changes occur in the eye when shifting focus from a distant tree to a near smartphone screen?',
            options: ['Ciliary muscles contract, suspensory ligaments slacken, and the lens becomes thicker and more rounded', 'Ciliary muscles relax and lens becomes thin', 'Pupil closes completely', 'Cornea changes shape'],
            correctAnswer: 'Ciliary muscles contract, suspensory ligaments slacken, and the lens becomes thicker and more rounded',
            explanation: 'Contraction of ciliary sphincters releases ligament tension, allowing the lens to round up.'
          },
          {
            id: 'b14_q5',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What happens to the iris muscles in bright sunlight to protect the sensitive retina from damage?',
            options: ['Circular muscles contract and radial muscles relax, constricting the pupil', 'Radial muscles contract, dilating the pupil', 'Both muscles relax', 'The lens pops out'],
            correctAnswer: 'Circular muscles contract and radial muscles relax, constricting the pupil',
            explanation: 'Circular muscle contraction narrows the pupil, reducing incident light flux.'
          },
          {
            id: 'b14_q6',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What photoreceptor cells in the human retina are responsible for high-acuity color vision in bright light?',
            options: ['Cones (concentrated at the fovea)', 'Rods (for night vision)', 'Ciliary cells', 'Optic neurons'],
            correctAnswer: 'Cones (concentrated at the fovea)',
            explanation: 'Three types of cone opsins (red, green, blue) provide sharp photopic color vision.'
          },
          {
            id: 'b14_q7',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What physiological effects are triggered by the hormone Adrenaline during a fight-or-flight emergency?',
            options: ['Increased heart rate, increased breathing rate, dilated pupils, and glycogen converted to glucose in liver', 'Drowsiness and slowed pulse', 'Decreased blood pressure', 'Digestion increases'],
            correctAnswer: 'Increased heart rate, increased breathing rate, dilated pupils, and glycogen converted to glucose in liver',
            explanation: 'Adrenaline primes skeletal muscles for immediate vigorous physical exertion.'
          },
          {
            id: 'b14_q8',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What is the gap between two neurons across which neurotransmitters diffuse called?',
            options: ['Synapse (synaptic cleft)', 'Node of Ranvier', 'Myelin sheath', 'Axon hillock'],
            correctAnswer: 'Synapse (synaptic cleft)',
            explanation: 'The synapse is the specialized intercellular communication junction.'
          },
          {
            id: 'b14_q9',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What type of effector carries out the response in a withdrawal reflex from a hot surface?',
            options: ['Skeletal muscle (e.g. bicep contracting)', 'A sensory receptor', 'The spinal cord', 'Skin epithelium'],
            correctAnswer: 'Skeletal muscle (e.g. bicep contracting)',
            explanation: 'Effectors are muscles (which contract) or glands (which secrete).'
          },
          {
            id: 'b14_q10',
            subtopicId: 'biology_14',
            type: 'multiple_choice',
            question: 'What insulating fatty layer coats nerve axons to accelerate electrical impulse conduction via saltatory conduction?',
            options: ['Myelin sheath', 'Cellulose wall', 'Collagen sheath', 'Adipose tissue'],
            correctAnswer: 'Myelin sheath',
            explanation: 'Schwann cell myelin sheaths allow action potentials to jump between Nodes of Ranvier (~100 m/s).'
          }
        ]
      }
    ]
  }
];
