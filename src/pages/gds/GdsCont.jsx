//import { useLayer } from '@/contexts/layerContext';
import { useLayerStore } from '@/stores/useLayerStore';
import { useState } from 'react';

import classname from 'classnames/bind';
import css from './Gds.module.scss';
const cx = classname.bind(css);

import Btn from '@/components/common/Btn/Btn.module';
import Ptxt from '@/components/common/Ptxt/Ptxt.module';
import OptSlt from '@/components/common/OptSlt/OptSlt.module';
import Tabs from '@/components/common/Tabs/Tabs.module';
import Onf from '@/components/common/Onf/Onf.module';
import Qty from '@/components/common/Qty/Qty.module';

//layers
import LayerGds_0 from '@/pages/common/layers/LayerGds_0.jsx';
import LayerGds_1 from '@/pages/common/layers/LayerGds_1.jsx';

const GdsCont = () => {
  //layerContext 사용
  //const { openLayer } = useLayer();
  const openLayer = useLayerStore((state) => state.openLayer);

  const colorOptions = [
    { label: 'Black', subText: '12/31 출고', isOutOfStock: false },
    { label: 'White', subText: '재고 5개', isOutOfStock: false },
    { label: 'Red', subText: '', isOutOfStock: false },
    { label: 'Blue', subText: '', isOutOfStock: true }, // 품절 상태
    { label: 'Gray', subText: '', isOutOfStock: false },
  ];

  const [isTab, setIsTab] = useState(1);
  const tabInit = { id: 'sample', prefix: 'pannel_', start: isTab };
  const tabData = [
    { label: 'tab_0', content: <TabContent_0 /> },
    { label: 'tab_1', content: <TabContent_1 /> },
    { label: 'tab_2', content: '' },
    { label: 'tab_3', content: '' }, // 컴포넌트도 삽입 가능
  ];

  return (
    <>
      <div className={cx('gds-content')}>
        {/* 레이어샘플 */}
        <div className={cx('btn-set')}>
          <Btn size='sd' text='레이어 11' onClick={() => openLayer(<LayerGds_0 />)} />
          <Btn size='sd' text='레이어 22' onClick={() => openLayer(<LayerGds_1 title='두번째레이어' />)} />
          <Btn size='sd' text='레이어 33' onClick={() => openLayer(<LayerGds_1 title='변수바꿈' />)} />
        </div>
        {/* 인풋샘플 */}
        <ul className={cx('inp-set')}>
          <li>
            <Ptxt type='text' id='gds-inp_0' classNm='gds-inp' label='이름' labelHidden={true} val='홍길동' max={15} place='이름을 입력하세요' del={true} />
          </li>
          <li>
            <Ptxt type='text' id='gds-inp_1' classNm='gds-inp' label='핸드폰' labelHidden={true} max={20} place='핸드폰 번호를 입력하세요' mode='tel' del={true} />
          </li>
          <li>
            <Ptxt type='text' id='gds-inp_2' classNm='gds-inp' label='전화번호' place='전화번호릏 입력하세요' mode='tel' del={true} />
          </li>
          <li>
            <Ptxt type='password' id='gds-inp_3' classNm='gds-inp' size='sd' label='비밀번호' place='비밀번호릏 입력하세요' mode='password' del={true} />
          </li>
          <li>
            <Ptxt type='text' id='gds-inp_4' classNm='gds-inp' label='메시지' labelHidden={true} max={15} place='메시지을 입력하세요' del={true} dis='disabled' />
          </li>
        </ul>
        {/* 옵션레이어 샘플 */}
        <ul className={cx('inp-set')}>
          <li>
            <OptSlt id='color_opt_0' options={colorOptions} select={1} lyrSpeed={0.2} />
          </li>
        </ul>
        {/* 탭 샘플 */}
        <ul className={cx('inp-set')}>
          <li>
            <Tabs id={tabInit.id} tabs={tabData} classNm='gtTabs' classBt='btn ln' start={tabInit.start} panelPrefix={tabInit.prefix} onTabChange={(idx) => setIsTab(idx)} />
          </li>
          <li>
            {tabData.map((tab, idx) => (
              <div
                key={`${tabInit.id}-panel-${idx}`}
                id={`${tabInit.prefix}${idx}`}
                role='tabpanel'
                aria-labelledby={`${tabInit.id}_${idx}`}
                hidden={tabInit.start !== idx}
                className={cx('panel', { active: tabInit.start === idx })}>
                {tab.content}
              </div>
            ))}
          </li>
        </ul>
        {/* 토글버튼 샘플 */}
        <ul className={cx('inp-set')}>
          <li>
            <Onf classNm='gds-onf' label='onf 버튼 01' />
          </li>
          <li>
            <Onf classNm='gds-onf' label='onf 버튼 22' disabled={true} />
          </li>
        </ul>
        {/* Quantity */}
        <ul className={cx('inp-set')}>
          <li>
            <Qty size='sd' classNm='gds-qty' val={1} min={1} max={6} />
          </li>
          <li>
            <Qty classNm='gds-qty' val={2} min={0} max={10} />
          </li>
          <li>
            <Qty classNm='gds-qty' val={2} min={0} max={10} disabled={true} />
          </li>
        </ul>
      </div>
    </>
  );
};

const TabContent_0 = () => {
  return (
    <>
      <h3>tab_0 내용 타이틀</h3>
      <div>
        내용 타이틀내용 타이틀내용 타이틀내용 타이틀내용 타이틀
        <br />
        내용 타이틀내용 타내용 타이틀내용 타이틀
        <br />
        내용 타이틀내용 타이틀내용타이틀내용 타이틀
        <br />
        내용 타이틀내용 타이틀내용 타
        <br />
      </div>
    </>
  );
};

const TabContent_1 = () => {
  return (
    <>
      <h3>tab_1 내용 타이틀</h3>
      <div>
        내용 타이틀내용 타이틀내용 타이틀내용
        <br />
        내용 타이틀내용 타이틀내용 타이틀 타이틀내용 타이틀
      </div>
    </>
  );
};

export default GdsCont;
