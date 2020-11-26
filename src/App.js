import React from 'react';
import { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const SHARMS = [
    {
      "charmsName": 'Намистина "Ти - мій Всесвіт"',
      "charmsLink": 'https://static.e-pandora.ua/15344/PNGTRPNT_799242C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Мерехтлива новорічна ялинка"',
      "charmsLink": 'https://static.e-pandora.ua/15329/PNGTRPNT_799226C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Сузір\'я"',
      "charmsLink": 'https://static.e-pandora.ua/15339/PNGTRPNT_799240C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Подарунок любові"',
      "charmsLink": 'https://static.e-pandora.ua/15314/PNGTRPNT_799221C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Блискуча сніжинка"',
      "charmsLink": 'https://static.e-pandora.ua/15319/PNGTRPNT_799222C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Блискуча сніжинка з pavé"',
      "charmsLink": 'https://static.e-pandora.ua/15324/PNGTRPNT_799224C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Зіронька Іза"',
      "charmsLink": 'https://static.e-pandora.ua/15295/PNGTRPNT_799211C00_RGB.png'
    },
    {
      "charmsName": 'Намистина "Санта Клаус, що сидить із подарунком"',
      "charmsLink": 'https://static.e-pandora.ua/15300/PNGTRPNT_799213C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Червононосий олень"',
      "charmsLink": 'https://static.e-pandora.ua/15285/PNGTRPNT_799208C01_RGB.png'
    },
    {
      "charmsName": 'Намистина "Синє небо та блискучі зорі"',
      "charmsLink": 'https://static.e-pandora.ua/15290/PNGTRPNT_799209C01_RGB.png'
    },
  ];


const DEFAULT_BIRTHDAY = '2017-05-24'

function App() {
  const [birthday, setBirthday] = useState(DEFAULT_BIRTHDAY)
    const [sharmIndex, setSharmIndex] = useState(null)
    const [showProgress, setShowProgress] = useState(false)


  const handleBirthdayChange = e => {
    const birthdayDate = e.target.value;
    setBirthday(birthdayDate)
  }

  const handleFindMySharmClick = () => {
      setShowProgress(true);
      setTimeout(() => {
          const [, , day] = birthday.split('-')

          const sharmIndex = day % SHARMS.length;
          console.log('sharmIndex',sharmIndex)
          setSharmIndex(sharmIndex);
          setShowProgress(false);
      }, 3000)

  }

  const handleProgressClose = () => {
      setShowProgress(false);
  }

  const yourBestSharm = sharmIndex !== null && SHARMS[sharmIndex];

  return (
    <main>

      <h2>Your date of birthday:</h2>
        <TextField
            id="date"
            type="date"
            style={{margin: '50px'}}
            defaultValue={DEFAULT_BIRTHDAY}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={handleBirthdayChange}
        />
        <Button variant="outlined" style={{margin: '0 50px'}} size={"large"}  onClick={handleFindMySharmClick}>Find best for me!</Button>
        <Backdrop style={{flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.9)'}} open={showProgress} onClick={handleProgressClose}>
            <CircularProgress size={60} color={'secondary'} />
            <div>
            <h4 style={{color: 'white'}}>Magic is happening...</h4>
            </div>
        </Backdrop>

        {!!yourBestSharm && <div>
            <h2>Here is the best for you: {yourBestSharm.charmsName}</h2>
            <img style={{width: '100%'}} src={yourBestSharm.charmsLink} alt={'This is your best sharm'}/>
        </div>}
    </main>
  );
}


export default App;
