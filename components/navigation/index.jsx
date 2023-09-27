'use client';

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const router = useRouter();
  const [value, setValue] = React.useState("new-registry");

  console.log('value :>> ', value);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
          router.push(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} value="/new-registry" />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} value="/dashboard" />
        <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} value="/other" />
      </BottomNavigation>
    </Paper>
  );
}
