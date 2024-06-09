import { Button, Container, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';
import error from '../../../public/error-gif.png';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={error} alt='Error icon' style={{ width: '180px' }} />
        <Typography variant='h2' gutterBottom>
          404
        </Typography>
        <Typography variant='h3' gutterBottom>
          Opps! This Page Does not exist
        </Typography>
        <Button
          size='large'
          variant='contained'
          sx={{
            bgcolor: 'primary.contrastText',
            color: 'black',
            ':hover': { color: 'white' },
          }}
          onClick={async () => navigate('/')}
        >
          Go back to Home
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default PageNotFound;
