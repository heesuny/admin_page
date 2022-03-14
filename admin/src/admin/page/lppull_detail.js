import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';

class lppull_list extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="토큰관리" sub={[['분배 정책','/distribution_list'],['토큰 관리','/token_list'],['LP풀 관리','/lppull_list'],['LP풀 APR(%) 관리','/lpapr_list'],['LP풀 생성','/lp_creat']]} active="2"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>LP 풀 관리</h2>
            <div className='write_wrap'>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt className='req'>언어선택</dt>
                  <dd>
                    <select name="" id="">
                      <option value="">한국어</option>
                      <option value="">영어</option>
                    </select>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt className='req'>이미지</dt>
                  <dd>
                    <label className='file_custom'>
                      <input type="file" name="" id="" />
                      <span>선택된파일없음<i>파일선택</i></span>
                    </label>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1'>
                  <dt>팝업 URL</dt>
                  <dd>
                    <input type="text" />
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1'>
                  <dt className='req'>타이틀</dt>
                  <dd>
                    <input type="text" />
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt className='req'>노출 여부</dt>
                  <dd>
                    <label className='radio_wrap'>
                      <input type="radio" name="" id="" />
                      <span>상시</span>
                    </label>
                    <label className='radio_wrap'>
                      <input type="radio" name="" id="" />
                      <span>노출안함</span>
                    </label>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt>노출 순위</dt>
                  <dd>
                    <div className="text_type_01">
                      <input type="text" />
                      순위
                    </div>
                    <p className="info_text">*낮은 순위가 먼저 나오며, 순위가 같을 경우 최근 등록한 순으로 노출</p>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt>노출 위치</dt>
                  <dd>
                    <div className='position_text'>
                      <p className='title'>왼쪽으로부터</p>
                      <div className="text_type_01">
                        <input type="text" />
                        Px
                      </div>
                    </div>
                    <div className='position_text'>
                      <p className='title'>위쪽으로부터</p>
                      <div className="text_type_01">
                        <input type="text" />
                        Px
                      </div>
                    </div>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt>노출 기간</dt>
                  <dd>
                    <div className="search_day">
                      <div className="start_day"><input type="date" name="" id="" /></div>
                      <span>~</span>
                      <div className="end_day"><input type="date" name="" id="" /></div>
                    </div>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt className='req'>상시 게재</dt>
                  <dd>
                    <label className='radio_wrap'>
                      <input type="radio" name="" id="" />
                      <span>하루동안 열리지 않음</span>
                    </label>
                    <label className='radio_wrap'>
                      <input type="radio" name="" id="" />
                      <span>다시는 열지 않음</span>
                    </label>
                    <label className='radio_wrap'>
                      <input type="radio" name="" id="" />
                      <span>사용하지 않음</span>
                    </label>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt className='req'>상시 게재</dt>
                  <dd>
                    <input type="text" value={'2021-03-07'} disabled />
                  </dd>
                </dl>
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

export default lppull_list;