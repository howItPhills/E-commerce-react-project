import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51KIxv9LkewHWMpi3quAGU2lLSo40JCICXx2OGIZGJcFxe1CyiTo47Rq8wwRhqedrbI68vwx25AEcIiuKxiD9Y39E00R3gwKHOm'


   const onToken = (token) => {
      console.log(token);
      alert('Payment successful')
   }

   return (
      <StripeCheckout
         label="Pay Now"
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         description={`Your total price is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay now"
         token={onToken}
         stripeKey={publishableKey}
      />
   )
}
export default StripeCheckoutButton
