// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('modules')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {
          id: 1,
          title: 'Javascript 2',
          startDate: '2020-05-10 00:00:00',
          endDate: '2020-05-10 00:00:00',
          classid: 'class01',
        },
        {
          id: 2,
          title: 'Javascript 1',
          startDate: '2020-05-07 00:00:00',
          endDate: '2020-05-08 00:00:00',
          classid: 'class01',
        },
      ]);
    });
};
