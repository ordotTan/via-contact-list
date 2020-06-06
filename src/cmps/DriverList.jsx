import React from 'react';
import DriverPreview from "./DriverPreview";

export default function DriverList({drivers}) {
	return (
		<div className="driver-list main-container preview-grid-container">
			{drivers.map(driver =>
				<DriverPreview
					key={driver.email+driver.name}
					driver={driver}
				/>
			)}
		</div>
	)
}


