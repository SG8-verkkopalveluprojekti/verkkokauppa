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
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Asiakaspalautukset</Accordion.Header>
        <Accordion.Body>
          {/* Asiakaspalautussisältö tähän */}
          Kysymys: Miten voin palauttaa tuotteeni?
          <br />
          Vastaus: . Palautettavan tuotteen tulee olla käyttämätön ja alkuperäispakkauksessa.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Tietosuojaseloste</Accordion.Header>
        <Accordion.Body>
          {/* Tietosuojaselostesivu tähän */}
          **Tietosuojaseloste - Nettikaubba**<br/>

          Päivitetty viimeksi: 3.12.2023<br/>

          Tervetuloa Nettikaubban tietosuojaselosteeseen. Tämä seloste kuvaa, miten keräämme, käytämme ja suojelemme henkilötietojasi.<br/>

          {/* Lisää tietosuojaselosteen sisältöä */}

        </Accordion.Body>
      </Accordion.Item>

      {/* Lisää UKK-osioita tarvittaessa */}
      <Accordion.Item eventKey="3">
        <Accordion.Header>Maksutavat</Accordion.Header>
        <Accordion.Body>
          {/* Maksutapojen UKK-sisältö tähän */}
          Kysymys: Mitkä maksutavat ovat käytettävissä?
          <br />
          Vastaus: Hyväksymme luottokortit ja verkkopankkimaksut
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

//
//            </Accordion.Body>
//          </Accordion.Item>
//        </Accordion>
//      );
//    }

