import styled from "styled-components";
import css from "@styled-system/css";
export const ItemBox = styled.div(
  css({
    fontSize: "base",
    fontWeight: "bold",
    py: 15,
    px: 25,
    borderBottom: `1px solid`,
    borderBottomColor: "#422426",
    backgroundColor: "#d8a56d",
  }),
  {
    display: "flex",
    alignItems: "center",
  }
);
export const Information = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "15px",
});
export const Image = styled.img({
  width: 60,
  height: 60,
  objectFit: "cover",
  margin: "0 15px",
});
export const Name = styled.span(
  css({
    fontWeight: "bold",
    fontSize: 19,
    color: "#422426",
    mb: "0px",
    lineHeight: 1.5,
  })
);
export const Price = styled.span(
  css({
    color: "#422426",
    mt: "10px",
    mb: "10px",
  })
);
export const Weight = styled.span(
  css({
    fontSize: "sm",
    fontWeight: "regular",
    color: "#422426",
    mb: "5px",
  })
);
export const Total = styled.span(
  css({
    color: "text.bold",
    ml: "auto",
  })
);

export const RemoveButton = styled.button({
  padding: "5px",
  border: 0,
  outline: 0,
  marginLeft: "15px",
  cursor: "pointer",
  color: "#422426",
  transition: "all 0.4s ease",
  backgroundColor: "transparent",

  "&:hover": {
    color: "red",
  },
});
