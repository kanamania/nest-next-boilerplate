import {makeStyles} from '@material-ui/core/styles';
import {DeleteButton, EditButton, ShowButton} from 'react-admin';

const useRowActionToolbarStyles = makeStyles({
    toolbar: {
        alignItems: 'center',
        float: 'right',
        marginTop: -1,
        marginBottom: -1,
        display: 'flex'
    },
    icon_action_button: {
    },
});
const ActionColumn = (props: any) => {
    const classes = useRowActionToolbarStyles();
    return (
        <div className={classes.toolbar}>
            <ShowButton label="" record={props.record} className={classes.icon_action_button}/>
            <EditButton label="" record={props.record} className={classes.icon_action_button}/>
            <DeleteButton label="" record={props.record} className={classes.icon_action_button}/>
        </div>
    );
};
export default ActionColumn;