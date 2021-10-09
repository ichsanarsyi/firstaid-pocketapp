import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalculateIcon from '@mui/icons-material/Calculate';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';


export default function BottomAppBar() {
    return (    
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} style={{ backgroundColor:"#0f0100" }}>
            <Toolbar style={{ textAlign:"center" }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/beranda" style={{ color:"#ededed" }} startIcon={<HomeIcon/>} >
                        Beranda
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/tindakan" style={{ color:"#ededed" }} startIcon={<LocalHospitalIcon/>} >
                        Tindakan
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/kalkulator" style={{ color:"#ededed" }} startIcon={<CalculateIcon/>} >
                        Kalkulator
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/kontak" style={{ color:"#ededed" }} startIcon={<ContactPhoneIcon/>} >
                        Kontak
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/tentang" style={{ color:"#ededed" }} startIcon={<InfoIcon/>} >
                        Tentang
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Toolbar>
        </AppBar>
    )
}