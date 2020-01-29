const EndPoints = {
    BaseUrl: `http://localhost:6002/`,
    CommissionPeriodList: {
        Url: `rogue/commission/getcommissionperiodlist/{CustomerId}`,
        Method: 'GET'
    },
    Commission: {
        Url: `rogue/commission/getcommission`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            CommissionRunID: 0,
            PeriodID: 0,
            PageSize: 0,
            PageNo: 0
        }
    },
    HistoricalBonus: {
        Url: `rogue/commission/gethistoricalbonus`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            CommissionRunID: 0,
            BonusID: 0,
            PageSize: 0,
            PageNo: 0
        }
    },
    RealTimeBonus: {
        Url: `rogue/commission/getrealtimebonus`,
        Method: 'POST',
        PostData: {
            CustomerID: 0,
            PeriodID: 0,
            BonusID: 0
        }
    },

}

export default EndPoints