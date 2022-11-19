import React from 'react';
import ResourcesCard from '../../components/ResourcesCard';
import ResourcesHeader from '../../components/ResourcesHeader';

function Resources() {
	return (
		<div>
			<ResourcesHeader />
			<div className=" px-7 py-1">
				<ResourcesCard />
			</div>
		</div>
	);
}

export default Resources;
