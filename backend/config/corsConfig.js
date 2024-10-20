const whitelist = [
  /^http:\/\/localhost:\d+$/,
  /^http:\/\/127\.0\.0\.1:\d+$/,
  "http://localhost:3000", // Add this line
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.some(allowed => allowed instanceof RegExp ? allowed.test(origin) : allowed === origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

export default corsOptions;
