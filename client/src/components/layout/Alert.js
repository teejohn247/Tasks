import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Alert = ({ alerts }) => 
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <div style={{marginTop:"70px",marginLeft:"auto",position:"fixed",left:"90%",zIndex:"99"}} key = {alert.id} className ={`alert alert-${alert.alertType}`}>
        {alert.msg}
        </div>
    ));


Alert.PropTypes ={
    alerts: PropTypes.array.isRequired
};
const mapStateToProps = state =>({
    alerts:state.alert
});
export default connect(mapStateToProps)(Alert);