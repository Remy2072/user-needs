<script>
  import { Anchor } from "$lib";
</script>

<section>
  <header>
    <small>GEORGANISEERDE GASTCOLLEGES</small>
    <h1>We Love Web</h1>
  </header>
  <ul>
    <li>
      <Anchor
        anchorLink={"#"}
        anchorLabel={"Link naar fdnd.nl"}
        anchorText={"Aankomende"}
        backgroundColor={"var(--green)"}
        padding={"8px 25px"}
      ></Anchor>
    </li>
    <li>
      <Anchor
        anchorLink={"#"}
        anchorLabel={"Link naar fdnd.nl"}
        anchorText={"Afgelopen"}
        backgroundColor={"var(--yellow)"}
        padding={"8px 30px"}
      ></Anchor>
    </li>
  </ul>
</section>

<style>
  section {
    position: relative;
    margin-bottom: 4rem;
  }

  section::after {
    content: "";
    width: 100%;
    height: 2px;
    margin-top: 45px;
    background-color: black;
    border-radius: 10px;
    position: absolute;
    bottom: -2rem;
  }

  header {
  }

  header small {
    font-weight: 700;
    font-size: 1rem;
    color: var(--blue);
  }

  header h1 {
    font-size: 40px;
    color: var(--blue);
  }

  ul {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  ul li {
    min-height: 2.5rem;
  }

  @media (min-width: 768px) {
    section {
      margin-top: 100px;
    }

    header {
      width: fit-content;
    }

    header small {
      font-weight: 700;
      font-size: 18px;
    }

    header h1 {
      font-size: 80px;
    }
  }

  @media (min-width: 1024px) {
    section {
      margin-top: 100px;
      display: flex; /* Maakt de section een flex-container */
      justify-content: space-between; /* Verdeelt de ruimte tussen de kinderen */
      align-items: stretch; /* Zorgt ervoor dat de kinderen dezelfde hoogte hebben */
    }

    header {
      min-width: fit-content;
    }

    header small {
      font-weight: 700;
      font-size: 16px;
    }

    header h1 {
      font-size: 64px;
    }

    header,
    ul {
      flex-grow: 1; /* Zorgt ervoor dat de header en ul de beschikbare ruimte opvullen */
    }

    ul {
      position: relative; /* Maakt de ul de referentie voor position:absolute elementen */
      height: auto; /* Houdt de hoogte van de ul gelijk aan de container */
      width: 100%;
    }

    ul li:nth-child(1) {
      position: absolute; /* Positioneert het eerste li element absoluut binnen de ul */
      top: 0; /* Positioneert het eerste li element bovenaan */
      right: 30%; /* Plaatst het eerste li element links */
      width: fit-content; /* Zorgt ervoor dat de breedte van het li element past bij de inhoud */
    }
    ul li:nth-child(2) {
      position: absolute; /* Positioneert het tweede li element absoluut binnen de ul */
      bottom: 0; /* Positioneert het tweede li element onderaan */
      right: 20%; /* Plaatst het tweede li element rechts */
      width: fit-content; /* Zorgt ervoor dat de breedte van het li element past bij de inhoud */
    }
  }

  @media (min-width: 1130px) {
    header small {
      font-weight: 700;
      font-size: 18px;
    }

    header h1 {
      font-size: 80px;
    }
  }
</style>
