import React,{useContext} from 'react';
import AlertContext from '../../context/alert/alertContext'
// import AlertContext from '../../context/alert/alertContext';

export const Alerts = (props) => {

    const alertContext=useContext(AlertContext)
    return (alertContext.alerts.length>0&&alertContext.alerts.map(alert=>{

        return (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas da-info-circle"/>{alert.msg}
            </div>
        )
    }))
}

export default Alerts;