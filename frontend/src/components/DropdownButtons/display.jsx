import React from "react";
import "rsuite/dist/rsuite.min.css";
import { Popover, Whisper, Dropdown, Button } from "rsuite/";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const renderMenu = ({ left, top, className }, ref) => (
		<Popover ref={ref}
			className={className}
			style={{ left, top }} full>
			<Dropdown.Menu title="Display">
				<Dropdown.Item eventKey={1}>
					All
				</Dropdown.Item>
				<Dropdown.Item eventKey={2}>
					Recent Transactions
				</Dropdown.Item>
				<Dropdown.Item eventKey={3}>
					Date
				</Dropdown.Item>
                <Dropdown.Item eventKey={4}>
					Amount
				</Dropdown.Item>
			</Dropdown.Menu>
		</Popover>
	)

export default function DisplayDD() {
	return (
		<div>
			<div>
				<Whisper placement="bottomStart"
					trigger="click" speaker={renderMenu}>
					<Button appearance="primary" >
						Display
                         
                        <ExpandMoreIcon />
					</Button>
				</Whisper>
			</div>
		</div>
	);
}