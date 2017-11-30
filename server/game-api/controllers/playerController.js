'use strict';

var playerController = function (Player) {

  function getplayers(req, res) {
    var query = {},
      searchableFields = [
        'userName',
        'game',
        'difficulty',
        'score'
      ],
      page = req.query['page'] || 0,
      pageSize = req.query['pagesize'] || 10,
      sort = req.query['sort'] || null,
      direction = req.query['direction'] || 'asc',
      searchQuery = null;

    //build query
    searchableFields.forEach(function (fieldName) {
      if (req.query[fieldName]) {
        query[fieldName] = req.query[fieldName];
      }
    });

    searchQuery = Player.find(query)
      .skip(page * pageSize)
      .limit(+pageSize);

    if (sort) {
      var sortConfig = {};
      sortConfig[sort] = direction
      searchQuery = searchQuery.sort(sortConfig);
    }

    searchQuery.exec(
      function (err, players) {
        if (err)
          res.status(500).send(err);
        else {
          Player.count(query).exec(function (countErr, count) {
            if (countErr) {
              res.status(500).send(countErr);
            } else {
              res.json({
                data: players,
                totalRecords: count
              });
            }
          });
        }
      });
  }

  return {
    get: getplayers
  };

};

module.exports = playerController;
