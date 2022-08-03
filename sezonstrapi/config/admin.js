module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '10d6c30839cb8f239b02fe53a4d80c6a'),
  },
});
