import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class Dashbord extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="대시보드" sub={[['QUANTFI 전체','/dashbord'],['QUANTFI 수익현황','/dashbord_fee']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="dashbord">
            <div className="dashbord_line bottom_big">
              <div className="items center_type item_01">
                <p className="title">Total Volume (24h)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items center_type item_01">
                <p className="title">Total In (24h)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items center_type item_01">
                <p className="title">Total Out (24h)</p>
                <p className="total_num">$19,351,113</p>
              </div>
              <div className="items center_type item_01">
                <p className="title">Total Txns</p>
                <p className="total_num">$19,351,113</p>
              </div>
            </div>
            <div className="dashbord_line">
              <div className="items item_03 graph_type">
                <p className="title">TVL on Quantfi</p>
                <p className="total_num">$19,351,113</p>
                <div className="graph_wrap">
                  그래프 영역
                </div>
              </div>
              <div className="items item_01 tokens">
                <p className="title">Tokens</p>
                <table>
                <colgroup>
                  <col  style={{width:'50%'}} />
                  <col  style={{width:'50%'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th>토큰명</th>
                    <th>토큰 갯수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='token_name'>
                        <img src={require('../img/logo_ex.png')} alt="" /> <span>QTBK</span>
                      </div>
                    </td>
                    <td>100</td>
                  </tr>
                  <tr>
                  <td>
                      <div className='token_name'>
                        <img src={require('../img/logo_ex.png')} alt="" /> <span>QTBK</span>
                      </div>
                    </td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashbord;