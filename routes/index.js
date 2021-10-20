const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Contact
router.get('/contact', forwardAuthenticated, (req, res) => res.render('contact'));

//Assets
router.get('/asset', forwardAuthenticated, (req, res) => res.render('assets'));


//STAKING
router.get('/stake', forwardAuthenticated, (req, res) => res.render('stake'));

//EARN
router.get('/earn', forwardAuthenticated, (req, res) => res.render('earn'));

//NFTs
router.get('/nft', forwardAuthenticated, (req, res) => res.render('nft'));




router.get('/how-to-buy-bitcoin', (req, res) => res.render('bitcoin'));

router.get('/what-is-bitcoin', (req, res) => res.render('howtobuybtc'));



//ABOUT
router.get('/about', forwardAuthenticated, (req, res) => res.render('about'));


//PLANS
router.get('/plans', forwardAuthenticated, (req, res) => res.render('plans'));


//LOANS
router.get('/loans', forwardAuthenticated, (req, res) => res.render('loans'));

//SERVICES
router.get('/investment-services', forwardAuthenticated, (req, res) => res.render('services'));

//ABOUT
router.get('/services', forwardAuthenticated, (req, res) => res.render('services'));



//philosophy
router.get('/investment-philosophy', forwardAuthenticated, (req, res) => res.render('philosophy'));


//REAL ESTATE
router.get('/real-estate', forwardAuthenticated, (req, res) => res.render('real'));

// FAQ

router.get('/faq', forwardAuthenticated, (req, res) => res.render('faq'));

//blog one
router.get('/Morgan-Stanley-Strategist-Recommends-Bitcoin-as-Central-Banks-Ramp-Up-Money-Printing', forwardAuthenticated, (req, res) => res.render('blog'));

//blog two
router.get('/ETH-could-push-higher-with-a-daily-close-above-400', forwardAuthenticated, (req, res) => res.render('blo2'));

//blog3
router.get('/nasdaq-test-?', forwardAuthenticated, (req, res) => res.render('blog2'));

// TERMS
router.get('/term-and-condition', forwardAuthenticated, (req, res) => res.render('terms'));

//PRIVACY POLICY
router.get('/privacy-policy', forwardAuthenticated, (req, res) => res.render('privacy'));

//REFUND POLICY
router.get('/refund-policy', forwardAuthenticated, (req, res) => res.render('refund'));

//Solutions
router.get('/solutions', forwardAuthenticated, (req, res) => res.render('solutions'));




// Dashboard

router.get('/home', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);
router.get('/buy-crypto', ensureAuthenticated, (req, res) =>
  res.render('buy', {
    user: req.user
  })
);
router.get('/sell-crypto', ensureAuthenticated, (req, res) =>
  res.render('sell', {
    user: req.user
  })
);
router.get('/request', ensureAuthenticated, (req, res) =>
  res.render('request', {
    user: req.user
  })
);
router.get('/send', ensureAuthenticated, (req, res) =>
  res.render('send', {
    user: req.user
  })
);
router.get('/earn-margin', ensureAuthenticated, (req, res) =>
  res.render('margin', {
    user: req.user
  })
);
router.get('/earn-nfts', ensureAuthenticated, (req, res) =>
  res.render('enfts', {
    user: req.user
  })
);
router.get('/swap', ensureAuthenticated, (req, res) =>
  res.render('swap', {
    user: req.user
  })
);
router.get('/invest', ensureAuthenticated, (req, res) =>
  res.render('invest', {
    user: req.user
  })
);

router.get('/return-on-investments', ensureAuthenticated, (req, res)=>{
  res.render('returns')
  user: req.user
})
router.get('/withdrawal', ensureAuthenticated, (req, res) =>
  res.render('withdrawal', {
    user: req.user
  })
);
router.get('/history', ensureAuthenticated, (req, res) =>
  res.render('history', {
    user: req.user
  })
);
router.get('/analytics', ensureAuthenticated, (req, res) =>
  res.render('analytics', {
    user: req.user
  })
);

router.get('/settings', ensureAuthenticated, (req, res) =>
  res.render('settings', {
    user: req.user
  })
);
router.get('/checkout', ensureAuthenticated, (req, res) =>
  res.render('checkout', {
    user: req.user
  })
);
router.get('/bloop', ensureAuthenticated, (req, res) =>
  res.render('complete', {
    user: req.user
  })
);


module.exports = router;
