import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import SearchForm from "./Search.js";
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
      }); // TODO: use reducer to handle all shared state
      setAllOrganisations(response.data.organizations.organization);
      setIsFetched(true);
      if (response.data.organizations.hasNext) {
        setHasNext(true);
        setNextOrgId(response.data.organizations.nextOrgId);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
      }
    }
  }, [allOrganisationsUrl.href]);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    let tempLink;
    if (organisationCategory) {
      tempLink = new URL(`${ORGANISATIONS_ENDPOINT}${organisationCategory}`);
      tempLink.searchParams.set("api_key", process.env.REACT_APP_API_KEY);
    }
    setAllOrganisationsUrl(tempLink);
  };  const handleLocationInputChange = (e) => {
    setOrganisationLocation(e.target.value);
  };
  const handleCategoryInputChange = (e) => {
    setOrganisationCategory(e.target.value);
  };
  const filterOrganisationsByLocation = (list, location = "") => {
    if (location === "") {
      return list;
    } else {
      return list.filter((org) => {
        return org.country.toLowerCase().includes(location.toLowerCase());
      });
    }
  }; const handleFetchNextBatch = (batch) => {
    const nextBatch = new URL(ORGANISATIONS_ENDPOINT);
    nextBatch.searchParams.set("nextOrgId", batch);
    nextBatch.searchParams.set("api_key", process.env.REACT_APP_API_KEY);
    setAllOrganisationsUrl(nextBatch);
  }; useEffect(() => {
    fetchAllOrganisations();
  }, [fetchAllOrganisations]);
  return (
    <div>
      <p className="text-center fs-1">
        <strong>Welcome to Charity-App!</strong>
      </p>
      <div className="text-center">
        <SearchForm
          onSearch={handleSubmitForm}
          onLocationInputChange={handleLocationInputChange}
          onCategoryInputChange={handleCategoryInputChange}
          location={organisationLocation}
          category={organisationCategory}
          isFetched={isFetched}
          organizations={allOrganisations}
          locations={organisationLocation}
          onSearchByLocation={filterOrganisationsByLocation}
          url={
            "https://api.globalgiving.org/api/public/orgservice/organization/"
          } />
          </div>
          <div>
            <br></br>
            <div className="d-grid gap-2 col-6 mx-auto" >
            <button className="btn btn-dark btn-lg  " type="button" onClick={() => handleFetchNextBatch(nextOrgId)}>
              Next Batch
            </button>
            </div>
          </div>
        </div>
      );
    }