import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;
    user: Models.GetUserInfoResult;

    constructor(private http: HttpClient) {
        this.baseUrl = "https://wx.wzjbbus.com/";
    }

    authenticate(code: string): Observable<boolean> {
        return this.http.get(this.baseUrl + 'api/Home/UserTicket/' + code).pipe(
            map((res: Models.GetUserInfoResult) => {
                this.user = res;
                this.auth_token = res.user_ticket;
                return res.errcode == 0;
            })
        );
    }
}
