import Banner from "../src/Banner";
export const Header = (params) => {
  const textoAqui = "Olá Prof.";
  return (
    <>
      <ul>
        <li>LOGO</li>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <Banner text={textoAqui} />
    </>
  );
};
