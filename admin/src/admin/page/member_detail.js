import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';


class Member_detail extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="회원관리" sub={[['회원 목록','/member_list']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>회원정보 확인 &gt; <span>i0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0 </span></h2>
            <div className="detail_data">
              <table>
                <colgroup>
                  <col style={{width:"190px"}} />
                  <col style={{width:"523px"}} />
                  <col style={{width:"190px"}} />
                  <col style={{width:"523px"}} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>지갑주소</th>
                    <td>0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0</td>
                    <th>거래횟수</th>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>계정지갑</th>
                    <td>MetaMask</td>
                    <th>수익률</th>
                    <td>+102.12%</td>
                  </tr>
                  <tr>
                    <th>가입일</th>
                    <td>2022-01-22 14:22:22</td>
                    <th>보유 QTBK</th>
                    <td>186 QTBK</td>
                  </tr>
                  <tr>
                    <th>예치량</th>
                    <td>260.000</td>
                    <th>보유 QTBG</th>
                    <td>186 QTBG</td>
                  </tr>
                  <tr>
                    <th>출금량</th>
                    <td>260.000</td>
                    <th>계정 활성</th>
                    <td>
                      <div className='vc-toggle-container'>
                        <label className='vc-small-switch'>
                          <input type="checkbox" className='vc-switch-input' />
                          <span className='vc-switch-label' data-on="on" data-off="off"></span>
                          <span className='vc-switch-handle'></span>
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="btn_wrap right">
              <button type='button' className='btn blue save'>저장</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member_detail;