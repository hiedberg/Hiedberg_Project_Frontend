import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Button, Typography, Box, Stack, Link } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import { setPlan } from '../../../redux/slices/plan';
import { dispatch, store } from '../../../redux/store';
import { addCart } from '../../../redux/slices/product';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

PricingPlanCard.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object,
};

export default function PricingPlanCard({ card, index }) {
  /* const { subscription, icon, price, caption, lists, labelAction } = card; */
  const { subscription, price, labelAction, id } = card;
  const lists = [
    {
      "text": "10 hours per month",
      "isAvailable": true
    },
    {
      "text": "Monthly billing",
      "isAvailable": true
    },
    {
      "text": "Basic admin tasks",
      "isAvailable": false
    },
    {
      "text": "Onboarding support",
      "isAvailable": false
    }
  ]
  const linkTo = PATH_DASHBOARD.subscription.checkout;

  function handleSetPlan() {
    dispatch(setPlan(card))
    const newCard = {...card};
    newCard.quantity = 1;
    dispatch(addCart(newCard))
  }

  return (
    <RootStyle>
      {index === 1 && (
        <Label
          color="info"
          sx={{
            top: 16,
            right: 16,
            position: 'absolute',
          }}
        >
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {subscription}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        {index >= 0 ? (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            $
          </Typography>
        ) : (
          ''
        )}
        <Typography variant="h2" sx={{ mx: 1 }}>
          {price === 0 ? 'Free' : price}
        </Typography>
        {index >= 0 ? (
          <Typography
            gutterBottom
            component="span"
            variant="subtitle2"
            sx={{
              alignSelf: 'flex-end',
              color: 'text.secondary',
            }}
          >
            /mo
          </Typography>
        ) : (
          ''
        )}
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: 'primary.main',
          textTransform: 'capitalize',
        }}
      >
        {'1 Developer'}
      </Typography>

      <Box sx={{ width: 80, height: 80, mt: 3 }}>{/* {icon} */}</Box>

      <Stack component="ul" spacing={2} sx={{ my: 5, width: 1 }}>
        {lists.map((item) => (
          <Stack
            key={item.text}
            component="li"
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ typography: 'body2', color: item.isAvailable ? 'text.primary' : 'text.disabled' }}
          >
            <Iconify icon={'eva:checkmark-fill'} sx={{ width: 20, height: 20 }} />
            <Typography variant="body2">{item.text}</Typography>
          </Stack>
        ))}
      </Stack>
      <Link to={linkTo} color="inherit" component={RouterLink}>
        <Button fullWidth size="large" variant="contained" onClick={() => handleSetPlan()}>
          {labelAction}
        </Button>
      </Link>
    </RootStyle>
  );
}
