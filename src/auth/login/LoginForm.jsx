import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @mui
import { LoadingButton } from '@mui/lab'
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material'
// components
import Iconify from '../../components/iconify'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const onLogin = (data) => {
    if (data.username === 'slimShady' && data.password === '12345') {
      navigate('/registered', { replace: true })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${data.username}, is not registered in the database. Try Again`,
      })
    }
  }

  // this is the useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return (
    <>
      <form onSubmit={handleSubmit(onLogin)}>
        <Stack spacing={3}>
          <TextField
            {...register('username', { required: 'username is required❗' })}
            name="username"
            label="slimShady"
            variant="filled"
          />
          <TextField
            {...register('password', { required: 'password is required❗' })}
            name="password"
            label="12345"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <LoadingButton
          sx={{
            mt: 5,
          }}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          Login
        </LoadingButton>

        <div className="mt-[1rem] space-y-4 absolute ">
          <p className="text-red-700 text-sm">{errors?.username?.message}</p>
          <p className="text-red-700 text-sm">{errors?.password?.message}</p>
        </div>
      </form>
    </>
  )
}
