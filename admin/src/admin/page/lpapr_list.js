import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class Lpapr_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="토큰관리" sub={[['분배 정책','/distribution_list'],['토큰 관리','/token_list'],['LP풀 관리','/lppull_list'],['LP풀 APR(%) 관리','/lpapr_list'],['LP풀 생성','/lp_creat']]} active="3"></Leftnav>
        <div className='contents'>
          <div className="apr_info">
            <div className="apr_info_inner">
              <p className="title">산정방식</p>
              <ul>
                <li>APR = ( A x B x 365) / reserveUSD</li>
                <li>A = Daily Reward Token Amount(일간 토큰 분배수량)</li>
                <li>B = Reward Token Price(보상토큰 가격)</li>
                <li>reserveUSD = Total Value(Lp Pool) Locked</li>
              </ul>
            </div>
          </div>
          <div className="content_inner">
            <h2 className='header_title'>LP 풀 APR 관리</h2>
            <div className="list_wrap">
              
              <div className="list_table_02 apr">
                <p className="list_title">LP Pool (Single- side) : QTBK</p>
                <table>
                  <colgroup>
                    <col style={{width:'34%'}}/>
                    <col style={{width:'33%'}} />
                    <col style={{width:'33%'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>QTBK 예치된 총 수량</th>
                      <th>환산 가치 <span className='toggle_info' data-text="QTBK 예치된 총 수량 * 코인원 최근 QTBK 체결액"><img src={require('../img/icon_info.svg').default} alt=""  /></span></th>
                      <th>APR <span className='toggle_info' data-text="토큰 가격 * 1일 분배 수량*365/TVL * 100%"><img src={require('../img/icon_info.svg').default} alt="" /></span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="text" value={'123,456,000'} /></td>
                      <td><input type="text" value={'000,000,000'} /></td>
                      <td><input type="text" value={'10,000%%'} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="list_table_02 apr">
                <p className="list_title">LP Pool (Pair) : QTBK+KUSDT</p>
                <table>
                  <colgroup>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'25%'}}/>
                    <col style={{width:'25%'}}/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>QTBK 예치된 총 수량</th>
                      <th>KUSDT 예치된 총 수량</th>
                      <th>환산 가치 <span className='toggle_info' data-text="QTBK 예치된 총 수량 * 코인원 최근 QTBK 체결액 
                        + KUSDT 예치된 총 수량 * 오라클 가격"><img src={require('../img/icon_info.svg').default} alt=""  /></span></th>
                      <th>APR <span className='toggle_info' data-text="QTBK(토큰 가격) + USDT(토큰가격) 
                       * 일간 토큰 분배 수량 * 365/TVL * 100%"><img src={require('../img/icon_info.svg').default} alt="" /></span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="text" value={'123,456,000'} /></td>
                      <td><input type="text" value={'123,456,000'} /></td>
                      <td><input type="text" value={'000,000,000'} /></td>
                      <td><input type="text" value={'1 week '} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default Lpapr_list;