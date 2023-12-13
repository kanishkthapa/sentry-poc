import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://a8826fdcd2eff309188c1e692d2c8059@o4506387687931904.ingest.sentry.io/4506387950993408",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
