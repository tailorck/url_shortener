import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { NotFound } from '../../views/WebBasic/components';

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <Box
      position={'relative'}
      sx={{
        backgroundColor: theme.palette.alternate.main,
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <NotFound />
    </Box>
  );
};

export default NotFoundPage;
