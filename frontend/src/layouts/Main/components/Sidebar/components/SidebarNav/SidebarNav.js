import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

import {
  AppNavigationContent,
  GlobalAppStaticContent,
} from '../../../../../../constants';
import NavLink from './components/NavLink';

const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      flexDirection="column"
      justifyContent={'space-between'}
      height={'100%'}
    >
      <Box>
        <Box width={1} paddingX={2} paddingY={1}>
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={{ xs: 150, md: 200 }}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? GlobalAppStaticContent.staticContent.logo
                  : GlobalAppStaticContent.staticContent.logoNegative
              }
              height={1}
              width={1}
            />
          </Box>
        </Box>
        <Box paddingX={2} paddingY={2}>
          {AppNavigationContent.mobilePages.map((item, index) => (
            <Box key={item} marginTop={index === 0 ? 0 : 4}>
              {item.pages.length > 0 && (
                <NavItem title={item.displayName} items={item.pages} />
              )}
              {item.pages.length === 0 && (
                <NavLink title={item.displayName} href={item.href} />
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Box marginTop={1}>
        <Button
          size={'large'}
          variant="contained"
          color="primary"
          fullWidth
          component="a"
          target="blank"
          href={GlobalAppStaticContent.staticContent.appUrl}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {};

export default SidebarNav;
