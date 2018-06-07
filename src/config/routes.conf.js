export default function RoutesConfig(app) {
  const startTime = new Date();

  app.route('/documentation').get((req, res) => {
    res.render('index', { title: 'Microservice Starter !' });
  });

  app.route('/*').get((req, res) => {
    const uptime = `${new Date() - startTime}ms`;
    res.status(200).json({ startTime, uptime });
  });

  app.use((req, res, next) => {
    const err = new Error('Not Found');

    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500).render('error', {
      message: err.message,
    });
  });
}
