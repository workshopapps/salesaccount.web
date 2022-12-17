import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Status from './Status';

import AccountStatement from './AccountStatement';
import SalesRecord from './SalesRecord';

// eslint-disable-next-line react/prop-types
const ReconcileTable = ({ tableData }) => (
	<Flex transform="scale(1)" transformOrigin={0} gap={2}>
		<Box width="50%">
			<AccountStatement tableData={tableData} />
		</Box>
		<Box>
			<Status tableData={tableData} />
		</Box>
		<Box width="50%">
			<SalesRecord tableData={tableData} />
		</Box>
	</Flex>
);

export default ReconcileTable;
