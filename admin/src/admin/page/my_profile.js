import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class my_profile extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="운영설정" sub={[['관리자 계정관리','/admin_list'],['내 프로필','/my_profile']]} active="1"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>내 프로필 &gt; <span>i0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0</span></h2>
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
                    <th>관리자 아이디</th>
                    <td>0x564DaF7EBD1742Cedc3ECeE1B2b949eCBE35Dbe0</td>
                    <th>연결지갑</th>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th>관리자 이름</th>
                    <td>MetaMask</td>
                    <th>지갑주소</th>
                    <td>+102.12%</td>
                  </tr>
                  <tr>
                    <th>비밀번호</th>
                    <td>2022-01-22 14:22:22</td>
                    <th>사용자 그룹</th>
                    <td>186 QTBK</td>
                  </tr>
                  <tr>
                    <th>비밀번호 재입력</th>
                    <td>260.000</td>
                    <th>?</th>
                    <td>186 QTBG</td>
                  </tr>
                  <tr>
                    <th>휴대폰 번호</th>
                    <td>260.000</td>
                    <th>사용 여부</th>
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

export default my_profile;