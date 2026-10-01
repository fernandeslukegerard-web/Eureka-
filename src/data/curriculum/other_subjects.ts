import { Chapter } from '../../types';

export const mathChapters: Chapter[] = [
  {
    id: 'math_ch1',
    subjectId: 'mathematics',
    number: 1,
    title: 'Number & Estimation',
    description: 'Types of numbers, prime factorisation, standard form, fractions, percentages, and scientific notation.',
    subtopics: [
      {
        id: 'math_1_1',
        chapterId: 'math_ch1',
        title: 'Prime Factorisation & Encryption',
        academicConcept: 'Decomposing integers into unique prime factors (Fundamental Theorem of Arithmetic) and its role in modern public-key cryptography (RSA).',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_math_prime',
          title: 'Vault Code Cracker: Prime Factor Factorizer',
          type: 'code_cracker',
          scenarioDescription: 'A high-security vault door requires cracking a composite authorization code into its core prime keys.',
          instructions: 'Divide the composite security passcode by candidate prime numbers (2, 3, 5, 7, 11, 13) to unlock the cryptographic vault.',
          interactiveType: 'math_primes',
          initialConfig: { targetNumber: 360 }
        },
        whatHappenedExplanation: 'Every composite integer greater than 1 can be represented as a unique product of prime numbers. In modern RSA encryption, multiplying large primes together is instantaneous, but factoring their product without the private key takes centuries.',
        interactiveDemonstration: {
          title: 'Prime Factor Tree & Exponent Builder',
          description: 'Visualize how numbers split into prime branches until every terminal node is an irreducible prime.',
          controlsDescription: 'Input different numbers to observe the factor tree and express in index notation $a^x \\times b^y$.'
        },
        workedExample: {
          problem: 'Find the prime factorisation of 360 and express your answer in index form.',
          stepByStepSolution: [
            'Divide by 2: 360 / 2 = 180',
            'Divide by 2: 180 / 2 = 90',
            'Divide by 2: 90 / 2 = 45',
            'Divide by 3: 45 / 3 = 15',
            'Divide by 3: 15 / 3 = 5',
            '5 is prime. Result: 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5'
          ],
          finalAnswer: '2³ × 3² × 5'
        },
        quickChallenge: {
          question: 'What is the prime factorisation of 120 in index notation?',
          options: ['2³ × 3 × 5', '2² × 3² × 5', '2 × 3² × 5', '2⁴ × 3 × 5'],
          correctIndex: 0,
          explanation: '120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15 = 2³ × 3 × 5.'
        },
        examPractice: [
          {
            id: 'math_q1',
            questionText: 'Given that 1800 = 2³ × 3² × 5², find the smallest integer k such that 1800k is a perfect cube.',
            type: 'multiple_choice',
            options: ['k = 15', 'k = 30', 'k = 12', 'k = 60'],
            correctAnswer: 'k = 15',
            marks: 3,
            feedback: 'For a perfect cube, every prime exponent must be a multiple of 3. 2³ has exponent 3 (already done). 3² needs one more 3 (3¹). 5² needs one more 5 (5¹). Thus k = 3 × 5 = 15.'
          },
          {
            id: 'math_q2',
            questionText: 'Find the Highest Common Factor (HCF) of 120 (2³ × 3 × 5) and 360 (2³ × 3² × 5).',
            type: 'multiple_choice',
            options: ['60', '120', '360', '24'],
            correctAnswer: '120',
            marks: 2,
            feedback: 'The HCF takes the lowest power of each shared prime: 2³ × 3¹ × 5¹ = 8 × 3 × 5 = 120.'
          }
        ]
      }
    ]
  },
  {
    id: 'math_ch2',
    subjectId: 'mathematics',
    number: 2,
    title: 'Algebra & Graphs',
    description: 'Linear and quadratic equations, inequalities, algebraic fractions, and parabolic trajectory modeling.',
    subtopics: [
      {
        id: 'math_2_1',
        chapterId: 'math_ch2',
        title: 'Quadratic Equations & Projectile Trajectory',
        academicConcept: 'The graph of y = ax² + bx + c is a parabola. The roots (solutions) represent where the curve intersects y = 0.',
        estimatedMinutes: 4,
        experience: {
          id: 'exp_math_quad',
          title: 'Artillery Trajectory Targeting Challenge',
          type: 'projectile_solver',
          scenarioDescription: 'Calibrate a water-cannon launcher by tuning launch angle, initial velocity, and vertex height to hit target landing coordinates.',
          instructions: 'Adjust quadratic coefficients a and c to arc the projectile over obstacles and strike the target pad at (d, 0).',
          interactiveType: 'math_parabola',
          initialConfig: { targetX: 20, obstacleX: 10, obstacleHeight: 12 }
        },
        whatHappenedExplanation: 'Projectile motion under constant gravity follows a parabolic quadratic function y = -kx² + mx + h. The peak of the path occurs at the vertex x = -b/(2a), and the landing point is the positive root where y = 0.',
        interactiveDemonstration: {
          title: 'Dynamic Parabola Explorer',
          description: 'Alter a, b, and c to see vertex movement, roots, and line of symmetry.',
          controlsDescription: 'Sliders for a, b, and c with real-time root and discriminant display.'
        },
        workedExample: {
          problem: 'Solve the quadratic equation 2x² - 8x - 24 = 0 by factorisation.',
          stepByStepSolution: [
            'Divide by common factor 2: x² - 4x - 12 = 0',
            'Find two numbers that multiply to -12 and sum to -4: (-6) and (+2)',
            'Factorise: (x - 6)(x + 2) = 0',
            'Set each factor to zero: x - 6 = 0 => x = 6; x + 2 = 0 => x = -2'
          ],
          finalAnswer: 'x = 6 or x = -2'
        },
        quickChallenge: {
          question: 'What is the y-intercept of the curve y = 3x² - 5x + 7?',
          options: ['(0, 7)', '(0, -5)', '(0, 3)', '(7, 0)'],
          correctIndex: 0,
          explanation: 'At the y-intercept, x = 0. Substituting gives y = 3(0)² - 5(0) + 7 = 7.'
        },
        examPractice: [
          {
            id: 'math_q3',
            questionText: 'Using the quadratic formula x = (-b ± √(b² - 4ac)) / (2a), solve 3x² + 5x - 2 = 0.',
            type: 'multiple_choice',
            options: ['x = 1/3 or x = -2', 'x = -1/3 or x = 2', 'x = 2/3 or x = -1', 'x = 1/2 or x = -3'],
            correctAnswer: 'x = 1/3 or x = -2',
            marks: 3,
            feedback: 'a=3, b=5, c=-2. b²-4ac = 25 - 4(3)(-2) = 25 + 24 = 49. √49 = 7. x = (-5 ± 7) / 6. x = 2/6 = 1/3 or x = -12/6 = -2.'
          }
        ]
      }
    ]
  }
];

