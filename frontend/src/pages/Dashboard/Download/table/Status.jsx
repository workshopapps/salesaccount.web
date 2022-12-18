import React from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableContainer,
	Image,
	Box,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import check from '../../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../../assets/images/DashboardImages/cancel.png';

// eslint-disable-next-line react/prop-types
const AccountStatement = ({ tableData }) => {
	// eslint-disable-next-line react/prop-types
	const data = tableData?.map((value, index) => {
		const status = value.Matching === 'Yes';
		return (
			<Tr
				height="65px"
				bg={status ? `#B7EDD6` : `#F1AAA5`}
				borderY="8px solid #fff"
				// eslint-disable-next-line react/no-array-index-key
				key={index}
			>
				{status ? (
					<Td>
						<Image margin="auto" src={check} alt="check" />
					</Td>
				) : (
					<Td>
						<Image margin="auto" src={cancel} alt="cancel" />
					</Td>
				)}
			</Tr>
		);
	});

	return (
		<TableContainer>
			<Table fontSize="xs" size="xs" variant="simple">
				<Thead height="65px">
					<Tr bg="#D1E9FF">
						<Th>
							<Box p={3}>Status</Box>
						</Th>
					</Tr>
				</Thead>
				<Tbody>{data}</Tbody>
			</Table>
		</TableContainer>
	);
};

export default AccountStatement;
