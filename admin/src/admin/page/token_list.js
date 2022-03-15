import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class Token_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
      <Leftnav name="토큰관리" sub={[['분배 정책','/distribution_list'],['토큰 관리','/token_list'],['LP풀 관리','/lppull_list'],['LP풀 APR(%) 관리','/lpapr_list'],['LP풀 생성','/lp_creat']]} active="1"></Leftnav>
      <div className='contents'>
        <div className="content_inner">
          <h2 className='header_title'>토큰 관리</h2>
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
                  <col style={{width:'200px'}} />
                  <col style={{width:'130px'}} />
                  <col style={{width:'auto'}} />
                  <col style={{width:'130px'}} />
                  <col style={{width:'130px'}} />
                  <col style={{width:'130px'}} />
                  <col style={{width:'130px'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th className='center'><input type="checkbox" name="" id="" /></th>
                    <th>토큰명</th>
                    <th>심볼</th>
                    <th>입금 지갑주소</th>
                    <th>총 수량</th>
                    <th>분배 수량</th>
                    <th>잔여 수량</th>
                    <th>사용여부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='center'><input type="checkbox" name="" id="" /></td>
                    <td><p className='token_name'><img src={require('../img/logo_qtbk 1.png').default} alt="" /> <span>퀀트북</span></p></td>
                    <td>QTBK</td>
                    <td><a href="#">0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...</a></td>
                    <td>264,321</td>
                    <td>155,506</td>
                    <td>155,506</td>
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
                  <tr>
                    <td className='center'><input type="checkbox" name="" id="" /></td>
                    <td><p className='token_name'><img src={require('../img/logo_qtbk 1.png').default} alt="" /> <span>퀀트북</span></p></td>
                    <td>QTBK</td>
                    <td><a href="#">0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...</a></td>
                    <td>264,321</td>
                    <td>155,506</td>
                    <td>155,506</td>
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
                  <tr>
                    <td className='center'><input type="checkbox" name="" id="" /></td>
                    <td><p className='token_name'><img src={require('../img/qtbg_s 1.png').default} alt="" /> <span>퀀트북</span></p></td>
                    <td>QTBK</td>
                    <td><a href="#">0x7b24e052c138df127ab26a8bd5182ba913d9f7d0dd8a71...</a></td>
                    <td>264,321</td>
                    <td>155,506</td>
                    <td>155,506</td>
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

          <div className="popup_wrap">
            <div className="popup_content">
              <p className="popup_title">토큰 등록</p>
              <div className="popup_form">
                <table>
                  <colgroup>
                    <col style={{width:'120px'}} />
                    <col style={{width:'320px'}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>LP 페어</th>
                      <td><input type="text" value={"QTBK Pair"} disabled /></td>
                    </tr>
                    <tr>
                      <th>컨트랙트</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>토큰명 (한글)</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>토큰명 (영문)</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>소수 자릿수</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>심볼</th>
                      <td>
                        <label className="simbol_file">
                          <input type="file" name="" id="" />
                          <span>이미지를 추가해주세요.</span>
                          <i>선택</i>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="popup_footer">
                <div className="btn_wrap center">
                  <button type='button' className='btn gray'>취소</button>
                  <button type='button' className='btn blue'>확인</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  }
}

export default Token_list;