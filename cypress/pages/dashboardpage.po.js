class DashBoardPage{

     timeandworkcard(){

        return 'Time at Work'
     }

     dashboardmenu(){

        return '//*[text()="Dashboard"]'
     }

     pimmenu(){

        return 'PIM'
     }

}

const dashboard = new DashBoardPage()

export default dashboard

