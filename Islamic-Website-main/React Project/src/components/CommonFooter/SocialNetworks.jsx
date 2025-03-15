import { Box } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function SocialNetworks() {
    return (
        <Box
            component="div"
            sx={{ display: 'flex', mt: 1, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <a href="https://www.facebook.com/ashhar.jamali.792?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                <FacebookRoundedIcon />
            </a>

            <a href="https://www.linkedin.com/in/ashhar-jamali-5322642a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </a>

            <a href="Instagram 
https://www.instagram.com/ashar_jamali/profilecard/?igsh=MXYyOWMzcmZucHFoNQ==


Twitter 
https://x.com/AshharJama?t=TS49z_i9vcKQbPRaq48MAg&s=08


Facebook 
https://www.facebook.com/ashhar.jamali.792?mibextid=ZbWKwL


Linkdin 
https://www.linkedin.com/in/ashhar-jamali-5322642a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app


Wtsp
https://wa.me/918789750226" target="_blank" rel="noreferrer">
                <TelegramIcon />
            </a>

            <a href="https://wa.me/918789750226" target="_blank" rel="noreferrer">
                <GitHubIcon />
            </a>
        </Box>
    )
}
