
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').truncate()
    .then(function () {
      return knex('quotes').insert([
        {id: 1, quote: 'If it is not right, do not do it, if it is not true, do not say it.', author: 'Marcus Aurelius'},
      ]);
    });
};
