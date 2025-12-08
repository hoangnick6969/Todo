import React,{useState} from 'react'
import { Card } from './ui/card';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import api from '@/lib/axios';
const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask=async()=>{
    if(newTaskTitle.trim() ){
    try{
     await api.post('/tasks', { title: newTaskTitle });
     toast.success(`Task ${newTaskTitle} added successfully!`);
     handleNewTaskAdded();
    }catch(error){
      console.error("Error adding task:", error);
      toast.error("Failed to add task. Please try again later.");
    }
    setNewTaskTitle('');
    }else{
      toast.error("Please enter description of task.");
  }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card show-custom-lg">
      <div className='flex flex-col gap-3 sm:flex-row'>
        
        <input 
        type="text" 
        placeholder="Add a new task"
        className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20 " 
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        />

        <Button 
          variant="gradient"
          size="xl"
          className="px-6"
          onClick={addTask}
          onKeyPress={handleKeyPress}
          disabled={!newTaskTitle.trim()}
          >
            <Plus className="size-5" />
             Add Task
        </Button>

      </div>
    </Card>
  );
};

export default AddTask;
