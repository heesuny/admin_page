import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class lp_creat extends Component {
  render() {
    return (
      <div className='contain__wrap'>
      <Leftnav name="토큰관리" sub={[['분배 정책','/distribution_list'],['토큰 관리','/token_list'],['LP풀 관리','/lppull_list'],['LP풀 APR(%) 관리','/lpapr_list'],['LP풀 생성','/lp_creat']]} active="4"></Leftnav>
      <div className='contents'>
        <div className="create_lp">
          <div className="lp_inner">
            <div className="lp_header">
              <p className="title">Create a pair</p>
              <button><img src={require('../img/icon_reload.svg').default} alt="" /></button>
            </div>
            <div className="lp_content">
              <div className="lp_item">
                <p className="item_number">Balance 0.000000</p>
                <div className="select_item">
                  <div className="select_wrap">
                    <div className="selected">
                      <img src={require('../img/logo_ex.png').default} alt="" />
                      <span>USDT</span>
                    </div>
                  </div>
                  <input type="text" placeholder='0.0' />
                  <button className="max">MAX</button>
                </div>
              </div>
              <div className="lp_item">
                <p className="item_number">Balance 0.000000</p>
                <div className="select_item">
                  <div className="select_wrap">
                    <div className="selected">
                      <img src={require('../img/logo_ex.png').default} alt="" />
                      <span>USDT</span>
                    </div>
                  </div>
                  <input type="text" placeholder='0.0' />
                  <button className="max">MAX</button>
                </div>
              </div>
              <div className="complet_wrap">
                <div className="complet_item">
                  <p className="title">페어명</p>
                  <p className="result">AKD + AKG</p>
                </div>
                <div className="complet_item">
                  <p className="title">페어 심볼명</p>
                  <p className="result">AKD/AKG</p>
                </div>
                <div className="complet_item">
                  <p className="title">초기 교환 비율</p>
                  <p className="result">1 AKD = 1 AKG</p>
                </div>
                <div className="complet_item">
                  <p className="title">수수료</p>
                  <p className="result">0.000000 AKD</p>
                </div>
              </div>
            </div>
            <div className="lp_bottom">
              <button className="amount">Enter an amount</button>
              <button className="approve">Approve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default lp_creat;