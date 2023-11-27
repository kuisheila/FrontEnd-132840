import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
// components
import {
    Grid,
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Avatar,
    Breadcrumbs,
    Link,
    Divider, Button
} from '@mui/material';
import Page from '../../../shared/components/Page';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import {getBillDashCount} from "../store/DashboardAction";
import SpinnerLoader from "../../../shared/plugin/loader/SpinnerLoader";
import MoneyIcon from '@mui/icons-material/Money';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AppsIcon from '@mui/icons-material/Apps';
import CancelIcon from '@mui/icons-material/Cancel';
import {useNavigate} from "react-router-dom";
import InsightsIcon from '@mui/icons-material/Insights';
import PaymentIcon from '@mui/icons-material/Payment';
import ReceiptIcon from '@mui/icons-material/Receipt';
// import Label from '../components/Label';

// ----------------------------------------------------------------------

export default function InvoiceDash() {
    const dispatch=useDispatch();
    const { bill_count,loading} = useSelector(state=> state.BillDashReducer)

    console.log('=========================================================>BILL COUTYYYYYYYYYYYYYYYY',bill_count)
     
   
    //
    const navigate=useNavigate();
    useEffect(()=>{
        makeCalls()
    },[])

    const makeCalls = () => {
        dispatch(getBillDashCount())
         
    }

    //
    return (
        <Page title="Dashboard">
            
            <Divider />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >

                {
                    loading ?
                        <Grid container sx={{justifyContent: 'center'}}> <SpinnerLoader/></Grid>
                        :
                        <Container maxWidth={false}>

                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    md={6}
                                    lg={6}
                                    sm={6}
                                    xl={6}
                                    xs={12}
                                    spacing={3}
                                >
                                    <Card  style={{width: '100%'}} variant="outlined">
                                        <CardContent>
                                            <Grid
                                                container
                                                spacing={3}
                                                sx={{ justifyContent: 'space-between' }}
                                            >
                                                <Grid item>
                                                    <Typography
                                                        color="textSecondary"
                                                        gutterBottom
                                                        variant="overline"
                                                    >
                                                        TOTAL INVOICES
                                                    </Typography>
                                                    <Typography
                                                        color="textPrimary"
                                                        variant="h4"
                                                    >
                                                    {bill_count?.total_invoices}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Avatar
                                                        sx={{
                                                            backgroundColor: 'success.main',
                                                            height: 56,
                                                            width: 56
                                                        }}
                                                    >
                                                        <ReceiptIcon />
                                                    </Avatar>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Box
                                                sx={{
                                                    justifyContent: 'flex-end',
                                                    display: 'flex',
                                                    pt: 2
                                                }}
                                            >
                                                <Button
                                                    color="success"
                                                    endIcon={<ArrowRightIcon fontSize="small" />}
                                                    size="small"
                                                    onClick={()=>navigate("/admin/dashboard/bills",{replace: true})}
                                                >
                                                    Overview
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid
                                    item
                                    md={6}
                                    lg={6}
                                    sm={6}
                                    xl={6}
                                    xs={12}
                                    spacing={3}
                                >
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Grid
                                                container
                                                spacing={3}
                                                sx={{ justifyContent: 'space-between'}}
                                            >
                                                <Grid item>
                                                    <Typography
                                                        color="textSecondary"
                                                        gutterBottom
                                                        variant="overline"
                                                    >
                                                        Total Unpaid Bills
                                                    </Typography>
                                                    <Typography
                                                        color="textPrimary"
                                                        variant="h4"
                                                    >
                                                    {bill_count?.total_unpaid_bills}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Avatar
                                                        sx={{
                                                            backgroundColor: 'primary.main',
                                                            height: 56,
                                                            width: 56
                                                        }}
                                                    >
                                                        <InsightsIcon/>
                                                    </Avatar>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    pt: 1
                                                }}
                                            >
                                                <Button
                                                    color="primary"
                                                    endIcon={<ArrowRightIcon fontSize="small" />}
                                                    size="small"
                                                    onClick={()=>navigate("/admin/dashboard/bills",{replace: true})}
                                                >
                                                    Overview
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

 
                            </Grid>
                        </Container>
                }
            </Box>
        </Page>
    );
}
