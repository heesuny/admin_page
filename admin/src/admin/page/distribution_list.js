import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class distribution_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="토큰관리" sub={[['분배 정책','/distribution_list'],['토큰 관리','/token_list'],['LP풀 관리','/lppull_list'],['LP풀 APR(%) 관리','/lpapr_list'],['LP풀 생성','/lp_creat']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>분배정책</h2>
            <div className="list_wrap">
              <div className="detail_data">
                <table>
                  <colgroup>
                    <col style={{width:"190px"}} />
                    <col style={{width:"320px"}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>총 발행량</th>
                      <td>3백만개 (QTBG)</td>
                    </tr>
                    <tr>
                      <th>분배 년수</th>
                      <td>4년(*매년 10%씩 수량 감소)</td>
                    </tr>
                    <tr>
                      <th>*QTBG 발행 방식</th>
                      <td>QTBK토큰 1,000개를 QuantFi에 단일예치 시, QTBG 1개 발행 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="list_table_02">
                <table>
                  <colgroup>
                    <col style={{width:'200px'}} />
                    <col style={{width:'250px'}} />
                    <col style={{width:'250px'}} />
                    <col style={{width:'250px'}} />
                    <col style={{width:'250px'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>기간</th>
                      <th>1년</th>
                      <th>2년</th>
                      <th>3년</th>
                      <th>4년</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
                    </tr>
                    <tr>
                      <td>지급 비율</td>
                      <td><input type="text" value={'40%'} /></td>
                      <td><input type="text" value={'30%'} /></td>
                      <td><input type="text" value={'20%'} /></td>
                      <td><input type="text" value={'10%'} /></td>
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
      </div>
    );
  }
}

export default distribution_list;