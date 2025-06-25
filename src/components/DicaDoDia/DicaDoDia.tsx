import styled from "styled-components";

// Simulando uma mudança de tema
let tema: boolean = true;

const StyledDicaDoDia = styled.section`
  // Avaliando se o tema simulado é true (aplica verde) ou false (aplica azul)
  background-color: ${tema ? "#bce8bc" : "lightblue"};
  border-left: 5px solid darkgreen;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;

  h3 {
    margin-top: 0;
    color: darkgreen;
  }

  p {
    color: green;
    font-size: 1.1rem;
  }

  .site-oficial {
    background-color: white;
    text-align: center;
    padding: 0.4rem;

    a {
      text-decoration: none;
      color: darkgreen;
      font-weight: bold;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

export default function DicaDoDia() {
  return (
    <StyledDicaDoDia>
      <h3>Dica do Dia</h3>
      <p>
        Você pode combinar diferentes formas de estilização em um projeto React.
        Neste exemplo, estamos usando <b>styled-components</b>, uma famosa
        biblioteca para CSS In JS.
      </p>
      <p className="site-oficial">
        Site oficial:{" "}
        <a href="https://styled-components.com/" target="_blank">
          Styled Components
        </a>
      </p>
    </StyledDicaDoDia>
  );
}
