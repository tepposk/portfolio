import React, { useState } from 'react';

import { Box, Button, TextField, Typography }
    from "@mui/material";

import ClearIcon from '@mui/icons-material/Clear';
import CreateIcon from '@mui/icons-material/Create';

import github_logo from "../images/github_logo.png";
import linkedin_logo from "../images/linkedin_logo.png";

function Contact() {

    const [formData, setFormData] = useState({
        subject: "",
        email: "",
        phone: "",
        message: "",
    });

    const [message, setMessage] = useState('');

    const change = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setMessage('');
    };

    const sendMessage = async (e) => {

        try {
            console.log("Tässä ei ole vielä oikeaa toiminnallisuutta :(");
            console.log(formData);
            setFormData({
                subject: "",
                email: "",
                phone: "",
                message: "",
            });
            setMessage("Message sent!");
        } catch (error) {
            setFormData({});
            setMessage("Failed to send message.");
        }
        setMessage("Message sent!");
    };

    const empty = (e) => {

        setFormData({
            subject: "",
            email: "",
            phone: "",
            message: "",
        });

        setMessage("");
    }

    return (
        <div className="content">
            <div>
                <p id="contactParagraph">Want to know more about me? Was something left unanswered? Or maybe you just want to say hi! In any case, feel free to contact me with e-mail or through social media. You can also use the contact sheet <span className="hideOnSmall">to the right</span><span className="showOnSmall">below</span> if that’s more up your alley!
                    <br /><br />
                    teppo.saarikoski (at) myy.haaga-helia.fi
                    <br />
                    (+358) 40 012 3456
                    <br />
                    <a href="https://www.github.com" target="_blank" rel="noreferrer">
                        <img src={github_logo} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                        <img src={linkedin_logo} alt="linkedin" />
                    </a>
                </p>
            </div>
            <div id="form">
                <Box component='form' sx={{ "& .MuiTextField-root": { marginBottom: 2 } }}>

                    <TextField label="Subject" name="subject" value={formData.subject}
                        onChange={(e) => change(e)} required fullWidth />

                    <TextField label="E-mail" name="email" size="small" value={formData.email} onChange={(e) => change(e)} required fullWidth />

                    <TextField label="Phone" name="phone" size="small" value={formData.phone} onChange={(e) => change(e)} />

                    <TextField label="Message" name="message" size="medium" value={formData.message} onChange={(e) => change(e)} required fullWidth multiline />

                    <Box sx={{ marginTop: 1, marginLeft: 2 }}>
                        <Button onClick={() => sendMessage()} sx={{ color: "#313131", marginRight: 3, textTransform: "none" }} startIcon={<CreateIcon />}>Send</Button>
                        <Button onClick={(e) => empty(e)} color="secondary" sx={{ color: "#313131", textTransform: "none" }} startIcon={<ClearIcon />}>Clear</Button>
                    </Box>
                </Box>
                <Typography sx={{ marginTop: 3 }}>{message}</Typography>
            </div>
        </div>
    );
}

export default Contact;
