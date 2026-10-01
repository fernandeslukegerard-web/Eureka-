import { Chapter } from '../../types';

export const biologyPart3Chapters: Chapter[] = [
  {
    id: 'bio_ch15',
    subjectId: 'biology',
    number: 15,
    title: 'Drugs',
    description: 'Medicinal drugs, antibiotic resistance, and physiological impacts of alcohol and tobacco.',
    subtopics: [
      {
        id: 'biology_15',
        chapterId: 'bio_ch15',
        subjectId: 'biology',
        code: '15',
        title: 'Drugs and Antibiotic Resistance',
        description: 'Antibiotics, superbug resistance evolution (MRSA), and effects of alcohol on the nervous system.',
        durationMinutes: 12,
        experience: {
          type: 'decision_lab',
          title: 'Pharmacology Decision & Resistance Lab',
          scenario: 'A clinical pharmacology decision-making unit evaluates antibiotic treatments for hospital patients.',
          prompt: 'Prescribe treatments in fictional scenarios: identify why antibiotics do not cure viral colds, observe how failing to finish a course of antibiotics allows resistant mutant bacteria to survive and multiply into superbugs (MRSA), and test alcohol depressant effects on reaction times.',
          goal: 'Prevent the emergence of antibiotic resistance in a bacterial colony by maintaining full therapeutic dosage.'
        },
        lesson: {
          whatHappened: 'Stopping the antibiotic early left the hardiest mutant bacteria alive to multiply. The resulting colony was completely resistant to the antibiotic. Alcohol slowed down neurotransmission at synapses, increasing reaction times.',
          academicConcept: 'Drug: Any substance taken into the body that modifies or affects chemical reactions in the body. Medicinal drugs (antibiotics) kill bacteria or inhibit their growth (e.g. penicillin disrupts bacterial cell wall synthesis). Antibiotics DO NOT kill viruses. Antibiotic resistance: Overuse and incomplete courses allow rare resistant mutants to survive through natural selection (MRSA). Depressants (e.g. alcohol): Slow down the central nervous system, increase reaction time, impair judgment; long-term abuse damages liver (cirrhosis) and brain.',
          interactiveDiagram: {
            title: 'Evolution of Antibiotic Resistance in Bacteria',
            caption: 'Random mutation → Antibiotic applied → Non-resistant die, resistant survive → Multiply',
            keyPoints: [
              'Antibiotics kill bacteria, NOT viruses (colds, flu, measles, HIV cannot be treated with antibiotics).',
              'Finish the full course: Ensures all bacteria are eliminated, preventing resistant strains from emerging.',
              'Alcohol: Depressant that slows reflexes and increases reaction times, making driving hazardous.',
              'Liver damage: Cirrhosis caused by chronic alcohol oxidation producing toxic acetaldehyde.'
            ]
          },
          workedExample: {
            title: 'Explaining How Bacterial Resistance to Antibiotics Develops',
            problem: 'Explain how natural selection leads to the emergence of antibiotic-resistant bacteria like MRSA.',
            stepByStep: [
              { step: 'Mutation', detail: 'A random genetic mutation in one bacterium provides resistance to an antibiotic.' },
              { step: 'Selection Pressure', detail: 'When the antibiotic is administered, non-resistant bacteria are killed, but the resistant mutant survives.' },
              { step: 'Reproduction', detail: 'Free from competition for resources, the resistant bacterium reproduces rapidly, passing the resistance gene to offspring.' },
              { step: 'Outcome', detail: 'The entire bacterial population becomes resistant to that antibiotic.' }
            ],
            keyTakeaway: 'Antibiotic misuse acts as a powerful selective agent favoring resistant strains.'
          },
          quickChallenge: {
            prompt: 'Why should a doctor NEVER prescribe penicillin to treat a patient suffering from the common viral cold or flu?',
            options: ['Antibiotics only kill bacteria by disrupting bacterial structures; viruses lack cell walls and reproduce inside host cells', 'Penicillin makes viruses stronger', 'Cold viruses are allergic to penicillin', 'Penicillin is only for skin cuts'],
            correctIndex: 0,
            explanation: 'Viruses have no peptidoglycan cell walls, cell membranes, or independent ribosomes, making them completely immune to antibacterial drugs.'
          },
          summary: [
            'Drugs modify chemical reactions in the body; antibiotics kill bacteria only.',
            'Bacterial resistance develops through mutation and natural selection (MRSA).',
            'Alcohol is a depressant that increases reaction times and damages the liver.'
          ]
        },
        questions: [
          {
            id: 'b15_q1',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'What is a drug defined as in biology and pharmacology?',
            options: ['Any substance taken into the body that modifies or affects chemical reactions in the body', 'Only illegal substances', 'Any medicine bought from a hospital', 'Substances containing caffeine only'],
            correctAnswer: 'Any substance taken into the body that modifies or affects chemical reactions in the body',
            explanation: 'The biological definition includes both prescription medicines and recreational substances.'
          },
          {
            id: 'b15_q2',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'Why is it critical for a patient to complete the entire prescribed course of antibiotics even if they feel better?',
            options: ['To ensure all pathogenic bacteria are destroyed, preventing surviving mutants from developing resistance', 'To avoid wasting money', 'Because bacteria get lonely', 'To make the stomach acidic'],
            correctAnswer: 'To ensure all pathogenic bacteria are destroyed, preventing surviving mutants from developing resistance',
            explanation: 'Early cessation leaves the most tolerant bacteria to reproduce into resistant superbugs.'
          },
          {
            id: 'b15_q3',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'What classification of drug is alcohol, and how does it affect the central nervous system?',
            options: ['A depressant that slows down brain activity and increases reaction time', 'A stimulant that speeds up reflexes', 'A painkiller that cures infection', 'A hallucinogen only'],
            correctAnswer: 'A depressant that slows down brain activity and increases reaction time',
            explanation: 'Alcohol enhances GABA inhibitory neurotransmission, blunting motor responses and slowing reflexes.'
          },
          {
            id: 'b15_q4',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'What bacterial superbug has developed resistance to multiple common antibiotics in hospital environments?',
            options: ['MRSA (Methicillin-Resistant Staphylococcus aureus)', 'Influenza', 'HIV', 'Yeast'],
            correctAnswer: 'MRSA (Methicillin-Resistant Staphylococcus aureus)',
            explanation: 'MRSA is a notorious hospital-acquired pathogen resistant to penicillins and cephalosporins.'
          },
          {
            id: 'b15_q5',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'What organ in the human body suffers severe fibrotic scarring (cirrhosis) from chronic alcohol abuse?',
            options: ['The Liver', 'The Lungs', 'The Heart', 'The Kidneys'],
            correctAnswer: 'The Liver',
            explanation: 'The liver detoxifies alcohol; long-term cellular poisoning leads to fatty liver, hepatitis, and irreversible cirrhosis.'
          },
          {
            id: 'b15_q6',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'Why are antibiotics completely ineffective against infectious diseases like AIDS (caused by HIV)?',
            options: ['AIDS is caused by a virus, not a bacterium', 'HIV is a giant bacterium', 'Antibiotics are destroyed by stomach acid', 'HIV is immune to all chemicals'],
            correctAnswer: 'AIDS is caused by a virus, not a bacterium',
            explanation: 'Viruses require antiviral drugs targeting viral reverse transcriptase or integrase, not antibacterial antibiotics.'
          },
          {
            id: 'b15_q7',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'How does penicillin antibiotic kill susceptible growing bacteria?',
            options: ['It prevents bacteria from forming cross-links in their peptidoglycan cell walls, causing them to burst by osmotic lysis', 'It poisons their DNA', 'It freezes their cytoplasm', 'It blocks their flagella'],
            correctAnswer: 'It prevents bacteria from forming cross-links in their peptidoglycan cell walls, causing them to burst by osmotic lysis',
            explanation: 'Weakened cell walls cannot withstand internal turgor pressure, causing bacterial lysis.'
          },
          {
            id: 'b15_q8',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'What effect does excessive alcohol consumption have on self-control and risk perception?',
            options: ['Depresses frontal cortex inhibitions, impairing judgment and increasing risky behavior', 'Improves focus and driving ability', 'Enhances memory recall', 'Increases mathematical accuracy'],
            correctAnswer: 'Depresses frontal cortex inhibitions, impairing judgment and increasing risky behavior',
            explanation: 'Inhibition suppression leads to diminished self-restraint and impaired cognitive risk assessment.'
          },
          {
            id: 'b15_q9',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'What term describes the state where an individual requires increasing doses of a drug to achieve the same physiological effect?',
            options: ['Tolerance', 'Immunity', 'Addiction', 'Withdrawal'],
            correctAnswer: 'Tolerance',
            explanation: 'Metabolic or receptor down-regulation produces drug tolerance over repeated exposures.'
          },
          {
            id: 'b15_q10',
            subtopicId: 'biology_15',
            type: 'multiple_choice',
            question: 'Why should healthy farm animals NOT be routinely fed prophylactic low-dose antibiotics to promote growth?',
            options: ['It creates widespread environmental selection pressure generating resistant bacterial strains that transfer to humans', 'It makes meat taste bad', 'Animals become allergic to food', 'It turns cows green'],
            correctAnswer: 'It creates widespread environmental selection pressure generating resistant bacterial strains that transfer to humans',
            explanation: 'Agricultural overuse fuels the global crisis of multidrug-resistant zoonotic pathogens.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch16',
    subjectId: 'biology',
    number: 16,
    title: 'Reproduction',
    description: 'Asexual vs sexual reproduction, flower pollination, fertilisation, and human reproductive cycles.',
    subtopics: [
      {
        id: 'biology_16',
        chapterId: 'bio_ch16',
        subjectId: 'biology',
        code: '16',
        title: 'Reproduction and Life Cycles',
        description: 'Asexual vs sexual reproduction, insect vs wind pollination, human fertilization, and pregnancy.',
        durationMinutes: 14,
        experience: {
          type: 'life_cycle_journey',
          title: 'Reproductive Life Cycle Journey Lab',
          scenario: 'Follow the life cycle of a flowering plant and human reproductive biology.',
          prompt: 'Compare wind-pollinated grass flowers (feathery stigmas outside, light pollen) with insect-pollinated flowers (bright petals, sticky stigma). In the human cycle, trace ovulation, sperm meeting ovum in the fallopian tube, fertilisation into a zygote, and placental nutrient exchange.',
          goal: 'Guide a pollen tube to the plant ovule and trace human zygote implantation into the uterine lining.'
        },
        lesson: {
          whatHappened: 'Asexual reproduction produced genetically identical clones with zero variation. Sexual reproduction combined haploid gametes (sperm and ovum) to produce a genetically unique diploid zygote, creating genetic diversity.',
          academicConcept: 'Asexual reproduction: Single parent produces genetically identical offspring (clones) by mitosis (fast, no mate needed, but vulnerable to environmental changes). Sexual reproduction: Fusion of the nuclei of two haploid gametes to form a diploid zygote, producing genetically diverse offspring. Insect-pollinated flowers: Large bright petals, scent, nectar, sticky pollen, enclosed stigma/anthers. Wind-pollinated flowers: Small dull petals, no nectar, huge amounts of light smooth pollen, feathery stigmas hanging outside to catch airborne pollen. Human reproduction: Male gametes (sperm) produced in testes; female gametes (ova) produced in ovaries. Fertilisation occurs in the oviduct (fallopian tube). Zygote divides into embryo and implants into uterine endometrium. Placenta: Facilitates diffusion of oxygen and glucose from mother to foetus, and CO₂/urea from foetus to mother, without mixing blood supplies.',
          interactiveDiagram: {
            title: 'Flower Anatomy & Human Fertilisation',
            caption: 'Stamen (anther + filament); Carpel (stigma + style + ovary); Fertilisation in oviduct',
            keyPoints: [
              'Pollination: Transfer of pollen grains from anther to stigma.',
              'Fertilisation: Fusion of pollen nucleus with ovule nucleus to form seed.',
              'Human menstrual cycle: Regulated by FSH, LH, Estrogen, and Progesterone (ovulation on day 14).',
              'Placenta: Provides barrier against maternal blood pressure and maternal immune attack.'
            ]
          },
          workedExample: {
            title: 'Distinguishing Insect-Pollinated and Wind-Pollinated Flowers',
            problem: 'A mystery flower has feathery stigmas hanging outside the petals and produces vast clouds of tiny, smooth, dry pollen grains. Deduce its method of pollination.',
            stepByStep: [
              { step: 'Examine stigmas', detail: 'Feathery stigmas provide a large surface area to catch floating airborne pollen.' },
              { step: 'Examine pollen', detail: 'Smooth, light, dry pollen is adapted to be carried easily by air currents rather than sticking to insect bristles.' },
              { step: 'Deduction', detail: 'The flower is adapted for wind pollination (e.g. cereal grasses, maize).' }
            ],
            keyTakeaway: 'Feathery exposed stigmas and light smooth pollen are classic hallmarks of wind-pollinated species.'
          },
          quickChallenge: {
            prompt: 'Where in the human female reproductive tract does fertilisation of an ovum by a sperm normally occur?',
            options: ['Oviduct (Fallopian tube)', 'Uterus (womb)', 'Ovary', 'Vagina'],
            correctIndex: 0,
            explanation: 'Sperm swim through the cervix and uterus to meet and fertilize the released secondary oocyte in the upper oviduct.'
          },
          summary: [
            'Asexual reproduction produces clones; sexual reproduction produces genetic variation.',
            'Wind pollination features feathery hanging stigmas; insect pollination has bright petals and nectar.',
            'Fertilisation occurs in the oviduct; the placenta exchanges nutrients and waste.'
          ]
        },
        questions: [
          {
            id: 'b16_q1',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What is a major biological advantage of sexual reproduction over asexual reproduction?',
            options: ['It produces genetic variation in offspring, allowing populations to adapt to changing environments', 'It is much faster', 'Only one parent is needed', 'Offspring are exact clones'],
            correctAnswer: 'It produces genetic variation in offspring, allowing populations to adapt to changing environments',
            explanation: 'Genetic recombination creates diverse phenotypes capable of surviving novel diseases or climates.'
          },
          {
            id: 'b16_q2',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What is the male reproductive part of a flowering plant called?',
            options: ['Stamen (consisting of anther and filament)', 'Carpel (stigma, style, ovary)', 'Petal', 'Sepal'],
            correctAnswer: 'Stamen (consisting of anther and filament)',
            explanation: 'The stamen produces pollen grains in its terminal anther sacs.'
          },
          {
            id: 'b16_q3',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What structural feature is typical of wind-pollinated grass flowers?',
            options: ['Large feathery stigmas that hang outside the flower to capture airborne pollen', 'Bright red scented petals', 'Sweet nectar glands', 'Large heavy sticky pollen'],
            correctAnswer: 'Large feathery stigmas that hang outside the flower to capture airborne pollen',
            explanation: 'Feathery branched stigmas maximize the catchment area for drifting pollen grains.'
          },
          {
            id: 'b16_q4',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What is the function of the placenta during mammalian pregnancy?',
            options: ['Allows exchange of oxygen, glucose, antibodies, and wastes between maternal and foetal blood without direct mixing', 'Produces milk for the baby', 'Pumps blood for the mother', 'Contracts during birth'],
            correctAnswer: 'Allows exchange of oxygen, glucose, antibodies, and wastes between maternal and foetal blood without direct mixing',
            explanation: 'The placenta mediates counter-current diffusion while shielding delicate fetal capillaries from maternal blood pressure.'
          },
          {
            id: 'b16_q5',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What ovarian hormone maintains the thickened lining of the uterus (endometrium) during the second half of the menstrual cycle?',
            options: ['Progesterone', 'FSH (Follicle Stimulating Hormone)', 'LH (Luteinising Hormone)', 'Oxytocin'],
            correctAnswer: 'Progesterone',
            explanation: 'Progesterone secreted by the corpus luteum keeps the endometrium vascularized for potential implantation.'
          },
          {
            id: 'b16_q6',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What term defines the transfer of pollen grains from an anther to a stigma?',
            options: ['Pollination', 'Fertilisation', 'Germination', 'Translocation'],
            correctAnswer: 'Pollination',
            explanation: 'Pollination is the mechanical transfer of pollen; fertilisation is the subsequent nuclear fusion.'
          },
          {
            id: 'b16_q7',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What is an example of natural asexual reproduction in plants?',
            options: ['Runners in strawberry plants and tubers in potatoes', 'Seed production in sunflowers', 'Cross-pollination in roses', 'Fruit formation in apples'],
            correctAnswer: 'Runners in strawberry plants and tubers in potatoes',
            explanation: 'Runners and stem tubers grow new vegetative clones via mitotic division.'
          },
          {
            id: 'b16_q8',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What chromosome number (ploidy) do human gametes (sperm and egg cells) possess?',
            options: ['Haploid (23 chromosomes, n)', 'Diploid (46 chromosomes, 2n)', 'Triploid (69 chromosomes)', 'Zero chromosomes'],
            correctAnswer: 'Haploid (23 chromosomes, n)',
            explanation: 'Meiosis halves the diploid chromosome count so fertilization restores 46 chromosomes in the zygote.'
          },
          {
            id: 'b16_q9',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What surge of pituitary hormone directly triggers ovulation (release of an egg from the ovary) on approximately Day 14?',
            options: ['LH (Luteinising Hormone)', 'Progesterone', 'Insulin', 'Adrenaline'],
            correctAnswer: 'LH (Luteinising Hormone)',
            explanation: 'An acute mid-cycle LH peak stimulates the mature Graafian follicle to rupture and release the ovum.'
          },
          {
            id: 'b16_q10',
            subtopicId: 'biology_16',
            type: 'multiple_choice',
            question: 'What fluid-filled sac cushions and protects the developing human foetus against physical shocks during gestation?',
            options: ['Amniotic sac containing amniotic fluid', 'Umbilical cord', 'Cervix', 'Oviduct'],
            correctAnswer: 'Amniotic sac containing amniotic fluid',
            explanation: 'The amniotic fluid provides buoyancy and hydrodynamic shock protection.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch17',
    subjectId: 'biology',
    number: 17,
    title: 'Inheritance',
    description: 'Chromosomes, genes, alleles, monohybrid inheritance, Punnett squares, and codominance.',
    subtopics: [
      {
        id: 'biology_17',
        chapterId: 'bio_ch17',
        subjectId: 'biology',
        code: '17',
        title: 'Inheritance and Genetics',
        description: 'Genotype vs phenotype, dominant and recessive alleles, Punnett squares, and sex determination.',
        durationMinutes: 15,
        experience: {
          type: 'trait_detective',
          title: 'Trait Detective & Punnett Square Solver',
          scenario: 'A clinical genetics institute traces hereditary traits through family pedigrees and crosses.',
          prompt: 'Solve genetic mysteries using Punnett squares: cross heterozygous parents (Bb × Bb for brown/blue eyes) to predict 3:1 phenotypic ratios, test codominance in ABO blood groups (IA, IB, Io), and trace sex determination (XX female, XY male).',
          goal: 'Solve a 3-generation inheritance mystery determining the probability of a child inheriting cystic fibrosis.'
        },
        lesson: {
          whatHappened: 'Crossing two heterozygous brown-eyed parents (Bb) yielded a 1:2:1 genotypic ratio (BB, Bb, bb) and a 3:1 phenotypic ratio (3 brown : 1 blue). Recessive traits only appeared in homozygous recessive (bb) individuals.',
          academicConcept: 'Gene: Length of DNA that codes for a protein. Allele: An alternative form of a gene. Genotype: Genetic makeup of an organism in terms of alleles present (e.g. BB, Bb, bb). Phenotype: Observable physical features of an organism. Homozygous: Having two identical alleles of a gene (BB or bb). Heterozygous: Having two different alleles of a gene (Bb). Dominant allele: An allele that is expressed if it is present (B). Recessive allele: An allele that is only expressed when there is no dominant allele present (bb). Sex determination: Human females have two X chromosomes (XX); human males have one X and one Y chromosome (XY) (50% probability of male/female at conception). Monohybrid cross of two heterozygotes (Aa × Aa) yields 3:1 phenotypic ratio and 1:2:1 genotypic ratio.',
          interactiveDiagram: {
            title: 'Monohybrid Punnett Square Cross (Bb × Bb)',
            caption: 'Gametes B and b; Genotypes: 1 BB : 2 Bb : 1 bb; Phenotypes: 3 Dominant : 1 Recessive',
            keyPoints: [
              'Punnett Square: Grid used to calculate probabilities of offspring genotypes from parental gametes.',
              'Test cross: Crossing an individual of dominant phenotype with a homozygous recessive (aa) to determine if it is AA or Aa.',
              'Codominance: Both alleles are expressed equally in heterozygotes (e.g. ABO blood group IAIB is blood type AB).',
              'Sex-linked characteristics: Traits located on the X chromosome (e.g. red-green color blindness).'
            ]
          },
          workedExample: {
            title: 'Predicting Cystic Fibrosis Inheritance Risk',
            problem: 'Cystic fibrosis is caused by a recessive allele (f). Both parents are healthy carriers (heterozygous Ff). What is the probability that their child will have cystic fibrosis?',
            stepByStep: [
              { step: 'Parental genotypes', detail: 'Mother: Ff; Father: Ff' },
              { step: 'Gametes', detail: 'Each parent produces gametes with either F (50%) or f (50%)' },
              { step: 'Punnett square combinations', detail: 'FF (normal, 25%), Ff (carrier, 50%), ff (cystic fibrosis, 25%)' },
              { step: 'Probability', detail: 'Probability of cystic fibrosis (ff) = 1 in 4 = 25% (or 0.25)' }
            ],
            keyTakeaway: 'When both parents are heterozygous carriers of a recessive disease, each pregnancy carries a 25% risk of affected offspring.'
          },
          quickChallenge: {
            prompt: 'In a cross between a homozygous dominant black mouse (BB) and a homozygous recessive white mouse (bb), what percentage of the F1 generation will be black?',
            options: ['100% black (all Bb)', '75% black', '50% black', '25% black'],
            correctIndex: 0,
            explanation: 'All offspring receive dominant B from the black parent and recessive b from the white parent; having genotype Bb, 100% display the black dominant phenotype.'
          },
          summary: [
            'Genotype is allele composition; phenotype is observable feature.',
            'Dominant alleles mask recessive alleles in heterozygotes.',
            'Monohybrid heterozygous crosses yield a 3:1 phenotypic ratio.'
          ]
        },
        questions: [
          {
            id: 'b17_q1',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What term describes an individual possessing two different alleles for a specific gene (e.g. Tt)?',
            options: ['Heterozygous', 'Homozygous dominant', 'Homozygous recessive', 'Codominant'],
            correctAnswer: 'Heterozygous',
            explanation: 'Heterozygous indicates two non-identical alleles at a given locus (e.g. Bb or Tt).'
          },
          {
            id: 'b17_q2',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What is the expected phenotypic ratio resulting from a cross between two heterozygous tall pea plants (Tt × Tt)?',
            options: ['3 Tall : 1 Short', '1 Tall : 1 Short', '4 Tall : 0 Short', '1 Tall : 2 Medium : 1 Short'],
            correctAnswer: '3 Tall : 1 Short',
            explanation: 'Genotypes TT (1) and Tt (2) are tall; tt (1) is short, giving the classic 3:1 Mendelian ratio.'
          },
          {
            id: 'b17_q3',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What sex chromosomes determine a biological human male?',
            options: ['XY', 'XX', 'YY', 'XO'],
            correctAnswer: 'XY',
            explanation: 'Females inherit XX; males inherit one maternal X and one paternal Y chromosome.'
          },
          {
            id: 'b17_q4',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What is a test cross (back cross) used for in genetics?',
            options: ['Breeding an organism showing dominant phenotype with a homozygous recessive individual to determine if it is homozygous or heterozygous', 'Testing for mutations', 'Checking eye color', 'Curing genetic disease'],
            correctAnswer: 'Breeding an organism showing dominant phenotype with a homozygous recessive individual to determine if it is homozygous or heterozygous',
            explanation: 'If any recessive offspring appear, the dominant parent must have been heterozygous.'
          },
          {
            id: 'b17_q5',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'In the ABO blood group system, what blood type results from the genotype IAIB?',
            options: ['Type AB (demonstrating codominance where both antigens are expressed)', 'Type A', 'Type B', 'Type O'],
            correctAnswer: 'Type AB (demonstrating codominance where both antigens are expressed)',
            explanation: 'Alleles IA and IB are codominant, simultaneously producing both A and B surface glycoproteins.'
          },
          {
            id: 'b17_q6',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What is an allele?',
            options: ['An alternative version or form of a specific gene', 'A whole chromosome', 'A protein molecule', 'An amino acid'],
            correctAnswer: 'An alternative version or form of a specific gene',
            explanation: 'Alleles are nucleotide sequence variants of the same gene (e.g. eye color alleles).'
          },
          {
            id: 'b17_q7',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'Why are sex-linked recessive conditions (like red-green color blindness and haemophilia) much more common in human males than females?',
            options: ['Males have only one X chromosome (XY), so a single recessive allele on the X is expressed with no second X to mask it', 'Males have more hormones', 'Y chromosomes carry the disease', 'Females do not have X chromosomes'],
            correctAnswer: 'Males have only one X chromosome (XY), so a single recessive allele on the X is expressed with no second X to mask it',
            explanation: 'Hemizygous males express whatever allele sits on their solitary X chromosome.'
          },
          {
            id: 'b17_q8',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What is the genotype of a person with blood group O?',
            options: ['IoIo (homozygous recessive)', 'IAIo', 'IBIo', 'IAIB'],
            correctAnswer: 'IoIo (homozygous recessive)',
            explanation: 'Blood group O requires two copies of the null recessive allele Io.'
          },
          {
            id: 'b17_q9',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What is the definition of a gene?',
            options: ['A length of DNA that codes for a specific protein', 'A cell nucleus', 'An enzyme', 'A carbohydrate polymer'],
            correctAnswer: 'A length of DNA that codes for a specific protein',
            explanation: 'Genes are functional genomic units encoding polypeptide sequences.'
          },
          {
            id: 'b17_q10',
            subtopicId: 'biology_17',
            type: 'multiple_choice',
            question: 'What is the mathematical probability of any human pregnancy producing a female baby (XX)?',
            options: ['50% (1 in 2)', '25%', '75%', '100%'],
            correctAnswer: '50% (1 in 2)',
            explanation: 'Sperm carry X or Y in a 1:1 ratio, yielding 50% XX and 50% XY zygotes.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch18',
    subjectId: 'biology',
    number: 18,
    title: 'Variation and Selection',
    description: 'Continuous vs discontinuous variation, mutations, adaptive features, and natural selection.',
    subtopics: [
      {
        id: 'biology_18',
        chapterId: 'bio_ch18',
        subjectId: 'biology',
        code: '18',
        title: 'Variation, Adaptation and Natural Selection',
        description: 'Mutation sources, continuous vs discontinuous variation, Darwinian natural selection, and selective breeding.',
        durationMinutes: 14,
        experience: {
          type: 'survival_island',
          title: 'Survival Island Natural Selection Lab',
          scenario: 'A volcanic archipelago population of peppered moths and finches faces shifting environmental pressures.',
          prompt: 'Simulate natural selection: industrial soot covers tree bark from pale lichen to dark soot. Observe visual predation by birds: pale moths are camouflaged on lichen, but eaten rapidly on dark soot. Watch the dark melanic allele frequency rise from 5% to 95% over 10 generations.',
          goal: 'Demonstrate natural selection by shifting camouflage coloration in response to industrial tree bark changes.'
        },
        lesson: {
          whatHappened: 'When tree bark became dark from soot, pale moths were easily spotted and eaten by predatory birds. Dark melanic moths survived longer and reproduced, passing their advantageous dark alleles to offspring, shifting the population genetics.',
          academicConcept: 'Variation: Differences between individuals of the same species. (1) Continuous variation: Range of phenotypes between two extremes, quantitative, influenced by genes and environment (e.g. human height, weight; shows normal distribution bell curve). (2) Discontinuous variation: Distinct categorical phenotypes with no intermediates, qualitative, genetic only (e.g. ABO blood groups, tongue rolling; bar chart). Mutation: Genetic change forming new alleles (increased by ionizing radiation and chemical mutagens). Natural Selection (Darwin): (1) Overproduction of offspring, (2) Struggle for survival/competition, (3) Phenotypic variation within population, (4) Survival of the fittest (individuals with beneficial adaptive features are more likely to survive and reproduce), (5) Passing on advantageous alleles to the next generation over time (Evolution). Selective breeding (artificial selection): Humans breed plants/animals for desirable traits.',
          interactiveDiagram: {
            title: 'Darwinian Natural Selection in Peppered Moths',
            caption: 'Environmental shift → Differential survival & reproduction → Frequency of advantageous allele rises',
            keyPoints: [
              'Continuous variation: Polygenic, affected by environment, bell curve (e.g. height).',
              'Discontinuous variation: Monogenic, discrete categories, no environmental effect (e.g. blood group).',
              'Adaptive feature: Inherited functional feature that increases fitness and survival probability in environment.',
              'Selective breeding: Intentional artificial selection by humans (e.g. dairy cows with high milk yield).'
            ]
          },
          workedExample: {
            title: 'Distinguishing Natural Selection from Artificial Selection (Selective Breeding)',
            problem: 'Compare natural selection and selective breeding in terms of the selective agent, traits favored, and speed.',
            stepByStep: [
              { step: 'Selective agent', detail: 'Natural selection: Environmental pressures (predators, climate, disease). Selective breeding: Humans.' },
              { step: 'Traits favored', detail: 'Natural selection: Traits enhancing survival and reproductive fitness in nature. Selective breeding: Traits useful or attractive to humans (e.g. high wheat yield, docile temperament).' },
              { step: 'Timescale', detail: 'Natural selection occurs over thousands/millions of years; selective breeding achieves changes across a few generations.' }
            ],
            keyTakeaway: 'In selective breeding, humans choose which individuals reproduce based on human desires rather than survival fitness.'
          },
          quickChallenge: {
            prompt: 'Which of the following is an example of discontinuous variation in humans?',
            options: ['ABO blood group system', 'Height', 'Body mass', 'Skin shade'],
            correctIndex: 0,
            explanation: 'Blood groups fall into four discrete categories (A, B, AB, O) with zero intermediate phenotypes, unaffected by environmental diet.'
          },
          summary: [
            'Continuous variation shows a spectrum (height); discontinuous shows categories (blood group).',
            'Natural selection favors individuals with advantageous alleles.',
            'Selective breeding is human-guided selection for desirable agricultural traits.'
          ]
        },
        questions: [
          {
            id: 'b18_q1',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What type of variation is represented by human height, exhibiting a smooth bell-shaped curve of distribution?',
            options: ['Continuous variation', 'Discontinuous variation', 'Mutational variation', 'Environmental only'],
            correctAnswer: 'Continuous variation',
            explanation: 'Continuous variation is polygenic and quantitative, displaying a continuum between extremes.'
          },
          {
            id: 'b18_q2',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What is a mutation in biological terms?',
            options: ['A spontaneous or induced change in a gene or chromosome', 'An infection by a virus', 'A muscle cramp', 'A broken bone'],
            correctAnswer: 'A spontaneous or induced change in a gene or chromosome',
            explanation: 'Mutations alter DNA nucleotide base sequences, generating novel alleles.'
          },
          {
            id: 'b18_q3',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What environmental factor increases the rate of cellular genetic mutations?',
            options: ['Ionizing radiation (X-rays, gamma rays, UV rays) and chemical mutagens (benzene, mustard gas)', 'Drinking water', 'Cold temperatures', 'Exercising'],
            correctAnswer: 'Ionizing radiation (X-rays, gamma rays, UV rays) and chemical mutagens (benzene, mustard gas)',
            explanation: 'High-energy radiation and chemical carcinogens break DNA strands and damage nucleotide bases.'
          },
          {
            id: 'b18_q4',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What is an adaptive feature of xerophytes (desert plants like cacti) to reduce water loss?',
            options: ['Leaves reduced to spines, thick waxy cuticle, and sunken stomata in hairy pits', 'Broad giant flat leaves', 'Thin skin and open stomata', 'No roots'],
            correctAnswer: 'Leaves reduced to spines, thick waxy cuticle, and sunken stomata in hairy pits',
            explanation: 'Spines minimize surface area; sunken stomata trap humid air to reduce transpiration.'
          },
          {
            id: 'b18_q5',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'How does natural selection drive the evolution of a species over time?',
            options: ['Individuals with advantageous adaptive alleles survive and reproduce more successfully, passing these alleles to future generations', 'Animals decide to change their DNA', 'Organisms stretch their limbs', 'Every individual has equal survival'],
            correctAnswer: 'Individuals with advantageous adaptive alleles survive and reproduce more successfully, passing these alleles to future generations',
            explanation: 'Differential reproductive success shifts population allele frequencies across generations.'
          },
          {
            id: 'b18_q6',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What is an example of selective breeding (artificial selection)?',
            options: ['Farmers crossing cows with high milk yields to produce herds of superior dairy cattle', 'Finches evolving different beaks on the Galapagos', 'Moths turning black due to industrial soot', 'Bacteria becoming resistant in nature'],
            correctAnswer: 'Farmers crossing cows with high milk yields to produce herds of superior dairy cattle',
            explanation: 'Humans selectively breed parent animals displaying commercial traits over multiple generations.'
          },
          {
            id: 'b18_q7',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'Why did the frequency of the dark melanic peppered moth increase dramatically in industrial England in the 19th century?',
            options: ['Air pollution blackened tree trunks with soot, giving dark moths better camouflage against bird predators', 'Soot mutated the moths directly into black moths', 'Dark moths were faster fliers', 'Pale moths froze in winter'],
            correctAnswer: 'Air pollution blackened tree trunks with soot, giving dark moths better camouflage against bird predators',
            explanation: 'Differential visual predation favoured melanic camouflage on soot-darkened trees.'
          },
          {
            id: 'b18_q8',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What is an adaptive feature of hydrophytes (plants living submerged in water like water lilies)?',
            options: ['Stomata located exclusively on the upper surface of floating leaves and large air spaces (aerenchyma) for buoyancy', 'Deep taproots searching for water', 'Spines instead of leaves', 'Thick bark'],
            correctAnswer: 'Stomata located exclusively on the upper surface of floating leaves and large air spaces (aerenchyma) for buoyancy',
            explanation: 'Upper stomata access air while internal air lacunae keep leaves buoyant.'
          },
          {
            id: 'b18_q9',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'What is the term for a disease where a single base substitution in the hemoglobin gene causes red blood cells to deform into sickles?',
            options: ['Sickle-cell anaemia', 'Scurvy', 'Rickets', 'Haemophilia'],
            correctAnswer: 'Sickle-cell anaemia',
            explanation: 'Sickle hemoglobin (HbS) crystallizes in low oxygen, distorting cells into rigid crescent sickles.'
          },
          {
            id: 'b18_q10',
            subtopicId: 'biology_18',
            type: 'multiple_choice',
            question: 'Why is the sickle-cell anaemia carrier allele (heterozygous HbA HbS) maintained at high frequency in malaria-endemic regions?',
            options: ['Heterozygous individuals have increased resistance to fatal malaria (heterozygote advantage)', 'Malaria causes the mutation directly', 'Sickle cells cure headaches', 'Mosquitoes prefer normal blood'],
            correctAnswer: 'Heterozygous individuals have increased resistance to fatal malaria (heterozygote advantage)',
            explanation: 'Plasmodium parasites cannot reproduce effectively in red cells of sickle-cell carriers.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch19',
    subjectId: 'biology',
    number: 19,
    title: 'Organisms and their Environment',
    description: 'Ecology, food chains, food webs, trophic levels, energy pyramids, and carbon/nitrogen cycles.',
    subtopics: [
      {
        id: 'biology_19',
        chapterId: 'bio_ch19',
        subjectId: 'biology',
        code: '19',
        title: 'Organisms and their Environment',
        description: 'Food webs, 10% trophic energy transfer, pyramids of biomass, and carbon/nitrogen cycles.',
        durationMinutes: 14,
        experience: {
          type: 'ecosystem_builder',
          title: 'Virtual Ecosystem Food Web Builder',
          scenario: 'A wildlife conservation sanctuary balances trophic populations and energy flow.',
          prompt: 'Construct a balanced ecosystem: link Primary Producers (grass converting sunlight), Primary Consumers (herbivore zebras), Secondary Consumers (cheetahs), and Tertiary Consumers (lions). Track the 10% energy pyramid law and test the impact of removing an apex predator.',
          goal: 'Construct a stable 4-tier trophic food web with sustainable biomass and energy efficiency.'
        },
        lesson: {
          whatHappened: 'Only about 10% of energy was transferred from one trophic level to the next, with 90% lost as heat, metabolic respiration, undigested waste (feces), and uneaten tissue. Removing top predators caused herbivore overpopulation and severe producer overgrazing.',
          academicConcept: 'Sun is the principal source of energy for biological systems. Photosynthesis captures light energy and stores it as chemical energy. Food chain: Flow of energy from producer to primary consumer to secondary consumer to tertiary consumer. Trophic level: Position of an organism in a food chain. Energy loss: Only ~10% of energy is incorporated into new biomass at each level; 90% is lost via (1) respiration/heat, (2) excretion/egestion (feces), (3) uneaten parts. Pyramids of numbers, biomass, and energy. Carbon Cycle: Photosynthesis removes CO₂; Respiration, combustion, and decomposition return CO₂. Nitrogen Cycle: Nitrogen-fixing bacteria (convert N₂ to ammonia), Nitrifying bacteria (ammonia → nitrites → nitrates), Denitrifying bacteria (nitrates → N₂ gas in waterlogged soil).',
          interactiveDiagram: {
            title: 'Trophic Energy Pyramid & The Carbon Cycle',
            caption: 'Producers (10,000 kJ) → Primary (1,000 kJ) → Secondary (100 kJ) → Apex (10 kJ); Carbon flux',
            keyPoints: [
              'Energy decreases at each trophic level (pyramids of energy are ALWAYS upright).',
              'Food chains rarely exceed 4 or 5 trophic levels due to progressive energy depletion.',
              'Decomposers (bacteria and fungi): Secrete enzymes to break down organic dead matter and recycle nutrients.',
              'Carbon cycle: Photosynthesis is the ONLY biological process that removes carbon dioxide from the atmosphere.'
            ]
          },
          workedExample: {
            title: 'Calculating Trophic Energy Transfer Efficiency',
            problem: 'Clover plants absorb 50,000 kJ of solar energy. Rabbits eat the clover and incorporate 5,000 kJ into their bodies. Foxes eat the rabbits and incorporate 450 kJ. Calculate percentage efficiency of energy transfer from clover to rabbits.',
            stepByStep: [
              { step: 'Formula', detail: 'Efficiency = (Energy incorporated into consumer / Energy in food consumed) × 100%' },
              { step: 'Calculation', detail: 'Efficiency = (5,000 kJ / 50,000 kJ) × 100% = 10%', math: '\\text{Efficiency} = \\frac{5000}{50,000} \\times 100\\% = 10\\%' }
            ],
            keyTakeaway: 'Trophic transfer efficiency is approximately 10%; 90% is dissipated as metabolic heat and waste.'
          },
          quickChallenge: {
            prompt: 'Why are food chains in nature rarely longer than 4 or 5 trophic levels?',
            options: ['So much energy (~90%) is lost at each trophic level that insufficient energy remains to support a viable apex predator population', 'Top carnivores choose not to eat more', 'Sunlight runs out', 'Predators are too large to fit'],
            correctIndex: 0,
            explanation: 'With roughly 90% thermodynamic energy dissipation at each step, after 4 trophic transfers less than 0.01% of original producer energy remains.'
          },
          summary: [
            'Producers convert solar energy into chemical biomass.',
            'Only ~10% of energy transfers between successive trophic levels.',
            'The carbon cycle balances photosynthesis, respiration, and combustion.'
          ]
        },
        questions: [
          {
            id: 'b19_q1',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What is the principal source of energy input for virtually all biological ecosystems on Earth?',
            options: ['Light radiation from the Sun', 'Geothermal heat from Earth\'s core', 'Atmospheric oxygen', 'Chemical fertilisers'],
            correctAnswer: 'Light radiation from the Sun',
            explanation: 'Autotrophic photosynthesis captures solar radiant energy to power ecological food webs.'
          },
          {
            id: 'b19_q2',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'Approximately what percentage of energy is transferred from one trophic level to the next in a food chain?',
            options: ['Approximately 10%', '50%', '90%', '100%'],
            correctAnswer: 'Approximately 10%',
            explanation: 'About 90% is dissipated as metabolic respiration heat, movement, feces, and uneaten biomass.'
          },
          {
            id: 'b19_q3',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What biological process is the ONLY mechanism in the carbon cycle that REMOVES carbon dioxide from the atmosphere?',
            options: ['Photosynthesis by green plants and phytoplankton', 'Respiration by animals', 'Decomposition by fungi', 'Combustion of coal'],
            correctAnswer: 'Photosynthesis by green plants and phytoplankton',
            explanation: 'Photosynthetic fixation locks atmospheric CO₂ into organic glucose and cellulose biomass.'
          },
          {
            id: 'b19_q4',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What is a primary consumer in an ecological food chain?',
            options: ['An herbivore that feeds directly on primary producers (plants)', 'A top carnivore', 'A decomposer fungus', 'A green plant'],
            correctAnswer: 'An herbivore that feeds directly on primary producers (plants)',
            explanation: 'Primary consumers occupy trophic level 2, feeding on autotrophic producers.'
          },
          {
            id: 'b19_q5',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What role do denitrifying bacteria play in the nitrogen cycle in waterlogged soils?',
            options: ['Convert soil nitrates back into nitrogen gas (N₂), reducing soil fertility', 'Fix atmospheric nitrogen into nitrates', 'Convert urea into ammonia', 'Decompose dead leaves'],
            correctAnswer: 'Convert soil nitrates back into nitrogen gas (N₂), reducing soil fertility',
            explanation: 'In anaerobic waterlogged soils, denitrifying bacteria reduce nitrates into atmospheric N₂.'
          },
          {
            id: 'b19_q6',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'Why can a pyramid of numbers sometimes be inverted (e.g. narrow base), while a pyramid of energy is ALWAYS upright?',
            options: ['One single giant oak tree (producer) can support thousands of small insect primary consumers', 'Energy can be created from nothing', 'Animals are bigger than plants', 'Numbers are counted wrongly'],
            correctAnswer: 'One single giant oak tree (producer) can support thousands of small insect primary consumers',
            explanation: 'A single massive producer can sustain numerous smaller herbivores, though its energy content is vast.'
          },
          {
            id: 'b19_q7',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'Where do nitrogen-fixing bacteria live mutualistically in leguminous plants (peas, beans, clover)?',
            options: ['In root nodules', 'In flower petals', 'In leaf stomata', 'In xylem vessels'],
            correctAnswer: 'In root nodules',
            explanation: 'Rhizobium bacteria in legume root nodules fix N₂ into amino acids in exchange for plant carbohydrates.'
          },
          {
            id: 'b19_q8',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What is an ecological community?',
            options: ['All the populations of different species living and interacting in a shared ecosystem at the same time', 'All the individuals of one species only', 'The non-living abiotic factors', 'A single family of animals'],
            correctAnswer: 'All the populations of different species living and interacting in a shared ecosystem at the same time',
            explanation: 'A community consists of all biotic populations interacting within a habitat.'
          },
          {
            id: 'b19_q9',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What is bioaccumulation of non-biodegradable toxic substances (like DDT or heavy metals) in a food chain?',
            options: ['Toxin concentration increases progressively at each higher trophic level, reaching lethal levels in apex predators', 'Toxins disappear after one week', 'Plants destroy the poison', 'Herbivores store all toxins in grass'],
            correctAnswer: 'Toxin concentration increases progressively at each higher trophic level, reaching lethal levels in apex predators',
            explanation: 'Lipid-soluble persistent toxins biomagnify because top predators consume thousands of contaminated prey.'
          },
          {
            id: 'b19_q10',
            subtopicId: 'biology_19',
            type: 'multiple_choice',
            question: 'What is the role of nitrifying bacteria in the nitrogen cycle?',
            options: ['Oxidize ammonia into nitrites and then into soluble nitrates that plants can absorb through roots', 'Turn nitrates into nitrogen gas', 'Kill root hairs', 'Digest plant proteins in stomach'],
            correctAnswer: 'Oxidize ammonia into nitrites and then into soluble nitrates that plants can absorb through roots',
            explanation: 'Nitrifying bacteria (Nitrosomonas and Nitrobacter) convert ammonia into absorbable nitrate ions.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch20',
    subjectId: 'biology',
    number: 20,
    title: 'Human Influences on Ecosystems',
    description: 'Deforestation, pollution, eutrophication, greenhouse effect, and conservation of biodiversity.',
    subtopics: [
      {
        id: 'biology_20',
        chapterId: 'bio_ch20',
        subjectId: 'biology',
        code: '20',
        title: 'Human Influences on Ecosystems',
        description: 'Deforestation impacts, aquatic eutrophication, plastic pollution, and biodiversity conservation.',
        durationMinutes: 14,
        experience: {
          type: 'eco_city',
          title: 'Eco-City Environmental Sustainability Simulator',
          scenario: 'You are the Chief Environmental Urban Planner managing a coastal metropolitan ecosystem.',
          prompt: 'Balance urban policy decisions: mitigate industrial deforestation, curb agricultural fertilizer runoff to prevent lake eutrophication, invest in solar/wind renewable grids, and protect marine biodiversity reserves.',
          goal: 'Reduce city net carbon emissions by 60% and eliminate river eutrophication fish die-offs.'
        },
        lesson: {
          whatHappened: 'Fertiliser runoff caused rapid algal blooms that blocked sunlight, killing submerged plants. Decomposing bacteria multiplied and consumed all dissolved oxygen, suffocating aquatic fish populations (eutrophication).',
          academicConcept: 'Deforestation impacts: Habitat destruction, loss of biodiversity / species extinction, soil erosion (no roots to bind soil), flooding, disrupted water cycles, increased atmospheric CO₂ (fewer trees photosynthesising and release from slash-and-burn). Eutrophication process: (1) Excessive artificial fertiliser (nitrates/phosphates) leaches into rivers/lakes. (2) Causes rapid growth of algae (algal bloom). (3) Algal layer blocks sunlight; submerged aquatic plants die. (4) Decomposing aerobic bacteria multiply exponentially feeding on dead plant matter. (5) Bacteria consume dissolved oxygen during respiration. (6) Water becomes anoxic; fish and aquatic animals suffocate and die. Non-biodegradable plastics: Choke wildlife, degrade into microplastics entering food chains. Conservation: Endangered species breeding programs, national parks, habitat restoration, recycling.',
          interactiveDiagram: {
            title: 'Stages of Aquatic Eutrophication',
            caption: 'Fertiliser Leaching → Algal Bloom → Light Blocked → Plants Die → Bacteria Respiring → Anoxic Die-off',
            keyPoints: [
              'Leaching: Rain washes soluble nitrates and phosphates into rivers and ponds.',
              'Decomposers: It is the multiplying bacteria that deplete oxygen, NOT the living algae directly.',
              'Deforestation reduces global carbon sinks, accelerating the enhanced greenhouse effect.',
              'Sustainable development: Providing for human needs without destroying environmental ecosystems for the future.'
            ]
          },
          workedExample: {
            title: 'Explaining the Step-by-Step Mechanism of Eutrophication',
            problem: 'A farmer applies excess nitrate fertiliser before heavy rain. Explain why fish in a nearby lake die a week later.',
            stepByStep: [
              { step: 'Leaching & Bloom', detail: 'Nitrates wash into lake, stimulating explosive growth of surface algae (algal bloom).' },
              { step: 'Light Blockage', detail: 'The dense surface algae blanket blocks sunlight from reaching submerged aquatic plants, which die.' },
              { step: 'Bacterial Decomposition', detail: 'Decomposer bacteria feed on dead vegetation, multiplying exponentially.' },
              { step: 'Oxygen Depletion', detail: 'Aerobic bacteria consume dissolved oxygen during respiration, causing dissolved oxygen levels to plummet until fish suffocate.' }
            ],
            keyTakeaway: 'The critical turning point in eutrophication is bacterial respiration de-oxygenating the aquatic habitat.'
          },
          quickChallenge: {
            prompt: 'In the sequence of eutrophication, what organisms directly cause the catastrophic drop in dissolved oxygen that kills fish?',
            options: ['Aerobic decomposing bacteria multiplying and consuming oxygen during respiration', 'The fish themselves', 'The surface algae directly', 'The water plants while alive'],
            correctIndex: 0,
            explanation: 'Aerobic bacteria feeding on dead plant matter consume dissolved oxygen through respiration, creating lethal anoxic conditions.'
          },
          summary: [
            'Deforestation causes habitat loss, soil erosion, and increased atmospheric CO₂.',
            'Eutrophication occurs when leached fertilisers cause bacterial oxygen depletion.',
            'Conservation maintains biodiversity and sustainable natural resources.'
          ]
        },
        questions: [
          {
            id: 'b20_q1',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'What is a major ecological consequence of large-scale tropical rainforest deforestation?',
            options: ['Loss of biodiversity and habitat destruction leading to species extinction', 'Increase in oxygen levels', 'Decrease in atmospheric carbon dioxide', 'Improved soil fertility permanently'],
            correctAnswer: 'Loss of biodiversity and habitat destruction leading to species extinction',
            explanation: 'Tropical forests house >50% of terrestrial biodiversity; deforestation causes permanent species loss.'
          },
          {
            id: 'b20_q2',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'What is the primary cause of cultural eutrophication in freshwater lakes and rivers?',
            options: ['Agricultural runoff of synthetic nitrate and phosphate fertilisers leaching into waterways', 'Oil spills from tankers', 'Thermal power station warm water', 'Acid rain'],
            correctAnswer: 'Agricultural runoff of synthetic nitrate and phosphate fertilisers leaching into waterways',
            explanation: 'Excessive soluble nutrients over-enrich water bodies, triggering explosive algal blooms.'
          },
          {
            id: 'b20_q3',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'Why do fish and invertebrates die during the late stages of aquatic eutrophication?',
            options: ['Aerobic decomposing bacteria use up virtually all dissolved oxygen during respiration', 'The water turns poisonous red', 'The water gets too cold', 'Fish choke on fertiliser pellets'],
            correctAnswer: 'Aerobic decomposing bacteria use up virtually all dissolved oxygen during respiration',
            explanation: 'Severe bacterial biological oxygen demand (BOD) induces anoxic suffocation.'
          },
          {
            id: 'b20_q4',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'How does deforestation directly contribute to global climate change?',
            options: ['Fewer trees remain to remove CO₂ via photosynthesis, and burning trees releases stored carbon as CO₂', 'It stops wind from blowing', 'It makes the ground white', 'It changes the Earth\'s orbit'],
            correctAnswer: 'Fewer trees remain to remove CO₂ via photosynthesis, and burning trees releases stored carbon as CO₂',
            explanation: 'Forests are massive carbon sinks; clearing removes carbon uptake and adds combustion emissions.'
          },
          {
            id: 'b20_q5',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'Why does clear-cutting trees on hillsides frequently cause catastrophic soil erosion and mudslides?',
            options: ['Tree roots that normally bind the soil particles together are removed, and rain washes the topsoil away', 'The soil turns into sand', 'Wind stops blowing', 'Soil becomes too heavy'],
            correctAnswer: 'Tree roots that normally bind the soil particles together are removed, and rain washes the topsoil away',
            explanation: 'Root networks physically stabilize soil horizons; canopy foliage intercepts erosive torrential rains.'
          },
          {
            id: 'b20_q6',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'Why are non-biodegradable synthetic plastics such a persistent ecological hazard in oceans?',
            options: ['They persist for centuries without decomposing, choke marine organisms, and fragment into toxic microplastics', 'They dissolve into acid', 'They make the ocean boil', 'They turn into heavy lead'],
            correctAnswer: 'They persist for centuries without decomposing, choke marine organisms, and fragment into toxic microplastics',
            explanation: 'Plastics resist bacterial decay, accumulating in oceanic gyres and marine food webs.'
          },
          {
            id: 'b20_q7',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'What is a sustainable resource in environmental science?',
            options: ['A resource that is produced as rapidly as it is consumed, so that it does not run out', 'Fossil fuels like oil', 'Uranium nuclear fuel', 'Plastic bags'],
            correctAnswer: 'A resource that is produced as rapidly as it is consumed, so that it does not run out',
            explanation: 'Sustainable resources (timber from managed forests, solar power) regenerate indefinitely.'
          },
          {
            id: 'b20_q8',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'What strategy is used by conservationists to preserve endangered plant species outside their natural habitat?',
            options: ['Seed banks stored at sub-zero temperatures and botanical gardens', 'Cutting them down', 'Selling seeds to supermarkets', 'Planting them in deserts'],
            correctAnswer: 'Seed banks stored at sub-zero temperatures and botanical gardens',
            explanation: 'Seed banks maintain germplasm genetic diversity under cold, dehydrated dormancy.'
          },
          {
            id: 'b20_q9',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'How can untreated raw domestic sewage dumped into a river cause the death of aquatic organisms?',
            options: ['Sewage provides organic food for aerobic bacteria, which multiply and consume all dissolved oxygen', 'Sewage freezes the river', 'Sewage is radioactive', 'Sewage evaporates all the water'],
            correctAnswer: 'Sewage provides organic food for aerobic bacteria, which multiply and consume all dissolved oxygen',
            explanation: 'Organic waste decomposition creates acute biological oxygen demand, depleting dissolved O₂.'
          },
          {
            id: 'b20_q10',
            subtopicId: 'biology_20',
            type: 'multiple_choice',
            question: 'What is the primary objective of establishing wildlife nature reserves and national parks?',
            options: ['Protecting intact natural ecosystems, preventing habitat fragmentation, and conserving endangered species', 'Building tourist hotels', 'Logging timber', 'Farming cattle'],
            correctAnswer: 'Protecting intact natural ecosystems, preventing habitat fragmentation, and conserving endangered species',
            explanation: 'Protected areas safeguard natural ecological communities and genetic biodiversity.'
          }
        ]
      }
    ]
  },
  {
    id: 'bio_ch21',
    subjectId: 'biology',
    number: 21,
    title: 'Biotechnology and Genetic Modification',
    description: 'Use of bacteria and yeast, fermenters, genetic engineering, recombinant DNA, and insulin production.',
    subtopics: [
      {
        id: 'biology_21',
        chapterId: 'bio_ch21',
        subjectId: 'biology',
        code: '21',
        title: 'Biotechnology and Genetic Modification',
        description: 'Microorganisms in biotechnology, recombinant DNA, restriction enzymes, ligase, and bacterial insulin synthesis.',
        durationMinutes: 15,
        experience: {
          type: 'biotech_lab',
          title: 'Recombinant DNA & Genetic Engineering Lab',
          scenario: 'A modern molecular biotechnology cleanroom manufactures human therapeutic insulin.',
          prompt: 'Execute a recombinant DNA workflow: (1) Cut human insulin gene using Restriction Enzyme (yielding sticky ends). (2) Cut bacterial plasmid vector with the SAME enzyme. (3) Join gene and plasmid using DNA Ligase. (4) Insert recombinant plasmid into E. coli bacteria and culture in an industrial fermenter.',
          goal: 'Successfully genetically modify E. coli bacteria to express recombinant human insulin protein.'
        },
        lesson: {
          whatHappened: 'Restriction enzymes cut DNA at specific palindromic recognition sites with matching sticky ends. DNA ligase bonded the human insulin gene into the bacterial plasmid. Transformed bacteria expressed human insulin, which was harvested and purified.',
          academicConcept: 'Biotechnology: Use of biological organisms, systems, or processes in manufacturing and services. Why bacteria are useful: Rapid reproduction rate, simple nutritional needs, plasmids for gene transfer, same universal genetic code as all life, no ethical concerns like animals. Genetic Engineering: Changing the genetic material of an organism by removing, changing, or inserting individual genes. Recombinant DNA workflow for insulin: (1) Isolate human gene for insulin using restriction enzymes. (2) Cut open bacterial plasmid vector with the SAME restriction enzyme to form complementary sticky ends. (3) Join the human insulin gene into the plasmid using DNA ligase enzyme to create recombinant plasmid. (4) Insert recombinant plasmid into bacterium (transformation). (5) Culture transgenic bacteria in large industrial fermenters (controlled pH, temperature, nutrient broth, oxygen, cooling jacket). (6) Extract and purify human insulin for diabetic patients. Genetically modified crops (GM): Insect-resistant (Bt cotton/corn), herbicide-resistant, vitamin-enriched (Golden Rice).',
          interactiveDiagram: {
            title: 'Recombinant DNA Engineering & Industrial Fermenter',
            caption: 'Human Gene + Bacterial Plasmid → [Ligase] → Recombinant Plasmid → Transgenic E. coli',
            keyPoints: [
              'Restriction enzymes cut DNA at specific palindromic sequences, leaving single-stranded sticky ends.',
              'DNA ligase seals phosphodiester backbones between complementary sticky ends.',
              'Plasmid: Small circular loop of double-stranded DNA in bacteria used as a cloning vector.',
              'Fermenter: Monitored for optimal temperature (cooling jacket prevents enzyme denaturation) and sterile conditions.'
            ]
          },
          workedExample: {
            title: 'Explaining the Role of Restriction Enzymes and Ligase',
            problem: 'Explain why the same restriction enzyme must be used to cut both the human insulin gene and the bacterial plasmid vector.',
            stepByStep: [
              { step: 'Specific recognition site', detail: 'The restriction enzyme recognizes a specific DNA base sequence.' },
              { step: 'Complementary sticky ends', detail: 'Using the identical restriction enzyme ensures both the gene fragments and cut plasmid possess matching complementary single-stranded sticky ends.' },
              { step: 'Ligation', detail: 'These matching sticky ends can form base pairs with each other, allowing DNA ligase to permanently rejoin the sugar-phosphate backbone.' }
            ],
            keyTakeaway: 'Identical restriction enzymes produce mutually complementary sticky ends required for ligation.'
          },
          quickChallenge: {
            prompt: 'What enzyme is used to chemically join the cut ends of the human gene and the bacterial plasmid vector together in genetic engineering?',
            options: ['DNA Ligase', 'Restriction endonuclease', 'Amylase', 'DNA Polymerase only'],
            correctIndex: 0,
            explanation: 'DNA ligase seals the phosphodiester bonds between adjacent nucleotides, producing a stable recombinant plasmid.'
          },
          summary: [
            'Bacteria are ideal for biotechnology due to rapid growth and plasmids.',
            'Restriction enzymes cut DNA; DNA ligase joins fragments.',
            'Recombinant plasmids transform bacteria into industrial producers of human insulin.'
          ]
        },
        questions: [
          {
            id: 'b21_q1',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What is a plasmid in bacterial genetic engineering?',
            options: ['A small, circular loop of double-stranded DNA found in bacteria used as a vector to transfer genes', 'The bacterial cell wall', 'A protein coat', 'A type of virus'],
            correctAnswer: 'A small, circular loop of double-stranded DNA found in bacteria used as a vector to transfer genes',
            explanation: 'Plasmids replicate independently in bacteria and serve as universal molecular gene vectors.'
          },
          {
            id: 'b21_q2',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What is the role of restriction endonuclease enzymes in recombinant DNA technology?',
            options: ['To cut DNA molecules at specific palindromic base recognition sequences, leaving sticky ends', 'To join DNA strands together', 'To copy DNA', 'To destroy plasmids'],
            correctAnswer: 'To cut DNA molecules at specific palindromic base recognition sequences, leaving sticky ends',
            explanation: 'Restriction enzymes act as molecular scissors creating defined cohesive terminal sequences.'
          },
          {
            id: 'b21_q3',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What is recombinant DNA?',
            options: ['DNA that has been artificially created by combining DNA from two different organisms', 'Damaged DNA', 'DNA from dead cells', 'RNA converted to protein'],
            correctAnswer: 'DNA that has been artificially created by combining DNA from two different organisms',
            explanation: 'Recombinant DNA contains foreign genetic sequences inserted from another biological donor.'
          },
          {
            id: 'b21_q4',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'Why are microorganisms (like bacteria and yeast) particularly suitable for industrial biotechnology?',
            options: ['They reproduce very rapidly, have simple nutritional needs, and share the same genetic code as humans', 'They are visible to the naked eye', 'They do not require food', 'They never mutate'],
            correctAnswer: 'They reproduce very rapidly, have simple nutritional needs, and share the same genetic code as humans',
            explanation: 'Rapid doubling times (~20 mins) and universal codons enable efficient mass protein production.'
          },
          {
            id: 'b21_q5',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'Why does an industrial fermenter require a cold water cooling jacket?',
            options: ['Bacterial cellular respiration is exothermic and generates substantial heat that could denature enzymes', 'To freeze the bacteria', 'To add water to the broth', 'To wash the steel vessel'],
            correctAnswer: 'Bacterial cellular respiration is exothermic and generates substantial heat that could denature enzymes',
            explanation: 'Dense microbial cultures produce massive metabolic heat; cooling maintains the ~37°C optimum.'
          },
          {
            id: 'b21_q6',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What human medical protein is routinely produced on a massive commercial scale by genetically modified E. coli bacteria?',
            options: ['Human Insulin (to treat diabetes)', 'Pepsin', 'Adrenaline', 'Hemoglobin'],
            correctAnswer: 'Human Insulin (to treat diabetes)',
            explanation: 'Recombinant human insulin replaced animal-derived porcine/bovine insulin, eliminating allergic reactions.'
          },
          {
            id: 'b21_q7',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What is a major potential agricultural benefit of Genetically Modified (GM) crops (like Bt maize)?',
            options: ['Engineered resistance to insect pests, reducing the need for chemical pesticide spraying', 'Crops turn into gold', 'Crops require zero sunlight', 'Crops grow without water'],
            correctAnswer: 'Engineered resistance to insect pests, reducing the need for chemical pesticide spraying',
            explanation: 'Bt crops synthesize an insecticidal protein, protecting yields while lowering pesticide spraying.'
          },
          {
            id: 'b21_q8',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What enzyme joins the sticky ends of the human gene and cut plasmid together?',
            options: ['DNA Ligase', 'Amylase', 'Protease', 'RNA polymerase'],
            correctAnswer: 'DNA Ligase',
            explanation: 'DNA ligase catalyzes the synthesis of phosphodiester bonds, sealing the recombinant vector.'
          },
          {
            id: 'b21_q9',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'Why must air introduced into an industrial fermenter be filtered through sterile filters?',
            options: ['To prevent contamination by wild airborne bacteria or fungi that would compete with the desired culture', 'To remove oxygen', 'To cool the air', 'To add sugar'],
            correctAnswer: 'To prevent contamination by wild airborne bacteria or fungi that would compete with the desired culture',
            explanation: 'Sterile filtration ensures pure monoculture batches without competitor or toxin contamination.'
          },
          {
            id: 'b21_q10',
            subtopicId: 'biology_21',
            type: 'multiple_choice',
            question: 'What is Golden Rice genetically modified to produce to combat dietary deficiency in developing nations?',
            options: ['Beta-carotene (precursor to Vitamin A, preventing childhood blindness)', 'Vitamin C', 'Antibiotics', 'Iron only'],
            correctAnswer: 'Beta-carotene (precursor to Vitamin A, preventing childhood blindness)',
            explanation: 'Golden Rice synthesizes pro-vitamin A in the edible endosperm grain to alleviate deficiency.'
          }
        ]
      }
    ]
  }
];
