const stripeAPI = require('../stripe'); 
const getCustomer = require('../helpers/getCustomer');

async function getPaymentIntent(req, res) { 
    const { currentUser } = req
    const customer = await getCustomer(currentUser.uid);

    let paymentIntents;

    try {
        paymentIntents = await stripeAPI.paymentIntents.list(
        // paymentIntents = await stripeAPI.checkout.sessions.list(
            {   
                customer: customer.id,
                // status: 'succeeded'
            }
        );
        res.status(200).json(paymentIntents.data);
    } catch(error) {
        res.status(400).json({ error: 'An error occurred, unable to list payments'})
    }
}

module.exports = getPaymentIntent;