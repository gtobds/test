import { useLayerStore } from '@/stores/useLayerStore';

import Btn from '@/components/common/Btn/Btn.module.jsx';
import LayerGds_0 from '@/pages/common/layers/LayerGds_0.jsx';

export default function LayerGds_1({ title = 'title' }) {
  const openLayer = useLayerStore((state) => state.openLayer);

  return (
    <div>
      <h2>{title}</h2>
      <p>부모의 overflow: hidden에 영향을 받지 않아요. 부모의 overflow: hidden에 영향을 받지 않아요.</p>
      <div className='btn-set'>
        <Btn type='sd' text='2중 레이어 OVER' onClick={() => openLayer(<LayerGds_0 title='2중 레이어 OVER' />)} />
        <Btn type='sd' text='2중 레이어 CHANGE' onClick={() => openLayer(<LayerGds_0 title='2중 레이어 CHANGE' />, { replace: true })} />
      </div>
    </div>
  );
}
