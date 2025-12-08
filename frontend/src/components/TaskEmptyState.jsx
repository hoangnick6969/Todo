import React from 'react'
import { Card } from './ui/card'
import { Circle } from 'lucide-react'

const TaskEmptyState = ({ filter }) => {
  return (
    <Card
    className="flex flex-col items-center justify-center p-8 text-center"
    >
    <div className='space-y-3'>
        <Circle className="size-12 mx-auto text-muted-foreground" />
        <div>
            <h3 className='font-medium text-foreground'>
                {
                    filter==="active"?
                    "No active tasks yet":
                    filter==="completed"?
                    "No completed tasks yet":
                    "No tasks yet"}
            </h3>
            <p className='text-sm text-muted-foreground'>
                    {
                    filter==="all"?
                    "You have not added any tasks yet. Start by adding a new task to stay organized and productive.":
                    `${filter==="active"? "Tasks" :"Completed Tasks"} are pending.`
                    }
            </p>                                
        </div>
    </div>

    </Card>
  )
}

export default TaskEmptyState;