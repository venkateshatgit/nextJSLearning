import {Button, Modal} from '@material-ui/core';
import {useState} from 'react';
import Dashboard from '../dashboard/dashboard';

function DashboardModal({dashboardData}) {

    const [open, setOpen] = useState(false)
    const handleChange = () => setOpen(!open)


    return (  
        <div className="dashboardModal">
            <Button id='modalBtn' onClick={handleChange}>Dashboard</Button>
            <Modal
                open={open}
                onClose={handleChange}
            >
                <Dashboard dashboardData={dashboardData}/>
            </Modal>
            <style jsx>{`
                #modalBtn{
                    background-color: rgb(83, 86, 86);
                    color: #fff;
                }

                .dashboardModal{
                    margin: auto 0;
                }
            `}
            </style>
        </div>
    );
}

export default DashboardModal;