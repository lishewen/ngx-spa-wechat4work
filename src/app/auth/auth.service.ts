import { Injectable } from '@angular/core';
import { RestDataSource } from './rest-data-source';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // 配置环境
  env = {
    url: {
      spa: "https://work.wzjbbus.com",
      api: 'https://wx.wzjbbus.com'
    },
    wechatAppid: "ww47504af96f783648",
    storageName: {
      wechatOpenid: 'wechat_openid', // 需要设置的 openid 名称
      token: 'token', // 需要设置的 token 名称
      tokenCreateAt: 'token_create_at', // token 的创建时间
      fullPath: 'full_path' // hash 后面的部分，如：/home/index
    },
    scope: 'snsapi_userinfo', // 微信应用授权作用域 'snsapi_base' 或 'snsapi_userinfo'
    expira: 0
  };

  constructor(private datasource: RestDataSource) { }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  clear() {
    this.datasource.auth_token = null;
  }

  // 获取 url 参数
  getParam(name: string, url?: string): string {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}
