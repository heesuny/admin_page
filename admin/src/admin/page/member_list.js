import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class Member_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="회원관리" sub={[['회원 목록','/member_list']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>회원목록</h2>
            <div className="list_wrap">
              <div className="data_search">
                <p className="total_data">Total : 14 Count (1/1)Page</p>
                <div className="search_wrap">
                  <div className="search_day">
                    <div className="start_day"><input type="date" name="" id="" /></div>
                    <span>~</span>
                    <div className="end_day"><input type="date" name="" id="" /></div>
                  </div>
                  <div className="search_text">
                    <input type="text" name="" id="" placeholder='검색' />
                    <button type="button" className='btn_search'><img src={require('../img/icon_search.svg').default} alt="" /></button>
                  </div>
                  <button type='button' className='btn blue excel_down'>EXCEL</button>
                </div>
              </div>
              <div className="list_table">
                <table>
                  <colgroup>
                    <col style={{width:'70px'}}/>
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'90px;'}}/>
                    <col style={{width:'160px'}} />
                    <col style={{width:'160px'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>ETH 지갑주소</th>
                      <th>KLAY 지갑주소</th>
                      <th>예치량</th>
                      <th>출금량</th>
                      <th>보유 QTBK</th>
                      <th>보유 QTBG</th>
                      <th>보유 QTBD</th>
                      <th>회원상태</th>
                      <th>마지막 로그인</th>
                      <th>가입일</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>0x8...F7F8</td>
                      <td>0x8...F7F8</td>
                      <td>55,506,091</td>
                      <td>55,506,091</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>0.0312345678</td>
                      <td>활성</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pageing">
                <p className="prev_btn"><button type='button'><img src={require('../img/icon_arrow_l.svg').default} alt="이전" /></button></p>
                <ul>
                  <li><button type='button' className='active'>1</button></li>
                  <li><button type='button'>2</button></li>
                  <li><button type='button'>3</button></li>
                </ul>
                <p className="next_btn"><button type='button'><img src={require('../img/icon_arrow_r.svg').default} alt="다음" /></button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member_list;