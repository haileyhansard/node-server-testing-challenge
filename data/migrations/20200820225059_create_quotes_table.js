
exports.up = function(knex) {
    return knex.schema.createTable("quotes", tbl => {
        tbl.increments();
        tbl.string("quote").notNullable();
        tbl.string("author").notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("quotes");
};
