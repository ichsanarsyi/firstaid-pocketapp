import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalculateIcon from '@mui/icons-material/Calculate';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';

export default function LabelBottomNavigation() {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
            showLabels
            style={{ backgroundColor:"#ededed" }}
            >
                <BottomNavigationAction
                    sx={{
                        icon: {color: "#ededed"},
                        label: {color: "#ededed"},
                    }}
                    label="Beranda"
                    icon={<HomeIcon />}
                    href="/beranda"
                />
                <BottomNavigationAction
                    label="Tindakan"
                    icon={<LocalHospitalIcon />}
                    href="/tindakan"
                />
                <BottomNavigationAction
                    label="Kalkulator"
                    icon={<CalculateIcon />}
                    href="/kalkulator"
                />
                <BottomNavigationAction
                    label="Kontak"
                    icon={<ContactPhoneIcon />}
                    href="/kontak"
                />
                <BottomNavigationAction
                    label="Tentang"
                    icon={<InfoIcon />}
                    href="/tentang"
                />
            </BottomNavigation>
        </Paper>
    );
}