export const csChapters: Chapter[] = [
  {
    id: 'cs_ch1',
    subjectId: 'computer_science',
    number: 1,
    title: 'Data Representation & Logic Gates',
    description: 'Binary, hexadecimal, truth tables, and boolean circuit logic in digital computer hardware.',
    subtopics: [
      {
        id: 'cs_1_1',
        chapterId: 'cs_ch1',
        title: 'Logic Gates & Digital Circuits',
        academicConcept: 'Digital computers rely on transistors arranged into boolean logic gates (AND, OR, NOT, NAND, NOR, XOR) to process binary 1s and 0s.',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_cs_gates',
          title: 'Subway Signal Logic Gate Puzzle',
          type: 'circuit_builder',
          scenarioDescription: 'Build the subway safety interlock: a train may proceed only if Track Clear AND (Signal Green OR Emergency Override Active).',
          instructions: 'Toggle the input switches and connect AND / OR / NOT gates to activate the green safety light without tripping an alarm.',
          interactiveType: 'cs_logic_gates',
          initialConfig: { inputs: ['Clear', 'Green', 'Override'] }
        },
        whatHappenedExplanation: 'Logic gates take binary high (+5V / 1) and low (0V / 0) voltages and perform Boolean algebra operations. Complex microprocessors contain billions of these basic building blocks connected together.',
        interactiveDemonstration: {
          title: 'Interactive Gate Sandbox',
          description: 'Toggle inputs and observe real-time truth table evaluation for AND, OR, XOR, and NAND gates.',
          controlsDescription: 'Toggle inputs A and B to watch the truth table light up.'
        },
        workedExample: {
          problem: 'Construct the truth table output for Q = (A AND B) OR (NOT B).',
          stepByStepSolution: [
            'For A=0, B=0: (0 AND 0)=0, NOT 0=1. 0 OR 1 = 1.',
            'For A=0, B=1: (0 AND 1)=0, NOT 1=0. 0 OR 0 = 0.',
            'For A=1, B=0: (1 AND 0)=0, NOT 0=1. 0 OR 1 = 1.',
            'For A=1, B=1: (1 AND 1)=1, NOT 1=0. 1 OR 0 = 1.'
          ],
          finalAnswer: 'Output Q column: [1, 0, 1, 1]'
        },
        quickChallenge: {
          question: 'Which logic gate outputs 1 ONLY when both inputs are 1?',
          options: ['AND gate', 'OR gate', 'XOR gate', 'NAND gate'],
          correctIndex: 0,
          explanation: 'The AND gate is strictly conjunctive: its output is HIGH (1) if and only if both input A AND input B are HIGH (1).'
        },
        examPractice: [
          {
            id: 'cs_q1',
            questionText: 'What is the output of an XOR gate when input A = 1 and input B = 1?',
            type: 'multiple_choice',
            options: ['0', '1', 'Undefined', 'High-Z'],
            correctAnswer: '0',
            marks: 2,
            feedback: 'An Exclusive OR (XOR) gate outputs 1 only when inputs differ (one 1 and one 0). When both inputs are identical (1, 1 or 0, 0), it outputs 0.'
          }
        ]
      }
    ]
  }
];

