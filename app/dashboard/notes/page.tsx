'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, BookOpen, CheckCircle, Clock, BarChart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function NotesAndTestsPage() {
  const [activeTab, setActiveTab] = useState('notes');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notes & Tests</h1>
        <p className="text-muted-foreground">
          Review your study materials and check your progress.
        </p>
      </div>

      <Tabs 
        defaultValue="notes" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="notes" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Notes
          </TabsTrigger>
          <TabsTrigger value="tests" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> Tests
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Lambda Calculus Fundamentals",
                description: "Key concepts and foundational principles",
                date: "Updated 2 days ago",
                tags: ["Theory", "Fundamentals"]
              },
              {
                title: "Type Systems Overview",
                description: "Comparison of static and dynamic typing",
                date: "Updated 1 week ago",
                tags: ["Theory", "Types"]
              },
              {
                title: "Functional Programming Patterns",
                description: "Common patterns and best practices",
                date: "Updated 3 days ago",
                tags: ["Practice", "Patterns"]
              }
            ].map((note, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{note.title}</CardTitle>
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <CardDescription>{note.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex gap-2">
                    {note.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                  {note.date}
                </CardFooter>
              </Card>
            ))}

            <Card className="border-dashed hover:border-gray-300 flex flex-col items-center justify-center p-6 hover-lift cursor-pointer">
              <div className="rounded-full bg-gray-100 p-3 mb-3">
                <FileText className="h-6 w-6 text-gray-500" />
              </div>
              <p className="text-lg font-medium">Create New Note</p>
              <p className="text-sm text-gray-500 text-center">
                Add a new study note or concept explanation
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tests" className="space-y-6">
          <Card className="bg-[hsl(var(--test-card)/30)] border-none">
            <CardHeader>
              <CardTitle>Your Test Progress</CardTitle>
              <CardDescription>
                Track your performance across different subjects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Lambda Calculus</span>
                  <span className="text-sm text-muted-foreground">12/15 correct</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Type Theory</span>
                  <span className="text-sm text-muted-foreground">8/10 correct</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Functional Programming</span>
                  <span className="text-sm text-muted-foreground">18/25 correct</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-lg font-medium mb-3">Available Tests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Lambda Calculus Quiz",
                  description: "Test your understanding of basic concepts",
                  questions: 15,
                  time: "30 min",
                  status: "completed",
                  score: "80%"
                },
                {
                  title: "Type Systems Assessment",
                  description: "Evaluate your knowledge of type systems",
                  questions: 10,
                  time: "20 min",
                  status: "completed",
                  score: "80%"
                },
                {
                  title: "Functional Programming Test",
                  description: "Practical applications and patterns",
                  questions: 25,
                  time: "45 min",
                  status: "completed",
                  score: "72%"
                },
                {
                  title: "Advanced Lambda Calculus",
                  description: "Complex concepts and applications",
                  questions: 20,
                  time: "40 min",
                  status: "available",
                  score: null
                }
              ].map((test, index) => (
                <Card key={index} className="hover-lift">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{test.title}</CardTitle>
                    <CardDescription>{test.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        {test.questions} questions
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {test.time}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    {test.status === "completed" ? (
                      <>
                        <div className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="h-4 w-4" />
                          <span>Completed</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart className="h-4 w-4" />
                          <span>{test.score}</span>
                        </div>
                      </>
                    ) : (
                      <Button size="sm" className="bg-[hsl(var(--sidebar))] hover:bg-[hsl(var(--sidebar))/90] w-full">
                        Start Test
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}