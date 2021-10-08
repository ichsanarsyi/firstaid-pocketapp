import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class Tentang extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "#360400"}}>
				<AppBar style={{ padding: "10px", marginBottom: "100px", backgroundColor:"#c70d00" }}>
					<Typography style={{ margin: "auto", color: "#ededed", fontWeight: "bold" }}>Tentang Aplikasi</Typography>
				</AppBar>
                <br/><br/><br/>
				<Grid container
                    md={6}
                    spacing={4}
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                    direction="row"
                    justifyContent="center"
                    alignItems="strech"
                >
                    <Grid item>
                    
                    </Grid>
				</Grid>                
                <br/><br/><br/><br/>
			</div>
            
		)
	}
}