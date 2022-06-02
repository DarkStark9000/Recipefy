import { motion } from 'framer-motion';
import Popular from '../components/Popular';
import Veg from '../components/Veg';

function Home() {
  return (
    <motion.div>
      <Popular />
      <Veg />
    </motion.div>
  );
}

export default Home;
