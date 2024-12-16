import { Avatar, Badge, Button } from '@mui/material'
import React from 'react'

const MaterialUI = () => {

    return (
        <div>
            <Avatar
                alt='Me'
                src='https://res.cloudinary.com/dcfwaszea/image/upload/v1723655381/cld-sample.jpg'
                sx={{ width: 24, height: 24 }}>
            </Avatar>

            <Button variant='contained' style={{}}>Click</Button>

            <Badge badgeContent={4} color="primary"></Badge>
        </div>
    )
}

export default MaterialUI
