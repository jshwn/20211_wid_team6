import React from "react";
import { useLocation } from "react-router-dom";

import {
  HomeMobileHeader,
  ListMobileHeader,
  StoreMobileHeader,
  ProductHeader,
  WishlistHeader,
} from "@components/layout/mobileheaders";

const MobileHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const standard = pathname.split("/")[1];
  switch (standard) {
    case "":
      return <HomeMobileHeader />;
    case "florists":
      return <ListMobileHeader />;
    case "stores":
      return <StoreMobileHeader />;
    case "products":
      return <ProductHeader />;
    case "wishlist":
      return <WishlistHeader />;
    default:
      return <div style={{ display: "none" }} />;
  }
};

export default MobileHeader;
