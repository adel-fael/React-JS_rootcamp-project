import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import { grey } from '@mui/material/colors'
import {
  DataGrid,
  gridClasses,
  GridToolbar,
  GridToolbarContainer,
} from '@mui/x-data-grid'
import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import people from '../data/people.json'

function AllToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbar />
    </GridToolbarContainer>
  )
}

const Registered = () => {
  const navigate = useNavigate()

  const handleSendEmails = () => {
    people.map((all) => console.log(all.email))
  }

  const count = people.filter((item) => item.email.includes('@')).length

  const getRowSpacing = useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 4,
      bottom: params.isLastVisible ? 0 : 4,
    }
  }, [])

  const columns = [
    {
      field: 'id',
      headerName: 'id',
      width: 50,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
  ]
  const rows = people
  return (
    <>
      <Helmet>
        <title> Registered </title>
      </Helmet>

      <div style={{ height: 700, width: '100%', margin: '0 auto' }}>
        <DataGrid
          columns={columns}
          rows={rows}
          components={{
            Toolbar: AllToolbar,
          }}
          getRowSpacing={getRowSpacing}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? grey[200] : grey[900],
            },
            m: 5,
            backgroundColor: 'white',
          }}
          disableColumnMenu
          hideFooter={true}
        />
        <div className=" pb-[2rem]">
          <Button
            sx={{ ml: 5, mt: 0 }}
            variant="contained"
            onClick={handleSendEmails}
          >
            Send Emails
          </Button>
          <Chip color="info" sx={{ ml: 3 }} label={`Total ${count}`} />

        </div>
        <div className=" pb-[2rem]">
        <Button
            sx={{ ml: 5, mt: 0 }}
            variant="contained"
            onClick={() => {
              navigate('/', { replace: true })
            }}
          >
            Rootcamp
          </Button>
          <Button
            sx={{ ml: 5, mt: 0 }}
            variant="contained"
            onClick={() => {
              navigate('/admin', { replace: true })
            }}
          >
            logout
          </Button>
        </div>
      </div>
    </>
  )
}

export default Registered
