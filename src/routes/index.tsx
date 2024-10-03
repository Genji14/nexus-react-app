import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <HomePage />,
})

const HomePage = () => {
  return <div className='flex flex-col gap-20'>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>
    <div>    This is Home Page!!!    </div>

  </div>
}