import Accordion from 'react-bootstrap/Accordion';
import React from 'react';

export const Help = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Usein kysytyt kysymykset</Accordion.Header>
        <Accordion.Body>
          {/* UKK-sisältö tähän */}
          Kysymys: Miten teen tilauksen?
          <br />
          Vastaus: Voit tehdä tilauksen lisäämällä haluamasi tuotteet ostoskoriin ja seuraamalla maksuprosessia.
          <br />
          Kysymys: Miksi tuotteeni ei toimi?
          <br />
          Vastaus: Tarkista, että olet kytkenyt sen oikein päälle ja muita vianetsintävinkkejä.
          <br />
          Kysymys: Kuinka kauan tuotteella kestää saapua tilauksen jälkeen?
          <br />
          Vastaus: Toimitus-aika on 5-7 työpäivää tilauksesta.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Asiakaspalautukset</Accordion.Header>
        <Accordion.Body>
          {/* Asiakaspalautussisältö tähän */}
          Kysymys: Miten voin palauttaa tuotteeni?
          <br />
          Vastaus: Voit tuoda tuotteen myymälämme huoltopisteelle. Palautettavan tuotteen tulee olla käyttämätön ja alkuperäispakkauksessa. Tuotteilla on 30 päivän palautusoikeus.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Maksutavat</Accordion.Header>
        <Accordion.Body>
          {/* Maksutapa info tähän */}
          Kysymys: Mitkä maksutavat ovat käytettävissä?
          <br />
          Vastaus: Hyväksymme luottokortit ja verkkopankkimaksut
          <br />
          Kysymys: Millä valuutalla voin maksaa?
          <br />
          Vastaus: Hyväksymme eurot ja dollarit(USD).
        </Accordion.Body>
      </Accordion.Item>

      {/* Lisää UKK-osioita tarvittaessa */}
      <Accordion.Item eventKey="3">
        <Accordion.Header>Tietosuojaseloste</Accordion.Header>
        <Accordion.Body>
        **Tietosuojaseloste - Nettikaubba**<br/>

Päivitetty viimeksi: 3.12.2023<br/>

Tervetuloa Nettikaubban tietosuojaselosteeseen. Tämä seloste kuvaa, miten keräämme, käytämme ja suojelemme henkilötietojasi.<br/>

**Kerätyt tiedot**<br/>
Keräämme tilauksen käsittelyyn ja toimitukseen tarvittavat tiedot, kuten nimesi, osoitteesi ja maksutiedot.<br/>

**Evästeet**<br/>
Käytämme evästeitä parantaaksemme sivuston käyttökokemusta. Voit hallita evästeasetuksiasi selaimessasi.<br/>

**Miten käytämme tietojasi**<br/>
Käytämme kerättyjä tietoja tilaustesi käsittelyyn ja toimitukseen. Emme jaa tietojasi kolmansille osapuolille markkinointitarkoituksiin.<br/>

**Tietoturva**<br/>
Tietojasi suojataan turvallisilla tietokannoilla ja suojaustoimenpiteillä. Maksukorttitietoja ei tallenneta.<br/>

**Oikeutesi**<br/>
Sinulla on oikeus pyytää tietojesi kopiota, oikaista virheelliset tiedot ja pyytää tietojesi poistamista. Ota yhteyttä +044 000 0000 kysyäksesi lisätietoja.<br/>

**Muutokset tietosuojaselosteeseen**<br/>
Pidätämme oikeuden päivittää tätä tietosuojaselostetta tarvittaessa. Päivitetyt versiot julkaistaan sivustollamme.<br/>

**Yhteydenotto**<br/>
Jos sinulla on kysyttävää tietosuojaselosteestamme, ota meihin yhteyttä osoitteeseen example@example.com.<br/>
Kiitos, että valitsit Nettikaubban!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

