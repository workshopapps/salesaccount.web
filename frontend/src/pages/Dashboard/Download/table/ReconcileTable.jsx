/* eslint-disable react/prop-types */
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Status from './Status';

import AccountStatement from './AccountStatement';
import SalesRecord from './SalesRecord';

// eslint-disable-next-line react/prop-types
const ReconcileTable = ({
	tableLeft,
	tableRight,
	tableData,
	leftHeaderKeys,
	rightHeaderKeys,
}) => (
	<Flex transform="scale(1)" transformOrigin={0} gap={2}>
		<Box width="50%">
			<AccountStatement
				tableLeft={tableLeft?.slice(0, 7)}
				leftHeaderKeys={leftHeaderKeys}
			/>
		</Box>
		<Box>
			<Status tableData={tableData?.slice(0, 7)} />
		</Box>
		<Box width="50%">
			<SalesRecord
				tableRight={tableRight?.slice(0, 7)}
				rightHeaderKeys={rightHeaderKeys}
			/>
		</Box>
	</Flex>
);

export default ReconcileTable;
