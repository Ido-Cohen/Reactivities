import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}
export default function ActivityDetails({activity: activoty, cancelSelectActivity, openForm}: Props) {
  return (
    <Card sx={{borderRadius: 3}}>
        <CardMedia 
            component='img'
            src={`/images/categoryImages/${activoty.category}.jpg`}
        />
        <CardContent>
            <Typography variant="h5">{activoty.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activoty.date}</Typography>
            <Typography variant="body1">{activoty.description}</Typography>
        </CardContent>
        <CardActions>
            <Button color="primary" onClick={() => openForm(activoty.id)}>Edit</Button>
            <Button color="inherit" onClick={cancelSelectActivity}>Cancel</Button>
        </CardActions>
    </Card>
  )
}