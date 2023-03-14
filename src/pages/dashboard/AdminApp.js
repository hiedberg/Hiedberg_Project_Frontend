// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
  BookingWidgetSummary,
  BookingRoomAvailable,
  BookingTotalIncomes,
  BankingWidgetSummary,
  BankingBalanceStatistics,
  AnalyticsTasks,
  AnalyticsOrderTimeline,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  PendingTasks,
  EcommerceSalesOverview,
} from '../../sections/@dashboard/general/admin';
// assets
import { OrderCompleteIllustration, CheckInIllustration, CheckOutIllustration } from '../../assets';
// ----------------------------------------------------------------------

export default function AdminApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="Admin: My Dashboard">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome displayName={user?.displayName} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Total Clients" total={13} icon={'eva:person-fill'} chartData={13} />
              <AppWidget title="Total Staff" total={10} icon={'eva:person-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid> */}

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Active Tasks"
              // percent={2.6}
              total={18765}
              // chartColor={theme.palette.primary.main}
              // chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Completed"
              // percent={0.2}
              total={4876}
              // chartColor={theme.palette.chart.blue[0]}
              // chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Pending"
              // percent={-0.1}
              total={678}
              // chartColor={theme.palette.chart.red[0]}
              // chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Total Tasks" total={123} icon={<OrderCompleteIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Total Active" total={12} icon={<CheckInIllustration />} />
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingWidgetSummary title="Total Completed" total={122} icon={<CheckOutIllustration />} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <PendingTasks />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid> */}
          <Grid item xs={12} md={4}>
            <BookingRoomAvailable />
          </Grid>

          <Grid item xs={12} md={6}>
            <BookingTotalIncomes />
          </Grid>
          <Grid item xs={12} md={6}>
            <BankingWidgetSummary
              title="Expenses"
              color="warning"
              icon={'eva:diagonal-arrow-right-up-fill'}
              percent={-0.5}
              total={8938}
              chartData={[111, 136, 76, 108, 74, 54, 57, 84]}
            />{' '}
          </Grid>
          <Grid item xs={12} md={6}>
            <BankingBalanceStatistics />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid> */}
          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsOrderTimeline />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <EcommerceYearlySales />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <EcommerceSalesOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <EcommerceBestSalesman />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <AnalyticsTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
