import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import bg from "./bg (2).png";
import CardMedia from "@material-ui/core/CardMedia";
class Kalkulator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      stuff: [
        ["Kapas", 5000],
        ["Kasa", 7000],
        ["Plester", 5000],
        ["Handsaplast", 500],
        ["Kantung Plastik", 6000],
        ["Senter", 25000],
        ["Kain Perban", 50000],
        ["Pita Merah", 8000],
        ["Tambang", 8000],
      ],
      obat: [
        ["Betadine", 17000],
        ["Minyak Kayu Putih", 13000],
        ["Balsem", 7000],
        ["Paracetamol", 4000],
        ["Minyak Tawon", 27000],
        ["CTM", 10000],
        ["Milanta", 5000],
        ["Diapet", 2000],
        ["Dexametason", 15000],
        ["Dettol Antiseptik", 14000],
        ["Dettol Handsinitizer", 10000],
      ],

      menu: {
        menu1: 0,
        menu2: 0,
        menu3: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { menu1, menu2 } = this.state.menu;
    var total = menu1 + menu2;
    this.setState({
      ...this.state.menu,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { menu } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        menu: {
          ...menu,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const { obat, stuff, totalTagihan } = this.state;
    return (
      <>
        <div>
          <div style={{ backgroundColor: "#360400" }}>
            <AppBar
              style={{
                padding: "10px",
                marginBottom: "100px",
                backgroundColor: "#c70d00",
              }}
            >
              <Typography
                style={{ margin: "auto", color: "#ededed", fontWeight: "bold" }}
              >
                Kasir
              </Typography>
            </AppBar>

            <div style={{ height: "75%" }}>
              <div className="cashier-calculator">
                <div>
                  <h2>Daftar Pesanan</h2>
                  <br />
                  <select
                    onChange={this.handleChangeStuff}
                    name="menu1"
                    style={{
                      cursor: "pointer",
                      margin: "20px",
                      padding: "10px",
                      width: "200px",
                      backgroundColor: "#c70d00",
                      color: "white",
                    }}
                  >
                    <option value="0">Peralatan</option>
                    <Fragment>
                      {stuff.map((alat) => {
                        return <option value={alat[1]}>{alat[0]}</option>;
                      })}
                    </Fragment>
                  </select>
                  <br />
                  <select
                    onChange={this.handleChangeStuff}
                    name="menu2"
                    style={{
                      cursor: "pointer",
                      margin: "20px",
                      padding: "10px",
                      width: "200px",
                      backgroundColor: "#c70d00",
                      color: "white",
                    }}
                  >
                    <option value="0">Obat obatan</option>
                    <Fragment>
                      {obat.map((obat) => {
                        return <option value={obat[1]}>{obat[0]}</option>;
                      })}
                    </Fragment>
                  </select>
                  <br />

                  <h5 style={{ color: "white", margin: "20px" }}>
                    Total Belanjaan: Rp {totalTagihan}{" "}
                  </h5>
                </div>
                <h2
                  style={{
                    color: "white",
                    textAlign: "center",
                    flex: "1 0 100%",
                    margin: "auto",
                  }}
                >
                  Silakan Bayar: Rp {totalTagihan}
                </h2>
              </div>
            </div>
            <CardMedia
              style={{
                marginLeft: "1000px",
                alignItems: "left",

                marginTop: "20px",
                marginBottom: "50px",

                borderRadius: "8px",
                width: "400px",
                height: "300px",
              }}
              component="img"
              image={bg}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Kalkulator;
