declare namespace models {
    export interface busInfo {
        id: number;
        samID: string;
        gprS_SAM: string;
        currTime: string;
        lastUpdateTime: Date;
        updateTime: string;
        rwSoftVer: string;
        csnVer: string;
        farVer: string;
        lineNo: string;
        price: string;
        busNo: string;
        sBusNo: string;
        farUpdateFlag: boolean;
        usrUpdateFlag: boolean;
        parUpdateFlag: boolean;
        rwSoftUpdateFlag: boolean;
    }
    export interface GetUserInfoResult {
        UserId: string;
        user_ticket: string;
        errcode: number;
    }
}