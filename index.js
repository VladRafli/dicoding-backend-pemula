const Hapi = require('@hapi/hapi');
const apiRoutes = require('./routes/api');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(apiRoutes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();