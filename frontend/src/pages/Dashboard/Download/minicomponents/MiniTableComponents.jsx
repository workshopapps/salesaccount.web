import {
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Button,
	Icon,
	Flex,
} from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';

// eslint-disable-next-line import/prefer-default-export
export const TableSearchBox = () => {
	const a = '';
	return (
		<InputGroup alignItems="center" justifyContent="center">
			<InputLeftElement height="100%" pointerEvents="none">
				<BsSearch size="1rem" />
			</InputLeftElement>
			<Input
				placeholder="Find possible Match"
				_placeholder={{ fontStyle: `italic` }}
				size="sm"
				height="38px"
				type="email"
				borderRadius="8px"
			/>
		</InputGroup>
	);
};

export const TableDropDown = () => {
	const a = '';
	return (
		<Flex gap={10}>
			<Menu>
				<MenuButton
					// width="15rem"
					height="38px"
					bg="transparent"
					border="1px solid #66708530"
					as={Button}
					rightIcon={<BsChevronDown color="#000" />}
					color="#667085"
					fontSize="sm"
					fontWeight="400"
				>
					Select to Match
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem>Create a Copy</MenuItem>
					<MenuItem>Mark as Draft</MenuItem>
					<MenuItem>Delete</MenuItem>
					<MenuItem>Attend a Workshop</MenuItem>
				</MenuList>
			</Menu>
			<Menu>
				<MenuButton>
					<FaEllipsisV />
				</MenuButton>
				<MenuList>
					<MenuItem>Download</MenuItem>
					<MenuItem>Create a Copy</MenuItem>
					<MenuItem>Mark as Draft</MenuItem>
					<MenuItem>Delete</MenuItem>
					<MenuItem>Attend a Workshop</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};

// export const TableDropDownIcon = () => {
// 	const a = '';
// 	return (

// 	);
// };
