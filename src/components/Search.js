import React from "react";
import OrganizationsList from "./OrganizationsList";
import "./App.css"
export default function SearchForm({
  onSearch,
  onLocationInputChange,
  onCategoryInputChange,
  location,
  category,
  isFetched,
  organizations,
  locations,
  onSearchByLocation,
  url,
}) {
  return (
    <div>
      <form onSubmit={onSearch}>
        <div className="row g-3 align-items-center">
       <div className="col-auto"> <input
          className="form-control"
          type="text"
          placeholder="search in location"
          onChange={onLocationInputChange}
          value={location}
        />
      </div>
        &nbsp;
        <div className="col-auto">
        <select defaultValue={category} onChange={onCategoryInputChange}>
          <option value="active">Active</option>
          <option value="vetted">Vetted</option>
        </select>
        </div>
        &nbsp;
        <div className="col-auto">
        <button
        className="btn btn-dark"
         type="submit">Search</button>
         </div>
         </div>
      </form>
