import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const DONATION_ENDPOINT = new URL(
  "https://api.globalgiving.org/api/secure/givingservice/donationsclient"
);
export default function Donate() {
  const [donationUrl, setDonationUrl] = useState(DONATION_ENDPOINT);
  const [email, setEmail] = useState();
  const [amount, setAmount] = useState(10);
  const [projectId, setProjectId] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [zip, setZip] = useState();
  const [paymentGateway, setPaymentGateway] = useState("braintree");
  const [paymentGatewayKey, setPaymentGatewayKey] = useState();
  const [paymentGatewayNonce, setPaymentGatewayNonce] = useState();
  const [donationResponse, setDonationResponse] = useState({});
  useEffect(() => {
    donationUrl.searchParams.set("api_key", process.env.REACT_APP_API_KEY);
    donationUrl.searchParams.set(
      "api_token",
      process.env.REACT_APP_ACCESS_TOKEN
    );
  }, []);
  // TODO: Move to reducer
  const handleDonate = useCallback(
    async (event) => {
      event.preventDefault();
      const donationRequestObject = {
        donation: {
          refcode: Math.floor(Math.random() * 100000000),
          transactionId: uuidv4(100),
          email: email,
          amount: amount,
          project: {
            id: projectId,
          },
          signupForGGNewsletter: false,
          signupForCharityNewsletter: false,
          payment_detail: {
            firstname: firstname,
            lastname: lastname,
            address: address,
            address2: address2,
            city: city,
            iso3166CountryCode: country,
            paymentGateway: paymentGateway,
            paymentGatewayKey: paymentGatewayKey,
            paymentGatewayNonce: paymentGatewayNonce,
          },
        },
      };
      try {
        const response = await axios.post(donationUrl, donationRequestObject, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        });
        setDonationResponse(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
        }
      }
    },
    [donationUrl.href]
  );
  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAmountInputChange = (e) => {
    setAmount(e.target.value);
  };
  const handleProjectIdChange = (e) => {
    setProjectId(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleAddress2Change = (e) => {
    setAddress2(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleZipChange = (e) => {
    setZip(e.target.value);
  };
  const handlePaymentGatewayChange = (e) => {
    setPaymentGateway(e.target.value);
  };
  const handlePaymentGatewayKeyChange = (e) => {
    setPaymentGatewayKey(e.target.value);
  };
  const handlePaymentGatewayKeyNonceChange = (e) => {
    setPaymentGatewayNonce(e.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={handleDonate}>
        <label className="form-label" htmlFor="email">Email </label>
        <input
        className="form-control"
          type="email"
          id="email"
          onChange={handleEmailInputChange}
          value={email}
        />
        <label htmlFor="amount">Amount </label>
        <input
         className="form-control"
          type="number"
          id="amount"
          onChange={handleAmountInputChange}
          value={amount}
        />
        <label htmlFor="project-id">Project Id </label>
        <input
         className="form-control"
          type="number"
          id="project-id"
          onChange={handleProjectIdChange}
          value={projectId}
        />
        <label htmlFor="firstname">firstname </label>
        <input
         className="form-control"
          type="text"
          id="firstname"
          onChange={handleFirstNameChange}
          value={firstname}
        />
        <label htmlFor="lastname">lastname </label>
        <input
         className="form-control"
          type="text"
          id="lastname"
          onChange={handleLastNameChange}
          value={lastname}
        />
        <label htmlFor="address">address </label>
        <input
         className="form-control"
          type="text"
          id="address"
          onChange={handleAddressChange}
          value={address}
        />
        <label htmlFor="address2">address2 </label>
        <input
         className="form-control"
          type="text"
          id="address2"
          onChange={handleAddress2Change}
          value={address2}
        />
        <label htmlFor="city">city </label>
        <input className="form-control" type="text" id="city" onChange={handleCityChange} value={city} />
        <label htmlFor="state">state </label>
        <input
          className="form-control"
          type="text"
          id="state"
          onChange={handleStateChange}
          value={state}
        />
        <label htmlFor="iso3166CountryCode">country </label>
        <input
         className="form-control"
          type="text"
          id="iso3166CountryCode"
          onChange={handleCountryChange}
          value={country}
        />
        <label htmlFor="zip">zip </label>
        <input  className="form-control" type="text" id="zip" onChange={handleZipChange} value={zip} />
        <label htmlFor="paymentGateway">paymentGateway </label>
        <input
         className="form-control"
          type="text"
          id="paymentGateway"
          value={paymentGateway}
          onChange={handlePaymentGatewayChange}
        />
        <label htmlFor="paymentGatewayKey">paymentGatewayKey </label>
        <input
         className="form-control"
          type="text"
          id="paymentGatewayKey"
          value={paymentGatewayKey}
          onChange={handlePaymentGatewayKeyChange}
        />
        <label htmlFor="paymentGatewayNonce">paymentGatewayNonce </label>
        <input
         className="form-control "
          type="text"
          id="paymentGatewayNonce"
          value={paymentGatewayNonce}
          onChange={handlePaymentGatewayKeyNonceChange}
        />
        <br></br>
        <button className="btn btn-dark" type="sumbit">Donate</button>
      </form>
    </div>
  );
}