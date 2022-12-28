const notes = require('../storage/notes');

/**
 *
 * @param {import('@hapi/hapi').Request} req
 * @param {import('@hapi/hapi').ResponseToolkit} h
 */
module.exports = (req, h) => {
  const { id } = req.params;

  const { title, tags, body } = req.payload;
  const updatedAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
