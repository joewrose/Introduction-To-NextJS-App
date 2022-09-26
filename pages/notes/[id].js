import React from "react";
import { useRouter } from "next/router";

export default function NoteID() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Note: {id} </h1>;
}
