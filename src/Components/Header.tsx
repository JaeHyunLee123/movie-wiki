import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: whitesmoke;
  width: 100%;
  height: 80px;
  font-size: 12px;
`;

const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.svg`
  width: 50px;
  height: 50px;
  margin-right: 50px;
`;

const Items = styled.ul`
  display: flex;

  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>Home</Item>
          <Item>Tv Shows</Item>
        </Items>
      </Col>
      <Col>
        <button>search</button>
      </Col>
    </Nav>
  );
};

export default Header;
