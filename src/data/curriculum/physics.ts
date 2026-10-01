import { Chapter } from '../../types';
import { physicsWavesChapter } from './physics_waves';
import { physicsElectricityChapter } from './physics_em';
import { physicsAtomicSpaceChapters } from './physics_atomic_space';

const basePhysicsChapters: Chapter[] = [
  {
    id: 'phys_ch1',
    subjectId: 'physics',
    number: 1,
    title: 'General Physics',
    description: 'Measurements, mechanics, forces, energy, momentum and pressure in physical systems.',
    subtopics: [
      {
        id: 'physics_1_1',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.1',
        title: 'Length and Time',
        description: 'Use rules, calipers, micrometers and stopwatches to measure physical dimensions accurately.',
        durationMinutes: 12,
        experience: {
          type: 'aircraft_preflight',
          title: 'Aircraft Pre-Flight Measurement Challenge',
          scenario: 'You are the Chief Flight Engineer on the runway prepping a Boeing 787 for takeoff.',
          prompt: 'Select the correct measuring instrument and measure the runway clearance, fuselage diameter, wing thickness, and engine spin time.',
          goal: 'Perform all 4 pre-flight checks with the appropriate instruments to clear the aircraft for takeoff.'
        },
        lesson: {
          whatHappened: 'In the pre-flight check, choosing a ruler for a tiny wing rivet or a tape measure for a 3km runway caused measurement errors. Different magnitudes require different measuring instruments with matching precision.',
          academicConcept: 'Measurement precision depends on the instrument: rulers measure to 1 mm (0.1 cm), Vernier calipers to 0.1 mm (0.01 cm), and micrometers to 0.01 mm (0.001 cm). Time measurements must account for human reaction time (~0.2s) using digital timers or averaging multiple periods.',
          interactiveDiagram: {
            title: 'Precision Hierarchy of Measuring Tools',
            caption: 'Metre Rule (1mm) → Vernier Caliper (0.1mm) → Micrometer Screw Gauge (0.01mm)',
            keyPoints: [
              'Metre Rule: Appropriate for lengths between 1 cm and 1 m, uncertainty ±1 mm.',
              'Vernier Caliper: Measures internal/external diameters up to 15 cm with 0.1 mm precision.',
              'Micrometer Screw Gauge: Measures tiny thicknesses (wire, sheet metal) up to 25 mm with 0.01 mm precision.',
              'Measuring Time: For small periods (pendulum oscillations), measure 20 oscillations and divide by 20 to reduce reaction time error.'
            ]
          },
          workedExample: {
            title: 'Calculating Period of Oscillation with Reduced Uncertainty',
            problem: 'A student uses a stopwatch to measure the time for 20 complete swings of a pendulum. The recorded time is 32.4 seconds. What is the period T of one swing, and why was this method used?',
            stepByStep: [
              { step: 'Formula', detail: 'T = Total Time / Number of Swings' },
              { step: 'Calculation', detail: 'T = 32.4 s / 20 = 1.62 s', math: 'T = \\frac{32.4}{20} = 1.62\\text{ s}' },
              { step: 'Scientific Justification', detail: 'Human reaction time error (±0.2 s) is spread over 20 oscillations, reducing the percentage error by a factor of 20.' }
            ],
            keyTakeaway: 'Always measure multiple cycles (e.g. 20 oscillations) to minimize the impact of stopwatch starting and stopping human error.'
          },
          quickChallenge: {
            prompt: 'Which instrument is most suitable for measuring the diameter of a thin copper wire with a diameter of approximately 0.45 mm?',
            options: ['A 30 cm plastic ruler', 'A Vernier caliper', 'A Micrometer screw gauge', 'A measuring tape'],
            correctIndex: 2,
            explanation: 'A micrometer screw gauge has an accuracy of 0.01 mm, making it the only instrument with sufficient resolution to measure a 0.45 mm wire accurately.'
          },
          summary: [
            'Metre rules measure to 1 mm precision; calipers measure to 0.1 mm; micrometers measure to 0.01 mm.',
            'Volume of irregular objects can be determined by water displacement in a measuring cylinder.',
            'Measure multiple periods of periodic events to mitigate human reaction time inaccuracies.'
          ]
        },
        questions: [
          {
            id: 'p1_1_q1',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'Which instrument is best suited to measure the internal diameter of a test tube?',
            options: ['Metre rule', 'Vernier caliper internal jaws', 'Micrometer screw gauge', 'Measuring tape'],
            correctAnswer: 'Vernier caliper internal jaws',
            explanation: 'Vernier calipers possess dedicated internal measuring jaws designed specifically to expand inside cylindrical cavities.',
            misconceptionAlert: 'Micrometers cannot measure inside cavities because their anvil and spindle face each other externally.',
            retryQuestion: {
              question: 'Which instrument should be used to measure the thickness of a single sheet of paper?',
              options: ['Metre rule', 'Micrometer screw gauge', 'Vernier caliper', 'Measuring cylinder'],
              correctAnswer: 'Micrometer screw gauge',
              explanation: 'A single sheet of paper is around 0.1 mm thick; only a micrometer has 0.01 mm precision.'
            }
          },
          {
            id: 'p1_1_q2',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'A stopwatch shows 40.0 s for 25 swings of a pendulum. What is the period of one swing?',
            options: ['1.60 s', '0.625 s', '1000 s', '15.0 s'],
            correctAnswer: '1.60 s',
            explanation: 'Period T = total time / number of oscillations = 40.0 s / 25 = 1.60 s.',
            misconceptionAlert: 'Do not divide number of swings by time; period is time per swing (seconds per swing).'
          },
          {
            id: 'p1_1_q3',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'What is the main advantage of taking the time of 20 swings instead of 1 swing?',
            options: ['The pendulum swings faster', 'It eliminates air resistance', 'It reduces the effect of human reaction time error', 'It increases the gravity acting on the bob'],
            correctAnswer: 'It reduces the effect of human reaction time error',
            explanation: 'Human reaction time is roughly 0.2 s. Dividing over 20 oscillations spreads this error across all swings.'
          },
          {
            id: 'p1_1_q4',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'A micrometer sleeve reads 3.5 mm and the thimble scale reads 24 hundredths of a millimetre (0.24 mm). What is the total reading?',
            options: ['3.74 mm', '3.24 mm', '3.524 mm', '0.59 mm'],
            correctAnswer: '3.74 mm',
            explanation: 'Total = main scale + thimble scale = 3.50 mm + 0.24 mm = 3.74 mm.'
          },
          {
            id: 'p1_1_q5',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'A measuring cylinder contains 50 cm³ of water. A stone of mass 30 g is immersed, and the water rises to 62 cm³. What is the volume of the stone?',
            options: ['12 cm³', '112 cm³', '50 cm³', '62 cm³'],
            correctAnswer: '12 cm³',
            explanation: 'Volume of the stone = Final volume - Initial volume = 62 cm³ - 50 cm³ = 12 cm³.'
          },
          {
            id: 'p1_1_q6',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'When reading the meniscus in a measuring cylinder filled with water, where should the student eye level be?',
            options: ['At the top of the curve to be safe', 'Level with the bottom of the curved meniscus', 'Looking downwards from a 45 degree angle', 'Anywhere as long as lighting is bright'],
            correctAnswer: 'Level with the bottom of the curved meniscus',
            explanation: 'Viewing at eye level aligned with the bottom of the meniscus avoids parallax error.'
          },
          {
            id: 'p1_1_q7',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'Which of the following is equivalent to 1 millimetre?',
            options: ['0.001 m', '0.01 m', '0.1 cm', 'Both 0.001 m and 0.1 cm'],
            correctAnswer: 'Both 0.001 m and 0.1 cm',
            explanation: '1 m = 1000 mm, so 1 mm = 0.001 m; 1 cm = 10 mm, so 1 mm = 0.1 cm.'
          },
          {
            id: 'p1_1_q8',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'An irregular solid dissolves in water. How can its volume be determined experimentally?',
            options: ['Dissolve it and weigh the solution', 'Immerse it in a liquid in which it does not dissolve (e.g. paraffin)', 'Heat it until it melts', 'Use a ruler and measure diagonal length'],
            correctAnswer: 'Immerse it in a liquid in which it does not dissolve (e.g. paraffin)',
            explanation: 'Using an inert liquid allows the displacement method without the solid dissolving.'
          },
          {
            id: 'p1_1_q9',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'What type of error is caused when viewing a scale from an angle rather than directly perpendicular?',
            options: ['Zero error', 'Parallax error', 'Random calibration shift', 'Friction error'],
            correctAnswer: 'Parallax error',
            explanation: 'Parallax error occurs when the line of sight is not perpendicular to the scale.'
          },
          {
            id: 'p1_1_q10',
            subtopicId: 'physics_1_1',
            type: 'multiple_choice',
            question: 'A digital stopwatch reads 01:24.85. How many total seconds is this?',
            options: ['84.85 s', '124.85 s', '64.85 s', '24.85 s'],
            correctAnswer: '84.85 s',
            explanation: '1 minute = 60 seconds; 60 + 24.85 = 84.85 seconds.'
          }
        ]
      },
      {
        id: 'physics_1_2',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.2',
        title: 'Motion',
        description: 'Speed, velocity, acceleration, distance-time graphs, and speed-time graphs.',
        durationMinutes: 14,
        experience: {
          type: 'racing_track',
          title: 'Racing-Track Speed Challenge',
          scenario: 'A Formula-1 telemetry simulator records a race car speeding along a test straightaway.',
          prompt: 'Adjust the throttle and braking to observe the live distance-time and speed-time curves. Identify stationary, constant speed, acceleration, and deceleration zones.',
          goal: 'Complete a lap while generating clean acceleration, constant cruising, and controlled braking phases.'
        },
        lesson: {
          whatHappened: 'When the car accelerated, the distance-time graph curved upwards while the speed-time graph showed an upward straight line slope. When the car stopped, speed became zero, and distance stayed flat.',
          academicConcept: 'Speed = distance / time. Acceleration = (v - u) / t. On a distance-time graph, the gradient represents speed. On a speed-time graph, the gradient represents acceleration, and the area under the graph equals distance travelled.',
          interactiveDiagram: {
            title: 'Graph Interpretation in Kinematics',
            caption: 'Gradient of distance-time = Speed; Gradient of speed-time = Acceleration; Area under speed-time = Distance',
            keyPoints: [
              'Horizontal line on distance-time graph: Object is stationary (speed = 0).',
              'Straight sloping line on distance-time graph: Constant speed.',
              'Curved line on distance-time graph: Changing speed (acceleration or deceleration).',
              'Area under a speed-time graph: Split into rectangles and triangles to calculate total distance travelled.'
            ]
          },
          workedExample: {
            title: 'Finding Distance from a Speed-Time Graph',
            problem: 'A car accelerates uniformly from rest to 20 m/s in 5 seconds, then travels at 20 m/s for 10 seconds. Calculate the total distance travelled.',
            stepByStep: [
              { step: 'Phase 1 Area (Triangle)', detail: 'Area = 1/2 × base × height = 0.5 × 5 s × 20 m/s = 50 m', math: 'd_1 = \\frac{1}{2} \\times 5 \\times 20 = 50\\text{ m}' },
              { step: 'Phase 2 Area (Rectangle)', detail: 'Area = base × height = 10 s × 20 m/s = 200 m', math: 'd_2 = 10 \\times 20 = 200\\text{ m}' },
              { step: 'Total Distance', detail: 'Total = 50 m + 200 m = 250 m', math: 'd_{\\text{total}} = 250\\text{ m}' }
            ],
            keyTakeaway: 'The total distance is always given by the total geometric area under the speed-time curve.'
          },
          quickChallenge: {
            prompt: 'What does a horizontal line above zero on a speed-time graph indicate?',
            options: ['The object is stationary', 'The object is moving at constant acceleration', 'The object is moving at constant speed', 'The object is turning around'],
            correctIndex: 2,
            explanation: 'A horizontal line means speed is not changing over time, which defines constant speed (acceleration = 0).'
          },
          summary: [
            'Average speed = total distance / total time; units are m/s.',
            'Acceleration = change in velocity / time taken; units are m/s².',
            'The gradient of a distance-time graph equals speed.',
            'The gradient of a speed-time graph equals acceleration; the area underneath equals distance.'
          ]
        },
        questions: [
          {
            id: 'p1_2_q1',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'What does the gradient of a distance-time graph represent?',
            options: ['Acceleration', 'Speed', 'Total distance', 'Force'],
            correctAnswer: 'Speed',
            explanation: 'Gradient = change in y / change in x = distance / time = speed.'
          },
          {
            id: 'p1_2_q2',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'How is the distance travelled calculated from a speed-time graph?',
            options: ['Find the gradient', 'Calculate the area under the graph', 'Read the highest peak value', 'Divide final speed by time'],
            correctAnswer: 'Calculate the area under the graph',
            explanation: 'Speed × Time = Distance, which geometrically equals the area under the curve.'
          },
          {
            id: 'p1_2_q3',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'A train accelerates from 10 m/s to 30 m/s in 5 seconds. What is its acceleration?',
            options: ['4.0 m/s²', '2.0 m/s²', '8.0 m/s²', '20 m/s²'],
            correctAnswer: '4.0 m/s²',
            explanation: 'a = (v - u) / t = (30 - 10) / 5 = 20 / 5 = 4.0 m/s².'
          },
          {
            id: 'p1_2_q4',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'An object falls freely near the surface of Earth in a vacuum. What is its approximate acceleration?',
            options: ['9.8 m/s²', '0 m/s²', '100 m/s²', '1.6 m/s²'],
            correctAnswer: '9.8 m/s²',
            explanation: 'Acceleration of free fall g near Earth is approximately 9.8 m/s² (or 10 m/s² in Cambridge IGCSE).'
          },
          {
            id: 'p1_2_q5',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'When a skydiver reaches terminal velocity, what is their acceleration?',
            options: ['9.8 m/s²', '0 m/s²', '-9.8 m/s²', 'Infinite'],
            correctAnswer: '0 m/s²',
            explanation: 'At terminal velocity, air resistance equals weight, resultant force is zero, hence acceleration is 0.'
          },
          {
            id: 'p1_2_q6',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'A cyclist travels 1200 m in 2 minutes. What is the average speed in m/s?',
            options: ['10 m/s', '600 m/s', '20 m/s', '12 m/s'],
            correctAnswer: '10 m/s',
            explanation: '2 minutes = 120 seconds. Speed = 1200 m / 120 s = 10 m/s.'
          },
          {
            id: 'p1_2_q7',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'Which of the following quantities is a vector?',
            options: ['Distance', 'Speed', 'Velocity', 'Time'],
            correctAnswer: 'Velocity',
            explanation: 'Velocity has both magnitude (speed) and a specified direction.'
          },
          {
            id: 'p1_2_q8',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'A car slows down uniformly from 25 m/s to a stop in 5 seconds. What is its deceleration?',
            options: ['5 m/s²', '-5 m/s²', '125 m/s²', '0.2 m/s²'],
            correctAnswer: '5 m/s²',
            explanation: 'Deceleration is the rate of decrease in speed: 25 / 5 = 5 m/s².'
          },
          {
            id: 'p1_2_q9',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'If a distance-time graph curves so that the gradient becomes steeper, what is happening to the object?',
            options: ['It is slowing down', 'It is accelerating', 'It is moving at constant velocity', 'It is travelling backwards'],
            correctAnswer: 'It is accelerating',
            explanation: 'Steeper gradient on distance-time graph means increasing speed, which is acceleration.'
          },
          {
            id: 'p1_2_q10',
            subtopicId: 'physics_1_2',
            type: 'multiple_choice',
            question: 'What is the speed of an object that remains at the 50 m mark on a distance-time graph for 10 seconds?',
            options: ['5 m/s', '0 m/s', '50 m/s', '500 m/s'],
            correctAnswer: '0 m/s',
            explanation: 'Distance is constant, position is not changing, so speed is 0 m/s.'
          }
        ]
      },
      {
        id: 'physics_1_3',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.3',
        title: 'Mass and Weight',
        description: 'Distinguish between mass and weight and understand gravitational field strength.',
        durationMinutes: 10,
        experience: {
          type: 'space_station_cargo',
          title: 'Space Station Cargo Lifting Challenge',
          scenario: 'You are transferring containers on the International Space Station, Moon base, and Earth launchpad.',
          prompt: 'Switch between gravity fields (Earth g=9.8 N/kg, Moon g=1.6 N/kg, Orbit g=0 N/kg). Test lifting a 50 kg cargo box and note the difference in mass versus weight.',
          goal: 'Verify that the cargo mass stays exactly 50 kg everywhere, while weight drops from 490 N to 80 N on the Moon and 0 N in orbit.'
        },
        lesson: {
          whatHappened: 'The cargo box was equally hard to shake back and forth (same inertia/mass) on Earth, the Moon, and orbit, but lifting it required 490 N on Earth, only 80 N on the Moon, and 0 N in microgravity.',
          academicConcept: 'Mass is the quantity of matter in an object and its measure of inertia (resistance to change in motion), measured in kilograms (kg). Weight is the gravitational force acting on an object, measured in newtons (N), given by W = m × g.',
          interactiveDiagram: {
            title: 'Mass vs. Weight Comparison',
            caption: 'Mass is invariant everywhere; Weight changes with gravitational field strength g.',
            keyPoints: [
              'Mass (m): Scalar quantity, measured in kg using a balance.',
              'Weight (W): Vector force, measured in N using a spring balance / newton meter.',
              'Gravitational field strength (g): Force per unit mass (N/kg).',
              'On Earth: g ≈ 9.8 N/kg; On Moon: g ≈ 1.6 N/kg; In deep space: g ≈ 0 N/kg.'
            ]
          },
          workedExample: {
            title: 'Calculating Weight on Different Worlds',
            problem: 'An astronaut has a mass of 75 kg. Calculate their weight on Earth (g = 9.8 N/kg) and on Mars (g = 3.7 N/kg).',
            stepByStep: [
              { step: 'Earth Weight', detail: 'W = m × g = 75 kg × 9.8 N/kg = 735 N', math: 'W_{\\text{Earth}} = 75 \\times 9.8 = 735\\text{ N}' },
              { step: 'Mars Weight', detail: 'W = m × g = 75 kg × 3.7 N/kg = 277.5 N', math: 'W_{\\text{Mars}} = 75 \\times 3.7 = 277.5\\text{ N}' },
              { step: 'Mass on Mars', detail: 'The astronaut mass remains 75 kg on Mars.' }
            ],
            keyTakeaway: 'Mass never changes when moving between planets; only weight changes because g varies.'
          },
          quickChallenge: {
            prompt: 'If a rock has a mass of 12 kg on Earth, what is its mass on the Moon where gravity is 1/6th of Earth?',
            options: ['2 kg', '12 kg', '72 kg', '0 kg'],
            correctIndex: 1,
            explanation: 'Mass is the amount of matter in the rock and remains 12 kg regardless of location.'
          },
          summary: [
            'Mass is a measure of the quantity of matter in an object (kg).',
            'Weight is the gravitational force acting on a mass: W = mg (N).',
            'Gravitational field strength g is gravitational force per unit mass (N/kg).'
          ]
        },
        questions: [
          {
            id: 'p1_3_q1',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'What is the SI unit of weight?',
            options: ['Kilogram (kg)', 'Newton (N)', 'Joule (J)', 'Watt (W)'],
            correctAnswer: 'Newton (N)',
            explanation: 'Weight is a gravitational force, so its SI unit is the newton.'
          },
          {
            id: 'p1_3_q2',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'What instrument is used to measure weight directly?',
            options: ['Beam balance', 'Spring balance (newton meter)', 'Micrometer', 'Thermometer'],
            correctAnswer: 'Spring balance (newton meter)',
            explanation: 'A spring balance measures the gravitational stretching force (weight).'
          },
          {
            id: 'p1_3_q3',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'An object has a weight of 200 N on Earth (g = 10 N/kg). What is its mass?',
            options: ['20 kg', '2000 kg', '2 kg', '200 kg'],
            correctAnswer: '20 kg',
            explanation: 'm = W / g = 200 N / 10 N/kg = 20 kg.'
          },
          {
            id: 'p1_3_q4',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'Which statement correctly defines gravitational field strength g?',
            options: ['Mass per unit volume', 'Gravitational force per unit mass', 'Acceleration divided by speed', 'Work done per unit time'],
            correctAnswer: 'Gravitational force per unit mass',
            explanation: 'g = W / m, expressed in newtons per kilogram (N/kg).'
          },
          {
            id: 'p1_3_q5',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'What property of an object resists any change in its state of rest or motion?',
            options: ['Weight', 'Inertia (due to mass)', 'Friction alone', 'Density'],
            correctAnswer: 'Inertia (due to mass)',
            explanation: 'Inertia is the property of mass that resists changes in velocity.'
          },
          {
            id: 'p1_3_q6',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'On Jupiter, g = 25 N/kg. What is the weight of a 4 kg parcel on Jupiter?',
            options: ['100 N', '6.25 N', '4 N', '25 N'],
            correctAnswer: '100 N',
            explanation: 'W = m × g = 4 kg × 25 N/kg = 100 N.'
          },
          {
            id: 'p1_3_q7',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'Why does an astronaut feel weightless inside an orbiting space station?',
            options: ['Gravity is zero in orbit', 'The astronaut and station are both in free fall around Earth', 'Air has been removed', 'Magnetic shielding blocks gravity'],
            correctAnswer: 'The astronaut and station are both in free fall around Earth',
            explanation: 'Earth gravity is still ~90% as strong in low Earth orbit, but both astronaut and station fall together in continuous orbit.'
          },
          {
            id: 'p1_3_q8',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'What happens to the mass of an ice cube as it melts into liquid water?',
            options: ['Mass increases', 'Mass decreases', 'Mass remains constant', 'Mass drops to zero'],
            correctAnswer: 'Mass remains constant',
            explanation: 'Melting is a physical state change; the number of water molecules remains identical.'
          },
          {
            id: 'p1_3_q9',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'A bag of sugar has a mass of 1.0 kg on Earth. What is its weight on the Moon (g = 1.6 N/kg)?',
            options: ['1.6 N', '9.8 N', '16 N', '0.16 N'],
            correctAnswer: '1.6 N',
            explanation: 'W = mg = 1.0 kg × 1.6 N/kg = 1.6 N.'
          },
          {
            id: 'p1_3_q10',
            subtopicId: 'physics_1_3',
            type: 'multiple_choice',
            question: 'Which of the following is a scalar quantity?',
            options: ['Weight', 'Gravitational field strength', 'Mass', 'Resultant force'],
            correctAnswer: 'Mass',
            explanation: 'Mass has magnitude only, with no direction, making it a scalar.'
          }
        ]
      },
      {
        id: 'physics_1_4',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.4',
        title: 'Density',
        description: 'Calculate density and determine whether materials float or sink in liquids.',
        durationMinutes: 12,
        experience: {
          type: 'float_or_sink',
          title: 'Float-or-Sink Density Tank',
          scenario: 'A naval buoyancy testing pool is filled with water (density 1.0 g/cm³).',
          prompt: 'Drop wood (0.6 g/cm³), aluminium (2.7 g/cm³), ice (0.92 g/cm³), and gold (19.3 g/cm³) into the tank. Adjust mass and volume sliders to observe real-time flotation levels.',
          goal: 'Discover the exact density threshold where an object transitions from floating to sinking.'
        },
        lesson: {
          whatHappened: 'Objects with a density lower than 1.0 g/cm³ floated with a fraction submerged equal to their density ratio. Objects denser than water sank immediately to the bottom.',
          academicConcept: 'Density is mass per unit volume: ρ = m / V. Standard SI units are kg/m³ (1 g/cm³ = 1000 kg/m³). An object floats in a fluid if its average density is less than the fluid density.',
          interactiveDiagram: {
            title: 'Buoyancy & Density Relationship',
            caption: 'If ρ_object < ρ_fluid: Floats. If ρ_object > ρ_fluid: Sinks.',
            keyPoints: [
              'Density formula: ρ = m / V (mass divided by volume).',
              'To convert: 1 g/cm³ = 1000 kg/m³.',
              'Displacement method: Volume of an irregular solid = increase in water volume.',
              'Percentage submerged when floating = (ρ_object / ρ_liquid) × 100%.'
            ]
          },
          workedExample: {
            title: 'Finding the Density of a Metal Block',
            problem: 'A rectangular copper block measures 5 cm by 4 cm by 2 cm and has a mass of 356 g. Calculate its density in g/cm³ and kg/m³.',
            stepByStep: [
              { step: 'Volume', detail: 'V = length × width × height = 5 × 4 × 2 = 40 cm³', math: 'V = 40\\text{ cm}^3' },
              { step: 'Density in g/cm³', detail: 'ρ = m / V = 356 g / 40 cm³ = 8.9 g/cm³', math: '\\rho = \\frac{356}{40} = 8.9\\text{ g/cm}^3' },
              { step: 'Convert to kg/m³', detail: 'Multiply by 1000: 8.9 × 1000 = 8900 kg/m³', math: '\\rho = 8900\\text{ kg/m}^3' }
            ],
            keyTakeaway: 'Always check requested units: multiply by 1000 to convert g/cm³ to kg/m³.'
          },
          quickChallenge: {
            prompt: 'An object has a mass of 150 g and a volume of 200 cm³. Will it float or sink in water (density 1.0 g/cm³)?',
            options: ['Float, because its density is 0.75 g/cm³', 'Sink, because its density is 1.33 g/cm³', 'Float, because its mass is less than 200 g', 'Sink, because 150 g is heavy'],
            correctIndex: 0,
            explanation: 'Density = 150 g / 200 cm³ = 0.75 g/cm³, which is less than water (1.0 g/cm³), so it floats.'
          },
          summary: [
            'Density = mass / volume (ρ = m / V).',
            'Units: kg/m³ or g/cm³ (1 g/cm³ = 1000 kg/m³).',
            'A substance floats in a liquid if its density is less than the liquid density.'
          ]
        },
        questions: [
          {
            id: 'p1_4_q1',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'What is the formula for density?',
            options: ['Mass × Volume', 'Mass / Volume', 'Volume / Mass', 'Weight × Gravity'],
            correctAnswer: 'Mass / Volume',
            explanation: 'Density is defined as mass per unit volume: ρ = m / V.'
          },
          {
            id: 'p1_4_q2',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'How do you convert 2.5 g/cm³ into kg/m³?',
            options: ['Divide by 1000 to get 0.0025 kg/m³', 'Multiply by 1000 to get 2500 kg/m³', 'Multiply by 10 to get 25 kg/m³', 'The value remains 2.5 kg/m³'],
            correctAnswer: 'Multiply by 1000 to get 2500 kg/m³',
            explanation: '1 g/cm³ = 1000 kg/m³, so 2.5 g/cm³ = 2500 kg/m³.'
          },
          {
            id: 'p1_4_q3',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'A piece of metal has volume 25 cm³ and mass 200 g. What is its density?',
            options: ['8.0 g/cm³', '5000 g/cm³', '0.125 g/cm³', '175 g/cm³'],
            correctAnswer: '8.0 g/cm³',
            explanation: 'ρ = 200 g / 25 cm³ = 8.0 g/cm³.'
          },
          {
            id: 'p1_4_q4',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'Liquid mercury has a density of 13.6 g/cm³. A steel ball has a density of 7.8 g/cm³. What will happen to the steel ball in mercury?',
            options: ['It will sink to the bottom', 'It will float on the surface', 'It will dissolve instantly', 'It will hover exactly in the center'],
            correctAnswer: 'It will float on the surface',
            explanation: 'Steel is less dense (7.8 g/cm³) than mercury (13.6 g/cm³), so it floats.'
          },
          {
            id: 'p1_4_q5',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'Why does an iceberg float with roughly 90% of its volume submerged in seawater?',
            options: ['Ice is 9 times heavier than water', 'Density of ice is ~0.92 g/cm³ while seawater is ~1.03 g/cm³', 'Salt repels ice crystals', 'Air bubbles push the ice downwards'],
            correctAnswer: 'Density of ice is ~0.92 g/cm³ while seawater is ~1.03 g/cm³',
            explanation: 'Fraction submerged = ρ_ice / ρ_water ≈ 0.92 / 1.03 ≈ 0.89 (89%).'
          },
          {
            id: 'p1_4_q6',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'How is the volume of an irregular stone measured using a displacement can (Eureka can)?',
            options: ['Drop the stone in and collect the overflow liquid in a measuring cylinder', 'Measure the circumference with string', 'Weigh the can before and after', 'Time how long it takes to sink'],
            correctAnswer: 'Drop the stone in and collect the overflow liquid in a measuring cylinder',
            explanation: 'The volume of water displaced and collected equals the volume of the submerged object.'
          },
          {
            id: 'p1_4_q7',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'A wooden cube of side length 2 cm has a mass of 4.8 g. What is its density?',
            options: ['0.6 g/cm³', '2.4 g/cm³', '1.2 g/cm³', '9.6 g/cm³'],
            correctAnswer: '0.6 g/cm³',
            explanation: 'Volume = 2 × 2 × 2 = 8 cm³. Density = 4.8 g / 8 cm³ = 0.6 g/cm³.'
          },
          {
            id: 'p1_4_q8',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'When oil (density 0.8 g/cm³) and water (density 1.0 g/cm³) are mixed, what happens after settling?',
            options: ['Water forms a layer on top of oil', 'Oil forms a layer on top of water', 'They merge into a single uniform liquid', 'Oil solidifies'],
            correctAnswer: 'Oil forms a layer on top of water',
            explanation: 'Less dense liquids float on top of denser immiscible liquids.'
          },
          {
            id: 'p1_4_q9',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'Which of the following materials is typically the least dense?',
            options: ['Solid iron', 'Liquid water', 'Helium gas at standard temperature', 'Lead'],
            correctAnswer: 'Helium gas at standard temperature',
            explanation: 'Gases have widely spaced particles, making their density orders of magnitude lower than liquids or solids.'
          },
          {
            id: 'p1_4_q10',
            subtopicId: 'physics_1_4',
            type: 'multiple_choice',
            question: 'A crown suspected to be fake has mass 386 g and displaces 30 cm³ of water. Is it pure gold (density 19.3 g/cm³)?',
            options: ['Yes, density = 19.3 g/cm³', 'No, density = 12.87 g/cm³', 'Yes, because gold always sinks', 'No, mass is too high'],
            correctAnswer: 'No, density = 12.87 g/cm³',
            explanation: 'Density = 386 / 30 = 12.87 g/cm³, significantly lower than pure gold (19.3 g/cm³).'
          }
        ]
      },
      {
        id: 'physics_1_5',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.5',
        title: 'Forces',
        description: 'Resultant forces, Hooke’s Law, Newton’s laws of motion, and circular motion.',
        durationMinutes: 15,
        experience: {
          type: 'spacecraft_docking',
          title: 'Spacecraft Docking Thruster Challenge',
          scenario: 'A cargo shuttle is approaching an orbital docking ring at 5 m/s.',
          prompt: 'Fire forward, reverse, and lateral thrusters to balance forces. Guide the shuttle smoothly to a zero-velocity docking capture.',
          goal: 'Produce the correct resultant force vector to decelerate smoothly and bring velocity to zero exactly at the docking port.'
        },
        lesson: {
          whatHappened: 'Applying forward thrust accelerated the shuttle. To slow down and stop, a counter-thrust in the exact opposite direction was needed to create a negative resultant force according to F = ma.',
          academicConcept: 'Newton’s First Law: an object continues in its state of rest or uniform motion unless acted on by a resultant force. Newton’s Second Law: Resultant Force F = m × a. Hooke’s Law: Extension is directly proportional to load up to the limit of proportionality: F = k × x.',
          interactiveDiagram: {
            title: 'Newtonian Force Dynamics',
            caption: 'Resultant Force F = ma; Friction always opposes motion; Hooke\'s Law F = kx.',
            keyPoints: [
              'Balanced forces: Resultant force = 0 N → constant speed or stationary.',
              'Unbalanced forces: Acceleration in the direction of the resultant force.',
              'Circular motion: A constant resultant force acts toward the center of the circle (centripetal force).',
              'Hooke\'s Law: Load F is directly proportional to extension x (F = kx) until the limit of proportionality.'
            ]
          },
          workedExample: {
            title: 'Calculating Acceleration with Friction',
            problem: 'A car of mass 1200 kg has an engine thrust of 3000 N and faces total resistive forces of 600 N. Calculate the acceleration of the car.',
            stepByStep: [
              { step: 'Resultant Force', detail: 'F_resultant = 3000 N - 600 N = 2400 N forward', math: 'F_{\\text{res}} = 3000 - 600 = 2400\\text{ N}' },
              { step: 'Use F = ma', detail: 'a = F_resultant / m = 2400 N / 1200 kg = 2.0 m/s²', math: 'a = \\frac{2400}{1200} = 2.0\\text{ m/s}^2' }
            ],
            keyTakeaway: 'Always subtract opposing resistive forces to find the true resultant force before applying F = ma.'
          },
          quickChallenge: {
            prompt: 'A spring extends by 4 cm when loaded with 2 N. Assuming Hooke\'s law holds, what is the extension when loaded with 6 N?',
            options: ['6 cm', '8 cm', '12 cm', '16 cm'],
            correctIndex: 2,
            explanation: 'Spring constant k = F / x = 2 N / 4 cm = 0.5 N/cm. For 6 N, x = 6 / 0.5 = 12 cm.'
          },
          summary: [
            'Resultant force = mass × acceleration (F = ma).',
            'When resultant force is zero, motion is uniform or stationary.',
            'Hooke’s Law states F = kx up to the limit of proportionality.'
          ]
        },
        questions: [
          {
            id: 'p1_5_q1',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'What is the acceleration of a 5 kg trolley pushed with a resultant force of 20 N?',
            options: ['4 m/s²', '100 m/s²', '0.25 m/s²', '15 m/s²'],
            correctAnswer: '4 m/s²',
            explanation: 'a = F / m = 20 N / 5 kg = 4 m/s².'
          },
          {
            id: 'p1_5_q2',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'What happens to an object when all forces acting upon it are balanced?',
            options: ['It accelerates downwards', 'It remains stationary or travels at constant velocity', 'It comes to an immediate halt', 'It increases in mass'],
            correctAnswer: 'It remains stationary or travels at constant velocity',
            explanation: 'Newton\'s First Law: zero resultant force means zero acceleration.'
          },
          {
            id: 'p1_5_q3',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'What is Hooke\'s Law formula?',
            options: ['F = ma', 'F = kx', 'W = mg', 'P = F/A'],
            correctAnswer: 'F = kx',
            explanation: 'Hooke\'s Law states that force F = spring constant k × extension x.'
          },
          {
            id: 'p1_5_q4',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'What is the point on a load-extension graph beyond which the spring no longer returns to its original length?',
            options: ['Zero point', 'Limit of proportionality / Elastic limit', 'Yield maximum', 'Breaking frequency'],
            correctAnswer: 'Limit of proportionality / Elastic limit',
            explanation: 'Beyond the elastic limit, plastic deformation occurs and the spring will not restore to its original length.'
          },
          {
            id: 'p1_5_q5',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'In circular motion, in which direction does the centripetal force act?',
            options: ['Tangentially forward along the curve', 'Directly away from the center', 'Towards the center of the circle', 'Vertically upward'],
            correctAnswer: 'Towards the center of the circle',
            explanation: 'Centripetal force must act perpendicular to velocity, directed towards the center of curvature.'
          },
          {
            id: 'p1_5_q6',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'An object has two forces acting on it: 8 N to the right and 3 N to the left. What is the resultant force?',
            options: ['11 N to the right', '5 N to the right', '5 N to the left', '24 N forward'],
            correctAnswer: '5 N to the right',
            explanation: '8 N - 3 N = 5 N in the direction of the larger force (right).'
          },
          {
            id: 'p1_5_q7',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'What type of force opposes relative sliding motion between two surfaces in contact?',
            options: ['Tension', 'Friction', 'Upthrust', 'Centripetal'],
            correctAnswer: 'Friction',
            explanation: 'Friction opposes relative motion and dissipates mechanical energy as heat.'
          },
          {
            id: 'p1_5_q8',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'A rocket in deep space fires its engines to accelerate, then shuts them off. What happens to its motion?',
            options: ['It slows down and stops', 'It continues moving at constant velocity indefinitely', 'It drops in altitude', 'It turns in a circle'],
            correctAnswer: 'It continues moving at constant velocity indefinitely',
            explanation: 'In the vacuum of deep space with no forces acting, Newton\'s First Law ensures constant velocity.'
          },
          {
            id: 'p1_5_q9',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'What happens to the centripetal force required to keep a car in a circle if the speed of the car is doubled?',
            options: ['It doubles', 'It quadruples (4x)', 'It halves', 'It remains the same'],
            correctAnswer: 'It quadruples (4x)',
            explanation: 'Centripetal force is proportional to v² (F = mv²/r); doubling v quadruples F.'
          },
          {
            id: 'p1_5_q10',
            subtopicId: 'physics_1_5',
            type: 'multiple_choice',
            question: 'A mass of 2 kg accelerates at 3 m/s². What resultant force acts on it?',
            options: ['6 N', '1.5 N', '0.67 N', '5 N'],
            correctAnswer: '6 N',
            explanation: 'F = m × a = 2 kg × 3 m/s² = 6 N.'
          }
        ]
      },
      {
        id: 'physics_1_6',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.6',
        title: 'Momentum',
        description: 'Understand momentum, impulse, and the law of conservation of momentum in collisions.',
        durationMinutes: 12,
        experience: {
          type: 'space_bumper_collision',
          title: 'Space Bumper Collision Lab',
          scenario: 'Two orbital pods (Mass A and Mass B) collide on a frictionless magnetic track.',
          prompt: 'Set mass and initial velocity for Pod 1 and Pod 2. Trigger the collision and inspect how total momentum before equals total momentum after.',
          goal: 'Observe that m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ across both elastic and inelastic collisions.'
        },
        lesson: {
          whatHappened: 'When the pods collided, one lost velocity while the other gained velocity, but the total vector sum of (mass × velocity) remained identical before and after impact.',
          academicConcept: 'Linear momentum p = mass × velocity (kg·m/s). In an isolated system with no external forces, total momentum is conserved: total momentum before collision = total momentum after collision. Impulse = Force × time = change in momentum (Δp).',
          interactiveDiagram: {
            title: 'Conservation of Linear Momentum',
            caption: 'Total p_initial = Total p_final; Impulse = F × Δt = Δp',
            keyPoints: [
              'Momentum is a vector quantity: direction matters (use + and - signs).',
              'Impulse: F × Δt = m(v - u).',
              'Safety devices (crumple zones, seatbelts, airbags) increase impact time Δt, reducing the impact force F.',
              'Elastic collision: kinetic energy is conserved; Inelastic: kinetic energy is converted to thermal/sound.'
            ]
          },
          workedExample: {
            title: 'Collision of Two Moving Carts',
            problem: 'A trolley of mass 2 kg moving at 4 m/s hits a stationary trolley of mass 3 kg. They couple together after impact. Find their joint velocity.',
            stepByStep: [
              { step: 'Initial Momentum', detail: 'p_initial = (2 kg × 4 m/s) + (3 kg × 0 m/s) = 8 kg·m/s', math: 'p_i = 2 \\times 4 + 3 \\times 0 = 8\\text{ kg}\\cdot\\text{m/s}' },
              { step: 'Combined Mass', detail: 'm_total = 2 kg + 3 kg = 5 kg' },
              { step: 'Final Velocity', detail: 'v = p_initial / m_total = 8 / 5 = 1.6 m/s', math: 'v = \\frac{8}{5} = 1.6\\text{ m/s}' }
            ],
            keyTakeaway: 'Total momentum before must equal total momentum after in all closed system collisions.'
          },
          quickChallenge: {
            prompt: 'Why do cars have crumple zones at the front and back?',
            options: ['To make the car lighter', 'To increase collision time Δt and reduce the impact force on passengers', 'To bounce off other cars elastically', 'To make repairs cheaper'],
            correctIndex: 1,
            explanation: 'Since impulse Δp is fixed, increasing the impact duration Δt reduces the force F experienced by occupants (F = Δp / Δt).'
          },
          summary: [
            'Momentum p = mv (kg·m/s).',
            'Conservation of momentum: total momentum before = total momentum after collision.',
            'Impulse = FΔt = change in momentum Δp.'
          ]
        },
        questions: [
          {
            id: 'p1_6_q1',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'What is the momentum of a 0.5 kg ball travelling at 10 m/s?',
            options: ['5.0 kg·m/s', '20 kg·m/s', '0.05 kg·m/s', '2.5 kg·m/s'],
            correctAnswer: '5.0 kg·m/s',
            explanation: 'p = m × v = 0.5 kg × 10 m/s = 5.0 kg·m/s.'
          },
          {
            id: 'p1_6_q2',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'What is the formula for impulse in terms of force and time?',
            options: ['F / t', 'F × t', 'F × d', 'm / a'],
            correctAnswer: 'F × t',
            explanation: 'Impulse is the product of force and the time duration for which it acts: Impulse = FΔt.'
          },
          {
            id: 'p1_6_q3',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'Under what condition is the total momentum of a system conserved?',
            options: ['Only in zero gravity', 'When no external resultant force acts on the system', 'Only when objects stick together', 'When temperatures remain at 0°C'],
            correctAnswer: 'When no external resultant force acts on the system',
            explanation: 'Conservation of momentum requires an isolated system free from external forces.'
          },
          {
            id: 'p1_6_q4',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'A 1000 kg car travelling at 15 m/s hits a wall and stops in 0.5 s. What is the average force exerted on the car?',
            options: ['30,000 N', '7,500 N', '15,000 N', '3,000 N'],
            correctAnswer: '30,000 N',
            explanation: 'Δp = 1000 × 15 = 15,000 kg·m/s. F = Δp / Δt = 15,000 / 0.5 = 30,000 N.'
          },
          {
            id: 'p1_6_q5',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'Two skaters stand stationary on ice. Skater A (60 kg) pushes Skater B (40 kg). If Skater B moves right at 3 m/s, how does Skater A move?',
            options: ['Left at 2 m/s', 'Left at 3 m/s', 'Right at 2 m/s', 'Stays stationary'],
            correctAnswer: 'Left at 2 m/s',
            explanation: 'Initial p = 0. Momentum of B = +120 kg·m/s. Momentum of A must be -120 kg·m/s: v_A = -120 / 60 = -2 m/s (left).'
          },
          {
            id: 'p1_6_q6',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'What are the SI units of impulse?',
            options: ['N·s (or kg·m/s)', 'Joules', 'Watts', 'N/m'],
            correctAnswer: 'N·s (or kg·m/s)',
            explanation: 'Impulse is Force (N) × time (s) = N·s, equivalent to kg·m/s.'
          },
          {
            id: 'p1_6_q7',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'Why does a baseball catcher pull their glove backward when catching a fast ball?',
            options: ['To increase the ball speed', 'To increase the stopping time and decrease the force on their hand', 'To make the catch look exciting', 'To change the ball mass'],
            correctAnswer: 'To increase the stopping time and decrease the force on their hand',
            explanation: 'Extending the stopping time reduces the contact force exerted on the hand.'
          },
          {
            id: 'p1_6_q8',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'In an elastic collision, which quantity is conserved in addition to momentum?',
            options: ['Thermal energy', 'Kinetic energy', 'Sound energy', 'Potential energy alone'],
            correctAnswer: 'Kinetic energy',
            explanation: 'By definition, an elastic collision conserves total kinetic energy.'
          },
          {
            id: 'p1_6_q9',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'A gun recoils backwards when firing a bullet forward. Which principle explains this?',
            options: ['Conservation of momentum', 'Centripetal acceleration', 'Ohm\'s Law', 'Hooke\'s Law'],
            correctAnswer: 'Conservation of momentum',
            explanation: 'Forward momentum of the bullet equals backward recoil momentum of the gun.'
          },
          {
            id: 'p1_6_q10',
            subtopicId: 'physics_1_6',
            type: 'multiple_choice',
            question: 'A 2 kg brick moving at 6 m/s collides with a wall and rebounds at 4 m/s in the opposite direction. What is the magnitude of the momentum change?',
            options: ['4 kg·m/s', '20 kg·m/s', '12 kg·m/s', '2 kg·m/s'],
            correctAnswer: '20 kg·m/s',
            explanation: 'Initial p = +12. Final p = -8. Change = Final - Initial = -8 - 12 = -20 kg·m/s (magnitude 20 kg·m/s).'
          }
        ]
      },
      {
        id: 'physics_1_7',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.7',
        title: 'Energy, Work and Power',
        description: 'Forms of energy, conservation of energy, work done, and power calculations.',
        durationMinutes: 14,
        experience: {
          type: 'robot_power_challenge',
          title: 'Robot Power Warehouse Challenge',
          scenario: 'An autonomous logistics robot lifts and transports heavy cargo boxes across warehouse tiers.',
          prompt: 'Adjust box mass (Force = mg), shelf height (distance d), and motor speed (time t). Observe how work done W = Fd is stored as gravitational potential energy and power P = W/t scales with motor speed.',
          goal: 'Select motor power settings that lift the heaviest 200 kg cargo to the top 4 m shelf within the safety time limit without tripping the breaker.'
        },
        lesson: {
          whatHappened: 'Lifting the same box to a higher shelf required more work done (W = F × d). Lifting it twice as fast required twice as much power (P = W / t), even though total energy transferred was unchanged.',
          academicConcept: 'Work is energy transferred by a force: W = F × d (Joules). Kinetic energy Ek = 1/2 mv². Gravitational potential energy Ep = mgh. Power is the rate of energy transfer: P = ΔE / t (Watts, 1 W = 1 J/s). Efficiency = (Useful energy output / Total energy input) × 100%.',
          interactiveDiagram: {
            title: 'Energy Transformation & Power Rate',
            caption: 'Work Done W = Fd; Ep = mgh; Ek = ½mv²; Power P = W/t',
            keyPoints: [
              'Law of conservation of energy: Energy cannot be created or destroyed, only transformed.',
              'Work done W (Joules) = Force (N) × distance in direction of force (m).',
              'Kinetic Energy: Ek = 0.5 × m × v².',
              'Power: P = Work / time = ΔE / t; 1 Watt = 1 Joule per second.'
            ]
          },
          workedExample: {
            title: 'Calculating Work Done and Motor Power',
            problem: 'A motor lifts a crate of mass 50 kg through a vertical height of 6 m in 10 seconds (take g = 10 N/kg). Calculate the work done and power output.',
            stepByStep: [
              { step: 'Weight Force', detail: 'Weight F = mg = 50 kg × 10 N/kg = 500 N', math: 'F = 50 \\times 10 = 500\\text{ N}' },
              { step: 'Work Done', detail: 'W = F × d = 500 N × 6 m = 3000 J', math: 'W = 500 \\times 6 = 3000\\text{ J}' },
              { step: 'Power', detail: 'P = W / t = 3000 J / 10 s = 300 W', math: 'P = \\frac{3000}{10} = 300\\text{ W}' }
            ],
            keyTakeaway: 'Work done equals gravitational potential energy gained; power is work divided by time taken.'
          },
          quickChallenge: {
            prompt: 'An electric motor receives 400 J of electrical energy and delivers 300 J of useful mechanical work. What is its efficiency?',
            options: ['75%', '133%', '25%', '100%'],
            correctIndex: 0,
            explanation: 'Efficiency = (Useful output / Total input) × 100% = (300 / 400) × 100% = 75%.'
          },
          summary: [
            'Work done W = F × d; units are Joules (J).',
            'Power P = W / t; units are Watts (W).',
            'Efficiency = (Useful energy output / Total energy input) × 100%.'
          ]
        },
        questions: [
          {
            id: 'p1_7_q1',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'What is the work done when a force of 50 N moves a box by 4 metres in the direction of the force?',
            options: ['200 J', '12.5 J', '54 J', '0.08 J'],
            correctAnswer: '200 J',
            explanation: 'Work = Force × distance = 50 N × 4 m = 200 J.'
          },
          {
            id: 'p1_7_q2',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'What is the kinetic energy of a 2 kg drone flying at 3 m/s?',
            options: ['9 J', '18 J', '6 J', '12 J'],
            correctAnswer: '9 J',
            explanation: 'Ek = 1/2 × m × v² = 0.5 × 2 kg × (3 m/s)² = 9 J.'
          },
          {
            id: 'p1_7_q3',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'What is the unit of power equal to 1 Joule per second?',
            options: ['Newton', 'Watt', 'Volt', 'Ampere'],
            correctAnswer: 'Watt',
            explanation: 'Power is rate of energy transfer: 1 Watt = 1 Joule / second.'
          },
          {
            id: 'p1_7_q4',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'A weightlifter holds a 100 kg barbell stationary overhead for 5 seconds. How much work is done on the barbell while holding it still?',
            options: ['5000 J', '0 J', '1000 J', '20 J'],
            correctAnswer: '0 J',
            explanation: 'Work = Force × distance. Because distance moved while holding it still is zero, work done is 0 J.'
          },
          {
            id: 'p1_7_q5',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'What happens to the kinetic energy of an object if its speed is doubled?',
            options: ['It doubles (2x)', 'It quadruples (4x)', 'It stays constant', 'It is cut in half'],
            correctAnswer: 'It quadruples (4x)',
            explanation: 'Kinetic energy depends on v²: doubling speed multiplies Ek by 2² = 4.'
          },
          {
            id: 'p1_7_q6',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'A 60 W lamp is switched on for 2 minutes. How much electrical energy is transferred?',
            options: ['120 J', '7200 J', '30 J', '3600 J'],
            correctAnswer: '7200 J',
            explanation: 'Energy = Power × time = 60 W × 120 s = 7200 J.'
          },
          {
            id: 'p1_7_q7',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'Which of the following is a renewable energy resource?',
            options: ['Coal', 'Natural gas', 'Wind power', 'Uranium nuclear fuel'],
            correctAnswer: 'Wind power',
            explanation: 'Wind energy is replenished naturally by atmospheric solar heating.'
          },
          {
            id: 'p1_7_q8',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'A crane lifts a 200 kg load through 15 m in 30 seconds (g = 10 N/kg). What is its power output?',
            options: ['1000 W', '3000 W', '100 W', '600 W'],
            correctAnswer: '1000 W',
            explanation: 'Weight = 2000 N. Work = 2000 × 15 = 30,000 J. Power = 30,000 / 30 = 1000 W.'
          },
          {
            id: 'p1_7_q9',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'In a hydroelectric power station, what is the initial energy store before water is released?',
            options: ['Chemical energy', 'Gravitational potential energy', 'Elastic energy', 'Nuclear energy'],
            correctAnswer: 'Gravitational potential energy',
            explanation: 'Water stored at high elevation in a reservoir stores gravitational potential energy.'
          },
          {
            id: 'p1_7_q10',
            subtopicId: 'physics_1_7',
            type: 'multiple_choice',
            question: 'Why can no machine ever have an efficiency greater than 100%?',
            options: ['Friction always generates extra work', 'Energy cannot be created from nothing (Conservation of Energy)', 'Gravity restricts machine output', 'Materials expand when heated'],
            correctAnswer: 'Energy cannot be created from nothing (Conservation of Energy)',
            explanation: 'Useful output energy can never exceed total input energy due to the First Law of Thermodynamics.'
          }
        ]
      },
      {
        id: 'physics_1_8',
        chapterId: 'phys_ch1',
        subjectId: 'physics',
        code: '1.8',
        title: 'Pressure',
        description: 'Understand pressure in solids and fluids, barometers, and manometers.',
        durationMinutes: 12,
        experience: {
          type: 'deep_sea_submarine',
          title: 'Deep-Sea Submarine Pressure Explorer',
          scenario: 'A deep-sea scientific submarine dives into the Mariana Trench.',
          prompt: 'Adjust submarine depth (0 to 10,000 m) and fluid density. Watch hull pressure increase linearly with depth (p = ρgh) and inspect stress on the viewing port.',
          goal: 'Safely explore depths up to 5,000 m while monitoring pressure gauges to avoid exceeding hull ratings.'
        },
        lesson: {
          whatHappened: 'As the submarine plunged deeper, the water column above increased, raising the hydrostatic pressure by roughly 100 kPa (1 atm) for every 10 metres of depth.',
          academicConcept: 'Pressure is force per unit area: P = F / A (measured in Pascals, 1 Pa = 1 N/m²). In liquids, pressure acts in all directions and increases with depth: Δp = ρ × g × h, where ρ is liquid density and h is depth.',
          interactiveDiagram: {
            title: 'Hydrostatic Pressure & Solid Contact Pressure',
            caption: 'P = F/A in solids; Δp = ρgh in liquids; Barometers measure atmospheric pressure.',
            keyPoints: [
              'Pressure on solids: P = Force / Area. High area reduces pressure (snowshoes, tractor treads).',
              'Liquid pressure: Δp = ρgh (depends only on liquid density, gravity, and depth, not container shape).',
              'Atmospheric pressure at sea level is ~101 kPa (760 mm of mercury).',
              'Manometers measure differential gas pressure by comparing liquid levels in a U-tube.'
            ]
          },
          workedExample: {
            title: 'Calculating Hydrostatic Pressure at Depth',
            problem: 'Calculate the water pressure acting on a diver at a depth of 25 m in seawater (density = 1025 kg/m³, g = 9.8 N/kg).',
            stepByStep: [
              { step: 'Formula', detail: 'p = ρ × g × h' },
              { step: 'Calculation', detail: 'p = 1025 kg/m³ × 9.8 N/kg × 25 m = 251,125 Pa', math: 'p = 1025 \\times 9.8 \\times 25 = 2.51 \\times 10^5\\text{ Pa}' },
              { step: 'In kilopascals', detail: 'p ≈ 251 kPa (about 2.5 times atmospheric pressure)' }
            ],
            keyTakeaway: 'Liquid pressure depends solely on depth h and density ρ, independent of the surface area or volume of the water body.'
          },
          quickChallenge: {
            prompt: 'Why do sharp knife blades cut food much more easily than dull ones?',
            options: ['Sharp knives are made of denser metal', 'The smaller contact area exerts vastly higher pressure for the same applied force', 'Sharp knives generate less friction', 'Sharp blades vibrate at high frequency'],
            correctIndex: 1,
            explanation: 'P = F / A. A sharp knife has a tiny blade edge area A, concentrating the applied force F into massive cutting pressure.'
          },
          summary: [
            'Pressure = Force / Area (P = F / A); 1 Pa = 1 N/m².',
            'Liquid pressure: p = ρgh.',
            'Atmospheric pressure is measured with a mercury barometer (~760 mmHg).'
          ]
        },
        questions: [
          {
            id: 'p1_8_q1',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'What is the pressure exerted by a 400 N weight on an area of 2 m²?',
            options: ['200 Pa', '800 Pa', '0.005 Pa', '20 Pa'],
            correctAnswer: '200 Pa',
            explanation: 'Pressure = Force / Area = 400 N / 2 m² = 200 Pa.'
          },
          {
            id: 'p1_8_q2',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'What factors determine the hydrostatic pressure at a point inside a liquid?',
            options: ['Depth, liquid density, and gravitational field strength', 'Surface area of the tank and volume of liquid', 'Shape of the container and air humidity', 'Atmospheric temperature alone'],
            correctAnswer: 'Depth, liquid density, and gravitational field strength',
            explanation: 'Hydrostatic pressure formula p = ρgh contains density ρ, gravity g, and depth h.'
          },
          {
            id: 'p1_8_q3',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'Why are heavy caterpillar tractors fitted with wide tracks instead of narrow wheels?',
            options: ['To increase their speed', 'To increase contact area and reduce pressure on soft mud', 'To increase total weight', 'To reduce engine power'],
            correctAnswer: 'To increase contact area and reduce pressure on soft mud',
            explanation: 'Wide tracks increase area A, reducing pressure P = F/A so the vehicle does not sink.'
          },
          {
            id: 'p1_8_q4',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'What liquid is traditionally used in a standard simple barometer due to its high density?',
            options: ['Water', 'Mercury', 'Ethanol', 'Cooking oil'],
            correctAnswer: 'Mercury',
            explanation: 'Mercury is ~13.6 times denser than water, allowing a compact 76 cm column instead of a 10-metre water column.'
          },
          {
            id: 'p1_8_q5',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'A U-tube manometer filled with water has an excess height difference of 10 cm on the open side. What does this indicate?',
            options: ['Gas pressure is higher than atmospheric pressure', 'Gas pressure is lower than atmospheric pressure', 'Gas has zero pressure', 'The water is boiling'],
            correctAnswer: 'Gas pressure is higher than atmospheric pressure',
            explanation: 'The gas pushes the liquid column down on its side and up on the open side, showing excess pressure.'
          },
          {
            id: 'p1_8_q6',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'Why does a dam wall need to be much thicker at the bottom than at the top?',
            options: ['To prevent fish from swimming through', 'Water pressure increases with depth, requiring stronger support at the base', 'Cold water sinks to the bottom', 'Construction is easier when the base is wide'],
            correctAnswer: 'Water pressure increases with depth, requiring stronger support at the base',
            explanation: 'p = ρgh means water pressure is maximum at the deepest base of the dam.'
          },
          {
            id: 'p1_8_q7',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'If atmospheric pressure is 100,000 Pa, what force does it exert on a 0.5 m² table surface?',
            options: ['50,000 N', '200,000 N', '100,000 N', '25,000 N'],
            correctAnswer: '50,000 N',
            explanation: 'Force = Pressure × Area = 100,000 Pa × 0.5 m² = 50,000 N.'
          },
          {
            id: 'p1_8_q8',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'What happens to the atmospheric pressure as you climb higher up a mountain?',
            options: ['It increases', 'It decreases', 'It remains constant', 'It drops to absolute zero'],
            correctAnswer: 'It decreases',
            explanation: 'There is less air column above you at higher altitudes, so atmospheric pressure decreases.'
          },
          {
            id: 'p1_8_q9',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'A high-heeled shoe with contact area 1 cm² exerts more pressure than an elephant foot with contact area 500 cm². Why?',
            options: ['The elephant weighs less', 'The shoe area is tiny, causing huge pressure despite smaller weight', 'Heels are made of metal', 'Elephant feet generate upthrust'],
            correctAnswer: 'The shoe area is tiny, causing huge pressure despite smaller weight',
            explanation: 'Pressure is inversely proportional to area: dividing by 1 cm² (0.0001 m²) creates extreme pressure.'
          },
          {
            id: 'p1_8_q10',
            subtopicId: 'physics_1_8',
            type: 'multiple_choice',
            question: 'What is 1 Pascal equivalent to in fundamental SI units?',
            options: ['1 N/m²', '1 kg·m/s', '1 J/s', '1 N·m'],
            correctAnswer: '1 N/m²',
            explanation: '1 Pascal is defined as one newton of force distributed over one square metre.'
          }
        ]
      }
    ]
  },
  {
    id: 'phys_ch2',
    subjectId: 'physics',
    number: 2,
    title: 'Thermal Physics',
    description: 'Kinetic molecular model, thermal properties, temperature, and heat transfer processes.',
    subtopics: [
      {
        id: 'physics_2_1',
        chapterId: 'phys_ch2',
        subjectId: 'physics',
        code: '2.1',
        title: 'Simple Kinetic Molecular Model of Matter',
        description: 'States of matter, molecular motion, temperature, and gas pressure.',
        durationMinutes: 12,
        experience: {
          type: 'kinetic_molecular_chamber',
          title: 'Kinetic Molecular Phase & Gas Pressure Chamber',
          scenario: 'A laboratory observation cell allows you to examine atomic and molecular motion inside a sealed pressure chamber.',
          prompt: 'Adjust the temperature from -273°C (0 Kelvin) to 500°C. Observe how particles transition from a vibrating solid crystal lattice to a liquid, and finally high-speed gas particles colliding with walls.',
          goal: 'Observe the three distinct phases of matter and discover how gas pressure scales with particle collision frequency.'
        },
        lesson: {
          whatHappened: 'Heating the particles increased their average kinetic energy. In solids, particles only vibrated in fixed positions; in liquids, they slipped past each other; in gases, they zoomed freely, exerting pressure on the walls.',
          academicConcept: 'Temperature is a measure of the average kinetic energy of particles. Absolute zero (-273°C or 0 K) is the theoretical temperature where particle motion ceases. In gases, pressure is caused by particles colliding with the container walls, exerting force over area (P = F/A). Brownian motion demonstrates random molecular bombardment.',
          interactiveDiagram: {
            title: 'Kinetic Model of the States of Matter',
            caption: 'Solid (fixed lattice) → Liquid (closely packed, sliding) → Gas (widely spaced, high speed)',
            keyPoints: [
              'Solid: Definite shape and volume, strong intermolecular bonds, vibrate about fixed positions.',
              'Liquid: Fixed volume, takes container shape, particles touch but slide past each other.',
              'Gas: Fills container, no fixed volume or shape, negligible intermolecular forces except on collision.',
              'Brownian Motion: Random, zigzag movement of smoke or pollen particles observed under a microscope caused by collisions with invisible air molecules.'
            ]
          },
          workedExample: {
            title: 'Converting Between Celsius and Kelvin',
            problem: 'The boiling point of liquid nitrogen is -196°C. Convert this temperature to Kelvin.',
            stepByStep: [
              { step: 'Formula', detail: 'T (K) = θ (°C) + 273' },
              { step: 'Calculation', detail: 'T = -196 + 273 = 77 K', math: 'T = -196 + 273 = 77\\text{ K}' }
            ],
            keyTakeaway: 'Kelvin is the absolute temperature scale; temperatures in Kelvin can never be negative.'
          },
          quickChallenge: {
            prompt: 'What causes the pressure exerted by a gas on the walls of its container?',
            options: ['The mass of the particles weighing down on the floor', 'Collisions of rapid gas particles against the container walls', 'Electrostatic repulsion between particles', 'Chemical reactions with the container metal'],
            correctIndex: 1,
            explanation: 'When gas particles collide with the container walls, they rebound, experiencing a change in momentum that exerts a force per unit area on the walls.'
          },
          summary: [
            'Solids have fixed lattice structures; liquids slide; gases move freely at high speeds.',
            'Temperature is proportional to the average kinetic energy of the molecules.',
            'Gas pressure arises from continuous particle collisions with container surfaces.'
          ]
        },
        questions: [
          {
            id: 'p2_1_q1',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'What is the temperature of absolute zero in degrees Celsius?',
            options: ['0°C', '-100°C', '-273°C', '-373°C'],
            correctAnswer: '-273°C',
            explanation: 'Absolute zero (0 K) corresponds to -273.15°C, where particle kinetic energy is minimal.'
          },
          {
            id: 'p2_1_q2',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'Which phenomenon provides experimental evidence for the existence of moving air molecules?',
            options: ['Brownian motion of smoke particles', 'Sublimation of dry ice', 'Thermal expansion of mercury', 'Reflection of light'],
            correctAnswer: 'Brownian motion of smoke particles',
            explanation: 'Smoke particles jitter randomly due to uneven bombardment by unseen fast-moving air molecules.'
          },
          {
            id: 'p2_1_q3',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'What happens to the pressure of a fixed mass of gas in a rigid container if temperature increases?',
            options: ['Pressure increases because particles hit the walls harder and more frequently', 'Pressure decreases because particles get smaller', 'Pressure remains identical', 'Pressure drops to zero'],
            correctAnswer: 'Pressure increases because particles hit the walls harder and more frequently',
            explanation: 'Higher temperature means higher average speed, leading to more frequent and more forceful wall impacts.'
          },
          {
            id: 'p2_1_q4',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'What is the change of state from gas directly to solid called?',
            options: ['Condensation', 'Deposition', 'Evaporation', 'Boiling'],
            correctAnswer: 'Deposition',
            explanation: 'Deposition (or desublimation) is the direct phase transition from gas to solid.'
          },
          {
            id: 'p2_1_q5',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'Why does evaporation cause a liquid to cool down?',
            options: ['Cold air enters the liquid', 'The highest energy particles escape, reducing average kinetic energy of remaining particles', 'Molecules convert into ice crystals', 'Atmospheric pressure pushes heat away'],
            correctAnswer: 'The highest energy particles escape, reducing average kinetic energy of remaining particles',
            explanation: 'The fastest molecules with sufficient kinetic energy escape the surface, leaving lower energy particles behind.'
          },
          {
            id: 'p2_1_q6',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'Convert 25°C to the Kelvin scale.',
            options: ['298 K', '248 K', '25 K', '300 K'],
            correctAnswer: '298 K',
            explanation: '25 + 273 = 298 K.'
          },
          {
            id: 'p2_1_q7',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'How do the arrangement and spacing of particles in a liquid compare to those in a gas?',
            options: ['Liquid particles are closely packed, gas particles are far apart', 'Liquid particles are far apart, gas particles are touching', 'Both have identical spacing', 'Liquid particles have a regular rigid crystal pattern'],
            correctAnswer: 'Liquid particles are closely packed, gas particles are far apart',
            explanation: 'In liquids, particles remain in close contact; in gases, typical separations are ~10 times molecular diameter.'
          },
          {
            id: 'p2_1_q8',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'Which of the following increases the rate of evaporation from a liquid surface?',
            options: ['Increasing surface area and increasing temperature', 'Decreasing draught/airflow', 'Lowering temperature', 'Increasing atmospheric humidity'],
            correctAnswer: 'Increasing surface area and increasing temperature',
            explanation: 'Larger surface area gives more escape points; higher temperature gives more particles escape velocity.'
          },
          {
            id: 'p2_1_q9',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'According to Boyle\'s Law, what happens to gas pressure when volume is halved at constant temperature?',
            options: ['Pressure doubles (2x)', 'Pressure is halved', 'Pressure is unchanged', 'Pressure quadruples'],
            correctAnswer: 'Pressure doubles (2x)',
            explanation: 'P₁V₁ = P₂V₂; halving volume doubles the collision frequency per unit surface area.'
          },
          {
            id: 'p2_1_q10',
            subtopicId: 'physics_2_1',
            type: 'multiple_choice',
            question: 'What is true about the temperature of pure water while it is actively boiling at standard atmospheric pressure?',
            options: ['It stays constant at 100°C', 'It continuously rises to 150°C', 'It drops to 0°C', 'It fluctuates wildly'],
            correctAnswer: 'It stays constant at 100°C',
            explanation: 'During a phase change, supplied thermal energy breaks intermolecular bonds rather than increasing kinetic energy.'
          }
        ]
      },
      {
        id: 'physics_2_2',
        chapterId: 'phys_ch2',
        subjectId: 'physics',
        code: '2.2',
        title: 'Thermal Properties and Temperature',
        description: 'Thermal expansion, thermometers, specific heat capacity, and latent heat.',
        durationMinutes: 14,
        experience: {
          type: 'space_suit_test',
          title: 'Space-Suit Material Thermal Lab',
          scenario: 'Astronaut gear must withstand sudden shifts between solar radiation (+120°C) and deep shadow (-150°C).',
          prompt: 'Heat and cool four candidate materials: Titanium, Aerogel, Water pouch, and Aluminium. Compare their thermal expansion and specific heat capacity to select the safest suit lining.',
          goal: 'Select the material with the highest specific heat capacity to keep astronaut core temperature stable.'
        },
        lesson: {
          whatHappened: 'Materials with low specific heat capacity (like aluminium) warmed up and cooled down drastically in seconds. Materials with high specific heat capacity (like water) resisted temperature changes, providing effective thermal buffering.',
          academicConcept: 'Specific heat capacity c is the energy required to raise the temperature of 1 kg of a substance by 1°C: ΔE = m × c × Δθ. Latent heat is the thermal energy transferred during a change of state without changing temperature: ΔE = m × L.',
          interactiveDiagram: {
            title: 'Heating Curve & Phase Changes',
            caption: 'Solid heating (c_solid) → Melting (L_f) → Liquid heating (c_liquid) → Boiling (L_v) → Gas',
            keyPoints: [
              'Specific Heat Capacity: ΔE = mcΔθ (Units: J / (kg·°C)).',
              'Specific Latent Heat of Fusion L_f: Energy to melt 1 kg of solid to liquid at melting point.',
              'Specific Latent Heat of Vaporization L_v: Energy to boil 1 kg of liquid to gas at boiling point.',
              'Thermal expansion: solids expand least, liquids moderately, gases most upon heating.'
            ]
          },
          workedExample: {
            title: 'Calculating Energy to Heat Water',
            problem: 'How much thermal energy is needed to heat 0.5 kg of water from 20°C to 100°C? (c of water = 4200 J/(kg·°C)).',
            stepByStep: [
              { step: 'Temperature change', detail: 'Δθ = 100°C - 20°C = 80°C' },
              { step: 'Formula', detail: 'ΔE = m × c × Δθ' },
              { step: 'Calculation', detail: 'ΔE = 0.5 kg × 4200 J/(kg·°C) × 80°C = 168,000 J = 168 kJ', math: '\\Delta E = 0.5 \\times 4200 \\times 80 = 1.68 \\times 10^5\\text{ J}' }
            ],
            keyTakeaway: 'Water has an unusually high specific heat capacity (4200 J/(kg·°C)), making it an excellent coolant.'
          },
          quickChallenge: {
            prompt: 'During the melting of ice at 0°C, energy is supplied continuously. Why does the thermometer not register any rise in temperature?',
            options: ['The thermometer is broken', 'The energy is used to break intermolecular bonds between water molecules (latent heat)', 'Ice absorbs all heat and destroys it', 'The temperature actually drops to -10°C'],
            correctIndex: 1,
            explanation: 'Latent heat of fusion goes into weakening the crystalline bonds between molecules, so average kinetic energy (temperature) remains unchanged until melting is complete.'
          },
          summary: [
            'Thermal capacity determines how much heat is needed to change temperature: ΔE = mcΔθ.',
            'Latent heat is absorbed or released during state transitions without a change in temperature: ΔE = mL.',
            'Bimetallic strips use differential thermal expansion to trigger thermostats.'
          ]
        },
        questions: [
          {
            id: 'p2_2_q1',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'What are the SI units of specific heat capacity?',
            options: ['J / (kg·°C)', 'Joules', 'Watts / m', 'N / kg'],
            correctAnswer: 'J / (kg·°C)',
            explanation: 'From c = ΔE / (mΔθ), the unit is Joules per (kilogram degree Celsius).'
          },
          {
            id: 'p2_2_q2',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'Why do railway tracks have small expansion gaps between rail segments?',
            options: ['To let rainwater drain through', 'To accommodate thermal expansion on hot sunny days and prevent buckling', 'To produce rhythmic sounds', 'To save on steel construction costs'],
            correctAnswer: 'To accommodate thermal expansion on hot sunny days and prevent buckling',
            explanation: 'Solids expand upon heating; gaps allow longitudinal thermal expansion without warping the track.'
          },
          {
            id: 'p2_2_q3',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'What is the energy required to melt 2 kg of ice at 0°C if the specific latent heat of fusion is 334,000 J/kg?',
            options: ['668,000 J', '167,000 J', '334,000 J', '68,000 J'],
            correctAnswer: '668,000 J',
            explanation: 'ΔE = m × L_f = 2 kg × 334,000 J/kg = 668,000 J.'
          },
          {
            id: 'p2_2_q4',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'A liquid-in-glass thermometer uses what physical property to measure temperature?',
            options: ['Thermal expansion of the liquid column', 'Electrical resistance of the glass', 'Change in color of the bulb', 'Radioactive decay of liquid'],
            correctAnswer: 'Thermal expansion of the liquid column',
            explanation: 'Liquids like mercury or coloured alcohol expand uniformly with temperature, moving up a calibrated capillary bore.'
          },
          {
            id: 'p2_2_q5',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'Two blocks, X (copper, c = 390 J/kg°C) and Y (water, c = 4200 J/kg°C), each of 1 kg, receive 4200 J of heat. Which shows the larger temperature increase?',
            options: ['Block X (copper)', 'Block Y (water)', 'Both increase by the same amount', 'Neither changes temperature'],
            correctAnswer: 'Block X (copper)',
            explanation: 'Lower specific heat capacity means a much greater temperature rise for the same thermal energy input.'
          },
          {
            id: 'p2_2_q6',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'What design feature makes a clinical thermometer sensitive to tiny temperature changes?',
            options: ['A very narrow capillary tube bore', 'A large thick glass envelope', 'A short stem', 'A red plastic handle'],
            correctAnswer: 'A very narrow capillary tube bore',
            explanation: 'A narrow bore means even a small liquid volume expansion produces a large visible movement along the scale.'
          },
          {
            id: 'p2_2_q7',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'Why does steam at 100°C cause significantly more severe burns than liquid water at 100°C?',
            options: ['Steam has higher pressure', 'Steam releases its enormous latent heat of vaporization when condensing on skin', 'Steam molecules are sharper', 'Water cannot burn skin'],
            correctAnswer: 'Steam releases its enormous latent heat of vaporization when condensing on skin',
            explanation: 'Condensation releases ~2.26 × 10⁶ J/kg of latent heat before the resulting hot water cools down.'
          },
          {
            id: 'p2_2_q8',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'In a bimetallic strip made of brass and iron, brass expands more than iron when heated. Which way does the strip bend?',
            options: ['Towards the iron side', 'Towards the brass side', 'It remains straight', 'It twists into a spiral'],
            correctAnswer: 'Towards the iron side',
            explanation: 'The brass becomes longer on the outside of the curve, forcing the strip to bend inward towards the iron.'
          },
          {
            id: 'p2_2_q9',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'What are the two fixed reference points for calibrating a standard Celsius thermometer?',
            options: ['Pure melting ice (0°C) and pure boiling water at 1 atm (100°C)', 'Body temperature and room temperature', 'Absolute zero and melting point of gold', 'Freezing point of saltwater and steam point'],
            correctAnswer: 'Pure melting ice (0°C) and pure boiling water at 1 atm (100°C)',
            explanation: 'The ice point (0°C) and steam point (100°C) provide reproducible standard calibration marks.'
          },
          {
            id: 'p2_2_q10',
            subtopicId: 'physics_2_2',
            type: 'multiple_choice',
            question: 'How much energy is needed to raise 10 kg of iron (c = 450 J/kg°C) by 2°C?',
            options: ['9,000 J', '4,500 J', '900 J', '90,000 J'],
            correctAnswer: '9,000 J',
            explanation: 'ΔE = m × c × Δθ = 10 kg × 450 J/kg°C × 2°C = 9,000 J.'
          }
        ]
      },
      {
        id: 'physics_2_3',
        chapterId: 'phys_ch2',
        subjectId: 'physics',
        code: '2.3',
        title: 'Thermal Processes',
        description: 'Conduction, convection, and radiation mechanisms of thermal energy transfer.',
        durationMinutes: 12,
        experience: {
          type: 'thermal_transfer_calorimeter',
          title: 'Thermal Conduction, Convection & Radiation Calorimeter Lab',
          scenario: 'A laboratory thermal apparatus testing heat dissipation, vacuum insulation, and Leslie cube radiation emission.',
          prompt: 'Test cooling mechanisms on calorimeter vessels: add a sealed lid (stops convection), compare shiny silver foil vs. matte black coating (radiation), and test vacuum double-wall vs. copper (conduction).',
          goal: 'Construct the optimal insulated calorimeter that minimizes thermal dissipation over a timed cooling curve.'
        },
        lesson: {
          whatHappened: 'Hot air rising above the open mug rapidly carried heat away via convection. The copper cup conducted heat directly to the table, while matte black radiated infrared. The silver-lined vacuum foam cup with a lid lost almost no heat.',
          academicConcept: 'Conduction is thermal transfer in solids through lattice vibrations and free delocalised electron diffusion (metals). Convection occurs in fluids (liquids/gases) where heated fluid expands, becomes less dense, and rises. Radiation is electromagnetic infrared waves traveling through vacuum at the speed of light. Dull black surfaces are the best emitters and absorbers; shiny silver surfaces are the best reflectors.',
          interactiveDiagram: {
            title: 'The Three Heat Transfer Mechanisms',
            caption: 'Conduction (solids/electrons) · Convection (fluid density currents) · Radiation (infrared waves)',
            keyPoints: [
              'Conduction: Metals are best because free electrons drift quickly transferring kinetic energy.',
              'Convection: Hot fluids expand → lower density → rise; cold dense fluid sinks to replace it, forming a convection current.',
              'Radiation: Infrared waves require no medium and can travel through a vacuum.',
              'Surface properties: Dull black surfaces absorb and emit infrared best; shiny white/silver surfaces reflect infrared.'
            ]
          },
          workedExample: {
            title: 'Analyzing Thermal Vacuum Flask Features',
            problem: 'Explain how a vacuum flask minimizes thermal transfer through conduction, convection, and radiation.',
            stepByStep: [
              { step: 'Vacuum gap', detail: 'Eliminates both conduction and convection because there are no particles to vibrate or flow.' },
              { step: 'Silvered walls', detail: 'Reflects infrared radiation back into the hot liquid, minimizing radiation loss.' },
              { step: 'Plastic stopper / lid', detail: 'Poor conductor of heat and stops evaporation and convection currents from carrying hot air away.' }
            ],
            keyTakeaway: 'Insulation works by targeting specific heat transfer pathways: eliminating particles blocks conduction/convection; reflective coatings block radiation.'
          },
          quickChallenge: {
            prompt: 'Why are heating elements in electric kettles and hot water immersion heaters installed at the very bottom rather than the top?',
            options: ['It is easier to wire at the base', 'Water heated at the bottom expands, decreases in density, and rises, setting up a full convection current', 'Cold water rises automatically', 'Radiation only travels upwards'],
            correctIndex: 1,
            explanation: 'Convection requires heated fluid to be at the bottom so it can expand, become buoyant, and circulate upward throughout the entire volume.'
          },
          summary: [
            'Conduction requires particle contact and is fastest in metals with free electrons.',
            'Convection occurs only in fluids due to density differences in heated matter.',
            'Radiation travels as electromagnetic waves and does not require any medium.'
          ]
        },
        questions: [
          {
            id: 'p2_3_q1',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'Why are metals such good conductors of heat compared to non-metals?',
            options: ['They contain free delocalised electrons that transfer kinetic energy rapidly', 'They are shiny', 'They have higher density', 'Their atoms are softer'],
            correctAnswer: 'They contain free delocalised electrons that transfer kinetic energy rapidly',
            explanation: 'Free electrons move freely throughout the metal lattice, diffusing thermal energy rapidly.'
          },
          {
            id: 'p2_3_q2',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'Through which process can heat travel through the vacuum of space from the Sun to the Earth?',
            options: ['Conduction', 'Convection', 'Thermal radiation (infrared waves)', 'Evaporation'],
            correctAnswer: 'Thermal radiation (infrared waves)',
            explanation: 'Radiation is an electromagnetic wave and does not require particles or a physical medium.'
          },
          {
            id: 'p2_3_q3',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'Which surface is the best absorber of infrared radiation?',
            options: ['Dull matte black', 'Polished shiny silver', 'Glossy white', 'Transparent clear glass'],
            correctAnswer: 'Dull matte black',
            explanation: 'Dull black surfaces absorb virtually all incident thermal radiation and reflect the least.'
          },
          {
            id: 'p2_3_q4',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'What happens to the density of air when it is heated?',
            options: ['It decreases because the air expands', 'It increases because particles gain mass', 'It stays identical', 'It drops to zero'],
            correctAnswer: 'It decreases because the air expands',
            explanation: 'Heating increases particle spacing (expansion), so mass per unit volume (density) decreases.'
          },
          {
            id: 'p2_3_q5',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'Why are houses in hot, sunny Mediterranean climates traditionally painted white?',
            options: ['White reflects solar thermal radiation, keeping the interior cool', 'White conducts heat into the ground', 'White absorbs moisture from the air', 'White paint is cheaper'],
            correctAnswer: 'White reflects solar thermal radiation, keeping the interior cool',
            explanation: 'Light-colored and white surfaces reflect most incident infrared radiation from the sun.'
          },
          {
            id: 'p2_3_q6',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'In a domestic refrigerator, where is the freezing cooling unit typically placed, and why?',
            options: ['At the top, because cold dense air sinks to set up a convection current', 'At the bottom, because heat rises', 'In the middle of the door', 'Underneath the vegetable drawer'],
            correctAnswer: 'At the top, because cold dense air sinks to set up a convection current',
            explanation: 'Air cooled at the top contracts, becomes denser, and sinks, cooling the lower compartments.'
          },
          {
            id: 'p2_3_q7',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'Which of the following is the best thermal insulator?',
            options: ['Trapped air (such as in fibreglass or double glazing)', 'Solid aluminium', 'Liquid mercury', 'Copper sheet'],
            correctAnswer: 'Trapped air (such as in fibreglass or double glazing)',
            explanation: 'Gases have widely spaced molecules that conduct heat poorly, and trapping the air prevents convection.'
          },
          {
            id: 'p2_3_q8',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'Why are emergency thermal rescue blankets made of shiny silver aluminized foil?',
            options: ['To reflect body radiation back to the patient and prevent hypothermia', 'To conduct cold away from the body', 'To make the patient visible from aircraft', 'To stop radioactive fallout'],
            correctAnswer: 'To reflect body radiation back to the patient and prevent hypothermia',
            explanation: 'The shiny surface reflects up to 90% of emitted infrared radiation back toward the patient.'
          },
          {
            id: 'p2_3_q9',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'During a daytime sea breeze at the coast, which direction does the wind blow?',
            options: ['From the sea toward the warmer land', 'From the land out to sea', 'Straight downward from clouds', 'Parallel to the beach line only'],
            correctAnswer: 'From the sea toward the warmer land',
            explanation: 'Land warms faster than water; warm air over land rises, drawing in cooler air from above the sea.'
          },
          {
            id: 'p2_3_q10',
            subtopicId: 'physics_2_3',
            type: 'multiple_choice',
            question: 'What mechanism explains why a metal spoon handle feels hot when left in a cup of boiling soup?',
            options: ['Conduction along the metal handle', 'Convection currents inside the handle', 'Radiation from the spoon surface', 'Sublimation of soup particles'],
            correctAnswer: 'Conduction along the metal handle',
            explanation: 'Thermal energy transfers through direct atomic vibration and electron diffusion along the solid metal.'
          }
        ]
      }
    ]
  }
];

export const physicsChapters: Chapter[] = [
  ...basePhysicsChapters,
  physicsWavesChapter,
  physicsElectricityChapter,
  ...physicsAtomicSpaceChapters
];

