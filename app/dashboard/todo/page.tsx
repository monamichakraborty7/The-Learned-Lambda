'use client';

import { useState } from 'react';
import { CheckSquare, PlusCircle, Square, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoPage() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Review Lambda functions chapter', completed: false },
    { id: '2', text: 'Complete practice quiz on recursion', completed: true },
    { id: '3', text: 'Watch lecture on type systems', completed: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);
  const { toast } = useToast();

  const addTodo = () => {
    if (!newTodo.trim()) return;
    
    const newItem = {
      id: Date.now().toString(),
      text: newTodo,
      completed: false,
    };
    
    setTodos([...todos, newItem]);
    setNewTodo('');
    
    toast({
      title: "Task added",
      description: "New task has been added to your list",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    
    toast({
      title: "Task deleted",
      description: "Task has been removed from your list",
    });
  };

  const pendingTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">To-Do List</h1>
        <p className="text-muted-foreground">
          Plan your study schedule and track your progress.
        </p>
      </div>

      <Card className="bg-[hsl(var(--todo-card)/30)] border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Add New Task</CardTitle>
          <CardDescription>
            What do you need to study today?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a new task..."
              className="bg-white"
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTodo();
              }}
            />
            <Button onClick={addTodo}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Pending tasks */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Pending Tasks</h2>
          {pendingTodos.length === 0 ? (
            <p className="text-muted-foreground">No pending tasks. Add something new!</p>
          ) : (
            <ul className="space-y-2">
              {pendingTodos.map(todo => (
                <li key={todo.id} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm hover-lift">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 text-gray-500 hover:text-green-500 transition-colors"
                  >
                    <Square className="h-5 w-5" />
                  </button>
                  <span className="flex-1">{todo.text}</span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Completed tasks */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Completed Tasks</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowCompleted(!showCompleted)}
              className="text-gray-500"
            >
              {showCompleted ? (
                <ChevronUp className="h-4 w-4 mr-1" />
              ) : (
                <ChevronDown className="h-4 w-4 mr-1" />
              )}
              {showCompleted ? "Hide" : "Show"}
            </Button>
          </div>
          
          {showCompleted && (
            completedTodos.length === 0 ? (
              <p className="text-muted-foreground">No completed tasks yet.</p>
            ) : (
              <ul className="space-y-2">
                {completedTodos.map(todo => (
                  <li key={todo.id} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-sm hover-lift">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="flex-shrink-0 text-green-500 hover:text-gray-500 transition-colors"
                    >
                      <CheckSquare className="h-5 w-5" />
                    </button>
                    <span className="flex-1 line-through text-gray-500">
                      {todo.text}
                    </span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  );
}