export const businessEconomicsChapters: Chapter[] = [
  {
    id: 'econ_ch1',
    subjectId: 'economics',
    number: 1,
    title: 'The Basic Economic Problem & Markets',
    description: 'Scarcity, opportunity cost, supply & demand curves, equilibrium price, and consumer elasticity.',
    subtopics: [
      {
        id: 'econ_1_1',
        chapterId: 'econ_ch1',
        title: 'Supply, Demand & Market Equilibrium',
        academicConcept: 'Market equilibrium is achieved at the price point where the quantity demanded by consumers equals the quantity supplied by producers.',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_econ_restaurant',
          title: 'Food Truck Pricing Challenge',
          type: 'market_simulation',
          scenarioDescription: 'You run an artisanal taco truck outside a concert stadium. Find the optimal price to maximize profit without creating excess shortage or unsold waste.',
          instructions: 'Slide the burger price from $2 to $18. Watch the queue length and ingredient spoil rates to discover market equilibrium.',
          interactiveType: 'econ_market_equilibrium',
          initialConfig: { unitCost: 3.5, maxDemand: 200 }
        },
        whatHappenedExplanation: 'When the price is set too high ($16), demand collapses and food spoils (surplus). When price is set too low ($3), lines wrap around the block and inventory sells out instantly below market value (shortage). Equilibrium maximizes total revenue and clears the market.',
        interactiveDemonstration: {
          title: 'Interactive Supply & Demand Grapher',
          description: 'Shift demand and supply curves to observe changes in equilibrium price (Pe) and quantity (Qe).',
          controlsDescription: 'Sliders to shift consumer income, production costs, and tax rates.'
        },
        workedExample: {
          problem: 'If demand is given by Qd = 100 - 5P and supply is Qs = 20 + 3P, calculate the market equilibrium price (P*) and equilibrium quantity (Q*).',
          stepByStepSolution: [
            'Set Qd = Qs at equilibrium: 100 - 5P = 20 + 3P',
            'Rearrange: 100 - 20 = 5P + 3P',
            '80 = 8P => P = 10',
            'Substitute P = 10 back into either function: Q = 100 - 5(10) = 50'
          ],
          finalAnswer: 'Equilibrium Price P* = $10, Equilibrium Quantity Q* = 50 units'
        },
        quickChallenge: {
          question: 'What occurs in a free competitive market when the price is held above the equilibrium price?',
          options: ['Surplus (Excess Supply)', 'Shortage (Excess Demand)', 'Supply shifts left', 'Demand shifts right'],
          correctIndex: 0,
          explanation: 'At a price above equilibrium, producers supply more than consumers are willing to buy at that price, causing an unsold surplus.'
        },
        examPractice: [
          {
            id: 'econ_q1',
            questionText: 'Explain the effect of a sudden increase in the price of raw coffee beans on the equilibrium price and quantity of brewed café coffee.',
            type: 'multiple_choice',
            options: [
              'Supply shifts left: equilibrium price rises and quantity falls',
              'Supply shifts right: equilibrium price falls and quantity rises',
              'Demand shifts left: equilibrium price falls and quantity falls',
              'Demand shifts right: equilibrium price rises and quantity rises'
            ],
            correctAnswer: 'Supply shifts left: equilibrium price rises and quantity falls',
            marks: 3,
            feedback: 'An increase in raw material cost raises production costs, shifting the supply curve to the left. This causes a movement along the demand curve to a higher equilibrium price and lower quantity traded.'
          }
        ]
      }
    ]
  },
  {
    id: 'bus_ch1',
    subjectId: 'business_studies',
    number: 1,
    title: 'Business Activity & Operations',
    description: 'Factors of production, break-even analysis, cash flow forecasting, and organizational structures.',
    subtopics: [
      {
        id: 'bus_1_1',
        chapterId: 'bus_ch1',
        title: 'Break-Even Analysis & Margin of Safety',
        academicConcept: 'Break-even point is the level of sales where total revenue equals total costs (Fixed Costs + Variable Costs). Neither profit nor loss is made.',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_bus_breakeven',
          title: 'Apparel Factory Break-Even Workshop',
          type: 'financial_simulator',
          scenarioDescription: 'Balance factory rent ($5000/mo), fabric costs ($8/hoodie), and selling price ($28/hoodie) to determine how many hoodies must be sold before turning a single dollar of profit.',
          instructions: 'Adjust production volume and prices to visualize where the Total Revenue line crosses the Total Cost line.',
          interactiveType: 'bus_breakeven',
          initialConfig: { fixedCosts: 5000, variableCost: 8, price: 28 }
        },
        whatHappenedExplanation: 'Contribution per unit is Selling Price minus Variable Cost ($28 - $8 = $20). Every hoodie sold chips away $20 from the $5,000 fixed overhead rent. Break-even occurs at $5,000 / $20 = 250 hoodies. Units sold beyond 250 generate pure profit.',
        interactiveDemonstration: {
          title: 'Dynamic Break-Even Chart',
          description: 'Visualize Fixed Costs line, Total Costs curve, and Total Revenue line with shaded profit and loss zones.',
          controlsDescription: 'Tune fixed overhead, unit variable cost, and unit price.'
        },
        workedExample: {
          problem: 'A skateboard manufacturer has monthly fixed costs of $12,000. It costs $30 in materials and labor to build each board, and they retail for $70. Calculate the break-even quantity and the margin of safety if expected sales are 400 boards.',
          stepByStepSolution: [
            'Calculate Unit Contribution: $70 - $30 = $40 per board',
            'Break-Even Units = Fixed Costs / Unit Contribution = $12,000 / $40 = 300 boards',
            'Margin of Safety = Expected Sales - Break-Even Sales = 400 - 300 = 100 boards'
          ],
          finalAnswer: 'Break-Even = 300 boards; Margin of Safety = 100 boards'
        },
        quickChallenge: {
          question: 'If a company cuts its factory rent by 20%, what happens to its break-even point?',
          options: ['Break-even output decreases (fewer units needed)', 'Break-even output increases', 'No change to break-even', 'Variable cost per unit increases'],
          correctIndex: 0,
          explanation: 'Reducing fixed overhead means fewer units of contribution are required to recover fixed expenses, lowering the break-even threshold.'
        },
        examPractice: [
          {
            id: 'bus_q1',
            questionText: 'Which formula correctly gives the Margin of Safety?',
            type: 'multiple_choice',
            options: [
              'Actual or Budgeted Sales minus Break-Even Output',
              'Total Revenue minus Fixed Costs',
              'Selling Price minus Variable Cost per unit',
              'Fixed Costs divided by Unit Contribution'
            ],
            correctAnswer: 'Actual or Budgeted Sales minus Break-Even Output',
            marks: 2,
            feedback: 'Margin of Safety represents the cushion by which sales can decline before the business begins incurring financial losses.'
          }
        ]
      }
    ]
  },
  {
    id: 'acc_ch1',
    subjectId: 'accounting',
    number: 1,
    title: 'The Accounting Equation & Double Entry',
    description: 'Assets, liabilities, equity, ledger entries, trial balance, and the golden rules of debits and credits.',
    subtopics: [
      {
        id: 'acc_1_1',
        chapterId: 'acc_ch1',
        title: 'The Fundamental Accounting Equation: Assets = Liabilities + Equity',
        academicConcept: 'Every financial transaction has a dual effect maintaining equilibrium: Assets = Liabilities + Capital (Owner Equity).',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_acc_ledger',
          title: 'Balance Scale Ledger Challenge',
          type: 'balance_puzzle',
          scenarioDescription: 'A start-up coffee shop takes out a bank loan, purchases an espresso machine, and sells lattes for cash. Balance the scale by allocating debits and credits.',
          instructions: 'Drag transaction cards (e.g. +$10k Cash, +$10k Bank Loan) into Assets, Liabilities, or Equity buckets to keep the scale balanced.',
          interactiveType: 'acc_balance_scale',
          initialConfig: { initialCapital: 15000 }
        },
        whatHappenedExplanation: 'When the business takes a bank loan of $10,000, Assets (Cash) increase by $10,000 and Liabilities (Bank Loan) increase by $10,000. The equation stays perfectly balanced: $10,000 = $10,000 + $0.',
        interactiveDemonstration: {
          title: 'Interactive T-Account Simulator',
          description: 'Test debit and credit entries for cash, inventory, capital, and loans.',
          controlsDescription: 'Enter business transactions and watch T-accounts auto-balance.'
        },
        workedExample: {
          problem: 'State the dual effect on the accounting equation when a business purchases inventory worth $4,000 on credit from supplier Alpha.',
          stepByStepSolution: [
            'Inventory is an economic resource owned: Assets increase by $4,000 (Inventory).',
            'Purchased on credit means an outstanding obligation exists: Liabilities increase by $4,000 (Accounts Payable / Trade Payables).',
            'Check: ΔAssets (+$4,000) = ΔLiabilities (+$4,000) + ΔEquity ($0). The equation holds.'
          ],
          finalAnswer: 'Assets (Inventory) increase by $4,000; Liabilities (Trade Payables) increase by $4,000.'
        },
        quickChallenge: {
          question: 'If total assets are $85,000 and liabilities are $35,000, what is owner equity?',
          options: ['$50,000', '$120,000', '$35,000', '$25,000'],
          correctIndex: 0,
          explanation: 'Assets = Liabilities + Equity => Equity = Assets - Liabilities = $85,000 - $35,000 = $50,000.'
        },
        examPractice: [
          {
            id: 'acc_q1',
            questionText: 'When a customer pays $1,200 cash to settle an existing invoice previously recorded as an account receivable, what is the net impact on Total Assets?',
            type: 'multiple_choice',
            options: ['No net change ($0)', 'Increases by $1,200', 'Decreases by $1,200', 'Equity increases by $1,200'],
            correctAnswer: 'No net change ($0)',
            marks: 2,
            feedback: 'Cash (Asset) increases by $1,200, and Accounts Receivable (Asset) decreases by $1,200. Total assets remain unchanged.'
          }
        ]
      }
    ]
  }
];

