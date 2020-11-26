import React from 'react';
import { useState } from 'react';
import './App.css';

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



function App() {
  const [birthday, setBirthday] = useState(null)
    const [sharmIndex, setSharmIndex] = useState(null)


  const handleBirthdayChange = e => {
    const birthdayDate = e.target.value;
    setBirthday(birthdayDate)
  }

  const handleFindMySharmClick = () => {
      const [, , day] = birthday.split('-')

        const sharmIndex = day % SHARMS.length;
      console.log('sharmIndex',sharmIndex)
      setSharmIndex(sharmIndex);
  }

  const yourBestSharm = sharmIndex !== null && SHARMS[sharmIndex];

  return (
    <main>
      <label for={'birthday'}>Your date of birthday:</label>
      <input id={'birthday'} type="date" onChange={handleBirthdayChange}/>
      <input type={'submit'} value={'Find best for me!'} onClick={handleFindMySharmClick}/>

        {!!yourBestSharm && <div>
            <h2>Here is the best for you: {yourBestSharm.charmsName}</h2>
            <img style={{width: '100%'}} src={yourBestSharm.charmsLink} alt={'This is your best sharm'}/>
        </div>}
    </main>
  );
}


export default App;
