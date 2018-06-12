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
    export interface 调度汇总 {
        name: string;
        stationName: string;
        lineName: string;
        经度: number;
        纬度: number;
        当前站点序号: number;
        站点标识: number;
        站点分类: string;
        进站时间: Date;
        离站时间: Date;
        updateTime: Date;
        type: number;
        gprsId: number;
        onBoardid: number;
        车辆运行状态标识: number;
        运营状态: boolean;
        direction: number;
        is补发包: boolean;
    }
}