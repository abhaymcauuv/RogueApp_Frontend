const EndPoints = {
    BaseUrl: `http://localhost:6002/`,
    CommissionPeriodList: {
        Url: `rogue/commission/getcommissionperiodlist/{CustomerId}`,
        Method: 'GET'
    },
    CommissionDetails: {
        Url: `rogue/commission/getcommissiondetails/{CustomerId}/{CommissionRunId}/{PeriodId}`,
        Method: 'GET'
    },
    RealtimeBonusDetails: {
        Url: `rogue/commission/getrealtimebonusdetails/{CustomerId}/{PeriodId}`,
        Method: 'GET'
    },
    HistoricalBonusDetails: {
        Url: `rogue/commission/gethistoricalbonusdetails`,
        Method: 'POST',
        PostData: {
            CustomerID:0,
            CommissionRunID:0,
            PageSize:0,
            PageNo:0
        }
    }
}

export default EndPoints