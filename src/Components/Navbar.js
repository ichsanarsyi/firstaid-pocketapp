import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function BottomAppBar() {
    return (    
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} style={{ backgroundColor:"#0f0100" }}>
            <Toolbar style={{ textAlign:"center" }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/beranda" style={{ color:"#ededed" }} >
                        Beranda
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/tindakan" style={{ color:"#ededed" }}>
                        Daftar Tindakan
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/kontak" style={{ color:"#ededed" }} >
                        Kontak Penting
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 2, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/tentang" style={{ color:"#ededed" }} >
                        Tentang
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Toolbar>
        </AppBar>
    )
}