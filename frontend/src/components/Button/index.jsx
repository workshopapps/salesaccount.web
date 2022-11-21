import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ path, isPrimary, title }) => (
	<a
		href={path}
		className={`rounded-md py-[10px] px-[18px] cursor-pointer text-[16px] ${
			isPrimary
				? 'bg-[#FFFFFF}] text-[#1570EF] border border-[#1570EF]'
				: 'bg-[#2E90FA] text-white'
		}  `}
	>
		{title}
	</a>
);
export default Button;

Button.propTypes = {
	path: PropTypes.string.isRequired,
	isPrimary: PropTypes.string,
	title: PropTypes.string.isRequired,
};

Button.defaultProps = {
	isPrimary: '',
};
