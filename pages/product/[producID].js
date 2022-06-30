import React from "react";
import { useRouter } from "next/router";
function producID() {
  const router = useRouter();
  const productID = router.query.producID;
  return <div>producID {productID}</div>;
}

export default producID;
