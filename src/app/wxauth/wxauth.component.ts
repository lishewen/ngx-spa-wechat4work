import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-wxauth',
  templateUrl: './wxauth.component.html',
  styleUrls: ['./wxauth.component.css']
})
export class WxauthComponent implements OnInit {
  code: string;
  constructor(private authservice: AuthService) {
    let token = window.localStorage.getItem(authservice.env.storageName.token);
    let tokenCreateAt: number = parseInt(window.localStorage.getItem(authservice.env.storageName.tokenCreateAt));
    if (token && new Date().getTime() - tokenCreateAt <= authservice.env.expira) { // token 存在也未过期，跳转到实际需要登录的页面
      window.location.replace(authservice.env.url.spa || '/');
    } else { // token 不存在或过期，获取 token
      let code = authservice.getParam('code');
      if (code) { // code 存在，去服务端交换 token
        //todo: code to token
        //window.localStorage.setItem(env.storageName.token, res.data.token);
        //window.localStorage.setItem(env.storageName.tokenCreateAt, new Date().getTime());
        //window.location.replace(env.url.spa || '/');
        this.code = code;
      } else { // code 不存在，跳转到获取 code 页面
        let fullPath = authservice.getParam('full_path');
        if (fullPath) window.localStorage.setItem(authservice.env.storageName.fullPath, fullPath);
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize' +
          '?appid=' + authservice.env.wechatAppid +
          '&redirect_uri=' + encodeURIComponent(window.location.href) +
          '&response_type=code' +
          '&scope=' + authservice.env.scope +
          '&state=' +
          '#wechat_redirect';
      }
    }
  }

  ngOnInit() {
  }

}
