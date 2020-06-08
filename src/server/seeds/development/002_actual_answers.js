// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('actual_answers')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('actual_answers').insert([
        {
          created_at: '2020-05-10 00:00:00',
          updated_at: '2020-05-10 00:00:00',
        },
        {
          created_at: '2020-05-07 00:00:00',
          updated_at: '2020-05-08 00:00:00',
        },
      ]);
    });
};
