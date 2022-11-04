const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "660636084968-e48uem21optqdkbtf1jshv47emvlt1fg.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "67bf1bbe8661c5601bae";
GITHUB_CLIENT_SECRET = "b7d22656f77df0e528668a14526f51760581bb62";

FACEBOOK_APP_ID = "670875464390025";
FACEBOOK_APP_SECRET = "1603ca0b72942f9c2902c7e513565ffe";



passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

