import Box from '@mui/material/Box';
import Container from 'components/Container';
import Main from 'layouts/Main';
import {
  Hero,
} from './components';
import { useTheme } from '@mui/material/styles';

const WebBasic = () => {
  const theme = useTheme();

  return (
    <Main>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
      </Box>
    </Main>
  );
};

export default WebBasic;
