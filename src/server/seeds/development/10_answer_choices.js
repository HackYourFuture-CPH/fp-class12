exports.seed = function(knex) {
    return knex('answer_choices')
      .del()
      .then(function() {
        return knex('answer_choices').insert([
              {
                "id": 1,
                "answer_text": "Hans Christian Andersen",
                "fk_question_id": 1,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 2,
                "answer_text": "Niels Bohr",
                "fk_question_id": 1,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 3,
                "answer_text": "Søren Kierkegaard",
                "fk_question_id": 1,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 4,
                "answer_text": "Arne Jacobsen",
                "fk_question_id": 1,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 5,
                "answer_text": "Å",
                "fk_question_id": 2,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 6,
                "answer_text": "Ä",
                "fk_question_id": 2,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 7,
                "answer_text": "Ø",
                "fk_question_id": 2,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 8,
                "answer_text": "Æ",
                "fk_question_id": 2,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 9,
                "answer_text": "24%",
                "fk_question_id": 3,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 10,
                "answer_text": "15%",
                "fk_question_id": 3,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 11,
                "answer_text": "2%",
                "fk_question_id": 3,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 12,
                "answer_text": "8%",
                "fk_question_id": 3,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 13,
                "answer_text": "Odense",
                "fk_question_id": 4,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 14,
                "answer_text": "Malmö",
                "fk_question_id": 4,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 15,
                "answer_text": "Roskilde",
                "fk_question_id": 4,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 16,
                "answer_text": "Kolding",
                "fk_question_id": 4,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 17,
                "answer_text": "København",
                "fk_question_id": 5,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 18,
                "answer_text": "Köpenhamn",
                "fk_question_id": 5,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 19,
                "answer_text": "Kopenhagen",
                "fk_question_id": 5,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 20,
                "answer_text": "Copenhagen",
                "fk_question_id": 5,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 21,
                "answer_text": "Vesterbro",
                "fk_question_id": 6,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 22,
                "answer_text": "Sønderbro",
                "fk_question_id": 6,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 23,
                "answer_text": "Nørrebro",
                "fk_question_id": 6,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 24,
                "answer_text": "Østebro",
                "fk_question_id": 6,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 25,
                "answer_text": "Germany",
                "fk_question_id": 7,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 26,
                "answer_text": "Sweden",
                "fk_question_id": 7,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 27,
                "answer_text": "Russia",
                "fk_question_id": 7,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 28,
                "answer_text": "Great Britain",
                "fk_question_id": 7,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 29,
                "answer_text": "Distortion",
                "fk_question_id": 8,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 30,
                "answer_text": "Disturbance",
                "fk_question_id": 8,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 31,
                "answer_text": "Discrepancy",
                "fk_question_id": 8,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 32,
                "answer_text": "Disreputable",
                "fk_question_id": 8,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 33,
                "answer_text": "16 meters",
                "fk_question_id": 9,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 34,
                "answer_text": "38 meters",
                "fk_question_id": 9,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 35,
                "answer_text": "26 meters",
                "fk_question_id": 9,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 36,
                "answer_text": "43 meters",
                "fk_question_id": 9,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 37,
                "answer_text": "Dyrehavsbakken",
                "fk_question_id": 10,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 38,
                "answer_text": "Tivoli",
                "fk_question_id": 10,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 39,
                "answer_text": "BonBon-Land",
                "fk_question_id": 10,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 40,
                "answer_text": "Camp Adventure",
                "fk_question_id": 10,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 41,
                "answer_text": "Christiania",
                "fk_question_id": 11,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 42,
                "answer_text": "Amalienborg Palace",
                "fk_question_id": 11,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 43,
                "answer_text": "Frederiksberg Palace",
                "fk_question_id": 11,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 44,
                "answer_text": "None of the above",
                "fk_question_id": 11,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 45,
                "answer_text": "The Whale Girl",
                "fk_question_id": 12,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 46,
                "answer_text": "A fish that wears a squirt",
                "fk_question_id": 12,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 47,
                "answer_text": "Queen of the Sea",
                "fk_question_id": 12,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 48,
                "answer_text": "The Little Mermaid",
                "fk_question_id": 12,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              }, 
              {
                "id": 49,
                "answer_text": "The bicycles",
                "fk_question_id": 13,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 50,
                "answer_text": "Google maps",
                "fk_question_id": 13,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 51,
                "answer_text": "Liquorice ",
                "fk_question_id": 13,
                "answer_correct": false,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              },
              {
                "id": 52,
                "answer_text": "The LEGO",
                "fk_question_id": 13,
                "answer_correct": true,
                "created_at": "2020-03-16 21:03:57",
                "updated_at": "2020-03-16 21:03:57",
                "deleted_at": null
              }
        ]);
      });
  };
  