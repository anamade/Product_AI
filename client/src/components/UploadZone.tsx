import { useEffect, useMemo } from 'react';
import { UploadIcon, XIcon } from 'lucide-react';
import type { UploadZoneProps } from '../types';

const UploadZone = ({ label, file, onClear, onChange }: UploadZoneProps) => {
  const previewUrl = useMemo(() => {
    if (!file) {
      return null;
    }

    return URL.createObjectURL(file);
  }, [file]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="relative group">
      <div
        className={`relative h-64 rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center bg-white/2 p-6 ${file ? 'border-violet-600/50 bg-violet-500/5' : 'border-white/10 hover:border-violet-500/30 hover:bg-white/5'}`}
      >
        <input type="file" accept="image/*" onChange={onChange} className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" aria-label={label} />

        {file ? (
          <>
            <img src={previewUrl ?? ''} alt="preview" className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <button type="button" onClick={onClear} className="z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-red-500/20 hover:text-red-400">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-black/50 p-3 backdrop-blur-md">
              <p className="truncate text-sm font-medium">{file.name}</p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 transition-transform duration-300 group-hover:scale-110">
              <UploadIcon className="h-8 w-8 text-gray-400 transition-colors group-hover:text-violet-400" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{label}</h3>
            <p className="max-w-[200px] text-center text-sm text-gray-400">Drag & drop or click to upload</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadZone;
