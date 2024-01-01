import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const NavLink = ({ title, href }) => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const isActiveLink = () => href == activeLink;

  return (
    <Box>
      <Link
        underline="none"
        component="a"
        href={href}
        color={'text.primary'}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography
          fontWeight={isActiveLink() ? 600 : 400}
          color={isActiveLink() ? 'primary' : 'text.primary'}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default NavLink;
