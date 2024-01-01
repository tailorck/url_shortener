/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LandingStaticContent } from '../../../../constants';
import { lookupShortUrl } from '../../../../services/apis';

const Lookup = () => {
  const [hiddenLink, setHiddenLink] = React.useState(true);
  const [textFieldValue, setTextFieldValue] = React.useState('');
  const [longUrl, setLongUrl] = React.useState('');

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  }

  const handleClick = () => {
    const response = lookupShortUrl(textFieldValue);
    if (response.status === 200) {
      setHiddenLink(false);
      setLongUrl(response.data.long_url);
    } else {
      setHiddenLink(true);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          fontFamily='"Helvetica Neue"'
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: 2,
          }}
        >
          {LandingStaticContent.lookupCard.title}
        </Typography>
        <Typography
          fontFamily='"Helvetica Neue"'
          variant="h5"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: 4,
          }}
        >
          {LandingStaticContent.lookupCard.text_heading}
        </Typography>
        <TextField fullWidth id="outlined-basic" label="Paste a short url here" variant="outlined" onChange={handleTextFieldChange}/>
        <Box hidden={hiddenLink}>
          <Typography
            component={'a'}
            variant="h4"
            color="text.primary"
            sx={{
              fontWeight: 100,
              textAlign: 'center',
              marginTop: 2,
              marginBottom: 4,
            }}
          >
            {longUrl}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box width={1} justifyContent={'center'} display={'flex'} flexDirection={'row'}>
          <Button variant={'contained'} size="large" onClick={handleClick}>Submit</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Lookup;
