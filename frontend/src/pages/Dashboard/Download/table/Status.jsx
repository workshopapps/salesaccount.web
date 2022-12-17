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
} from '@chakra-ui/react';
import check from '../../../../assets/images/DashboardImages/check_circle.png';
import cancel from '../../../../assets/images/DashboardImages/cancel.png';

// eslint-disable-next-line react/prop-types
const AccountStatement = ({ tableData }) => {
	// eslint-disable-next-line react/prop-types
	const data = tableData?.map((value) => {
		const status = value.Matching === 'Yes';
		return (
			<Tr
				height="65px"
				bg={status ? `#B7EDD6` : `#F1AAA5`}
				borderY="8px solid #fff"
				key={value.Date}
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
		<TableContainer >
			<Table size="sm" variant="simple">
				<Thead height="65px">
					<Tr bg="#D1E9FF">
						<Th>Status</Th>
					</Tr>
				</Thead>
				<Tbody>{data}</Tbody>
			</Table>
		</TableContainer>
	);
};

export default AccountStatement;
