//import { useLayer } from '@/contexts/layerContext';
import { useLayerStore } from '@/stores/useLayerStore';
import { useState } from 'react';

import classname from 'classnames/bind';
import scss from './Gds.module.scss';
const cx = classname.bind(scss);

//layers
import LayerGds_0 from '@/pages/common/layers/LayerGds_0.jsx';
import LayerGds_1 from '@/pages/common/layers/LayerGds_1.jsx';

import Btn from '@/components/common/Btn/Btn.module';
import Ptxt from '@/components/common/Ptxt/Ptxt.module';
import OptSlt from '@/components/common/OptSlt/OptSlt.module';
import Tabs from '@/components/common/Tabs/Tabs.module';
import Onf from '@/components/common/Onf/Onf.module';
import Qty from '@/components/common/Qty/Qty.module';
import Tip from '@/components/common/Tip/Tip.module';
import Chk from '@/components/common/Chk/Chk.module';
import RdoList from '@/components/common/RdoList/RdoList.module';
import Slt from '@/components/common/Slt/Slt.module';
import Txta from '@/components/common/Txta/Txta.module';
import NtcLst from '@/components/common/NtcLst/NtcLst.module';

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
  const rdoData = [
    { id: 'rdo_0', label: '라디오' },
    { id: 'rdo_1', label: 'checked', checked: true },
  ];
  const rdoData2 = [
    { id: 'rdo_2', label: 'disabled', disabled: true },
    { id: 'rdo_3', label: 'checked disabled', checked: true, disabled: true },
  ];
  const sltData = [
    { id: 's_0', value: 'apple', text: '사과' },
    { id: 's_1', value: 'banana', text: '바나나' },
    { id: 's_2', value: 'orange', text: '오렌지' },
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
            <Ptxt type='text' id='gds-inp_2' classNm='gds-inp' label='내부 label' place='전화번호릏 입력하세요' mode='tel' del={true} />
          </li>
          <li>
            <label htmlFor='gds-inp_3' className={cx('gds-inp_label')}>
              외부 label
            </label>
            <Ptxt type='password' id='gds-inp_3' classNm='gds-inp' size='sd' place='비밀번호릏 입력하세요' mode='password' del={true} />
          </li>
          <li>
            <label htmlFor='gds-inp_4' className={cx('gds-inp_label')}>
              외부 label
            </label>
            <Ptxt type='text' id='gds-inp_4' classNm='gds-inp' labelHidden={true} max={15} place='메시지을 입력하세요' del={true} dis='disabled' />
          </li>
        </ul>
        <ul className={cx('inp-set')}>
          <li>
            <Txta classNm='gd-txta' name='txta' id='txta_0' max={1000} place='최소 10자 이상 입력해 주세요.' />
          </li>
        </ul>
        {/* 옵션레이어 샘플 */}
        <ul className={cx('inp-set')}>
          <li>
            <OptSlt id='color_opt_0' options={colorOptions} classNm='gds-opt' select={1} lyrSpeed={0.2} />
          </li>
        </ul>
        {/* 셀렉트박스 */}
        <ul className={cx('inp-set')}>
          <li>
            <Slt id='slt_0' sltData={sltData} classNm='gds-slt' label='선택' place='placeholder - 선택하세요' />
          </li>
          <li>
            <label htmlFor='slt_1' className={cx('gds-inp_label')}>
              외부 label
            </label>
            <Slt id='slt_1' sltData={sltData} classNm='gds-slt' size='sd' place='placeholder - 선택하세요' />
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
            <Onf classNm='gds-onf' disabled={true} />
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
        {/* 툴팁 */}
        <ul className={cx('inp-set')}>
          <li>
            <Tip classNm='gds-tip' title='툴팁타이틀'>
              <div className='gd-tip'>
                <span>
                  툴팁내용툴팁내용툴팁내용툴팁내용툴팁
                  <br />
                  내용툴팁내용툴팁내용툴팁내용툴팁
                </span>
              </div>
            </Tip>
          </li>
        </ul>
        {/* Checkbox */}
        <ul className={cx('inp-set')}>
          <li>
            <div className={cx('chk-set')}>
              <Chk label='체크박스' classNm='gds-ck' size='sd' />
              <Chk label='checked' checked={true} />
              <Chk label='disabled' disabled={true} />
              <Chk label='checked disabled' checked={true} disabled={true} />
              <Chk />
            </div>
          </li>
        </ul>
        {/* RadioGroup */}
        <ul className={cx('inp-set')}>
          <li>
            <div className={cx('chk-set')}>
              <RdoList rdoData={rdoData} name='gds-rdo' classNm='rdo-group' />
              <RdoList rdoData={rdoData2} name='gds-rdo2' />
            </div>
          </li>
        </ul>
        {/* Notice */}
        <ul className={cx('inp-set')}>
          <li>
            <NtcLst classNm='gd-ntc' title='카드혜택 안내사항'>
              <span>일부상품은 청구할인 및 무이자할부가 적용되지 않으며, 적용상품과 미적용 상품을 함께 구매 시 해당 카드혜택은 적용되지 않습니다.</span>
              <span>일부 카드(법인/선불/기프트카드 등)은 카드혜택 적용이 제외될 수 있습니다.</span>
              <span>청구할인 예상금액은 일 최대 청구할인 한도에 따라 달라질 수 있습니다.</span>
              <span>무이자할부의 경우 최종 결제금액이 기준금액 미만이거나, 그 외 무이자할부가 되지 않는 기타</span>
              <span>신용카드로 결제하시는 경우 일반할부로 결제되오니 반드시 참고하시기 바랍니다.</span>
            </NtcLst>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
