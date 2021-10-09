import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import "antd/dist/antd.css";
import Ichsan from "./ichsan.jpg";
import Fatma from "./fatma.jpg";

export default class Tentang extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "#360400"}}>
				<AppBar style={{ padding: "10px", marginBottom: "100px", backgroundColor:"#c70d00" }}>
					<Typography style={{ margin: "auto", color: "#ededed", fontWeight: "bold" }}>Tentang Aplikasi</Typography>
				</AppBar>
                <br/><br/><br/>
				<Grid container
                    xs={12}
                    spacing={4}
                    style={{ marginLeft: "auto", marginRight: "auto", color:"#ededed" }}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >                   
                    <Grid item xs={12} style={{ textAlign:"center" }}>
                        <Typography style={{ fontWeight: "bold" }}>
                            Disusun oleh tim
                            <img src="./logoKel8-trans.svg" alt="logo kelompok 8" style={{ marginLeft:"10px", padding:"auto", height:"30px", width:"30px" }} />
                        </Typography>
                    </Grid>
                    <Grid itrm xs={2}></Grid>
                    <Grid item xs={4} style={{ textAlign:"center" }}>
                        <Card style={{ borderRadius:"16px" }}>
                            <CardContent style={{ backgroundColor:"#700101", color:"#ededed" }}>
                                <CardMedia
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                        padding: "auto",
                                        borderRadius: "8px",
                                        height: "120px",
                                        width: "90px"
                                    }}
                                    component="img"
                                    image={Ichsan}
                                />
                                <Typography>Ichsan Arsyi Putra</Typography>
                                <Typography>21120118120029</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign:"center" }}>
                        <Card style={{ borderRadius:"16px" }}>
                            <CardContent style={{ backgroundColor:"#700101", color:"#ededed" }}>
                                <CardMedia
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                        padding: "auto",
                                        borderRadius: "8px",
                                        height: "120px",
                                        width: "90px"
                                    }}
                                    component="img"
                                    image={Fatma}
                                />
                                <Typography>Dwi Nurfatma</Typography>
                                <Typography>21120118120037</Typography>
                            </CardContent>
                        </Card>
                    </Grid> 
                    <Grid itrm xs={2}></Grid>                  
                    <Grid item xs={12} style={{ textAlign:"center" }}>
                        <Typography style={{ fontWeight: "bold" }}>Referensi</Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8} style={{ textAlign:"justify" }}>
                        <Typography>
                            <p>
                                Mulyadi, Asep, Juliati Susilo dan Rina Utami. 2008. Pertolongan Pertama Palang Merah Remaja Tingkat Wira. Jakarta: Palang Merah Indonesia Pusat.
                            </p>
                            <p>
                                PPID Kota Semarang. 2020. Layanan Gawat Darurat Semarang – Call Center 112. Diambil dari  https://ppid.semarangkota.go.id/layanan-gawat-darurat-semarang-call-center-112. (8 Oktober 2021)
                            </p>
                            <p>
                                Sarana, Lita, Juliati Susilo, Alan Darwis, Fuad Pahlevi, Yan Herman, Siswo PS, dan David Sidabutar. 2009. Pedoman Pertolongan Pertama. Jakarta: Markas Pusat Palang Merah Indonesia.
                            </p>
                            <p>
                                Wibisono, Rahmat. 2016. INFO KOTA SEMARANG : Ini Nomor Telepon Penting Kota Semarang. Diambil dari https://www.solopos.com/info-kota-semarang-ini-nomor-telepon-penting-kota-semarang-737289. (8 Oktober 2021)
                            </p>                                
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
				</Grid>                
                <br/><br/><br/>
			</div>
            
		)
	}
}