export const englishChapters: Chapter[] = [
  {
    id: 'eng_ch1',
    subjectId: 'english',
    number: 1,
    title: 'Rhetoric & Persuasive Writing',
    description: 'Ethos, pathos, logos, rhetorical devices (AFOREST), speech composition, and audience impact.',
    subtopics: [
      {
        id: 'eng_1_1',
        chapterId: 'eng_ch1',
        title: 'Rhetorical Appeals & The Art of Persuasion',
        academicConcept: 'Persuasive communication relies on Aristotle\'s classical triad: Ethos (authority & credibility), Pathos (emotional resonance), and Logos (logic, evidence & reasoning).',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_eng_speech',
          title: 'Council Speech Rhetoric Architect',
          type: 'speech_builder',
          scenarioDescription: 'Convince the town council to fund a youth technology hub. Balance your speech meter between Credibility (Ethos), Emotion (Pathos), and Hard Data (Logos) to win unanimous votes.',
          instructions: 'Select rhetorical phrases to add to your draft and observe real-time council vote meters shift toward approval.',
          interactiveType: 'eng_rhetoric_scale',
          initialConfig: { targetApproval: 75 }
        },
        whatHappenedExplanation: 'An effective persuasive argument harmonizes all three appeals: Logos proves the practical return on investment, Pathos sparks empathy for underserved youth, and Ethos establishes your track record and ethical standing.',
        interactiveDemonstration: {
          title: 'AFOREST Rhetorical Device Analyzer',
          description: 'Examine Alliteration, Facts, Opinions, Rhetorical Questions, Emotive Language, Statistics, and Rule of Three in world-famous speeches.',
          controlsDescription: 'Toggle device filters to highlight rhetorical strategies in speech excerpts.'
        },
        workedExample: {
          problem: 'Identify which rhetorical appeal is predominantly used in this sentence: "According to a 2024 Harvard longitudinal study, teenagers who code before age 16 show a 42% higher problem-solving aptitude in tertiary education."',
          stepByStepSolution: [
            'Analyze components: "Harvard longitudinal study" cites verified institutional research.',
            '"42% higher" provides precise numerical empirical evidence.',
            'The argument appeals to verifiable rational facts rather than evoking fear or sympathy.',
            'Conclusion: This is a classic demonstration of Logos (logical reasoning backed by statistics).'
          ],
          finalAnswer: 'Logos (Logic and statistical evidence)'
        },
        quickChallenge: {
          question: 'Which appeal relies on the speaker establishing their moral character and personal credibility?',
          options: ['Ethos', 'Pathos', 'Logos', 'Kairos'],
          correctIndex: 0,
          explanation: 'Ethos is the appeal to character, authority, and trustworthiness of the speaker.'
        },
        examPractice: [
          {
            id: 'eng_q1',
            questionText: 'Which technique is exemplified by the phrase: "We cannot walk alone. And as we walk, we must make the pledge that we shall always march ahead"?',
            type: 'multiple_choice',
            options: [
              'Anaphora and inclusive collective pronouns ("We")',
              'Statistical hyperbole',
              'Onomatopoeia',
              'Oxymoron'
            ],
            correctAnswer: 'Anaphora and inclusive collective pronouns ("We")',
            marks: 3,
            feedback: 'The repetition of initial structures ("as we walk... we must make") along with unifying first-person plural pronouns creates communal solidarity and momentum.'
          }
        ]
      }
    ]
  }
];

