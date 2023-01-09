import Rating from '@mui/material/Rating';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function RatingStars() {
	const theme = createTheme();
	return (
		<ThemeProvider theme={theme}>
			<Rating name="half-rating" defaultValue={4.5} precision={0.5} />
		</ThemeProvider>
	);
}
