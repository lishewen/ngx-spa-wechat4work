import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;
    user: models.GetUserInfoResult;

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

    get UserTicket(): string {
        return this.auth_token;
    }

    get UserId(): string {
        return this.user.UserId;
    }

    get Header(): HttpHeaders {
        let header = new HttpHeaders();
        header.append('x-userid', this.user != null ? this.user.UserId : '');
        header.append('x-userticket', this.auth_token);
        return header;
    }
}
