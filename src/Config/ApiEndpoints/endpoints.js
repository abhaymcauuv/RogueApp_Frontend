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
    }
}

export default EndPoints