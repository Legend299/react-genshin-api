import React from 'react';
import ReactDOM from 'react-dom/client';

import GetCharacterList from './components/api/GetCharacterList';
import NavigationBar from './components/navigator/NavigationBar';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<>
  <NavigationBar/>
  <GetCharacterList/>
</>);
