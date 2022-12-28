const notes = require('../storage/notes');

/**
 *
 */
module.exports = () => ({
  status: 'success',
  data: {
    notes,
  },
});
