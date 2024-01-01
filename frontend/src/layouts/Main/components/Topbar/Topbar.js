import Box from '@mui/material/Box';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      width={1}
      justifyContent={'center'}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="logoTopBar"
      >
        <Image src="/Logo.PNG" width={250} height={150} alt="logo-image"/>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  colorInvert: PropTypes.bool,
};

export default Topbar;
