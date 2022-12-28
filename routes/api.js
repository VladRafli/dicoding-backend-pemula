const createNote = require('../handlers/createNote');
const deleteNoteById = require('../handlers/deleteNoteById');
const readAllNote = require('../handlers/readAllNote');
const readNoteById = require('../handlers/readNoteById');
const updateNoteById = require('../handlers/updateNoteById');

/**
 * @type {import("@hapi/hapi").ServerRoute<import("@hapi/hapi").ReqRefDefaults>[]}
 */
module.exports = [
  {
    method: 'GET',
    path: '/notes',
    handler: readAllNote,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: readNoteById,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'POST',
    path: '/notes',
    handler: createNote,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteById,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];
