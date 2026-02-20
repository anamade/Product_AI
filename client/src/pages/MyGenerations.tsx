import { useEffect, useState } from 'react';
import type { Project } from '../types';
import { dummyGenerations } from '../assets/assets';
import { Loader2Icon, Plus } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { PrimaryButton } from '../components/Buttons';

const MyGenerations = () => {
  const [generations, setGenerations] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMyGenerations = async () => {
    setLoading(true);
    setTimeout(() => {
      setGenerations(dummyGenerations);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    fetchMyGenerations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-3">
        <Loader2Icon className="size-8 animate-spin text-indigo-400" />
        <p className="text-gray-400 text-sm">Loading your generations...</p>
      </div>
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 pt-32">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Generations</h1>
          <p className="text-gray-400 text-lg">View and manage all your created content.</p>
        </header>

        {generations.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {generations.map((gen) => (
              <ProjectCard key={gen.id} gen={gen} setGenerations={setGenerations} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="mx-auto mb-6 flex items-center justify-center size-16 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
                <Plus className="size-8 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">No generations yet</h3>
              <p className="text-gray-400 mb-8 max-w-sm">Start creating stunning product photos today. Build your portfolio with AI-powered generations.</p>
              <PrimaryButton onClick={() => (window.location.href = '/generate')}>Create Your First Generation</PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyGenerations;
