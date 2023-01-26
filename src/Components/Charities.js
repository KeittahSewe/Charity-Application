import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import SearchForm from "./SearchForm";
const ORGANISATIONS_ENDPOINT = new URL(
  "https://api.globalgiving.org/api/public/orgservice/all/organizations/"
);
export default function Charities() {
  const [allOrganisationsUrl, setAllOrganisationsUrl] = useState(
    ORGANISATIONS_ENDPOINT
  );