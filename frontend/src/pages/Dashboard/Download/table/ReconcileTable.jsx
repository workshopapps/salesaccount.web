/* eslint-disable react/prop-types */
import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
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
}) => {
	const [newTableLeft, setNewTableLeft] = useState([...tableLeft]);

	return (
		<Flex transform="scale(1)" transformOrigin={0} gap={2} id="pagetodownload">
			<Box width="50%">
				<AccountStatement
					tableLeft={newTableLeft?.slice(0, 7)}
					leftHeaderKeys={leftHeaderKeys}
				/>
			</Box>
			<Box>
				<Status tableData={tableData?.slice(0, 7)} />
			</Box>
			<Box width="50%">
				<SalesRecord
					tableLeft={newTableLeft?.slice(0, 7)}
					setNewTableLeft={setNewTableLeft}
					leftHeaderKeys={leftHeaderKeys}
					tableRight={tableRight?.slice(0, 7)}
					rightHeaderKeys={rightHeaderKeys}
				/>
			</Box>
		</Flex>
	);
};

export default ReconcileTable;
