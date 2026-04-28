import React from 'react';
import { RouterProvider } from 'react-router';
//import { LayerProvider } from './contexts/layerContext';
import { Layers } from '@/components/common/Layer/Layers.module.jsx';

import Router from '@/routes/Routes';

import '@/styles/font.scss';
import '@/styles/reset.scss';
import '@/styles/layout.scss';

const App = () => {
  return (
    //<LayerProvider>
    <div className='wrap'>
      <RouterProvider router={Router} />
      <Layers />
    </div>
    //</LayerProvider>
  );
};

export default App;
