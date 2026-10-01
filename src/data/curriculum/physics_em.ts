import { Chapter } from '../../types';

export const physicsElectricityChapter: Chapter = {
  id: 'phys_ch4',
  subjectId: 'physics',
  number: 4,
  title: 'Electricity and Magnetism',
  description: 'Magnetic phenomena, electrical quantities, DC circuits, digital electronics, electrical hazards, and electromagnetic induction.',
  subtopics: [
    {
      id: 'physics_4_1',
      chapterId: 'phys_ch4',
      subjectId: 'physics',
      code: '4.1',
      title: 'Simple Phenomena of Magnetism',
      description: 'Magnetic poles, magnetic fields, magnetic materials, and induced magnetism.',
      durationMinutes: 12,
      experience: {
        type: 'magnetic_treasure_hunt',
        title: 'Magnetic Treasure Hunt Lab',
        scenario: 'A seabed salvage expedition uses a subsea magnetic probe to scan buried wreckage.',
        prompt: 'Use North and South magnetic wand poles to test buried samples (Iron anchor, Copper coin, Aluminium panel, Cobalt compass, Plastic crate). Observe magnetic field lines and attraction/repulsion.',
        goal: 'Identify the 3 ferromagnetic materials and prove that repulsion is the only definitive test for a magnet.'
      },
      lesson: {
        whatHappened: 'The magnetic wand attracted iron and cobalt, but had zero effect on copper, aluminium, or plastic. Like poles (N-N or S-S) repelled each other, while unlike poles (N-S) attracted.',
        academicConcept: 'Ferromagnetic materials: Iron, Steel, Cobalt, Nickel. Like magnetic poles repel; unlike poles attract. Repulsion is the only sure test for a permanent magnet (unmagnetised iron is attracted to both poles). Magnetic field lines run from North to South outside the magnet; line density indicates magnetic field strength.',
        interactiveDiagram: {
          title: 'Magnetic Fields & Pole Interactions',
          caption: 'Field lines emerge from North and enter South; density indicates field strength.',
          keyPoints: [
            'Magnetic materials: Iron, steel, nickel, cobalt (copper, aluminium, brass are NOT magnetic).',
            'Soft iron: Easy to magnetise but loses magnetism quickly (temporary magnet, good for electromagnets).',
            'Hard steel: Hard to magnetise but retains magnetism (permanent magnet).',
            'Only repulsion can prove an object is an already magnetized permanent magnet.'
          ]
        },
        workedExample: {
          title: 'Testing Unknown Metal Rods',
          problem: 'Rod A is brought near the North pole of a compass. The compass needle North pole repels. What does this prove about Rod A?',
          stepByStep: [
            { step: 'Analysis', detail: 'An unmagnetised piece of iron would be attracted to the North pole by induced magnetism.' },
            { step: 'Deduction', detail: 'Repulsion can only happen if Rod A is also a permanent magnet presenting its own North pole.' }
          ],
          keyTakeaway: 'Repulsion is the only definitive test for magnetic polarity.'
        },
        quickChallenge: {
          prompt: 'Which metal is best suited to make the core of an electromagnet?',
          options: ['Hard steel', 'Soft iron', 'Pure copper', 'Solid lead'],
          correctIndex: 1,
          explanation: 'Soft iron magnetizes easily when current flows and demagnetizes immediately when current is switched off, making it ideal for electromagnets.'
        },
        summary: [
          'Magnetic field lines flow from North to South; closer lines signify stronger magnetic force.',
          'Ferromagnetic materials include iron, steel, nickel, and cobalt.',
          'Repulsion is the only definitive test for an existing permanent magnet.'
        ]
      },
      questions: [
        {
          id: 'p4_1_q1',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'Which of the following metals is ferromagnetic and attracted to a magnet?',
          options: ['Copper', 'Aluminium', 'Iron', 'Gold'],
          correctAnswer: 'Iron',
          explanation: 'Iron, steel, nickel, and cobalt are the primary ferromagnetic materials.'
        },
        {
          id: 'p4_1_q2',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'What is the only definitive test that proves an object is a permanent magnet?',
          options: ['It attracts an iron nail', 'It repels another magnet', 'It conducts electricity', 'It sinks in water'],
          correctAnswer: 'It repels another magnet',
          explanation: 'Unmagnetized magnetic materials are always attracted; only another magnet can produce repulsion.'
        },
        {
          id: 'p4_1_q3',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'What is the direction of magnetic field lines outside a bar magnet?',
          options: ['From North pole to South pole', 'From South pole to North pole', 'Circular around the middle only', 'Radially outward in all directions'],
          correctAnswer: 'From North pole to South pole',
          explanation: 'By international convention, field lines indicate the force direction on a free North pole: North to South.'
        },
        {
          id: 'p4_1_q4',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'Why is soft iron preferred over steel for the core of a transformer or electromagnet?',
          options: ['Soft iron gains and loses magnetism easily', 'Soft iron never loses magnetism', 'Soft iron is lighter than steel', 'Soft iron prevents rust'],
          correctAnswer: 'Soft iron gains and loses magnetism easily',
          explanation: 'Soft magnetic materials have high magnetic permeability and low coercivity (demagnetize quickly).'
        },
        {
          id: 'p4_1_q5',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'What method can be used to demagnetise a permanent steel bar magnet?',
          options: ['Placing it in an East-West orientation and hitting it repeatedly with a hammer, or heating it to red heat', 'Cooling it in liquid nitrogen', 'Painting it black', 'Putting it in salt water'],
          correctAnswer: 'Placing it in an East-West orientation and hitting it repeatedly with a hammer, or heating it to red heat',
          explanation: 'Mechanical shock or thermal energy randomizes the aligned magnetic domains.'
        },
        {
          id: 'p4_1_q6',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'What happens when a bar magnet is cut exactly in half?',
          options: ['Two complete smaller magnets are formed, each with a North and a South pole', 'One half is purely North, the other is purely South', 'Both pieces lose all magnetism', 'The poles flip to the center'],
          correctAnswer: 'Two complete smaller magnets are formed, each with a North and a South pole',
          explanation: 'Isolated magnetic monopoles do not exist; cutting creates two new dipoles.'
        },
        {
          id: 'p4_1_q7',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'How can you plot the magnetic field pattern around a bar magnet in a laboratory?',
          options: ['Using a small plotting compass or sprinkling iron filings on a card over the magnet', 'Using a thermometer', 'Using a voltmeter across the poles', 'Using a magnifying glass'],
          correctAnswer: 'Using a small plotting compass or sprinkling iron filings on a card over the magnet',
          explanation: 'Iron filings align along the field lines; a plotting compass needle points along the local field vector.'
        },
        {
          id: 'p4_1_q8',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'What occurs during induced magnetism?',
          options: ['A magnetic material becomes temporarily magnetized when placed inside a magnetic field', 'A copper wire turns into iron', 'Gravity creates magnetic poles', 'Electricity is created from plastic'],
          correctAnswer: 'A magnetic material becomes temporarily magnetized when placed inside a magnetic field',
          explanation: 'The external field aligns magnetic domains in the previously unmagnetized ferromagnetic specimen.'
        },
        {
          id: 'p4_1_q9',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'Where is the magnetic field of a bar magnet strongest?',
          options: ['At the two poles (North and South)', 'At the exact geometrical center', '1 metre away from the sides', 'It is uniform everywhere'],
          correctAnswer: 'At the two poles (North and South)',
          explanation: 'Field lines are most tightly concentrated at the magnetic poles.'
        },
        {
          id: 'p4_1_q10',
          subtopicId: 'physics_4_1',
          type: 'multiple_choice',
          question: 'Which device uses a permanent steel magnet rather than an electromagnet?',
          options: ['A magnetic compass needle', 'A scrap metal junkyard crane', 'An electric relay switch', 'A circuit breaker'],
          correctAnswer: 'A magnetic compass needle',
          explanation: 'Compass needles require continuous, permanent magnetic polarity to navigate Earth’s magnetic field.'
        }
      ]
    },
    {
      id: 'physics_4_2',
      chapterId: 'phys_ch4',
      subjectId: 'physics',
      code: '4.2',
      title: 'Electrical Quantities',
      description: 'Electric charge, current, electromotive force (e.m.f.), potential difference (p.d.), and resistance.',
      durationMinutes: 14,
      experience: {
        type: 'electrical_power_grid',
        title: 'Regional Electrical Grid Controller',
        scenario: 'You manage a regional power substation supplying power to residential and commercial sectors.',
        prompt: 'Adjust transformer voltage (V), monitor current flow (I in Amperes), and calculate circuit resistance (R) via Ohm\'s Law V = IR. Watch power P = VI change as loads are added.',
        goal: 'Balance voltage and current to deliver 240 kW of electrical power without overloading the transmission lines.'
      },
      lesson: {
        whatHappened: 'Increasing the voltage increased the electric current driving through fixed resistance loads according to Ohm\'s Law (I = V/R). High resistance components restricted current flow and dissipated electrical energy.',
        academicConcept: 'Current I is the rate of flow of electric charge: I = Q / t (measured in Amperes, 1 A = 1 C/s). Potential difference (p.d.) V is energy transferred per unit charge: V = W / Q (1 Volt = 1 Joule per Coulomb). Ohm\'s Law: V = I × R for an ohmic conductor at constant temperature. Electrical Power: P = I × V = I²R.',
        interactiveDiagram: {
          title: 'The Core Electrical Relationships',
          caption: 'Q = It; V = IR; P = IV; Energy E = IVt',
          keyPoints: [
            'Current (I): Flow of electrons from negative to positive; conventional current is positive to negative.',
            'Ammeters: Connected in SERIES, have very low resistance.',
            'Voltmeters: Connected in PARALLEL across components, have very high resistance.',
            'Ohm\'s Law: Current is directly proportional to potential difference at constant temperature.'
          ]
        },
        workedExample: {
          title: 'Calculating Resistance and Power in a Circuit',
          problem: 'A 12 V car headlight draws a current of 3.0 A. Calculate its resistance and power rating.',
          stepByStep: [
            { step: 'Resistance', detail: 'R = V / I = 12 V / 3.0 A = 4.0 Ω', math: 'R = \\frac{12}{3.0} = 4.0\\ \\Omega' },
            { step: 'Power', detail: 'P = I × V = 3.0 A × 12 V = 36 W', math: 'P = 3.0 \\times 12 = 36\\text{ W}' }
          ],
          keyTakeaway: 'Resistance R = V / I; Power P = IV; electrical energy is dissipated as heat and light.'
        },
        quickChallenge: {
          prompt: 'How must an ammeter and a voltmeter be connected in a circuit to test a resistor?',
          options: ['Both in series', 'Ammeter in series, voltmeter in parallel across the resistor', 'Both in parallel', 'Ammeter in parallel, voltmeter in series'],
          correctIndex: 1,
          explanation: 'Ammeters measure current flowing through a branch (series); voltmeters measure voltage drop between two points (parallel).'
        },
        summary: [
          'Charge Q = I × t; Current is charge flow rate in Amperes.',
          'Ohm’s law states V = IR for ohmic conductors at constant temperature.',
          'Electrical power P = IV = I²R; Energy = P × t = IVt.'
        ]
      },
      questions: [
        {
          id: 'p4_2_q1',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'What is the relationship between electric charge Q, current I, and time t?',
          options: ['Q = I × t', 'Q = I / t', 'I = Q × t', 't = Q × I'],
          correctAnswer: 'Q = I × t',
          explanation: 'Charge (Coulombs) equals Current (Amperes) × Time (seconds).'
        },
        {
          id: 'p4_2_q2',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'A current of 0.5 A flows through a resistor for 2 minutes (120 s). How much charge passes through?',
          options: ['60 C', '1 C', '240 C', '0.25 C'],
          correctAnswer: '60 C',
          explanation: 'Q = I × t = 0.5 A × 120 s = 60 Coulombs.'
        },
        {
          id: 'p4_2_q3',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'What is 1 Volt defined as in terms of energy and charge?',
          options: ['1 Joule per Coulomb', '1 Coulomb per second', '1 Newton per metre', '1 Watt per second'],
          correctAnswer: '1 Joule per Coulomb',
          explanation: 'Potential difference is work done per unit charge: 1 V = 1 J/C.'
        },
        {
          id: 'p4_2_q4',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'A resistor of 10 Ω has a potential difference of 5 V across it. What is the current flowing?',
          options: ['0.5 A', '2.0 A', '50 A', '15 A'],
          correctAnswer: '0.5 A',
          explanation: 'I = V / R = 5 V / 10 Ω = 0.5 A.'
        },
        {
          id: 'p4_2_q5',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'How should an ammeter be connected to measure current through a lamp?',
          options: ['In series with the lamp', 'In parallel across the lamp', 'Across the battery terminals directly', 'Anywhere on the bench'],
          correctAnswer: 'In series with the lamp',
          explanation: 'The full current must flow through the ammeter, which has near-zero internal resistance.'
        },
        {
          id: 'p4_2_q6',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'What happens to the resistance of a metallic filament lamp as current increases and it gets hotter?',
          options: ['Resistance increases because metal ions vibrate more vigorously, impeding electrons', 'Resistance decreases', 'Resistance drops to zero', 'Resistance stays completely constant'],
          correctAnswer: 'Resistance increases because metal ions vibrate more vigorously, impeding electrons',
          explanation: 'Thermal lattice vibrations increase the collision rate with conducting electrons, raising resistance.'
        },
        {
          id: 'p4_2_q7',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'What is the resistance of a component that draws 2 A at 12 V?',
          options: ['6 Ω', '24 Ω', '0.17 Ω', '10 Ω'],
          correctAnswer: '6 Ω',
          explanation: 'R = V / I = 12 / 2 = 6 Ohms.'
        },
        {
          id: 'p4_2_q8',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'Which factor would DECREASE the electrical resistance of a metal wire?',
          options: ['Making the wire thicker (larger cross-sectional area)', 'Making the wire longer', 'Heating the wire', 'Using thinner wire'],
          correctAnswer: 'Making the wire thicker (larger cross-sectional area)',
          explanation: 'Resistance R ∝ L / A; increasing cross-sectional area provides more parallel paths for electrons, decreasing resistance.'
        },
        {
          id: 'p4_2_q9',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'What is the power of a kettle operating on 230 V mains drawing a current of 10 A?',
          options: ['2300 W', '23 W', '240 W', '0.043 W'],
          correctAnswer: '2300 W',
          explanation: 'P = I × V = 10 A × 230 V = 2300 W (2.3 kW).'
        },
        {
          id: 'p4_2_q10',
          subtopicId: 'physics_4_2',
          type: 'multiple_choice',
          question: 'What is electromotive force (e.m.f.) of a cell?',
          options: ['The energy supplied by the source per unit charge in driving charge round a complete circuit', 'The magnetic push on a wire', 'The speed of electrons', 'The mechanical force of gravity'],
          correctAnswer: 'The energy supplied by the source per unit charge in driving charge round a complete circuit',
          explanation: 'e.m.f. represents electrical energy converted from chemical energy per Coulomb of charge.'
        }
      ]
    },
    {
      id: 'physics_4_3',
      chapterId: 'phys_ch4',
      subjectId: 'physics',
      code: '4.3',
      title: 'Electric Circuits',
      description: 'Series and parallel circuits, voltage and current division, and circuit components.',
      durationMinutes: 15,
      experience: {
        type: 'build_the_circuit',
        title: 'Build-the-Circuit Electronics Workshop',
        scenario: 'A robotic rover navigation system has severed circuit traces.',
        prompt: 'Drag cells, switches, resistors, lamps, and ammeters onto the breadboard. Wire lamps in series vs. parallel and observe the dramatic difference in bulb brightness and battery draw.',
        goal: 'Wire two lamps in parallel with a single master switch and verify both lamps burn at full brightness.'
      },
      lesson: {
        whatHappened: 'In a series circuit, removing one lamp broke the circuit and turned off all lamps, and bulbs shared the voltage (dimmer). In a parallel circuit, each branch received the full battery voltage and operated independently.',
        academicConcept: 'Series circuit: Current is identical everywhere: I₁ = I₂ = I_total. Total resistance R_total = R₁ + R₂ + ... Voltage splits: V_total = V₁ + V₂. Parallel circuit: Voltage is identical across each branch: V₁ = V₂ = V_total. Current splits: I_total = I₁ + I₂. Total resistance 1/R_total = 1/R₁ + 1/R₂ (total resistance is less than the smallest individual resistor).',
        interactiveDiagram: {
          title: 'Series vs Parallel Circuit Rules',
          caption: 'Series: Same current, voltages sum. Parallel: Same voltage, currents sum.',
          keyPoints: [
            'Series Resistance: R_total = R₁ + R₂ + R₃.',
            'Parallel Resistance: 1 / R_total = 1/R₁ + 1/R₂.',
            'In parallel, if one lamp blows, other parallel branches continue working normally.',
            'Domestic house lighting is always wired in parallel so each lamp operates at full mains voltage.'
          ]
        },
        workedExample: {
          title: 'Finding Combined Parallel Resistance',
          problem: 'Two resistors of 6 Ω and 3 Ω are connected in parallel to a 12 V battery. Calculate the equivalent resistance and total current from the battery.',
          stepByStep: [
            { step: 'Parallel formula', detail: '1/R_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2' },
            { step: 'Invert', detail: 'R_total = 2.0 Ω', math: 'R_{\\text{total}} = 2.0\\ \\Omega' },
            { step: 'Total current', detail: 'I_total = V / R_total = 12 V / 2.0 Ω = 6.0 A', math: 'I = \\frac{12}{2.0} = 6.0\\text{ A}' }
          ],
          keyTakeaway: 'The equivalent resistance of parallel resistors is always smaller than the smallest branch resistor.'
        },
        quickChallenge: {
          prompt: 'Why are all home electrical appliances wired in parallel rather than in series?',
          options: ['It uses less copper wire', 'Each appliance receives the full mains voltage and can be switched independently', 'It prevents appliances from getting hot', 'Appliances run on half voltage'],
          correctIndex: 1,
          explanation: 'Parallel wiring ensures that every socket provides the full 230 V mains supply, and switching off one appliance does not shut down the rest of the house.'
        },
        summary: [
          'Series: current is constant; voltages add up; R_total = R₁ + R₂.',
          'Parallel: voltage is constant; currents add up; 1/R_total = 1/R₁ + 1/R₂.',
          'Domestic circuits use parallel configurations for independent control.'
        ]
      },
      questions: [
        {
          id: 'p4_3_q1',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'What is the total resistance of three 4 Ω resistors connected in series?',
          options: ['12 Ω', '1.33 Ω', '4 Ω', '0.75 Ω'],
          correctAnswer: '12 Ω',
          explanation: 'R_total = 4 + 4 + 4 = 12 Ohms.'
        },
        {
          id: 'p4_3_q2',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'What is the total equivalent resistance of two 10 Ω resistors connected in parallel?',
          options: ['5 Ω', '20 Ω', '100 Ω', '0.2 Ω'],
          correctAnswer: '5 Ω',
          explanation: '1/R = 1/10 + 1/10 = 2/10 → R = 10/2 = 5 Ohms.'
        },
        {
          id: 'p4_3_q3',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'In a series circuit containing two identical bulbs, what happens if one bulb burns out (filament breaks)?',
          options: ['The other bulb goes out completely', 'The other bulb gets twice as bright', 'The other bulb stays the same', 'The battery explodes'],
          correctAnswer: 'The other bulb goes out completely',
          explanation: 'A broken filament breaks the single continuous series circuit loop, stopping all current.'
        },
        {
          id: 'p4_3_q4',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'A 9 V battery supplies two resistors in series: 2 Ω and 4 Ω. What is the potential difference across the 4 Ω resistor?',
          options: ['6 V', '3 V', '9 V', '4 V'],
          correctAnswer: '6 V',
          explanation: 'Total R = 6 Ω. Current I = 9/6 = 1.5 A. Voltage across 4 Ω = 1.5 A × 4 Ω = 6 V.'
        },
        {
          id: 'p4_3_q5',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'What type of component reduces its resistance dramatically as light intensity increases?',
          options: ['LDR (Light Dependent Resistor)', 'Thermistor', 'Diode', 'Relay'],
          correctAnswer: 'LDR (Light Dependent Resistor)',
          explanation: 'LDRs use semiconductors where incident photons release charge carriers, lowering resistance in bright light.'
        },
        {
          id: 'p4_3_q6',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'What is the function of a semiconductor diode in an electric circuit?',
          options: ['Allows current to flow in one direction only (forward biased)', 'Increases voltage', 'Stores magnetic energy', 'Measures temperature'],
          correctAnswer: 'Allows current to flow in one direction only (forward biased)',
          explanation: 'A diode has very low forward resistance but extremely high reverse resistance.'
        },
        {
          id: 'p4_3_q7',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'What happens to the resistance of an NTC thermistor when its temperature increases?',
          options: ['Its resistance decreases', 'Its resistance increases', 'Its resistance stays constant', 'It breaks permanently'],
          correctAnswer: 'Its resistance decreases',
          explanation: 'Negative Temperature Coefficient (NTC) thermistors release more mobile electrons at higher temperatures, decreasing resistance.'
        },
        {
          id: 'p4_3_q8',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'Two lamps are connected in parallel across a 6 V battery. What is the voltage across each lamp?',
          options: ['6 V across each lamp', '3 V across each lamp', '12 V across each lamp', '0 V across each lamp'],
          correctAnswer: '6 V across each lamp',
          explanation: 'In parallel circuits, every branch experiences the full source potential difference.'
        },
        {
          id: 'p4_3_q9',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'What is a potential divider circuit used for?',
          options: ['Providing a variable output voltage from a fixed input voltage source', 'Converting AC to DC', 'Increasing battery capacity', 'Preventing short circuits'],
          correctAnswer: 'Providing a variable output voltage from a fixed input voltage source',
          explanation: 'Two series resistors divide input voltage in ratio to their resistance values (V_out = V_in × R₂ / (R₁ + R₂)).'
        },
        {
          id: 'p4_3_q10',
          subtopicId: 'physics_4_3',
          type: 'multiple_choice',
          question: 'In a parallel circuit, branch 1 draws 2 A and branch 2 draws 3 A. What is the total current leaving the power supply?',
          options: ['5 A', '1 A', '6 A', '2.5 A'],
          correctAnswer: '5 A',
          explanation: 'At a circuit junction, total current entering equals total current leaving: 2 A + 3 A = 5 A.'
        }
      ]
    },
    {
      id: 'physics_4_4',
      chapterId: 'phys_ch4',
      subjectId: 'physics',
      code: '4.4',
      title: 'Digital Electronics',
      description: 'Analogue vs digital signals, logic gates (AND, OR, NOT, NAND, NOR), and truth tables.',
      durationMinutes: 12,
      experience: {
        type: 'robot_command_panel',
        title: 'Robot Command Logic Panel',
        scenario: 'An industrial assembly robot controller needs binary logic configured to activate the gripper.',
        prompt: 'Test inputs (0 = LOW, 1 = HIGH) through AND, OR, NOT, NAND, and NOR logic gates. Complete the truth table to trigger the robot arm safety interlock.',
        goal: 'Configure an AND gate combined with a NOT gate so the robot arm operates ONLY when (Power = 1 AND Emergency Stop = 0).'
      },
      lesson: {
        whatHappened: 'The logic gates processed binary electrical voltages. The AND gate output 1 only when BOTH inputs were 1. The NOT gate inverted the signal, allowing the emergency safety interlock to stop the robot if an alarm was triggered.',
        academicConcept: 'Analogue signals vary continuously in amplitude. Digital signals exist in only two discrete binary states: HIGH (binary 1, ~5V) and LOW (binary 0, 0V). Logic gates: NOT (inverts), AND (output 1 only if all inputs are 1), OR (output 1 if any input is 1), NAND (opposite of AND), NOR (opposite of OR).',
        interactiveDiagram: {
          title: 'Truth Tables for Digital Logic Gates',
          caption: 'AND, OR, NOT, NAND, NOR binary truth tables and gate symbols',
          keyPoints: [
            'NOT gate: 1 input, 1 output. Input 0 → Output 1; Input 1 → Output 0.',
            'AND gate: 2 inputs. Output is 1 only when Input A = 1 AND Input B = 1.',
            'OR gate: 2 inputs. Output is 1 if Input A = 1 OR Input B = 1 (or both).',
            'NAND gate: AND followed by NOT; Output is 0 only when both inputs are 1.'
          ]
        },
        workedExample: {
          title: 'Determining Output of a Combined Logic Circuit',
          problem: 'An OR gate has inputs A = 0 and B = 1. Its output feeds directly into a NOT gate. What is the final output X?',
          stepByStep: [
            { step: 'OR Gate', detail: 'A = 0, B = 1 → Output of OR gate = 1' },
            { step: 'NOT Gate', detail: 'Input to NOT gate = 1 → Output X = 0' }
          ],
          keyTakeaway: 'Work sequentially through logic gates from input to final output.'
        },
        quickChallenge: {
          prompt: 'What logic gate produces an output of 0 ONLY when both of its inputs are 1?',
          options: ['AND gate', 'OR gate', 'NAND gate', 'NOR gate'],
          correctIndex: 2,
          explanation: 'A NAND gate is an inverted AND gate: it outputs 0 only when both inputs are 1; otherwise its output is 1.'
        },
        summary: [
          'Digital electronics uses discrete binary states: 1 (HIGH) and 0 (LOW).',
          'AND outputs 1 when both inputs are 1; OR outputs 1 when either input is 1.',
          'NOT gate inverts input; NAND and NOR are inverted versions of AND and OR.'
        ]
      },
      questions: [
        {
          id: 'p4_4_q1',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'What is the fundamental difference between an analogue signal and a digital signal?',
          options: ['Analogue varies continuously, while digital has only two discrete binary levels (0 and 1)', 'Analogue travels faster', 'Digital requires thicker wires', 'Analogue is always silent'],
          correctAnswer: 'Analogue varies continuously, while digital has only two discrete binary levels (0 and 1)',
          explanation: 'Analogue can take any voltage value within a range; digital switches between HIGH (1) and LOW (0).'
        },
        {
          id: 'p4_4_q2',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'Which logic gate produces an output of 1 if and only if both input A AND input B are 1?',
          options: ['AND gate', 'OR gate', 'NOT gate', 'NOR gate'],
          correctAnswer: 'AND gate',
          explanation: 'The AND gate truth table has output 1 only for inputs (1, 1).'
        },
        {
          id: 'p4_4_q3',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'What is the output of an OR gate when input A = 1 and input B = 0?',
          options: ['1', '0', '0.5', 'Undefined'],
          correctAnswer: '1',
          explanation: 'An OR gate outputs 1 whenever at least one of its inputs is 1.'
        },
        {
          id: 'p4_4_q4',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'What is the output of a NOT gate when its input is 0?',
          options: ['1', '0', '-1', '2'],
          correctAnswer: '1',
          explanation: 'The NOT gate acts as an inverter: NOT 0 = 1.'
        },
        {
          id: 'p4_4_q5',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'What is the output of a NOR gate when both inputs are 0?',
          options: ['1', '0', 'Both 0 and 1', '-1'],
          correctAnswer: '1',
          explanation: 'OR of (0, 0) is 0; inverting with NOT gives 1.'
        },
        {
          id: 'p4_4_q6',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'Why are digital signals less susceptible to degradation from noise during transmission than analogue signals?',
          options: ['Noise can be filtered out because any voltage near 5V is read as 1 and near 0V as 0', 'Digital signals are immune to gravity', 'Digital wires do not heat up', 'Digital signals have zero frequency'],
          correctAnswer: 'Noise can be filtered out because any voltage near 5V is read as 1 and near 0V as 0',
          explanation: 'Small noise fluctuations do not alter whether a voltage is recognized as binary HIGH or LOW.'
        },
        {
          id: 'p4_4_q7',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'Which gate is often called a universal gate because combinations of it can build all other gates?',
          options: ['NAND gate', 'AND gate', 'NOT gate', 'XOR gate'],
          correctAnswer: 'NAND gate',
          explanation: 'NAND (and NOR) gates are functionally complete; any Boolean function can be implemented using only NAND gates.'
        },
        {
          id: 'p4_4_q8',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'A security alarm must sound if a door sensor opens (Input A = 1) OR a window sensor opens (Input B = 1). Which gate should be used?',
          options: ['OR gate', 'AND gate', 'NOT gate', 'NAND gate'],
          correctAnswer: 'OR gate',
          explanation: 'An OR gate triggers the siren if either sensor or both sensors activate.'
        },
        {
          id: 'p4_4_q9',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'How many input combinations exist for a truth table with 3 binary inputs A, B, and C?',
          options: ['8 (2³)', '6', '3', '9'],
          correctAnswer: '8 (2³)',
          explanation: 'Number of binary combinations = 2ⁿ = 2³ = 8.'
        },
        {
          id: 'p4_4_q10',
          subtopicId: 'physics_4_4',
          type: 'multiple_choice',
          question: 'What gate symbol features a curved back, pointed nose, and a small inversion circle at its output tip?',
          options: ['NOR gate', 'NAND gate', 'AND gate', 'OR gate'],
          correctAnswer: 'NOR gate',
          explanation: 'An OR gate has a curved back and pointed nose; adding an inversion bubble at the output makes it a NOR gate.'
        }
      ]
    },
    {
      id: 'physics_4_5',
      chapterId: 'phys_ch4',
      subjectId: 'physics',
      code: '4.5',
      title: 'Dangers of Electricity',
      description: 'Electrical hazards, damaged insulation, overheating cables, damp conditions, fuses, and earth wires.',
      durationMinutes: 12,
      experience: {
        type: 'house_safety_check',
        title: 'Virtual House Electrical Safety Audit',
        scenario: 'An inspector enters an older domestic home with multiple electrical safety violations.',
        prompt: 'Inspect appliances: detect frayed insulation, an overloaded power strip, a toaster near a water sink, and a missing earth wire on a metal kettle. Select correct fuse ratings (3A, 5A, 13A) to make the house safe.',
        goal: 'Identify and resolve all 4 electrical hazards and correctly size fuses to pass the building safety inspection.'
      },
      lesson: {
        whatHappened: 'Overloading a socket forced excessive current through cables, causing resistive heating and fire hazard. When a live wire touched the metal kettle casing, the earth wire carried the fault current to ground, safely blowing the fuse.',
        academicConcept: 'Hazards: damaged insulation (shock risk), overheating cables (fire risk), damp conditions (water decreases human skin resistance). Safety devices: Fuses contain a thin wire that melts when current exceeds its rating. Circuit breakers (RCCB/MCB) trip magnetically/electronically much faster than fuses. The Earth wire (green/yellow) connects metal appliance casings to ground; if the Live wire touches the case, a huge fault current flows to earth and blows the fuse.',
        interactiveDiagram: {
          title: '3-Pin Plug Wiring & Protective Earthing',
          caption: 'Live (Brown, right with fuse), Neutral (Blue, left), Earth (Green/Yellow, top)',
          keyPoints: [
            'Live Wire (Brown): Alternates between +325V and -325V (230V RMS) carrying electrical power.',
            'Neutral Wire (Blue): Completes the circuit loop at approximately 0V.',
            'Earth Wire (Green/Yellow): Safety ground wire connected to metallic casing.',
            'Fuse is ALWAYS placed in the LIVE wire so that blowing it isolates the appliance from high voltage.'
          ]
        },
        workedExample: {
          title: 'Selecting the Correct Fuse Rating',
          problem: 'An electric toaster is rated at 230 V, 920 W. Should a 3 A, 5 A, or 13 A fuse be fitted into its plug?',
          stepByStep: [
            { step: 'Calculate Normal Operating Current', detail: 'I = P / V = 920 W / 230 V = 4.0 A', math: 'I = \\frac{920}{230} = 4.0\\text{ A}' },
            { step: 'Select Fuse', detail: 'The fuse must be rated just above normal current. A 3A fuse would blow immediately. A 5A fuse is correct.' }
          ],
          keyTakeaway: 'Always choose a fuse rated just slightly above the normal operating current of the appliance.'
        },
        quickChallenge: {
          prompt: 'Why must a fuse always be placed on the LIVE wire rather than the neutral wire?',
          options: ['The live wire carries thicker insulation', 'If the fuse were on the neutral wire, the appliance would remain live at 230V even after the fuse blew', 'Neutral wires do not conduct electricity', 'It is easier to solder on the right side'],
          correctIndex: 1,
          explanation: 'Placing the fuse on the live wire guarantees that when it melts, the appliance is completely disconnected from the dangerous high-voltage supply.'
        },
        summary: [
          'Electrical hazards include frayed insulation, overloaded cables, and water near live circuits.',
          'Fuses melt to protect cables from overheating; circuit breakers trip rapidly.',
          'Earth wire connects metal casing to ground, blowing the fuse if a live-to-casing fault occurs.'
        ]
      },
      questions: [
        {
          id: 'p4_5_q1',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'What color is the Earth wire in a standard UK/international mains electrical plug?',
          options: ['Green and yellow stripes', 'Brown', 'Blue', 'Solid black'],
          correctAnswer: 'Green and yellow stripes',
          explanation: 'Earth is green/yellow; Live is brown; Neutral is blue.'
        },
        {
          id: 'p4_5_q2',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'How does a fuse protect an electrical circuit from catching fire?',
          options: ['Its thin wire heats and melts when current exceeds its designated rating, breaking the circuit', 'It absorbs excess voltage', 'It sprays fire-retardant gas', 'It converts electricity into sound'],
          correctAnswer: 'Its thin wire heats and melts when current exceeds its designated rating, breaking the circuit',
          explanation: 'Fuses are sacrificial thermal overcurrent protection devices.'
        },
        {
          id: 'p4_5_q3',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'A table lamp is rated at 230 V, 60 W. Operating current is ~0.26 A. Which fuse is most suitable?',
          options: ['3 A', '13 A', '30 A', '0.1 A'],
          correctAnswer: '3 A',
          explanation: 'A 3 A fuse is the smallest standard rating above 0.26 A and protects the thin lamp flex.'
        },
        {
          id: 'p4_5_q4',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'What is the danger of plugging multiple high-power heaters into a single multi-way extension adapter?',
          options: ['Total current exceeds the cable rating, causing severe resistive overheating and fire', 'Voltage drops to zero', 'The appliances will run backwards', 'Electricity leaks into the air'],
          correctAnswer: 'Total current exceeds the cable rating, causing severe resistive overheating and fire',
          explanation: 'Currents in parallel sum together (I_total = I₁ + I₂ + ...), causing cable overloading.'
        },
        {
          id: 'p4_5_q5',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'Why does touching electrical switches with wet hands present a high risk of fatal electric shock?',
          options: ['Water and dissolved ions drastically lower skin resistance, increasing current through the heart', 'Water increases the voltage', 'Water is a magnet', 'Water makes wires melt'],
          correctAnswer: 'Water and dissolved ions drastically lower skin resistance, increasing current through the heart',
          explanation: 'Dry skin has resistance >10,000 Ω, but wet skin drops to <1,000 Ω, allowing dangerous currents to flow.'
        },
        {
          id: 'p4_5_q6',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'What does the double-insulated symbol (a square inside a square) on a power drill indicate?',
          options: ['The appliance has non-conductive plastic casing and requires no Earth wire', 'The drill has two batteries', 'The appliance is waterproof', 'The drill runs twice as fast'],
          correctAnswer: 'The appliance has non-conductive plastic casing and requires no Earth wire',
          explanation: 'Double insulation means electrical components are encased in two independent insulating layers, eliminating shock risk.'
        },
        {
          id: 'p4_5_q7',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'What is a key advantage of a modern Residual Current Circuit Breaker (RCCB) over a traditional wire fuse?',
          options: ['It disconnects in milliseconds upon detecting a current leakage to ground and can be reset easily', 'It never needs electricity', 'It increases mains voltage', 'It allows infinitely large currents'],
          correctAnswer: 'It disconnects in milliseconds upon detecting a current leakage to ground and can be reset easily',
          explanation: 'RCCBs detect tiny imbalances (~30 mA) between live and neutral in <40 ms, saving lives.'
        },
        {
          id: 'p4_5_q8',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'What happens if a live wire comes loose and touches the metal chassis of an earthed appliance?',
          options: ['A massive current flows safely through the low-resistance earth wire, blowing the fuse immediately', 'The appliance becomes silently live and shocks anyone who touches it', 'The chassis turns into a magnet', 'The electricity is stored in the casing'],
          correctAnswer: 'A massive current flows safely through the low-resistance earth wire, blowing the fuse immediately',
          explanation: 'The earth wire provides an ultra-low resistance path to ground, generating a surge that melts the fuse.'
        },
        {
          id: 'p4_5_q9',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'Why should cables running to high-power appliances (like electric ovens) have thicker copper cores?',
          options: ['Thicker wire has lower resistance, minimizing heating according to P = I²R', 'Thicker wire looks nicer', 'Thicker wire increases voltage', 'Thicker wire is more flexible'],
          correctAnswer: 'Thicker wire has lower resistance, minimizing heating according to P = I²R',
          explanation: 'Large cross-sectional area reduces resistance, preventing cable overheating under heavy currents.'
        },
        {
          id: 'p4_5_q10',
          subtopicId: 'physics_4_5',
          type: 'multiple_choice',
          question: 'Which pin in a standard 3-pin plug is the longest, and why?',
          options: ['The Earth pin, so it connects first and opens the live/neutral safety shutters in the socket', 'The Live pin, for power', 'The Neutral pin, for balance', 'All three pins are always identical'],
          correctAnswer: 'The Earth pin, so it connects first and opens the live/neutral safety shutters in the socket',
          explanation: 'The longer Earth pin ensures protective earthing is established before the live pins can engage.'
        }
      ]
    },
    {
      id: 'physics_4_6',
      chapterId: 'phys_ch4',
      subjectId: 'physics',
      code: '4.6',
      title: 'Electromagnetic Effects',
      description: 'Electromagnetic induction, Faraday’s law, Lenz’s law, AC generators, and transformers.',
      durationMinutes: 15,
      experience: {
        type: 'electromagnet_crane',
        title: 'Electromagnet Scrapyard Crane Simulator',
        scenario: 'You operate a massive electromagnetic salvage crane in a vehicle recycling yard.',
        prompt: 'Vary the electric current (0 to 50 A), change the number of coil turns (100 to 1000), and insert a soft iron core. Observe the magnetic lifting strength and pick up scrap metal car frames.',
        goal: 'Tune coil turns and current to lift a 2,500 kg steel truck chassis and drop it cleanly into the shredder.'
      },
      lesson: {
        whatHappened: 'Increasing the electric current and winding more turns of wire concentrated the magnetic field. Adding a soft iron core boosted magnetic strength by hundreds of times, allowing heavy scrap to be lifted and instantly dropped by switching off the current.',
        academicConcept: 'Electromagnet: Solenoid with a soft iron core. Strength increases with: (1) larger current, (2) more turns of wire, (3) iron core. Electromagnetic induction: When a conductor moves through a magnetic field or cuts magnetic field lines, an e.m.f. is induced. Faraday’s Law: induced e.m.f. is proportional to the rate of cutting field lines. Transformers change AC voltages: Vp / Vs = Np / Ns. Ideal transformer power: Vp × Ip = Vs × Is.',
        interactiveDiagram: {
          title: 'Electromagnetic Induction & Transformers',
          caption: 'Faraday\'s Law (cutting flux induces e.m.f.); Transformer equation Vp/Vs = Np/Ns',
          keyPoints: [
            'Electromagnet advantage: Can be switched ON and OFF instantly and strength can be varied.',
            'AC Generator: Coil rotates in magnetic field, cutting flux lines; slip rings and brushes produce alternating current.',
            'Step-up transformer: Ns > Np → Vs > Vp (increases voltage, reduces current for efficient grid transmission).',
            'Step-down transformer: Ns < Np → Vs < Vp (reduces high transmission voltage to safe domestic 230V).'
          ]
        },
        workedExample: {
          title: 'Calculating Output Voltage of a Transformer',
          problem: 'A step-down transformer has 2000 turns on its primary coil and 100 turns on its secondary coil. If primary voltage is 240 V AC, calculate secondary output voltage.',
          stepByStep: [
            { step: 'Formula', detail: 'Vs / Vp = Ns / Np' },
            { step: 'Rearrange', detail: 'Vs = Vp × (Ns / Np) = 240 V × (100 / 2000) = 240 × 0.05 = 12 V', math: 'V_s = 240 \\times \\frac{100}{2000} = 12\\text{ V}' }
          ],
          keyTakeaway: 'The turns ratio directly determines the voltage transformation: Vs / Vp = Ns / Np.'
        },
        quickChallenge: {
          prompt: 'Why is electricity transmitted across national grid power lines at extremely high voltages (e.g. 400,000 V)?',
          options: ['High voltage pushes electricity faster', 'Higher voltage means lower current for the same power (P = IV), massively reducing I²R heat losses in cables', 'Transformers only work at 400 kV', 'High voltage prevents birds from landing'],
          correctIndex: 1,
          explanation: 'P = IV means transmitting at high voltage requires very low current I. Since heat energy loss in wires is P_loss = I²R, reducing current minimizes transmission losses.'
        },
        summary: [
          'Electromagnet strength depends on current, number of coil turns, and iron core.',
          'Electromagnetic induction occurs when a conductor cuts magnetic field lines.',
          'Transformers change AC voltages: Vp / Vs = Np / Ns; Step-up reduces I²R transmission power losses.'
        ]
      },
      questions: [
        {
          id: 'p4_6_q1',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'What three factors increase the strength of an electromagnet?',
          options: ['Increasing current, increasing number of turns of wire, adding a soft iron core', 'Decreasing current, using plastic wire, cooling the core', 'Using DC instead of AC only', 'Painting the coil blue'],
          correctAnswer: 'Increasing current, increasing number of turns of wire, adding a soft iron core',
          explanation: 'Magnetic field strength B ∝ (n × I), and soft iron has high magnetic permeability.'
        },
        {
          id: 'p4_6_q2',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'What induces an electromotive force (e.m.f.) in a coil of wire?',
          options: ['Moving a magnet into or out of the coil so magnetic field lines are cut', 'Leaving a magnet completely stationary inside the coil', 'Holding the coil near a wooden block', 'Painting the wire red'],
          correctAnswer: 'Moving a magnet into or out of the coil so magnetic field lines are cut',
          explanation: 'Faraday’s Law: an e.m.f. is induced only when there is relative motion cutting magnetic flux lines.'
        },
        {
          id: 'p4_6_q3',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'A transformer has primary turns Np = 500 and secondary turns Ns = 1000. What type of transformer is this?',
          options: ['Step-up transformer', 'Step-down transformer', 'Isolation transformer', 'DC inverter'],
          correctAnswer: 'Step-up transformer',
          explanation: 'When Ns > Np, the output voltage is higher than input voltage (step-up).'
        },
        {
          id: 'p4_6_q4',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'Why will a transformer NOT work when connected to a steady Direct Current (DC) battery?',
          options: ['DC creates a static magnetic field that does not change, so no flux lines are cut in the secondary coil', 'DC has too much voltage', 'Transformers melt under DC', 'DC only flows in circles'],
          correctAnswer: 'DC creates a static magnetic field that does not change, so no flux lines are cut in the secondary coil',
          explanation: 'Induction requires a changing magnetic flux (dΦ/dt), which only alternating current (AC) provides.'
        },
        {
          id: 'p4_6_q5',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'In an AC generator, what components are used to maintain continuous sliding electrical contact with the rotating coil without tangling wires?',
          options: ['Slip rings and carbon brushes', 'Commutator split rings', 'Permanent magnets', 'Insulated fuses'],
          correctAnswer: 'Slip rings and carbon brushes',
          explanation: 'Two circular slip rings rotate with the coil while stationary carbon brushes press against them to draw AC.'
        },
        {
          id: 'p4_6_q6',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'According to Fleming\'s Left-Hand Rule for motors, what does the Thumb represent?',
          options: ['Direction of Motion / Force (ThuMb)', 'Magnetic Field (First finger)', 'Electric Current (seCond finger)', 'Voltage'],
          correctAnswer: 'Direction of Motion / Force (ThuMb)',
          explanation: 'Thumb = Motion/Force; First finger = Field (North to South); Second finger = Current (+ to -).'
        },
        {
          id: 'p4_6_q7',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'An ideal transformer has 230 V on primary with 2 A current. Secondary voltage is 23 V. What is secondary current?',
          options: ['20 A', '0.2 A', '2 A', '46 A'],
          correctAnswer: '20 A',
          explanation: 'For a 100% efficient transformer, Vp × Ip = Vs × Is → 230 × 2 = 23 × Is → Is = 460 / 23 = 20 A.'
        },
        {
          id: 'p4_6_q8',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'Why is the core of an iron transformer made of laminated sheets glued together rather than a solid iron block?',
          options: ['To reduce eddy currents and minimise thermal energy waste in the core', 'To make it lighter', 'To make it easier to paint', 'To allow air cooling inside'],
          correctAnswer: 'To reduce eddy currents and minimise thermal energy waste in the core',
          explanation: 'Laminations break up circulating eddy currents induced in the conducting iron, improving efficiency.'
        },
        {
          id: 'p4_6_q9',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'According to Lenz’s Law, what is the direction of an induced current?',
          options: ['It flows in a direction that opposes the change producing it', 'It always flows clockwise', 'It flows in the same direction as the magnet', 'It points towards the ground'],
          correctAnswer: 'It flows in a direction that opposes the change producing it',
          explanation: 'Lenz’s law is a direct consequence of the conservation of energy.'
        },
        {
          id: 'p4_6_q10',
          subtopicId: 'physics_4_6',
          type: 'multiple_choice',
          question: 'In a DC electric motor, what component reverses current direction in the rotating coil every half-turn to keep rotation continuous?',
          options: ['Split-ring commutator', 'Slip rings', 'Soft iron armature', 'Rheostat'],
          correctAnswer: 'Split-ring commutator',
          explanation: 'The split ring reverses current every 180° so the torque continues in the same rotational direction.'
        }
      ]
    }
  ]
};
