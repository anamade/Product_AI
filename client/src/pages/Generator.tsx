import { useState } from 'react';
import type React from 'react';
import Title from '../components/Title';
import UploadZone from '../components/UploadZone';
import { Loader2Icon, RectangleHorizontalIcon, RectangleVerticalIcon, Wand2Icon } from 'lucide-react';
import { PrimaryButton } from '../components/Buttons';

const Generator = () => {
  const [name, setName] = useState('');
  const [ProductName, setProductName] = useState('');
  const [ProductDescription, setProductDescription] = useState('');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [userPrompt, setUserPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'product' | 'model') => {
    const nextFile = e.target.files?.[0] ?? null;

    if (type === 'product') {
      setProductImage(nextFile);
      return;
    }

    setModelImage(nextFile);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClear = (type: 'product' | 'model') => {
    if (type === 'product') {
      setProductImage(null);
      return;
    }

    setModelImage(null);
  };

  const handleGenerate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
      <form className="max-w-4xl mx-auto mb-40" onSubmit={handleGenerate}>
        <Title heading="Create In-Context Image" description="Upload your models and product images to generate stuning PRODUCT AI ,shoet-form videos and social media posts" />

        <div className="flex gap-20 max-sm:flex-col items-start justify-between">
          {/* left col */}
          <div className="flex flex-col w-full sm:max-w-60 gap-8 mt-8 mb-12">
            <UploadZone label="Product Image" file={productImage} onClear={() => setProductImage(null)} onChange={(e) => handleFileChange(e, 'product')} />
            <UploadZone label="Model Image" file={modelImage} onClear={() => setModelImage(null)} onChange={(e) => handleFileChange(e, 'model')} />
          </div>

          {/* right col */}
          <div className="w-full">
            <div className="mb-4 text-gray-300">
              <label htmlFor="name" className="block text-sm mb-4">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name Your Project"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-sm mb-4">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Name Your Product"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none transition-all"
              />
            </div>
            <div className="mb-4 text-gray-300">
              <label htmlFor="productDescription" className="block text-sm mb-4">
                Product Description <span className="text-xs text-violet-400">(Optional)</span>
              </label>
              <textarea
                id="productDescription"
                rows={4}
                value={ProductDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter the description of the product"
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              />
            </div>
            <div className="mb-4 text-gray-300">
              <label className="block text-sm mb-4">Aspec Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon
                  onClick={() => setAspectRatio('9:16')}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                  ring-transparent cursor-pointer ${aspectRatio === '9:16' ? 'ring-violet-500/50 bg-white/10' : ''}`}
                />
                <RectangleHorizontalIcon
                  onClick={() => setAspectRatio('16:9')}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-2
                  ring-transparent cursor-pointer ${aspectRatio === '16:9' ? 'ring-violet-500/50 bg-white/10' : ''}`}
                />
              </div>
            </div>
            <div className="mb-4 text-gray-300">
              <label htmlFor="userPrompt" className="block text-sm mb-4">
                User Prompt <span className="text-xs text-violet-400">(Optional)</span>
              </label>
              <textarea
                id="userPrompt"
                rows={4}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe how you want the naration to be."
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-violet-200/10 focus:border-violet-500/50 outline-none resize-none transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <PrimaryButton
            disabled={isGenerating}
            className="px-10 py-3 rounded-md disabled:
          opacity-70 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <Loader2Icon className="size-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2Icon className="size-5" />
                Generate Image
              </>
            )}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default Generator;
