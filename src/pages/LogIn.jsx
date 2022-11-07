import { Container, Link, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Helmet } from 'react-helmet-async'
import { LoginForm } from '../auth/login'


// ----------------------------------------------------------------------


const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))

// ----------------------------------------------------------------------

function LogIn() {

  return (
    <>
      <Helmet>
        <title> Login </title>
      </Helmet>

      <StyledRoot >


        <Container maxWidth="sm" sx={{ mt: -4}}>
          <StyledContent>
            <Typography variant="h4" gutterBottom sx={{ pb: 4}}>
              Sign in <br /> E-concepts
            </Typography>

            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  )
}

export default LogIn