export const generalScienceChapters: Chapter[] = [
  {
    id: 'gs_ch1',
    subjectId: 'general_science',
    number: 1,
    title: 'Forces, Machines & Motion',
    description: 'Newton\'s laws, simple machines, gravity, friction, and everyday mechanical advantages.',
    subtopics: [
      {
        id: 'gs_1_1',
        chapterId: 'gs_ch1',
        title: 'Simple Machines: Levers & Mechanical Advantage',
        academicConcept: 'Levers amplify force using a pivot (fulcrum). Mechanical advantage = Load Force / Effort Force = Effort Arm / Load Arm.',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_gs_lever',
          title: 'Treasure Boulder Lever Challenge',
          type: 'lever_puzzle',
          scenarioDescription: 'A heavy 600kg stone boulder is blocking the cave entrance. Position the fulcrum and adjust your crowbar leverage to hoist the boulder with your own weight.',
          instructions: 'Slide the fulcrum closer to the boulder to multiply your pushing force and lift the stone.',
          interactiveType: 'gs_lever_challenge',
          initialConfig: { boulderMass: 600, yourEffort: 60 }
        },
        whatHappenedExplanation: 'The Principle of Moments states: Clockwise Moment = Counter-Clockwise Moment at balance (Force × Distance). By moving the pivot 10× closer to the boulder, your 60kg weight creates the torque needed to easily lift a 600kg stone.',
        interactiveDemonstration: {
          title: 'Interactive Seesaw & Fulcrum Workbench',
          description: 'Balance different weights at varying distances from the center pivot.',
          controlsDescription: 'Drag weights (1kg, 5kg, 10kg) onto distance notches along the lever beam.'
        },
        workedExample: {
          problem: 'A load of 500 N is situated 0.4 m from a fulcrum. How much effort force must be applied at a distance of 2.0 m from the fulcrum to achieve equilibrium?',
          stepByStepSolution: [
            'Identify Principle of Moments: Load × Load Distance = Effort × Effort Distance',
            'Calculate Load Moment: 500 N × 0.4 m = 200 N·m',
            'Set up equation: Effort × 2.0 m = 200 N·m',
            'Solve for Effort: Effort = 200 / 2.0 = 100 N'
          ],
          finalAnswer: 'Effort Force = 100 N (Mechanical Advantage = 5)'
        },
        quickChallenge: {
          question: 'What happens to the effort required to lift a load as you move the fulcrum closer to the load?',
          options: ['Effort decreases (it becomes easier)', 'Effort increases (it becomes harder)', 'Effort remains unchanged', 'The load gets heavier'],
          correctIndex: 0,
          explanation: 'Moving the fulcrum closer to the load increases the ratio of Effort Arm to Load Arm, increasing mechanical advantage and decreasing required effort.'
        },
        examPractice: [
          {
            id: 'gs_q1',
            questionText: 'A wheelbarrow is an example of which class of lever?',
            type: 'multiple_choice',
            options: [
              'Class 2 lever (Load is between Fulcrum and Effort)',
              'Class 1 lever (Fulcrum is in the middle)',
              'Class 3 lever (Effort is in the middle)',
              'Hydraulic lever'
            ],
            correctAnswer: 'Class 2 lever (Load is between Fulcrum and Effort)',
            marks: 2,
            feedback: 'In a wheelbarrow, the wheel axle is the fulcrum at the front, the heavy load is in the center tray, and the upward effort is applied at the handles.'
          }
        ]
      },
      {
        id: 'gs_1_2',
        chapterId: 'gs_ch1',
        title: 'Ecosystems & Energy Food Webs',
        academicConcept: 'Energy enters ecosystems via solar radiation captured by primary producers (plants) and cascades through trophic levels with ~90% heat loss at each tier.',
        estimatedMinutes: 3,
        experience: {
          id: 'exp_gs_foodweb',
          title: 'Forest Ecosystem Web Balance',
          type: 'ecosystem_balancer',
          scenarioDescription: 'Manage a woodland reserve with grass, rabbits, snakes, and hawks. Maintain stable population harmony through environmental shifts.',
          instructions: 'Adjust predator-prey populations and weather conditions to keep the food web resilient without causing trophic collapse.',
          interactiveType: 'gs_food_web',
          initialConfig: { grass: 1000, rabbits: 120, snakes: 30, hawks: 6 }
        },
        whatHappenedExplanation: 'Removing top predators (hawks) caused snake numbers to surge, which decimated the rabbit population. With no primary consumers eating the grass, ecological equilibrium collapsed. Every organism in a trophic network impacts the whole.',
        interactiveDemonstration: {
          title: 'Energy Pyramid Simulator',
          description: 'Observe the 10% energy transfer rule from solar photons through primary producers, herbivores, and carnivores.',
          controlsDescription: 'Adjust producer biomass to view available kilojoules across trophic tiers.'
        },
        workedExample: {
          problem: 'If 40,000 kJ of solar energy is converted into biomass by clover plants, approximately how much energy is transferred to the owl that eats a rabbit which fed on the clover?',
          stepByStepSolution: [
            'Producers (Clover): 40,000 kJ',
            'Primary Consumers (Rabbit): ~10% of 40,000 kJ = 4,000 kJ',
            'Secondary Consumers (Owl): ~10% of 4,000 kJ = 400 kJ'
          ],
          finalAnswer: 'Approximately 400 kJ reach the tertiary consumer'
        },
        quickChallenge: {
          question: 'What is the primary ultimate energy source for nearly all Earth ecosystems?',
          options: ['Sunlight', 'Geothermal heat', 'Ocean currents', 'Soil nutrients'],
          correctIndex: 0,
          explanation: 'Solar energy captured by autotrophs through photosynthesis powers almost all biological food webs.'
        },
        examPractice: [
          {
            id: 'gs_q2',
            questionText: 'Why are food chains in nature rarely longer than 4 or 5 trophic levels?',
            type: 'multiple_choice',
            options: [
              'Approximately 90% of energy is lost as heat and metabolic respiration at each level, leaving insufficient energy to sustain higher tiers',
              'Apex predators refuse to eat other carnivores',
              'Solar radiation runs out every night',
              'Organisms at the top grow too large to move'
            ],
            correctAnswer: 'Approximately 90% of energy is lost as heat and metabolic respiration at each level, leaving insufficient energy to sustain higher tiers',
            marks: 3,
            feedback: 'Because roughly 90% of energy is dissipated through respiration, heat loss, and unconsumed waste at each trophic transfer, there is insufficient energy to support viable populations beyond 4-5 steps.'
          }
        ]
      }
    ]
  }
];
