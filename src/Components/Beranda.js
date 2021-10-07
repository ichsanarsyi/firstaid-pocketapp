import './Beranda.css';
import Button from '@mui/material/Button';
import { useContext, createContext, useState } from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
  
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
          <div className="Beranda" style={{ backgroundColor: valueTheme.background}}>
              <Grid container>
                <Grid item md={12}>
                    <Typography style={{ color: valueTheme.color, fontSize: 56, fontWeight: "bold" }}>
                        Aplikasi Catatan Pertolongan Pertama
                    </Typography>
                    <Button style={{ color: valueTheme.color }} href="/tindakan">Ke Daftar Tindakan</Button>
                    <Button style={{ color: valueTheme.color }} href="/kontak">Ke Daftar Kontak</Button>
                </Grid>
                <Grid item md={12} style={{ padding: "50px" }}>
                  <img src="./logoKel8-trans.svg" alt="Logo kelompok 8" height="200px" width="200px"/>
                </Grid>                
                <Grid item md={12}>
                  <Button
                  style={{ color: valueTheme.color, fontWeight: "bold" }}
                  onClick={() =>
                    setValueTheme(
                      valueTheme === themes.light ? themes.dark : themes.light
                    )
                  }>Ganti Tema</Button>  
                </Grid>
                <Grid item md={12}>
                  <Content />
                </Grid>
              </Grid>
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
