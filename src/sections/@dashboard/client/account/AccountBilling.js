import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, Grid, Card, Button, Typography, Stack } from '@mui/material';
//
import AccountBillingAddressBook from './AccountBillingAddressBook';
import AccountBillingPaymentMethod from './AccountBillingPaymentMethod';
import AccountBillingInvoiceHistory from './AccountBillingInvoiceHistory';
import BankingRecentTransitions from './BankingRecentTransitions';

// ----------------------------------------------------------------------

AccountBilling.propTypes = {
  addressBook: PropTypes.array,
  cards: PropTypes.array,
  invoices: PropTypes.array,
};

export default function AccountBilling({ cards, addressBook, invoices }) {
  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
            <Card sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
                Current Subscription Plan
              </Typography>
              <Typography variant="h5">Premium</Typography>
              <Typography variant="h6">$ 100.00 /mo</Typography>

              <Box
                sx={{
                  mt: { xs: 2, sm: 0 },
                  position: { sm: 'relative' },
                  top: { sm: 24 },
                }}
              >
                <Button size="small" variant="outlined">
                  Upgrade plan
                </Button>
              </Box>
            </Card>
            <Card sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
                Next Payment
              </Typography>
              <Typography variant="h5">$ 100.00 /mo</Typography>
              <Typography variant="h6">On December 01 2022</Typography>

              <Box
                sx={{
                  mt: { xs: 2, sm: 0 },
                  position: { sm: 'relative' },
                  top: { sm: 24 },
                }}
              >
                <Button size="small" variant="outlined">
                  Manage Payment
                </Button>
              </Box>
            </Card>
          </Stack>
          <AccountBillingPaymentMethod
            cards={cards}
            isOpen={open}
            onOpen={() => setOpen(!open)}
            onCancel={() => setOpen(false)}
          />

          <AccountBillingAddressBook addressBook={addressBook} />
          <BankingRecentTransitions />
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <AccountBillingInvoiceHistory invoices={invoices} />
      </Grid>
    </Grid>
  );
}
