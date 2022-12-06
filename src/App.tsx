import { Box } from '@chakra-ui/react';
import Ingredients from './components/Ingredients';
import './App.css';

const App = () => {
  return (
    <Box>
      <header className='App-header'>
        <Ingredients />
      </header>
    </Box>
  );
};

export default App;
