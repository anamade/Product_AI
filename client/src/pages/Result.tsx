import { useParams, useNavigate } from 'react-router-dom';
import { dummyGenerations } from '../assets/assets';
import { ArrowLeftIcon, CalendarIcon, ImageIcon, PlaySquareIcon, Share2Icon } from 'lucide-react';
import { GhostButton, PrimaryButton } from '../components/Buttons';

const Result = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = dummyGenerations.find((g) => g.id === projectId);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3">Project not found</h2>
          <GhostButton onClick={() => navigate('/my-generations')}>
            <ArrowLeftIcon className="size-4" />
            Back to My Generations
          </GhostButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Back button */}
        <button onClick={() => navigate('/my-generations')} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8">
          <ArrowLeftIcon className="size-4" />
          Back to My Generations
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: media preview */}
          <div>
            <div className={`${project.aspectRatio === '9:16' ? 'aspect-9/16' : 'aspect-video'} relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group`}>
              {project.generatedImage && (
                <img
                  src={project.generatedImage}
                  alt={project.productName}
                  className={`absolute inset-0 w-full h-full object-cover transition duration-500 ${project.generatedVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`}
                />
              )}
              {project.generatedVideo && (
                <video
                  src={project.generatedVideo}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              )}
              {/* Status badges */}
              <div className="absolute left-3 top-3 flex gap-2">
                {project.isGenerating && <span className="text-xs px-2 py-1 bg-yellow-600/30 rounded-full">Generating</span>}
                {project.isPublished && <span className="text-xs px-2 py-1 bg-green-600/30 rounded-full">Published</span>}
              </div>
            </div>

            {/* Uploaded source images */}
            <div className="mt-4 flex gap-3">
              {project.uploadedImages.map((src, i) => (
                <img key={i} src={src} alt={i === 0 ? 'product' : 'model'} className="w-16 h-16 object-cover rounded-lg border border-white/10" />
              ))}
            </div>

            {/* Download / Share actions */}
            <div className="mt-4 flex flex-wrap gap-3">
              {project.generatedImage && (
                <a href={project.generatedImage} download className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <ImageIcon className="size-4" />
                  Download Image
                </a>
              )}
              {project.generatedVideo && (
                <a href={project.generatedVideo} download className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <PlaySquareIcon className="size-4" />
                  Download Video
                </a>
              )}
              {(project.generatedImage || project.generatedVideo) && (
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ url: project.generatedVideo || project.generatedImage, title: project.productName, text: project.productDescription });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >
                  <Share2Icon className="size-4" />
                  Share
                </button>
              )}
            </div>
          </div>

          {/* Right: project details */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">{project.aspectRatio}</span>
                {project.targetLength && <span className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">{project.targetLength}s</span>}
              </div>
              <h1 className="text-3xl font-bold mb-1">{project.productName}</h1>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <CalendarIcon className="size-3" />
                <span>Created: {new Date(project.createdAt).toLocaleString()}</span>
              </div>
            </div>

            {/* Description */}
            {project.productDescription && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Description</p>
                <div className="text-sm text-gray-300 bg-white/3 border border-white/8 p-4 rounded-xl leading-relaxed">
                  {project.productDescription}
                </div>
              </div>
            )}

            {/* User Prompt */}
            {project.userPrompt && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Prompt</p>
                <div className="text-sm text-gray-300 bg-white/3 border border-white/8 p-4 rounded-xl leading-relaxed">
                  {project.userPrompt}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-3 mt-auto">
              <GhostButton className="flex-1 justify-center" onClick={() => navigate('/my-generations')}>
                <ArrowLeftIcon className="size-4" />
                Back
              </GhostButton>
              <PrimaryButton className="flex-1 rounded-md justify-center">
                {project.isPublished ? 'Unpublish' : 'Publish'}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
