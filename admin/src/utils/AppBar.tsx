import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@mui/material/Typography';

class MyAppBar extends React.Component<any> {
    render() {
        return (
            <AppBar
                sx={{
                    "& .RaAppBar-title": {
                        flex: 1,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    },
                }}
                {...this.props}
            >
                <Typography
                    variant="h6"
                    color="inherit"
                    className="AppTitle"
                    id="react-admin-title"
                />
                <span className="AppTitleSpacer"/>
                <Typography
                    variant="h6"
                    color="inherit"
                    className="AppTitle"
                >Alpha Admin</Typography>
                <div className="RightSide">

                </div>
            </AppBar>
        );
    }
}

export default MyAppBar;