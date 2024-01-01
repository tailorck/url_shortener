import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const NavLink = ({ title, id, colorInvert = false, href }) => {
  const theme = useTheme();

  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);

  const isActiveLink = () => href == activeLink;

  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <Box>
      <Link
        underline="none"
        component="a"
        href={href}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Box
          display={'flex'}
          alignItems={'center'}
          aria-describedby={id}
          sx={{ cursor: 'pointer' }}
        >
          <Typography fontWeight={isActiveLink() ? 700 : 400} color={linkColor}>
            {title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavLink;
