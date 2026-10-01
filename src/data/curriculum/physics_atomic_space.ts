import { Chapter } from '../../types';

export const physicsAtomicSpaceChapters: Chapter[] = [
  {
    id: 'phys_ch5',
    subjectId: 'physics',
    number: 5,
    title: 'Atomic Physics',
    description: 'The nuclear atom, Rutherford alpha scattering, radioactive decay, half-life, and radiation safety.',
    subtopics: [
      {
        id: 'physics_5_1',
        chapterId: 'phys_ch5',
        subjectId: 'physics',
        code: '5.1',
        title: 'The Nuclear Atom',
        description: 'Atomic structure, protons, neutrons, electrons, isotopes, and Rutherford alpha scattering.',
        durationMinutes: 12,
        experience: {
          type: 'atom_builder',
          title: 'Subatomic Particle Atom Builder',
          scenario: 'A quantum particle accelerator laboratory allows you to construct atomic nuclei.',
          prompt: 'Add protons, neutrons, and orbital electrons to synthesize stable elements and isotopes (Hydrogen, Helium-4, Carbon-12, Carbon-14). Observe electrostatic repulsion vs strong nuclear force.',
          goal: 'Build Carbon-12 (6 protons, 6 neutrons, 6 electrons) and Carbon-14 (6 protons, 8 neutrons) and note why Carbon-14 is an unstable radioactive isotope.'
        },
        lesson: {
          whatHappened: 'Protons and neutrons formed a dense, positively charged nucleus in the center, while light electrons orbited in shells. Adding extra neutrons created isotopes of the same element; an imbalance between protons and neutrons caused nuclear instability.',
          academicConcept: 'The nuclear model: Atoms consist of a tiny, dense, positively charged nucleus surrounded by negative electrons in orbital shells. Proton number (atomic number Z): number of protons. Nucleon number (mass number A): total protons + neutrons. Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. Rutherford\'s alpha scattering experiment proved the nucleus is tiny, dense, and positive (most alpha particles pass straight through gold foil; few deflect at large angles).',
          interactiveDiagram: {
            title: 'Rutherford Alpha Scattering & Atomic Model',
            caption: 'Alpha particle deflection by positive nucleus; Nuclide notation ^A_Z X',
            keyPoints: [
              'Most alpha particles pass straight through gold foil → The atom is mostly empty space.',
              'A small fraction are deflected by large angles → Nucleus is dense and positively charged.',
              'Very few bounce straight back (1 in 8000) → Nucleus contains virtually all the atomic mass.',
              'Nuclide notation: Top number A is mass number; Bottom number Z is proton number.'
            ]
          },
          workedExample: {
            title: 'Interpreting Nuclide Notation',
            problem: 'An isotope of Uranium is written as ²³⁸₉₂U. State the number of protons, electrons, and neutrons in a neutral atom.',
            stepByStep: [
              { step: 'Protons', detail: 'Proton number Z = 92, so 92 protons' },
              { step: 'Electrons', detail: 'In a neutral atom, number of electrons = number of protons = 92 electrons' },
              { step: 'Neutrons', detail: 'Neutron number N = A - Z = 238 - 92 = 146 neutrons' }
            ],
            keyTakeaway: 'Neutrons = Nucleon number (A) - Proton number (Z).'
          },
          quickChallenge: {
            prompt: 'What did the fact that most alpha particles passed straight through the thin gold foil in Rutherford\'s experiment prove?',
            options: ['Gold is radioactive', 'The atom is mostly empty space', 'Electrons have positive charge', 'Alpha particles are neutral'],
            correctIndex: 1,
            explanation: 'Because the vast majority of alpha particles encountered no resistance or deflection, Rutherford concluded that the atom consists mostly of empty space with a tiny central nucleus.'
          },
          summary: [
            'Protons and neutrons reside in the nucleus; electrons orbit in outer shells.',
            'Isotopes share proton number Z but have different nucleon numbers A.',
            'Rutherford alpha scattering proved the atom has a tiny, dense, positive nucleus.'
          ]
        },
        questions: [
          {
            id: 'p5_1_q1',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'What are isotopes?',
            options: ['Atoms of the same element with the same number of protons but different numbers of neutrons', 'Atoms with different numbers of protons', 'Molecules with different electrical charges', 'Atoms that have lost all electrons'],
            correctAnswer: 'Atoms of the same element with the same number of protons but different numbers of neutrons',
            explanation: 'Isotopes have identical chemical properties (same Z) but different atomic masses (different N).'
          },
          {
            id: 'p5_1_q2',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'In Rutherford\'s alpha particle scattering experiment, why did a few alpha particles deflect through angles greater than 90°?',
            options: ['They collided with the tiny, extremely dense, positively charged nucleus', 'They were absorbed by gold electrons', 'Gold foil had holes in it', 'Gravity pulled them backwards'],
            correctAnswer: 'They collided with the tiny, extremely dense, positively charged nucleus',
            explanation: 'Direct electrostatic repulsion from the concentrated positive nuclear charge turned them back.'
          },
          {
            id: 'p5_1_q3',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'How many neutrons are present in a nucleus of Carbon-14 (¹⁴₆C)?',
            options: ['8', '6', '14', '20'],
            correctAnswer: '8',
            explanation: 'Neutrons = Mass number - Proton number = 14 - 6 = 8.'
          },
          {
            id: 'p5_1_q4',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'What is the electrical charge and approximate relative mass of an electron?',
            options: ['Charge -1, relative mass 1/1840', 'Charge +1, relative mass 1', 'Charge 0, relative mass 1', 'Charge -2, relative mass 4'],
            correctAnswer: 'Charge -1, relative mass 1/1840',
            explanation: 'Electrons have a -1 fundamental charge and negligible mass compared to nucleons.'
          },
          {
            id: 'p5_1_q5',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'What occupies the majority of the volume of an atom?',
            options: ['Empty space where electrons orbit', 'Dense proton soup', 'Neutron fluid', 'Solid matter'],
            correctAnswer: 'Empty space where electrons orbit',
            explanation: 'The nucleus is ~100,000 times smaller in diameter than the outer electron boundary.'
          },
          {
            id: 'p5_1_q6',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'What fundamental force binds protons and neutrons together inside the atomic nucleus?',
            options: ['Strong nuclear force', 'Gravitational force', 'Electrostatic repulsion', 'Magnetic force'],
            correctAnswer: 'Strong nuclear force',
            explanation: 'The short-range strong nuclear force overcomes proton-proton electrostatic repulsion.'
          },
          {
            id: 'p5_1_q7',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'A nucleus of Sodium is ²³₁₁Na. How many nucleons does it contain?',
            options: ['23', '11', '12', '34'],
            correctAnswer: '23',
            explanation: 'The nucleon number (mass number A) is the top number, 23.'
          },
          {
            id: 'p5_1_q8',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'What happens to the chemical reactivity of different isotopes of the same element?',
            options: ['It remains identical because they have identical electron configurations', 'Heavier isotopes do not react', 'Isotopes change into different elements', 'Only radioactive isotopes form bonds'],
            correctAnswer: 'It remains identical because they have identical electron configurations',
            explanation: 'Chemical reactions involve valence electrons; neutron count does not alter chemical behavior.'
          },
          {
            id: 'p5_1_q9',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'Which subatomic particle was discovered by James Chadwick in 1932 as an uncharged nuclear constituent?',
            options: ['Neutron', 'Proton', 'Electron', 'Alpha particle'],
            correctAnswer: 'Neutron',
            explanation: 'Chadwick discovered the neutral neutron, resolving unexplained atomic mass discrepancies.'
          },
          {
            id: 'p5_1_q10',
            subtopicId: 'physics_5_1',
            type: 'multiple_choice',
            question: 'If an atom gains an extra electron, what does it become?',
            options: ['A negatively charged ion (anion)', 'A positively charged ion', 'An isotope', 'A new element'],
            correctAnswer: 'A negatively charged ion (anion)',
            explanation: 'Excess electrons impart an overall negative charge, forming an anion.'
          }
        ]
      },
      {
        id: 'physics_5_2',
        chapterId: 'phys_ch5',
        subjectId: 'physics',
        code: '5.2',
        title: 'Radioactivity',
        description: 'Alpha, beta, and gamma radiation, detection, radioactive decay, half-life, and safety.',
        durationMinutes: 14,
        experience: {
          type: 'radiation_detector',
          title: 'Radiation Detector & Shielding Lab',
          scenario: 'A radiation safety facility investigates three unknown radioactive isotopes.',
          prompt: 'Use a simulated Geiger-Müller (GM) counter and insert barriers (Paper, Aluminium 3mm, Lead 5cm). Observe count rates to identify Alpha (stopped by paper), Beta (stopped by aluminium), and Gamma (stopped only by thick lead).',
          goal: 'Identify the 3 radiation emitters and calculate the half-life of an unknown source from its decay curve.'
        },
        lesson: {
          whatHappened: 'Alpha particles were easily stopped by a thin sheet of paper because of their high ionizing power. Beta particles penetrated paper but were absorbed by aluminium. Gamma rays required thick lead to attenuate. Radioactive sources decayed exponentially over time.',
          academicConcept: 'Radioactive decay is random and spontaneous. Alpha (α): Helium nucleus (⁴₂He), +2 charge, high ionizing power, stopped by paper or ~5 cm air. Beta (β): High-speed electron (⁰₋₁e), -1 charge, moderate ionizing power, stopped by ~3 mm aluminium. Gamma (γ): High-frequency electromagnetic wave, 0 charge, low ionizing power, high penetration, attenuated by lead. Half-life: Time taken for half the radioactive nuclei in a sample to decay (or count rate to halve).',
          interactiveDiagram: {
            title: 'Penetration & Ionizing Power of Nuclear Radiations',
            caption: 'Alpha (stopped by paper) · Beta (stopped by aluminium) · Gamma (attenuated by lead)',
            keyPoints: [
              'Alpha (α): ⁴₂He nucleus. Most ionizing, least penetrating.',
              'Beta (β): Fast electron ⁰₋₁e. Moderately ionizing and penetrating.',
              'Gamma (γ): EM photon. Least ionizing, most penetrating.',
              'Half-life calculation: Count rate halving steps: N₀ → N₀/2 → N₀/4 → N₀/8.',
              'Always subtract background radiation before calculating corrected half-life.'
            ]
          },
          workedExample: {
            title: 'Calculating Remaining Activity After Several Half-Lives',
            problem: 'A radioactive isotope has a half-life of 4 hours. If initial activity is 800 counts/min, what is the activity after 12 hours?',
            stepByStep: [
              { step: 'Number of half-lives', detail: 'n = Total time / Half-life = 12 h / 4 h = 3 half-lives' },
              { step: 'Step-by-step decay', detail: '0 h: 800 cpm → 4 h: 400 cpm → 8 h: 200 cpm → 12 h: 100 cpm', math: 'A = \\frac{800}{2^3} = \\frac{800}{8} = 100\\text{ counts/min}' }
            ],
            keyTakeaway: 'Every half-life period cuts the remaining active nuclei and count rate in half.'
          },
          quickChallenge: {
            prompt: 'Which type of radiation is most dangerous when ingested or inhaled into the human body?',
            options: ['Alpha radiation, because its strong ionizing power damages internal tissue DNA directly', 'Gamma radiation', 'Radio waves', 'Microwaves'],
            correctIndex: 0,
            explanation: 'While alpha radiation cannot penetrate skin externally, once inside the body it deposits huge ionization energy directly into surrounding cells, causing severe DNA damage.'
          },
          summary: [
            'Alpha is stopped by paper; Beta by aluminium; Gamma by lead.',
            'Half-life is the time for half the unstable nuclei to decay.',
            'Radioactive decay is random and spontaneous; background radiation must always be subtracted.'
          ]
        },
        questions: [
          {
            id: 'p5_2_q1',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'What is an alpha (α) particle identical to?',
            options: ['A Helium-4 nucleus (2 protons, 2 neutrons)', 'A high-speed electron', 'A high-energy photon', 'A single proton'],
            correctAnswer: 'A Helium-4 nucleus (2 protons, 2 neutrons)',
            explanation: 'Alpha particles are helium nuclei with mass 4 and charge +2.'
          },
          {
            id: 'p5_2_q2',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'What thickness of material is required to stop beta (β) particles?',
            options: ['A few millimetres of aluminium', 'A single sheet of paper', '10 metres of concrete', 'A cardboard sheet'],
            correctAnswer: 'A few millimetres of aluminium',
            explanation: 'Beta electrons pass through paper but are stopped by ~3-5 mm of aluminium.'
          },
          {
            id: 'p5_2_q3',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'What is the definition of radioactive half-life?',
            options: ['The time taken for half the radioactive nuclei in a sample to decay', 'Half the time until an atom explodes', 'The time for all radiation to disappear', 'The shelf life of medicine'],
            correctAnswer: 'The time taken for half the radioactive nuclei in a sample to decay',
            explanation: 'Half-life is the characteristic time for sample activity or active nuclei count to halve.'
          },
          {
            id: 'p5_2_q4',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'A radioactive source has an activity of 640 Bq. What is its activity after 3 half-lives?',
            options: ['80 Bq', '160 Bq', '320 Bq', '40 Bq'],
            correctAnswer: '80 Bq',
            explanation: '640 → 320 (1) → 160 (2) → 80 Bq (3 half-lives).'
          },
          {
            id: 'p5_2_q5',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'What instrument is standard for detecting ionizing nuclear radiation in a school laboratory?',
            options: ['Geiger-Müller (GM) tube connected to a counter', 'A barometer', 'An ammeter', 'A galvanometer'],
            correctAnswer: 'Geiger-Müller (GM) tube connected to a counter',
            explanation: 'GM tubes ionize low-pressure gas, generating measurable electrical pulses.'
          },
          {
            id: 'p5_2_q6',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'When a nucleus undergoes alpha decay, how do its nucleon number A and proton number Z change?',
            options: ['A decreases by 4, Z decreases by 2', 'A stays same, Z increases by 1', 'A decreases by 1, Z stays same', 'A decreases by 2, Z increases by 2'],
            correctAnswer: 'A decreases by 4, Z decreases by 2',
            explanation: 'Emitting ⁴₂He removes 4 nucleons (including 2 protons).'
          },
          {
            id: 'p5_2_q7',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'When a nucleus undergoes beta-minus (β⁻) decay, what subatomic transformation occurs inside the nucleus?',
            options: ['A neutron changes into a proton and an emitted electron', 'A proton changes into a neutron', 'An electron enters the nucleus', 'A proton is destroyed'],
            correctAnswer: 'A neutron changes into a proton and an emitted electron',
            explanation: 'n → p + e⁻ + antineutrino; proton number Z increases by 1 while nucleon number A remains constant.'
          },
          {
            id: 'p5_2_q8',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'Which of the following is a natural source of background radiation?',
            options: ['Radon gas from granite rocks and cosmic rays from space', 'Microwave ovens', 'Mobile phone towers', 'Fluorescent tubes'],
            correctAnswer: 'Radon gas from granite rocks and cosmic rays from space',
            explanation: 'Radon gas seepage and cosmic rays account for the vast majority of natural background exposure.'
          },
          {
            id: 'p5_2_q9',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'Why are gamma-emitting isotopes with short half-lives (e.g. Technetium-99m) used as medical tracers?',
            options: ['Gamma rays penetrate outside the body to detectors and short half-life prevents long-term patient exposure', 'Gamma rays do not enter cells', 'Alpha rays cannot be detected', 'They turn blood bright red'],
            correctAnswer: 'Gamma rays penetrate outside the body to detectors and short half-life prevents long-term patient exposure',
            explanation: 'High penetration allows imaging from outside the body while a 6-hour half-life minimizes radiation dose.'
          },
          {
            id: 'p5_2_q10',
            subtopicId: 'physics_5_2',
            type: 'multiple_choice',
            question: 'What precaution should a technician take when handling a radioactive source in a laboratory?',
            options: ['Use long tongs, store in a lead-lined box, and never point at anyone', 'Hold it directly with fingers to keep it warm', 'Keep it on a wooden table', 'Wash it with tap water'],
            correctAnswer: 'Use long tongs, store in a lead-lined box, and never point at anyone',
            explanation: 'Tongs increase distance (inverse-square law reduces exposure) and lead shielding absorbs radiation.'
          }
        ]
      }
    ]
  },
  {
    id: 'phys_ch6',
    subjectId: 'physics',
    number: 6,
    title: 'Space Physics',
    description: 'Earth, the Solar System, orbital mechanics, stars, the lifecycle of stars, and the expanding Universe.',
    subtopics: [
      {
        id: 'physics_6_1',
        chapterId: 'phys_ch6',
        subjectId: 'physics',
        code: '6.1',
        title: 'Earth and the Solar System',
        description: 'Earth rotation and orbit, gravitational orbital mechanics, planets, and orbital speed.',
        durationMinutes: 12,
        experience: {
          type: 'mission_to_mars',
          title: 'Mission to Mars Orbital Trajectory Planner',
          scenario: 'You are the Flight Dynamics Officer at Mission Control plotting a Hohmann transfer orbit from Earth to Mars.',
          prompt: 'Adjust orbital launch velocity, orbital radius, and gravitational pull. Observe how planet orbital speed decreases with distance from the Sun (v = 2πr / T). Launch the probe on the correct intercept vector.',
          goal: 'Execute an orbital insertion around Mars by achieving the exact transfer velocity and timing window.'
        },
        lesson: {
          whatHappened: 'Inner planets orbit the Sun at tremendous speeds because solar gravitational pull is intense. Outer planets travel much slower over vast orbital circumferences. Launching the spacecraft required precise velocity to transfer between solar orbits.',
          academicConcept: 'Earth rotates on its tilted axis once every 24 hours (day and night) and orbits the Sun in 365.25 days (seasons due to 23.5° axial tilt). The Solar System consists of the Sun, 4 rocky inner planets (Mercury, Venus, Earth, Mars), an asteroid belt, 4 gas giant outer planets (Jupiter, Saturn, Uranus, Neptune), dwarf planets, and comets. Orbital speed v = 2πr / T. Gravitational force provides the centripetal force for orbit.',
          interactiveDiagram: {
            title: 'Solar System Planetary Hierarchy & Orbital Speeds',
            caption: 'v = 2πr / T; Gravitational centripetal force F = mv²/r; Seasons caused by axial tilt',
            keyPoints: [
              'Day/Night: Earth rotation on its axis (24 hours).',
              'Seasons: Earth 23.5° tilt during its 365-day elliptical orbit around the Sun.',
              'Moon: Orbits Earth once every ~28 days; shows distinct phases due to reflected sunlight.',
              'Planets closer to the Sun experience stronger gravity and travel at higher orbital speeds.'
            ]
          },
          workedExample: {
            title: 'Calculating Earth Orbital Speed',
            problem: 'Earth orbits the Sun at an average radius of 1.5 × 10¹¹ m in 365 days (3.15 × 10⁷ s). Calculate Earth orbital speed.',
            stepByStep: [
              { step: 'Formula', detail: 'v = 2πr / T' },
              { step: 'Calculation', detail: 'v = (2 × π × 1.5 × 10¹¹) / (3.15 × 10⁷) ≈ 29,900 m/s ≈ 30 km/s', math: 'v = \\frac{2\\pi (1.5 \\times 10^{11})}{3.15 \\times 10^7} \\approx 30\\text{ km/s}' }
            ],
            keyTakeaway: 'Orbital speed is circumference divided by orbital period: v = 2πr / T.'
          },
          quickChallenge: {
            prompt: 'What causes the changing seasons (Summer, Autumn, Winter, Spring) on Earth?',
            options: ['Distance from the Sun changing wildly', 'The tilt of Earth\'s rotational axis (23.5°) relative to its orbital plane', 'Sunspots switching on and off', 'The Moon blocking solar heat'],
            correctIndex: 1,
            explanation: 'When the Northern hemisphere tilts toward the Sun, solar rays strike at a steeper angle and days are longer, producing summer.'
          },
          summary: [
            'Earth rotates on its axis in 24 hours; orbits the Sun in 365 days.',
            'Axial tilt of 23.5° produces seasonal variation.',
            'Orbital speed v = 2πr / T; gravity provides the necessary centripetal force.'
          ]
        },
        questions: [
          {
            id: 'p6_1_q1',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'What provides the centripetal force keeping planets in orbit around the Sun?',
            options: ['Gravitational attraction from the Sun', 'Solar wind pressure', 'Magnetic fields of planets', 'Nuclear fusion repulsion'],
            correctAnswer: 'Gravitational attraction from the Sun',
            explanation: 'The gravitational force between the Sun and planet acts as the inward centripetal force.'
          },
          {
            id: 'p6_1_q2',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'What is the formula for the average orbital speed v of a planet in a circular orbit?',
            options: ['v = 2πr / T', 'v = r / T', 'v = 2πT / r', 'v = πr² / T'],
            correctAnswer: 'v = 2πr / T',
            explanation: 'Speed is distance (circumference 2πr) divided by orbital period T.'
          },
          {
            id: 'p6_1_q3',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'Which of the following are the four rocky inner terrestrial planets in order from the Sun?',
            options: ['Mercury, Venus, Earth, Mars', 'Earth, Mars, Jupiter, Saturn', 'Venus, Earth, Neptune, Mars', 'Mercury, Earth, Mars, Jupiter'],
            correctAnswer: 'Mercury, Venus, Earth, Mars',
            explanation: 'The inner terrestrial planets are Mercury, Venus, Earth, and Mars.'
          },
          {
            id: 'p6_1_q4',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'Why does Mercury travel much faster in its orbit than Neptune?',
            options: ['Mercury is much closer to the Sun where solar gravitational pull is far stronger', 'Mercury is hotter', 'Neptune is made of gas', 'Mercury has no atmosphere'],
            correctAnswer: 'Mercury is much closer to the Sun where solar gravitational pull is far stronger',
            explanation: 'Gravitational field strength decreases with distance squared, requiring higher orbital speed closer in.'
          },
          {
            id: 'p6_1_q5',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'How long does it take for Earth to complete one full rotation on its axis?',
            options: ['24 hours (1 day)', '365 days (1 year)', '28 days', '12 hours'],
            correctAnswer: '24 hours (1 day)',
            explanation: 'Axial rotation takes approximately 24 hours, creating the cycle of day and night.'
          },
          {
            id: 'p6_1_q6',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'What is the approximate time taken for the Moon to orbit the Earth once?',
            options: ['28 days (roughly 1 month)', '24 hours', '365 days', '7 days'],
            correctAnswer: '28 days (roughly 1 month)',
            explanation: 'The lunar orbit and phase cycle take approximately 27.3 to 29.5 days.'
          },
          {
            id: 'p6_1_q7',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'What celestial objects orbit the Sun in highly elliptical orbits and develop bright glowing tails of gas and dust when near the Sun?',
            options: ['Comets', 'Asteroids', 'Meteors', 'Black holes'],
            correctAnswer: 'Comets',
            explanation: 'Comets are icy bodies; solar heating vaporizes ice into a glowing coma and solar wind blows back a tail.'
          },
          {
            id: 'p6_1_q8',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'Where is the main Asteroid Belt located in our Solar System?',
            options: ['Between Mars and Jupiter', 'Between Earth and Venus', 'Beyond Neptune', 'Inside the Sun'],
            correctAnswer: 'Between Mars and Jupiter',
            explanation: 'The asteroid belt separates the inner rocky planets from the outer gas giants.'
          },
          {
            id: 'p6_1_q9',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'A geostationary satellite orbits Earth directly above the equator with what orbital period?',
            options: ['24 hours, so it remains stationary relative to a point on Earth\'s surface', '90 minutes', '12 hours', '365 days'],
            correctAnswer: '24 hours, so it remains stationary relative to a point on Earth\'s surface',
            explanation: 'Matching Earth\'s rotational period (24 h) allows satellite dishes to stay pointed in a fixed direction.'
          },
          {
            id: 'p6_1_q10',
            subtopicId: 'physics_6_1',
            type: 'multiple_choice',
            question: 'Why does the Moon appear to change shape throughout the month (lunar phases)?',
            options: ['As the Moon orbits Earth, we see differing fractions of its sunlit illuminated hemisphere', 'Earth casts a shadow on it every night', 'Clouds cover the Moon', 'The Moon turns on and off'],
            correctAnswer: 'As the Moon orbits Earth, we see differing fractions of its sunlit illuminated hemisphere',
            explanation: 'Half the Moon is always illuminated by the Sun; our viewing angle from Earth changes constantly.'
          }
        ]
      },
      {
        id: 'physics_6_2',
        chapterId: 'phys_ch6',
        subjectId: 'physics',
        code: '6.2',
        title: 'Stars and the Universe',
        description: 'Nuclear fusion in stars, stellar lifecycle, galaxies, redshift, and Big Bang cosmology.',
        durationMinutes: 14,
        experience: {
          type: 'star_detector',
          title: 'Deep Space Star Detector & Classifier',
          scenario: 'An orbital space telescope spectrometer analyzes starlight across galaxies.',
          prompt: 'Inspect stellar absorption spectra, surface temperature (color from red ~3,000 K to blue ~30,000 K), and place stars on the Hertzsprung-Russell (H-R) diagram. Observe redshift in distant galactic spectra.',
          goal: 'Classify our Sun as a main sequence yellow star and measure galactic redshift to prove the expansion of the Universe.'
        },
        lesson: {
          whatHappened: 'Stellar color indicated surface temperature: blue stars are hottest, red stars coolest. Distant galaxies showed absorption lines shifted toward the red end of the spectrum, confirming universal cosmic expansion.',
          academicConcept: 'The Sun is powered by nuclear fusion of hydrogen into helium in its core: 4 ¹₁H → ⁴₂He + energy. Stellar lifecycle: Nebula → Protostar → Main sequence star → (for Sun-sized stars: Red giant → Planetary nebula → White dwarf; for massive stars: Red supergiant → Supernova → Neutron star or Black hole). Redshift: Light from distant galaxies is shifted to longer (redder) wavelengths, proving galaxies are moving away. Hubble\'s Law: recession speed v = H₀ × d, supporting the Big Bang theory ~13.8 billion years ago.',
          interactiveDiagram: {
            title: 'Hertzsprung-Russell Diagram & Stellar Evolution',
            caption: 'Main sequence, Red giants, Supergiants, White dwarfs; Redshift Δλ/λ = v/c',
            keyPoints: [
              'Nuclear Fusion: Light nuclei fuse to form heavier elements, releasing energy via E = mc².',
              'Main Sequence: Inward gravitational collapse is balanced by outward thermal radiation pressure.',
              'Sun-like stars end as cold White Dwarfs; massive stars explode as Supernovae leaving Neutron stars or Black holes.',
              'Cosmic Microwave Background Radiation (CMBR) and Redshift provide overwhelming evidence for the Big Bang.'
            ]
          },
          workedExample: {
            title: 'Calculating Galactic Recession Velocity',
            problem: 'A spectral line normally at 500 nm is observed from a distant galaxy at 510 nm. What is the recession speed of the galaxy? (c = 3.0 × 10⁸ m/s).',
            stepByStep: [
              { step: 'Wavelength shift', detail: 'Δλ = 510 nm - 500 nm = 10 nm' },
              { step: 'Redshift formula', detail: 'Δλ / λ = v / c → v = c × (Δλ / λ)' },
              { step: 'Calculation', detail: 'v = (3.0 × 10⁸ m/s) × (10 / 500) = 3.0 × 10⁸ × 0.02 = 6.0 × 10⁶ m/s (6,000 km/s)', math: 'v = 3.0 \\times 10^8 \\times \\frac{10}{500} = 6.0 \\times 10^6\\text{ m/s}' }
            ],
            keyTakeaway: 'The greater the redshift Δλ / λ, the faster the distant galaxy is moving away from us.'
          },
          quickChallenge: {
            prompt: 'What primary nuclear process generates the immense energy emitted by our Sun and all main sequence stars?',
            options: ['Nuclear fission of uranium', 'Nuclear fusion of hydrogen nuclei into helium nuclei', 'Combustion of natural gas', 'Radioactive alpha decay'],
            correctIndex: 1,
            explanation: 'Under extreme core temperatures and pressures, hydrogen protons overcome electrostatic repulsion and fuse into helium, releasing energy according to E = mc².'
          },
          summary: [
            'Stars are powered by nuclear fusion of hydrogen into helium.',
            'The lifecycle of a star is determined by its initial mass.',
            'Redshift and CMBR prove that the Universe is expanding from the Big Bang.'
          ]
        },
        questions: [
          {
            id: 'p6_2_q1',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What source of energy powers the Sun and main sequence stars?',
            options: ['Nuclear fusion of hydrogen into helium', 'Nuclear fission of heavy elements', 'Chemical combustion of coal', 'Gravitational friction alone'],
            correctAnswer: 'Nuclear fusion of hydrogen into helium',
            explanation: 'Hydrogen nuclei fuse in the stellar core, releasing mass energy via Einstein\'s equation E = mc².'
          },
          {
            id: 'p6_2_q2',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What is the next evolutionary stage of our Sun when its core hydrogen runs out in ~5 billion years?',
            options: ['Red giant', 'Supernova', 'Black hole', 'Protostar'],
            correctAnswer: 'Red giant',
            explanation: 'Medium-mass stars expand into red giants as helium fusion begins, before shedding outer layers.'
          },
          {
            id: 'p6_2_q3',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What astronomical observation provides key evidence that the Universe is continuously expanding?',
            options: ['Light from distant galaxies is redshifted to longer wavelengths', 'All stars are blue', 'Planets revolve clockwise', 'Asteroids collide with Earth'],
            correctAnswer: 'Light from distant galaxies is redshifted to longer wavelengths',
            explanation: 'Redshift shows that space itself is expanding, carrying distant galaxies away from us.'
          },
          {
            id: 'p6_2_q4',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What is the Cosmic Microwave Background Radiation (CMBR)?',
            options: ['Microwave radiation leftover from the hot, dense early Big Bang pervading the entire cosmos', 'Radiation from microwave ovens', 'Signals from alien communications', 'Light reflected from the Moon'],
            correctAnswer: 'Microwave radiation leftover from the hot, dense early Big Bang pervading the entire cosmos',
            explanation: 'CMBR is redshifted thermal radiation relic from ~380,000 years after the Big Bang.'
          },
          {
            id: 'p6_2_q5',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What final stellar remnant is left behind after a low/medium mass star like our Sun sheds its outer layers?',
            options: ['White dwarf', 'Black hole', 'Neutron star', 'Pulsar'],
            correctAnswer: 'White dwarf',
            explanation: 'The hot, dense carbon-oxygen degenerate core cools slowly as a white dwarf.'
          },
          {
            id: 'p6_2_q6',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What catastrophic explosion occurs at the end of the life of a massive star (much heavier than the Sun)?',
            options: ['Supernova', 'Planetary nebula', 'Solar flare', 'Coronal mass ejection'],
            correctAnswer: 'Supernova',
            explanation: 'Core collapse in massive stars triggers a catastrophic supernova explosion, synthesizing heavy elements.'
          },
          {
            id: 'p6_2_q7',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'Which star surface temperature corresponds to a blue-white star on the Hertzsprung-Russell diagram?',
            options: ['~20,000 K to 30,000 K', '~3,000 K', '~5,800 K', '~500 K'],
            correctAnswer: '~20,000 K to 30,000 K',
            explanation: 'Hotter stars radiate higher-energy photons, appearing blue-white (Wien\'s displacement law).'
          },
          {
            id: 'p6_2_q8',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What is Hubble\'s Law relating recession speed v of a distant galaxy to its distance d from Earth?',
            options: ['v = H₀ × d', 'v = d / H₀', 'v = H₀ / d', 'v = H₀ × d²'],
            correctAnswer: 'v = H₀ × d',
            explanation: 'Hubble\'s Law states that recessional velocity is directly proportional to distance (v = H₀d).'
          },
          {
            id: 'p6_2_q9',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What is the estimated age of our Universe according to modern cosmological measurements?',
            options: ['Approximately 13.8 billion years', '4.5 billion years', '100 million years', '1 trillion years'],
            correctAnswer: 'Approximately 13.8 billion years',
            explanation: 'Hubble expansion rate and CMBR measurements pinpoint the Big Bang at ~13.8 billion years ago.'
          },
          {
            id: 'p6_2_q10',
            subtopicId: 'physics_6_2',
            type: 'multiple_choice',
            question: 'What is an astronomical light-year?',
            options: ['The distance light travels in one Julian year (approx 9.5 × 10¹⁵ m)', 'The time it takes for Earth to orbit the Sun', 'The brightness of a distant galaxy', 'The speed of a comet'],
            correctAnswer: 'The distance light travels in one Julian year (approx 9.5 × 10¹⁵ m)',
            explanation: 'A light-year is a unit of astronomical distance equal to speed of light c × 1 year.'
          }
        ]
      }
    ]
  }
];
