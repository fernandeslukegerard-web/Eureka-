import { Chapter } from '../../types';

export const physicsWavesChapter: Chapter = {
  id: 'phys_ch3',
  subjectId: 'physics',
  number: 3,
  title: 'Properties of Waves',
  description: 'General wave properties, light reflection and refraction, electromagnetic spectrum, and sound waves.',
  subtopics: [
    {
      id: 'physics_3_1',
      chapterId: 'phys_ch3',
      subjectId: 'physics',
      code: '3.1',
      title: 'General Wave Properties',
      description: 'Transverse vs longitudinal waves, wave equation v = fλ, reflection, refraction, and diffraction.',
      durationMinutes: 12,
      experience: {
        type: 'surfboard_wave_control',
        title: 'Surfboard Wave Control Machine',
        scenario: 'A giant indoor aquatic wave-pool simulates ocean swells for competitive surfers.',
        prompt: 'Adjust wave amplitude, wavelength, and frequency. Watch the live wave speed calculate automatically via v = f × λ and observe water molecule orbital oscillation.',
        goal: 'Generate a 1.5 m amplitude wave with 2.0 m wavelength and calculate the exact frequency needed for a 6.0 m/s wave speed.'
      },
      lesson: {
        whatHappened: 'Changing the frequency increased the number of wave crests passing each second. The wave speed v was determined by frequency multiplied by wavelength (v = fλ). Increasing amplitude made the wave taller without changing its speed.',
        academicConcept: 'Waves transfer energy without transferring matter. In transverse waves (light, water ripples), particle vibrations are perpendicular (90°) to wave propagation. In longitudinal waves (sound), vibrations are parallel to wave travel, forming compressions and rarefactions. The wave equation: v = f × λ.',
        interactiveDiagram: {
          title: 'Transverse vs Longitudinal Wave Anatomy',
          caption: 'Crest, Trough, Amplitude A, Wavelength λ, Frequency f = 1/T',
          keyPoints: [
            'Wavelength (λ): Distance between two consecutive peaks or troughs (metres).',
            'Frequency (f): Number of complete wave cycles passing a point per second (Hertz, Hz).',
            'Period (T): Time for one complete wave cycle (seconds), T = 1 / f.',
            'Diffraction: Spreading of waves passing through a gap, maximum when gap size ≈ wavelength.'
          ]
        },
        workedExample: {
          title: 'Using the Wave Equation',
          problem: 'A water wave in a ripple tank has a wavelength of 0.04 m and a frequency of 25 Hz. Calculate the speed of the wave.',
          stepByStep: [
            { step: 'Formula', detail: 'v = f × λ' },
            { step: 'Calculation', detail: 'v = 25 Hz × 0.04 m = 1.0 m/s', math: 'v = 25 \\times 0.04 = 1.0\\text{ m/s}' }
          ],
          keyTakeaway: 'Wave speed depends solely on frequency and wavelength: v = fλ.'
        },
        quickChallenge: {
          prompt: 'What happens to water waves when they enter shallow water in a ripple tank?',
          options: ['They speed up and wavelength increases', 'They slow down and wavelength decreases, while frequency remains constant', 'Frequency doubles', 'They completely reflect backwards'],
          correctIndex: 1,
          explanation: 'In shallow water, friction with the bottom slows the wave speed v. Since frequency f is set by the oscillator, wavelength λ must decrease (v = fλ).'
        },
        summary: [
          'Waves transfer energy and information without transferring matter.',
          'Wave speed v = fλ; frequency f = 1 / T.',
          'Transverse: oscillation perpendicular to propagation; Longitudinal: oscillation parallel.'
        ]
      },
      questions: [
        {
          id: 'p3_1_q1',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'What is the wave equation relating speed v, frequency f, and wavelength λ?',
          options: ['v = f / λ', 'v = f × λ', 'v = λ / f', 'v = f + λ'],
          correctAnswer: 'v = f × λ',
          explanation: 'Wave speed equals frequency multiplied by wavelength: v = fλ.'
        },
        {
          id: 'p3_1_q2',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'Which of the following is a longitudinal wave?',
          options: ['Visible light', 'Sound wave in air', 'Radio wave', 'Water ripple'],
          correctAnswer: 'Sound wave in air',
          explanation: 'Sound waves vibrate air molecules back and forth parallel to the direction of wave travel.'
        },
        {
          id: 'p3_1_q3',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'A wave has a frequency of 50 Hz. What is its periodic time T?',
          options: ['0.02 s', '2 s', '50 s', '0.5 s'],
          correctAnswer: '0.02 s',
          explanation: 'T = 1 / f = 1 / 50 = 0.02 seconds.'
        },
        {
          id: 'p3_1_q4',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'Under what condition is diffraction (spreading of waves through an aperture) most noticeable?',
          options: ['When the gap size is roughly equal to the wavelength of the wave', 'When the gap size is 100 times larger than the wavelength', 'Only in complete vacuum', 'When wave amplitude is zero'],
          correctAnswer: 'When the gap size is roughly equal to the wavelength of the wave',
          explanation: 'Diffraction is maximized when the gap width is comparable to the wavelength (gap ≈ λ).'
        },
        {
          id: 'p3_1_q5',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'What happens to the frequency of a wave as it passes from deep water into shallow water?',
          options: ['It increases', 'It decreases', 'It remains unchanged', 'It drops to zero'],
          correctAnswer: 'It remains unchanged',
          explanation: 'Wave frequency is determined strictly by the vibrating source producing the wave, not the medium.'
        },
        {
          id: 'p3_1_q6',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'What is the amplitude of a transverse wave?',
          options: ['Distance from crest to trough', 'Maximum displacement from the undisturbed equilibrium rest position', 'Distance between two crests', 'Speed divided by time'],
          correctAnswer: 'Maximum displacement from the undisturbed equilibrium rest position',
          explanation: 'Amplitude is measured from the central equilibrium axis to the peak crest or trough.'
        },
        {
          id: 'p3_1_q7',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'A radio station transmits at 100 MHz (100 × 10⁶ Hz). Radio wave speed is 3.0 × 10⁸ m/s. What is the wavelength?',
          options: ['3.0 m', '0.33 m', '300 m', '30 m'],
          correctAnswer: '3.0 m',
          explanation: 'λ = v / f = (3.0 × 10⁸) / (100 × 10⁶) = 3.0 metres.'
        },
        {
          id: 'p3_1_q8',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'What do compressions and rarefactions represent in a longitudinal wave?',
          options: ['Points of high and low pressure/particle density', 'Wave crests and troughs', 'Colors of light', 'Electric charges'],
          correctAnswer: 'Points of high and low pressure/particle density',
          explanation: 'Compressions are regions of high particle density; rarefactions are stretched regions of lower density.'
        },
        {
          id: 'p3_1_q9',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'What happens to the energy transferred by a wave when its amplitude is doubled?',
          options: ['Energy is doubled (2x)', 'Energy is quadrupled (4x)', 'Energy remains constant', 'Energy is halved'],
          correctAnswer: 'Energy is quadrupled (4x)',
          explanation: 'The energy of a mechanical wave is proportional to the square of its amplitude (E ∝ A²).'
        },
        {
          id: 'p3_1_q10',
          subtopicId: 'physics_3_1',
          type: 'multiple_choice',
          question: 'A wavefront represents what in wave physics?',
          options: ['A line connecting adjacent points that are vibrating in the same phase', 'The direction of the wind', 'The speed of light', 'The boundary of a shadow'],
          correctAnswer: 'A line connecting adjacent points that are vibrating in the same phase',
          explanation: 'Wavefronts join contiguous crests and are perpendicular to the direction of wave travel (rays).'
        }
      ]
    },
    {
      id: 'physics_3_2',
      chapterId: 'phys_ch3',
      subjectId: 'physics',
      code: '3.2',
      title: 'Light',
      description: 'Reflection, refraction, Snell’s law, total internal reflection, and thin lenses.',
      durationMinutes: 15,
      experience: {
        type: 'laser_maze',
        title: 'Laser Maze Optical Challenge',
        scenario: 'A high-security optical vault requires directing a green laser through mirrors and glass prisms.',
        prompt: 'Rotate plane mirrors to use the law of reflection (angle i = angle r). Direct the laser into a glass block to observe refraction toward the normal and achieve total internal reflection to hit the receiver.',
        goal: 'Guide the laser beam through 3 mirror reflections and 1 glass prism to hit the target diode.'
      },
      lesson: {
        whatHappened: 'When the laser struck a plane mirror, the reflected angle matched the incident angle exactly. Passing from air into glass slowed the light down, bending it toward the normal. Exceeding the critical angle inside glass trapped the beam via Total Internal Reflection.',
        academicConcept: 'Law of reflection: angle of incidence i = angle of reflection r. Refraction is the change in wave direction due to change in speed. Snell’s Law: n = sin(i) / sin(r). Critical angle c is the incident angle where refracted ray emerges at 90°: sin(c) = 1 / n. If i > c inside an optically denser medium, Total Internal Reflection (TIR) occurs.',
        interactiveDiagram: {
          title: 'Ray Optics: Reflection, Refraction, and TIR',
          caption: 'Normal line, angle i = angle r, Snell\'s law n = sin(i)/sin(r), Total Internal Reflection i > c',
          keyPoints: [
            'All angles are measured relative to the Normal (perpendicular to surface).',
            'Entering denser medium: light slows down and bends toward the normal (r < i).',
            'Total Internal Reflection conditions: Light in denser medium approaching less dense medium at i > critical angle c.',
            'Convex (converging) lens brings parallel rays together at principal focus F; focal length f.'
          ]
        },
        workedExample: {
          title: 'Calculating Refractive Index using Snell\'s Law',
          problem: 'A light ray passes from air into perspex glass at an angle of incidence of 45°. The angle of refraction is 28°. Calculate the refractive index n of the perspex.',
          stepByStep: [
            { step: 'Formula', detail: 'n = sin(i) / sin(r)' },
            { step: 'Trigonometry', detail: 'sin(45°) ≈ 0.7071; sin(28°) ≈ 0.4695' },
            { step: 'Calculation', detail: 'n = 0.7071 / 0.4695 ≈ 1.51', math: 'n = \\frac{\\sin(45^\\circ)}{\\sin(28^\\circ)} = 1.51' }
          ],
          keyTakeaway: 'Refractive index is a dimensionless ratio always greater than or equal to 1.0.'
        },
        quickChallenge: {
          prompt: 'What are the two necessary conditions for Total Internal Reflection to take place?',
          options: ['Light in vacuum and mirror angle at 45°', 'Light travelling in denser medium toward less dense medium, with angle of incidence greater than critical angle', 'Angle of incidence equal to 0°', 'Light must be monochromatic blue'],
          correctIndex: 1,
          explanation: 'TIR requires the light to start inside the optically denser medium and strike the boundary at an angle exceeding the critical angle c.'
        },
        summary: [
          'Law of reflection: angle of incidence = angle of reflection (i = r).',
          'Snell’s Law: refractive index n = sin(i) / sin(r) = speed in air / speed in medium.',
          'Total internal reflection occurs when i > c inside the denser medium; used in fibre optics.'
        ]
      },
      questions: [
        {
          id: 'p3_2_q1',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'What is the law of reflection for a plane mirror?',
          options: ['Angle of incidence = Angle of reflection', 'Angle of incidence = 2 × Angle of reflection', 'Angle of refraction = Angle of incidence', 'Light travels at 90° always'],
          correctAnswer: 'Angle of incidence = Angle of reflection',
          explanation: 'The angle between incident ray and normal equals the angle between reflected ray and normal.'
        },
        {
          id: 'p3_2_q2',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'What happens to a ray of light entering glass from air at an angle of 30° to the normal?',
          options: ['It bends away from the normal', 'It bends toward the normal because it slows down', 'It reflects completely', 'It stops completely'],
          correctAnswer: 'It bends toward the normal because it slows down',
          explanation: 'Glass is optically denser than air; light slows down and refracts towards the normal.'
        },
        {
          id: 'p3_2_q3',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'If the critical angle for a glass block is 42°, what happens to a ray inside glass hitting the air interface at 50°?',
          options: ['It refracts into the air at 90°', 'It undergoes total internal reflection back into the glass', 'It is absorbed 100%', 'It splits into a rainbow'],
          correctAnswer: 'It undergoes total internal reflection back into the glass',
          explanation: 'Because 50° > 42° (i > c), Total Internal Reflection occurs.'
        },
        {
          id: 'p3_2_q4',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'What real-world technology relies fundamentally on total internal reflection?',
          options: ['Fibre optic communications cables and medical endoscopes', 'Incandescent light bulbs', 'Simple magnifying lenses', 'Barometers'],
          correctAnswer: 'Fibre optic communications cables and medical endoscopes',
          explanation: 'Optical fibres guide light over immense distances through repeated total internal reflection along glass cores.'
        },
        {
          id: 'p3_2_q5',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'What are the characteristics of an image formed by a flat plane mirror?',
          options: ['Virtual, upright, same size, laterally inverted', 'Real, inverted, magnified', 'Real, upright, diminished', 'Virtual, upside-down'],
          correctAnswer: 'Virtual, upright, same size, laterally inverted',
          explanation: 'Plane mirror images cannot be projected on a screen (virtual), are upright, same size, and flipped horizontally.'
        },
        {
          id: 'p3_2_q6',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'A convex lens has a focal length of 10 cm. An object is placed 30 cm away. What type of image is formed?',
          options: ['Real, inverted, diminished', 'Virtual, upright, magnified', 'Real, upright, same size', 'Virtual, inverted'],
          correctAnswer: 'Real, inverted, diminished',
          explanation: 'Object placed beyond 2f (30 cm > 20 cm) produces a real, inverted, diminished image between f and 2f.'
        },
        {
          id: 'p3_2_q7',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'What is the speed of light in a vacuum?',
          options: ['3.0 × 10⁸ m/s', '330 m/s', '3.0 × 10⁵ m/s', '3.0 × 10¹¹ m/s'],
          correctAnswer: '3.0 × 10⁸ m/s',
          explanation: 'Speed of light in vacuum c is approximately 300,000,000 m/s (3.0 × 10⁸ m/s).'
        },
        {
          id: 'p3_2_q8',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'What is dispersion of white light through a triangular glass prism?',
          options: ['Splitting into constituent rainbow colors because different wavelengths refract by different amounts', 'Absorption of ultraviolet light', 'Reflection off the front face only', 'Scattering by air molecules'],
          correctAnswer: 'Splitting into constituent rainbow colors because different wavelengths refract by different amounts',
          explanation: 'Violet light has a shorter wavelength and refracts more than red light, creating the visible spectrum.'
        },
        {
          id: 'p3_2_q9',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'If refractive index n = 1.5, what is the critical angle c calculated from sin(c) = 1 / n?',
          options: ['41.8°', '48.6°', '30.0°', '60.0°'],
          correctAnswer: '41.8°',
          explanation: 'sin(c) = 1 / 1.5 = 0.6667 → c = arcsin(0.6667) ≈ 41.8°.'
        },
        {
          id: 'p3_2_q10',
          subtopicId: 'physics_3_2',
          type: 'multiple_choice',
          question: 'When an object is placed inside the focal length of a magnifying glass (convex lens), what image is produced?',
          options: ['Virtual, upright, and magnified', 'Real, inverted, and diminished', 'No image is formed', 'Real, upright, and same size'],
          correctAnswer: 'Virtual, upright, and magnified',
          explanation: 'When object distance u < f, the rays diverge and appear to originate from an enlarged upright virtual image.'
        }
      ]
    },
    {
      id: 'physics_3_3',
      chapterId: 'phys_ch3',
      subjectId: 'physics',
      code: '3.3',
      title: 'Electromagnetic Spectrum',
      description: 'Properties, order, wavelengths, frequencies, uses, and safety hazards of EM waves.',
      durationMinutes: 12,
      experience: {
        type: 'space_communication',
        title: 'Deep Space Communication Station',
        scenario: 'A lunar orbital communications array routes signals across the solar system.',
        prompt: 'Select from Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, and Gamma bands to solve transmission tasks (satellite link, planet surface radar, medical scan, sterilization).',
        goal: 'Match the correct electromagnetic wave band to 4 distinct aerospace operational tasks.'
      },
      lesson: {
        whatHappened: 'Radio waves penetrated atmospheric clouds easily for long-distance broadcasts. Microwaves allowed high-bandwidth satellite uplinks. Gamma rays possessed extreme photon energy capable of sterilizing equipment.',
        academicConcept: 'All electromagnetic waves are transverse, travel at 3.0 × 10⁸ m/s in a vacuum, and transfer energy. In order of increasing frequency and decreasing wavelength: Radio → Microwave → Infrared → Visible Light → Ultraviolet → X-rays → Gamma rays. Higher frequency means higher photon energy and greater ionization hazard.',
        interactiveDiagram: {
          title: 'The Electromagnetic Spectrum Continuum',
          caption: 'Radio (longest λ, lowest f) to Gamma rays (shortest λ, highest f, highest energy)',
          keyPoints: [
            'Common property: All travel at speed c = 3.0 × 10⁸ m/s in vacuum.',
            'Radio: Radio/TV broadcasts, RFID chips.',
            'Microwave: Satellite communication, cooking, radar.',
            'Infrared: Thermal imaging, TV remote controls, optical fibres.',
            'Ultraviolet: Fluorescent lamps, security marking; hazard: sunburn/skin cancer.',
            'X-rays & Gamma: Medical imaging, cancer radiotherapy; hazard: cell ionization/mutations.'
          ]
        },
        workedExample: {
          title: 'Calculating Frequency of Microwave Radiation',
          problem: 'A microwave oven emits radiation with a wavelength of 0.12 m. What is its frequency? (c = 3.0 × 10⁸ m/s).',
          stepByStep: [
            { step: 'Formula', detail: 'f = c / λ' },
            { step: 'Calculation', detail: 'f = (3.0 × 10⁸ m/s) / 0.12 m = 2.5 × 10⁹ Hz = 2.5 GHz', math: 'f = \\frac{3.0 \\times 10^8}{0.12} = 2.5 \\times 10^9\\text{ Hz}' }
          ],
          keyTakeaway: 'All electromagnetic waves travel at the speed of light c = 3.0 × 10⁸ m/s.'
        },
        quickChallenge: {
          prompt: 'Which electromagnetic wave has the highest frequency and carries the greatest photon energy?',
          options: ['Radio waves', 'Visible green light', 'X-rays', 'Gamma rays'],
          correctIndex: 3,
          explanation: 'Gamma rays reside at the extreme high-frequency end of the spectrum with frequencies exceeding 10¹⁹ Hz and maximum photon energy.'
        },
        summary: [
          'All EM waves travel at 3.0 × 10⁸ m/s in vacuum and are transverse.',
          'Spectrum order: Radio, Micro, IR, Visible, UV, X-ray, Gamma.',
          'High-frequency EM waves (UV, X-rays, Gamma) are ionizing and present radiation hazards.'
        ]
      },
      questions: [
        {
          id: 'p3_3_q1',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'Which of the following is true for all electromagnetic waves in a vacuum?',
          options: ['They all have identical wavelengths', 'They all travel at the speed of 3.0 × 10⁸ m/s', 'They are all longitudinal', 'They all cause ionizing damage'],
          correctAnswer: 'They all travel at the speed of 3.0 × 10⁸ m/s',
          explanation: 'All EM radiation propagates through vacuum at the universal speed of light c.'
        },
        {
          id: 'p3_3_q2',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'Which type of electromagnetic wave is used for satellite communications and mobile phones?',
          options: ['Microwaves', 'Sound waves', 'Ultraviolet', 'Gamma rays'],
          correctAnswer: 'Microwaves',
          explanation: 'Microwaves pass through the Earth ionosphere easily to connect with satellites.'
        },
        {
          id: 'p3_3_q3',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'Which electromagnetic waves can penetrate soft human tissue but are absorbed by dense bone?',
          options: ['Infrared', 'Visible light', 'X-rays', 'Radio waves'],
          correctAnswer: 'X-rays',
          explanation: 'X-rays penetrate muscles and organs but are attenuated by calcium-rich bones, producing diagnostic radiographs.'
        },
        {
          id: 'p3_3_q4',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'What is a dangerous biological hazard associated with excessive exposure to Ultraviolet (UV) radiation?',
          options: ['Skin burns and increased risk of skin cancer (melanoma)', 'Internal cell heating only', 'Radioactive contamination', 'Hearing loss'],
          correctAnswer: 'Skin burns and increased risk of skin cancer (melanoma)',
          explanation: 'UV photons carry enough energy to damage DNA in skin cells, triggering mutations and sunburn.'
        },
        {
          id: 'p3_3_q5',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'What type of electromagnetic radiation is emitted by warm objects and detected by thermal cameras?',
          options: ['Infrared', 'Ultraviolet', 'Radio waves', 'X-rays'],
          correctAnswer: 'Infrared',
          explanation: 'All objects above absolute zero emit thermal infrared radiation matching their temperature.'
        },
        {
          id: 'p3_3_q6',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'Arrange in order of increasing frequency: Infrared, Radio, Gamma, Visible.',
          options: ['Radio → Infrared → Visible → Gamma', 'Gamma → Visible → Infrared → Radio', 'Visible → Radio → Infrared → Gamma', 'Infrared → Radio → Gamma → Visible'],
          correctAnswer: 'Radio → Infrared → Visible → Gamma',
          explanation: 'Radio has lowest frequency; Gamma has highest frequency.'
        },
        {
          id: 'p3_3_q7',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'What property makes Gamma rays suitable for sterilising medical instruments inside sealed packaging?',
          options: ['They are visible in the dark', 'Their high energy kills bacteria and viruses without heating or damaging packaging', 'They make instruments magnetic', 'They smell like ozone'],
          correctAnswer: 'Their high energy kills bacteria and viruses without heating or damaging packaging',
          explanation: 'High penetrating power and ionization energy destroy microbial DNA through the packaging.'
        },
        {
          id: 'p3_3_q8',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'What type of wave is an electromagnetic wave?',
          options: ['Longitudinal', 'Transverse', 'Mechanical pressure wave', 'Torsional wave'],
          correctAnswer: 'Transverse',
          explanation: 'Electromagnetic waves consist of oscillating electric and magnetic fields perpendicular to wave motion.'
        },
        {
          id: 'p3_3_q9',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'What colors mark the opposite ends of the visible light spectrum?',
          options: ['Red (longest λ) and Violet (shortest λ)', 'Yellow and Blue', 'Green and Orange', 'White and Black'],
          correctAnswer: 'Red (longest λ) and Violet (shortest λ)',
          explanation: 'Red has the longest visible wavelength (~700 nm) and lowest frequency; violet has ~400 nm.'
        },
        {
          id: 'p3_3_q10',
          subtopicId: 'physics_3_3',
          type: 'multiple_choice',
          question: 'Why are radio waves considered safe for everyday mobile communication compared to X-rays?',
          options: ['They have very low photon energy and are non-ionizing', 'They travel slower than sound', 'They are completely absorbed by glass', 'They are made of air'],
          correctAnswer: 'They have very low photon energy and are non-ionizing',
          explanation: 'Radio photons do not have sufficient quantum energy to remove electrons from atoms or damage DNA.'
        }
      ]
    },
    {
      id: 'physics_3_4',
      chapterId: 'phys_ch3',
      subjectId: 'physics',
      code: '3.4',
      title: 'Sound',
      description: 'Production of sound, speed of sound, pitch, loudness, echoes, and ultrasound.',
      durationMinutes: 14,
      experience: {
        type: 'concert_mixer',
        title: 'Virtual Concert Sound Mixer',
        scenario: 'A music studio mixing console records live musical instruments and synthesized audio.',
        prompt: 'Adjust audio frequency (20 Hz to 20,000 Hz) and volume amplitude. Observe the oscilloscope waveform respond: higher pitch increases frequency (tighter waves), while loudness increases waveform amplitude.',
        goal: 'Calibrate a test tone to 440 Hz (Concert A) at 0.8 amplitude and calculate speed of sound in air.'
      },
      lesson: {
        whatHappened: 'Increasing pitch compressed the wave cycles closer together (higher frequency). Turning up the volume increased the peak height (amplitude) on the oscilloscope. Sound could not travel when the chamber vacuum pump was activated.',
        academicConcept: 'Sound is a mechanical longitudinal wave produced by vibrating sources. Sound requires a medium to travel and CANNOT travel through a vacuum. Pitch depends on frequency (Hz); loudness depends on amplitude. The normal human hearing range is 20 Hz to 20,000 Hz (20 kHz). Sound travels at ~330-340 m/s in air, faster in liquids (~1500 m/s in water), and fastest in solids (~5000 m/s in steel). Echo: reflection of sound.',
        interactiveDiagram: {
          title: 'Oscilloscope Display of Sound Waves',
          caption: 'Amplitude = Loudness; Frequency = Pitch; Echo distance d = vt/2',
          keyPoints: [
            'Pitch ∝ Frequency: High pitch = high frequency = more wave peaks per horizontal division.',
            'Loudness ∝ Amplitude: Louder sound = larger vertical displacement.',
            'Speed of sound in air: v ≈ 330 m/s (measure using flash-and-bang or two microphones).',
            'Echo sounding / Sonar: Distance = (speed × time) / 2 (accounting for two-way transit).'
          ]
        },
        workedExample: {
          title: 'Calculating Depth Using Sonar Echoes',
          problem: 'A ship sonar sends an ultrasound pulse down to the seabed. The echo returns in 0.8 seconds. Speed of sound in seawater is 1500 m/s. What is the sea depth?',
          stepByStep: [
            { step: 'Two-way distance', detail: 'Total distance = speed × time = 1500 m/s × 0.8 s = 1200 m' },
            { step: 'One-way depth', detail: 'Depth d = total distance / 2 = 1200 / 2 = 600 m', math: 'd = \\frac{v \\times t}{2} = \\frac{1500 \\times 0.8}{2} = 600\\text{ m}' }
          ],
          keyTakeaway: 'Always remember to divide total echo travel time by 2 when determining one-way distance.'
        },
        quickChallenge: {
          prompt: 'Why can sound NOT travel through outer space?',
          options: ['Space is too cold', 'Sound is a mechanical wave requiring vibrating particles in a medium; space is a vacuum', 'Gravity bends sound rays away', 'Sound moves too slowly'],
          correctIndex: 1,
          explanation: 'Sound propagates through sequential collisions between physical particles; in the vacuum of space with no particles, sound cannot travel.'
        },
        summary: [
          'Sound is a longitudinal wave produced by vibrations; requires a medium.',
          'Human hearing range: 20 Hz to 20,000 Hz.',
          'Pitch depends on frequency; loudness depends on amplitude.',
          'Echoes are reflected sound waves; distance d = (v × t) / 2.'
        ]
      },
      questions: [
        {
          id: 'p3_4_q1',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'What is the approximate range of audible frequencies for healthy human ears?',
          options: ['20 Hz to 20,000 Hz', '2 Hz to 200 Hz', '100 kHz to 10 MHz', '0 Hz to 100 Hz'],
          correctAnswer: '20 Hz to 20,000 Hz',
          explanation: 'Human auditory threshold spans approximately 20 Hz (deep bass) to 20 kHz (high treble).'
        },
        {
          id: 'p3_4_q2',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'What happens to sound if a bell ringing inside a glass jar has all the air pumped out into a vacuum?',
          options: ['The sound gets louder', 'The sound becomes completely silent because sound requires a medium', 'The pitch increases', 'The bell shatters'],
          correctAnswer: 'The sound becomes completely silent because sound requires a medium',
          explanation: 'Sound is a mechanical longitudinal wave requiring particles to transmit vibrations.'
        },
        {
          id: 'p3_4_q3',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'Which sound wave parameter determines its musical pitch?',
          options: ['Wavelength alone', 'Frequency', 'Amplitude', 'Speed'],
          correctAnswer: 'Frequency',
          explanation: 'Higher frequency corresponds to higher pitch.'
        },
        {
          id: 'p3_4_q4',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'A person claps hands in front of a cliff 165 m away. Sound speed in air is 330 m/s. How long until they hear the echo?',
          options: ['1.0 s', '0.5 s', '2.0 s', '4.0 s'],
          correctAnswer: '1.0 s',
          explanation: 'Total travel distance = 2 × 165 m = 330 m. Time = distance / speed = 330 / 330 = 1.0 second.'
        },
        {
          id: 'p3_4_q5',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'In which medium does sound travel fastest?',
          options: ['Solid steel', 'Liquid water', 'Air at 20°C', 'Vacuum'],
          correctAnswer: 'Solid steel',
          explanation: 'Solids have tightly bound atoms with strong elastic bonds that transmit vibrational energy fastest (~5000 m/s).'
        },
        {
          id: 'p3_4_q6',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'What is ultrasound?',
          options: ['Sound with frequencies higher than 20,000 Hz', 'Sound with very loud volume', 'Sound that travels at light speed', 'Sound below 20 Hz'],
          correctAnswer: 'Sound with frequencies higher than 20,000 Hz',
          explanation: 'Ultrasound is sound exceeding the upper threshold of human hearing (20 kHz).'
        },
        {
          id: 'p3_4_q7',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'Why is ultrasound preferred over X-rays for prenatal imaging of unborn foetuses?',
          options: ['Ultrasound is non-ionizing and harmless to delicate cells', 'Ultrasound gives brighter colors', 'Ultrasound travels through bone better', 'Ultrasound equipment is cheaper'],
          correctAnswer: 'Ultrasound is non-ionizing and harmless to delicate cells',
          explanation: 'Ultrasound uses high-frequency sound waves rather than ionizing radiation, preventing cellular damage.'
        },
        {
          id: 'p3_4_q8',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'What changes on an oscilloscope trace when a musician plays the same note louder?',
          options: ['The wave trace increases in vertical height (amplitude)', 'The waves get closer together', 'The line turns flat', 'The frequency doubles'],
          correctAnswer: 'The wave trace increases in vertical height (amplitude)',
          explanation: 'Loudness corresponds to amplitude, visible as peak-to-trough height on the oscilloscope.'
        },
        {
          id: 'p3_4_q9',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'Why do you see lightning before you hear the accompanying thunderclap during a storm?',
          options: ['Light travels at ~3.0 × 10⁸ m/s, whereas sound travels at only ~330 m/s', 'Thunder is formed 10 seconds later', 'Lightning is brighter', 'Sound bends away in storm clouds'],
          correctAnswer: 'Light travels at ~3.0 × 10⁸ m/s, whereas sound travels at only ~330 m/s',
          explanation: 'Light reaches the observer virtually instantaneously compared to the much slower speed of sound in air.'
        },
        {
          id: 'p3_4_q10',
          subtopicId: 'physics_3_4',
          type: 'multiple_choice',
          question: 'What is the term for reflected sound that arrives with sufficient delay to be heard distinctly?',
          options: ['Echo', 'Refraction', 'Diffraction', 'Resonance'],
          correctAnswer: 'Echo',
          explanation: 'An echo is the acoustic reflection of sound waves off a distant surface.'
        }
      ]
    }
  ]
};
