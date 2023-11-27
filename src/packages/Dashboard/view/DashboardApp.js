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
import {getBusinessesDashCount,getLiqourDashCount,getFoodDashCount} from "../store/DashboardAction";
import SpinnerLoader from "../../../shared/plugin/loader/SpinnerLoader";
import MoneyIcon from '@mui/icons-material/Money';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AppsIcon from '@mui/icons-material/Apps';
import {useNavigate} from "react-router-dom";
import BillDash from '../components/BillDash';
import InvoiceDash from '../components/InvoiceDash';
// import Label from '../components/Label';

// ----------------------------------------------------------------------

export default function DashboardApp() {
    const dispatch=useDispatch();
    const {businesses_count, loading} = useSelector(state=> state.BusinessCountDashReducer)
    const { liquor_count} = useSelector(state=> state.LiquorCountDashReducer)
    const { food_count } = useSelector(state=> state.FoodCountDashReducer)
    //
    const navigate=useNavigate();
     
     
    //
    return (
        <Page title="Dashboard">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Dashboard
                </Link>
                <Typography color="text.primary">Statistics</Typography>
            </Breadcrumbs>
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
                                    md={4}
                                    lg={4}
                                    sm={6}
                                    xl={4}
                                    xs={12}
                                    spacing={3}
                                >
                                    <Card variant="outlined">
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
                                                        TOTAL BUSINESSES
                                                    </Typography>
                                                    <Typography
                                                        color="textPrimary"
                                                        variant="h4"
                                                    >
                                                    {/* {businesses_count?.total_businesses_count} */}
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
                                                        <PeopleIcon />
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
                                                    onClick={()=>navigate("/admin/dashboard/business",{replace: true})}
                                                >
                                                    Overview
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid
                                    item
                                    md={4}
                                    lg={4}
                                    sm={6}
                                    xl={4}
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
                                                        TOTAL LIQUOR APPLICATIONS
                                                    </Typography>
                                                    <Typography
                                                        color="textPrimary"
                                                        variant="h4"
                                                    >
                                                    {/* {liquor_count?.total_liquor_count} */}
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
                                                        <AppsIcon />
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
                                                    onClick={()=>navigate("/admin/dashboard/liquor-license",{replace: true})}
                                                >
                                                    Overview
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid
                                    item
                                    md={4}
                                    lg={4}
                                    sm={6}
                                    xl={4}
                                    xs={12}
                                    spacing={3}
                                >
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Grid
                                                container
                                                spacing={5}
                                                sx={{ justifyContent: 'space-between' }}
                                            >
                                                <Grid item>
                                                    <Typography
                                                        color="textSecondary"
                                                        gutterBottom
                                                        variant="overline"
                                                    >
                                                        TOTAL FOOD APPLICATION
                                                    </Typography>
                                                    <Typography
                                                        color="textPrimary"
                                                        variant="h4"
                                                    >
                                                    {/* {food_count?.total_food_count} */}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Avatar
                                                        sx={{
                                                            backgroundColor: 'error.main',
                                                            height: 56,
                                                            width: 56
                                                        }}
                                                    >
                                                        <MoneyIcon />
                                                    </Avatar>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <Box
                                                sx={{
                                                    pt: 2,
                                                    display: 'flex',
                                                    justifyContent: 'flex-end'
                                                }}
                                            >
                                                <Button
                                                    color="error"
                                                    endIcon={<ArrowRightIcon fontSize="small" />}
                                                    size="small"
                                                    onClick={()=>navigate("/admin/dashboard/food-license",{replace: true})}
                                                >
                                                Overview
                                                
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                            <BillDash/>
                            <InvoiceDash/>
                        </Container>
                }
            </Box>
             
        </Page>
    );
}
