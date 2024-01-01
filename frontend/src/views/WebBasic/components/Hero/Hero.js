/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LandingStaticContent } from '../../../../constants';
import Create from '../Create';
import Lookup from '../Lookup';

const Hero = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box display={'flex'} justifyContent={'center'} flexDirection={'column'}>
        <Box>
          <Typography
            fontFamily='"Helvetica Neue"'
            variant="h3"
            color="text.primary"
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            {LandingStaticContent.heroBanner.title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{
              fontWeight: 200,
              textAlign: 'center',
              marginBottom: 4,
            }}
          >
            {LandingStaticContent.heroBanner.subtitle}
          </Typography>
        </Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
            centered
          >
            <Tab value={1} label="Create"/>
            <Tab value={2} label="Lookup"/>
          </Tabs>
        </Box>
        <Box flex flexDirection="row" margin={'auto'} width={'75%'}>
          <div>
            {/* TAB 1 Contents */}
            {value === 1 && (
              <Box sx={{ p: 3 }}>
                <Create/>
              </Box>
            )}
    
            {/* TAB 2 Contents */}
            {value === 2 && (
              <Box sx={{ p: 3 }}>
                <Lookup/>
              </Box>
            )}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
