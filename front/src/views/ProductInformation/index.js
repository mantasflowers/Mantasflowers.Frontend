import React from "react";
import { makeStyles } from "@material-ui/core";

import Page from "../../components/Page";

import ProductInformationCard from "../../components/SingleProduct/ProductInformationCard";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3),
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: theme.palette.background.default,
  },
}));

function Index() {
  const [flower, setFlower] = React.useState({
    title: "Rožė",
    description:
      "pati kokybiškiausia rožė pati kokybiškiausia rožė pati kokybiškiausia rožė pati kokybiškiausia rožė pati kokybiškiausia rožė",
    price: 20,
    image: "/static/images/avatars/avatar_1.png",
  });

  React.useEffect(() => {
    // mes padarysim call'a i back'a, kai kazkas paspaudzia ant tam tikro produkto
    //  mes fronte turesim to produkto id ir mes padarysim call'a kad gautumem visa likusia produkto informacija (ProductInfo)
    // grazins mum produkta
    // setFlower(produktas grazintas)
  }, []);

  const classes = useStyles();
  return (
    <>
      {flower && (
        <Page className={classes.root} title="Produkto informacija">
          {/* ir per propsus perduodam i savo componenta */}
          <ProductInformationCard flower={flower} />
        </Page>
      )}
    </>
  );
}

export default Index;
