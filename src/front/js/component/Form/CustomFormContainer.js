/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent, memo, ReactNode } from 'react'
import { Box, PaperProps, Paper } from '@mui/material'

function FormContainer({
  children,
  mode = 'div',
  ...rest
}) {
  return (
    <Paper
      elevation={0}
      component={mode}
      role={mode}
      className="form-container"
      onSubmit={'onSubmit' in rest ? rest.onSubmit : undefined}
      {...rest}
    >
      <Box sx={{ py: 2, px: 2 }}>{children}</Box>
    </Paper>
  )
}

export default memo(FormContainer)
