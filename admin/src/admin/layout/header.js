import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__inner'>
          <h1 className="logo"><Link to="/dashbord">QUANTFI ADMIN</Link></h1>
          <div className="menu__wrap">
            <div className='menu_btn'>
              <button className="mymenu">General admin</button>
              <button className="mywallet">Connect  Wallet</button>
              <button className="gnbbtn"><img src={require('../img/icon_menu.svg').default} alt="" /></button>
            </div>
            <div className="gemeral_wrap">
              <p className="my_info">
                ioimmoj
                <button>상세보기</button>
              </p>
              <ul>
                <li><Link to="">PW 변경</Link></li>
                <li><Link to="">로그아웃</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="gnb">
          <div className="gnb_inner">
            <div className="gnb_line">
              <div className="gnb_item">
                <p className="gnb_title">대시보드</p>
                <ul>
                  <li><Link to="/">QuantFi 전체</Link></li>
                  <li><Link to="/">QuantFi 수익현황</Link></li>
                </ul>
              </div>
            </div>
            <div className="gnb_line">
              <div className="gnb_item">
                <p className="gnb_title">사이트 관리</p>
                <ul>
                  <li><Link to="/">배너 관리</Link></li>
                  <li><Link to="/">팝업 관리</Link></li>
                  <li><Link to="/">문구 관리</Link></li>
                </ul>
              </div>
              <div className="gnb_item">
                <p className="gnb_title">회원관리</p>
                <ul>
                  <li><Link to="/">회원 목록</Link></li>
                </ul>
              </div>
            </div>
            <div className="gnb_line">
              <div className="gnb_item">
                <p className="gnb_title">토큰관리</p>
                <ul>
                  <li><Link to="/">분배정책</Link></li>
                  <li><Link to="/">토큰 관리</Link></li>
                  <li><Link to="/">LP풀 관리</Link></li>
                  <li><Link to="/">LP풀 APR 관리</Link></li>
                  <li><Link to="/">LP풀 생성</Link></li>
                </ul>
              </div>
              <div className="gnb_item">
                <p className="gnb_title">자산관리</p>
                <ul>
                  <li><Link to="/">스왑 관리</Link></li>
                  <li><Link to="/">패널티 관리</Link></li>
                  <li><Link to="/">입/출금 관리</Link></li>
                </ul>
              </div>
            </div>
            <div className="gnb_line">
              <div className="gnb_item">
                <p className="gnb_title">데이터관리</p>
                <ul>
                  <li><Link to="/">예치 &amp; 출금 데이터</Link></li>
                  <li><Link to="/">입금 &amp; 출금 전송내역</Link></li>
                  <li><Link to="/">지갑 연결내역</Link></li>
                  <li><Link to="/">거버넌스 토큰발행-유통</Link></li>
                  <li><Link to="/">클레이튼 네트워크 이벤트 로그</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
} 

export default header;