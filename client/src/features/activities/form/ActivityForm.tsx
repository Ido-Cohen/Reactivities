import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectedActivity: Activity;
    closeForm: () => void;
}

export default function ActivityForm({ selectedActivity: selectedActivity, closeForm }: Props) {
    const { updateActivity, createActivity } = useActivities();
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here\
        const formData = new FormData(event.currentTarget);
        console.log(formData)
        const data: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);

        if (selectedActivity) {
            data.id = selectedActivity.id;
            await updateActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        }
        else {
            await createActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        }
    }

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create Activty
            </Typography>
            <Box component='form' display='flex' flexDirection={'column'} gap={3} onSubmit={handleSubmit}>
                <TextField name="title" label="Title" defaultValue={selectedActivity?.title} />
                <TextField name="description" label="Description" defaultValue={selectedActivity?.description} multiline rows={3} />
                <TextField name="category" label="Category" defaultValue={selectedActivity?.category} />
                <TextField type='date' name="date" 
                defaultValue={selectedActivity?.date
                    ? new Date(selectedActivity.date).toISOString().split('T')[0]
                    : new Date().toISOString().split('T')[0]
                } />
                <TextField name="city" label="City" defaultValue={selectedActivity?.city} />
                <TextField name="venue" label="Venue" defaultValue={selectedActivity?.venue} />
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button color='inherit' onClick={closeForm}>Cancel</Button>
                    <Button 
                        color="success" 
                        variant="contained" 
                        type="submit"
                        loading={updateActivity.isPending || createActivity.isPending ? true : false}
                        >
                            Submit
                            </Button>
                </Box>
            </Box>
        </Paper>
    )
}