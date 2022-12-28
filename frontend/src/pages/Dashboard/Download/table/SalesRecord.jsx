import React from 'react';
import Select from 'react-select';

import { v4 as uuidv4 } from 'uuid';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Flex,
	Box,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useAuth } from '../../../../Store/Context';

const TableData = ({ tableRight }) => {
	const [tableItems, setTableItems] = React.useState([...tableRight]);

	return tableItems?.map((value, index) => {
		const keys = Object.values(value);

		if (keys[0] !== '') {
			return (
				<Tr
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					fontSize="xs"
					height="65px"
					borderY="8px solid #fff"
					bg="#B7EDD6"
				>
					<Td>
						<Box p={3}>{keys[0]}</Box>
					</Td>
					<Td>
						<Box p={3}>{keys[1]}</Box>
					</Td>
					<Td>
						<Box p={3}>{keys[2]}</Box>
					</Td>
					<Td>
						<Box p={3}>{keys[3]}</Box>
					</Td>
				</Tr>
			);
		}
		const { localData3 } = useAuth();
		const options = [];
		localData3[1].forEach((item) => {
			const label = Object.values(item).join(' | ');
			const valueio = item;

			options.push({
				label,
				value: valueio,
			});
		});

		const styles = {
			option: (provided, state) => ({
				...provided,
				fontWeight: state.isSelected ? 'bold' : 'normal',
				color: 'black',
				backgroundColor: 'white',
				width: '25em',
			}),
			singleValue: (provided, state) => ({
				...provided,
				color: 'black',
				width: '25em',
			}),
		};

		return (
			<Tr key={uuidv4()} height="65px" borderBottom="8px solid #fff">
				<Td colSpan={4} p={0}>
					<Flex
						border="1px solid #D0D5DD"
						p={2}
						borderRadius="8px"
						gap={2}
						justifyContent="space-between"
					>
						<Box className="w-full">
							<Select
								defaultValue={options[0]}
								options={options}
								styles={styles}
								isSearchable
								isClearable
								onChange={(selectedOption) => {
									const newTable = [...tableItems];
									newTable.splice(index, 1, selectedOption.value);

									options.forEach((item, i) => {
										if (item.label === selectedOption.label) {
											delete item[[i]];
										}
									});
									setTableItems(newTable);
								}}
							/>
						</Box>
					</Flex>
				</Td>
			</Tr>
		);
	});
};

// eslint-disable-next-line react/prop-types
const SalesRecord = ({ tableRight, rightHeaderKeys }) => {
	// eslint-disable-next-line react/prop-types
	const headerKeys = rightHeaderKeys.slice(0, 4).map((key, index) => (
		// eslint-disable-next-line react/no-array-index-key
		<Th key={index} color="#fff">
			<Box p={3}>{key}</Box>
		</Th>
	));

	// eslint-disable-next-line react/prop-types

	return (
		<TableContainer>
			<Table fontSize="xs" size="xs" variant="unstyled">
				<Thead height="65px">
					<Tr bg="#000">{headerKeys}</Tr>
				</Thead>
				<Tbody>
					<TableData tableRight={tableRight} />
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default SalesRecord;
