/* eslint-disable @next/next/no-img-element */
import { formatBytes } from '@/utils/str-operations';
import React from 'react';

type FilePickerProps = {
  label?: string;
  file?: File;
  accept?: string;
  onChange?: (file: File) => void;
  id?: string;
};

const FilePicker = ({ id, file, accept, label, onChange }: FilePickerProps) => {
  const [state, setstate] = React.useState(file || null);

  const onPickFile = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const file = e.target.files[0];
      if (file) {
        setstate(file);
        onChange && onChange(file);
      }
    },
    [onChange]
  );

  return (
    <ul className="my-4 space-y-3">
      <label htmlFor={id}>
        {state ? (
          <li>
            <input
              id={id}
              type="file"
              className="hidden"
              onChange={onPickFile}
              accept={accept}
            />
            <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
              <img src={images[0].image} alt="image" height={28} width={28} />
              <span className="flex-1 ml-3 whitespace-nowrap">File.png</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded  ">
                {formatBytes(state.size)}
              </span>
            </div>
          </li>
        ) : (
          <li>
            <input
              id={id}
              type="file"
              className="hidden"
              onChange={onPickFile}
            />
            <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow ">
              <img src={images[0].image} alt="image" height={28} width={28} />
              <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
            </div>
          </li>
        )}
      </label>
    </ul>
  );
};
export default FilePicker;

const images = [
  {
    image: 'https://img.icons8.com/fluency/128/pdf.png',
    mimeType: ['application/pdf'],
  },
];
