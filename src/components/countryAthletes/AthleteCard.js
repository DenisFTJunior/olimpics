import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
}));

export default function AthleteCard({ athlete }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="/voidAvatar.png"
                title="Avatar"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {athlete.athlete}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Sport - {athlete.event}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Medal - {athlete.medal}
                    </Typography>
                </CardContent>
            </div>
            
        </Card>
    );
}