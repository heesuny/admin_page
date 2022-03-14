import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';


class notice_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="사이트 관리" sub={[['공지사항','/notice_list'],['팝업 관리','/popup_list'],['문구 관리','/text_write']]} active="0"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>공지사항</h2>
            <div className="list_wrap">
              <div className="data_search_02">
                <div className="search_wrap">
                  <div className="search_day">
                    <div className="start_day"><input type="date" name="" id="" /></div>
                    <span>~</span>
                    <div className="end_day"><input type="date" name="" id="" /></div>
                  </div>
                  <div className="search_select">
                    <select name="" id="">
                      <option value="">카테고리</option>
                      <option value="">카테고리2</option>
                      <option value="">카테고리3</option>
                    </select>
                  </div>
                  <button type='button' className='btn blue'>Search</button>
                </div>
                <div className="option_wrap">
                  <p className="total_data">Total : 14 Count (1/1)Page</p>
                  <div className="option_btns">
                    <button className="btn white"><img src={require('../img/icon_delete.svg').default} alt="" /> 선택삭제</button>
                    <button type='button' className='btn blue'>등록</button>
                  </div>
                </div>
              </div>
              <div className="list_table">
                <table>
                  <colgroup>
                    <col style={{width:'80px'}}/>
                    <col style={{width:'100px'}} />
                    <col style={{width:'100px'}} />
                    <col style={{width:'200px'}} />
                    <col style={{width:'auto'}} />
                    <col style={{width:'220px'}} />
                    <col style={{width:'140px'}} />
                    <col style={{width:'140px'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>No</th>
                      <th>상시</th>
                      <th>카테고리</th>
                      <th>제목</th>
                      <th>등록일</th>
                      <th>게시자</th>
                      <th>조회수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                   
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>1</td>
                      <td>Y</td>
                      <td>공지</td>
                      <td>일별 시세 제공 서비스 일시중단 안내</td>
                      <td>2022-01-29 11:00:00</td>
                      <td>김**</td>
                      <td>100</td>
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

export default notice_list;