import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { useCateStore } from './stores/useCateStore';

import { Layers } from '@/components/common/Layers/Layers.module.jsx';

import Router from '@/routes/Routes';

import '@/styles/font.scss';
import '@/styles/reset.scss';
import '@/styles/layout.scss';

const App = () => {
  const fetchCate = useCateStore((state) => state.fetchCate);
  useEffect(() => {
    fetchCate();
  }, [fetchCate]);

  return (
    <div className='wrap' data-point='p-color_0' data-cont='base'>
      <RouterProvider router={Router} />
      <Layers />
    </div>
  );
};

export default App;
