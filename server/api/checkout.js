const stripeAPI = require('../stripe');
const getCustomer = require('../helpers/getCustomer');

async function createCheckoutSession(req, res) {
  const domainUrl = process.env.WEB_APP_URL;

  const { currentUser } = req
  const customer = await getCustomer(currentUser.uid);
  // console.log('customer:', customer.id)

  const { 
    line_items, 
    // customer_email 
  } = req.body;
  // check req body has line items and email
  if (!line_items 
      || !customer.id
    // || !customer_email
    ) {
    return res.status(400).json({ error: 'missing required session parameters' });
  }

  let session; 

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      // customer_email,
      // success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      customer: customer.id,
      success_url: `${domainUrl}success`,
      cancel_url: `${domainUrl}canceled`,
      shipping_address_collection: { allowed_countries: ['GB', 'US'] }
    }); 
    res.status(200).json({ sessionId: session.id, });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'an error occured, unable to create session'});
  }
}

module.exports = createCheckoutSession;