import React from 'react'
import {Table, TableCol, TableRow} from '../../../components/Table'
import {InputLabel} from '../../../components/UI'

const ReservationClientList = props => {



    return (
        <div>
            <InputLabel>Основная информация</InputLabel>
            <Table isEmpty={false}>
                <TableRow header={true}>
                    <TableCol span={3}>фамилия</TableCol>
                    <TableCol span={3}>имя</TableCol>
                    <TableCol span={3}>пол</TableCol>
                    <TableCol span={5}>паспорт</TableCol>
                    <TableCol span={5}>гражданство</TableCol>
                    <TableCol span={5}>действие</TableCol>
                </TableRow>
                <TableRow>
                    <TableCol span={3}>фамилия</TableCol>
                    <TableCol span={3}>имя</TableCol>
                    <TableCol span={3}>пол</TableCol>
                    <TableCol span={5}>паспорт</TableCol>
                    <TableCol span={5}>гражданство</TableCol>
                    <TableCol span={5}>действие</TableCol>
                </TableRow>
            </Table>
        </div>

    )
}


export default ReservationClientList
