import styled from "@emotion/styled"
import React, { ReactElement, useState } from "react";
import { useRouter }from "next/router"

interface Props {

}

// function TodayActor({ todayActor }) {
//   const router = useRouter();
//   const id = todayActor?.id
//   const actorClick = () => {
//     router.replace({
//       pathname: `detail/${id}`,
//       state: {
//         id: todayActor?.id,
//       },
//     });
//   }
// }