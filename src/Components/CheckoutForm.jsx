import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckoutForm = ({ closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (

    <div className="w-5/6 mx-auto mt-9 lg:w-3/6">
      <form onSubmit={handleSubmit} >
        <h2 className="text-xl font-bold my-2">Please Enter Your Card Details</h2>
        <div className=" font-bold my-14">
          <h2 >Please Enter Amount</h2>
          <input className=" p-3 border-2" type="text" placeholder="Amount" name="money" />
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn bg-red-500 text-white mt-3" onClick={closeModal} type="submit" disabled={!stripe}>
          Donate
        </button>
      </form>
    </div>

  );
};

export default CheckoutForm;