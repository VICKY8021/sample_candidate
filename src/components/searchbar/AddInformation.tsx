import { Button } from '@mui/material';
import './AddInformation.scss';
const AddInformation: React.FC = () => {
    return(
        <div className="pan_information">
            <h5>would you like to add the information related to this pan.</h5>
            <Button variant="contained" className="add-btn">Add Information</Button>
        </div>
    )
}
export default AddInformation;