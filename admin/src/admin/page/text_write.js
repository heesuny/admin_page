import React, { Component } from 'react';
import Leftnav from '../layout/leftnav';


class text_write extends Component {
  render() {
    return (
      <div className='contain__wrap'>
        <Leftnav name="사이트 관리" sub={[['공지사항','/notice_list'],['팝업 관리','/popup_list'],['문구 관리','/text_write']]} active="2"></Leftnav>
        <div className='contents'>
          <div className="content_inner">
            <h2 className='header_title'>문구 관리</h2>
            <div className='write_wrap'>
              
              <div className='write_line'>
                <dl className='item_1'>
                  <dt className='req'>메인 슬로건</dt>
                  <dd>
                    <input type="text" />
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1'>
                  <dt className='req'>중단 문구</dt>
                  <dd>
                    <input type="text" />
                  </dd>
                </dl>
              </div>
              <div className='write_line'>
                <dl className='item_1 top'>
                  <dt className='req'>푸터 정보 입력</dt>
                  <dd>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
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

export default text_write;