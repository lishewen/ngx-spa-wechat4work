import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { RestDataSource } from '../auth/rest-data-source';

@Component({
  selector: 'app-wxauth',
  templateUrl: './wxauth.component.html',
  styleUrls: ['./wxauth.component.css']
})
export class WxauthComponent implements OnInit {
  errorMessage: string;

  constructor(private authservice: AuthService,
    private router: Router,
    private datasource: RestDataSource) {

    if (environment.production) {
      if (authservice.authenticated) { // token 存在也未过期，跳转到实际需要登录的页面
        let fullPath = window.localStorage.getItem(authservice.env.storageName.fullPath);
        this.router.navigateByUrl(fullPath || '/');
      } else { // token 不存在或过期，获取 token
        let code = authservice.getParam('code');

        if (code) { // code 存在，去服务端交换 token
          authservice.authenticate(code).subscribe(res => {
            if (res) {
              window.localStorage.setItem(authservice.env.storageName.user_ticket, datasource.auth_token);
              window.localStorage.setItem(authservice.env.storageName.tokenCreateAt, new Date().getTime().toString());

              let fullPath = window.localStorage.getItem(authservice.env.storageName.fullPath);
              this.router.navigateByUrl(fullPath || '/');
            }
            this.errorMessage = "失败，请重试或咨询开发人员。"
          });
        } else { // code 不存在，跳转到获取 code 页面
          window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize' +
            '?appid=' + authservice.env.wechatAppid +
            '&redirect_uri=' + encodeURIComponent(window.location.href) +
            '&response_type=code' +
            '&scope=' + authservice.env.scope +
            '&agentid=' + authservice.env.agentid +
            '&state=' +
            '#wechat_redirect';
        }
      }
    } else {
      let fullPath = window.localStorage.getItem(authservice.env.storageName.fullPath);
      this.router.navigateByUrl(fullPath || '/');
    }
  }

  ngOnInit() {
  }

}
