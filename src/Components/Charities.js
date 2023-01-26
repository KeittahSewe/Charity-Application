import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import SearchForm from "./SearchForm";
const ORGANISATIONS_ENDPOINT = new URL(
  "https://api.globalgiving.org/api/public/orgservice/all/organizations/"
);
export default function Charities() {
  const [allOrganisationsUrl, setAllOrganisationsUrl] = useState(
    ORGANISATIONS_ENDPOINT
  ); const [allOrganisations, setAllOrganisations] = useState("");
  // TODO: Use reducer to handle "comorbid" states
  const [isFetched, setIsFetched] = useState(false);
  const [organisationLocation, setOrganisationLocation] = useState("");
  const [organisationCategory, setOrganisationCategory] = useState("active");
  const [hasNext, setHasNext] = useState(false);
  const [nextOrgId, setNextOrgId] = useState(null);
  const fetchAllOrganisations = useCallback(async () => {
    allOrganisationsUrl.searchParams.set(
      "api_key",
      process.env.REACT_APP_API_KEY
    );
    try {
      const response = await axios.get(allOrganisationsUrl, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });