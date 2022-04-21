import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core'
import {useEffect} from 'react'

function Dashboard({dashboardData}) {

    useEffect(() => {
      console.log(dashboardData)
    }, [dashboardData])
    
    return (  
    <div className="dashboard">
        <div className="dashboradHeader">
            <h2>Track Record Results</h2>
            <div className="headerInput">
                <input className='dashboardInput'/>
                <input className='dashboardInput'/>
                <input className='dashboardInput'/>
                <button className='dashboardInput'>Get Results</button>
            </div>
        </div>
    
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className='tableHead'>
            <TableRow>
                <TableCell>Watchlist</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Buy</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">interest</TableCell>
                <TableCell align="right">investment</TableCell>
                <TableCell align="right">target1</TableCell>
                <TableCell align="right">target2</TableCell>
                <TableCell align="right">totalPoint</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {dashboardData.map((item) => (
                    <TableRow
                    key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{item.attributes.name}</TableCell>
                        <TableCell component="th" scope="row">{item.attributes.category}</TableCell>

                        <TableCell align="right">{item.attributes.buy}</TableCell>
                        <TableCell align="right">{item.attributes.date}</TableCell>
                        <TableCell align="right">{item.attributes.interest}</TableCell>
                        <TableCell align="right">{item.attributes.investment}</TableCell>
                        <TableCell align="right">{item.attributes.target1}</TableCell>
                        <TableCell align="right">{item.attributes.target2}</TableCell>
                        <TableCell align="right">{item.attributes.totalPoint}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
        <style jsx>{`
            .dashboard{
                width: 90%;
                height: 80vh;
                margin: 50px  auto;
                border-radius: 5px;
                background-color: #fff;   
            }

            .dashboradHeader{
                padding: 5px 10px;
                padding-bottom: 20px;
                border-bottom: solid 1px rgb(201, 196, 196);
            }
            .dashboardInput{
                margin-right: 10px;
                font-size: 1rem;
                padding: 2px 5px;
            }

            .headerInput button{
                font-size: 1rem;
                color: #fff;
                background-color: #e1913a;
                border-radius: 5px;
                border: #e1913a;
                cursor: pointer;
                padding: 5px 8px;
            }

            .tableHead{
                background-color: rgb(240, 234, 234);
            }

            `}
            </style>
    </div>
    );
}

export default Dashboard;