import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';


class notice_write extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="사이트 관리" sub={[['공지사항','/notice_list'],['팝업 관리','/popup_list'],['문구 관리','/text_write']]} active="0"></Leftnav>
        <div className='contents'>
          <div className='content_inner'>
            <h2 className='header_title'>공지사항 등록</h2>
            <div className='write_wrap'>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt>카테고리</dt>
                  <dd>
                    <select name="" id="">
                      <option value="">카테고리</option> 
                      <option value="">카테고리2</option> 
                      <option value="">카테고리3</option> 
                    </select>
                  </dd>
                </dl>
                <dl className='item_3'>
                  <dt>언어선택</dt>
                  <dd>
                    <select name="" id="">
                      <option value="">한국어</option>
                      <option value="">영어</option>
                    </select>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1'>
                  <dt>제목</dt>
                  <dd>
                    <input type="text" />
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt>내용</dt>
                  <dd>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt>첨부파일</dt>
                  <dd>
                    <label className='file_custom'>
                      <input type="file" name="" id="" />
                      <span>선택된파일없음<i>파일선택</i></span>
                    </label>
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt>작성자</dt>
                  <dd>
                    <input type="text" value={'General admin'} disabled />
                  </dd>
                </dl>
                <dl className='item_3'>
                  <dt>등록일</dt>
                  <dd>
                    <input type="text" value={'2021-03-07'} disabled />
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_3'>
                  <dt>상시 게재</dt>
                  <dd>
                    <label className='radio_wrap'>
                      <input type="radio" name="" id="" />
                      <span>상시</span>
                    </label>
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

export default notice_write;