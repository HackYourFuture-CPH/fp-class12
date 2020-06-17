exports.seed = function (knex) {
  return knex('answer_choices')
    .del()
    .then(function () {
      return knex('answer_choices').insert([
        {
          answer_text: 'Hans Christian Andersen',
          fk_question_id: 1,
          answer_correct: true,
        },
        {
          answer_text: 'Niels Bohr',
          fk_question_id: 1,
          answer_correct: false,
        },
        {
          answer_text: 'Søren Kierkegaard',
          fk_question_id: 1,
          answer_correct: false,
        },
        {
          answer_text: 'Arne Jacobsen',
          fk_question_id: 1,
          answer_correct: false,
        },
        {
          answer_text: 'Å',
          fk_question_id: 2,
          answer_correct: false,
        },
        {
          answer_text: 'Ä',
          fk_question_id: 2,
          answer_correct: true,
        },
        {
          answer_text: 'Ø',
          fk_question_id: 2,
          answer_correct: false,
        },
        {
          answer_text: 'Æ',
          fk_question_id: 2,
          answer_correct: false,
        },
        {
          answer_text: '24%',
          fk_question_id: 3,
          answer_correct: true,
        },
        {
          answer_text: '15%',
          fk_question_id: 3,
          answer_correct: false,
        },
        {
          answer_text: '2%',
          fk_question_id: 3,
          answer_correct: false,
        },
        {
          answer_text: '8%',
          fk_question_id: 3,
          answer_correct: false,
        },
        {
          answer_text: 'Odense',
          fk_question_id: 4,
          answer_correct: false,
        },
        {
          answer_text: 'Malmö',
          fk_question_id: 4,
          answer_correct: true,
        },
        {
          answer_text: 'Roskilde',
          fk_question_id: 4,
          answer_correct: false,
        },
        {
          answer_text: 'Kolding',
          fk_question_id: 4,
          answer_correct: false,
        },
        {
          answer_text: 'København',
          fk_question_id: 5,
          answer_correct: false,
        },
        {
          answer_text: 'Köpenhamn',
          fk_question_id: 5,
          answer_correct: true,
        },
        {
          answer_text: 'Kopenhagen',
          fk_question_id: 5,
          answer_correct: false,
        },
        {
          answer_text: 'Copenhagen',
          fk_question_id: 5,
          answer_correct: false,
        },
        {
          answer_text: 'Vesterbro',
          fk_question_id: 6,
          answer_correct: false,
        },
        {
          answer_text: 'Sønderbro',
          fk_question_id: 6,
          answer_correct: true,
        },
        {
          answer_text: 'Nørrebro',
          fk_question_id: 6,
          answer_correct: false,
        },
        {
          answer_text: 'Østebro',
          fk_question_id: 6,
          answer_correct: false,
        },
        {
          answer_text: 'Germany',
          fk_question_id: 7,
          answer_correct: false,
        },
        {
          answer_text: 'Sweden',
          fk_question_id: 7,
          answer_correct: false,
        },
        {
          answer_text: 'Russia',
          fk_question_id: 7,
          answer_correct: false,
        },
        {
          answer_text: 'Great Britain',
          fk_question_id: 7,
          answer_correct: true,
        },
        {
          answer_text: 'Distortion',
          fk_question_id: 8,
          answer_correct: true,
        },
        {
          answer_text: 'Disturbance',
          fk_question_id: 8,
          answer_correct: false,
        },
        {
          answer_text: 'Discrepancy',
          fk_question_id: 8,
          answer_correct: false,
        },
        {
          answer_text: 'Disreputable',
          fk_question_id: 8,
          answer_correct: false,
        },
        {
          answer_text: '16 meters',
          fk_question_id: 9,
          answer_correct: false,
        },
        {
          answer_text: '38 meters',
          fk_question_id: 9,
          answer_correct: false,
        },
        {
          answer_text: '26 meters',
          fk_question_id: 9,
          answer_correct: true,
        },
        {
          answer_text: '43 meters',
          fk_question_id: 9,
          answer_correct: false,
        },
        {
          answer_text: 'Dyrehavsbakken',
          fk_question_id: 10,
          answer_correct: true,
        },
        {
          answer_text: 'Tivoli',
          fk_question_id: 10,
          answer_correct: false,
        },
        {
          answer_text: 'BonBon-Land',
          fk_question_id: 10,
          answer_correct: false,
        },
        {
          answer_text: 'Camp Adventure',
          fk_question_id: 10,
          answer_correct: false,
        },
        {
          answer_text: 'Christiania',
          fk_question_id: 11,
          answer_correct: false,
        },
        {
          answer_text: 'Amalienborg Palace',
          fk_question_id: 11,
          answer_correct: true,
        },
        {
          answer_text: 'Frederiksberg Palace',
          fk_question_id: 11,
          answer_correct: false,
        },
        {
          answer_text: 'None of the above',
          fk_question_id: 11,
          answer_correct: false,
        },
        {
          answer_text: 'The Whale Girl',
          fk_question_id: 12,
          answer_correct: false,
        },
        {
          answer_text: 'A fish that wears a squirt',
          fk_question_id: 12,
          answer_correct: false,
        },
        {
          answer_text: 'Queen of the Sea',
          fk_question_id: 12,
          answer_correct: false,
        },
        {
          answer_text: 'The Little Mermaid',
          fk_question_id: 12,
          answer_correct: true,
        },
        {
          answer_text: 'The bicycles',
          fk_question_id: 13,
          answer_correct: false,
        },
        {
          answer_text: 'Google maps',
          fk_question_id: 13,
          answer_correct: true,
        },
        {
          answer_text: 'Liquorice ',
          fk_question_id: 13,
          answer_correct: false,
        },
        {
          answer_text: 'The LEGO',
          fk_question_id: 13,
          answer_correct: true,
        },
      ]);
    });
};
