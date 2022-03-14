import React, { useState, useEffect } from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Header from "./admin/layout/header";
import "../src/admin/css/admin.css";
import Dashbord from "./admin/page/dashbord";
import Member_list from "./admin/page/member_list";
import Member_detail from "./admin/page/member_detail";
import Notice_list from "./admin/page/notice_list";
import Notice_write from "./admin/page/notice_write";
import Popup_list from "./admin/page/popup_list";
import Text_write from "./admin/page/text_write";
import Popup_write from "./admin/page/popup_write";
import Distribution_list from "./admin/page/distribution_list";
import Token_list from "./admin/page/token_list";
import Lppull_list from "./admin/page/lppull_list";
import Lpapr_list from "./admin/page/lpapr_list";
import Lp_creat from "./admin/page/lp_creat";
import Admin_list from "./admin/page/admin_list";
import My_profile from "./admin/page/my_profile";
import Login from "./admin/page/login";
const App_adm = () => {
  
  return (
    <HashRouter>
      <Header></Header>
      <div className="container">
        {/* <Redirect exact from="/" to={{ pathname: "/dashbord" }} /> */}
        <Route path="/dashbord" component={Dashbord} />
        <Route path="/member_list" component= {Member_list} />
        <Route path="/member_list" component={Member_list} />
        <Route path="/member_detail" component={Member_detail} />
        <Route path="/notice_list" component={Notice_list} />
        <Route path="/notice_write" component={Notice_write} />
        <Route path="/popup_list" component={Popup_list} />
        <Route path="/text_write" component={Text_write} />
        <Route path="/popup_write" component={Popup_write} />
        <Route path="/distribution_list" component={Distribution_list} />
        <Route path="/token_list" component={Token_list} />
        <Route path="/lppull_list" component={Lppull_list} />
        <Route path="/lpapr_list" component={Lpapr_list} />
        <Route path="/lp_creat" component={Lp_creat} />
        <Route path="/admin_list" component={Admin_list} />
        <Route path="/my_profile" component={My_profile} />
        <Route path="/login" component={Login} />
      </div>
    </HashRouter>
  );
};
export default App_adm;
