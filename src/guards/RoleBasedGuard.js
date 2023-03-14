import PropTypes from 'prop-types';
import { Container, Alert, AlertTitle } from '@mui/material';

// ----------------------------------------------------------------------

import useAuth from '../hooks/useAuth';

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array, // Example ['admin', 'leader']
  children: PropTypes.node
};
 
const useCurrentRole = () => {
  // Logic here to get current user role
  const { user } = useAuth();
  const role = user ? user.role : 'admin';
  console.log('====================================');
  console.log('Hey : I am ', role);
  console.log('====================================');
  // const role = 'admin';
  return role;
};

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const currentRole = useCurrentRole();

  if (!accessibleRoles.includes(currentRole)) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
      </Container>
    );
  }

  return <>{children}</>;
}
