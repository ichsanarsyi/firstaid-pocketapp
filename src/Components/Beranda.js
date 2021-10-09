import Button from '@mui/material/Button';
import { useContext, createContext, useState } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalculateIcon from '@mui/icons-material/Calculate';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
  
const themes = {
  light: {
    text: "terang",
    background: "#ededed",
    color: "#282c34",
    navbarBg: "#700101",
  },
  dark: {
    text: "gelap",
    background: "#360400",
    color: "#ededed",
    navbarBg: "#c70d00",
  },
};

const ThemeContext = createContext();

export default function Beranda() {
    const [valueTheme, setValueTheme] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={valueTheme}>
          <AppBar style={{ padding: "10px", marginBottom: "100px", backgroundColor: valueTheme.navbarBg }}>
            <Typography style={{ margin: "auto", color: "#ededed", fontWeight: "bold" }}>First Aid - Pocket App</Typography>
          </AppBar>
          <div style={{ backgroundColor: valueTheme.background, textAlign:"center", alignItem:"center" }} >
              <br/><br/><br/>
              <Grid container>
                <Grid item xs={12}>
                    <img src="./logo-app.svg" alt="Logo First Aid" style={{ height:"150px", width:"150px" }}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography style={{ color: valueTheme.color, fontSize: 48, fontWeight: "bold" }}>
                        Aplikasi Catatan Pertolongan Pertama
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <label style={{ color: valueTheme.color, fontSize: 18 }}>
                        oleh tim
                    </label>
                    <img src="./logoKel8-trans.svg" alt="Logo kelompok 8" style={{ height:"30px", width:"30px", marginLeft:"10px" }}/>
                </Grid>
              </Grid><br/>
              <Grid container
                xs={12}
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={3}>
                    <Card style={{ borderRadius:"16px" }} sx={{ boxShadow: 3 }} >
                        <CardActionArea href="/tindakan">
                            <CardContent style={{ color: "#ededed", backgroundColor: valueTheme.navbarBg }} >
                              <div>{<LocalHospitalIcon sx={{ height:"20%", width:"20%" }}/>}</div>
                              <div>Daftar Tindakan</div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid> 
                <Grid item xs={3}>
                    <Card style={{ borderRadius:"16px" }}>
                        <CardActionArea href="/kalkulator">
                            <CardContent style={{ color: "#ededed", backgroundColor: valueTheme.navbarBg }} >
                              <div>{<CalculateIcon sx={{ height:"20%", width:"20%" }}/>}</div>
                              <div>Kalkulator First Aid</div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card style={{ borderRadius:"16px" }}>
                        <CardActionArea href="/kontak">
                            <CardContent style={{ color: "#ededed", backgroundColor: valueTheme.navbarBg }} >
                              <div>{<ContactPhoneIcon sx={{ height:"20%", width:"20%" }}/>}</div>
                              <div>Kontak Penting</div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
              </Grid><br/>
              <Grid container>
                <Grid item xs={12}>
                  <Button
                  style={{ color: valueTheme.color, fontWeight: "bold" }}
                  onClick={() =>
                    setValueTheme(
                      valueTheme === themes.light ? themes.dark : themes.light
                    )
                  }>Ganti Tema</Button>  
                </Grid>
                <Grid item xs={12}>
                  <Content />
                </Grid>                  
              </Grid>
              <br/><br/><br/>
          </div>
        </ThemeContext.Provider>
    );
}

function Content(props) {
  const theme = useContext(ThemeContext);
  return (
    <Typography style={{ color: theme.color  }}>
      tema sekarang adalah {theme.text}
    </Typography>
  );
}
