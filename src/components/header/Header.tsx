import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import './Header.scss';

const Header: React.FC = () => {
    return(
        <div className="header_main">
            <AppBar position="static">
                <div>
                    <Toolbar style={{ justifyContent: "space-between" }} className="container">
                        <Typography variant="h5" className="logo">Logo</Typography>
                        <div className="header_rt">
                            <Typography  className="align_right">Welcome Username</Typography>
                            <Button color="inherit" className="logout_btn">Logout</Button>
                        </div>
                    </Toolbar>
                </div>
            </AppBar>
        </div>
    )
}
export default Header;