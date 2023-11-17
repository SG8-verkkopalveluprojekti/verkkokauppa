import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

export const Help = () => {
  return (
           
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Usein kysytyt kysymykset</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Asiakaspalautukset</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        
        
        <Accordion.Item eventKey="2">
            <Accordion.Header>Tietosuojaseloste</Accordion.Header>
            <Accordion.Body>
            **Tietosuojaseloste - Kuvitteellinen Nettikauppa**<br/>

Päivitetty viimeksi: 17.11.2023<br/>

Tervetuloa Kuvitteellisen Nettikaupan tietosuojaselosteeseen. Tämä seloste kuvaa, miten keräämme, käytämme ja suojelemme henkilötietojasi.<br/>

**Kerätyt tiedot**<br/>
Keräämme tietoja, joita tarvitsemme tilaustesi käsittelyyn ja toimitukseen. Tämä saattaa sisältää nimesi, osoitteesi, sähköpostiosoitteesi ja maksutiedot.<br/>

**Evästeet**<br/>
Käytämme evästeitä parantaaksemme sivustomme käyttäjäkokemusta. Evästeet ovat pieniä tekstitiedostoja, jotka tallentuvat laitteellesi. Voit hallita evästeasetuksiasi selaimessasi.<br/>

**Miten käytämme tietojasi**<br/>
Käytämme kerättyjä tietoja tilaustesi käsittelyyn, toimitukseen ja asiakaspalveluun. Emme jaa tietojasi kolmansille osapuolille markkinointitarkoituksiin.<br/>

**Tietoturva**<br/>
Suojellaksemme tietojasi käytämme turvallisia tietokantoja ja suojaustoimenpiteitä. Emme tallenna maksukorttitietojasi.<br/>

**Oikeutesi**<br/>
Sinulla on oikeus pyytää kopio tietoistasi, oikaista virheelliset tiedot ja pyytää tietojesi poistamista. Ota meihin yhteyttä +044 000 0000 kysyäksesi lisätietoja.<br/>

**Muutokset tietosuojaselosteeseen**<br/>
Pidätämme oikeuden päivittää tätä tietosuojaselostetta tarvittaessa. Päivitetyt versiot julkaistaan sivustollamme.<br/>

**Yhteydenotto**<br/>
Jos sinulla on kysyttävää tietosuojaselosteestamme, ota meihin yhteyttä osoitteeseen example@example.com.<br/>
Kiitos, että valitsit Kuvitteellisen Nettikaupan!

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );
    }

