import React from 'react';

interface ExportButtonProps {
  data: any[];
  fileName: string;
  headers: string[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ data, fileName, headers }) => {
  const handleExport = () => {
    const csvContent =
      headers.join(',') +
      '\n' +
      data
        .map((row) => headers.map((header) => row[header]).join(','))
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleExport}
      className="bg-[#0099ff] hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Export Incoterm
    </button>
  );
};

export default ExportButton;
