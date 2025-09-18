import { component$ } from "@builder.io/qwik";

export interface RealScoutOfficeListingsWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: number;
  priceMax?: number;
}

export const RealScoutOfficeListingsWidget = component$<RealScoutOfficeListingsWidgetProps>(
  ({
    agentEncodedId,
    sortOrder = "STATUS_AND_SIGNIFICANT_CHANGE",
    listingStatus = "For Sale",
    propertyTypes = "SFR,MF",
    priceMin = 500000,
    priceMax = 600000,
  }) => {
    return (
      <div class="min-h-[400px] bg-gray-50 rounded-lg p-8">
        <realscout-office-listings
          agent-encoded-id={agentEncodedId}
          sort-order={sortOrder}
          listing-status={listingStatus}
          property-types={propertyTypes}
          price-min={priceMin}
          price-max={priceMax}
          class="w-full"
        ></realscout-office-listings>
      </div>
    );
  }
);
