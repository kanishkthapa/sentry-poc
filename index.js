const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://a8826fdcd2eff309188c1e692d2c8059@o4506387687931904.ingest.sentry.io/4506387950993408",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
    throw e;
  } finally {
    transaction.finish();
  }
}, 99);
