import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';


const Footer = (colorInvert = false) => {

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
        title="logoFooter"
      >
        <Image src="/Logo.PNG" width={250} height={150} alt="logo-image"/>
      </Box>
    </Box>
  );
};

export default Footer;
