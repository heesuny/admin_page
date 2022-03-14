import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class dashbord extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="대시보드" sub={[['QUANTFI 전체','acsc'],['QUANTFI 수익현황','acsc']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="dashbord">
            <div className="dashbord_line item_04">
              <div className="items center_type">
                <p className="title">회원수</p>
                <p className="total_num">3,00033</p>
                <ul>
                  <li>현재 : 1,000 </li>
                  <li>탈퇴 : 124</li>
                </ul>
              </div>
              <div className="items center_type">
              <p className="title">금일 방문자수</p>
                <p className="total_num">3,000</p>
                <ul>
                  <li>전주대비 10.26% </li>
                </ul>
              </div>
              <div className="items center_type">
              <p className="title">누적 AKD 누적 총금액</p>
                <p className="total_num">3,000 AKD</p>
                <ul>
                  <li>전일대비 200 AKD</li>
                </ul>
              </div>
              <div className="items center_type">
              <p className="title">AKG 누적 총금액</p>
                <p className="total_num">3,000 AKG</p>
                <ul>
                  <li>전일대비 200AKG</li>
                </ul>
              </div>
            </div>
            <div className="dashbord_line item_01">
              <div className="items"></div>
            </div>
            <div className="dashbord_line item_01">
              <div className="items"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default dashbord;