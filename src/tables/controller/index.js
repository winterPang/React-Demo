import 'css!../less/index';

function ctrlCb($scope) {
    // body...
    $scope.option = {
        tId: "baseOptions",
        pageSize: 2,
        pageList: [2, 5, 30],
        //data: [],
        searchable: true,
        columns: [
            { checkbox: true },
            { searcher: {}, sortable: true, field: 'apName', title: "AP" },
            { searcher: {}, sortable: true, field: 'apModel', title: "AC" },
            { searcher: {}, sortable: true, field: 'apSN', title: "AP序列号" },
            { searcher: {}, sortable: true, field: 'apGroupName', title:"AC序列号" },
            { searcher: {}, sortable: true, field: 'macAddr', title: "信号" },
            { searcher: {}, sortable: true, field: 'ipv4Addr', title: "型号"}
        ],

    }
}

export default ['$scope', ctrlCb];
