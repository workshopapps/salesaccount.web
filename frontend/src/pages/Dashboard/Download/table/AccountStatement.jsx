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
	Heading,
} from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Status = ({ tableData }) => {
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
				<Td>{value.Date}</Td>
				<Td>{value.Details}</Td>
				<Td>{value[' Money in '] ? `$ ${value[' Money in ']} ` : ''}</Td>
				<Td>{value[' Money out '] ? `$ ${value[' Money out ']}` : ''}</Td>
			</Tr>
		);
	});

	return (
		<TableContainer>
			<Table size="sm" variant="simple">
				<Thead mb="5" height="65px">
					<Tr bg="#000">
						<Th color="#fff">Date Recieved</Th>
						<Th color="#fff">Details</Th>
						<Th color="#fff">Amount in</Th>
						<Th color="#fff">Amount Out</Th>
					</Tr>
				</Thead>
				<Tbody>{data}</Tbody>
			</Table>
		</TableContainer>
	);
};

export default Status;
