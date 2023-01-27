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