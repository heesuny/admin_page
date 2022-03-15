import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class Dashbord_fee extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="대시보드" sub={[['QUANTFI 전체','/dashbord'],['QUANTFI 수익현황','/dashbord_fee']]} active="1"></Leftnav>
        <div className='contents'>
          <div className="dashbord">
            <div className="dashbord_line bottom_big">
              <div className="items center_type item_02">
                <p className="title">Total Fee on Quantfi (수수료 수익)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items center_type item_02">
                <p className="title">Total TXID on Quantfi</p>
                <p className="total_num">51,113</p>
  
              </div>
            </div>
            <div className="dashbord_line">
              <div className="items horizon_type item_02">
                <p className="title">Total Swap Fee Volume(24h)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items horizon_type item_02">
                <p className="title">Total Swap TXID</p>
                <p className="total_num">$19,351,113</p>
              </div>
            </div>
            <div className="dashbord_line">
              <div className="items horizon_type item_02">
                <p className="title">Total Swap Fee Volume(24h)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items horizon_type item_02">
                <p className="title">Total Swap TXID</p>
                <p className="total_num">$19,351,113</p>
              </div>
            </div>
            <div className="dashbord_line">
              <div className="items horizon_type item_02">
                <p className="title">Total Swap Fee Volume(24h)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items horizon_type item_02">
                <p className="title">Total Swap TXID</p>
                <p className="total_num">$19,351,113</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashbord_fee;