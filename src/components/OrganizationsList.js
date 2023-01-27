export default function OrganizationsList({
    organizations,
    locations,
    onSearchByLocation,
    url,
  }) {
    const filteredOrganizations = onSearchByLocation(organizations, locations);
  return filteredOrganizations.map((e) => {
    return (
      <div key={e.id}>
        <Organization organization={e} url={url} />;
      </div>
    );
  });
}
const Organization = ({ organization, url }) => {
    const link = new URL(`${url}${organization.id}`);
    link.searchParams.set("api_key", process.env.REACT_APP_API_KEY);
    return (
      <div key={organization.id}>
         <img src={organization.logoUrl} alt="random"/>
        <span style={{ fontWeight: "bold" }}>
          <a href={link.href}>{organization.name}</a>
        </span>
        <span>{organization.country}</span>
        <span>{organization.city}</span>
        <span>{organization.mission}</span>
      </div>
    );
  };