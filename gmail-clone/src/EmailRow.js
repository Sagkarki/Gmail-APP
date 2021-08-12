import React from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import {IconButton} from "@material-ui/core";
import StartBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlinedIcon";


import './EmailRow.css';


function EmailRow({id, title, subject, description, time, }) {
    return (
        <div className = "emailRow">
            <div className="emailRow_options">
                <Checkbox/>
                <IconButton>
                <StartBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
               
            </div>

            <h3 className="emailRow_title">
                {title}
            </h3>

            <div className="emailRow_message">
                <h4>Subject</h4>
            </div>

            <div className="emailRow_description">
                <EmailRow
                title="First email "
                subject=" Hello everybody! This is my first email."
                description="This is a test"
                />
            </div>
        </div>
    );
}

export default EmailRow
