const stripeAPI = require('../stripe');
const firebase = require('../firebase');

async function createProduct(productId) {
  const productSnapshot = await firebase.db.collection('products').doc(productId).get();

  const { email } = productSnapshot.data();

  const customer = await stripeAPI.customers.create({
    email,
    metadata: {
      firebaseUID: productId,
    }
  });

  await productSnapshot.ref.update({ stripeCustomerId: customer.id });
  return customer;
}

async function getProduct(productId) {
  const productSnapshot = await firebase.db.collection('products').doc(productId).get();
  const { stripeCustomerId } = productSnapshot.data();
  if (!stripeCustomerId) {
    return createProduct(productId);
  }
  
  const customer = await stripeAPI.customers.retrieve(stripeCustomerId);
  return customer;
}

module.exports = getProduct;