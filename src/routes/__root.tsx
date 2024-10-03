import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/modules/common'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  ),
})
