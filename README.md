# Angular 6 SPA 集成企业微信 Demo 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## 安装

首次运行需要执行一次 `npm install`

## 配置

修改 `auth.service.ts` 下的 `env` 配置信息

## 说明

虽说这个是支持企业微信，但做一定修改后是可以用在微信上的，换掉 WxauthComponent 请求code的跳转便可

### 路由

本Demo的路由主要有三个
```ts
const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'wxauth', component: WxauthComponent },
  { path: 'table', component: JbtableComponent, canActivate: [AuthGuard] }
];
```

其中，wxauth为企业微信callback的路由  
一个可匿名访问的全局路由  
和一个需要企业微信登录才可以访问的路由 table ，通过 AuthGuard 守卫 ， 其他需要登录的页面只需要添加守卫在路由处即可  

### 后端

这里的callback得到的 code 再换取 user_ticket 的动作是通过一个 Asp.net Core Web Api 完成的，获得 user_ticket 后写入 localStorage 备用。
后端的代码好简单，如果后端和前端不是同一个域名注意开启 Cors
```c#
        [HttpGet]
        [Route("api/Home/UserTicket/{code}")]
        [EnableCors]
        public GetUserInfoResult GetUserTicket(string code)
        {
            return OAuth2Api.GetUserId(_options.WorkAccessToken, code);
        }
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

PS：由于企业微信应用开发的特殊性，不要用localhost进行测试，callback不了的

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
