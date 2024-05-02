import {
        createBrowserRouter,
        createRoutesFromElements,
        RouterProvider,
        Route
      }
         from 'react-router-dom'

import './App.css'
import HomePages from './pages/HomePages';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';


function App() {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };
  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
     <Route index element={<HomePages/>}/>
     <Route path='/jobs' element={<JobsPage/>}/>
     <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
     <Route path='/edit-job/:id' element={<EditJobPage/>}/>
     <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
     <Route path='*' element={<NotFoundPage/>}/>
    </Route>
    
  )
  )

  return (
    <>
    <RouterProvider router={router}/>
 
  


  
    </>
  )
}

export default App;