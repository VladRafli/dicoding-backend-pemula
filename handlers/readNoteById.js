const notes = require('../storage/notes');

/**
 *
 * @param {import('@hapi/hapi').Request} req
 * @param {import('@hapi/hapi').ResponseToolkit} h
 */
module.exports = (req, h) => {
  const { id } = req.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};
