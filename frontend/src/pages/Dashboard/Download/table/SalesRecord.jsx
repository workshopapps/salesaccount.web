import React from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Input,
	FormControl,
	InputGroup,
	InputLeftElement,
	Flex,
	Box,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import {
	TableDropDown,
	// TableDropDownIcon,
	TableSearchBox,
} from '../minicomponents/MiniTableComponents';

// eslint-disable-next-line react/prop-types
const SalesRecord = ({ tableData }) => {
	// eslint-disable-next-line react/prop-types
	const data = tableData?.map((value) => {
		if (value.Matching_details.length) {
			return (
				<Tr height="65px" borderY="8px solid #fff" bg="#B7EDD6">
					{/* <Td>{value.Date}</Td> */}
					<Td>{value.Matching_details[0].Description}</Td>
					<Td>{value.Matching_details[0]['Item Name']}</Td>
					<Td>{value.Matching_details[0]['Item no ']}</Td>
					<Td>$ {value.Matching_details[0].Price}</Td>
				</Tr>
			);
		}
		return (
			<Tr height="65px" borderBottom="8px solid #fff">
				<Td colSpan={4} p={0}>
					<Flex
						border="1px solid #D0D5DD"
						p={2}
						borderRadius="8px"
						gap={2}
						justifyContent="space-between"
					>
						<Box flex={1}>
							<TableSearchBox />
						</Box>
						<Box>
							<TableDropDown />
						</Box>
					</Flex>
				</Td>
			</Tr>
		);
	});

	return (
		<TableContainer>
			<Table size="sm" variant="unstyled">
				<Thead height="65px">
					<Tr bg="#000">
						{/* <Th color="#fff">Date Recieved</Th> */}
						<Th color="#fff">Description</Th>
						<Th color="#fff">Item Name</Th>
						<Th color="#fff">Item Number</Th>
						<Th color="#fff">price</Th>
					</Tr>
				</Thead>
				<Tbody>{data}</Tbody>
			</Table>
		</TableContainer>
	);
};

export default SalesRecord;
