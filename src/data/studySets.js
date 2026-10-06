export const studySets = [
  {
    id: 1,
    title: 'Photosynthesis Basics',
    subject: 'Science',
    createdAt: '2026-09-12T10:00:00',
    notes:
      'Photosynthesis is the process plants use to turn light energy into chemical energy. It happens in the chloroplasts, which contain chlorophyll. Plants take in carbon dioxide and water and produce glucose and oxygen.',
    summary:
      'Photosynthesis converts light energy into chemical energy inside chloroplasts. Using carbon dioxide and water, plants make glucose for food and release oxygen.',
    flashcards: [
      {
        question: 'Where does photosynthesis take place?',
        answer: 'In the chloroplasts of plant cells.',
      },
      {
        question: 'What pigment captures light energy?',
        answer: 'Chlorophyll.',
      },
      {
        question: 'What are the products of photosynthesis?',
        answer: 'Glucose and oxygen.',
      },
    ],
    quiz: [
      {
        question: 'Which gas do plants take in for photosynthesis?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        correctIndex: 1,
      },
      {
        question: 'What does chlorophyll do?',
        options: [
          'Stores water',
          'Produces oxygen directly',
          'Absorbs light energy',
          'Makes roots grow',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 2,
    title: 'World War II Overview',
    subject: 'History',
    createdAt: '2026-09-15T14:30:00',
    notes:
      'World War II lasted from 1939 to 1945. It began when Germany invaded Poland. The war involved two main alliances, the Allies and the Axis powers. It ended in 1945 after the surrender of Germany and Japan.',
    summary:
      'World War II ran from 1939 to 1945, starting with the German invasion of Poland. The Allies defeated the Axis powers, and the war ended with the surrender of Germany and Japan in 1945.',
    flashcards: [
      {
        question: 'When did World War II begin?',
        answer: '1939, when Germany invaded Poland.',
      },
      {
        question: 'What were the two main alliances?',
        answer: 'The Allies and the Axis powers.',
      },
      {
        question: 'When did World War II end?',
        answer: '1945.',
      },
    ],
    quiz: [
      {
        question: 'Which event started World War II in Europe?',
        options: [
          'The invasion of Poland',
          'The fall of Paris',
          'The Battle of Britain',
          'The attack on Pearl Harbor',
        ],
        correctIndex: 0,
      },
      {
        question: 'In what year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 3,
    title: 'JavaScript Basics',
    subject: 'Computer Science',
    createdAt: '2026-09-20T09:15:00',
    notes:
      'JavaScript variables can be declared with let, const, or var. Use const for values that do not change and let for values that do. Functions are reusable blocks of code. Arrays store lists of values and objects store key-value pairs.',
    summary:
      'JavaScript uses let and const to declare variables, functions to reuse code, arrays for lists, and objects for key-value data. Prefer const unless the value needs to change.',
    flashcards: [
      {
        question: 'When should you use const?',
        answer: 'When the value will not be reassigned.',
      },
      {
        question: 'What does an array store?',
        answer: 'A list of values.',
      },
      {
        question: 'What does an object store?',
        answer: 'Key-value pairs.',
      },
    ],
    quiz: [
      {
        question: 'Which keyword declares a variable that can change?',
        options: ['const', 'let', 'function', 'return'],
        correctIndex: 1,
      },
      {
        question: 'What is a function?',
        options: [
          'A list of values',
          'A type of variable',
          'A reusable block of code',
          'A CSS rule',
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: 4,
    title: 'Pythagorean Theorem',
    subject: 'Math',
    createdAt: '2026-09-25T16:45:00',
    notes:
      'The Pythagorean theorem applies to right triangles. It states that a squared plus b squared equals c squared, where c is the hypotenuse, the longest side opposite the right angle.',
    summary:
      'In a right triangle, the squares of the two shorter sides add up to the square of the hypotenuse: a² + b² = c². The hypotenuse is the longest side, opposite the right angle.',
    flashcards: [
      {
        question: 'What is the Pythagorean theorem?',
        answer: 'a² + b² = c² for a right triangle.',
      },
      {
        question: 'What is the hypotenuse?',
        answer: 'The longest side, opposite the right angle.',
      },
      {
        question: 'Does the theorem work for all triangles?',
        answer: 'No, only for right triangles.',
      },
    ],
    quiz: [
      {
        question: 'If a = 3 and b = 4, what is c?',
        options: ['5', '6', '7', '12'],
        correctIndex: 0,
      },
      {
        question: 'Which side is the hypotenuse?',
        options: [
          'The shortest side',
          'The side opposite the right angle',
          'Any side',
          'The base only',
        ],
        correctIndex: 1,
      },
    ],
  },
]