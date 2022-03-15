import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class Lppull_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="토큰관리" sub={[['분배 정책','/distribution_list'],['토큰 관리','/token_list'],['LP풀 관리','/lppull_list'],['LP풀 APR(%) 관리','/lpapr_list'],['LP풀 생성','/lp_creat']]} active="2"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>LP 풀 관리</h2>
            <div className="list_wrap">
              <div className="data_search_02">
                <div className="option_wrap">
                <button className="btn white"><img src={require('../img/icon_delete.svg').default} alt="" /> 선택삭제</button>
                  <div className="option_btns">
                    <div className="search_text">
                      <input type="text" name="" id="" placeholder='검색' />
                      <button type="button" className='btn_search'><img src={require('../img/icon_search.svg').default} alt="" /></button>
                    </div>
                    <button type='button' className='btn blue'>등록</button>
                  </div>
                </div>
              </div>
              <div className="list_table_02">
                <table>
                  <colgroup>
                    <col style={{width:'80px'}}/>
                    <col style={{width:'220px'}} />
                    <col style={{width:'220px'}} />
                    <col style={{width:'220px'}} />
                    <col style={{width:'220px'}} />
                    <col style={{width:'220px'}} />
                    <col style={{width:'220px'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th className='center'><input type="checkbox" name="" id="" /></th>
                      <th>토큰명</th>
                      <th>심볼</th>
                      <th>총 입금수량 (TVL)</th>
                      <th>분배 수량 (Claim)</th>
                      <th>LP 풀 상세 수량 (Locked)</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='center'><input type="checkbox" name="" id="" /></td>
                      <td><p className='token_name'><img src={require('../img/logo_qtbk 1.png').default} alt="" /> <span>퀀트북</span></p></td>
                      <td>QTBK</td>
                      <td>264,321</td>
                      <td>102.102</td>
                      <td>155,506</td>
                      <td>
                        <button className="lp_btn">LP 관리</button>
                      </td>
                    </tr>
                    <tr>
                      <td className='center'><input type="checkbox" name="" id="" /></td>
                      <td><p className='token_name'><img src={require('../img/logo_qtbk 1.png').default} alt="" /><img src={require('../img/logo_qtbk 1.png').default} alt="" /> <span>퀀트북</span></p></td>
                      <td>QTBK</td>
                      <td>264,321</td>
                      <td>102.102</td>
                      <td>155,506</td>
                      <td>
                        <button className="lp_btn">LP 관리</button>
                      </td>
                    </tr>
                    <tr>
                      <td className='center'><input type="checkbox" name="" id="" /></td>
                      <td><p className='token_name'><img src={require('../img/logo_qtbk 1.png').default} alt="" /><img src={require('../img/logo_qtbk 1.png').default} alt="" /> <span>퀀트북</span></p></td>
                      <td>QTBK</td>
                      <td>264,321</td>
                      <td>102.102</td>
                      <td>155,506</td>
                      <td>
                        <button className="lp_btn">LP 관리</button>
                      </td>
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

export default Lppull_list;