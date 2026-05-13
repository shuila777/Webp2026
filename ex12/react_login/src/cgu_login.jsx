import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="#">
        Wendy Liao
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          height: '100vh',
        }}
      >
        {/* 左側圖片 */}
        <Box
          sx={{
            width: '58%',
            display: { xs: 'none', sm: 'block' },
            backgroundImage:
              'url(https://www.happyhair.com.tw/wp-content/uploads/2024/12/index_05.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* 右側登入區 */}
        <Paper
          square
          elevation={6}
          sx={{
            width: { xs: '100%', sm: '42%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 4,
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              🔒
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in CSIE@CGU
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: '100%' }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>

                <Link href="#" variant="body2">
                  Sign Up
                </Link>
              </Box>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 3 }}
              >
                B1229068 廖文歆
              </Typography>

              <Copyright sx={{ mt: 2 }} />
            </Box>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}