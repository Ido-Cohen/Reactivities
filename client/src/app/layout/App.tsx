import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();

  // useEffect(() => {
  //   fetch('https://localhost:5001/api/activities')
  //     .then(response => response.json())
  //     .then(data => setActivities(data))
  // }, [])
  // useEffect(() => {
  //   axios.get<Activity[]>('https://localhost:5001/api/activities')
  //     .then(response => setActivities(response.data))
  // }, [])

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find(a => a.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleFormOpen = (id?: string) => {
    if(id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
    // also clear any currently selected activity when the form closes
    // this prevents the details pane from showing after cancelling or
    // creating a new activity (we only want it when the user explicitly
    // selects an item from the list).
    // handleCancelSelectActivity();
  }

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
      <CssBaseline />
      <NavBar openForm={handleFormOpen} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isPending ? <Typography>Loading activities...</Typography> : 
        <ActivityDashboard 
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        />
      }
      </Container>
    </Box>
  )
}

export default App
