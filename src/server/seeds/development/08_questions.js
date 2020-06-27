exports.seed = function (knex) {
  return knex('questions')
    .del()
    .then(function () {
      return knex('questions').insert([
        {
          question: 'Which of these famous Danes was not born in Copenhagen?',
          fk_game_factory_id: 1,
          latitude: '55.6763131',
          longitude: '12.5671846',
          points: 10,
        },
        {
          question: 'Which of these letters is not in the Danish alphabet? ',
          fk_game_factory_id: 1,
          longitude: '55.6776705',
          latitude: '12.5758562',
          points: 10,
        },
        {
          question:
            'What percentage of people living in Copenhagen are foreigners?',
          fk_game_factory_id: 1,
          longitude: '55.6746509',
          latitude: '12.5725523',
          points: 10,
        },
        {
          question: 'Which one of the following cities is not a Danish city?',
          fk_game_factory_id: 1,
          longitude: '55.6781781',
          latitude: '12.5760579',
          points: 10,
        },
        {
          question: 'What is the Swedish spelling of Copenhagen?',
          fk_game_factory_id: 1,
          longitude: '55.6797691',
          latitude: '12.5897041',
          points: 10,
        },
        {
          question:
            "Which of these is not the name of a neighborhood in Copenhagen?'",
          fk_game_factory_id: 1,
          longitude: '55.6762346',
          latitude: '12.5783256',
          points: 10,
        },
        {
          question:
            "Which country's navy bombarded Copenhagen from the sea in 1807?",
          fk_game_factory_id: 1,
          longitude: '55.6750213',
          latitude: '12.5681225',
          points: 10,
        },
        {
          question:
            "What is the name of the annual summer street festival that reverberates through Copenhagen's streets?",
          fk_game_factory_id: 1,
          longitude: '55.6888157',
          latitude: '12.5761416',
          points: 10,
        },
        {
          question:
            'How high is the Round Tower or in Danish Rundetaarn in Copenhagen?',
          fk_game_factory_id: 1,
          longitude: '55.68135',
          latitude: '12.5735412',
          points: 10,
        },
        {
          question: "What's the name of the oldest amusement park in Denmark?",
          fk_game_factory_id: 1,
          longitude: '55.6736871',
          latitude: '12.5659584',
          points: 10,
        },
        {
          question: 'Where does the royal family live in Copenhagen?',
          fk_game_factory_id: 1,
          longitude: '55.6852935',
          latitude: '12.5776565',
          points: 10,
        },
        {
          question:
            'What is the name of the fairy tale from HC Andersen where the main character is a woman that is half fish?',
          fk_game_factory_id: 1,
          longitude: '55.6787501',
          latitude: '12.5715252',
          points: 10,
        },
        {
          question: 'Which ones of the following inventions are danish?',
          fk_game_factory_id: 1,
          longitude: '55.6808644',
          latitude: '12.5823393',
          points: 10,
        },
      ]);
    });
};
