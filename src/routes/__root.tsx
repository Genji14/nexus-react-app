import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/modules/common'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <Header />
      <div className='-translate-y-16'>
        <Outlet />
      </div>
    </React.Fragment>
  ),
})
