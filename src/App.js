import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";

const SHARMS = [
  {
    charmsName: 'Намистина "Ти - мій Всесвіт"',
    charmsLink: "https://static.e-pandora.ua/15344/PNGTRPNT_799242C01_RGB.png",
    text: "Express your love, we can't read mind...",
  },
  {
    charmsName: 'Намистина "Мерехтлива новорічна ялинка"',
    charmsLink: "https://static.e-pandora.ua/15329/PNGTRPNT_799226C01_RGB.png",
    text: "Save your feelings for someone who cares",
  },
  {
    charmsName: 'Намистина "Сузір\'я"',
    charmsLink: "https://static.e-pandora.ua/15339/PNGTRPNT_799240C01_RGB.png",
    text: "Express your love, we can't read mind...",
  },
  {
    charmsName: 'Намистина "Подарунок любові"',
    charmsLink: "https://static.e-pandora.ua/15314/PNGTRPNT_799221C01_RGB.png",
    text: "Save your feelings for someone who cares",
  },
  {
    charmsName: 'Намистина "Блискуча сніжинка"',
    charmsLink: "https://static.e-pandora.ua/15319/PNGTRPNT_799222C01_RGB.png",
    text: "Express your love, we can't read mind...",
  },
  {
    charmsName: 'Намистина "Блискуча сніжинка з pavé"',
    charmsLink: "https://static.e-pandora.ua/15324/PNGTRPNT_799224C01_RGB.png",
    text: "Save your feelings for someone who cares",
  },
  {
    charmsName: 'Намистина "Зіронька Іза"',
    charmsLink: "https://static.e-pandora.ua/15295/PNGTRPNT_799211C00_RGB.png",
    text: "Express your love, we can't read mind...",
  },
  {
    charmsName: 'Намистина "Санта Клаус, що сидить із подарунком"',
    charmsLink: "https://static.e-pandora.ua/15300/PNGTRPNT_799213C01_RGB.png",
    text: "Save your feelings for someone who cares",
  },
  {
    charmsName: 'Намистина "Червононосий олень"',
    charmsLink: "https://static.e-pandora.ua/15285/PNGTRPNT_799208C01_RGB.png",
    text: "Express your love, we can't read mind...",
  },
  {
    charmsName: 'Намистина "Синє небо та блискучі зорі"',
    charmsLink: "https://static.e-pandora.ua/15290/PNGTRPNT_799209C01_RGB.png",
    text: "Save your feelings for someone who cares",
  },
];

const DEFAULT_BIRTHDAY = "2017-05-24";

let attempt = 0;
const TEBE_PIZDA_ATTEMPT = 3;

function App() {
  const [birthday, setBirthday] = useState(DEFAULT_BIRTHDAY);
  const [sharmIndex, setSharmIndex] = useState(null);
  const [showProgress, setShowProgress] = useState(false);

  const audio = new Audio("./death.mp3");

  const handleBirthdayChange = (e) => {
    const birthdayDate = e.target.value;
    setBirthday(birthdayDate);
  };

  const handleFindMySharmClick = () => {
    attempt++;
    setShowProgress(true);
    setTimeout(() => {
      const [, , day] = birthday.split("-");
      const sharmIndex = day % SHARMS.length;
      setSharmIndex(sharmIndex);
      setShowProgress(false);
    }, 3000);
  };

  const handleProgressClose = () => {
    setShowProgress(false);
  };

  const yourBestSharm = sharmIndex !== null && SHARMS[sharmIndex];

  if (yourBestSharm && attempt === TEBE_PIZDA_ATTEMPT) {
    audio.play();
  }
  return (
    <div>
      <img
        alt={"alt text"}
        style={{ visibility: "hidden", position: "absolute" }}
        src={
          "https://image.winudf.com/v2/image/bmV3c2NyZWFtcy5jb21fc2NyZWVuc2hvdHNfMl82YzJkNTVmMA/screen-2.jpg?fakeurl=1&type=.jpg"
        }
      />

      {yourBestSharm && attempt === TEBE_PIZDA_ATTEMPT ? (
        <img
          alt={"alt text"}
          src={
            "https://image.winudf.com/v2/image/bmV3c2NyZWFtcy5jb21fc2NyZWVuc2hvdHNfMl82YzJkNTVmMA/screen-2.jpg?fakeurl=1&type=.jpg"
          }
        />
      ) : (
        <main>
          {!yourBestSharm && (
            <>
              <div>
                <Fade in timeout={4000}>
                  <img alt={"alt text"} src={"./logo.svg"} />
                </Fade>
              </div>
              <h2 style={{ textTransform: "uppercase", color: "#f3b6c3cf" }}>
                Your date - your sharm!
              </h2>
            </>
          )}
          <TextField
            id="date"
            type="date"
            style={{ margin: "30px 50px" }}
            defaultValue={DEFAULT_BIRTHDAY}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleBirthdayChange}
          />
          <Button
            variant="outlined"
            style={{ margin: "0 50px" }}
            size={"large"}
            onClick={handleFindMySharmClick}
          >
            Find best for me!
          </Button>
          <Backdrop
            style={{
              flexDirection: "column",
              zIndex: 2,
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            }}
            open={showProgress}
            onClick={handleProgressClose}
          >
            <CircularProgress size={60} color={"secondary"} />
            <div>
              <h4 style={{ color: "white" }}>Magic is happening...</h4>
            </div>
          </Backdrop>

          {yourBestSharm && (
            <div>
              <h2 style={{ marginBottom: 0 }}>Here is the best for you:</h2>
              <div>
                <p>{yourBestSharm.charmsName}</p>
                <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  {yourBestSharm.text}
                </p>
              </div>
              <Fade in timeout={3000}>
                <img
                  style={{ width: "100%" }}
                  src={yourBestSharm.charmsLink}
                  alt={"This is your best sharm"}
                />
              </Fade>
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
