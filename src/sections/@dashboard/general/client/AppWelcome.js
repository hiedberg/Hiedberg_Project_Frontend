import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Button, Card, CardContent } from '@mui/material';
import { SeoIllustration } from '../../../../assets';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.common.black,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
}));

// ----------------------------------------------------------------------

AppWelcome.propTypes = {
  displayName: PropTypes.string,
};

export default function AppWelcome({ displayName }) {
  return (
    <RootStyle>
      <SeoIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' },
        }}
      />
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800',
        }}
      >
        <Typography gutterBottom variant="h2" color={'#fff'}>
          Hi {!displayName ? '...' : displayName} , <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480, mx: 'auto' }}>
          You have 10 hours remaining!
        </Typography>
        </Typography>


        <Button  variant="contained" to="#" component={RouterLink}>
          Submit Task
        </Button>
      </CardContent>
    </RootStyle>
  );
}
