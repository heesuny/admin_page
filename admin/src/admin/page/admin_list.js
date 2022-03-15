import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';
 
class Admin_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="운영설정" sub={[['관리자 계정관리','/admin_list'],['내 프로필','/my_profile']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>회원목록</h2>
            <div className="list_wrap">
            <div className="data_search_02">
              <div className="option_wrap">
              <button className="btn white"><img src={require('../img/icon_delete.svg').default} alt="" /> 선택삭제</button>
                <div className="option_btns">
                  <div className="search_select">
                    <select name="" id="">
                      <option value="">카테고리</option>
                      <option value="">카테고리2</option>
                      <option value="">카테고리3</option>
                    </select>
                  </div>
                  <div className="search_text">
                    <input type="text" name="" id="" placeholder='검색' />
                    <button type="button" className='btn_search'><img src={require('../img/icon_search.svg').default} alt="" /></button>
                  </div>
                  <button type='button' className='btn blue'>등록</button>
                </div>
              </div>
            </div>
              <div className="list_table">
                <table>
                  <colgroup>
                    <col style={{width:'80px'}}/>
                    <col style={{width:'80px'}}/>
                    <col style={{width:'110px'}} />
                    <col style={{width:'190px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'190px'}} />
                    <col style={{width:'190px'}} />
                    <col style={{width:'190px'}} />
                    <col style={{width:'120px'}} />
                    <col style={{width:'100px;'}}/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>No</th>
                      <th>관리자 ID</th>
                      <th>관리자 PW</th>
                      <th>관리자 이름</th>
                      <th>등록일</th>
                      <th>수정일</th>
                      <th>연락처</th>
                      <th>그룹명</th>
                      <th>사용여부</th> 
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>ioimmoj</td>
                      <td>X@5YfD4p5hzKxq!</td>
                      <td>김둘리</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>010-0000-0000</td>
                      <td>최고관리자</td>
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
            
          </div>

          <div className="popup_wrap">
            <div className="popup_content">
              <p className="popup_title">관리자 계정 등록</p>
              <div className="popup_form">
                <table>
                  <colgroup>
                    <col style={{width:'120px'}} />
                    <col style={{width:'320px'}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>관리자 ID</th>
                      <td><input type="text" value={"QTBK Pair"} disabled /></td>
                    </tr>
                    <tr>
                      <th>비밀번호*</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>비밀번호 재확인*</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>연락처*</th>
                      <td><input type="text" /></td>
                    </tr>
                    <tr>
                      <th>사용자 그룹*</th>
                      <td>
                        <select name="" id="">
                          <option value="">선택</option>
                          <option value="">최고관리자</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <th>사용여부</th>
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
    );
  }
}

export default Admin_list;