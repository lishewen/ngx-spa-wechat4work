import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { models } from "../models";

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;
    user: models.GetUserInfoResult;
    userDetail: models.GetUserDetailResult;

    constructor(private http: HttpClient) {
        this.baseUrl = "https://wx.wzjbbus.com/";
        if (!environment.production) {
            //测试token
            this.auth_token = 'auth_token';
        }
    }

    authenticate(code: string): Observable<boolean> {
        return this.http.get(this.baseUrl + 'api/Home/UserTicket/' + code).pipe(
            map((res: models.GetUserInfoResult) => {
                this.user = res;
                this.auth_token = res.user_ticket;
                return res.errcode == 0;
            })
        );
    }

    getUserDetail() {
        let header = this.Header;
        return this.http.get<models.GetUserDetailResult>(this.baseUrl + 'api/Home/User', { headers: header });
    }

    get UserTicket(): string {
        return this.auth_token;
    }

    get UserId(): string {
        return this.user.userId;
    }

    get UserName(): string {
        if (this.userDetail == null)
            this.getUserDetail().subscribe(data => {
                this.userDetail = data;
                return this.userDetail.name;
            });
        else
            return this.userDetail.name;
    }

    get Header(): HttpHeaders {
        let header = new HttpHeaders();
        header.append('x-userid', this.user != null ? this.user.userId : '');
        header.append('x-userticket', this.auth_token);
        return header;
    }
}
