import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);

  const logout = () => {};
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
    </Box>
  );
}

export default Profile;
