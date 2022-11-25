import { useState } from "react"
import {
    Button,
    Card,
    Table,
} from 'antd';
import { getRouteDetailsDateWiseApi } from "../../../Services/RouteService";
import { useNavigate } from "react-router-dom";
import Filter from "../../../Components/Common/Filter";
import { dateFormat } from "../../../Helpers/TodayDate";

const DateWiseRouteDetails = () => {
    const [dataSource, setDataSource] = useState([])
    const navigate = useNavigate()

    const columns = [
        {
            title: 'Route Date',
            dataIndex: 'RouteDate',
            key: 'RouteDate',
        },

        {
            title: 'Remarks',
            dataIndex: 'Remarks',
            key: 'Remarks',
        },
        {
            title: 'Action',
            dataIndex: 'CompanyId',
            key: 'CompanyId',
            render: (text, record) => {
                return (
                    <Button
                        className="buttonRadius"
                        type="primary"
                        onClick={() => navigate({
                            pathname: `/admin/editroutedetails`,
                            search: `?q=${record.RouteId}&o=${text}`
                        })}
                    >
                        Edit
                    </Button>
                )
            }
        },
    ]

    const getTableData = (selectedDate) => {
        let data = {
            routeday: selectedDate.SingleDate
        }
        getRouteDetailsDateWiseApi(data, (res) => {
            setDataSource(res)
        })
    }

    const returnFilterData = (res) => {
        const routeDate = {
            ...res,
            SingleDate: res.SingleDate.format(dateFormat)
        }
        getTableData(routeDate)
    }

    return (
        <div className="contentContainer">
            <Card title={`Route Details`} bordered={false}>
                <Button
                    className="floatRight"
                    type="primary"
                    ghost
                    onClick={() => {
                        navigate('/admin/addroutedetails')
                    }}>
                    Add New Route
                </Button>
                <Filter
                    returnFilterData={returnFilterData}
                    showSingleDatePicker={true}
                />
            </Card>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    )
}

export default DateWiseRouteDetails