import React from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function DownloadButton({ fileId, fileName }) {
	const downloadFile = async () => {
		const input = document.getElementById(fileId);
		return html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			// eslint-disable-next-line
			const pdf = new jsPDF('portrait', 'px', 'A4');
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const imgProps = pdf.getImageProperties(imgData);
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
			pdf.save(`${fileName}`);
		});
	};

	return (
			<button onClick={downloadFile} type="button" className="button2 w-[30%] lg:w-[15%]	 text-white bg-[#2E90FA]  py-[0.5em] rounded-md">
				Download
			</button>
	);
}

DownloadButton.propTypes = {
	fileId: PropTypes.string.isRequired,
	fileName: PropTypes.string.isRequired,
};

export default DownloadButton;
