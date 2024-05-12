import { loadStripe } from '@stripe/stripe-js';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import MyCheckoutForm from './components/MyCheckoutForm';

const stripePromise = loadStripe('pk_test_51PFX562LLzwpxMjdbnSupxnMz00GtXwrl3ChQ6dq7xWbi57fs66IJkzh7blLhwx3LQuva0oNoOecWx7yGAoyLyVf00OX8wn0Ry')

function App() {
  const options = {
    clientSecret: process.env.CLIENT_SECRET,
  }
  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <MyCheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
